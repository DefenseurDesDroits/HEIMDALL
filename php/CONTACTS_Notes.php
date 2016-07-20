<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-20 04:38:57
//Filename : Contacts_Notes.php
//Description : Table des notes sur les items


//include to dtb connection
include "Contacts_Items.php";

///[CLASS][Notes]Table des notes sur les items
///[AUTHOR]Ludo
class Notes extends Items{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$NotesmemberSet = array(		

			// ///[MEMBER][integer][nId_Notes]Identifiant sur la tables
			//"nId_Notes" => 0 //inherited from => Contacts.Items.nId_Items,
			///[MEMBER][string][sTitre]Titre de la note
			"sTitre" => "",
			///[MEMBER][boolean][bUrgente]Urgente la note ?
			"bUrgente" => false,
			///[MEMBER][string][sTexte]Le texte de la note
			"sTexte" => "",
			///[MEMBER][integer][nId_Items_Linked]Objet sur lequel est liée la note
			"nId_Items_Linked" => 0
		);
		//get the legacy
		$this->members += $NotesmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Notes]Method to get the Id_Notes
	///[RETURNS]The Id_Notes
	public function getId_Notes(){
		//Return the getter in inheritage
		return $this->getId_Items();
	}

	///[METHOD][getTitre]Method to get the Titre
	///[RETURNS]The Titre
	public function getTitre(){
		//Return the member
		return $this->members["sTitre"];
	}

	///[METHOD][getUrgente]Method to get the Urgente
	///[RETURNS]The Urgente
	public function getUrgente(){
		//Return the member
		return $this->members["bUrgente"];
	}

	///[METHOD][getTexte]Method to get the Texte
	///[RETURNS]The Texte
	public function getTexte(){
		//Return the member
		return $this->members["sTexte"];
	}

	///[METHOD][getId_Items_Linked]Method to get the Id_Items_Linked
	///[RETURNS]The Id_Items_Linked
	public function getId_Items_Linked(){
		//Return the member
		return $this->members["nId_Items_Linked"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Notes]Method to set the Id_Notes
	///[PARAMETER][integer][$nValue]Our new value for Id_Notes
	///[RETURNS]Boolean true if done 
	public function setId_Notes($nValue){
		//Return the member
		return $this->setId_Items($nValue);
	}

	///[METHOD][setTitre]Method to set the Titre
	///[PARAMETER][string][$sValue]Our new value for Titre
	///[RETURNS]Boolean true if done 
	public function setTitre($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sTitre"] = substr($sValue, 0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setUrgente]Method to set the Urgente
	///[PARAMETER][boolean][$bValue]Our new value for Urgente
	///[RETURNS]Boolean true if done 
	public function setUrgente($bValue){
		//security on null guy !!!
		if($bValue == null)
			return false;
		//security on type guy !!!
		if(getType($bValue) == 'boolean'){
			 $this->members["bUrgente"] = $bValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setTexte]Method to set the Texte
	///[PARAMETER][string][$sValue]Our new value for Texte
	///[RETURNS]Boolean true if done 
	public function setTexte($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->members["sTexte"] = substr($sValue, 0, 512);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Items_Linked]Method to set the Id_Items_Linked
	///[PARAMETER][integer][$nValue]Our new value for Id_Items_Linked
	///[RETURNS]Boolean true if done 
	public function setId_Items_Linked($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->members["nId_Items_Linked"] = $nValue;
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
			return parent::getColumns($bId) . ", xxx.Notes.Id_Notes, xxx.Notes.Titre, xxx.Notes.Urgente, xxx.Notes.Texte, xxx.Notes.Id_Items_Linked";
		return parent::getColumns($bId) . ", xxx.Notes.Id_Notes, xxx.Notes.Titre, xxx.Notes.Urgente, xxx.Notes.Texte, xxx.Notes.Id_Items_Linked";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Notes" => "xxx.Notes.Id_Notes", 
			"sTitre" => "xxx.Notes.Titre", 
			"bUrgente" => "xxx.Notes.Urgente", 
			"sTexte" => "xxx.Notes.Texte", 
			"nId_Items_Linked" => "xxx.Notes.Id_Items_Linked"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Notes";
		return parent::getTable($bTrueName) . ", xxx.Notes";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions();
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Items.Id_Items =  xxx.Notes.Id_Notes";
		else
			return " xxx.Items.Id_Items = xxx.Notes.Id_Notes";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . $this->getLinkConditions() . " \r\nAND xxx.Notes.Id_Notes = " . Quotes($this->getId_Notes());
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
		
		$sValues .= Quotes( $this->getId_Notes());
		$sValues .= ", " . Quotes( $this->getTitre());
		$sValues .= ", " . Quotes( $this->getUrgente());
		$sValues .= ", " . Quotes( $this->getTexte());
		$sValues .= ", " . Quotes( $this->getId_Items_Linked());
		
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
		$Query .=  $this->getTable() . "." . "Titre  = " . Quotes($this->getTitre());
		$Query .= ", " .  $this->getTable() . "." . "Urgente  = " . Quotes($this->getUrgente());
		$Query .= ", " .  $this->getTable() . "." . "Texte  = " . Quotes($this->getTexte());
		$Query .= ", " .  $this->getTable() . "." . "Id_Items_Linked  = " . Quotes($this->getId_Items_Linked());
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
		if($this->getId_Notes() == 0)
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