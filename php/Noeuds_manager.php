<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-22 02:19:04
//Filename : Noeuds_manager.php
//Description : Table pour gérer les noeuds


//include to dtb connection
include "CONTACTS_Noeuds.php";

///[FUNCTION][NoeudsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function NoeudsgetFromID($nId){
	//Our object declaration
	$oNoeuds = new Noeuds();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oNoeuds->setId_Noeuds($nId))
		$oNoeuds->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oNoeuds->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][NoeudssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function NoeudssaveFromJson($jsonObj){
	//Our object declaration
	$oNoeuds = new Noeuds();
	
	//Load from Json !
	$oNoeuds->loadFromJson($jsonObj);
	//save the changes
	$oNoeuds->save(null);
	
	//Return the present states
	return $oNoeudsgetFromID( $oNoeuds->getId_Noeuds() );
};

///[FUNCTION][NoeudsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function NoeudsdeleteFromID($nID){
	//Our object declaration
	$oNoeuds = new Noeuds();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oNoeuds->setId_Noeuds($nID))
		return $oNoeuds->deleteMyselfId_Noeuds($nID);
	//Failed end
	return false;
};

///[FUNCTION][NoeudsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function NoeudsgetAllInstance(){
	//Our object declaration
	$oNoeuds = new Noeuds();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oNoeuds->getColumns() . "\r\n" . "FROM " . $oNoeuds->getTable() ;
	//Link Condition
	$sLinks = $oNoeuds->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oNoeuds->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oNoeuds = new Noeuds();
		//load the data
		$oNoeuds->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oNoeuds->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][NoeudsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function NoeudsManager(){
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
			echo NoeudsgetFromID($nId);
			break;
		case "SAVE" :
			echo NoeudssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo NoeudsdeleteFromID($nId);
			break;
		case "LIST" :
			echo NoeudsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
NoeudsManager();

?>