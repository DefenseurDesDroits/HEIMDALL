<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-29 12:49:04
//Filename : Notes_manager.php
//Description : Table des notes sur les items


//include to dtb connection
include_once "CONTACTS_Notes.php";

///[FUNCTION][NotesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function NotesgetFromID($nId){
	//Our object declaration
	$oNotes = new Notes();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oNotes->setId_Notes(intval($nId)))
		$oNotes->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oNotes->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][NotessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function NotessaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oNotes = new Notes();
	
	//Load from Json !
	$oNotes->loadFromJson($jsonObj);
	//save the changes
	$oNotes->save($oAgent);
	
	//Return the present states
	return NotesgetFromID( $oNotes->getId_Notes() );
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

///[FUNCTION][NotesgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function NotesgetAllInstance(){
	//Our object declaration
	$oNotes = new Notes();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oNotes->getColumns() . "\r\n" . "FROM " . $oNotes->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oNotes->getLinkConditions(true);
	//The array we get
	$ary_ = array();
	//The array we throw
	$ary_Result = array();
	//Our count
	$nCount = 0;
	//Our iterrator
	$nLine = 0;
	
	//Add the link
	if($sLinks != "")
		$sQuery .= "WHERE " . $sLinks;
	
	/* Don't forget to override to use $oAgent !!! */
	
	//Open the query
	$GLOBALS["oConnection"]->open();
	//Get the array
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oNotes->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oNotes = new Notes();
		//load the data
		$oNotes->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oNotes->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][NotesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function NotesManager(){
	//Our object's id declaration
	$nId = $_POST["Id"];
	//Our json
	if(array_key_exists("Data", $_POST))
		$sJson = $_POST["Data"];
	else
		$sJson = "";
	//Our Action
	$sAction = $_POST["Action"];
	//Our Agent
	$oAgent = $_POST["Session"];
	
	switch($sAction){
		case "GET" :
			echo NotesgetFromID($nId);
			break;
		case "SAVE" :
			echo NotessaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo NotesdeleteFromID($nId);
			break;
		case "LIST" :
			echo NotesgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
NotesManager();

?>