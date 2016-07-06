<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:52
//Filename : Accreditations_manager.php
//Description : Table des accréditations sur les items


//include to dtb connection
include "Contacts_Accreditations.php";

///[FUNCTION][AccreditationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
public function AccreditationsgetFromID($nId){
	//Our object declaration
	$oAccreditations = new Accreditations();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oAccreditations->setId_Accreditations($nId))
		$oAccreditations->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oAccreditations->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][AccreditationssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
public function AccreditationssaveFromJson($jsonObj){
	//Our object declaration
	$oAccreditations = new Accreditations();
	
	//Load from Json !
	$oAccreditations->loadFromJson($jsonObj);
	//save the changes
	$oAccreditations->save(null);
	
	//Return the present states
	return $oAccreditationsgetFromID( $oAccreditations->getId_Accreditations() );
};

///[FUNCTION][AccreditationsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
public function AccreditationsdeleteFromID($nID){
	//Our object declaration
	$oAccreditations = new Accreditations();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oAccreditations->setId_Accreditations($nID))
		return $oAccreditations->deleteMyselfId_Accreditations($nID);
	//Failed end
	return false;
};

///[FUNCTION][AccreditationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
public function AccreditationsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo AccreditationsgetFromID($nId);
			break;
		case "SAVE" :
			echo AccreditationssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo AccreditationsdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
AccreditationsManager();

?>