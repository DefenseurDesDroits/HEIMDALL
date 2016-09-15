<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-14 04:56:47
//Filename : Logs_manager.php
//Description : Table pour enregistrer tous les changements de valeur d'item.


//include to dtb connection
include_once "CONTACTS_Logs.php";

///[FUNCTION][LogsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function LogsgetFromID($nId){
	//Our object declaration
	$oLogs = new Logs();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oLogs->setId_Logs($nId))
		$oLogs->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oLogs->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][LogssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function LogssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oLogs = new Logs();
	
	//Load from Json !
	$oLogs->loadFromJson($jsonObj);
	//save the changes
	$oLogs->save($oAgent);
	
	//Return the present states
	return LogsgetFromID( $oLogs->getId_Logs() );
};

///[FUNCTION][LogsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function LogsdeleteFromID($nID){
	//Our object declaration
	$oLogs = new Logs();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oLogs->setId_Logs($nID))
		return $oLogs->deleteMyselfId_Logs($nID);
	//Failed end
	return false;
};

///[FUNCTION][LogsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function LogsgetAllInstance(){
	//Our object declaration
	$oLogs = new Logs();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oLogs->getColumns() . "\r\n" . "FROM " . $oLogs->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oLogs->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oLogs->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oLogs = new Logs();
		//load the data
		$oLogs->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oLogs->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][LogsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function LogsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
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
			echo LogsgetFromID($nId);
			break;
		case "SAVE" :
			echo LogssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo LogsdeleteFromID($nId);
			break;
		case "LIST" :
			echo LogsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
LogsManager();

?>