<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-20 04:38:57
//Filename : Civilites_manager.php
//Description : Table des civilités des contacts


//include to dtb connection
include "Contacts_Civilites.php";

///[FUNCTION][CivilitesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function CivilitesgetFromID($nId){
	//Our object declaration
	$oCivilites = new Civilites();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oCivilites->setId_Civilites($nId))
		$oCivilites->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oCivilites->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][CivilitessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function CivilitessaveFromJson($jsonObj){
	//Our object declaration
	$oCivilites = new Civilites();
	
	//Load from Json !
	$oCivilites->loadFromJson($jsonObj);
	//save the changes
	$oCivilites->save(null);
	
	//Return the present states
	return $oCivilitesgetFromID( $oCivilites->getId_Civilites() );
};

///[FUNCTION][CivilitesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function CivilitesdeleteFromID($nID){
	//Our object declaration
	$oCivilites = new Civilites();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oCivilites->setId_Civilites($nID))
		return $oCivilites->deleteMyselfId_Civilites($nID);
	//Failed end
	return false;
};

///[FUNCTION][CivilitesgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function CivilitesgetAllInstance(){
	//Our object declaration
	$oCivilites = new Civilites();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oCivilites->getColumns() . "\r\n" . "FROM " . $oCivilites->getTable() ;
	//Link Condition
	$sLinks = $oCivilites->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oCivilites->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oCivilites = new Civilites();
		//load the data
		$oCivilites->loadFromJson(json_encode($ary_[$nLine]), true);
		//add the data
		$ary_Result[$nLine] = $oCivilites->exportToJson();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][CivilitesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function CivilitesManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	if(array_key_exists("Data", $_POST))
		$sJson = $_POST["Data"];
	else
		$sJson = "";
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo CivilitesgetFromID($nId);
			break;
		case "SAVE" :
			echo CivilitessaveFromJson($sJson);
			break;
		case "DELETE" :
			echo CivilitesdeleteFromID($nId);
			break;
		case "LIST" :
			echo CivilitesgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
CivilitesManager();

?>