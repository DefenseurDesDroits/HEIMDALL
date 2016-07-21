<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-21 10:11:52
//Filename : Users_manager.php
//Description : Table des utilisateurs, héritant de celle des contacts


//include to dtb connection
include "Contacts_Users.php";

///[FUNCTION][UsersgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function UsersgetFromID($nId){
	//Our object declaration
	$oUsers = new Users();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oUsers->setId_Users($nId))
		$oUsers->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oUsers->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][UserssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function UserssaveFromJson($jsonObj){
	//Our object declaration
	$oUsers = new Users();
	
	//Load from Json !
	$oUsers->loadFromJson($jsonObj);
	//save the changes
	$oUsers->save(null);
	
	//Return the present states
	return $oUsersgetFromID( $oUsers->getId_Users() );
};

///[FUNCTION][UsersdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function UsersdeleteFromID($nID){
	//Our object declaration
	$oUsers = new Users();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oUsers->setId_Users($nID))
		return $oUsers->deleteMyselfId_Users($nID);
	//Failed end
	return false;
};

///[FUNCTION][UsersgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function UsersgetAllInstance(){
	//Our object declaration
	$oUsers = new Users();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oUsers->getColumns() . "\r\n" . "FROM " . $oUsers->getTable() ;
	//Link Condition
	$sLinks = $oUsers->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oUsers->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oUsers = new Users();
		//load the data
		$oUsers->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oUsers->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][UsersManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function UsersManager(){
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
			echo UsersgetFromID($nId);
			break;
		case "SAVE" :
			echo UserssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo UsersdeleteFromID($nId);
			break;
		case "LIST" :
			echo UsersgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
UsersManager();

?>