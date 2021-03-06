<?PHP
//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:37
//Filename : Stocks_Stocks.php
//Description : Notre table pour gérer les tables entre la location et les publications


//include to dtb connection
//include to dtb connection
include_once "CONTACTS_Items.php";

///[CLASS][Stocks]Notre table pour gérer les tables entre la location et les publications
///[AUTHOR]LUDO
class Stocks extends Items{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$StocksmemberSet = array(		

			// ///[MEMBER][integer][nId_Stocks]Notre clef unique
			//"nId_Stocks" => 0 //inherited from => Contacts.Items.nId_Items,
			///[MEMBER][integer][nId_Locations]Le lieux du stock
			"nId_Locations" => 0,
			///[MEMBER][integer][nId_Publications]La publication
			"nId_Publications" => 0
		);
		//get the legacy
		$this->members += $StocksmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Stocks]Method to get the Id_Stocks
	///[RETURNS]The Id_Stocks
	public function getId_Stocks(){
		//Return the getter in inheritage
		return $this->getId_Items();
	}

	///[METHOD][getId_Locations]Method to get the Id_Locations
	///[RETURNS]The Id_Locations
	public function getId_Locations(){
		//Return the member
		return $this->members["nId_Locations"];
	}

	///[METHOD][getId_Publications]Method to get the Id_Publications
	///[RETURNS]The Id_Publications
	public function getId_Publications(){
		//Return the member
		return $this->members["nId_Publications"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Stocks]Method to set the Id_Stocks
	///[PARAMETER][integer][$nValue]Our new value for Id_Stocks
	///[RETURNS]Boolean true if done 
	public function setId_Stocks($nValue){
		//Return the member
		return $this->setId_Items($nValue);
	}

	///[METHOD][setId_Locations]Method to set the Id_Locations
	///[PARAMETER][integer][$nValue]Our new value for Id_Locations
	///[RETURNS]Boolean true if done 
	public function setId_Locations($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Locations"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Publications]Method to set the Id_Publications
	///[PARAMETER][integer][$nValue]Our new value for Id_Publications
	///[RETURNS]Boolean true if done 
	public function setId_Publications($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Publications"] = $nValue;
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
			return parent::getColumns($bId) . ", xxx.Stocks.Id_Stocks, xxx.Stocks.Id_Locations, xxx.Stocks.Id_Publications";
		return parent::getColumns($bId) . ", xxx.Stocks.Id_Stocks, xxx.Stocks.Id_Locations, xxx.Stocks.Id_Publications";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return "Id_Stocks, Id_Locations, Id_Publications";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Stocks" => "xxx.Stocks.Id_Stocks", 
			"nId_Locations" => "xxx.Stocks.Id_Locations", 
			"nId_Publications" => "xxx.Stocks.Id_Publications"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Stocks";
		return parent::getTable($bTrueName) . ", xxx.Stocks";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions($bAll);
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Items.Id_Items =  xxx.Stocks.Id_Stocks";
		else
			return " xxx.Items.Id_Items = xxx.Stocks.Id_Stocks";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . Stocks::getLinkConditions() . " \r\nAND xxx.Stocks.Id_Stocks = " . Quotes($this->getId_Stocks());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Stocks::getColumns() . "\r\n" . "FROM " . Stocks::getTable() . "\r\n" . "WHERE " . Stocks::getConditions();
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
		$sQuery = Stocks::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_Stocks());
		$sValues .= ", " . Quotes( $this->getId_Locations());
		$sValues .= ", " . Quotes( $this->getId_Publications());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Stocks" . " (" . Stocks::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Stocks::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Stocks" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Id_Locations  = " . Quotes($this->getId_Locations());
		$Query .= ", " .  "Id_Publications  = " . Quotes($this->getId_Publications());
		//build the condition
		$Query .= "WHERE Id_Stocks = " . Quotes($this->getId_Stocks());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Stocks" . " WHERE " . $this->getConditions();
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
		$nId = $this->getId_Stocks();
		//Get the query !!!
		if($nId == 0)
		{
			//Call the parent method
			parent::save($oAgent);
			$sQuery = Stocks::getInsertQuery();
		}
		else
			$sQuery = Stocks::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Stocks::loadFromConnection($oAgent);
	}



};
?>