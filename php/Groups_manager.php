<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-21 10:11:52
//Filename : Groups_manager.php
//Description : Table des groups héritant de la table Contacts


//include to dtb connection
include "Contacts_Groups.php";

///[FUNCTION][GroupsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function GroupsgetFromID($nId){
	//Our object declaration
	$oGroups = new Groups();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oGroups->setId_Groups($nId))
		$oGroups->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oGroups->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][GroupssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function GroupssaveFromJson($jsonObj){
	//Our object declaration
	$oGroups = new Groups();
	
	//Load from Json !
	$oGroups->loadFromJson($jsonObj);
	//save the changes
	$oGroups->save(null);
	
	//Return the present states
	return $oGroupsgetFromID( $oGroups->getId_Groups() );
};

///[FUNCTION][GroupsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function GroupsdeleteFromID($nID){
	//Our object declaration
	$oGroups = new Groups();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oGroups->setId_Groups($nID))
		return $oGroups->deleteMyselfId_Groups($nID);
	//Failed end
	return false;
};

///[FUNCTION][GroupsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function GroupsgetAllInstance(){
	//Our object declaration
	$oGroups = new Groups();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oGroups->getColumns() . "\r\n" . "FROM " . $oGroups->getTable() ;
	//Link Condition
	$sLinks = $oGroups->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oGroups->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oGroups = new Groups();
		//load the data
		$oGroups->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oGroups->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][GroupsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function GroupsManager(){
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
			echo GroupsgetFromID($nId);
			break;
		case "SAVE" :
			echo GroupssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo GroupsdeleteFromID($nId);
			break;
		case "LIST" :
			echo GroupsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
GroupsManager();

?>