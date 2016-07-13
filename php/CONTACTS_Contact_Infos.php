<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-13 09:15:42
//Filename : Contacts_Contact_Infos.php
//Description : Table des informations liées au contact


//include to dtb connection
include "Contacts_Items.php";

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
		$this->$members += $Contact_InfosmemberSet;	}


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
		return $this->$members["nId_Contacts"];
	}

	///[METHOD][getFonction]Method to get the Fonction
	///[RETURNS]The Fonction
	public function getFonction(){
		//Return the member
		return $this->$members["sFonction"];
	}

	///[METHOD][getId_Langues]Method to get the Id_Langues
	///[RETURNS]The Id_Langues
	public function getId_Langues(){
		//Return the member
		return $this->$members["nId_Langues"];
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
			 $this->$members["nId_Contacts"] = $nValue;
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
			 $this->$members["sFonction"] = substr($sValue, 0, 128);
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
			 $this->$members["nId_Langues"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][getColumns]Method to get the list of the column in a string 
	///[PARAMETER][boolean][$bId = true]boolean, write the column Id (primary key) or not? 
	///[RETURNS][string]string, our columns in a list 
	public function getColumns($bId = true){
		if( $bId)
			return parent::getColumns($bId) . ", xxx.Contact_Infos.Id_Contact_Infos, xxx.Contact_Infos.Id_Contacts, xxx.Contact_Infos.Fonction, xxx.Contact_Infos.Id_Langues";
		return parent::getColumns($bId) . ", xxx.Contact_Infos.Id_Contact_Infos, xxx.Contact_Infos.Id_Contacts, xxx.Contact_Infos.Fonction, xxx.Contact_Infos.Id_Langues";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondancein an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Contact_Infos" => "Id_Contact_Infos", 
			"nId_Contacts" => "Id_Contacts", 
			"sFonction" => "Fonction", 
			"nId_Langues" => "Id_Langues"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Contact_Infos";
		return parent::getTable($bTrueName) . ", xxx.Contact_Infos";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND xxx.Contact_Infos.Id_Contact_Infos = " . Quotes($this->getId_Contact_Infos());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . $this->getColumns() . "\r\n" . "FROM " . $this->getTable() . "\r\n" . WHERE  . $this->getConditions();
	}


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][$sJson]Our string with Json encoding
	///[PARAMETER][boolean][$bFromQuery]Our boolean 
	///[RETURNS]boolean, true if done
	public function loadFromJson($sJson, $bFromQuery = false){
		//Our Json object
		$jsonSet = json_decode($sJson);
		//Our Corresponding set
		$bindSet = $this->getCorrespondanceArray();
		//If we want add Prefixe.Table
		if($bFromQuery){
			//Start a beautifull loop
			foreach($this->$members as $key => $value){
				$this->$members[$key] = $jsonSet[$this->getTable() . $bindSet[$key]];
			};
		}
		else
		{
			//Start a beautifull loop
			foreach($this->$members as $key => $value){
				$this->$members[$key] = $jsonSet[$bindSet[$key]];
			};
		}
		//Return the job !
		return true;
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
		$oConnection->open();
		//do the select request
		$ary_o = $oConnection->selectRequest($sQuery, explode(", ", $this->getColumns()), $oAgent);
		//Close now !!! It's not Jurassic Park here !!!
		$oConnection->close();
		
		//now have we something ?
		if(count($ary_o) <= 0)
			return false;
		//Return the job !
		return $this->loadFromJson( json_encode($ary_o[0]), true);
	}


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	public function exportToJson(){
		//Return the job !
		return json_encode($this->$members);
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
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . $this->getTable() . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  $this->getTable() . "." . "Id_Contacts  = " . Quotes($this->getId_Contacts());
		$Query .= ", " .  $this->getTable() . "." . "Fonction  = " . Quotes($this->getFonction());
		$Query .= ", " .  $this->getTable() . "." . "Id_Langues  = " . Quotes($this->getId_Langues());
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
		$oConnection->open();
		//do the job;
		$oConnection->deleteRequest($sQuery, $oAgent);
		//don't be a douche : close it !!
		$oConnection->close();
		
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
		$oConnection->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$oConnection->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$oConnection->close();
		
		//Return the job !
		return $this->loadFromConnection($session, $url, $oAgent);
	}



};
?>