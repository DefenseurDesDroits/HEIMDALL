<?php //oh yeah \m/

//include the connection
include_once("../php/connection.php");
//include("../php/connection.php");
//include_once("../php/Potours_Connection_PGSQL.php");


///[FUNCTION][createContactType]Function to create the contract type
function createContactType($oCon){

    //query
    //$sQuery = "INSERT INTO xxx.contact_types(id_contact_types, nom) VALUES (?, ?);";
    $sQuery = "INSERT INTO xxx.contact_types(nom) VALUES ('contact');\r\n";
    $sQuery .= "INSERT INTO xxx.contact_types(nom) VALUES ('organisme');";

    //open
    $oCon->open();

    //do da job
    $oCon->insertRequest($sQuery, null);

    //close
    $oCon->close();

}

///[FUNCTION][createCivilites]Function to create the civilities
function createCivilites($oCon){
    //query
    //$sQuery = "INSERT INTO xxx.contact_types(id_contact_types, nom) VALUES (?, ?);";
    $sQuery = "INSERT INTO xxx.civilites(nom, abr) VALUES ('Not Dev', ':o');\r\n";
    $sQuery .= "INSERT INTO xxx.civilites(nom, abr) VALUES ('Monsieur', 'Mr');";
    $sQuery .= "INSERT INTO xxx.civilites(nom, abr) VALUES ('Madame', 'Mme');";

    //open
    $oCon->open();

    //do da job
    $oCon->insertRequest($sQuery, null);

    //close
    $oCon->close();
}

///[FUNCTION][createContacts]Function to create the contract type
function createContacts($oXXX, $oCRM){

    //our query
    $sQuery = "";
    //our number 
    $nID = 0;
    //our count
    $nCount = 0;
    //our iterator
    $nLine = 0;
    //our array 
    $ary_ = array();

    //get the max ID (Worst Best Idea Ever !)*********************
    //the query
    $sQuery = "SELECT MAX(xxx.items.id_items) FROM xxx.items";
    //open
    $oCRM->open();
    //the select query
    $ary_ = $oCRM->selectRequest($sQuery, ["max"], null);
    //close
    $oCRM->close();

    //echo json_encode($ary_);

    //is there any contact type ?
    if(count($ary_) == 0 || array_key_exists("ERROR", $ary_[0])){
        return false;
    }

    echo json_encode($ary_);

    //get the max ID
    $nID = intval($ary_[0]["max"]);

    // increment it !
    $nID++;

    //get the contact from CRM*****************************
    //open it !
    $oCRM->open();
    //create the Query
    $sQuery = "SELECT crm.contacts.id as id, crm.contacts.prenom as prenom, crm.contacts.nom as nom, crm.contacts.civilite_id as civilite_id, crm.contacts.titre_id as titre_id FROM crm.contacts;";
    //do the select query
    $ary_ = $oCRM->selectRequest($sQuery, ["id", "prenom", "nom", "civilite_id", "titre_id"], null);
    //close it !
    $oCRM->close();

    //get the count
    $nCount = count($ary_);
    //open
    echo $oXXX->open();
    //do the loop
    while($nLine < $nCount){

        echo json_encode($ary_[$nLine]);
        //create the queries
        $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 0, current_timestamp);\r\n";
        $sQuery .= "INSERT INTO xxx.noeuds(id_noeuds, id_noeuds_parent) VALUES (" . $nID . ", " . $nID . ");\r\n";
        $sQuery .= "INSERT INTO xxx.contacts(id_contacts, prenom, nom, id_civilites, id_titres, id_contact_types) VALUES (" . $nID . ", ". Quotes($ary_[$nLine]["prenom"]) .", ". Quotes($ary_[$nLine]["nom"]) .", 1, null, 1);\r\n";

        //execute
        $oXXX->insertRequest($sQuery, null);

        //next
        $nID++;
        $nLine++;
    }
    //close
    echo $oXXX->close();

}

///[FUNCTION][doTransfert]function to do transfert
function doTransfert(){

    //crm connection
    $oCRM = new Potours_Connection_PGSQL("192.168.1.183", "crm", "infocom", "07_PVo-DT1G6");
    //xxx connection
    $oXXX = new Potours_Connection_PGSQL("192.168.1.183", "crm", "infocom", "07_PVo-DT1G6");

    //our array for our results 
    $ary_ = array();

    //open it !
    $oXXX->open();

    //String
    $sQuery = "SELECT DISTINCT xxx.contact_types.id_contact_types FROM xxx.contact_types ";
    
    //arraay of result
    $ary_ = $oXXX->selectRequest($sQuery, ["xxx.contact_types.id_contact_types"], null);
    //close
    $oXXX->close();

    //is there any contact type ?
    if(count($ary_) == 0 || array_key_exists("ERROR", $ary_[0])){
        //do  it
        createContactType($oXXX);
        createCivilites($oXXX);
    }

    createContacts($oXXX, $oCRM);

}

doTransfert();

?>