<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-16 09:59:51
//Filename : Contacts_Items.php
//Description : Table de tous les items avec des droits


//include to dtb connection
include_once "connection.php";

///[CLASS][Items]Table de tous les items avec des droits
///[AUTHOR]Ludo
class Items{
	//our member data
	protected $members = array(	

		///[MEMBER][integer][nId_Items]Identité de la table
		"nId_Items" => 0,
		///[MEMBER][string][sId_groups_json]Groupes possedant l'item
		"sId_groups_json" => "",
		///[MEMBER][integer][nId_Accreditations_Item]Clef étrangère sur le niveau d'accreditation
		"nId_Accreditations_Item" => 0,
		///[MEMBER][string "yyyymmdd"][dtModifie]date de dernière modification
		"dtModifie" => "",
		///[MEMBER][integer][nId_Creator]Id sur l'item créateur de cet item
		"nId_Creator" => 0,
		///[MEMBER][string][sId_users_json]Users allowed to acces to the object
		"sId_users_json" => ""
	);
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//nothing to declare Chief !
	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Items]Method to get the Id_Items
	///[RETURNS]The Id_Items
	public function getId_Items(){
		//Return the member
		return $this->members["nId_Items"];
	}

	///[METHOD][getId_groups_json]Method to get the Id_groups_json
	///[RETURNS]The Id_groups_json
	public function getId_groups_json(){
		//Return the member
		return $this->members["sId_groups_json"];
	}

	///[METHOD][getId_Accreditations_Item]Method to get the Id_Accreditations_Item
	///[RETURNS]The Id_Accreditations_Item
	public function getId_Accreditations_Item(){
		//Return the member
		return $this->members["nId_Accreditations_Item"];
	}

	///[METHOD][getModifie]Method to get the Modifie
	///[RETURNS]The Modifie
	public function getModifie(){
		//Return the member
		return $this->members["dtModifie"];
	}

	///[METHOD][getId_Creator]Method to get the Id_Creator
	///[RETURNS]The Id_Creator
	public function getId_Creator(){
		//Return the member
		return $this->members["nId_Creator"];
	}

	///[METHOD][getId_users_json]Method to get the Id_users_json
	///[RETURNS]The Id_users_json
	public function getId_users_json(){
		//Return the member
		return $this->members["sId_users_json"];
	}



	///[SECTION][SETTERS]#################################################

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

	///[METHOD][setId_groups_json]Method to set the Id_groups_json
	///[PARAMETER][string][$sValue]Our new value for Id_groups_json
	///[RETURNS]Boolean true if done 
	public function setId_groups_json($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sId_groups_json"] = substr($sValue, 0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Accreditations_Item]Method to set the Id_Accreditations_Item
	///[PARAMETER][integer][$nValue]Our new value for Id_Accreditations_Item
	///[RETURNS]Boolean true if done 
	public function setId_Accreditations_Item($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Accreditations_Item"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setModifie]Method to set the Modifie
	///[PARAMETER][string][$dtValue]Our new value for Modifie
	///[RETURNS]Boolean true if done 
	public function setModifie($dtValue){
		//security on null guy !!!
		if($dtValue == null)
			return false;
		//security on type guy !!!
		if(getType($dtValue) == 'string'){
			 $this->members["dtModifie"] = $dtValue;
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

	///[METHOD][setId_users_json]Method to set the Id_users_json
	///[PARAMETER][string][$sValue]Our new value for Id_users_json
	///[RETURNS]Boolean true if done 
	public function setId_users_json($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sId_users_json"] = substr($sValue, 0, 1024);
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
			return "xxx.Items.Id_Items, xxx.Items.Id_groups_json, xxx.Items.Id_Accreditations_Item, xxx.Items.Modifie, xxx.Items.Id_Creator, xxx.Items.Id_users_json";
		return "xxx.Items.Id_groups_json, xxx.Items.Id_Accreditations_Item, xxx.Items.Modifie, xxx.Items.Id_Creator, xxx.Items.Id_users_json";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return " Id_groups_json, Id_Accreditations_Item, Modifie, Id_Creator, Id_users_json";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Items" => "xxx.Items.Id_Items", 
			"sId_groups_json" => "xxx.Items.Id_groups_json", 
			"nId_Accreditations_Item" => "xxx.Items.Id_Accreditations_Item", 
			"dtModifie" => "xxx.Items.Modifie", 
			"nId_Creator" => "xxx.Items.Id_Creator", 
			"sId_users_json" => "xxx.Items.Id_users_json"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Items";
		return "xxx.Items";
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
		return "xxx.Items.Id_Items = " . Quotes($this->getId_Items());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Items::getColumns() . "\r\n" . "FROM " . Items::getTable() . "\r\n" . "WHERE " . Items::getConditions();
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
		$sQuery = Items::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_groups_json());
		$sValues .= ", " . Quotes( $this->getId_Accreditations_Item());
		$sValues .= ", current_timestamp";
		//$sValues .= ", " . Quotes( $this->getModifie());
		$sValues .= ", " . Quotes( $this->getId_Creator());
		$sValues .= ", " . Quotes( $this->getId_users_json());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Items" . " (" . Items::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Items::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= "UPDATE " . "xxx.Items" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Id_groups_json  = " . Quotes($this->getId_groups_json());
		$Query .= ", " .  "Id_Accreditations_Item  = " . Quotes($this->getId_Accreditations_Item());
		$Query .= ", " .  "Modifie  = current_timestamp";
		//$Query .= ", " .  "Modifie  = " . Quotes($this->getModifie());
		$Query .= ", " .  "Id_Creator  = " . Quotes($this->getId_Creator());
		$Query .= ", " .  "Id_users_json  = " . Quotes($this->getId_users_json());
		//build the condition
		$Query .= "WHERE Id_Items = " . Quotes($this->getId_Items());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Items" . " WHERE " . $this->getConditions();
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
		if($this->getId_Items() == 0){
			$this->setId_Creator(intval($oAgent));
			$sQuery = Items::getInsertQuery();
			//echo $sQuery;
		}
		else
			$sQuery = Items::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//get the last query

		if($this->getId_Items() == 0){
			//the query
			$sQuery = "SELECT MAX(xxx.items.id_items) FROM xxx.items WHERE Id_Creator = " . Quotes($oAgent);
			//open
			$GLOBALS["oConnection"]->open();
			//the select query
			$ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, ["max"], null);
			//close
			$GLOBALS["oConnection"]->close();

			$this->setId_Items(intval( $ary_[0]["max"]));
		}

		//Return the job !
		return Items::loadFromConnection($oAgent);
	}



};
?>