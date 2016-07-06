<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:52
//Filename : Groups_manager.php
//Description : Table des groups héritant de la table Contacts


//include to dtb connection
include "Contacts_Groups.php";

///[FUNCTION][GroupsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
public function GroupsgetFromID($nId){
	//Our object declaration
	$oGroups = new Groups();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oGroups->setId_Groups($nId))
		$oGroups->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oGroups->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][GroupssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
public function GroupssaveFromJson($jsonObj){
	//Our object declaration
	$oGroups = new Groups();
	
	//Load from Json !
	$oGroups->loadFromJson($jsonObj);
	//save the changes
	$oGroups->save(null);
	
	//Return the present states
	return $oGroupsgetFromID( $oGroups->getId_Groups() );
};

///[FUNCTION][GroupsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
public function GroupsdeleteFromID($nID){
	//Our object declaration
	$oGroups = new Groups();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oGroups->setId_Groups($nID))
		return $oGroups->deleteMyselfId_Groups($nID);
	//Failed end
	return false;
};

///[FUNCTION][GroupsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
public function GroupsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo GroupsgetFromID($nId);
			break;
		case "SAVE" :
			echo GroupssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo GroupsdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
GroupsManager();

?>