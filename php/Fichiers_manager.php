<?PHP
//Module : Publications
//Created by : LUDO
//Generated on : 2016-11-29 10:25:42
//Filename : Fichiers_manager.php
//Description : Table des fichiers physiques sur le serveur


//include to dtb connection
include_once "PUBLICATIONS_Fichiers.php";

///[FUNCTION][FichiersgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function FichiersgetFromID($nId){
	//Our object declaration
	$oFichiers = new Fichiers();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oFichiers->setId_Fichiers(intval($nId)))
		$oFichiers->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oFichiers->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][FichierssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function FichierssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oFichiers = new Fichiers();
	
	//Load from Json !
	$oFichiers->loadFromJson($jsonObj);
	//save the changes
	$oFichiers->save($oAgent);
	
	//Return the present states
	return FichiersgetFromID( $oFichiers->getId_Fichiers() );
};

///[FUNCTION][FichiersdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function FichiersdeleteFromID($nID){
	//Our object declaration
	$oFichiers = new Fichiers();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oFichiers->setId_Fichiers($nID))
		return $oFichiers->deleteMyselfId_Fichiers($nID);
	//Failed end
	return false;
};

///[FUNCTION][FichiersgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function FichiersgetAllInstance(){
	//Our object declaration
	$oFichiers = new Fichiers();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oFichiers->getColumns() . "\r\n" . "FROM " . $oFichiers->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oFichiers->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oFichiers->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oFichiers = new Fichiers();
		//load the data
		$oFichiers->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oFichiers->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][FichiersManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function FichiersManager(){
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
			echo FichiersgetFromID($nId);
			break;
		case "SAVE" :
			echo FichierssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo FichiersdeleteFromID($nId);
			break;
		case "LIST" :
			echo FichiersgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
FichiersManager();

?>