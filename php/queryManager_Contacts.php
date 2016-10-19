<?php //yeah

//put your include
// include_once("CONTACTS_Contacts.php");
// include_once("CONTACTS_Organisations.php");
// include_once("CONTACTS_Users.php");

include_once("queryTools.php");

//define const 
const QUERY_METHOD_LIKE = "Like";
Const HEIMDALL_QM_CONTACTS_Debug = false;
//Const HEIMDALL_QM_CONTACTS_Debug = true;

///[FUNCTION][searchQuery]Function to search the contact
function searchQuery($Args){

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

    //debugging, the desperate way
    if(HEIMDALL_QM_CONTACTS_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Contacts@searchQuery.log", "DEBUG !!!\r\n" );

    //coreespondance set 
    $ary_Corres = $oContact->getCorrespondanceArray();

    //recreate the query
    $sQuery = "SELECT DISTINCT " . $oContact->getColumns() . "\r\n" ;
    $sQuery .= "FROM " . $oContact->getTable() . "\r\n"  ;

    //add the link between column s and foreign Key
    $sQuery .= "WHERE " . $oContact->getLinkConditions(true);

    //add type 
    $sQuery .= "\r\n" . "AND xxx.contacts.id_contact_types = 1";

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
                    case 'IN_LIST':
                        $ary_Obj = (array) $ary_Arg["Names"];
                        if($ary_Arg["Value"] != "")
                            $sQuery .= " AND " . $ary_Obj[0] . " IN(" . $ary_Arg["Value"] . ")";
                        break;
                    case 'NIN_LIST':
                        $ary_Obj = (array) $ary_Arg["Names"];
                        if($ary_Arg["Value"] != "")
                            $sQuery .= " AND " . $ary_Obj[0] . " NOT IN(" . $ary_Arg["Value"] . ")";
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
    
    $sQuery .= "\r\n" . "ORDER BY xxx.contacts.nom, xxx.contacts.prenom";

    //get the array (so ugly way bro !!!)
    $GLOBALS["oConnection"]->open();
    $ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", ($oContact->getColumns() . ", fonction, IdLinks") ), null);
    $GLOBALS["oConnection"]->close();

    //get the count
    $nCount = count($ary_);
    //reinit the iterrator
    $nLine = 0;
    //cool
    $ary_Obj = array();
    //start the loop
    while($nLine < $nCount){

        //do it
        $oContact = new Contacts();
        $oContact->loadFromArray($ary_[$nLine], true);
        $ary_Obj[$nLine] = $oContact->exportToArray();
        
        //Next
        $nLine++;
    }

    //debugging, the desperate way
    if(HEIMDALL_QM_CONTACTS_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Contacts@searchQuery.log", "The Query : \r\n " . $sQuery . "\r\n",  FILE_APPEND );

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

    //Action selector
    switch($Action){
        case "contacts_contacts":
            return searchQuery((array)json_decode($Arg));
        break;
    }

    //Is Star Wars Episode VII a good movie ?
    return false;
}

//call the light
queryCenter();

?>