<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-21 10:11:52
//Filename : Accreditations_manager.php
//Description : Table des accréditations sur les items


//include to dtb connection
include "Contacts_Accreditations.php";

///[FUNCTION][AccreditationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function AccreditationsgetFromID($nId){
	//Our object declaration
	$oAccreditations = new Accreditations();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oAccreditations->setId_Accreditations($nId))
		$oAccreditations->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oAccreditations->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][AccreditationssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function AccreditationssaveFromJson($jsonObj){
	//Our object declaration
	$oAccreditations = new Accreditations();
	
	//Load from Json !
	$oAccreditations->loadFromJson($jsonObj);
	//save the changes
	$oAccreditations->save(null);
	
	//Return the present states
	return $oAccreditationsgetFromID( $oAccreditations->getId_Accreditations() );
};

///[FUNCTION][AccreditationsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function AccreditationsdeleteFromID($nID){
	//Our object declaration
	$oAccreditations = new Accreditations();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oAccreditations->setId_Accreditations($nID))
		return $oAccreditations->deleteMyselfId_Accreditations($nID);
	//Failed end
	return false;
};

///[FUNCTION][AccreditationsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function AccreditationsgetAllInstance(){
	//Our object declaration
	$oAccreditations = new Accreditations();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oAccreditations->getColumns() . "\r\n" . "FROM " . $oAccreditations->getTable() ;
	//Link Condition
	$sLinks = $oAccreditations->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oAccreditations->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oAccreditations = new Accreditations();
		//load the data
		$oAccreditations->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oAccreditations->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][AccreditationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function AccreditationsManager(){
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
			echo AccreditationsgetFromID($nId);
			break;
		case "SAVE" :
			echo AccreditationssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo AccreditationsdeleteFromID($nId);
			break;
		case "LIST" :
			echo AccreditationsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
AccreditationsManager();

?>