<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-19 05:26:31
//Filename : Items_manager.php
//Description : Table de tous les items avec des droits


//include to dtb connection
include "Contacts_Items.php";

///[FUNCTION][ItemsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function ItemsgetFromID($nId){
	//Our object declaration
	$oItems = new Items();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oItems->setId_Items($nId))
		$oItems->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oItems->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][ItemssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function ItemssaveFromJson($jsonObj){
	//Our object declaration
	$oItems = new Items();
	
	//Load from Json !
	$oItems->loadFromJson($jsonObj);
	//save the changes
	$oItems->save(null);
	
	//Return the present states
	return $oItemsgetFromID( $oItems->getId_Items() );
};

///[FUNCTION][ItemsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function ItemsdeleteFromID($nID){
	//Our object declaration
	$oItems = new Items();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oItems->setId_Items($nID))
		return $oItems->deleteMyselfId_Items($nID);
	//Failed end
	return false;
};

///[FUNCTION][ItemsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function ItemsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo ItemsgetFromID($nId);
			break;
		case "SAVE" :
			echo ItemssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo ItemsdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
ItemsManager();

?>