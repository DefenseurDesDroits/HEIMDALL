<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-08-17 02:48:28
//Filename : Contacts_Contact_Infos.php
//Description : Table des informations liées au contact


//include to dtb connection
include "CONTACTS_Items.php";

///[CLASS][Contact_Infos]Table des informations liées au contact
///[AUTHOR]Ludo
class Contact_Infos extends Items{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$Contact_InfosmemberSet = array(		

			// ///[MEMBER][integer][nId_Contact_Infos]Identifiant sur la table contact
			//"nId_Contact_Infos" => 0 //inherited from => Contacts.Items.nId_Items,
			///[MEMBER][integer][nId_Contacts]Clef étrangère sur la contact
			"nId_Contacts" => 0,
			///[MEMBER][string][sFonction]Fonction du contact
			"sFonction" => "",
			///[MEMBER][integer][nId_Langues]Clef étrangère sur la table langue. Langue du contact pour cette fonction.
			"nId_Langues" => 0
		);
		//get the legacy
		$this->members += $Contact_InfosmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Contact_Infos]Method to get the Id_Contact_Infos
	///[RETURNS]The Id_Contact_Infos
	public function getId_Contact_Infos(){
		//Return the getter in inheritage
		return $this->getId_Items();
	}

	///[METHOD][getId_Contacts]Method to get the Id_Contacts
	///[RETURNS]The Id_Contacts
	public function getId_Contacts(){
		//Return the member
		return $this->members["nId_Contacts"];
	}

	///[METHOD][getFonction]Method to get the Fonction
	///[RETURNS]The Fonction
	public function getFonction(){
		//Return the member
		return $this->members["sFonction"];
	}

	///[METHOD][getId_Langues]Method to get the Id_Langues
	///[RETURNS]The Id_Langues
	public function getId_Langues(){
		//Return the member
		return $this->members["nId_Langues"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Contact_Infos]Method to set the Id_Contact_Infos
	///[PARAMETER][integer][$nValue]Our new value for Id_Contact_Infos
	///[RETURNS]Boolean true if done 
	public function setId_Contact_Infos($nValue){
		//Return the member
		return $this->setId_Items($nValue);
	}

	///[METHOD][setId_Contacts]Method to set the Id_Contacts
	///[PARAMETER][integer][$nValue]Our new value for Id_Contacts
	///[RETURNS]Boolean true if done 
	public function setId_Contacts($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Contacts"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setFonction]Method to set the Fonction
	///[PARAMETER][string][$sValue]Our new value for Fonction
	///[RETURNS]Boolean true if done 
	public function setFonction($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sFonction"] = substr($sValue, 0, 128);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Langues]Method to set the Id_Langues
	///[PARAMETER][integer][$nValue]Our new value for Id_Langues
	///[RETURNS]Boolean true if done 
	public function setId_Langues($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Langues"] = $nValue;
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
			return parent::getColumns($bId) . ", xxx.Contact_Infos.Id_Contact_Infos, xxx.Contact_Infos.Id_Contacts, xxx.Contact_Infos.Fonction, xxx.Contact_Infos.Id_Langues";
		return parent::getColumns($bId) . ", xxx.Contact_Infos.Id_Contact_Infos, xxx.Contact_Infos.Id_Contacts, xxx.Contact_Infos.Fonction, xxx.Contact_Infos.Id_Langues";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Contact_Infos" => "xxx.Contact_Infos.Id_Contact_Infos", 
			"nId_Contacts" => "xxx.Contact_Infos.Id_Contacts", 
			"sFonction" => "xxx.Contact_Infos.Fonction", 
			"nId_Langues" => "xxx.Contact_Infos.Id_Langues"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Contact_Infos";
		return parent::getTable($bTrueName) . ", xxx.Contact_Infos";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions();
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Items.Id_Items =  xxx.Contact_Infos.Id_Contact_Infos";
		else
			return " xxx.Items.Id_Items = xxx.Contact_Infos.Id_Contact_Infos";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . $this->getLinkConditions() . " \r\nAND xxx.Contact_Infos.Id_Contact_Infos = " . Quotes($this->getId_Contact_Infos());
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
		
		$sValues .= Quotes( $this->getId_Contact_Infos());
		$sValues .= ", " . Quotes( $this->getId_Contacts());
		$sValues .= ", " . Quotes( $this->getFonction());
		$sValues .= ", " . Quotes( $this->getId_Langues());
		
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
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Contact_Infos" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Id_Contacts  = " . Quotes($this->getId_Contacts());
		$Query .= ", " .  "Fonction  = " . Quotes($this->getFonction());
		$Query .= ", " .  "Id_Langues  = " . Quotes($this->getId_Langues());
		//build the condition
		$Query .= "WHERE Id_Contact_Infos = " . Quotes($this->getId_Contact_Infos());
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
		if($this->getId_Contact_Infos() == 0)
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
		return $this->loadFromConnection($oAgent);
	}



};
?>