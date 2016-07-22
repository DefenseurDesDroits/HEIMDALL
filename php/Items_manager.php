<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-22 02:19:04
//Filename : Items_manager.php
//Description : Table de tous les items avec des droits


//include to dtb connection
include "CONTACTS_Items.php";

///[FUNCTION][ItemsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function ItemsgetFromID($nId){
	//Our object declaration
	$oItems = new Items();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oItems->setId_Items($nId))
		$oItems->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oItems->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][ItemssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function ItemssaveFromJson($jsonObj){
	//Our object declaration
	$oItems = new Items();
	
	//Load from Json !
	$oItems->loadFromJson($jsonObj);
	//save the changes
	$oItems->save(null);
	
	//Return the present states
	return $oItemsgetFromID( $oItems->getId_Items() );
};

///[FUNCTION][ItemsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function ItemsdeleteFromID($nID){
	//Our object declaration
	$oItems = new Items();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oItems->setId_Items($nID))
		return $oItems->deleteMyselfId_Items($nID);
	//Failed end
	return false;
};

///[FUNCTION][ItemsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function ItemsgetAllInstance(){
	//Our object declaration
	$oItems = new Items();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oItems->getColumns() . "\r\n" . "FROM " . $oItems->getTable() ;
	//Link Condition
	$sLinks = $oItems->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oItems->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oItems = new Items();
		//load the data
		$oItems->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oItems->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][ItemsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function ItemsManager(){
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
			echo ItemsgetFromID($nId);
			break;
		case "SAVE" :
			echo ItemssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo ItemsdeleteFromID($nId);
			break;
		case "LIST" :
			echo ItemsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
ItemsManager();

?>