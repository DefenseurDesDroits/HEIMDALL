<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:52
//Filename : Contact_Infos_manager.php
//Description : Table des informations liées au contact


//include to dtb connection
include "Contacts_Contact_Infos.php";

///[FUNCTION][Contact_InfosgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
public function Contact_InfosgetFromID($nId){
	//Our object declaration
	$oContact_Infos = new Contact_Infos();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oContact_Infos->setId_Contact_Infos($nId))
		$oContact_Infos->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oContact_Infos->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][Contact_InfossaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
public function Contact_InfossaveFromJson($jsonObj){
	//Our object declaration
	$oContact_Infos = new Contact_Infos();
	
	//Load from Json !
	$oContact_Infos->loadFromJson($jsonObj);
	//save the changes
	$oContact_Infos->save(null);
	
	//Return the present states
	return $oContact_InfosgetFromID( $oContact_Infos->getId_Contact_Infos() );
};

///[FUNCTION][Contact_InfosdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
public function Contact_InfosdeleteFromID($nID){
	//Our object declaration
	$oContact_Infos = new Contact_Infos();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oContact_Infos->setId_Contact_Infos($nID))
		return $oContact_Infos->deleteMyselfId_Contact_Infos($nID);
	//Failed end
	return false;
};

///[FUNCTION][Contact_InfosManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
public function Contact_InfosManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo Contact_InfosgetFromID($nId);
			break;
		case "SAVE" :
			echo Contact_InfossaveFromJson($sJson);
			break;
		case "DELETE" :
			echo Contact_InfosdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
Contact_InfosManager();

?>