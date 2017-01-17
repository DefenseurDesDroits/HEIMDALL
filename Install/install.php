<?PHP 

//Module : Install
//Created by : Ludowic EMMANUEL
//Generated on : 2017-01-08 16:10:00
//Filename : install.php
//Description : Install file !

//CONST PART############################################

include_once("install_consts.php");

function createConnection($sIp, $sDtb, $sUsr, $sPwd){
	
	//our files 
    $sFilename = "../php/connection.php";
	//our file content
	$sContent = "";
	
	//our file handler
	$ptrHandler = 0;
	
	//Start the creation of the content********************
	
	//the beginning
	$sContent .= "<?PHP" . "\r\n";
	
	$sContent .= "//Module : Common" . "\r\n";
	$sContent .= "//Created by : Ludowic \"MagnusMoi\" EMMANUEL" . "\r\n";
	$sContent .= "//Filename : connection.php" . "\r\n";
	$sContent .= "//Description : Connection file" . "\r\n";
	
	$sContent .= "" . "\r\n";
	
	$sContent .= "//Choose your include*********************************" . "\r\n";
	$sContent .= "//include the default DTB" . "\r\n";
	$sContent .= "//include \"Potours_Connection.php\";" . "\r\n";
	$sContent .= "//include the postGre Sql DTB" . "\r\n";
	$sContent .= "include_once \"Potours_Connection_PGSQL.php\";" . "\r\n";
	
	$sContent .= "" . "\r\n";
	
	$sContent .= "//Create the connection object************************" . "\r\n";
	$sContent .= "//default case" . "\r\n";
	$sContent .= "//$oConnection = new Potours_Connection(\"ip\", \"dtb\", \"usr\", \"pwd\");" . "\r\n";
	$sContent .= "//Postgre case case" . "\r\n";
	$sContent .= "$oConnection = new Potours_Connection_PGSQL(\"" . $sIp . "\", \"" . $sDtb . "\", \"" . $sUsr . "\", \"" . $sPwd . "\");" . "\r\n";

	$sContent .= "" . "\r\n";
	
	$sContent .= "//Quotes Function" . "\r\n";
	
	$sContent .= "" . "\r\n";
	
	$sContent .= "///[METHOD][setId_Noeuds]Method to set the Id_Noeuds" . "\r\n";
	$sContent .= "///[PARAMETER][string][$sStr]Our string to escape" . "\r\n";
	$sContent .= "///[RETURNS]string, da job !!!" . "\r\n";
	$sContent .= "function Quotes($sStr){" . "\r\n";
	$sContent .= "\t//return da escape string" . "\r\n";
	$sContent .= "\treturn \"'\" . str_replace(\"'\", \"''\", $sStr) . \"'\";" . "\r\n";
	$sContent .= "}" . "\r\n";

	//the end
	$sContent .= "?>" . "\r\n";
	
	//open the file 
	$ptrHandler = fopen($sFilename, "w+");
	//write in 
	fwrite($ptrHandler, $sContent);
	//close the file we are not Barbarian !!! By Crom !
	fclose($ptrHandler);
	
	return true;
};

function createTables($sFilename){
	
	//our query
	$sQuery = "";
	
	//our file handler
	$ptrHandler = 0;
	
	//open the file 
	$ptrHandler = fopen($sFilename, "r");
	//read it !!!
	$sQuery = fread($ptrHandler, filesize($sFilename));
	//close the file we are not Barbarian !!!
	fclose($ptrHandler);
	
	//do the query !!!
	
	//Use the connection object in : "php/connection.php"
	//Don't be fool !!! open before eat !!!
	$GLOBALS["oConnection"]->open();
	//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
	$GLOBALS["oConnection"]->updateRequest($sQuery, 0);
	//Close it !!! For Goddess Sake !!!
	$GLOBALS["oConnection"]->close();
	
}

///[FUNCTION][createContactType]Function to create the contract type
function createContact_Types(){

    //query
    $sQuery = "INSERT INTO xxx.contact_types(nom) VALUES ('contact');\r\n";
    $sQuery .= "INSERT INTO xxx.contact_types(nom) VALUES ('organisme');";
    $sQuery .= "INSERT INTO xxx.contact_types(nom) VALUES ('user');";
    $sQuery .= "INSERT INTO xxx.contact_types(nom) VALUES ('Groupe');";

    //Use the connection object in : "php/connection.php"
	//Don't be fool !!! open before eat !!!
	$GLOBALS["oConnection"]->open();
    //do da job
    $GLOBALS["oConnection"]->insertRequest($sQuery, null);
    //close
    $GLOBALS["oConnection"]->close();

}

