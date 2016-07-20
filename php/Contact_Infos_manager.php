<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-20 04:38:57
//Filename : Contact_Infos_manager.php
//Description : Table des informations liées au contact


//include to dtb connection
include "Contacts_Contact_Infos.php";

///[FUNCTION][Contact_InfosgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function Contact_InfosgetFromID($nId){
	//Our object declaration
	$oContact_Infos = new Contact_Infos();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oContact_Infos->setId_Contact_Infos($nId))
		$oContact_Infos->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oContact_Infos->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][Contact_InfossaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function Contact_InfossaveFromJson($jsonObj){
	//Our object declaration
	$oContact_Infos = new Contact_Infos();
	
	//Load from Json !
	$oContact_Infos->loadFromJson($jsonObj);
	//save the changes
	$oContact_Infos->save(null);
	
	//Return the present states
	return $oContact_InfosgetFromID( $oContact_Infos->getId_Contact_Infos() );
};

///[FUNCTION][Contact_InfosdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function Contact_InfosdeleteFromID($nID){
	//Our object declaration
	$oContact_Infos = new Contact_Infos();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oContact_Infos->setId_Contact_Infos($nID))
		return $oContact_Infos->deleteMyselfId_Contact_Infos($nID);
	//Failed end
	return false;
};

///[FUNCTION][Contact_InfosgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function Contact_InfosgetAllInstance(){
	//Our object declaration
	$oContact_Infos = new Contact_Infos();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oContact_Infos->getColumns() . "\r\n" . "FROM " . $oContact_Infos->getTable() ;
	//Link Condition
	$sLinks = $oContact_Infos->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oContact_Infos->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oContact_Infos = new Contact_Infos();
		//load the data
		$oContact_Infos->loadFromJson(json_encode($ary_[$nLine]), true);
		//add the data
		$ary_Result[$nLine] = $oContact_Infos->exportToJson();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][Contact_InfosManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function Contact_InfosManager(){
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
			echo Contact_InfosgetFromID($nId);
			break;
		case "SAVE" :
			echo Contact_InfossaveFromJson($sJson);
			break;
		case "DELETE" :
			echo Contact_InfosdeleteFromID($nId);
			break;
		case "LIST" :
			echo Contact_InfosgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
Contact_InfosManager();

?>