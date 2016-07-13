<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-13 09:15:42
//Filename : Organisation_Types_manager.php
//Description : Tables des différants type d'organisations possibles


//include to dtb connection
include "Contacts_Organisation_Types.php";

///[FUNCTION][Organisation_TypesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function Organisation_TypesgetFromID($nId){
	//Our object declaration
	$oOrganisation_Types = new Organisation_Types();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oOrganisation_Types->setId_Organisation_Types($nId))
		$oOrganisation_Types->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oOrganisation_Types->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][Organisation_TypessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function Organisation_TypessaveFromJson($jsonObj){
	//Our object declaration
	$oOrganisation_Types = new Organisation_Types();
	
	//Load from Json !
	$oOrganisation_Types->loadFromJson($jsonObj);
	//save the changes
	$oOrganisation_Types->save(null);
	
	//Return the present states
	return $oOrganisation_TypesgetFromID( $oOrganisation_Types->getId_Organisation_Types() );
};

///[FUNCTION][Organisation_TypesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function Organisation_TypesdeleteFromID($nID){
	//Our object declaration
	$oOrganisation_Types = new Organisation_Types();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oOrganisation_Types->setId_Organisation_Types($nID))
		return $oOrganisation_Types->deleteMyselfId_Organisation_Types($nID);
	//Failed end
	return false;
};

///[FUNCTION][Organisation_TypesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function Organisation_TypesManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo Organisation_TypesgetFromID($nId);
			break;
		case "SAVE" :
			echo Organisation_TypessaveFromJson($sJson);
			break;
		case "DELETE" :
			echo Organisation_TypesdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
Organisation_TypesManager();

?>