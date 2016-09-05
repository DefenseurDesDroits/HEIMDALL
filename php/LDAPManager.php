<?PHP

//include to dtb connection
include "CONTACTS_Users.php";
//include the class and create a connection
include (dirname(__FILE__) . "/../libphp/ldap/adLDAP.php");
//include the class JWT
include (dirname(__FILE__) . "/../libphp/php-jwt-master/src/BeforeValidException.php");
include (dirname(__FILE__) . "/../libphp/php-jwt-master/src/ExpiredException.php");
include (dirname(__FILE__) . "/../libphp/php-jwt-master/src/SignatureInvalidException.php");
include (dirname(__FILE__) . "/../libphp/php-jwt-master/src/JWT.php");

use Firebase\JWT\JWT;

//const for choose the right path 

CONST HEIMDALL_LDAP_ConnectionCase_NopeNope = 0;
CONST HEIMDALL_LDAP_ConnectionCase_LdapNope = 1;
CONST HEIMDALL_LDAP_ConnectionCase_NopeHeimdall = 2;
CONST HEIMDALL_LDAP_ConnectionCase_LdapHeimdall = 4;
CONST HEIMDALL_LDAP_ConnectionCase_ERROR = -1;
CONST HEIMDALL_LDAP_ConnectionCase_ERROR_INSTANCE = -2;
CONST HEIMDALL_LDAP_ConnectionCase_ALL = 7;

//Const for connection 

CONST HEIMDALL_LDAP_Connection_SEVER_ADR = "192.168.1.16";
CONST HEIMDALL_LDAP_Connection_DOMAIN = "DC=AC,DC=local";
//CONST HEIMDALL_LDAP_Connection_DOMAIN = "OU=DDD,DC=AC,DC=local";

//the key 
CONST HEIMDALL_LDAP_JWT_Key = "Ragnarok";
//Max connection time 
CONST HEIMDALL_LDAP_JWT_DAYS = 2;
CONST HEIMDALL_LDAP_JWT_MAX_PASS = 5;

///[FUNCTION][UsersgetAllInstance]Function to obtain all the Users intance with a pseudo !
///[PARAMETER][string][$sUsr]our user login
///[RETURNS]array of element
function UsersgetAllInstanceWith($sUsr){
	//Our object declaration
	$oUsers = new Users();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oUsers->getColumns() . "\r\n" . "FROM " . $oUsers->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oUsers->getLinkConditions(true);
	//The array we get
	$ary_ = array();
	//The array we throw
	$ary_Result = array();
	//Our count
	$nCount = 0;
	//Our iterrator
	$nLine = 0;
	
	//Add the link
	if($sLinks != "")
		$sQuery .= "WHERE " . $sLinks;
	
    if($sLinks != "")
        $sQuery .= "\r\n" . "AND ";
    else
        $sQuery .= "WHERE ";

    //on user dude
    $sQuery .= "xxx.users.pseudo =  " . Quotes($sUsr);

	/* Don't forget to override to use $oAgent !!! */
    //echo $sQuery;
	
	//Open the query
	$GLOBALS["oConnection"]->open();
	//Get the array
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oUsers->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oUsers = new Users();
		//load the data
		$oUsers->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oUsers;
		//Next
		$nLine++;
	}
	
    //$ary_Result["Query"] = $sQuery;

	//Returns
	return $ary_Result;
};

//create group
function createGroup($oXXX, $sGrp){

    //our query
    $sQuery = "";
    //our number 
    $nID = 0;
    //the id Orga 
    $nIDContact = 0;
    //the id of new contact info contact infos
    $nIDLink = 0;
    //our count
    $nCount = 0;
    //our iterator
    $nLine = 0;
    //our sub count
    $nSubCount = 0;
    //our sub iterrator
    $nSubLine = 0;
    //our array 
    $ary_ = array();

    //array to obtain contact info and info 
    $ary_Addr = array();
    //array to obtain the addr for a contact
    $ary_AddrContact = array();

    //get the max ID (Worst Best Idea Ever !)*********************
    //the query
    $sQuery = "SELECT MAX(xxx.items.id_items) FROM xxx.items";
    //open
    $oXXX->open();
    //the select query
    $ary_ = $oCRM->selectRequest($sQuery, ["max"], null);
    //close
    $oXXX->close();

    //echo json_encode($ary_);

    //is there any contact type ?
    if(count($ary_) == 0 || array_key_exists("ERROR", $ary_[0])){
        return -1;
    }

    echo json_encode($ary_);

    //get the max ID
    $nID = intval($ary_[0]["max"]);

    $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
    $sQuery .= "INSERT INTO xxx.noeuds(id_noeuds, id_noeuds_parent) VALUES (" . $nID . ", " . $nID . ");\r\n";
    $sQuery .= "INSERT INTO xxx.contacts(id_contacts, prenom, nom, id_civilites, id_titres, id_contact_types) VALUES (" . $nID . ", '', ". Quotes($ary_[$nLine]["nom"]) .", 1, null, 2);\r\n";
    $sQuery .= "INSERT INTO xxx.groups(id_groups, ugrp_json, fichiers) VALUES (" . $nID . ", '', true);";
    
    //execute
    $oXXX->insertRequest($sQuery, null);
    $nIDContact = $nID;
    $nID++;
    $oXXX->close();

    //return the ID
    return $nIDContact;
}

