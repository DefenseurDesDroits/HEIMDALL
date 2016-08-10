<?PHP

//Module : Contacts
//Created by : Ludowic EMMANUEL
//Generated on : 2016-08-10 00:00:00
//Filename : Contact_Infos_Links_Infos_manager.php
//Description : Manage la relation entre Contact info et Infos

//include to dtb connection
include_once("CONTACTS_Infos.php");

///[FUNCTION][InfosgetAllInstance]Function to get all the instance with : a contact info
///[PARAMETER][integer][$nId_Contact_Infos]the id contact infos we want to
///[RETURNS]array of element
function InfosgetAllInstanceWith($nId_Contact_Infos){
	//Our object declaration
	$oInfos = new Infos();
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
	
    $sQuery .= "\r\n" . "AND xxx.infos.id_contact_infos = " . Quotes($nId_Contact_Infos);

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
		$oInfos = new Infos();
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
		case "LIST" :
			echo InfosgetAllInstanceWith($nID);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
LinksManager();

?>