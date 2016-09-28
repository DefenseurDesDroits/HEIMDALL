<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-28 04:27:39
//Filename : Contacts_Logs.php
//Description : Table pour enregistrer tous les changements de valeur d'item.


//include to dtb connection
include_once "connection.php";

///[CLASS][Logs]Table pour enregistrer tous les changements de valeur d'item.
///[AUTHOR]Ludo
class Logs{
	//our member data
	protected $members = array(	

		///[MEMBER][integer][nId_Logs]Clef primaire de la table de login.
		"nId_Logs" => 0,
		///[MEMBER][integer][nId_Items]Identifiant de l'objet modifié, cette clef n'est pas étrangère pour ne pas supprimer l'état des objets supprimés.
		"nId_Items" => 0,
		///[MEMBER][string][sCreation]Date de création du log.
		"sCreation" => "",
		///[MEMBER][integer][nId_Creator]Créateur du Log. Cette clef n'est pas étrangère pour ne pas supprimer l'état des objets supprimés.
		"nId_Creator" => 0,
		///[MEMBER][string][sValidation]Date de validation
		"sValidation" => "",
		///[MEMBER][integer][nId_Validator]Validateur de cette modification
		"nId_Validator" => 0,
		///[MEMBER][string][sValeur]Json, dernière valeur d'item
		"sValeur" => "",
		///[MEMBER][boolean][bSuppression]L'objet est il en attente de suppression (ou supprimé si Suppression == True And sValidation != '')
		"bSuppression" => false
	);
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//nothing to declare Chief !
	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Logs]Method to get the Id_Logs
	///[RETURNS]The Id_Logs
	public function getId_Logs(){
		//Return the member
		return $this->members["nId_Logs"];
	}

	///[METHOD][getId_Items]Method to get the Id_Items
	///[RETURNS]The Id_Items
	public function getId_Items(){
		//Return the member
		return $this->members["nId_Items"];
	}

	///[METHOD][getCreation]Method to get the Creation
	///[RETURNS]The Creation
	public function getCreation(){
		//Return the member
		return $this->members["sCreation"];
	}

	///[METHOD][getId_Creator]Method to get the Id_Creator
	///[RETURNS]The Id_Creator
	public function getId_Creator(){
		//Return the member
		return $this->members["nId_Creator"];
	}

	///[METHOD][getValidation]Method to get the Validation
	///[RETURNS]The Validation
	public function getValidation(){
		//Return the member
		return $this->members["sValidation"];
	}

	///[METHOD][getId_Validator]Method to get the Id_Validator
	///[RETURNS]The Id_Validator
	public function getId_Validator(){
		//Return the member
		return $this->members["nId_Validator"];
	}

	///[METHOD][getValeur]Method to get the Valeur
	///[RETURNS]The Valeur
	public function getValeur(){
		//Return the member
		return $this->members["sValeur"];
	}

	///[METHOD][getSuppression]Method to get the Suppression
	///[RETURNS]The Suppression
	public function getSuppression(){
		//Return the member
		return $this->members["bSuppression"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Logs]Method to set the Id_Logs
	///[PARAMETER][integer][$nValue]Our new value for Id_Logs
	///[RETURNS]Boolean true if done 
	public function setId_Logs($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Logs"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

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

	///[METHOD][setCreation]Method to set the Creation
	///[PARAMETER][string][$sValue]Our new value for Creation
	///[RETURNS]Boolean true if done 
	public function setCreation($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sCreation"] = substr($sValue, 0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Creator]Method to set the Id_Creator
	///[PARAMETER][integer][$nValue]Our new value for Id_Creator
	///[RETURNS]Boolean true if done 
	public function setId_Creator($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Creator"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setValidation]Method to set the Validation
	///[PARAMETER][string][$sValue]Our new value for Validation
	///[RETURNS]Boolean true if done 
	public function setValidation($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sValidation"] = substr($sValue, 0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Validator]Method to set the Id_Validator
	///[PARAMETER][integer][$nValue]Our new value for Id_Validator
	///[RETURNS]Boolean true if done 
	public function setId_Validator($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Validator"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setValeur]Method to set the Valeur
	///[PARAMETER][string][$sValue]Our new value for Valeur
	///[RETURNS]Boolean true if done 
	public function setValeur($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sValeur"] = substr($sValue, 0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setSuppression]Method to set the Suppression
	///[PARAMETER][boolean][$bValue]Our new value for Suppression
	///[RETURNS]Boolean true if done 
	public function setSuppression($bValue){
		//security on null guy !!!
		if($bValue == null)
			return false;
		//security on type guy !!!
		if(getType($bValue) == 'boolean'){
			 $this->members["bSuppression"] = $bValue;
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
			return "xxx.Logs.Id_Logs, xxx.Logs.Id_Items, xxx.Logs.Creation, xxx.Logs.Id_Creator, xxx.Logs.Validation, xxx.Logs.Id_Validator, xxx.Logs.Valeur, xxx.Logs.Suppression";
		return "xxx.Logs.Id_Items, xxx.Logs.Creation, xxx.Logs.Id_Creator, xxx.Logs.Validation, xxx.Logs.Id_Validator, xxx.Logs.Valeur, xxx.Logs.Suppression";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return "Id_Items, Creation, Id_Creator, Validation, Id_Validator, Valeur, Suppression";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Logs" => "xxx.Logs.Id_Logs", 
			"nId_Items" => "xxx.Logs.Id_Items", 
			"sCreation" => "xxx.Logs.Creation", 
			"nId_Creator" => "xxx.Logs.Id_Creator", 
			"sValidation" => "xxx.Logs.Validation", 
			"nId_Validator" => "xxx.Logs.Id_Validator", 
			"sValeur" => "xxx.Logs.Valeur", 
			"bSuppression" => "xxx.Logs.Suppression"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Logs";
		return "xxx.Logs";
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
		return "xxx.Logs.Id_Logs = " . Quotes($this->getId_Logs());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Logs::getColumns() . "\r\n" . "FROM " . Logs::getTable() . "\r\n" . "WHERE " . Logs::getConditions();
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
		$sQuery = Logs::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_Items());
		$sValues .= ", " . Quotes( $this->getCreation());
		$sValues .= ", " . Quotes( $this->getId_Creator());
		$sValues .= ", " . Quotes( $this->getValidation());
		$sValues .= ", " . Quotes( $this->getId_Validator());
		$sValues .= ", " . Quotes( $this->getValeur());
		if( $this->getSuppression()){
			$sValues .= ", " . "TRUE";
		else
			$sValues .= ", " . "FALSE";
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Logs" . " (" . Logs::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Logs::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= "UPDATE " . "xxx.Logs" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Id_Items  = " . Quotes($this->getId_Items());
		$Query .= ", " .  "Creation  = " . Quotes($this->getCreation());
		$Query .= ", " .  "Id_Creator  = " . Quotes($this->getId_Creator());
		$Query .= ", " .  "Validation  = " . Quotes($this->getValidation());
		$Query .= ", " .  "Id_Validator  = " . Quotes($this->getId_Validator());
		$Query .= ", " .  "Valeur  = " . Quotes($this->getValeur());
		if( $this->getSuppression()){
			$Query .= ", " .  "Suppression  = TRUE";
		else
			$Query .= ", " .  "Suppression  = FALSE";
		//build the condition
		$Query .= "WHERE Id_Logs = " . Quotes($this->getId_Logs());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Logs" . " WHERE " . $this->getConditions();
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
		$nId = $this->getId_Logs();
		//Get the query !!!
		if($nId == 0)
		{
			$sQuery = Logs::getInsertQuery();
		}
		else
			$sQuery = Logs::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Logs::loadFromConnection($oAgent);
	}



};
?>