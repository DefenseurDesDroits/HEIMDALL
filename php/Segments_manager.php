<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-10-24 09:39:59
//Filename : Segments_manager.php
//Description : Table gérant les segments.


//include to dtb connection
include_once "CONTACTS_Segments.php";

///[FUNCTION][SegmentsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function SegmentsgetFromID($nId){
	//Our object declaration
	$oSegments = new Segments();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oSegments->setId_Segments(intval($nId)))
		$oSegments->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oSegments->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][SegmentssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function SegmentssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oSegments = new Segments();
	
	//Load from Json !
	$oSegments->loadFromJson($jsonObj);
	//save the changes
	$oSegments->save($oAgent);
	
	//Return the present states
	return SegmentsgetFromID( $oSegments->getId_Segments() );
};

///[FUNCTION][SegmentsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function SegmentsdeleteFromID($nID){
	//Our object declaration
	$oSegments = new Segments();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oSegments->setId_Segments($nID))
		return $oSegments->deleteMyselfId_Segments($nID);
	//Failed end
	return false;
};

///[FUNCTION][SegmentsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function SegmentsgetAllInstance(){
	//Our object declaration
	$oSegments = new Segments();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oSegments->getColumns() . "\r\n" . "FROM " . $oSegments->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oSegments->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oSegments->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oSegments = new Segments();
		//load the data
		$oSegments->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oSegments->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][SegmentsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function SegmentsManager(){
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
			echo SegmentsgetFromID($nId);
			break;
		case "SAVE" :
			echo SegmentssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo SegmentsdeleteFromID($nId);
			break;
		case "LIST" :
			echo SegmentsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
SegmentsManager();

?>