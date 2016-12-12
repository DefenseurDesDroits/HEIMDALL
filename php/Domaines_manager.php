<?PHP
//Module : Publications
//Created by : LUDO
//Generated on : 2016-12-09 10:49:49
//Filename : Domaines_manager.php
//Description : Table gérant les domaines des publications


//include to dtb connection
include_once "PUBLICATIONS_Domaines.php";

///[FUNCTION][DomainesgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function DomainesgetFromID($nId){
	//Our object declaration
	$oDomaines = new Domaines();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oDomaines->setId_Domaines(intval($nId)))
		$oDomaines->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oDomaines->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][DomainessaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function DomainessaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oDomaines = new Domaines();
	
	//Load from Json !
	$oDomaines->loadFromJson($jsonObj);
	//save the changes
	$oDomaines->save($oAgent);
	
	//Return the present states
	return DomainesgetFromID( $oDomaines->getId_Domaines() );
};

///[FUNCTION][DomainesdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function DomainesdeleteFromID($nID){
	//Our object declaration
	$oDomaines = new Domaines();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oDomaines->setId_Domaines($nID))
		return $oDomaines->deleteMyselfId_Domaines($nID);
	//Failed end
	return false;
};

///[FUNCTION][DomainesgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function DomainesgetAllInstance(){
	//Our object declaration
	$oDomaines = new Domaines();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oDomaines->getColumns() . "\r\n" . "FROM " . $oDomaines->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oDomaines->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oDomaines->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oDomaines = new Domaines();
		//load the data
		$oDomaines->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oDomaines->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][DomainesManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function DomainesManager(){
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
			echo DomainesgetFromID($nId);
			break;
		case "SAVE" :
			echo DomainessaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo DomainesdeleteFromID($nId);
			break;
		case "LIST" :
			echo DomainesgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
DomainesManager();

?>