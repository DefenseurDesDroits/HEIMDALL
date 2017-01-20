<?PHP
//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:37
//Filename : Stocks_Mouvements.php
//Description : La table qui note les mouvements


//include to dtb connection
//include to dtb connection
include_once "CONTACTS_Items.php";

///[CLASS][Mouvements]La table qui note les mouvements
///[AUTHOR]LUDO
class Mouvements extends Items{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$MouvementsmemberSet = array(		

			// ///[MEMBER][integer][nId_Mouvements]Clef de la table
			//"nId_Mouvements" => 0 //inherited from => Contacts.Items.nId_Items,
			///[MEMBER][string "yyyymmdd"][dtEffectif]Hour of effective time
			"dtEffectif" => "",
			// ///[MEMBER][integer][nId_Stocks]Le stock du mouvement
			"nId_Stocks" => 0, //inherited from => Stocks.Stocks.nId_Stocks,
			///[MEMBER][integer][nQuantite]La quantite du mouvement
			"nQuantite" => 0,
			///[MEMBER][string][sMotif]Motif du mouvement
			"sMotif" => "",
			///[MEMBER][string][sClef_Operation]Clef de l'operation
			"sClef_Operation" => "",
			// ///[MEMBER][integer][nId_Contacts]Responsable du mouvement
			"nId_Contacts" => 0 //inherited from => Contacts.Contacts.nId_Contacts,
		);
		//get the legacy
		$this->members += $MouvementsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Mouvements]Method to get the Id_Mouvements
	///[RETURNS]The Id_Mouvements
	public function getId_Mouvements(){
		//Return the getter in inheritage
		return $this->getId_Items();
	}

	///[METHOD][getEffectif]Method to get the Effectif
	///[RETURNS]The Effectif
	public function getEffectif(){
		//Return the member
		return $this->members["dtEffectif"];
		//return substr($this->members["dtEffectif"], 0, 10);
	}

	///[METHOD][getId_Stocks]Method to get the Id_Stocks
	///[RETURNS]The Id_Stocks
	public function getId_Stocks(){
		//Return the getter in inheritage
		return $this->members["nId_Stocks"];
	}

	///[METHOD][getQuantite]Method to get the Quantite
	///[RETURNS]The Quantite
	public function getQuantite(){
		//Return the member
		return $this->members["nQuantite"];
	}

	///[METHOD][getMotif]Method to get the Motif
	///[RETURNS]The Motif
	public function getMotif(){
		//Return the member
		return $this->members["sMotif"];
	}

	///[METHOD][getClef_Operation]Method to get the Clef_Operation
	///[RETURNS]The Clef_Operation
	public function getClef_Operation(){
		//Return the member
		return $this->members["sClef_Operation"];
	}

	///[METHOD][getId_Contacts]Method to get the Id_Contacts
	///[RETURNS]The Id_Contacts
	public function getId_Contacts(){
		//Return the getter in inheritage
		return $this->members["nId_Contacts"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Mouvements]Method to set the Id_Mouvements
	///[PARAMETER][integer][$nValue]Our new value for Id_Mouvements
	///[RETURNS]Boolean true if done 
	public function setId_Mouvements($nValue){
		//Return the member
		return $this->setId_Items($nValue);
	}

	///[METHOD][setEffectif]Method to set the Effectif
	///[PARAMETER][string][$dtValue]Our new value for Effectif
	///[RETURNS]Boolean true if done 
	public function setEffectif($dtValue){
		//security on null guy !!!
		if($dtValue == null)
			return false;
		//security on type guy !!!
		if(getType($dtValue) == 'string'){
			 $this->members["dtEffectif"] = $dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Stocks]Method to set the Id_Stocks
	///[PARAMETER][integer][$nValue]Our new value for Id_Stocks
	///[RETURNS]Boolean true if done 
	public function setId_Stocks($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Stocks"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setQuantite]Method to set the Quantite
	///[PARAMETER][integer][$nValue]Our new value for Quantite
	///[RETURNS]Boolean true if done 
	public function setQuantite($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nQuantite"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setMotif]Method to set the Motif
	///[PARAMETER][string][$sValue]Our new value for Motif
	///[RETURNS]Boolean true if done 
	public function setMotif($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sMotif"] = substr($sValue, 0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setClef_Operation]Method to set the Clef_Operation
	///[PARAMETER][string][$sValue]Our new value for Clef_Operation
	///[RETURNS]Boolean true if done 
	public function setClef_Operation($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sClef_Operation"] = substr($sValue, 0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Contacts]Method to set the Id_Contacts
	///[PARAMETER][integer][$nValue]Our new value for Id_Contacts
	///[RETURNS]Boolean true if done 
	public function setId_Contacts($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Contacts"] = $nValue;
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
			return parent::getColumns($bId) . ", xxx.Mouvements.Id_Mouvements, xxx.Mouvements.Effectif, xxx.Mouvements.Id_Stocks, xxx.Mouvements.Quantite, xxx.Mouvements.Motif, xxx.Mouvements.Clef_Operation, xxx.Mouvements.Id_Contacts";
		return parent::getColumns($bId) . ", xxx.Mouvements.Id_Mouvements, xxx.Mouvements.Effectif, xxx.Mouvements.Id_Stocks, xxx.Mouvements.Quantite, xxx.Mouvements.Motif, xxx.Mouvements.Clef_Operation, xxx.Mouvements.Id_Contacts";
	}


	///[METHOD][getInsertColumns]Method to get the list of the column in a string from upade query !!! 
	///[RETURNS][string]string, our columns in a list 
	public function getInsertColumns(){
		return "Id_Mouvements, Effectif, Id_Stocks, Quantite, Motif, Clef_Operation, Id_Contacts";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Mouvements" => "xxx.Mouvements.Id_Mouvements", 
			"dtEffectif" => "xxx.Mouvements.Effectif", 
			"nId_Stocks" => "xxx.Mouvements.Id_Stocks", 
			"nQuantite" => "xxx.Mouvements.Quantite", 
			"sMotif" => "xxx.Mouvements.Motif", 
			"sClef_Operation" => "xxx.Mouvements.Clef_Operation", 
			"nId_Contacts" => "xxx.Mouvements.Id_Contacts"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Mouvements";
		return parent::getTable($bTrueName) . ", xxx.Mouvements";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions($bAll);
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Items.Id_Items =  xxx.Mouvements.Id_Mouvements";
		else
			return " xxx.Items.Id_Items = xxx.Mouvements.Id_Mouvements";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . Mouvements::getLinkConditions() . " \r\nAND xxx.Mouvements.Id_Contacts = " . Quotes($this->getId_Contacts());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . Mouvements::getColumns() . "\r\n" . "FROM " . Mouvements::getTable() . "\r\n" . "WHERE " . Mouvements::getConditions();
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
		$sQuery = Mouvements::getSelectQuery();
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
		
		$sValues .= Quotes( $this->getId_Mouvements());
		//$sValues .= ", " . Quotes( $this->getEffectif() . " 00:00:00");
		$sValues .= ", " . Quotes( $this->getEffectif());
		$sValues .= ", " . Quotes( $this->getId_Stocks());
		$sValues .= ", " . Quotes( $this->getQuantite());
		$sValues .= ", " . Quotes( $this->getMotif());
		$sValues .= ", " . Quotes( $this->getClef_Operation());
		$sValues .= ", " . Quotes( $this->getId_Contacts());
		
		//return the get value chain !
		return $sValues;
	}


	///[METHOD][getInsertQuery]Method to get the values 
	///[RETURNS][string]string, our query 
	public function getInsertQuery(){
		return "INSERT INTO " . "xxx.Mouvements" . " (" . Mouvements::getInsertColumns() . ")" . "\r\n" . "VALUES(" . Mouvements::getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Mouvements" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		//$Query .=  "Id_Mouvements  = " . Quotes($this->getId_Mouvements());
		$Query .= "Effectif  = " . Quotes($this->getEffectif());
		//$Query .= ", " .  "Effectif  = " . Quotes($this->getEffectif());
		$Query .= ", " .  "Id_Stocks  = " . Quotes($this->getId_Stocks());
		$Query .= ", " .  "Quantite  = " . Quotes($this->getQuantite());
		$Query .= ", " .  "Motif  = " . Quotes($this->getMotif());
		$Query .= ", " .  "Clef_Operation  = " . Quotes($this->getClef_Operation());
		$Query .= ", " .  "Id_Contacts = " . Quotes($this->getId_Contacts());
		//build the condition
		$Query .= "WHERE Id_Mouvements = " . Quotes($this->getId_Mouvements());
		//$Query .= "WHERE Id_Contacts = " . Quotes($this->getId_Contacts());
		//Return the query !!!
		return $Query;
	}


	///[METHOD][getDeleteQuery]Method to get the Delete query 
	///[RETURNS][string]string, our query 
	public function getDeleteQuery(){
		//return the query !
		return "DELETE FROM " . "xxx.Mouvements" . " WHERE " . $this->getConditions();
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
		$nId = $this->getId_Mouvements();
		//Call the parent method
		parent::save($oAgent);
		//Get the query !!!
		if($nId == 0)
		{
			//Call the parent method
			//parent::save($oAgent);
			$sQuery = Mouvements::getInsertQuery();
		}
		else
			$sQuery = Mouvements::getUpdateQuery();
		
		//Use the connection object in : "php/connection.php"
		//Don't be fool !!! open before eat !!!
		$GLOBALS["oConnection"]->open();
		//Do da Update/Insert ( the updateRequest and the insertRequest are basiclly the same ...)
		$GLOBALS["oConnection"]->updateRequest($sQuery, $oAgent);
		//Close it !!! For Goddess Sake !!!
		$GLOBALS["oConnection"]->close();
		
		//Return the job !
		return Mouvements::loadFromConnection($oAgent);
	}



};
?>