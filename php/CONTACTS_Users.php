<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-20 04:38:57
//Filename : Contacts_Users.php
//Description : Table des utilisateurs, héritant de celle des contacts


//include to dtb connection
include "Contacts_Contacts.php";

///[CLASS][Users]Table des utilisateurs, héritant de celle des contacts
///[AUTHOR]Ludo
class Users extends Contacts{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$UsersmemberSet = array(		

			// ///[MEMBER][integer][nId_Users]Identifiant de la table hérité de la table contact
			//"nId_Users" => 0 //inherited from => Contacts.Contacts.nId_Contacts,
			///[MEMBER][string][sPseudo]Pseudo de l'utilisateur
			"sPseudo" => "",
			///[MEMBER][string][jsonId_Accreditations_Exp_Json]Json des différantes accréditations
			"jsonId_Accreditations_Exp_Json" => ""
		);
		//get the legacy
		$this->members += $UsersmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Users]Method to get the Id_Users
	///[RETURNS]The Id_Users
	public function getId_Users(){
		//Return the getter in inheritage
		return $this->getId_Contacts();
	}

	///[METHOD][getPseudo]Method to get the Pseudo
	///[RETURNS]The Pseudo
	public function getPseudo(){
		//Return the member
		return $this->members["sPseudo"];
	}

	///[METHOD][getId_Accreditations_Exp_Json]Method to get the Id_Accreditations_Exp_Json
	///[RETURNS]The Id_Accreditations_Exp_Json
	public function getId_Accreditations_Exp_Json(){
		//Return the member
		return $this->members["jsonId_Accreditations_Exp_Json"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Users]Method to set the Id_Users
	///[PARAMETER][integer][$nValue]Our new value for Id_Users
	///[RETURNS]Boolean true if done 
	public function setId_Users($nValue){
		//Return the member
		return $this->setId_Contacts($nValue);
	}

	///[METHOD][setPseudo]Method to set the Pseudo
	///[PARAMETER][string][$sValue]Our new value for Pseudo
	///[RETURNS]Boolean true if done 
	public function setPseudo($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sPseudo"] = substr($sValue, 0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Accreditations_Exp_Json]Method to set the Id_Accreditations_Exp_Json
	///[PARAMETER][string][$sValue]Our new value for Id_Accreditations_Exp_Json
	///[RETURNS]Boolean true if done 
	public function setId_Accreditations_Exp_Json($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			 $this->members["jsonId_Accreditations_Exp_Json"] = $sValue;
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
			return parent::getColumns($bId) . ", xxx.Users.Id_Users, xxx.Users.Pseudo, xxx.Users.Id_Accreditations_Exp_Json";
		return parent::getColumns($bId) . ", xxx.Users.Id_Users, xxx.Users.Pseudo, xxx.Users.Id_Accreditations_Exp_Json";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Users" => "xxx.Users.Id_Users", 
			"sPseudo" => "xxx.Users.Pseudo", 
			"jsonId_Accreditations_Exp_Json" => "xxx.Users.Id_Accreditations_Exp_Json"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Users";
		return parent::getTable($bTrueName) . ", xxx.Users";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions();
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Contacts.Id_Contacts =  xxx.Users.Id_Users";
		else
			return " xxx.Contacts.Id_Contacts = xxx.Users.Id_Users";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . $this->getLinkConditions() . " \r\nAND xxx.Users.Id_Users = " . Quotes($this->getId_Users());
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
		$jsonSet = (array) json_decode($sJson);
		//Our Corresponding set
		$bindSet = $this->getCorrespondanceArray();
		//If we want add Prefixe.Table
		if($bFromQuery){
			//Start a beautifull loop
			foreach($this->members as $key => $value){
				if(array_key_exists($bindSet[$key], $jsonSet))
					$this->members[$key] = $jsonSet[$bindSet[$key]];
			};
		}
		else
		{
			//Start a beautifull loop
			foreach($this->members as $key => $value){
				if(array_key_exists($key, $jsonSet))
					$this->members[$key] = $jsonSet[$key];
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
		$GLOBALS["oConnection"]->open();
		//do the select request
		$ary_o = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", $this->getColumns()), $oAgent);
		//Close now !!! It's not Jurassic Park here !!!
		$GLOBALS["oConnection"]->close();
		
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
		
		$sValues .= Quotes( $this->getId_Users());
		$sValues .= ", " . Quotes( $this->getPseudo());
		$sValues .= ", " . Quotes( $this->getId_Accreditations_Exp_Json());
		
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
		$Query .=  $this->getTable() . "." . "Pseudo  = " . Quotes($this->getPseudo());
		$Query .= ", " .  $this->getTable() . "." . "Id_Accreditations_Exp_Json  = " . Quotes($this->getId_Accreditations_Exp_Json());
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
		if($this->getId_Users() == 0)
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