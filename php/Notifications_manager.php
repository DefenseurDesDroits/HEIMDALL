<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:52
//Filename : Notifications_manager.php
//Description : Tables des notifications utilisateurs


//include to dtb connection
include "Contacts_Notifications.php";

///[FUNCTION][NotificationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
public function NotificationsgetFromID($nId){
	//Our object declaration
	$oNotifications = new Notifications();
	//Our variable declaration
	$jsonData = "";
	
	//if the assignation is good
	if($oNotifications->setId_Notifications($nId))
		$oNotifications->loadFromConnection(null);
	
	//Get the Json
	$jsonData = $oNotifications->exportToJson();
	
	//return the Json
	return $jsonData;
};

///[FUNCTION][NotificationssaveFromJson]Function to save the an object from it's Json expression
///[PARAMETER][json][$jsonObj]our json
///[RETURNS]json, hte json state of the object after change
public function NotificationssaveFromJson($jsonObj){
	//Our object declaration
	$oNotifications = new Notifications();
	
	//Load from Json !
	$oNotifications->loadFromJson($jsonObj);
	//save the changes
	$oNotifications->save(null);
	
	//Return the present states
	return $oNotificationsgetFromID( $oNotifications->getId_Notifications() );
};

///[FUNCTION][NotificationsdeleteFromID]Function to save the an object from it's Json expression
///[PARAMETER][integer][$nID]the id of the object we must delete
///[RETURNS]boolean, true if done
public function NotificationsdeleteFromID($nID){
	//Our object declaration
	$oNotifications = new Notifications();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oNotifications->setId_Notifications($nID))
		return $oNotifications->deleteMyselfId_Notifications($nID);
	//Failed end
	return false;
};

///[FUNCTION][NotificationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
public function NotificationsManager(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	$sJson = $_POST["Data"];
	//Our Action
	$sAction = $_POST["Action"];
	
	switch($sAction){
		case "GET" :
			echo NotificationsgetFromID($nId);
			break;
		case "SAVE" :
			echo NotificationssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo NotificationsdeleteFromID($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
NotificationsManager();

?>