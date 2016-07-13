<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-13 09:15:42
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

///[FUNCTION][UsersManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function UsersManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
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
		default :
			break;
	};
};

//Do the job dude !!!
UsersManager();

?>