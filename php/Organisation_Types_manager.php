<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-08-30 11:54:32
//Filename : Organisation_Types_manager.php
//Description : Tables des différants type d'organisations possibles


//include to dtb connection
include "CONTACTS_Organisation_Types.php";

///[FUNCTION][Organisation_TypesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function Organisation_TypesgetFromID($nId){
	//Our object declaration
	$oOrganisation_Types = new Organisation_Types();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oOrganisation_Types->setId_Organisation_Types($nId))
		$oOrganisation_Types->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oOrganisation_Types->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][Organisation_TypessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function Organisation_TypessaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oOrganisation_Types = new Organisation_Types();
	
	//Load from Json !
	$oOrganisation_Types->loadFromJson($jsonObj);
	//save the changes
	$oOrganisation_Types->save($oAgent);
	
	//Return the present states
	return Organisation_TypesgetFromID( $oOrganisation_Types->getId_Organisation_Types() );
};

///[FUNCTION][Organisation_TypesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function Organisation_TypesdeleteFromID($nID){
	//Our object declaration
	$oOrganisation_Types = new Organisation_Types();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oOrganisation_Types->setId_Organisation_Types($nID))
		return $oOrganisation_Types->deleteMyselfId_Organisation_Types($nID);
	//Failed end
	return false;
};

///[FUNCTION][Organisation_TypesgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function Organisation_TypesgetAllInstance(){
	//Our object declaration
	$oOrganisation_Types = new Organisation_Types();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oOrganisation_Types->getColumns() . "\r\n" . "FROM " . $oOrganisation_Types->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oOrganisation_Types->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oOrganisation_Types->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oOrganisation_Types = new Organisation_Types();
		//load the data
		$oOrganisation_Types->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oOrganisation_Types->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][Organisation_TypesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function Organisation_TypesManager(){
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
			echo Organisation_TypesgetFromID($nId);
			break;
		case "SAVE" :
			echo Organisation_TypessaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo Organisation_TypesdeleteFromID($nId);
			break;
		case "LIST" :
			echo Organisation_TypesgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
Organisation_TypesManager();

?>