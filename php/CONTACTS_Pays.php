<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-13 02:38:35
//Filename : Contacts_Pays.php
//Description : Tables des pays


//include to dtb connection
include "connection.php";

///[CLASS][Pays]Tables des pays
///[AUTHOR]Ludo
class Pays{
	//our member data
	protected $members = array(	

		///[MEMBER][integer][nId_Pays]Identifiant de la table
		"nId_Pays" => 0,
		///[MEMBER][string][sCode]Code du pays
		"sCode" => "",
		///[MEMBER][string][sAlpha2]Code alpha du pays en 2 caractères
		"sAlpha2" => "",
		///[MEMBER][string][sAlpha3]Code alpha du pays en 3 caractères
		"sAlpha3" => "",
		///[MEMBER][string][sNom]Nom du pays
		"sNom" => "",
		///[MEMBER][string][jsonId_Langues_Json]Liste des langues du pays
		"jsonId_Langues_Json" => ""
	);
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//nothing to declare Chief !
	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Pays]Method to get the Id_Pays
	///[RETURNS]The Id_Pays
	public function getId_Pays(){
		//Return the member
		return $this->members["nId_Pays"];
	}

	///[METHOD][getCode]Method to get the Code
	///[RETURNS]The Code
	public function getCode(){
		//Return the member
		return $this->members["sCode"];
	}

	///[METHOD][getAlpha2]Method to get the Alpha2
	///[RETURNS]The Alpha2
	public function getAlpha2(){
		//Return the member
		return $this->members["sAlpha2"];
	}

	///[METHOD][getAlpha3]Method to get the Alpha3
	///[RETURNS]The Alpha3
	public function getAlpha3(){
		//Return the member
		return $this->members["sAlpha3"];
	}

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	public function getNom(){
		//Return the member
		return $this->members["sNom"];
	}

	///[METHOD][getId_Langues_Json]Method to get the Id_Langues_Json
	///[RETURNS]The Id_Langues_Json
	public function getId_Langues_Json(){
		//Return the member
		return $this->members["jsonId_Langues_Json"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Pays]Method to set the Id_Pays
	///[PARAMETER][integer][$nValue]Our new value for Id_Pays
	///[RETURNS]Boolean true if done 
	public function setId_Pays($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Pays"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setCode]Method to set the Code
	///[PARAMETER][string][$sValue]Our new value for Code
	///[RETURNS]Boolean true if done 
	public function setCode($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sCode"] = substr($sValue, 0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setAlpha2]Method to set the Alpha2
	///[PARAMETER][string][$sValue]Our new value for Alpha2
	///[RETURNS]Boolean true if done 
	public function setAlpha2($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sAlpha2"] = substr($sValue, 0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setAlpha3]Method to set the Alpha3
	///[PARAMETER][string][$sValue]Our new value for Alpha3
	///[RETURNS]Boolean true if done 
	public function setAlpha3($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sAlpha3"] = substr($sValue, 0, 8);
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
			 $this->members["sNom"] = substr($sValue, 0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Langues_Json]Method to set the Id_Langues_Json
	///[PARAMETER][string][$sValue]Our new value for Id_Langues_Json
	///[RETURNS]Boolean true if done 
	public function setId_Langues_Json($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			 $this->members["jsonId_Langues_Json"] = $sValue;
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
			return "xxx.Pays.Id_Pays, xxx.Pays.Code, xxx.Pays.Alpha2, xxx.Pays.Alpha3, xxx.Pays.Nom, xxx.Pays.Id_Langues_Json";
		return "xxx.Pays.Code, xxx.Pays.Alpha2, xxx.Pays.Alpha3, xxx.Pays.Nom, xxx.Pays.Id_Langues_Json";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondancein an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Pays" => "Id_Pays", 
			"sCode" => "Code", 
			"sAlpha2" => "Alpha2", 
			"sAlpha3" => "Alpha3", 
			"sNom" => "Nom", 
			"jsonId_Langues_Json" => "Id_Langues_Json"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Pays";
		return "xxx.Pays";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return "xxx.Pays.Id_Pays = " . Quotes($this->getId_Pays());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . $this->getColumns() . "\r\n" . "FROM " . $this->getTable() . "\r\n" . "WHERE " . $this->getConditions();
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
			foreach($this->members as $key => $value){
				$this->members[$key] = $jsonSet[$this->getTable() . $bindSet[$key]];
			};
		}
		else
		{
			//Start a beautifull loop
			foreach($this->members as $key => $value){
				$this->members[$key] = $jsonSet[$bindSet[$key]];
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
		return json_encode($this->members);
	}


	///[METHOD][getValues]Method to get the values 
	///[RETURNS][string]string, our columns in a list 
	public function getValues(){
		//Our values string
		$sValues = "";
		
		$sValues .= Quotes( $this->getCode());
		$sValues .= ", " . Quotes( $this->getAlpha2());
		$sValues .= ", " . Quotes( $this->getAlpha3());
		$sValues .= ", " . Quotes( $this->getNom());
		$sValues .= ", " . Quotes( $this->getId_Langues_Json());
		
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
		$Query .=  $this->getTable() . "." . "Code  = " . Quotes($this->getCode());
		$Query .= ", " .  $this->getTable() . "." . "Alpha2  = " . Quotes($this->getAlpha2());
		$Query .= ", " .  $this->getTable() . "." . "Alpha3  = " . Quotes($this->getAlpha3());
		$Query .= ", " .  $this->getTable() . "." . "Nom  = " . Quotes($this->getNom());
		$Query .= ", " .  $this->getTable() . "." . "Id_Langues_Json  = " . Quotes($this->getId_Langues_Json());
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
		if($this->getId_Pays() == 0)
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