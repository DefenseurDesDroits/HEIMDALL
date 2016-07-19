<?php //yeah

//put your include
include_once("CONTACTS_Contacts.php");

/// <reference path="CONTACTS_Contacts.php" />

///[FUNCTION][searchQuery]Function to search the contact
function searchQuery($Args){

    //Our query 
    $sQuery = "";
    //our contact
    $oContact = new Contacts();
    //result array 
    $ary_ = array();

    //recreate the query
    $sQuery = "SELECT DISTINCT " . $oContact->getColumns() . "\r\n" . "FROM " . $oContact->getTable() . "\r\n"  ;

    //add the link between column s and foreign Key
    $sQuery .= "WHERE xxx.Items.Id_Items = xxx.Noeuds.Id_Noeuds AND xxx.Noeuds.Id_Noeuds = xxx.Contacts.Id_Contacts";

    //argument ?
    if($Args["Method"] == "Like" && $Args["Value"] != ""){
        //add the LIKE condition
        //$sQuery .= " AND xxx.Contacts." . $Args["Name"] . " LIKE " . Quotes($Args["Value"] . "%");
        $sQuery .= " AND (xxx.Contacts.nom ILIKE " . Quotes($Args["Value"] . "%");
        $sQuery .= " OR xxx.Contacts.prenom ILIKE " . Quotes($Args["Value"] . "%") . " )";
    }

    //return something to the JS dude !!
    //echo $sQuery;

    //get the array (so ugly way bro !!!)
    $ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", str_replace(".", "", str_replace( explode(", ", $oContact->getTable()) , "", $oContact->getColumns()))), null);

    //push it to the view !!!
    //echo $sQuery . "\r\n" . json_encode($ary_);
    echo json_encode($ary_);

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