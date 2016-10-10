<?php //yeah

//put your include
// include_once("CONTACTS_Contacts.php");
// include_once("CONTACTS_Organisations.php");
// include_once("CONTACTS_Users.php");
// include_once("CONTACTS_Groups.php");
// include_once("Groups_manager_2.php");

include_once("queryTools.php");

//define const 
const QUERY_METHOD_LIKE = "Like";
Const HEIMDALL_QM_Debug = false;
//Const HEIMDALL_QM_Debug = true;

/// <reference path="CONTACTS_Contacts.php" />

// function createCondition($ary_Column, $sOperator, $sStr, $ary_CorrespondanceSet = null){

//     //our code 
//     $sCode = "";

//     //our count
//     $nCount = 0;
//     //our iterrator
//     $nLine = 0;

//     //no correspondance, easyr way
//     if($ary_CorrespondanceSet == null){
//         $nCount = count($ary_Column);
//         while ($nLine < $nCount) {
//             if($sCode != "")
//                 $sCode .= " OR ";
//             $sCode .= $ary_Column[$nLine] . " " . $sOperator . " " . Quotes($sStr);
//             //next
//             $nLine++;
//         }
//     }
//     else{
//         $nCount = count($ary_Column);
//         while ($nLine < $nCount) {
//             //check the existance of the key
//             if(array_key_exists($ary_Column[$nLine], $ary_CorrespondanceSet)){
//                 if($sCode != "")
//                     $sCode .= " OR ";
//                 $sCode .= $ary_CorrespondanceSet[$ary_Column[$nLine]] . " " . $sOperator . " " . Quotes($sStr);
//             }
//             //next
//             $nLine++;
//         }
//     }

    

//     return "(" . $sCode . ")";
// }

// function createRightsCondition($userId){

//     //our query
//     $sQuery = "";

//     //groups of the users
//     $ary_Groups = array();

//     //our group odj 
//     $oGrp = new Groups();

//     //count
//     $nCount = 0;
//     //iterator 
//     $nLine = 0;

//     //get the array !
//     $ary_Groups = groupsOfUser($userId);

//     //Start !
//     $sQuery .= "AND (" . "\r\n";
//     //it's open !!!'
//     $sQuery .= "\t" . "id_accreditations_item = 1 " . "\r\n";
//     //Creator part
//     $sQuery .= "\t" . "OR xxx.Items.id_creator = " . Quotes($userId) . "\r\n";
//     //User part 
//     $sQuery .= "\t" . "OR xxx.Items.id_users_json LIKE " . Quotes("%\"uid\":\"" . $userId . "\"%") . "\r\n";

//     //groups part
//     //get the count
//     $nCount = count($ary_Groups);
//     //the loop
//     while($nLine < $nCount){
//         //reset the obj
//         $oGrp = new Groups();
//         //get the obj
//         $oGrp->loadFromArray($ary_Groups[$nLine]);
//         //write the query !!!
//         $sQuery .= "\t" . "OR xxx.Items.id_groups_json LIKE " . Quotes("%\"gid\":\"" . $oGrp->getId_Items() . "\"%") . "\r\n";
//         //Next 
//         $nLine++;
//     }

//     $sQuery .= ")";

//     return $sQuery;
// }

