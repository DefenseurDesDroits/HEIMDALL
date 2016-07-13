<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-13 09:15:42
//Filename : Langues_manager.php
//Description : Tables des langues


//include to dtb connection
include "Contacts_Langues.php";

///[FUNCTION][LanguesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function LanguesgetFromID($nId){
	//Our object declaration
	$oLangues = new Langues();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oLangues->setId_Langues($nId))
		$oLangues->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oLangues->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][LanguessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function LanguessaveFromJson($jsonObj){
	//Our object declaration
	$oLangues = new Langues();
	
	//Load from Json !
	$oLangues->loadFromJson($jsonObj);
	//save the changes
	$oLangues->save(null);
	
	//Return the present states
	return $oLanguesgetFromID( $oLangues->getId_Langues() );
};

///[FUNCTION][LanguesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function LanguesdeleteFromID($nID){
	//Our object declaration
	$oLangues = new Langues();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oLangues->setId_Langues($nID))
		return $oLangues->deleteMyselfId_Langues($nID);
	//Failed end
	return false;
};

///[FUNCTION][LanguesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function LanguesManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo LanguesgetFromID($nId);
			break;
		case "SAVE" :
			echo LanguessaveFromJson($sJson);
			break;
		case "DELETE" :
			echo LanguesdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
LanguesManager();

?>