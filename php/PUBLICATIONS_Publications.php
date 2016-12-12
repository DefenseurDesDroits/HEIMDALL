<?PHP
//Module : Publications
//Created by : LUDO
//Generated on : 2016-12-09 10:49:49
//Filename : Publications_Publications.php
//Description : Tables des publications disponibles dans la base de données


//include to dtb connection
//include to dtb connection
include_once "CONTACTS_Noeuds.php";

///[CLASS][Publications]Tables des publications disponibles dans la base de données
///[AUTHOR]LUDO
class Publications extends Noeuds{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$PublicationsmemberSet = array(		

			// ///[MEMBER][integer][nId_Publications]Clef unique de la table publication
			//"nId_Publications" => 0 //inherited from => Contacts.Noeuds.nId_Noeuds,
			///[MEMBER][string][sNom]Nom de la publication
			"sNom" => "",
			///[MEMBER][integer][nId_Domaines]Domaine de la publication
			"nId_Domaines" => 0,
			///[MEMBER][string "yyyymmdd"][dtCreation]Date de création de la publication
			"dtCreation" => "",
			///[MEMBER][string "yyyymmdd"][dtMaj]Date de mise à jour de la publication
			"dtMaj" => "",
			///[MEMBER][boolean][bDematerialisee]La publication est-elle dématerialisée
			"bDematerialisee" => false
		);
		//get the legacy
		$this->members += $PublicationsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Publications]Method to get the Id_Publications
	///[RETURNS]The Id_Publications
	public function getId_Publications(){
		//Return the getter in inheritage
		return $this->getId_Noeuds();
	}

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	public function getNom(){
		//Return the member
		return $this->members["sNom"];
	}

	///[METHOD][getId_Domaines]Method to get the Id_Domaines
	///[RETURNS]The Id_Domaines
	public function getId_Domaines(){
		//Return the member
		return $this->members["nId_Domaines"];
	}

	///[METHOD][getCreation]Method to get the Creation
	///[RETURNS]The Creation
	public function getCreation(){
		//Return the member
		return $this->members["dtCreation"];
	}

	///[METHOD][getMaj]Method to get the Maj
	///[RETURNS]The Maj
	public function getMaj(){
		//Return the member
		return $this->members["dtMaj"];
	}

	///[METHOD][getDematerialisee]Method to get the Dematerialisee
	///[RETURNS]The Dematerialisee
	public function getDematerialisee(){
		//Return the member
		return $this->members["bDematerialisee"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Publications]Method to set the Id_Publications
	///[PARAMETER][integer][$nValue]Our new value for Id_Publications
	///[RETURNS]Boolean true if done 
	public function setId_Publications($nValue){
		//Return the member
		return $this->setId_Noeuds($nValue);
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

	///[METHOD][setId_Domaines]Method to set the Id_Domaines
	///[PARAMETER][integer][$nValue]Our new value for Id_Domaines
	///[RETURNS]Boolean true if done 
	public function setId_Domaines($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Domaines"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setCreation]Method to set the Creation
	///[PARAMETER][string][$dtValue]Our new value for Creation
	///[RETURNS]Boolean true if done 
	public function setCreation($dtValue){
		//security on null guy !!!
		if($dtValue == null)
			return false;
		//security on type guy !!!
		if(getType($dtValue) == 'string'){
			 $this->members["dtCreation"] = $dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setMaj]Method to set the Maj
	///[PARAMETER][string][$dtValue]Our new value for Maj
	///[RETURNS]Boolean true if done 
	public function setMaj($dtValue){
		//security on null guy !!!
		if($dtValue == null)
			return false;
		//security on type guy !!!
		if(getType($dtValue) == 'string'){
			 $this->members["dtMaj"] = $dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setDematerialisee]Method to set the Dematerialisee
	///[PARAMETER][boolean][$bValue]Our new value for Dematerialisee
	///[RETURNS]Boolean true if done 
	public function setDematerialisee($bValue){
		//security on null guy !!!
		if($bValue == null)
			return false;
		//security on type guy !!!
		if(getType($bValue) == 'boolean'){
			 $this->members["bDematerialisee"] = $bValue;
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
			return parent::getColumns($bId) . ", xxx.Publications.Id_Publications, xxx.Publications.Nom, xxx.Publications.Id_Domaines, xxx.Publications.Creation, xxx.Publications.Maj, xxx.Publications.Dematerialisee";
		return parent::getColumns($bId) . ", xxx.Publications.Id_Publications, xxx.Publications.Nom, xxx.Publications.Id_Domaines, xxx.Publications.Creation, xxx.Publications.Maj, xxx.Publications.Dematerialisee";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return "Id_Publications, Nom, Id_Domaines, Creation, Maj, Dematerialisee";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Publications" => "xxx.Publications.Id_Publications", 
			"sNom" => "xxx.Publications.Nom", 
			"nId_Domaines" => "xxx.Publications.Id_Domaines", 
			"dtCreation" => "xxx.Publications.Creation", 
			"dtMaj" => "xxx.Publications.Maj", 
			"bDematerialisee" => "xxx.Publications.Dematerialisee"
		) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Publications";
		return parent::getTable($bTrueName) . ", xxx.Publications";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions($bAll);
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Noeuds.Id_Noeuds =  xxx.Publications.Id_Publications";
		else
			return " xxx.Noeuds.Id_Noeuds = xxx.Publications.Id_Publications";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . Publications::getLinkConditions() . " \r\nAND xxx.Publications.Id_Publications = " . Quotes($this->getId_Publications());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Publications::getColumns() . "\r\n" . "FROM " . Publications::getTable() . "\r\n" . "WHERE " . Publications::getConditions();
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
		$sQuery = Publications::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_Publications());
		$sValues .= ", " . Quotes( $this->getNom());
		$sValues .= ", " . Quotes( $this->getId_Domaines());
		$sValues .= ", current_timestamp";
		//$sValues .= ", " . Quotes( $this->getCreation());
		$sValues .= ", current_timestamp";
		//$sValues .= ", " . Quotes( $this->getMaj());
		if( $this->getDematerialisee())
			$sValues .= ", " . "TRUE";
		else
			$sValues .= ", " . "FALSE";
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Publications" . " (" . Publications::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Publications::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Publications" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Nom  = " . Quotes($this->getNom());
		$Query .= ", " .  "Id_Domaines  = " . Quotes($this->getId_Domaines());
		//$Query .= ", " .  "Creation  = current_timestamp";
		//$Query .= ", " .  "Creation  = " . Quotes($this->getCreation());
		$Query .= ", " .  "Maj  = current_timestamp";
		//$Query .= ", " .  "Maj  = " . Quotes($this->getMaj());
		if( $this->getDematerialisee())
			$Query .= ", " .  "Dematerialisee  = TRUE";
		else
			$Query .= ", " .  "Dematerialisee  = FALSE";
		//build the condition
		$Query .= "WHERE Id_Publications = " . Quotes($this->getId_Publications());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Publications" . " WHERE " . $this->getConditions();
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
		$nId = $this->getId_Publications();
		//Get the query !!!
		if($nId == 0)
		{
			//Call the parent method
			parent::save($oAgent);
			$sQuery = Publications::getInsertQuery();
		}
		else
			$sQuery = Publications::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Publications::loadFromConnection($oAgent);
	}



};
?>