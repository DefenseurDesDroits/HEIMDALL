<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-10-24 09:39:59
//Filename : Contacts_Segments.php
//Description : Table gérant les segments.


//include to dtb connection
include_once "CONTACTS_Items.php";

///[CLASS][Segments]Table gérant les segments.
///[AUTHOR]Ludo
class Segments extends Items{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$SegmentsmemberSet = array(		

			// ///[MEMBER][integer][nId_Segments]Clef unique de la table hérité de Items
			//"nId_Segments" => 0 //inherited from => Contacts.Items.nId_Items,
			///[MEMBER][integer][nId_Items_Owner]Propriétaire du segment.
			"nId_Items_Owner" => 0,
			///[MEMBER][string][nId_Items_Json]Liste des items du segment
			"nId_Items_Json" => "",
			///[MEMBER][string][sParametres]Liste des paramêtres du segments.
			"sParametres" => "",
			///[MEMBER][string][sNom]Nom du segments
			"sNom" => ""
		);
		//get the legacy
		$this->members += $SegmentsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Segments]Method to get the Id_Segments
	///[RETURNS]The Id_Segments
	public function getId_Segments(){
		//Return the getter in inheritage
		return $this->getId_Items();
	}

	///[METHOD][getId_Items_Owner]Method to get the Id_Items_Owner
	///[RETURNS]The Id_Items_Owner
	public function getId_Items_Owner(){
		//Return the member
		return $this->members["nId_Items_Owner"];
	}

	///[METHOD][getId_Items_Json]Method to get the Id_Items_Json
	///[RETURNS]The Id_Items_Json
	public function getId_Items_Json(){
		//Return the member
		return $this->members["nId_Items_Json"];
	}

	///[METHOD][getParametres]Method to get the Parametres
	///[RETURNS]The Parametres
	public function getParametres(){
		//Return the member
		return $this->members["sParametres"];
	}

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	public function getNom(){
		//Return the member
		return $this->members["sNom"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Segments]Method to set the Id_Segments
	///[PARAMETER][integer][$nValue]Our new value for Id_Segments
	///[RETURNS]Boolean true if done 
	public function setId_Segments($nValue){
		//Return the member
		return $this->setId_Items($nValue);
	}

	///[METHOD][setId_Items_Owner]Method to set the Id_Items_Owner
	///[PARAMETER][integer][$nValue]Our new value for Id_Items_Owner
	///[RETURNS]Boolean true if done 
	public function setId_Items_Owner($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Items_Owner"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Items_Json]Method to set the Id_Items_Json
	///[PARAMETER][string][$sValue]Our new value for Id_Items_Json
	///[RETURNS]Boolean true if done 
	public function setId_Items_Json($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["nId_Items_Json"] = substr($sValue, 0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setParametres]Method to set the Parametres
	///[PARAMETER][string][$sValue]Our new value for Parametres
	///[RETURNS]Boolean true if done 
	public function setParametres($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sParametres"] = substr($sValue, 0, 1024);
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



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this is the section we custumize

	///[METHOD][getColumns]Method to get the list of the column in a string 
	///[PARAMETER][boolean][$bId = true]boolean, write the column Id (primary key) or not? 
	///[RETURNS][string]string, our columns in a list 
	public function getColumns($bId = true){
		if( $bId)
			return parent::getColumns($bId) . ", xxx.Segments.Id_Segments, xxx.Segments.Id_Items_Owner, xxx.Segments.Id_Items_Json, xxx.Segments.Parametres, xxx.Segments.Nom";
		return parent::getColumns($bId) . ", xxx.Segments.Id_Segments, xxx.Segments.Id_Items_Owner, xxx.Segments.Id_Items_Json, xxx.Segments.Parametres, xxx.Segments.Nom";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return "Id_Segments, Id_Items_Owner, Id_Items_Json, Parametres, Nom";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Segments" => "xxx.Segments.Id_Segments", 
			"nId_Items_Owner" => "xxx.Segments.Id_Items_Owner", 
			"nId_Items_Json" => "xxx.Segments.Id_Items_Json", 
			"sParametres" => "xxx.Segments.Parametres", 
			"sNom" => "xxx.Segments.Nom"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Segments";
		return parent::getTable($bTrueName) . ", xxx.Segments";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions($bAll);
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Items.Id_Items =  xxx.Segments.Id_Segments";
		else
			return " xxx.Items.Id_Items = xxx.Segments.Id_Segments";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . Segments::getLinkConditions() . " \r\nAND xxx.Segments.Id_Segments = " . Quotes($this->getId_Segments());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Segments::getColumns() . "\r\n" . "FROM " . Segments::getTable() . "\r\n" . "WHERE " . Segments::getConditions();
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
		$sQuery = Segments::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_Segments());
		$sValues .= ", " . Quotes( $this->getId_Items_Owner());
		$sValues .= ", " . Quotes( $this->getId_Items_Json());
		$sValues .= ", " . Quotes( $this->getParametres());
		$sValues .= ", " . Quotes( $this->getNom());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Segments" . " (" . Segments::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Segments::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Segments" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Id_Items_Owner  = " . Quotes($this->getId_Items_Owner());
		$Query .= ", " .  "Id_Items_Json  = " . Quotes($this->getId_Items_Json());
		$Query .= ", " .  "Parametres  = " . Quotes($this->getParametres());
		$Query .= ", " .  "Nom  = " . Quotes($this->getNom());
		//build the condition
		$Query .= "WHERE Id_Segments = " . Quotes($this->getId_Segments());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Segments" . " WHERE " . $this->getConditions();
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
		$nId = $this->getId_Segments();
		//Get the query !!!
		if($nId == 0)
		{
			//Call the parent method
			parent::save($oAgent);
			$sQuery = Segments::getInsertQuery();
		}
		else
			$sQuery = Segments::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Segments::loadFromConnection($oAgent);
	}



};
?>