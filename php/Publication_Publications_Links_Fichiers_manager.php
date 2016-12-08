<?PHP

//Module : Contacts
//Created by : Ludowic EMMANUEL
//Generated on : 2016-12-08 16:45:00
//Filename : Publication_Publications_Links_Fichiers_manager.php
//Description : Manage la relation entre Publications et Fichiers

include_once("queryTools.php");

//include to dtb connection
include_once("PUBLICATIONS_Fichiers.php");

///[FUNCTION][InfosgetAllInstance]Function to get all the instance with : a contact info
///[PARAMETER][integer][$nId_Fichiers]the id contact infos we want to
///[RETURNS]array of element
function InfosgetAllInstanceWith($nId_Contact, $userId = 0){
	//Our object declaration
	$oInfos = new Fichiers();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oInfos->getColumns() . "\r\n" . "FROM " . $oInfos->getTable() . "\r\n" ;
	//Link Condition
	$sLinks = $oInfos->getLinkConditions(true);
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
	
    $sQuery .= "\r\n" . "AND xxx.fichies.id_publications = " . Quotes($nId_Contact);

	//right part !!!
    if($userId != 0)
        $sQuery .= "\r\n" . createRightsCondition($userId);

	/* Don't forget to override to use $oAgent !!! */
	
	//Open the query
	$GLOBALS["oConnection"]->open();
	//Get the array
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oInfos->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oInfos = new Fichiers();
		//load the data
		$oInfos->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oInfos->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return json_encode($ary_Result);
};

///[FUNCTION][InfosManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function LinksManager(){
	//Our operator
	$nId = $_POST["Id"];
    //Our object's id declaration
    $nId_Items = 0;

	//Our json
	if(array_key_exists("Data", $_POST))
		$sJson = $_POST["Data"];
	else
		$sJson = "";
	//Our Action
	$sAction = $_POST["Action"];
    //Our json
	if(array_key_exists("Id_Item", $_POST))
		$nId_Items = intval( $_POST["Id_Item"]);
	else
		$nId_Items = 0;
	
	switch($sAction){
		case "LIST" :
			echo InfosgetAllInstanceWith($nId_Items,  $nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
LinksManager();

?>