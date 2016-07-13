<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-13 02:38:35
//Filename : Titres_manager.php
//Description : Tables des titres des contacts


//include to dtb connection
include "Contacts_Titres.php";

///[FUNCTION][TitresgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function TitresgetFromID($nId){
	//Our object declaration
	$oTitres = new Titres();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oTitres->setId_Titres($nId))
		$oTitres->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oTitres->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][TitressaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function TitressaveFromJson($jsonObj){
	//Our object declaration
	$oTitres = new Titres();
	
	//Load from Json !
	$oTitres->loadFromJson($jsonObj);
	//save the changes
	$oTitres->save(null);
	
	//Return the present states
	return $oTitresgetFromID( $oTitres->getId_Titres() );
};

///[FUNCTION][TitresdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function TitresdeleteFromID($nID){
	//Our object declaration
	$oTitres = new Titres();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oTitres->setId_Titres($nID))
		return $oTitres->deleteMyselfId_Titres($nID);
	//Failed end
	return false;
};

///[FUNCTION][TitresManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function TitresManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo TitresgetFromID($nId);
			break;
		case "SAVE" :
			echo TitressaveFromJson($sJson);
			break;
		case "DELETE" :
			echo TitresdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
TitresManager();

?>