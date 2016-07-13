<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-13 02:38:35
//Filename : Item_Types_manager.php
//Description : Table des types d'items


//include to dtb connection
include "Contacts_Item_Types.php";

///[FUNCTION][Item_TypesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function Item_TypesgetFromID($nId){
	//Our object declaration
	$oItem_Types = new Item_Types();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oItem_Types->setId_item_types($nId))
		$oItem_Types->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oItem_Types->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][Item_TypessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function Item_TypessaveFromJson($jsonObj){
	//Our object declaration
	$oItem_Types = new Item_Types();
	
	//Load from Json !
	$oItem_Types->loadFromJson($jsonObj);
	//save the changes
	$oItem_Types->save(null);
	
	//Return the present states
	return $oItem_TypesgetFromID( $oItem_Types->getId_item_types() );
};

///[FUNCTION][Item_TypesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function Item_TypesdeleteFromID($nID){
	//Our object declaration
	$oItem_Types = new Item_Types();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oItem_Types->setId_item_types($nID))
		return $oItem_Types->deleteMyselfId_item_types($nID);
	//Failed end
	return false;
};

///[FUNCTION][Item_TypesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function Item_TypesManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo Item_TypesgetFromID($nId);
			break;
		case "SAVE" :
			echo Item_TypessaveFromJson($sJson);
			break;
		case "DELETE" :
			echo Item_TypesdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
Item_TypesManager();

?>