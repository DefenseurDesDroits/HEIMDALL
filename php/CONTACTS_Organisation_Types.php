<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-08-30 11:54:32
//Filename : Contacts_Organisation_Types.php
//Description : Tables des différants type d'organisations possibles


//include to dtb connection
include "connection.php";

///[CLASS][Organisation_Types]Tables des différants type d'organisations possibles
///[AUTHOR]Ludo
class Organisation_Types{
	//our member data
	protected $members = array(	

		///[MEMBER][integer][nId_Organisation_Types]Identifiant de la table en Auto-Incrément
		"nId_Organisation_Types" => 0,
		///[MEMBER][string][sNom]Nom du type d'organisation
		"sNom" => ""
	);
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//nothing to declare Chief !
	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Organisation_Types]Method to get the Id_Organisation_Types
	///[RETURNS]The Id_Organisation_Types
	public function getId_Organisation_Types(){
		//Return the member
		return $this->members["nId_Organisation_Types"];
	}

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	public function getNom(){
		//Return the member
		return $this->members["sNom"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Organisation_Types]Method to set the Id_Organisation_Types
	///[PARAMETER][integer][$nValue]Our new value for Id_Organisation_Types
	///[RETURNS]Boolean true if done 
	public function setId_Organisation_Types($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Organisation_Types"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setNom]Method to set the Nom
	///[PARAMETER][string][$sValue]Our new value for Nom
	///[RETURNS]Boolean true if done 
	public function setNom($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sNom"] = substr($sValue, 0, 32);
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
			return "xxx.Organisation_Types.Id_Organisation_Types, xxx.Organisation_Types.Nom";
		return "xxx.Organisation_Types.Nom";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return ", Nom";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Organisation_Types" => "xxx.Organisation_Types.Id_Organisation_Types", 
			"sNom" => "xxx.Organisation_Types.Nom"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Organisation_Types";
		return "xxx.Organisation_Types";
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
		return "xxx.Organisation_Types.Id_Organisation_Types = " . Quotes($this->getId_Organisation_Types());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Organisation_Types::getColumns() . "\r\n" . "FROM " . Organisation_Types::getTable() . "\r\n" . "WHERE " . Organisation_Types::getConditions();
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
		$sQuery = Organisation_Types::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getNom());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Organisation_Types" . " (" . Organisation_Types::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Organisation_Types::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= "UPDATE " . "xxx.Organisation_Types" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Nom  = " . Quotes($this->getNom());
		//build the condition
		$Query .= "WHERE Id_Organisation_Types = " . Quotes($this->getId_Organisation_Types());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Organisation_Types" . " WHERE " . $this->getConditions();
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
		//Our ID
		$nId = $this->getId_Organisation_Types();
		//Get the query !!!
		if($nId == 0)
		{
			$sQuery = Organisation_Types::getInsertQuery();
		}
		else
			$sQuery = Organisation_Types::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Organisation_Types::loadFromConnection($oAgent);
	}



};
?>