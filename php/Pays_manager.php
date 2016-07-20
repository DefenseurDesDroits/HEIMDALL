<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-20 04:38:57
//Filename : Pays_manager.php
//Description : Tables des pays


//include to dtb connection
include "Contacts_Pays.php";

///[FUNCTION][PaysgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function PaysgetFromID($nId){
	//Our object declaration
	$oPays = new Pays();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oPays->setId_Pays($nId))
		$oPays->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oPays->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][PayssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function PayssaveFromJson($jsonObj){
	//Our object declaration
	$oPays = new Pays();
	
	//Load from Json !
	$oPays->loadFromJson($jsonObj);
	//save the changes
	$oPays->save(null);
	
	//Return the present states
	return $oPaysgetFromID( $oPays->getId_Pays() );
};

///[FUNCTION][PaysdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function PaysdeleteFromID($nID){
	//Our object declaration
	$oPays = new Pays();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oPays->setId_Pays($nID))
		return $oPays->deleteMyselfId_Pays($nID);
	//Failed end
	return false;
};

///[FUNCTION][PaysgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function PaysgetAllInstance(){
	//Our object declaration
	$oPays = new Pays();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oPays->getColumns() . "\r\n" . "FROM " . $oPays->getTable() ;
	//Link Condition
	$sLinks = $oPays->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oPays->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oPays = new Pays();
		//load the data
		$oPays->loadFromJson(json_encode($ary_[$nLine]), true);
		//add the data
		$ary_Result[$nLine] = $oPays->exportToJson();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][PaysManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function PaysManager(){
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
			echo PaysgetFromID($nId);
			break;
		case "SAVE" :
			echo PayssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo PaysdeleteFromID($nId);
			break;
		case "LIST" :
			echo PaysgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
PaysManager();

?>