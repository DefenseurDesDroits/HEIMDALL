<?PHP
//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:37
//Filename : Locations_manager.php
//Description : Lieux du stock


//include to dtb connection
include_once "STOCKS_Locations.php";

///[FUNCTION][LocationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function LocationsgetFromID($nId){
	//Our object declaration
	$oLocations = new Locations();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oLocations->setId_Locations(intval($nId)))
		$oLocations->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oLocations->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][LocationssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function LocationssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oLocations = new Locations();
	
	//Load from Json !
	$oLocations->loadFromJson($jsonObj);
	//save the changes
	$oLocations->save($oAgent);
	
	//Return the present states
	return LocationsgetFromID( $oLocations->getId_Locations() );
};

///[FUNCTION][LocationsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function LocationsdeleteFromID($nID){
	//Our object declaration
	$oLocations = new Locations();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oLocations->setId_Locations($nID))
		return $oLocations->deleteMyselfId_Locations($nID);
	//Failed end
	return false;
};

///[FUNCTION][LocationsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function LocationsgetAllInstance(){
	//Our object declaration
	$oLocations = new Locations();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oLocations->getColumns() . "\r\n" . "FROM " . $oLocations->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oLocations->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oLocations->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oLocations = new Locations();
		//load the data
		$oLocations->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oLocations->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][LocationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function LocationsManager(){
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
			echo LocationsgetFromID($nId);
			break;
		case "SAVE" :
			echo LocationssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo LocationsdeleteFromID($nId);
			break;
		case "LIST" :
			echo LocationsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
LocationsManager();

?>