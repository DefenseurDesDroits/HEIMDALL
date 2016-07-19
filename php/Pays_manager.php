<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-19 05:26:31
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

///[FUNCTION][PaysManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function PaysManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
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
		default :
			break;
	};
};

//Do the job dude !!!
PaysManager();

?>