///[FUNCTION][createCivilites]Function to create the civilities
function createCivilites($Dir, $oDeus){
	
	//our count of line
    $nCount = 0;
    //our iterator for line 
    $nLine = 0;
    //Our count for cell
    $nSize = 0;
    //our iterrator for cells
    $nCell = 0;
	
	//our filename
	$sCSV = $Dir . "/" . "CONTACTS_Civilites.csv";
	//our query 
	$sQuery = "";
	
	//our Item 
	$oItem = null;
	
	//our CSV File
    $oCSV = new Potours_Data();

    //load the file 
    $oCSV->loadCSV($sCSV, ";");

    //lines and columns
    $nCount = $oCSV->getLineCount();
    //columns
    $nSize = $oCSV->getColumnCount();

    echo("<br/>" . "CONTACTS_Civilites : Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;
	
	while($nLine < $nCount){
		//not already in ?
		if(findInPotoursObjArray($oDeus["Contacts"]["Civilites"], "sNom", $oCSV->getCell(0, $nLine, "")) == -1){
			//if not fine !!!
			$oItem = new Civilites();
            $oItem->setNom($oCSV->getCellFromName(INSTALL_CONTACTS_CIVILITES_NAME, $nLine, ""));
			$oItem->setAbr($oCSV->getCellFromName(INSTALL_CONTACTS_CIVILITES_ABR, $nLine, ""));
			// $oItem->setNom($oCSV->getCell(0, $nLine, ""));
			// $oItem->setAbr($oCSV->getCell(1, $nLine, ""));
			
			//save it !!!
			$oItem->save(0);
			
			//yes i love living with risk !!!
			$oItem->setId_Civilites(count($oDeus["Contacts"]["Organisation_Types"]) + 1);
			
			//push it in the sac !!!
			array_push($oDeus["Contacts"]["Civilites"], $oItem);
			
			//$sQuery .= "INSERT INTO xxx.civilites(nom, abr) VALUES ('" . $oCSV->getCell(0, $nLine, "") . "', '" . $oCSV->getCell(1, $nLine, "") . "');\r\n";
		}
		//Next
		$nLine++;
	}
	
	// if($sQuery != ""){
		// //Use the connection object in : "php/connection.php"
		// //Don't be fool !!! open before eat !!!
		// $GLOBALS["oConnection"]->open();
		// //do da job
		// $GLOBALS["oConnection"]->insertRequest($sQuery, null);
		// //close
		// $GLOBALS["oConnection"]->close();
	// }
	
	return $oDeus;
}

///[FUNCTION][createAccreditations]Function to create the accreditations
function createAccreditations(){
    //query
    $sQuery = "INSERT INTO xxx.accreditations(nom, niveau) VALUES ( 'Tous', 0);\r\n";
    $sQuery .= "INSERT INTO xxx.accreditations(nom, niveau) VALUES ( 'Groupes', 1);\r\n";
    $sQuery .= "INSERT INTO xxx.accreditations(nom, niveau) VALUES ( 'Users', 2);";

    //Use the connection object in : "php/connection.php"
	//Don't be fool !!! open before eat !!!
	$GLOBALS["oConnection"]->open();
    //do da job
    $GLOBALS["oConnection"]->insertRequest($sQuery, null);
    //close
    $GLOBALS["oConnection"]->close();
}

///[FUNCTION][createOrganisation_Types]Function to create the organisation type
function createOrganisation_Types($Dir, $oDeus){
	
	//our count of line
    $nCount = 0;
    //our iterator for line 
    $nLine = 0;
    //Our count for cell
    $nSize = 0;
    //our iterrator for cells
    $nCell = 0;
	
	//our filename
	$sCSV = $Dir . "/" . "CONTACTS_Organisation_Types.csv";
	//our query 
	$sQuery = "";
	
	//our Item 
	$oItem = null;
	
	//our CSV File
    $oCSV = new Potours_Data();

    //load the file 
    $oCSV->loadCSV($sCSV, ";");

    //lines and columns
    $nCount = $oCSV->getLineCount();
    //columns
    $nSize = $oCSV->getColumnCount();

    echo("<br/>" . "CONTACTS_Organisation_Types : Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;
	
	while($nLine < $nCount){
		//not already in ?
		if(findInPotoursObjArray($oDeus["Contacts"]["Organisation_Types"], "sNom", $oCSV->getCell(0, $nLine, "")) == -1){
			//if not fine !!!
			$oItem = new Organisation_Types();
			$oItem->setNom($oCSV->getCellFromName(INSTALL_CONTACTS_ORGANISATION_TYPES_NAME, $nLine, ""));
			//$oItem->setNom($oCSV->getCell(0, $nLine, ""));
			
			//save it !!!
			$oItem->save(0);
			
			//yes i love living with risk !!!
			$oItem->setId_Organisation_Types(count($oDeus["Contacts"]["Organisation_Types"]) + 1);
			
			//push it in the sac !!!
			array_push($oDeus["Contacts"]["Organisation_Types"], $oItem);
		}
		//Next
		$nLine++;
	}
	
    return $oDeus;
}

///[FUNCTION][createLangues]Function to create the languages
function createLangues($Dir, $oDeus){
	
	//our count of line
    $nCount = 0;
    //our iterator for line 
    $nLine = 0;
    //Our count for cell
    $nSize = 0;
    //our iterrator for cells
    $nCell = 0;
	
	//our filename
	$sCSV = $Dir . "/" . "CONTACTS_Langues.csv";
	//our query 
	$sQuery = "";
	
	//our Item 
	$oItem = null;
	
	//our CSV File
    $oCSV = new Potours_Data();

    //load the file 
    $oCSV->loadCSV($sCSV, ";");

    //lines and columns
    $nCount = $oCSV->getLineCount();
    //columns
    $nSize = $oCSV->getColumnCount();

    echo("<br/>" . "CONTACTS_Langues : Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;
	
	while($nLine < $nCount){
		//not already in ?
		if(findInPotoursObjArray($oDeus["Contacts"]["Langues"], "sNom", $oCSV->getCell(0, $nLine, "")) == -1){
			//if not fine !!!
			$oItem = new Langues();
			$oItem->setNom($oCSV->getCellFromName(INSTALL_CONTACTS_LANGUE_NAME, $nLine, ""));
			//$oItem->setNom($oCSV->getCell(0, $nLine, ""));
			
			//save it !!!
			$oItem->save(0);
			
			//yes i love living with risk !!!
			$oItem->setId_Langues(count($oDeus["Contacts"]["Langues"]) + 1);
			
			//push it in the sac !!!
			array_push($oDeus["Contacts"]["Langues"], $oItem);
		}
		//Next
		$nLine++;
	}
	
    return $oDeus;
}

///[FUNCTION][createPays]Function to create the countries
function createPays($Dir, $oDeus){
	
	//our count of line
    $nCount = 0;
    //our iterator for line 
    $nLine = 0;
    //Our count for cell
    $nSize = 0;
    //our iterrator for cells
    $nCell = 0;
	
	//our filename
	$sCSV = $Dir . "/" . "CONTACTS_Pays.csv";
	//our query 
	$sQuery = "";
	
	//our Item 
	$oItem = null;
	
	//our CSV File
    $oCSV = new Potours_Data();

    //load the file 
    $oCSV->loadCSV($sCSV, ";");

    //lines and columns
    $nCount = $oCSV->getLineCount();
    //columns
    $nSize = $oCSV->getColumnCount();

    echo("<br/>" . "CONTACTS_Pays : Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;
	
	while($nLine < $nCount){
		//not already in ?
		if(findInPotoursObjArray($oDeus["Contacts"]["Pays"], "sNom", $oCSV->getCell(0, $nLine, "")) == -1){
			//if not fine !!!
			$oItem = new Pays();
			$oItem->setCode($oCSV->getCellFromName(INSTALL_CONTACTS_COUNTRY_CODE, $nLine, ""));
			$oItem->setAlpha2($oCSV->getCellFromName(INSTALL_CONTACTS_COUNTRY_ALPHA2, $nLine, ""));
			$oItem->setAlpha3($oCSV->getCellFromName(INSTALL_CONTACTS_COUNTRY_ALPHA3, $nLine, ""));
			$oItem->setNom($oCSV->getCellFromName(INSTALL_CONTACTS_COUNTRY_NAME, $nLine, ""));
            // $oItem->setCode($oCSV->getCell(0, $nLine, ""));
			// $oItem->setAlpha2($oCSV->getCell(1, $nLine, ""));
			// $oItem->setAlpha3($oCSV->getCell(2, $nLine, ""));
			// $oItem->setNom($oCSV->getCell(3, $nLine, ""));
			
			//save it !!!
			$oItem->save(0);
			
			//yes i love living with risk !!!
			$oItem->setId_Pays(count($oDeus["Contacts"]["Pays"]) + 1);
			
			//push it in the sac !!!
			array_push($oDeus["Contacts"]["Pays"], $oItem);
		}
		//Next
		$nLine++;
	}
	
    return $oDeus;
}

///[FUNCTION][createTitres]Function to create the titles
function createTitres($Dir, $oDeus){
	
	//our count of line
    $nCount = 0;
    //our iterator for line 
    $nLine = 0;
    //Our count for cell
    $nSize = 0;
    //our iterrator for cells
    $nCell = 0;
	
	//our filename
	$sCSV = $Dir . "/" . "CONTACTS_Titres.csv";
	//our query 
	$sQuery = "";
	
	//our Item 
	$oItem = null;
	
	//our CSV File
    $oCSV = new Potours_Data();

    //load the file 
    $oCSV->loadCSV($sCSV, ";");

    //lines and columns
    $nCount = $oCSV->getLineCount();
    //columns
    $nSize = $oCSV->getColumnCount();

    echo("<br/>" . "CONTACTS_Titres : Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;
	
	while($nLine < $nCount){
		//not already in ?
		if(findInPotoursObjArray($oDeus["Contacts"]["Titres"], "sNom", $oCSV->getCell(0, $nLine, "")) == -1){
			//if not fine !!!
			$oItem = new Titres();
			$oItem->setNom($oCSV->getCellFromName(INSTALL_CONTACTS_TITRES_NAME, $nLine, ""));
			$oItem->setRang($oCSV->getCellFromName(INSTALL_CONTACTS_TITRES_RANK, $nLine, ""));
            // $oItem->setNom($oCSV->getCell(0, $nLine, ""));
			// $oItem->setRang($oCSV->getCell(1, $nLine, ""));
			
			//save it !!!
			$oItem->save(0);
			
			//yes i love living with risk !!!
			$oItem->setId_Titres(count($oDeus["Contacts"]["Titres"]) + 1);
			
			//push it in the sac !!!
			array_push($oDeus["Contacts"]["Titres"], $oItem);
		}
		//Next
		$nLine++;
	}
	
    return $oDeus;
}

///[FUNCTION][createContacts]Function to create the titles
function createContacts($Dir, $oDeus){
	
	//check the email (not Null)
	//check contact 
	//check Orga
	
	//our count of line
    $nCount = 0;
    //our iterator for line 
    $nLine = 0;
    //Our count for cell
    $nSize = 0;
    //our iterrator for cells
    $nCell = 0;
	//get the address index 
	$nEMailIndex = 0;
	//get the civilite Index
	$nCiviliteIndex = 0;
	//get the title Index
	$nTitleIndex = 0;
	
	//our filename
	$sCSV = $Dir . "/" . "CONTACTS_Contacts.csv";
	//our query 
	$sQuery = "";
	//our email 
	$sEmail = "";
	
	//our Item 
	$oItem = null;
	//our contacts
	$oContacts = null;
	//our contact_info 
	$oContact_Infos = null;
	//our info 
	$oInfos = null;
	
	//our CSV File
    $oCSV = new Potours_Data();

    //load the file 
    $oCSV->loadCSV($sCSV, ";");

    //lines and columns
    $nCount = $oCSV->getLineCount();
    //columns
    $nSize = $oCSV->getColumnCount();

    echo("<br/>" . "CONTACTS_Contacts : Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;
	
	while($nLine < $nCount){

		//reset the index 
		$nEMailIndex = -1;

		//our email
		$sEmail = $oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_EMAIL, $nLine, "");

		//find the email address
		if($sEmail != "")
			$nEMailIndex = findInPotoursObjArray($oDeus["Contacts"]["Infos"], "sCourriel1", $sEmail);

		if($nEMailIndex != -1){
			//Find the people
		}
		else{
			//create all !
			$oContacts = new Contacts();

			//items fields****************************************************
			$oContacts->setId_Groups_json("");
			$oContacts->setId_Accreditations_Item(1);
			$oContacts->setId_Creator(0);
			$oContacts->setId_users_json("");

			//Contacts fields*************************************************
			//Prenom
			$oContacts->setPrenom($oCSV->getCellFromName(INSTALL_CONTACTS_CONTACTS_FIRSTNAME, $nLine, ""));
			//Nom
			$oContacts->setNom($oCSV->getCellFromName(INSTALL_CONTACTS_CONTACTS_NAME, $nLine, ""));
			//our index for civilite
			$nCiviliteIndex = findInPotoursObjArray($oDeus["Contacts"]["Civilites"], "sNom", $oCSV->getCellFromName(INSTALL_CONTACTS_CONTACTS_CIVILITY, $nLine, ""));
			//
			if($nCiviliteIndex == -1)
				$nCiviliteIndex = 1;
			//set the civilite
			$oContacts->setId_Civilites( $oDeus["Contacts"]["Civilites"][$nCiviliteIndex]->getId_Civilites() );
			//our Title 
			$nTitleIndex = findInPotoursObjArray($oDeus["Contacts"]["Titres"], "sNom", $oCSV->getCellFromName(INSTALL_CONTACTS_CONTACTS_TITLE, $nLine, ""));
			//
			if($nTitleIndex == -1)
				$nTitleIndex = 1;
			//set the titles
			$oContacts->setId_Titres( $oDeus["Contacts"]["Titres"][$nTitleIndex]->getId_Titres() );
			//set the contact types 
			$oContacts->setId_Contact_Types(1);

			//save the contact 
			$oContacts->save(0);
			//Push It !!!
			array_push($oDeus["Contacts"]["Contacts"], $oContacts);

			//Info contacts***************************************************
			
			//allocation
			$oContact_Infos = new Contact_Infos();
			//set the contact !
			$oContact_Infos->setId_Contacts($oContacts->getId_Contacts());
			//set the languages (default)
			$oContact_Infos->setId_Langues(1);
			//set the function 
			$oContact_Infos->setFonction($oCSV->getCellFromName(INSTALL_CONTACTS_CONTACT_INFOS_FUNCTION, $nLine, ""));

			//save the contact info 
			$oContact_Infos->save(0);
			//Push It 
			array_push($oDeus["Contacts"]["Contact_Infos"], $oContact_Infos);

			//Info************************************************************
			
			//allocation
			$oInfos = new Infos();

			//our adr 1
			$oInfos->setAdr1($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_ADR1, $nLine, ""));
			//our adr 2
			$oInfos->setAdr2($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_ADR2, $nLine, ""));
			//our adr 3
			$oInfos->setAdr3($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_ADR3, $nLine, ""));
			//our cp
			$oInfos->setCP($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_CP, $nLine, ""));
			//our cedex
			$oInfos->setCedex($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_CEDEX, $nLine, ""));
			//our city
			$oInfos->setVille($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_CITY, $nLine, ""));
			//our phone
			$oInfos->setTelephone1($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_PHONE, $nLine, ""));
			//our Email
			$oInfos->setCourriel1($oCSV->getCellFromName(INSTALL_CONTACTS_ADDRESS_EMAIL, $nLine, ""));

			//set the Contact_Infos
			$oContact_Infos->setId_Contact_Infos($oContact_Infos->getId_Contact_Infos());

			//save the info !
			$oContact_Infos->save(0);
			//Push It !
			array_push($oDeus["Contacts"]["Infos"], $oInfos);

		}

		//Next
		$nLine++;
	}
	
    return $oDeus;
}

