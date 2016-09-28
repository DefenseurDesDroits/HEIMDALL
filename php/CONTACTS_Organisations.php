<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-16 12:05:35
//Filename : Contacts_Organisations.php
//Description : Table des organisations. héritant de celle des contacts


//include to dtb connection
include_once "CONTACTS_Contacts.php";

///[CLASS][Organisations]Table des organisations. héritant de celle des contacts
///[AUTHOR]Ludo
class Organisations extends Contacts{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$OrganisationsmemberSet = array(		

			// ///[MEMBER][integer][nId_Organisations]Identifiant hérité de la table Contacts
			//"nId_Organisations" => 0 //inherited from => Contacts.Contacts.nId_Contacts,
			///[MEMBER][integer][nId_Organisation_Type]Clef étrangère sur la table Organistion_Types. Type de l'organisation
			"nId_Organisation_Type" => 0,
			///[MEMBER][string][sAcronyme]New Columns Created with Ludo Library
			"sAcronyme" => ""
		);
		//get the legacy
		$this->members += $OrganisationsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Organisations]Method to get the Id_Organisations
	///[RETURNS]The Id_Organisations
	public function getId_Organisations(){
		//Return the getter in inheritage
		return $this->getId_Contacts();
	}

	///[METHOD][getId_Organisation_Type]Method to get the Id_Organisation_Type
	///[RETURNS]The Id_Organisation_Type
	public function getId_Organisation_Type(){
		//Return the member
		return $this->members["nId_Organisation_Type"];
	}

	///[METHOD][getAcronyme]Method to get the Acronyme
	///[RETURNS]The Acronyme
	public function getAcronyme(){
		//Return the member
		return $this->members["sAcronyme"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Organisations]Method to set the Id_Organisations
	///[PARAMETER][integer][$nValue]Our new value for Id_Organisations
	///[RETURNS]Boolean true if done 
	public function setId_Organisations($nValue){
		//Return the member
		return $this->setId_Contacts($nValue);
	}

	///[METHOD][setId_Organisation_Type]Method to set the Id_Organisation_Type
	///[PARAMETER][integer][$nValue]Our new value for Id_Organisation_Type
	///[RETURNS]Boolean true if done 
	public function setId_Organisation_Type($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Organisation_Type"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setAcronyme]Method to set the Acronyme
	///[PARAMETER][string][$sValue]Our new value for Acronyme
	///[RETURNS]Boolean true if done 
	public function setAcronyme($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sAcronyme"] = substr($sValue, 0, 16);
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
			return parent::getColumns($bId) . ", xxx.Organisations.Id_Organisations, xxx.Organisations.Id_Organisation_Type, xxx.Organisations.Acronyme";
		return parent::getColumns($bId) . ", xxx.Organisations.Id_Organisations, xxx.Organisations.Id_Organisation_Type, xxx.Organisations.Acronyme";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return "Id_Organisations, Id_Organisation_Type, Acronyme";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Organisations" => "xxx.Organisations.Id_Organisations", 
			"nId_Organisation_Type" => "xxx.Organisations.Id_Organisation_Type", 
			"sAcronyme" => "xxx.Organisations.Acronyme"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Organisations";
		return parent::getTable($bTrueName) . ", xxx.Organisations";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions($bAll);
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Contacts.Id_Contacts =  xxx.Organisations.Id_Organisations";
		else
			return " xxx.Contacts.Id_Contacts = xxx.Organisations.Id_Organisations";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . Organisations::getLinkConditions() . " \r\nAND xxx.Organisations.Id_Organisations = " . Quotes($this->getId_Organisations());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Organisations::getColumns() . "\r\n" . "FROM " . Organisations::getTable() . "\r\n" . "WHERE " . Organisations::getConditions();
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
		$sQuery = Organisations::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_Organisations());
		$sValues .= ", " . Quotes( $this->getId_Organisation_Type());
		$sValues .= ", " . Quotes( $this->getAcronyme());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Organisations" . " (" . Organisations::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Organisations::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Organisations" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Id_Organisation_Type  = " . Quotes($this->getId_Organisation_Type());
		$Query .= ", " .  "Acronyme  = " . Quotes($this->getAcronyme());
		//build the condition
		$Query .= "WHERE Id_Organisations = " . Quotes($this->getId_Organisations());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Organisations" . " WHERE " . $this->getConditions();
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
		$nId = $this->getId_Organisations();
		//Get the query !!!
		if($nId == 0)
		{
			//Call the parent method
			parent::save($oAgent);
			$sQuery = Organisations::getInsertQuery();
		}
		else
			$sQuery = Organisations::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Organisations::loadFromConnection($oAgent);
	}



};
?>