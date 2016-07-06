<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:52
//Filename : Noeuds_manager.php
//Description : Table pour gérer les noeuds


//include to dtb connection
include "Contacts_Noeuds.php";

///[FUNCTION][NoeudsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
public function NoeudsgetFromID($nId){
	//Our object declaration
	$oNoeuds = new Noeuds();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oNoeuds->setId_Noeuds($nId))
		$oNoeuds->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oNoeuds->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][NoeudssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
public function NoeudssaveFromJson($jsonObj){
	//Our object declaration
	$oNoeuds = new Noeuds();
	
	//Load from Json !
	$oNoeuds->loadFromJson($jsonObj);
	//save the changes
	$oNoeuds->save(null);
	
	//Return the present states
	return $oNoeudsgetFromID( $oNoeuds->getId_Noeuds() );
};

///[FUNCTION][NoeudsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
public function NoeudsdeleteFromID($nID){
	//Our object declaration
	$oNoeuds = new Noeuds();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oNoeuds->setId_Noeuds($nID))
		return $oNoeuds->deleteMyselfId_Noeuds($nID);
	//Failed end
	return false;
};

///[FUNCTION][NoeudsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
public function NoeudsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo NoeudsgetFromID($nId);
			break;
		case "SAVE" :
			echo NoeudssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo NoeudsdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
NoeudsManager();

?>