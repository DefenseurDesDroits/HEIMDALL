<?PHP

//include to dtb connection
include "CONTACTS_Users.php";
//include the class and create a connection
include (dirname(__FILE__) . "/../libphp/ldap/adLDAP.php");

//const for choose the right path 

CONST HEIMDALL_LDAP_ConnectionCase_NopeNope = 0;
CONST HEIMDALL_LDAP_ConnectionCase_LdapNope = 1;
CONST HEIMDALL_LDAP_ConnectionCase_NopeHeimdall = 2;
CONST HEIMDALL_LDAP_ConnectionCase_LdapHeimdall = 4;
CONST HEIMDALL_LDAP_ConnectionCase_ERROR = -1;
CONST HEIMDALL_LDAP_ConnectionCase_ERROR_INSTANCE = -2;
CONST HEIMDALL_LDAP_ConnectionCase_ALL = 7;

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
        $sQuery .= "\r\n" . "AND";
    else
        $sQuery .= "WHERE "

    //on user dude
    $sQuery .= "xxx.users.pseudo =  " . Quotes($sUsr);

	/* Don't forget to override to use $oAgent !!! */
	
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
	
	//Returns
	return $ary_Result;
};

//create group

//create user 

///[FUNCTION][connectionRedirect]Function to determine which case we are
///[PARAMETER][string][$sUsr]our user login
///[PARAMETER][string][$sPwd]our user password
///[RETURNS]array of element
function connectionRedirect($sUser, $sPwd){

    //returned value
    $nValue = HEIMDALL_LDAP_ConnectionCase_ALL;
    //our array of user corresponding to the user name !!!
    $ary_User = array();
    //number of result
    $nCount = 0;
    //our ldap object
    $oLdap = null;

    //get the users 
    $ary_User = UsersgetAllInstanceWith($sUsr);

    //get the count
    $nCount = count($ary_User);

    //check guy !
    if($nCount  == 0)
        $nValue -= (HEIMDALL_LDAP_ConnectionCase_LdapHeimdall + HEIMDALL_LDAP_ConnectionCase_NopeHeimdall);
    elseif($nCount > 1) //Nah ! Impossible
        $nValue = HEIMDALL_LDAP_ConnectionCase_ERROR;
    else
        $nValue -= HEIMDALL_LDAP_ConnectionCase_LdapNope;

    //check the Ldap connection 
    if($nValue == HEIMDALL_LDAP_ConnectionCase_LdapHeimdall + HEIMDALL_LDAP_ConnectionCase_NopeHeimdall){

        try {
		    //init the ldap connection 
            $oLdap = new adLDAP();
        }
        catch (adLDAPException $e) {
            echo $e; 
            //exit();
            return HEIMDALL_LDAP_ConnectionCase_ERROR_INSTANCE;   
        }

        //authenticate the user
		if ($oLdap->authenticate($sUsr, $sPwd)){
			//establish your session and redirect
			session_start();
			$_SESSION["username"] = $sUsr;
            $_SESSION["userinfo"] = $oLdap->user()->info($sUsr);
			//$redir = "Location: https://" . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . "/menu.php";
			//header($redir);
			//exit;
		}
        else
            $nValue -= HEIMDALL_LDAP_ConnectionCase_LdapHeimdall;
    }

    //return the value
    return $nValue;
}

///[FUNCTION][connectionLDAP]Function to connect user to LDAP
///[PARAMETER][string][$sUsr]our user login
///[PARAMETER][string][$sPwd]our user password
///[RETURNS]array of element
function connectionLDAP($sUser, $sPwd){

    //count loop
    $nLine = 0;
    //our value
    $nValue = 0;

    while($nLine < 3){

        //our next value
        $nValue = connectionRedirect($sUser, $sPwd);

        //in function of case 
        switch($nValue){
            case HEIMDALL_LDAP_ConnectionCase_NopeNope:
                //not here
                return false;
                break;
            case HEIMDALL_LDAP_ConnectionCase_LdapNope:
                //create the user and it's group
                break;
            case HEIMDALL_LDAP_ConnectionCase_NopeHeimdall :
                //no more valid user 
                return false;
                break;
            case HEIMDALL_LDAP_ConnectionCase_LdapHeimdall:
                //connected !
                return true;
                break;
            default :
                return false;
                break;
        }

        //next
        $nLine += 1;
    }

    return false;
}

///[FUNCTION][LDAPManager]Function to manage the call to connection from the client
function LDAPManager(){

}

LDAPManager();
?>