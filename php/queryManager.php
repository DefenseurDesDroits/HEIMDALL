<?php //yeah

//put your include
include_once("CONTACTS_Contacts.php");

//define const 
const QUERY_METHOD_LIKE = "Like";

/// <reference path="CONTACTS_Contacts.php" />

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

    //our count
    $nCount = 0;
    //our iterrator
    $nLine = 0;

    //recreate the query
    $sQuery = "SELECT DISTINCT " . $oContact->getColumns() . "\r\n" . "FROM " . $oContact->getTable() . "\r\n"  ;

    //add the link between column s and foreign Key
    //$sQuery .= "WHERE xxx.Items.Id_Items = xxx.Noeuds.Id_Noeuds AND xxx.Noeuds.Id_Noeuds = xxx.Contacts.Id_Contacts";
    $sQuery .= "WHERE " . $oContact->getLinkConditions(true);

    //argument ?
    if($Args["Method"] == "Like" && $Args["Value"] != ""){
        //add the LIKE condition
        //$sQuery .= " AND xxx.Contacts." . $Args["Name"] . " LIKE " . Quotes($Args["Value"] . "%");
        $sQuery .= " AND (xxx.Contacts.nom ILIKE " . Quotes($Args["Value"] . "%");
        $sQuery .= " OR xxx.Contacts.prenom ILIKE " . Quotes($Args["Value"] . "%") . " )";
    }

    /*$oContact->setId_Contacts(1);
    $oContact->loadFromConnection(null);
    echo $oContact->exportToJson();
    return true;*/

    //return something to the JS dude !!
    //echo $sQuery;

    //get the array (so ugly way bro !!!)
    $GLOBALS["oConnection"]->open();
    //$ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", str_replace(".", "", str_replace( explode(", ", $oContact->getTable()) , "", $oContact->getColumns()))), null);
    $ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", $oContact->getColumns()), null);
    $GLOBALS["oConnection"]->close();

    //get the count
    $nCount = count($ary_);
    //start the loop
    while($nLine < $nCount){

        //do it
        $oContact = new Contacts();
        $oContact->loadFromArray($ary_[$nLine], true);
        $ary_Obj[$nLine] = $oContact->exportToArray();
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