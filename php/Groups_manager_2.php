<?PHP
//Module : Contacts
//Created by : Ludowic "MagnusMoi" EMMANUEL
//Generated on : 2016-09-06 10:18:42
//Filename : Groups_manager_2.php
//Description : Table des groups héritant de la table Contacts


//include to dtb connection
include_once "CONTACTS_Groups.php";

///[FUNCTION][GroupsgetAllInstance]Function to save the an object from it's Json expression
///[RETURNS]array of element
function GroupsgetAllChildrenOf($nIdParent){
	//Our object declaration
	$oGroups = new Groups();
	//Our select query
	$sQuery = "SELECT DISTINCT " . $oGroups->getColumns() . "\r\n" . "FROM " . $oGroups->getTable() . "\r\n";
	//Link Condition
	$sLinks = $oGroups->getLinkConditions(true);
	//The array we get
	$ary_ = array();
	//The array we throw
	$ary_Result = array();
	//Our count
	$nCount = 0;
	//Our iterrator
	$nLine = 0;
	
	//Add the link
	// if($sLinks != "")
	// 	$sQuery .= "WHERE " . $sLinks;
	
    $sQuery .= "WHERE " . $sLinks . "\r\n" . "AND Id_Noeuds_Parent = " . $nIdParent;

	/* Don't forget to override to use $oAgent !!! */
	
	//Open the query
	$GLOBALS["oConnection"]->open();
	//Get the array
	$ary_ =  $GLOBALS["oConnection"]->selectRequest($sQuery, explode( ", ", $oGroups->getColumns()), null);
	//Close the query
	$GLOBALS["oConnection"]->close();
	
	/* So ... we got the array !!! !!! */
	/* Create the result array !!! !!! */
	
	//Get the loop
	$nCount = count($ary_);
	//Do the loop
	while($nLine < $nCount){
		//create a new instance
		$oGroups = new Groups();
		//load the data
		$oGroups->loadFromArray($ary_[$nLine], true);
		//add the data
		$ary_Result[$nLine] = $oGroups;
		//$ary_Result[$nLine] = $oGroups->exportToArray();
		//Next
		$nLine++;
	}
	
	//Returns
	return $ary_Result;
	//return json_encode($ary_Result);
};

///[FUNCTION][GroupsManager]Function to manage DAO from a AJAX call
///[RETURNS]boolean, true if done
function GroupsManager2(){
	//Our object's id declaration
	$nID = $_POST["Id"];
	//Our json
	if(array_key_exists("Data", $_POST))
		$sJson = $_POST["Data"];
	else
		$sJson = "";
	//Our Action
	$sAction = $_POST["Action"];
	//Our Agent
	$oAgent = $_POST["Session"];
	
	switch($sAction){
        case "CHILDREN" :
			echo json_encode(GroupsgetAllChildrenOf($nId));
			//echo GroupsgetAllChildrenOf($nId);
			break;
		default :
			break;
	};
};

//Do the job dude !!!
//GroupsManager2();

?>