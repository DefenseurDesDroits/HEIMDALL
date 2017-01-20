<?PHP
//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:37
//Filename : Mouvements_manager.php
//Description : La table qui note les mouvements


//include to dtb connection
include_once "STOCKS_Mouvements.php";

///[FUNCTION][MouvementsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function MouvementsgetFromID($nId){
	//Our object declaration
	$oMouvements = new Mouvements();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oMouvements->setId_Contacts(intval($nId)))
		$oMouvements->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oMouvements->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][MouvementssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function MouvementssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oMouvements = new Mouvements();
	
	//Load from Json !
	$oMouvements->loadFromJson($jsonObj);
	//save the changes
	$oMouvements->save($oAgent);
	
	//Return the present states
	return MouvementsgetFromID( $oMouvements->getId_Contacts() );
};

///[FUNCTION][MouvementsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function MouvementsdeleteFromID($nID){
	//Our object declaration
	$oMouvements = new Mouvements();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oMouvements->setId_Contacts($nID))
		return $oMouvements->deleteMyselfId_Contacts($nID);
	//Failed end
	return false;
};

///[FUNCTION][MouvementsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function MouvementsgetAllInstance(){
	//Our object declaration
	$oMouvements = new Mouvements();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oMouvements->getColumns() . "\r\n" . "FROM " . $oMouvements->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oMouvements->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oMouvements->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oMouvements = new Mouvements();
		//load the data
		$oMouvements->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oMouvements->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][MouvementsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function MouvementsManager(){
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
			echo MouvementsgetFromID($nId);
			break;
		case "SAVE" :
			echo MouvementssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo MouvementsdeleteFromID($nId);
			break;
		case "LIST" :
			echo MouvementsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
MouvementsManager();

?>