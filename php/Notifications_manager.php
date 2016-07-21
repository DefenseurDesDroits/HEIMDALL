<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-21 10:11:52
//Filename : Notifications_manager.php
//Description : Tables des notifications utilisateurs


//include to dtb connection
include "Contacts_Notifications.php";

///[FUNCTION][NotificationsgetFromID]Function to obtain the json data from 
///[PARAMETER][integer][$nId]id of the wanted object
///[RETURNS]string, our json ready to go
function NotificationsgetFromID($nId){
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
function NotificationssaveFromJson($jsonObj){
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
function NotificationsdeleteFromID($nID){
	//Our object declaration
	$oNotifications = new Notifications();
	
	/* Don't forget to override to use $oAgent !!! */
	
	//if the set is possible : delete it !
	if($oNotifications->setId_Notifications($nID))
		return $oNotifications->deleteMyselfId_Notifications($nID);
	//Failed end
	return false;
};

///[FUNCTION][NotificationsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function NotificationsgetAllInstance(){
	//Our object declaration
	$oNotifications = new Notifications();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oNotifications->getColumns() . "\r\n" . "FROM " . $oNotifications->getTable() ;
	//Link Condition
	$sLinks = $oNotifications->getLinkConditions(true);
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
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oNotifications->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oNotifications = new Notifications();
		//load the data
		$oNotifications->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oNotifications->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][NotificationsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function NotificationsManager(){
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
			echo NotificationsgetFromID($nId);
			break;
		case "SAVE" :
			echo NotificationssaveFromJson($sJson);
			break;
		case "DELETE" :
			echo NotificationsdeleteFromID($nId);
			break;
		case "LIST" :
			echo NotificationsgetAllInstance();
			break;
		default :
			break;
	};
};

//Do the job dude !!!
NotificationsManager();

?>