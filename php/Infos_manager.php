<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-19 05:26:31
//Filename : Infos_manager.php
//Description : Table des adresses. Hérité de la classe item.


//include to dtb connection
include "Contacts_Infos.php";

///[FUNCTION][InfosgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function InfosgetFromID($nId){
	//Our object declaration
	$oInfos = new Infos();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oInfos->setId_Infos($nId))
		$oInfos->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oInfos->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][InfossaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function InfossaveFromJson($jsonObj){
	//Our object declaration
	$oInfos = new Infos();
	
	//Load from Json !
	$oInfos->loadFromJson($jsonObj);
	//save the changes
	$oInfos->save(null);
	
	//Return the present states
	return $oInfosgetFromID( $oInfos->getId_Infos() );
};

///[FUNCTION][InfosdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function InfosdeleteFromID($nID){
	//Our object declaration
	$oInfos = new Infos();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oInfos->setId_Infos($nID))
		return $oInfos->deleteMyselfId_Infos($nID);
	//Failed end
	return false;
};

///[FUNCTION][InfosManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function InfosManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo InfosgetFromID($nId);
			break;
		case "SAVE" :
			echo InfossaveFromJson($sJson);
			break;
		case "DELETE" :
			echo InfosdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
InfosManager();

?>