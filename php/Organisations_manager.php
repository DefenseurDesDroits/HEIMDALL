<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-16 12:05:35
//Filename : Organisations_manager.php
//Description : Table des organisations. héritant de celle des contacts


//include to dtb connection
include_once "CONTACTS_Organisations.php";

///[FUNCTION][OrganisationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function OrganisationsgetFromID($nId){
	//Our object declaration
	$oOrganisations = new Organisations();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oOrganisations->setId_Organisations($nId))
		$oOrganisations->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oOrganisations->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][OrganisationssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function OrganisationssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oOrganisations = new Organisations();
	
	//Load from Json !
	$oOrganisations->loadFromJson($jsonObj);
	//save the changes
	$oOrganisations->save($oAgent);
	
	//Return the present states
	return OrganisationsgetFromID( $oOrganisations->getId_Organisations() );
};

///[FUNCTION][OrganisationsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function OrganisationsdeleteFromID($nID){
	//Our object declaration
	$oOrganisations = new Organisations();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oOrganisations->setId_Organisations($nID))
		return $oOrganisations->deleteMyselfId_Organisations($nID);
	//Failed end
	return false;
};

///[FUNCTION][OrganisationsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function OrganisationsgetAllInstance(){
	//Our object declaration
	$oOrganisations = new Organisations();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oOrganisations->getColumns() . "\r\n" . "FROM " . $oOrganisations->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oOrganisations->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oOrganisations->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oOrganisations = new Organisations();
		//load the data
		$oOrganisations->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oOrganisations->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][OrganisationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function OrganisationsManager(){
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
			echo OrganisationsgetFromID($nId);
			break;
		case "SAVE" :
			echo OrganisationssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo OrganisationsdeleteFromID($nId);
			break;
		case "LIST" :
			echo OrganisationsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
OrganisationsManager();

?>