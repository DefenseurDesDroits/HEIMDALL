<?php //oh yeah \m/

//include the connection
include_once("../php/connection.php");
include_once("../php/Potours_Legacy.php");
include_once("../php/Potours_Data.php");
include_once("../php/Groups_manager_2.php");
//include("../php/connection.php");
//include_once("../php/Potours_Connection_PGSQL.php");


///[FUNCTION][createContactType]Function to create the contract type
function createContactType($oCon){

    //query
    //$sQuery = "INSERT INTO xxx.contact_types(id_contact_types, nom) VALUES (?, ?);";
    $sQuery = "INSERT INTO xxx.contact_types(nom) VALUES ('contact');\r\n";
    $sQuery .= "INSERT INTO xxx.contact_types(nom) VALUES ('organisme');";
    $sQuery .= "INSERT INTO xxx.contact_types(nom) VALUES ('user');";
    $sQuery .= "INSERT INTO xxx.contact_types(nom) VALUES ('Groupe');";

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
    $sQuery = "INSERT INTO xxx.civilites(nom, abr) VALUES ('Not Dev', ':o');\r\n";
    $sQuery .= "INSERT INTO xxx.civilites(nom, abr) VALUES ('Monsieur', 'Mr');\r\n";
    $sQuery .= "INSERT INTO xxx.civilites(nom, abr) VALUES ('Madame', 'Mme');";

    //open
    $oCon->open();

    //do da job
    $oCon->insertRequest($sQuery, null);

    //close
    $oCon->close();
}

///[FUNCTION][createAccreditations]Function to create the accreditations
function createAccreditations($oCon){
    //query
    $sQuery = "INSERT INTO xxx.accreditations(nom, niveau) VALUES ( 'Tous', 0);\r\n";
    $sQuery .= "INSERT INTO xxx.accreditations(nom, niveau) VALUES ( 'Groups', 1);\r\n";
    $sQuery .= "INSERT INTO xxx.accreditations(nom, niveau) VALUES ( 'Confidentiel', 2);";

    //open
    $oCon->open();

    //do da job
    $oCon->insertRequest($sQuery, null);

    //close
    $oCon->close();
}

///[FUNCTION][createAccreditations]Function to create the organisation's types
function createOrganisationType($oCon){
    //query
    $sQuery = "INSERT INTO xxx.organisation_types(nom)  VALUES ('Default');\r\n";

    //open
    $oCon->open();

    //do da job
    $oCon->insertRequest($sQuery, null);

    //close
    $oCon->close();
}

///[FUNCTION][createAccreditations]Function to create the langages
function createLangues($oCon){
    //query
    $sQuery = "INSERT INTO xxx.langues(nom) VALUES ('François');\r\n";
    $sQuery .= "INSERT INTO xxx.langues(nom) VALUES ('Basic Galactic');\r\n";

    //open
    $oCon->open();

    //do da job
    $oCon->insertRequest($sQuery, null);

    //close
    $oCon->close();
}

///[FUNCTION][createAccreditations]Function to create the pays
function createPays($oCon){
    //query
    $sQuery = "INSERT INTO xxx.pays(code, alpha2, alpha3, nom, id_langues_json) VALUES ( 'FRA', 'FR', 'FRA', 'France', '1');\r\n";
    $sQuery .= "INSERT INTO xxx.pays(code, alpha2, alpha3, nom, id_langues_json) VALUES ( 'WIN', 'EP', 'EMP', 'EMPIRE', '2');\r\n";
    $sQuery .= "INSERT INTO xxx.pays(code, alpha2, alpha3, nom, id_langues_json) VALUES ( 'LOL', 'RB', 'REB', 'REBELLION', '2');\r\n";

    //open
    $oCon->open();

    //do da job
    $oCon->insertRequest($sQuery, null);

    //close
    $oCon->close();
}

