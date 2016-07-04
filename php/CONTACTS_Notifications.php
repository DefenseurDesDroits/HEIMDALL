<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-04 05:56:08
//Filename : Notifications.php
//Description : Tables des notifications utilisateurs


//include to dtb connection
include "connection.php";

///[CLASS][Notifications]Tables des notifications utilisateurs
///[AUTHOR]Ludo
class Notifications{
	//our member data
	protected $members = array(	

		///[MEMBER][integer][nId_Notifications]Identifiant de la table
		"nId_Notifications" => 0,
		///[MEMBER][string][sMsg]Message de la notification
		"sMsg" => "",
		///[MEMBER][integer][nId_Auteur]Clef étrangère sur la table User. L'auteur de la notification.
		"nId_Auteur" => 0,
		///[MEMBER][integer][nId_Destinataire]Clef étrangère sur la table User. Le destiantaire de la notification.
		"nId_Destinataire" => 0
	);
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//nothing to declare Chief !
	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Notifications]Method to get the Id_Notifications
	///[RETURNS]The Id_Notifications
	public function getId_Notifications(){
		//Return the member
		return $this->$members["nId_Notifications"];
	}

	///[METHOD][getMsg]Method to get the Msg
	///[RETURNS]The Msg
	public function getMsg(){
		//Return the member
		return $this->$members["sMsg"];
	}

	///[METHOD][getId_Auteur]Method to get the Id_Auteur
	///[RETURNS]The Id_Auteur
	public function getId_Auteur(){
		//Return the member
		return $this->$members["nId_Auteur"];
	}

	///[METHOD][getId_Destinataire]Method to get the Id_Destinataire
	///[RETURNS]The Id_Destinataire
	public function getId_Destinataire(){
		//Return the member
		return $this->$members["nId_Destinataire"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Notifications]Method to set the Id_Notifications
	///[PARAMETER][integer][$nValue]Our new value for Id_Notifications
	///[RETURNS]Boolean true if done 
	public function setId_Notifications($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Notifications"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setMsg]Method to set the Msg
	///[PARAMETER][string][$sValue]Our new value for Msg
	///[RETURNS]Boolean true if done 
	public function setMsg($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sMsg"] = substr($sValue, 0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Auteur]Method to set the Id_Auteur
	///[PARAMETER][integer][$nValue]Our new value for Id_Auteur
	///[RETURNS]Boolean true if done 
	public function setId_Auteur($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Auteur"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Destinataire]Method to set the Id_Destinataire
	///[PARAMETER][integer][$nValue]Our new value for Id_Destinataire
	///[RETURNS]Boolean true if done 
	public function setId_Destinataire($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Destinataire"] = $nValue;
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
			return "xxx.Notifications.Id_Notifications, xxx.Notifications.Msg, xxx.Notifications.Id_Auteur, xxx.Notifications.Id_Destinataire";
		return "xxx.Notifications.Msg, xxx.Notifications.Id_Auteur, xxx.Notifications.Id_Destinataire";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondancein an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Notifications" => "Id_Notifications", 
			"sMsg" => "Msg", 
			"nId_Auteur" => "Id_Auteur", 
			"nId_Destinataire" => "Id_Destinataire"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Notifications";
		return "xxx.Notifications";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return "xxx.Notifications.Id_Notifications = " . Quotes($this->getId_Notifications());
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
	///[PARAMETER][string][$url]Our string with Json encoding
	///[PARAMETER][string][$oAgent]Agent who make the load from
	///[RETURNS]boolean, true if done
	public function loadFromConnection($session, $url, $oAgent){
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
		
		$sValues .= Quotes( $this->getMsg());
		$sValues .= ", " . Quotes( $this->getId_Auteur());
		$sValues .= ", " . Quotes( $this->getId_Destinataire());
		
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
		$Query .=  $this->getTable() . "." . "Msg  = " . Quotes($this->getMsg());
		$Query .= ", " .  $this->getTable() . "." . "Id_Auteur  = " . Quotes($this->getId_Auteur());
		$Query .= ", " .  $this->getTable() . "." . "Id_Destinataire  = " . Quotes($this->getId_Destinataire());
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
	///[PARAMETER][string][$session]Our string with Json encoding
	///[PARAMETER][string][$url]Our string with Json encoding
	///[PARAMETER][string][$oAgent]Agent who make the delete
	///[RETURNS]boolean, true if done
	public function deleteMyself($session, $url, $oAgent){
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
	///[PARAMETER][string][$session]Our string with Json encoding
	///[PARAMETER][string][$url]Our string with Json encoding
	///[PARAMETER][string][$oAgent]Agent who make the save
	///[RETURNS]boolean, true if done
	public function save($session, $url, $oAgent){
		//Our query
		$sQuery = "";
		//Get the query !!!
		if($this->getId_Notifications() == 0)
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