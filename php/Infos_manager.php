<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-08-30 11:54:32
//Filename : Infos_manager.php
//Description : Table des adresses. Hérité de la classe item.


//include to dtb connection
include "CONTACTS_Infos.php";

///[FUNCTION][InfosgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function InfosgetFromID($nId){
	//Our object declaration
	$oInfos = new Infos();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oInfos->setId_Infos($nId))
		$oInfos->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oInfos->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][InfossaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function InfossaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oInfos = new Infos();
	
	//Load from Json !
	$oInfos->loadFromJson($jsonObj);
	//save the changes
	$oInfos->save($oAgent);
	
	//Return the present states
	return InfosgetFromID( $oInfos->getId_Infos() );
};

///[FUNCTION][InfosdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function InfosdeleteFromID($nID){
	//Our object declaration
	$oInfos = new Infos();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oInfos->setId_Infos($nID))
		return $oInfos->deleteMyselfId_Infos($nID);
	//Failed end
	return false;
};

///[FUNCTION][InfosgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function InfosgetAllInstance(){
	//Our object declaration
	$oInfos = new Infos();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oInfos->getColumns() . "\r\n" . "FROM " . $oInfos->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oInfos->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oInfos->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oInfos = new Infos();
		//load the data
		$oInfos->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oInfos->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][InfosManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function InfosManager(){
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
			echo InfosgetFromID($nId);
			break;
		case "SAVE" :
			echo InfossaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo InfosdeleteFromID($nId);
			break;
		case "LIST" :
			echo InfosgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
InfosManager();

?>