///[FUNCTION][getContactAddressFromCRM]Function to get the address of the contct in the CRM
function getContactAddressFromCRM($oCRM){
    //our query
    $sQuery = "";

    //the query
    $sQuery = "SELECT crm.contacts.id as owner, crm.contact_info.fonction, crm.infos.id, crm.infos.adr1, crm.infos.adr2, crm.infos.adr3, crm.infos.cp, crm.infos.cedex, crm.infos.ville, crm.infos.pays_id, crm.infos.tel1, crm.infos.tel2,"; 
    $sQuery .= "crm.infos.email1, crm.infos.email2, crm.infos.site" . "\r\n";
    $sQuery .= "FROM crm.infos, crm.contact_info, crm.contacts" . "\r\n";
    $sQuery .= "WHERE crm.infos.id = crm.contact_info.info_id" . "\r\n";
    $sQuery .= "AND crm.contact_info.contact_id = crm.contacts.id" . "\r\n";

    //open
    $oCRM->open();
    //the select query
    $ary_ = $oCRM->selectRequest($sQuery, explode(", ", "owner, fonction, id, adr1, adr2, adr3, cp, cedex, ville, pays_id, tel1, tel2, email1, email2, site"), null);
    //close
    $oCRM->close();

    //return the result
    return $ary_;
}

///[FUNCTION][createTitres]Function to create the titles from CRM DTB
function createTitres($oXXX, $oCRM){

    //our query
    $sQuery = "";
    //our array 
    $ary_ = array();
    //our count
    $nCount = 0;
    //our iterator
    $nLine = 0;

    //get the max ID (Worst Best Idea Ever !)*********************
    //the query
    $sQuery = "SELECT crm.titres.id, crm.titres.nom FROM crm.titres ORDER BY crm.titres.id";
    //open
    $oCRM->open();
    //the select query
    $ary_ = $oCRM->selectRequest($sQuery, ["id_titres", "nom"], null);
    //close
    $oCRM->close();

    //get the count
    $nCount = count($ary_);
    //open
    echo $oXXX->open();
    while($nLine < $nCount){
        //create the query
        $sQuery = "INSERT INTO xxx.titres(nom, rang) VALUES (" . Quotes( $ary_[$nLine]["nom"]) . ", 0)";
        //execute
        $oXXX->insertRequest($sQuery, null);
        //next
        $nLine++;
    }

    //open
    echo $oXXX->close();

    return True;
}

function GroupsgetAllInstanceWith($sName){
    //Our object declaration
	$oGroups = new Groups();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oGroups->getColumns() . "\r\n" . "FROM " . $oGroups->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oGroups->getLinkConditions(true);
	//The array we get
	$ary_ = array();
	//The array we throw
	$ary_Result = array();
	//Our count
	$nCount = 0;
	//Our iterrator
	$nLine = 0;
	
	//Add the link
	// if($sLinks != "")
	// 	$sQuery .= "WHERE " . $sLinks;
	
    $sQuery .= "WHERE " . $sLinks . "\r\n" . "AND xxx.Groups.NomGroupe ILIKE " . Quotes($sName) ;

	/* Don't forget to override to use $oAgent !!! */
	
    //debugging, the desperate way
    // if(HEIMDALL_LDAP_Debug)
    //     file_put_contents(dirname(__FILE__) . "/../logs/test_Import_CRM@GroupsgetAllInstanceWith.log", "\r\n\r\n[New Call]\r\n" . $sQuery,  FILE_APPEND );

	//Open the query
	$GLOBALS["oConnection"]->open();
	//Get the array
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oGroups->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oGroups = new Groups();
		//load the data
		$oGroups->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oGroups;
		//$ary_Result[$nLine] = $oGroups->exportToArray();
		//Next
		$nLine++;
	}
	
    //debugging, the desperate way
    // if(HEIMDALL_LDAP_Debug)
    //     file_put_contents(dirname(__FILE__) . "/../logs/test_Import_CRM@GroupsgetAllInstanceWith.log", "\r\n[Results]\r\n" . $nCount . " line(s) found !!!",  FILE_APPEND );

	//Returns
	return $ary_Result;
}

