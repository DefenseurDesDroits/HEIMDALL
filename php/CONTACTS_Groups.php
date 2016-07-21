<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-21 10:11:52
//Filename : Contacts_Groups.php
//Description : Table des groups héritant de la table Contacts


//include to dtb connection
include "Contacts_Contacts.php";

///[CLASS][Groups]Table des groups héritant de la table Contacts
///[AUTHOR]Ludo
class Groups extends Contacts{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$GroupsmemberSet = array(		

			// ///[MEMBER][integer][nId_Groups]Identifiant de la table Groups. Clef étrangère sur la table contact
			//"nId_Groups" => 0 //inherited from => Contacts.Contacts.nId_Contacts,
			///[MEMBER][string][jsonUGrp_Json]Json, liste des utilisateurs
			"jsonUGrp_Json" => "",
			///[MEMBER][boolean][bFichiers]Ce groupe héberge t'il des fichiers ?
			"bFichiers" => false
		);
		//get the legacy
		$this->members += $GroupsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Groups]Method to get the Id_Groups
	///[RETURNS]The Id_Groups
	public function getId_Groups(){
		//Return the getter in inheritage
		return $this->getId_Contacts();
	}

	///[METHOD][getUGrp_Json]Method to get the UGrp_Json
	///[RETURNS]The UGrp_Json
	public function getUGrp_Json(){
		//Return the member
		return $this->members["jsonUGrp_Json"];
	}

	///[METHOD][getFichiers]Method to get the Fichiers
	///[RETURNS]The Fichiers
	public function getFichiers(){
		//Return the member
		return $this->members["bFichiers"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Groups]Method to set the Id_Groups
	///[PARAMETER][integer][$nValue]Our new value for Id_Groups
	///[RETURNS]Boolean true if done 
	public function setId_Groups($nValue){
		//Return the member
		return $this->setId_Contacts($nValue);
	}

	///[METHOD][setUGrp_Json]Method to set the UGrp_Json
	///[PARAMETER][string][$sValue]Our new value for UGrp_Json
	///[RETURNS]Boolean true if done 
	public function setUGrp_Json($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			 $this->members["jsonUGrp_Json"] = $sValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setFichiers]Method to set the Fichiers
	///[PARAMETER][boolean][$bValue]Our new value for Fichiers
	///[RETURNS]Boolean true if done 
	public function setFichiers($bValue){
		//security on null guy !!!
		if($bValue == null)
			return false;
		//security on type guy !!!
		if(getType($bValue) == 'boolean'){
			 $this->members["bFichiers"] = $bValue;
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
			return parent::getColumns($bId) . ", xxx.Groups.Id_Groups, xxx.Groups.UGrp_Json, xxx.Groups.Fichiers";
		return parent::getColumns($bId) . ", xxx.Groups.Id_Groups, xxx.Groups.UGrp_Json, xxx.Groups.Fichiers";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Groups" => "xxx.Groups.Id_Groups", 
			"jsonUGrp_Json" => "xxx.Groups.UGrp_Json", 
			"bFichiers" => "xxx.Groups.Fichiers"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Groups";
		return parent::getTable($bTrueName) . ", xxx.Groups";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions();
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Contacts.Id_Contacts =  xxx.Groups.Id_Groups";
		else
			return " xxx.Contacts.Id_Contacts = xxx.Groups.Id_Groups";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . $this->getLinkConditions() . " \r\nAND xxx.Groups.Id_Groups = " . Quotes($this->getId_Groups());
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
		
		$sValues .= Quotes( $this->getId_Groups());
		$sValues .= ", " . Quotes( $this->getUGrp_Json());
		$sValues .= ", " . Quotes( $this->getFichiers());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		//return the query !
		return parent::getInsertQuery() . ";\r\n" . "INSERT INTO " . $this->getTable() . " (" . $this->getColumns(false) . ")" . "\r\n" . "VALUES(" . $this->getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . $this->getTable() . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  $this->getTable() . "." . "UGrp_Json  = " . Quotes($this->getUGrp_Json());
		$Query .= ", " .  $this->getTable() . "." . "Fichiers  = " . Quotes($this->getFichiers());
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
		if($this->getId_Groups() == 0)
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