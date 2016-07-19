<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-19 05:26:31
//Filename : Notes_manager.php
//Description : Table des notes sur les items


//include to dtb connection
include "Contacts_Notes.php";

///[FUNCTION][NotesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function NotesgetFromID($nId){
	//Our object declaration
	$oNotes = new Notes();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oNotes->setId_Notes($nId))
		$oNotes->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oNotes->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][NotessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function NotessaveFromJson($jsonObj){
	//Our object declaration
	$oNotes = new Notes();
	
	//Load from Json !
	$oNotes->loadFromJson($jsonObj);
	//save the changes
	$oNotes->save(null);
	
	//Return the present states
	return $oNotesgetFromID( $oNotes->getId_Notes() );
};

///[FUNCTION][NotesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function NotesdeleteFromID($nID){
	//Our object declaration
	$oNotes = new Notes();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oNotes->setId_Notes($nID))
		return $oNotes->deleteMyselfId_Notes($nID);
	//Failed end
	return false;
};

///[FUNCTION][NotesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function NotesManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo NotesgetFromID($nId);
			break;
		case "SAVE" :
			echo NotessaveFromJson($sJson);
			break;
		case "DELETE" :
			echo NotesdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
NotesManager();

?>