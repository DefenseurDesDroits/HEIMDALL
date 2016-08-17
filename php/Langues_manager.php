<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-08-17 02:48:28
//Filename : Langues_manager.php
//Description : Tables des langues


//include to dtb connection
include "CONTACTS_Langues.php";

///[FUNCTION][LanguesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function LanguesgetFromID($nId){
	//Our object declaration
	$oLangues = new Langues();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oLangues->setId_Langues($nId))
		$oLangues->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oLangues->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][LanguessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function LanguessaveFromJson($jsonObj){
	//Our object declaration
	$oLangues = new Langues();
	
	//Load from Json !
	$oLangues->loadFromJson($jsonObj);
	//save the changes
	$oLangues->save(null);
	
	//Return the present states
	return LanguesgetFromID( $oLangues->getId_Langues() );
};

///[FUNCTION][LanguesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function LanguesdeleteFromID($nID){
	//Our object declaration
	$oLangues = new Langues();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oLangues->setId_Langues($nID))
		return $oLangues->deleteMyselfId_Langues($nID);
	//Failed end
	return false;
};

///[FUNCTION][LanguesgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function LanguesgetAllInstance(){
	//Our object declaration
	$oLangues = new Langues();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oLangues->getColumns() . "\r\n" . "FROM " . $oLangues->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oLangues->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oLangues->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oLangues = new Langues();
		//load the data
		$oLangues->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oLangues->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][LanguesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function LanguesManager(){
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
			echo LanguesgetFromID($nId);
			break;
		case "SAVE" :
			echo LanguessaveFromJson($sJson);
			break;
		case "DELETE" :
			echo LanguesdeleteFromID($nId);
			break;
		case "LIST" :
			echo LanguesgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
LanguesManager();

?>