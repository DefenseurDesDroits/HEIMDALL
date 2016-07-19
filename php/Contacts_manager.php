<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-19 05:26:31
//Filename : Contacts_manager.php
//Description : Table des contacts. Hérite de celle Noeuds pour gérer la notion de hiérarchie


//include to dtb connection
include "Contacts_Contacts.php";

///[FUNCTION][ContactsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function ContactsgetFromID($nId){
	//Our object declaration
	$oContacts = new Contacts();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oContacts->setId_Contacts($nId))
		$oContacts->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oContacts->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][ContactssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function ContactssaveFromJson($jsonObj){
	//Our object declaration
	$oContacts = new Contacts();
	
	//Load from Json !
	$oContacts->loadFromJson($jsonObj);
	//save the changes
	$oContacts->save(null);
	
	//Return the present states
	return $oContactsgetFromID( $oContacts->getId_Contacts() );
};

///[FUNCTION][ContactsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function ContactsdeleteFromID($nID){
	//Our object declaration
	$oContacts = new Contacts();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oContacts->setId_Contacts($nID))
		return $oContacts->deleteMyselfId_Contacts($nID);
	//Failed end
	return false;
};

///[FUNCTION][ContactsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function ContactsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo ContactsgetFromID($nId);
			break;
		case "SAVE" :
			echo ContactssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo ContactsdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
ContactsManager();

?>