function createGroups($oXXX, $sCSV){

    //our count of line
    $nCount = 0;
    //our iterator for line 
    $nLine = 0;
    //Our count for cell
    $nSize = 0;
    //our iterrator for cells
    $nCell = 0;
    
    //group name 
    $sGrp = "";
    //Pärent name 
    $sParent = "";

    //our group 
    $oGrp = new Groups();
    //Previous group 
    $oPrevious = new Groups();
    //previous Parent
    $oParent = new Groups();

    //array of already existing Groups
    $ary_Groups = null;

    //our CSV File
    $oCSV = new Potours_Data();

    //load the file 
    $oCSV->loadCSV($sCSV, ";");

    //lines and columns
    $nCount = $oCSV->getLineCount();
    //columns
    $nSize = $oCSV->getColumnCount();

    echo("Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;

    //for all line
    while($nLine < $nCount){

        //new group !!!
        $oGrp = new Groups();

        //for each line 
        $nCell = $nSize - 1;
        while($nCell > -1){
            //does we have a group name 
            $sGrp = utf8_encode ($oCSV->getCell($nCell, $nLine, ""));
            //$sGrp = $oCSV->getCell($nCell, $nLine, "");
            if($sGrp != ""){

                //search in old grp made !!!
                $ary_Groups = GroupsgetAllInstanceWith($sGrp);

                //not already here 
                if(count($ary_Groups) <= 0){

                    //set all
                    $oGrp->setId_Noeuds_Parent(1);
                    $oGrp->setId_Accreditations_Item(1);
                    $oGrp->setId_Civilites(1);
                    $oGrp->setId_Titres(1);
                    $oGrp->setId_Contact_Types(4);
                    $oGrp->setId_Creator(1);
                    //set the name 
                    $oGrp->setNom($sGrp);
                    $oGrp->setNomGroupe($sGrp);
                    //create the Groups
                    $oGrp->save(1);

                    //get the parent name 
                    $sParent = utf8_encode ($oCSV->getCell($nCell - 1, $nLine, ""));
                    //$sParent = $oCSV->getCell($nCell - 1, $nLine, "");
                    //we got a parent 
                    if($sParent != ""){

                        //is the parent the previous ?
                        if($sParent == $oPrevious->getNomGroupe() ){
                            //the parent is the previous
                            $oGrp->setId_Noeuds_Parent(intval($oPrevious->getId_Items()));
                            //previous became parent !!!
                            $oParent = $oPrevious;
                        }
                        elseif( $sParent == $oParent->getNomGroupe() ){ //The parent is the parent !!!
                            //the parent is the previous
                            $oGrp->setId_Noeuds_Parent(intval($oParent->getId_Items()));
                        }
                        else{
                            //own parent
                            $oGrp->setId_Noeuds_Parent(intval($oGrp->getId_Items()));
                        }
                        //load previous !!!
                        $oPrevious = $oGrp;
                    }
                    else{ //No parent
                        //own parent
                        $oGrp->setId_Noeuds_Parent(intval($oGrp->getId_Items()));
                    }

                    //own creator 
                    $oGrp->setId_Creator(intval($oGrp->getId_Items()));
                    //set the group owner ... itself Yeah \m/
                    $oGrp->setId_groups_owner(intval($oGrp->getId_Items()));

                    //save it again !!!
                    $oGrp->save($oGrp->getId_Items());                    

                }

                $nCell = -41;
            }

            //next
            $nCell--;
        }

        //Next
        $nLine++;
    }

    // //set the parent !!!
    // $oGrp->setId_Noeuds_Parent(intval($nIdUser));
    // //$oGrp->setId_Noeuds_Parent(intval($nIdParent));
    // $oGrp->setId_Accreditations_Item(1);
    // $oGrp->setId_Civilites(1);
    // $oGrp->setId_Titres(1);
    // $oGrp->setId_Contact_Types(4);

    // //set the name 
    // $oGrp->setNom($sGrp);
    // $oGrp->setNomGroupe($sGrp);

    // //create the Groups
    // $oGrp->save($nIdUser);

    // $oGrp->setId_Creator(intval($oGrp->getId_Items()));

    // //parent :)
    // if($nIdParent != 0)
    //     $oGrp->setId_Noeuds_Parent(intval($nIdParent));
    // else
    //     $oGrp->setId_Noeuds_Parent(intval($oGrp->getId_Items()));

    // //set the group owner ... itself Yeah \m/
    // $oGrp->setId_groups_owner(intval($oGrp->getId_Items()));

    // //save it o yeah !!!!
    // $oGrp->save($nIdUser);
}

///[FUNCTION][createContacts]Function to create the contact
function createContacts($oXXX, $oCRM){

    //our query
    $sQuery = "";
    //our number 
    $nID = 0;
    //the id contact 
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

    //get the adr 
    $ary_Addr = getContactAddressFromCRM($oCRM);

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
        $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
        $sQuery .= "INSERT INTO xxx.noeuds(id_noeuds, id_noeuds_parent) VALUES (" . $nID . ", " . $nID . ");\r\n";
        //$sQuery .= "INSERT INTO xxx.contacts(id_contacts, prenom, nom, id_civilites, id_titres, id_contact_types) VALUES (" . $nID . ", ". Quotes($ary_[$nLine]["prenom"]) .", ". Quotes($ary_[$nLine]["nom"]) .", 1, null, 1);\r\n";
        $sQuery .= "INSERT INTO xxx.contacts(id_contacts, prenom, nom, id_civilites, id_titres, id_contact_types) VALUES (" . $nID . ", ". Quotes($ary_[$nLine]["prenom"]) .", ". Quotes($ary_[$nLine]["nom"]) .", 1, " . $ary_[$nLine]["titre_id"] . ", 1);\r\n";

        //execute
        $oXXX->insertRequest($sQuery, null);
        $nIDContact = $nID;
        $nID++;

        //get the address for a contact
        //$ary_AddrContact = GetLstInPotoursObjArray($ary_Addr, "owner", $nIDContact);
        $ary_AddrContact = GetLstInPotoursObjArray($ary_Addr, "owner", $ary_[$nLine]["id"]);
        //get the sub count !
        $nSubCount = count($ary_AddrContact);
        //reset the sub iterrator
        $nSubLine = 0;
        echo "<br/>" . "Number of address : " . $nSubCount . "<br/>" . "#############"  . "<br/>";
        while($nSubLine < $nSubCount){
            
            //add the contact info
            $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
            $sQuery .= "INSERT INTO xxx.contact_infos(id_contact_infos, id_contacts, fonction, id_langues)VALUES (" . $nID . ", " . $nIDContact . ", " . Quotes($ary_AddrContact[$nSubLine]["fonction"]) . ", 1);";
            
            //execute
            $oXXX->insertRequest($sQuery, null);
            $nIDLink = $nID;
            $nID++;

            //do the query !
            $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
            $sQuery .= "INSERT INTO xxx.infos(id_infos, adr1, adr2, adr3, cp, cedex, ville, telephone1, courriel1, telephone2, courriel2, site, id_pays, id_contact_infos) VALUES (" . $nID .", " . Quotes($ary_AddrContact[$nSubLine]["adr1"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["adr2"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["adr3"]) . ", " . $ary_AddrContact[$nSubLine]["cp"] . ", " . Quotes($ary_AddrContact[$nSubLine]["cedex"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["ville"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["tel1"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["email1"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["tel2"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["email2"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["site"]) . ", 1, " . $nIDLink .");\r\n";

            //execute
            $oXXX->insertRequest($sQuery, null);
            $nIDLink = $nID;
            $nID++;
            //next
            $nSubLine++;
        }

        //next
        $nLine++;
    }
    //close
    echo $oXXX->close();

}

///[FUNCTION][getOrganismAddressFromCRM]Function to get the address of organism in CRM
function getOrganismAddressFromCRM($oCRM){
    //our query
    $sQuery = "";

    //the query
    $sQuery = "SELECT crm.Organismes.id as owner, crm.infos.id, crm.infos.adr1, crm.infos.adr2, crm.infos.adr3, crm.infos.cp, crm.infos.cedex, crm.infos.ville, crm.infos.pays_id, crm.infos.tel1, crm.infos.tel2,"; 
    $sQuery .= "crm.infos.email1, crm.infos.email2, crm.infos.site" . "\r\n";
    $sQuery .= "FROM crm.infos, crm.orga_info, crm.Organismes" . "\r\n";
    $sQuery .= "WHERE crm.infos.id = crm.orga_info.info_id" . "\r\n";
    $sQuery .= "AND crm.orga_info.orga_id = crm.Organismes.id" . "\r\n";

    //open
    $oCRM->open();
    //the select query
    $ary_ = $oCRM->selectRequest($sQuery, explode(", ", "owner, id, adr1, adr2, adr3, cp, cedex, ville, pays_id, tel1, tel2, email1, email2, site"), null);
    //close
    $oCRM->close();

    //return the result
    return $ary_;
}

///[FUNCTION][createOrganisations]Function to create the contract type
function createOrganisations($oXXX, $oCRM){

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

    //get the adr 
    $ary_Addr = getOrganismAddressFromCRM($oCRM);

    //get the contact from CRM*****************************
    //open it !
    $oCRM->open();
    //create the Query
    $sQuery = "SELECT crm.organismes.id, crm.organismes.nom, crm.organismes.accronyme, crm.organismes.partenaire, crm.organismes.type_id FROM crm.organismes";
    //do the select query
    $ary_ = $oCRM->selectRequest($sQuery, ["id", "nom", "acronyme", "partenaire", "type_id"], null);
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
        $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
        $sQuery .= "INSERT INTO xxx.noeuds(id_noeuds, id_noeuds_parent) VALUES (" . $nID . ", " . $nID . ");\r\n";
        $sQuery .= "INSERT INTO xxx.contacts(id_contacts, prenom, nom, id_civilites, id_titres, id_contact_types) VALUES (" . $nID . ", '', ". Quotes($ary_[$nLine]["nom"]) .", 1, null, 2);\r\n";
        $sQuery .= "INSERT INTO xxx.organisations(id_organisations, id_organisation_type, acronyme) VALUES (" . $nID . ", 1, ". Quotes($ary_[$nLine]["acronyme"]) .");\r\n";

        //execute
        $oXXX->insertRequest($sQuery, null);
        $nIDContact = $nID;
        $nID++;

        //get the address for a contact
        $ary_AddrContact = GetLstInPotoursObjArray($ary_Addr, "owner", $nIDContact);
        //get the sub count !
        $nSubCount = count($ary_AddrContact);
        //reset the sub iterrator
        $nSubLine = 0;
        echo "<br/>" . "Number of address : " . $nSubCount . "<br/>" . "#############"  . "<br/>";
        while($nSubLine < $nSubCount){
            
            //add the contact info
            $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
            $sQuery .= "INSERT INTO xxx.contact_infos(id_contact_infos, id_contacts, fonction, id_langues)VALUES (" . $nID . ", " . $nIDContact . ", " . "''" . ", 1);";
            
            //execute
            $oXXX->insertRequest($sQuery, null);
            $nIDLink = $nID;
            $nID++;

            //do the query !
            $sQuery = "INSERT INTO xxx.items(id_groups_owner, id_accreditations_item, modifie) VALUES (0, 1, current_timestamp);\r\n";
            $sQuery .= "INSERT INTO xxx.infos(id_infos, adr1, adr2, adr3, cp, cedex, ville, telephone1, courriel1, telephone2, courriel2, site, id_pays, id_contact_infos) VALUES (" . $nID .", " . Quotes($ary_AddrContact[$nSubLine]["adr1"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["adr2"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["adr3"]) . ", " . $ary_AddrContact[$nSubLine]["cp"] . ", " . Quotes($ary_AddrContact[$nSubLine]["cedex"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["ville"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["tel1"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["email1"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["tel2"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["email2"]) . ", " . Quotes($ary_AddrContact[$nSubLine]["site"]) . ", 1, " . $nIDLink .");\r\n";

            //execute
            $oXXX->insertRequest($sQuery, null);
            $nIDLink = $nID;
            $nID++;
            //next
            $nSubLine++;
        }

        //next
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
        createAccreditations($oXXX);
        createOrganisationType($oXXX);
        createLangues($oXXX);
        createPays($oXXX);
    }

    createTitres($oXXX, $oCRM);
    createContacts($oXXX, $oCRM);
    createOrganisations($oXXX, $oCRM);
    createGroups($oXXX, "../csv/Organigramme.csv");

}

doTransfert();

?>