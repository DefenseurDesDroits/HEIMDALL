<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-21 10:11:52
//Filename : Contacts_Items.php
//Description : Table de tous les items avec des droits


//include to dtb connection
include "connection.php";

///[CLASS][Items]Table de tous les items avec des droits
///[AUTHOR]Ludo
class Items{
	//our member data
	protected $members = array(	

		///[MEMBER][integer][nId_Items]Identité de la table
		"nId_Items" => 0,
		///[MEMBER][integer][nId_groups_owner]Groupe possedant l'item
		"nId_groups_owner" => 0,
		///[MEMBER][integer][nId_Accreditations_Item]Clef étrangère sur le niveau d'accreditation
		"nId_Accreditations_Item" => 0,
		///[MEMBER][string "yyyymmdd"][dtModifie]date de dernière modification
		"dtModifie" => ""
	);
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//nothing to declare Chief !
	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Items]Method to get the Id_Items
	///[RETURNS]The Id_Items
	public function getId_Items(){
		//Return the member
		return $this->members["nId_Items"];
	}

	///[METHOD][getId_groups_owner]Method to get the Id_groups_owner
	///[RETURNS]The Id_groups_owner
	public function getId_groups_owner(){
		//Return the member
		return $this->members["nId_groups_owner"];
	}

	///[METHOD][getId_Accreditations_Item]Method to get the Id_Accreditations_Item
	///[RETURNS]The Id_Accreditations_Item
	public function getId_Accreditations_Item(){
		//Return the member
		return $this->members["nId_Accreditations_Item"];
	}

	///[METHOD][getModifie]Method to get the Modifie
	///[RETURNS]The Modifie
	public function getModifie(){
		//Return the member
		return $this->members["dtModifie"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Items]Method to set the Id_Items
	///[PARAMETER][integer][$nValue]Our new value for Id_Items
	///[RETURNS]Boolean true if done 
	public function setId_Items($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Items"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_groups_owner]Method to set the Id_groups_owner
	///[PARAMETER][integer][$nValue]Our new value for Id_groups_owner
	///[RETURNS]Boolean true if done 
	public function setId_groups_owner($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_groups_owner"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Accreditations_Item]Method to set the Id_Accreditations_Item
	///[PARAMETER][integer][$nValue]Our new value for Id_Accreditations_Item
	///[RETURNS]Boolean true if done 
	public function setId_Accreditations_Item($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Accreditations_Item"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setModifie]Method to set the Modifie
	///[PARAMETER][string][$dtValue]Our new value for Modifie
	///[RETURNS]Boolean true if done 
	public function setModifie($dtValue){
		//security on null guy !!!
		if($dtValue == null)
			return false;
		//security on type guy !!!
		if(getType($dtValue) == 'string'){
			 $this->members["dtModifie"] = $dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this is the section we custumize

	///[METHOD][getColumns]Method to get the list of the column in a string 
	///[PARAMETER][boolean][$bId = true]boolean, write the column Id (primary key) or not? 
	///[RETURNS][string]string, our columns in a list 
	public function getColumns($bId = true){
		if( $bId)
			return "xxx.Items.Id_Items, xxx.Items.Id_groups_owner, xxx.Items.Id_Accreditations_Item, xxx.Items.Modifie";
		return "xxx.Items.Id_groups_owner, xxx.Items.Id_Accreditations_Item, xxx.Items.Modifie";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Items" => "xxx.Items.Id_Items", 
			"nId_groups_owner" => "xxx.Items.Id_groups_owner", 
			"nId_Accreditations_Item" => "xxx.Items.Id_Accreditations_Item", 
			"dtModifie" => "xxx.Items.Modifie"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Items";
		return "xxx.Items";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		return "";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return "xxx.Items.Id_Items = " . Quotes($this->getId_Items());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . $this->getColumns() . "\r\n" . "FROM " . $this->getTable() . "\r\n" . "WHERE " . $this->getConditions();
	}


	///[METHOD][loadFromArray]Method to set the object fields from an array
	///[PARAMETER][string][$ary_]Our array with the correct fields
	///[PARAMETER][boolean][$bFromQuery]Our boolean to know if corresponding array is usefull
	///[RETURNS]boolean, true if done
	public function loadFromArray($ary_, $bFromQuery = false){
		//Our Corresponding set
		$bindSet = array();
		//If we want add Prefixe.Table
		if($bFromQuery){
			//get Corresponding set
			$bindSet = $this->getCorrespondanceArray();
			//Start a beautifull loop
			foreach($this->members as $key => $value){
				if(array_key_exists($bindSet[$key], $ary_))
					$this->members[$key] = $ary_[$bindSet[$key]];
			};
		}
		else
		{
			//Start a beautifull loop
			foreach($this->members as $key => $value){
				if(array_key_exists($key, $ary_))
					$this->members[$key] = $ary_[$key];
			};
		}
		//Return the job !
		return true;
	}


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][$sJson]Our string with Json encoding
	///[PARAMETER][boolean][$bFromQuery]Our boolean 
	///[RETURNS]boolean, true if done
	public function loadFromJson($sJson, $bFromQuery = false){
		//Our Json object
		$jsonSet = (array) json_decode($sJson);
		//Return the job !
		return $this->loadFromArray($jsonSet, $bFromQuery);
	}


	///[METHOD][loadFromConnection]Method to load from a connection
	///[PARAMETER][string][$session]Our string with Json encoding
	///[RETURNS]boolean, true if done
	public function loadFromConnection($oAgent){
		//Our query
		$sQuery = $this->getSelectQuery();
		//Our result object
		$ary_o = null;
		
		//open first
		$GLOBALS["oConnection"]->open();
		//do the select request
		$ary_o = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", $this->getColumns()), $oAgent);
		//Close now !!! It's not Jurassic Park here !!!
		$GLOBALS["oConnection"]->close();
		
		//now have we something ?
		if(count($ary_o) <= 0)
			return false;
		//Return the job !
		return $this->loadFromArray($ary_o[0], true);
	}


	///[METHOD][exportToArray]Method to export as an array the member value
	///[RETURNS]array, our array of value
	public function exportToArray(){
		//our copy
		$ary_ = $this->members;
		//Return the copy !
		return $ary_;
	}


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	public function exportToJson(){
		//Return the job !
		return json_encode($this->members);
	}


	///[METHOD][getValues]Method to get the values 
	///[RETURNS][string]string, our columns in a list 
	public function getValues(){
		//Our values string
		$sValues = "";
		
		$sValues .= Quotes( $this->getId_groups_owner());
		$sValues .= ", " . Quotes( $this->getId_Accreditations_Item());
		$sValues .= ", " . Quotes( $this->getModifie());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		//return the query !
		return "INSERT INTO " . $this->getTable() . " (" . $this->getColumns(false) . ")" . "\r\n" . "VALUES(" . $this->getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= "UPDATE " . $this->getTable() . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  $this->getTable() . "." . "Id_groups_owner  = " . Quotes($this->getId_groups_owner());
		$Query .= ", " .  $this->getTable() . "." . "Id_Accreditations_Item  = " . Quotes($this->getId_Accreditations_Item());
		$Query .= ", " .  $this->getTable() . "." . "Modifie  = " . Quotes($this->getModifie());
		//build the condition
		$Query .= "WHERE " . $this->getConditions();
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . $this->getTable() . " WHERE " . $this->getConditions();
	}


	///[METHOD][deleteMyself]Method to delte this instance
	///[PARAMETER][string][$oAgent]Agent who make the delete
	///[RETURNS]boolean, true if done
	public function deleteMyself($oAgent){
		//Our query
		$sQuery = $this->getDeleteQuery();
		
		//Use the connection object in : "php/connection.php"
		//open it
		$GLOBALS["oConnection"]->open();
		//do the job;
		$GLOBALS["oConnection"]->deleteRequest($sQuery, $oAgent);
		//don't be a douche : close it !!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return true;
	}


	///[METHOD][save]Method to save an object in the database
	///[PARAMETER][string][$oAgent]Agent who make the save
	///[RETURNS]boolean, true if done
	public function save($oAgent){
		//Our query
		$sQuery = "";
		//Get the query !!!
		if($this->getId_Items() == 0)
			$sQuery = $this->getInsertQuery();
		else
			$sQuery = $this->getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return $this->loadFromConnection($session, $url, $oAgent);
	}



};
?>