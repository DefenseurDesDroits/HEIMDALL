<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-19 05:26:31
//Filename : Organisations_manager.php
//Description : Table des organisations. héritant de celle des contacts


//include to dtb connection
include "Contacts_Organisations.php";

///[FUNCTION][OrganisationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function OrganisationsgetFromID($nId){
	//Our object declaration
	$oOrganisations = new Organisations();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oOrganisations->setId_Organisations($nId))
		$oOrganisations->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oOrganisations->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][OrganisationssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
function OrganisationssaveFromJson($jsonObj){
	//Our object declaration
	$oOrganisations = new Organisations();
	
	//Load from Json !
	$oOrganisations->loadFromJson($jsonObj);
	//save the changes
	$oOrganisations->save(null);
	
	//Return the present states
	return $oOrganisationsgetFromID( $oOrganisations->getId_Organisations() );
};

///[FUNCTION][OrganisationsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
function OrganisationsdeleteFromID($nID){
	//Our object declaration
	$oOrganisations = new Organisations();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oOrganisations->setId_Organisations($nID))
		return $oOrganisations->deleteMyselfId_Organisations($nID);
	//Failed end
	return false;
};

///[FUNCTION][OrganisationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function OrganisationsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo OrganisationsgetFromID($nId);
			break;
		case "SAVE" :
			echo OrganisationssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo OrganisationsdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
OrganisationsManager();

?>