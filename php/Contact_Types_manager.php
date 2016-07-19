<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-19 05:26:31
//Filename : Contact_Types_manager.php
//Description : Table des types de contact


//include to dtb connection
include "Contacts_Contact_Types.php";

///[FUNCTION][Contact_TypesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function Contact_TypesgetFromID($nId){
	//Our object declaration
	$oContact_Types = new Contact_Types();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oContact_Types->setId_Contact_Types($nId))
		$oContact_Types->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oContact_Types->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][Contact_TypessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function Contact_TypessaveFromJson($jsonObj){
	//Our object declaration
	$oContact_Types = new Contact_Types();
	
	//Load from Json !
	$oContact_Types->loadFromJson($jsonObj);
	//save the changes
	$oContact_Types->save(null);
	
	//Return the present states
	return $oContact_TypesgetFromID( $oContact_Types->getId_Contact_Types() );
};

///[FUNCTION][Contact_TypesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function Contact_TypesdeleteFromID($nID){
	//Our object declaration
	$oContact_Types = new Contact_Types();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oContact_Types->setId_Contact_Types($nID))
		return $oContact_Types->deleteMyselfId_Contact_Types($nID);
	//Failed end
	return false;
};

///[FUNCTION][Contact_TypesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function Contact_TypesManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo Contact_TypesgetFromID($nId);
			break;
		case "SAVE" :
			echo Contact_TypessaveFromJson($sJson);
			break;
		case "DELETE" :
			echo Contact_TypesdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
Contact_TypesManager();

?>