<?PHP
//Module : Publications
//Created by : LUDO
//Generated on : 2016-12-09 10:49:49
//Filename : Publications_Fichiers.php
//Description : Table des fichiers physiques sur le serveur


//include to dtb connection
//include to dtb connection
include_once "CONTACTS_Noeuds.php";

///[CLASS][Fichiers]Table des fichiers physiques sur le serveur
///[AUTHOR]LUDO
class Fichiers extends Noeuds{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$FichiersmemberSet = array(		

			// ///[MEMBER][integer][nId_Fichiers]Clef primaire des fichiers
			//"nId_Fichiers" => 0 //inherited from => Contacts.Noeuds.nId_Noeuds,
			///[MEMBER][integer][nId_Publications]Clef étrangère sur les publications
			"nId_Publications" => 0,
			///[MEMBER][string][sPath]Chemin du fichier sur le serveur
			"sPath" => "",
			///[MEMBER][integer][nFilesize]Taille du fichier sur le serveur
			"nFilesize" => 0,
			///[MEMBER][string][sChecksum]Checksum du fichier
			"sChecksum" => "",
			///[MEMBER][string][sVersion]Version du fichier
			"sVersion" => ""
		);
		//get the legacy
		$this->members += $FichiersmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Fichiers]Method to get the Id_Fichiers
	///[RETURNS]The Id_Fichiers
	public function getId_Fichiers(){
		//Return the getter in inheritage
		return $this->getId_Noeuds();
	}

	///[METHOD][getId_Publications]Method to get the Id_Publications
	///[RETURNS]The Id_Publications
	public function getId_Publications(){
		//Return the member
		return $this->members["nId_Publications"];
	}

	///[METHOD][getPath]Method to get the Path
	///[RETURNS]The Path
	public function getPath(){
		//Return the member
		return $this->members["sPath"];
	}

	///[METHOD][getFilesize]Method to get the Filesize
	///[RETURNS]The Filesize
	public function getFilesize(){
		//Return the member
		return $this->members["nFilesize"];
	}

	///[METHOD][getChecksum]Method to get the Checksum
	///[RETURNS]The Checksum
	public function getChecksum(){
		//Return the member
		return $this->members["sChecksum"];
	}

	///[METHOD][getVersion]Method to get the Version
	///[RETURNS]The Version
	public function getVersion(){
		//Return the member
		return $this->members["sVersion"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Fichiers]Method to set the Id_Fichiers
	///[PARAMETER][integer][$nValue]Our new value for Id_Fichiers
	///[RETURNS]Boolean true if done 
	public function setId_Fichiers($nValue){
		//Return the member
		return $this->setId_Noeuds($nValue);
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

	///[METHOD][setPath]Method to set the Path
	///[PARAMETER][string][$sValue]Our new value for Path
	///[RETURNS]Boolean true if done 
	public function setPath($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sPath"] = substr($sValue, 0, 512);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setFilesize]Method to set the Filesize
	///[PARAMETER][integer][$nValue]Our new value for Filesize
	///[RETURNS]Boolean true if done 
	public function setFilesize($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nFilesize"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setChecksum]Method to set the Checksum
	///[PARAMETER][string][$sValue]Our new value for Checksum
	///[RETURNS]Boolean true if done 
	public function setChecksum($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sChecksum"] = substr($sValue, 0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setVersion]Method to set the Version
	///[PARAMETER][string][$sValue]Our new value for Version
	///[RETURNS]Boolean true if done 
	public function setVersion($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sVersion"] = substr($sValue, 0, 32);
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
			return parent::getColumns($bId) . ", xxx.Fichiers.Id_Fichiers, xxx.Fichiers.Id_Publications, xxx.Fichiers.Path, xxx.Fichiers.Filesize, xxx.Fichiers.Checksum, xxx.Fichiers.Version";
		return parent::getColumns($bId) . ", xxx.Fichiers.Id_Fichiers, xxx.Fichiers.Id_Publications, xxx.Fichiers.Path, xxx.Fichiers.Filesize, xxx.Fichiers.Checksum, xxx.Fichiers.Version";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return "Id_Fichiers, Id_Publications, Path, Filesize, Checksum, Version";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Fichiers" => "xxx.Fichiers.Id_Fichiers", 
			"nId_Publications" => "xxx.Fichiers.Id_Publications", 
			"sPath" => "xxx.Fichiers.Path", 
			"nFilesize" => "xxx.Fichiers.Filesize", 
			"sChecksum" => "xxx.Fichiers.Checksum", 
			"sVersion" => "xxx.Fichiers.Version"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Fichiers";
		return parent::getTable($bTrueName) . ", xxx.Fichiers";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions($bAll);
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Noeuds.Id_Noeuds =  xxx.Fichiers.Id_Fichiers";
		else
			return " xxx.Noeuds.Id_Noeuds = xxx.Fichiers.Id_Fichiers";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . Fichiers::getLinkConditions() . " \r\nAND xxx.Fichiers.Id_Fichiers = " . Quotes($this->getId_Fichiers());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Fichiers::getColumns() . "\r\n" . "FROM " . Fichiers::getTable() . "\r\n" . "WHERE " . Fichiers::getConditions();
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
		$sQuery = Fichiers::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_Fichiers());
		$sValues .= ", " . Quotes( $this->getId_Publications());
		$sValues .= ", " . Quotes( $this->getPath());
		$sValues .= ", " . Quotes( $this->getFilesize());
		$sValues .= ", " . Quotes( $this->getChecksum());
		$sValues .= ", " . Quotes( $this->getVersion());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Fichiers" . " (" . Fichiers::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Fichiers::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Fichiers" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Id_Publications  = " . Quotes($this->getId_Publications());
		$Query .= ", " .  "Path  = " . Quotes($this->getPath());
		$Query .= ", " .  "Filesize  = " . Quotes($this->getFilesize());
		$Query .= ", " .  "Checksum  = " . Quotes($this->getChecksum());
		$Query .= ", " .  "Version  = " . Quotes($this->getVersion());
		//build the condition
		$Query .= "WHERE Id_Fichiers = " . Quotes($this->getId_Fichiers());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Fichiers" . " WHERE " . $this->getConditions();
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
		$nId = $this->getId_Fichiers();
		//Get the query !!!
		if($nId == 0)
		{
			//Call the parent method
			parent::save($oAgent);
			$sQuery = Fichiers::getInsertQuery();
		}
		else
			$sQuery = Fichiers::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Fichiers::loadFromConnection($oAgent);
	}



};
?>