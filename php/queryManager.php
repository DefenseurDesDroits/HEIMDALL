<?php //yeah

//put your include
include_once("CONTACTS_Contacts.php");
include_once("CONTACTS_Organisations.php");

//define const 
const QUERY_METHOD_LIKE = "Like";

/// <reference path="CONTACTS_Contacts.php" />

function createCondition($ary_Column, $sOperator, $sStr, $ary_CorrespondanceSet = null){

    //our code 
    $sCode = "";

    //our count
    $nCount = 0;
    //our iterrator
    $nLine = 0;

    //no correspondance, easyr way
    if($ary_CorrespondanceSet == null){
        $nCount = count($ary_Column);
        while ($nLine < $nCount) {
            if($sCode != "")
                $sCode .= " OR ";
            $sCode .= $ary_Column[$nLine] . " " . $sOperator . " " . Quotes($sStr);
            //next
            $nLine++;
        }
    }
    else{
        $nCount = count($ary_Column);
        while ($nLine < $nCount) {
            //check the existance of the key
            if(array_key_exists($ary_Column[$nLine], $ary_CorrespondanceSet)){
                if($sCode != "")
                    $sCode .= " OR ";
                $sCode .= $ary_CorrespondanceSet[$ary_Column[$nLine]] . " " . $sOperator . " " . Quotes($sStr);
            }
            //next
            $nLine++;
        }
    }

    

    return "(" . $sCode . ")";
}

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

    //coreespondance set 
    $ary_Corres = $oContact->getCorrespondanceArray();
    //push for the fun !
    $ary_Corres += [ "sAPEFonction" => "xxx.contact_infos.fonction" ];

    //recreate the query
    //$sQuery = "SELECT DISTINCT " . $oContact->getColumns() . "\r\n" . "FROM " . $oContact->getTable() . "\r\n"  ;
    $sQuery = "SELECT DISTINCT " . $oContact->getColumns() . ", xxx.contact_infos.fonction, xxx.contact_infos.id_contact_infos" . "\r\n" ;
    $sQuery .= "FROM " . $oContact->getTable() . "\r\n"  ;
    $sQuery .= "LEFT OUTER JOIN xxx.contact_infos ON xxx.contact_infos.id_contacts = xxx.contacts.id_contacts" . "\r\n"  ;

    //add the link between column s and foreign Key
    //$sQuery .= "WHERE xxx.Items.Id_Items = xxx.Noeuds.Id_Noeuds AND xxx.Noeuds.Id_Noeuds = xxx.Contacts.Id_Contacts";
    $sQuery .= "WHERE " . $oContact->getLinkConditions(true);

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
            case 3://transform Contact as user
                
                break;
            case 4://transform Contact as Groups
                
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