function createGroups($Dir, $oDeus){

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
	//our csv filename
	$sCSV = $sDir . "/" . "CONTACTS_Groups.csv";

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

    echo("<br/>" . "Nombre de colonnes : " . $nSize . "| Nombre de lignes : " . $nCount ) ;

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
                    //$oGrp->setId_Noeuds_Parent(1);
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
                    $oGrp->setId_groups_json( "{{\"grp\":\"" + intval($oGrp->getId_Items()) + "\", \"until\":\"\"}}");
                    //$oGrp->setId_groups_owner(intval($oGrp->getId_Items()));

                    //save it again !!!
                    $oGrp->save($oGrp->getId_Items());                    

                    //created
                    echo("<br/>" . "Group ajouté : " . $oGrp->getNomGroupe() );
                }

                $nCell = -41;
            }

            //next
            $nCell--;
        }

        //Next
        $nLine++;
    }

	
	return $oDeus;
}

function createPackage($Dir, $oDeus){
	
	//Contact_Types creation :
	if(count($oDeus["Contacts"]["Contact_Types"]) == 0)
		createContact_Types();
		
	//Civilites 
	createCivilites($Dir, $oDeus);
	
	//Accreditations
	if(count($oDeus["Contacts"]["Accreditations"]) == 0)
		createAccreditations();
	
	//Langues
	createLangues($Dir, $oDeus);
	
	//Pays
	createPays($Dir, $oDeus);

	//Titres
	createTitres($Dir, $oDeus);
	
    // createContacts($oXXX, $oCRM);
    // createOrganisations($oXXX, $oCRM);*/
	
    createGroups($Dir, $oDeus);
	
	//return Deus !!!
	return $oDeus;
}

