<?PHP
//Module : Publications
//Created by : LUDO
//Generated on : 2016-12-09 10:49:49
//Filename : Publications_manager.php
//Description : Tables des publications disponibles dans la base de données


//include to dtb connection
include_once "PUBLICATIONS_Publications.php";

///[FUNCTION][PublicationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function PublicationsgetFromID($nId){
	//Our object declaration
	$oPublications = new Publications();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oPublications->setId_Publications(intval($nId)))
		$oPublications->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oPublications->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][PublicationssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function PublicationssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oPublications = new Publications();
	
	//Load from Json !
	$oPublications->loadFromJson($jsonObj);
	//save the changes
	$oPublications->save($oAgent);
	
	//Return the present states
	return PublicationsgetFromID( $oPublications->getId_Publications() );
};

///[FUNCTION][PublicationsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function PublicationsdeleteFromID($nID){
	//Our object declaration
	$oPublications = new Publications();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oPublications->setId_Publications($nID))
		return $oPublications->deleteMyselfId_Publications($nID);
	//Failed end
	return false;
};

///[FUNCTION][PublicationsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function PublicationsgetAllInstance(){
	//Our object declaration
	$oPublications = new Publications();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oPublications->getColumns() . "\r\n" . "FROM " . $oPublications->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oPublications->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oPublications->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oPublications = new Publications();
		//load the data
		$oPublications->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oPublications->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][PublicationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function PublicationsManager(){
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
			echo PublicationsgetFromID($nId);
			break;
		case "SAVE" :
			echo PublicationssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo PublicationsdeleteFromID($nId);
			break;
		case "LIST" :
			echo PublicationsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
PublicationsManager();

?>