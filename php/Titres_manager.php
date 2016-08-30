<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-08-30 11:54:32
//Filename : Titres_manager.php
//Description : Tables des titres des contacts


//include to dtb connection
include "CONTACTS_Titres.php";

///[FUNCTION][TitresgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function TitresgetFromID($nId){
	//Our object declaration
	$oTitres = new Titres();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oTitres->setId_Titres($nId))
		$oTitres->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oTitres->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][TitressaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function TitressaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oTitres = new Titres();
	
	//Load from Json !
	$oTitres->loadFromJson($jsonObj);
	//save the changes
	$oTitres->save($oAgent);
	
	//Return the present states
	return TitresgetFromID( $oTitres->getId_Titres() );
};

///[FUNCTION][TitresdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function TitresdeleteFromID($nID){
	//Our object declaration
	$oTitres = new Titres();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oTitres->setId_Titres($nID))
		return $oTitres->deleteMyselfId_Titres($nID);
	//Failed end
	return false;
};

///[FUNCTION][TitresgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function TitresgetAllInstance(){
	//Our object declaration
	$oTitres = new Titres();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oTitres->getColumns() . "\r\n" . "FROM " . $oTitres->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oTitres->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oTitres->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oTitres = new Titres();
		//load the data
		$oTitres->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oTitres->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][TitresManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function TitresManager(){
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
			echo TitresgetFromID($nId);
			break;
		case "SAVE" :
			echo TitressaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo TitresdeleteFromID($nId);
			break;
		case "LIST" :
			echo TitresgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
TitresManager();

?>