///[FUNCTION][searchQuery]Function to search the contact
function searchQuery($Args, $userId = 0){

    //Our query 
    $sQuery = "";
    //our contact
    $oContact = new Contacts();
    //result query array 
    $ary_ = array();
    //result array 
    $ary_Obj = array();
    //one arg
    $ary_Arg = array();

    //Position dude
    $nPosition = 0;
    //the method dude
    $sMethod = "";

    //our count
    $nCount = 0;
    //our iterrator
    $nLine = 0;

    //coreespondance set 
    $ary_Corres = $oContact->getCorrespondanceArray();
    //push for the fun !
    $ary_Corres += [ "sAPEFonction" => "xxx.contact_infos.fonction" ];

    //debugging, the desperate way
    if(HEIMDALL_QM_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/queryManager@searchQuery.log", "DEBUG !!!\r\n" );

    //recreate the query
    //$sQuery = "SELECT DISTINCT " . $oContact->getColumns() . "\r\n" . "FROM " . $oContact->getTable() . "\r\n"  ;
    $sQuery = "SELECT DISTINCT " . $oContact->getColumns() . ", xxx.contact_infos.fonction, xxx.contact_infos.id_contact_infos" . "\r\n" ;
    $sQuery .= "FROM " . $oContact->getTable() . "\r\n"  ;
    $sQuery .= "LEFT OUTER JOIN xxx.contact_infos ON xxx.contact_infos.id_contacts = xxx.contacts.id_contacts" . "\r\n"  ;

    //add the link between column s and foreign Key
    //$sQuery .= "WHERE xxx.Items.Id_Items = xxx.Noeuds.Id_Noeuds AND xxx.Noeuds.Id_Noeuds = xxx.Contacts.Id_Contacts";
    $sQuery .= "WHERE " . $oContact->getLinkConditions(true);

    //debugging, the desperate way
    if(HEIMDALL_QM_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/queryManager@searchQuery.log", "The User Id : " . $userId . "\r\n",  FILE_APPEND );

    //right part !!!
    if($userId != 0)
        $sQuery .= "\r\n" . createRightsCondition($userId);

    //get the count
    $nCount = count($Args);
    //reinit the iterrator
    $nLine = 0;
    //loop
    while($nLine < $nCount){
        //do job !!!
        $ary_Arg = (array) $Args[$nLine];
        //don't waste your time if nothing
        if($ary_Arg["Value"] != ""){

            //get the method
            $sMethod = $ary_Arg["Method"];
            //identify the Method
            $nPosition = strpos($sMethod, "COND_");
            if($nPosition === false)
                $nPosition = 0;
            else{
                //get the sub method
                $sMethod = str_replace("COND_", "", $sMethod);
                //Select dude
                switch ($sMethod) {
                    case 'LIKE_SW'://Starts with !!! (and not Star Wars you baka !!!)
                        $sQuery .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", $ary_Arg["Value"] . "%", $ary_Corres );
                        break;
                    case 'LIKE_EW'://Ends with !!!
                        $sQuery .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", "%" . $ary_Arg["Value"], $ary_Corres );
                        break;
                    case 'LIKE_C'://Contains !!!
                        $sQuery .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", "%" . $ary_Arg["Value"] . "%", $ary_Corres );
                        break;
                    default:
                        # code...
                        break;
                }
            }

        }
        
        //next
        $nLine++;
    }
    
    $sQuery .= "\r\n" . "ORDER BY xxx.contacts.nom";

    //get the array (so ugly way bro !!!)
    $GLOBALS["oConnection"]->open();
    $ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", ($oContact->getColumns() . ", fonction, IdLinks") ), null);
    $GLOBALS["oConnection"]->close();

    //get the count
    $nCount = count($ary_);
    //reinit the iterrator
    $nLine = 0;
    //start the loop
    while($nLine < $nCount){

        //do it
        $oContact = new Contacts();
        $oContact->loadFromArray($ary_[$nLine], true);

        //check out the type !!!
        switch ($oContact->getId_Contact_Types()) {
            case "1"://nothing to do :p
            case 1://nothing to do :p
                
                break;
            case "2"://transform Contact as organisation
            case 2://transform Contact as organisation
                $oContact = new Organisations();
                $oContact->loadFromArray($ary_[$nLine], true);
                $oContact->loadFromConnection("");
                break;
            case "3"://transform Contact as user
            case 3://transform Contact as user
                $oContact = new Users();
                $oContact->loadFromArray($ary_[$nLine], true);
                $oContact->loadFromConnection("");
                break;
            case "4"://transform Contact as Groups
			case 4://transform Contact as Groups
                $oContact = new Groups();
				$oContact->loadFromArray($ary_[$nLine], true);
                $oContact->loadFromConnection("");
                break;
            default:
                break;
        }

        $ary_Obj[$nLine] = $oContact->exportToArray();
        //add function for information
        $ary_Obj[$nLine]["fonction"] = $ary_[$nLine]["fonction"];
        $ary_Obj[$nLine]["IdLinks"] = $ary_[$nLine]["IdLinks"];
        //Next
        $nLine++;
    }

    //debugging, the desperate way
    if(HEIMDALL_QM_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/queryManager@searchQuery.log", "The Query : \r\n " . $sQuery . "\r\n",  FILE_APPEND );

    //push it to the view !!!
    echo json_encode($ary_Obj);

    //Happy End
    return True;
}

///[FUNCTION][queryCenter]Function to manage the call from the call of query
function queryCenter(){

    //our post 
    $Action = $_POST["Action"];
    //our argument
    $Arg = $_POST["Args"];

    //our user id 
    $userId = 0;

    if(array_key_exists("Id", $_POST))
        //$userId = intval( $_POST["Id"]);
        $userId = $_POST["Id"];


    //Action selector
    switch($Action){
        case "contacts_contacts":
            return searchQuery((array)json_decode($Arg), $userId);
        break;
    }

    //Is Star Wars Episode VII a good movie ?
    return false;
}

//call the light
queryCenter();

?>