<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:52
//Filename : Contacts_Contacts.php
//Description : Table des contacts. Hérite de celle Noeuds pour gérer la notion de hiérarchie


//include to dtb connection
include "Contacts_Noeuds.php";

///[CLASS][Contacts]Table des contacts. Hérite de celle Noeuds pour gérer la notion de hiérarchie
///[AUTHOR]Ludo
class Contacts extends Noeuds{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$ContactsmemberSet = array(		

			// ///[MEMBER][integer][nId_Contacts]Identité de la table contact, héritée de celle noeuds
			//"nId_Contacts" => 0 //inherited from => Contacts.Noeuds.nId_Noeuds,
			///[MEMBER][string][sPrenom]Prénom du contact
			"sPrenom" => "",
			///[MEMBER][string][sNom]Nom du contact
			"sNom" => "",
			///[MEMBER][integer][nId_Civilites]Clef étrangère sur la table civilité pour noter le contact
			"nId_Civilites" => 0,
			///[MEMBER][integer][nId_Titres]Clef étrangère sur les titres pour noter le titre du contact
			"nId_Titres" => 0,
			///[MEMBER][integer][nId_Contact_Types]Clef étrangère sur le contact pour obtenir le type du contact
			"nId_Contact_Types" => 0
		);
		//get the legacy
		$this->$members += $ContactsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Contacts]Method to get the Id_Contacts
	///[RETURNS]The Id_Contacts
	public function getId_Contacts(){
		//Return the getter in inheritage
		return $this->getId_Noeuds();
	}

	///[METHOD][getPrenom]Method to get the Prenom
	///[RETURNS]The Prenom
	public function getPrenom(){
		//Return the member
		return $this->$members["sPrenom"];
	}

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	public function getNom(){
		//Return the member
		return $this->$members["sNom"];
	}

	///[METHOD][getId_Civilites]Method to get the Id_Civilites
	///[RETURNS]The Id_Civilites
	public function getId_Civilites(){
		//Return the member
		return $this->$members["nId_Civilites"];
	}

	///[METHOD][getId_Titres]Method to get the Id_Titres
	///[RETURNS]The Id_Titres
	public function getId_Titres(){
		//Return the member
		return $this->$members["nId_Titres"];
	}

	///[METHOD][getId_Contact_Types]Method to get the Id_Contact_Types
	///[RETURNS]The Id_Contact_Types
	public function getId_Contact_Types(){
		//Return the member
		return $this->$members["nId_Contact_Types"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Contacts]Method to set the Id_Contacts
	///[PARAMETER][integer][$nValue]Our new value for Id_Contacts
	///[RETURNS]Boolean true if done 
	public function setId_Contacts($nValue){
		//Return the member
		return $this->setId_Noeuds($nValue);
	}

	///[METHOD][setPrenom]Method to set the Prenom
	///[PARAMETER][string][$sValue]Our new value for Prenom
	///[RETURNS]Boolean true if done 
	public function setPrenom($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sPrenom"] = substr($sValue, 0, 32);
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
			 $this->$members["sNom"] = substr($sValue, 0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Civilites]Method to set the Id_Civilites
	///[PARAMETER][integer][$nValue]Our new value for Id_Civilites
	///[RETURNS]Boolean true if done 
	public function setId_Civilites($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Civilites"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Titres]Method to set the Id_Titres
	///[PARAMETER][integer][$nValue]Our new value for Id_Titres
	///[RETURNS]Boolean true if done 
	public function setId_Titres($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Titres"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Contact_Types]Method to set the Id_Contact_Types
	///[PARAMETER][integer][$nValue]Our new value for Id_Contact_Types
	///[RETURNS]Boolean true if done 
	public function setId_Contact_Types($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Contact_Types"] = $nValue;
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
			return parent::getColumns($bId) . ", xxx.Contacts.Id_Contacts, xxx.Contacts.Prenom, xxx.Contacts.Nom, xxx.Contacts.Id_Civilites, xxx.Contacts.Id_Titres, xxx.Contacts.Id_Contact_Types";
		return parent::getColumns($bId) . ", xxx.Contacts.Id_Contacts, xxx.Contacts.Prenom, xxx.Contacts.Nom, xxx.Contacts.Id_Civilites, xxx.Contacts.Id_Titres, xxx.Contacts.Id_Contact_Types";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondancein an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Contacts" => "Id_Contacts", 
			"sPrenom" => "Prenom", 
			"sNom" => "Nom", 
			"nId_Civilites" => "Id_Civilites", 
			"nId_Titres" => "Id_Titres", 
			"nId_Contact_Types" => "Id_Contact_Types"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Contacts";
		return parent::getTable($bTrueName) . ", xxx.Contacts";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND xxx.Contacts.Id_Contacts = " . Quotes($this->getId_Contacts());
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
		
		$sValues .= Quotes( $this->getId_Contacts());
		$sValues .= ", " . Quotes( $this->getPrenom());
		$sValues .= ", " . Quotes( $this->getNom());
		$sValues .= ", " . Quotes( $this->getId_Civilites());
		$sValues .= ", " . Quotes( $this->getId_Titres());
		$sValues .= ", " . Quotes( $this->getId_Contact_Types());
		
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
		$Query .=  $this->getTable() . "." . "Prenom  = " . Quotes($this->getPrenom());
		$Query .= ", " .  $this->getTable() . "." . "Nom  = " . Quotes($this->getNom());
		$Query .= ", " .  $this->getTable() . "." . "Id_Civilites  = " . Quotes($this->getId_Civilites());
		$Query .= ", " .  $this->getTable() . "." . "Id_Titres  = " . Quotes($this->getId_Titres());
		$Query .= ", " .  $this->getTable() . "." . "Id_Contact_Types  = " . Quotes($this->getId_Contact_Types());
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
		if($this->getId_Contacts() == 0)
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