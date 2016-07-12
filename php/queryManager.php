<?php //yeah

include_once("CONTACTS_Contacts.php");

///[FUNCTION][searchQuery]Function to search the contact
function searchQuery($Args){

    $ary_sResult = (array) $Args;
    
    $ary_sResult["Mister"] = "Freeze";

    echo json_encode($ary_sResult);

    return true;
}

///[FUNCTION][queryCenter]Function to manage the call from the call of query
function queryCenter(){

    //our post 
    $Action = $_POST["Action"];
    //our argument
    $Arg = $_POST["Args"];

    //
    switch($Action){
        case "contacts_contacts":
            return searchQuery(json_decode($Arg));
        break;
    }

    //return false
    return false;
}

//call the light
queryCenter();

?>