//create the token 
function createToken($nId, $nCount = HEIMDALL_LDAP_JWT_MAX_PASS){

    //our new date
    $oDate = new DateTime();
    $oDate->modify('+' . HEIMDALL_LDAP_JWT_DAYS . ' day');
    //our token 
    $oToken = array("key" => $nId,
                    "pogs" => $nCount,
                    // "iss" => "http://example.org",
                    // "aud" => "http://example.com",
                    // "iat" => 1356999524,
                    // "nbf" => 1357000000
                    "exp" => $oDate->getTimestamp());

    //encode it !!!
    return JWT::encode($oToken, HEIMDALL_LDAP_JWT_Key);
}

function checkToken($sToken){

    //our result
    $oResult = null;

    try {
        $oResult = JWT::decode($sToken, HEIMDALL_LDAP_JWT_Key, array('HS256'));
    } catch (Exception $e) {
        return array();
    }

    return (array)$oResult;
}

//create user 
function createUser($oXXX, $sUser, $sName, $sFirstname){

    //our query
    $sQuery = "";
    //our number 
    $nID = 0;
    //the id Orga 
    $nIDContact = 0;
    //the id of new contact info contact infos
    $nIDLink = 0;
    //our count
    $nCount = 0;
    //our iterator
    $nLine = 0;
    //our sub count
    $nSubCount = 0;
    //our sub iterrator
    $nSubLine = 0;
    //our array 
    $ary_ = array();

    //array to obtain contact info and info 
    $ary_Addr = array();
    //array to obtain the addr for a contact
    $ary_AddrContact = array();

    //[Line]

    //get the max ID (Worst Best Idea Ever !)*********************
    //the query
    $sQuery = "SELECT MAX(xxx.items.id_items) FROM xxx.items";
    //open
    $oXXX->open();
    //the select query
    $ary_ = $oXXX->selectRequest($sQuery, ["max"], null);
    //close
    $oXXX->close();

    //[Line]

    //echo json_encode($ary_);

    //is there any contact type ?
    if(count($ary_) == 0 || array_key_exists("ERROR", $ary_[0])){
        return -1;
    }

    //[Line]
    //echo json_encode($ary_);

    //get the max ID
    $nID = intval($ary_[0]["max"]);
    $nID++;
    $nIDContact = $nID;

    //[Line]

    $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
    $sQuery .= "INSERT INTO xxx.noeuds(id_noeuds, id_noeuds_parent) VALUES (" . $nID . ", " . $nID . ");\r\n";
    $sQuery .= "INSERT INTO xxx.contacts(id_contacts, prenom, nom, id_civilites, id_titres, id_contact_types) VALUES (" . $nID . ", ". Quotes($sFirstname) .", ". Quotes($sName) .", 1, null, 3);\r\n";
    $sQuery .= "INSERT INTO xxx.users(id_users, pseudo, id_accreditations_exp_json) VALUES (" . $nID . ", " . Quotes($sUser) . ", '');";

    //[Line]

    //open
    $oXXX->open();
    //execute
    $oXXX->insertRequest($sQuery, null);
    $oXXX->close();

    //return the ID
    return $nIDContact;
}

