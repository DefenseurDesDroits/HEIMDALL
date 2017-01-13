<?PHP
//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:37
//Filename : Stocks_manager.php
//Description : Notre table pour gérer les tables entre la location et les publications


//include to dtb connection
include_once "STOCKS_Stocks.php";

///[FUNCTION][StocksgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function StocksgetFromID($nId){
	//Our object declaration
	$oStocks = new Stocks();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oStocks->setId_Stocks(intval($nId)))
		$oStocks->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oStocks->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][StockssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[PARAMETER][unkown][$jsonObj]our agent
///[RETURNS]json, hte json state of the object after change
function StockssaveFromJson($jsonObj, $oAgent){
	//Our object declaration
	$oStocks = new Stocks();
	
	//Load from Json !
	$oStocks->loadFromJson($jsonObj);
	//save the changes
	$oStocks->save($oAgent);
	
	//Return the present states
	return StocksgetFromID( $oStocks->getId_Stocks() );
};

///[FUNCTION][StocksdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function StocksdeleteFromID($nID){
	//Our object declaration
	$oStocks = new Stocks();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oStocks->setId_Stocks($nID))
		return $oStocks->deleteMyselfId_Stocks($nID);
	//Failed end
	return false;
};

///[FUNCTION][StocksgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function StocksgetAllInstance(){
	//Our object declaration
	$oStocks = new Stocks();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oStocks->getColumns() . "\r\n" . "FROM " . $oStocks->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oStocks->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oStocks->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oStocks = new Stocks();
		//load the data
		$oStocks->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oStocks->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][StocksManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function StocksManager(){
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
			echo StocksgetFromID($nId);
			break;
		case "SAVE" :
			echo StockssaveFromJson($sJson, $oAgent);
			break;
		case "DELETE" :
			echo StocksdeleteFromID($nId);
			break;
		case "LIST" :
			echo StocksgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
StocksManager();

?>