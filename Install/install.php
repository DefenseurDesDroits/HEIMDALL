<?PHP 

//Module : Install
//Created by : Ludowic EMMANUEL
//Generated on : 2017-01-08 16:10:00
//Filename : install.php
//Description : Install file !

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
			$oItem->setNom($oCSV->getCell(0, $nLine, ""));
			$oItem->setAbr($oCSV->getCell(1, $nLine, ""));
			
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
			$oItem->setNom($oCSV->getCell(0, $nLine, ""));
			
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
			$oItem->setNom($oCSV->getCell(0, $nLine, ""));
			
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
			$oItem->setCode($oCSV->getCell(0, $nLine, ""));
			$oItem->setAlpha2($oCSV->getCell(1, $nLine, ""));
			$oItem->setAlpha3($oCSV->getCell(2, $nLine, ""));
			$oItem->setNom($oCSV->getCell(3, $nLine, ""));
			
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
			$oItem->setNom($oCSV->getCell(0, $nLine, ""));
			$oItem->setRang($oCSV->getCell(1, $nLine, ""));
			
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
			$oItem->setNom($oCSV->getCell(0, $nLine, ""));
			$oItem->setRang($oCSV->getCell(1, $nLine, ""));
			
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
	include_once("../php/CONTACTS_Users.php");
	include_once("../php/CONTACTS_Organisations.php");
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