function loadTitres($oDeus){

	//Our object declaration
	$oItem = new Titres();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oTitres->getColumns() . "\r\n" . "FROM " . $oTitres->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oItem->getLinkConditions(true);
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
	
	//Open the query
	$GLOBALS["oConnection"]->open();
	//Get the array
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oItem->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oItem = new Titres();
		//load the data
		$oItem->loadFromArray($ary_[$nLine], true);
		//add the data
		array_push($oDeus["Contacts"]["Titres"], $oItem);
		//Next
		$nLine++;
	}

	//return Deus !!!
	return $oDeus;
}

function loadDeus($oDeus){

	//get the titles
	$oDeus = loadTitres($oDeus);

	//return the all things
	return $oDeus;
}

function loadPackages($oJson){
	
	//our number of packages
	$nCount = 0;
	//our iterrator
	$nLine = 0;
	//our deus variable
	$oDeus = [];
	
	//load the created connection file !!!
	// :o 
	include_once("../php/connection.php");
	
	//create the DTB !!!
	
	createTables("DTB/Heimdall_Contacts.sql");
	createTables("DTB/Heimdall_Publications.sql");
	createTables("DTB/Heimdall_STocks.sql");
	
	//load the objects includes
	//lib
	include_once("../php/Potours_Legacy.php");
	include_once("../php/Potours_Data.php");
	include_once("../php/Groups_manager_2.php");
	//PHP Objects
	include_once("../php/CONTACTS_Contacts.php");
	include_once("../php/CONTACTS_Titres.php");
	include_once("../php/CONTACTS_Pays.php");
	include_once("../php/CONTACTS_Users.php");
	include_once("../php/CONTACTS_Organisations.php");
	include_once("../php/CONTACTS_Organisation_Types.php");
	include_once("../php/CONTACTS_Contact_Infos.php");
	include_once("../php/CONTACTS_Infos.php");
	
	//And now ... I create Deus !!!
	$oDeus = [
		"Contacts" => [
			"Contact_Types" => [],
			"Civilites" => [],
			"Accreditations" => [],
			"Organisation_Types" => [],
			"Langues" => [],
			"Pays" => [],
			"Titres" => [],
			"Contacts" => [],
			"Organisations" => [],
			"Users" => [],
			"Groups" => [],
			"Contact_Infos" => []
			"Infos" => []
		],
		"Publications" => [
			"Domaines" => [],
			"Fichiers" => [],
			"Publications" => []
		],
		"Stocks" => [
			"Locations" => [],
			"Stocks" => []
		]
	];

	//load the existing Deus


	//Count the packages 
	$nCount = count($oJson["sources"]);
	//create the packages
	while($nCount < $nLine){
		//create the package 
		$oDeus = createPackage($oJson["sources"][$nLine], $oDeus);
		//Next
		$nLine++;
	}
	
}

function main(){

    //our files 
    $sFilename = "";
	//our json string
	$sJson = "";
    //our count test
    $nCount = count($argv);
	
    //our json  object
    $oJson = null;
	
	//our file handler
	$ptrHandler = 0;

    //does the ini file is created*************************
    if($nCount == 0){
        //if not create it and load it*********************
		$sFilename = "Ini.json";
		//return false;
    }
    else{
		//get the file name
        $sFilename = $argv[0];
    }

    //load from the json file******************************
	
	//open the file 
	$ptrHandler = fopen($sFilename, "r");
	//read it !!!
	$sJson = fread($ptrHandler, filesize($sFilename));
	//close the file we are not Barbarian !!!
	fclose($ptrHandler);
	
	//load the Json file 
	$oJson = json_decode($sJson);

	//create the connection php
	createConnection($oJson["connection"]["address"], $oJson["connection"]["database"], $oJson["connection"]["user"], $oJson["connection"]["password"]);
	
    //load every package***********************************
	loadPackages($oJson);
	
	//return the true !!!
	return true;
};

//just main
main();

?>