///[FUNCTION][connectionLDAP]Function to connect user to LDAP
///[PARAMETER][string][$sUsr]our user login
///[PARAMETER][string][$sPwd]our user password
///[RETURNS]array of element
function connectionLDAP($sUser, $sPwd){

    //our count
    $nCount = 0;
    //our iterrator
    $nLine = 0;

    //the first name
    $sFirstname = "";
    //the name
    $sName = "";
    //ary
    $ary_PersonaIdentity = array();

    //our ldap object
    $oLdap = null;
    //our infos
    $oInfos = null;
    //our returned value
    $ary_result = ["Status" => "",
                        "Error" => "",
                        "UserId" => "",
                        "Comment" => "",
                        "User" => "",
                        "UserObj" => "",
                        "UserInfo" => "",
                        "Token" => "",
                        "MemberOf" => array() ];
    //our option array 
    $ary_Options = ["base_dn" => HEIMDALL_LDAP_Connection_DOMAIN,
                    'domain_controllers' => array(HEIMDALL_LDAP_Connection_SEVER_ADR),
                    //'account_suffix' => ""];
                    //'account_suffix' => "@ac.local"];
                    'account_suffix' => "@ac.local"];

    $oXXX = $GLOBALS["oConnection"];

    //all users 
    $ary_Users = null;

    try {
        //init the ldap connection 
        //$oLdap = new adLDAP(["base_dn" => HEIMDALL_LDAP_Connection_DOMAIN]);
        $oLdap = new adLDAP($ary_Options);
    }
    catch (adLDAPException $e) {
        //echo $e; 
        $ary_result["Status"] = "LDAP_Failed";
        $ary_result["Error"] = $e;
        //exit();
        return $ary_result;   
    }

    if( $sUser == ""){
        $ary_result["Status"] = "LDAP_Connection_KO_No_User";
        $ary_result["User"] = $sUser;

        return $ary_result;  
    }

    //authenticate the user
    if ($oLdap->authenticate($sUser, $sPwd, true)){
        
        $oInfos = $oLdap->user()->info($sUser);
        //establish your session
        session_start();
        $_SESSION["username"] = $sUser;
        $_SESSION["userinfo"] = $oInfos;
        $ary_result["Status"] = "LDAP_Connection_OK";
        $ary_result["User"] = $sUser;
        $ary_result["UserInfo_displayname"] = $oInfos[0]["displayname"][0];

        //Create a parameter count ?
        //NOT GENIUS !!!
        //-_-#
        $nCount = $oInfos[0]["memberof"]["count"];
        while($nLine < $nCount){
            //add the 
            $ary_result["MemberOf"][$nLine] = $oInfos[0]["memberof"][$nLine];
            //next
            $nLine++;
        }

        //so we are connected !!!
        //Are we in the DTB ?
        $ary_Users = UsersgetAllInstanceWith(strtoupper($sUser));
        if( count($ary_Users) <= 0){
            //get name part
            $sName = $sUser;
            $ary_PersonaIdentity = explode(" ", $ary_result["UserInfo_displayname"]);
            //if we have more than 1 element
            if(count($ary_PersonaIdentity) > 1){
                $sName = $ary_PersonaIdentity[0];
                $sFirstname = str_replace($sName . " ", "",  $ary_result["UserInfo_displayname"]); 
            }

            //creation part
            $ary_result["UserId"] = createUser($oXXX, strtoupper($sUser), $sName, $sFirstname);
            $ary_result["Comment"] = "User added to Heimdall : ";
            $ary_result["Comment"] .= "<br/> User Id : " . $ary_result["UserId"];
            $ary_result["UserInfo_displayname"] = $sFirstname . " " . $sName;
        }
        else{
            $ary_result["UserId"] = $ary_Users[0]->getId_Users();
            $ary_result["UserInfo_displayname"] = $ary_Users[0]->getPrenom() . " " . $ary_Users[0]->getNom();
        }
        $ary_result["Token"] = createToken($ary_result["UserId"]);
        $ary_result["UserObj"] = $ary_Users[0]->exportToArray();
    }
    else{
        $ary_result["Status"] = "LDAP_Connection_KO";
        $ary_result["User"] = $sUser;
    }

    return $ary_result;
}

//Hidden connection YOLO !!!
function connectionLDAPToken($sToken){

    //our result object
    $oToken = array();
    //our user
    $oUsers = new Users();

    //our returned value
    $ary_result = ["Status" => "",
                        "Error" => "",
                        "UserId" => "",
                        "Comment" => "",
                        "User" => "",
                        "UserObj" => "",
                        "UserInfo" => "",
                        "Token" => "",
                        "MemberOf" => array() ];

    //get the token array 
    $oToken = checkToken($sToken);
    
    //check the token !!!!
    if( count($oToken) == 0)//no Token
        return connectionLDAP("", "");//Go there to invoke classic way !!!
    elseif($oToken["pogs"] == 0)//more than X connections without pass by connectionLDAP
        return connectionLDAP("", "");//Go there to invoke classic way !!!
    
    $oUsers->setID_Users(intval( $oToken["key"] ));

    $oUsers->loadFromConnection(null);

    $ary_result["Status"] = "LDAP_Connection_OK";
    $ary_result["User"] = $oUsers->getPseudo();
    $ary_result["UserId"] = $oUsers->getId_Users();
    $ary_result["UserInfo_displayname"] = $oUsers->getPrenom() . " " . $oUsers->getNom();
    $ary_result["Token"] = createToken($ary_result["UserId"], intval($oToken["pogs"] ) - 1);
    $ary_result["UserObj"] = $oUsers->exportToArray();

    return $ary_result;
}

///[FUNCTION][LDAPManager]Function to manage the call to connection from the client
function LDAPManager(){

    //our user 
    $sUsr = "";//get it from $_POST
    //our password 
    $sPwd = "";//get it from $_POST

    //token value
    $sToken = "";

    if(array_key_exists("User", $_POST))
        $sUser = $_POST["User"];
    if(array_key_exists("Pwd", $_POST))
        $sPwd = $_POST["Pwd"];

    if(array_key_exists("Token", $_POST))
        $sToken = $_POST["Token"];


    if($sToken != "")
        echo json_encode(connectionLDAPToken($sToken));
    else
        echo json_encode(connectionLDAP($sUser, $sPwd));

}

LDAPManager();
?>