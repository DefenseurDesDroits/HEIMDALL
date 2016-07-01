<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-01 04:15:17
//Filename : Items.php
//Description : Table de tous les items avec des droits

///[CLASS][Items]Table de tous les items avec des droits
///[AUTHOR]Ludo
class Items{
	//our member data
	protected $members = array(	

		///[MEMBER][integer][nId_Items]Identité de la table
		"nId_Items" => 0,
		///[MEMBER][integer][nId_groups_owner]Groupe possedant l'item
		"nId_groups_owner" => 0,
		///[MEMBER][integer][nId_Accreditations_Item]Clef étrangère sur le niveau d'accreditation
		"nId_Accreditations_Item" => 0,
		///[MEMBER][string "yyyymmdd"][dtModifie]date de dernière modification
		"dtModifie" => ""
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
		return $this->$members["nId_Items"];
	}

	///[METHOD][getId_groups_owner]Method to get the Id_groups_owner
	///[RETURNS]The Id_groups_owner
	public function getId_groups_owner(){
		//Return the member
		return $this->$members["nId_groups_owner"];
	}

	///[METHOD][getId_Accreditations_Item]Method to get the Id_Accreditations_Item
	///[RETURNS]The Id_Accreditations_Item
	public function getId_Accreditations_Item(){
		//Return the member
		return $this->$members["nId_Accreditations_Item"];
	}

	///[METHOD][getModifie]Method to get the Modifie
	///[RETURNS]The Modifie
	public function getModifie(){
		//Return the member
		return $this->$members["dtModifie"];
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
			 $this->$members["nId_Items"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_groups_owner]Method to set the Id_groups_owner
	///[PARAMETER][integer][$nValue]Our new value for Id_groups_owner
	///[RETURNS]Boolean true if done 
	public function setId_groups_owner($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_groups_owner"] = $nValue;
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
			 $this->$members["nId_Accreditations_Item"] = $nValue;
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
			 $this->$members["dtModifie"] = $dtValue;
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
			return "xxx.Items.Id_Items, xxx.Items.Id_groups_owner, xxx.Items.Id_Accreditations_Item, xxx.Items.Modifie";
		return "xxx.Items.Id_groups_owner, xxx.Items.Id_Accreditations_Item, xxx.Items.Modifie";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondancein an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Items" => "Id_Items", 
			"nId_groups_owner" => "Id_groups_owner", 
			"nId_Accreditations_Item" => "Id_Accreditations_Item", 
			"dtModifie" => "Modifie"
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


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return "xxx.Items.Id_Items = " . Quotes($this->getId_Items());
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
	///[RETURNS]boolean, true if done
	public function loadFromConnection($session, $url){
		//Our query
		$sQuery = $this->getSelectQuery();
		
		/*Not generated yet (think to call loadFromJson with true  for the $bFromQuery) */
		
		//Return the job !
		return true;
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
		
		$sValues .= Quotes( $this->getId_groups_owner());
		$sValues .= ", " . Quotes( $this->getId_Accreditations_Item());
		$sValues .= ", " . Quotes( $this->getModifie());
		
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
		$Query .=  $this->getTable() . "." . "Id_groups_owner  = " . Quotes($this->getId_groups_owner());
		$Query .= ", " .  $this->getTable() . "." . "Id_Accreditations_Item  = " . Quotes($this->getId_Accreditations_Item());
		$Query .= ", " .  $this->getTable() . "." . "Modifie  = " . Quotes($this->getModifie());
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
	///[RETURNS]boolean, true if done
	public function deleteMyself($session, $url){
		//Our query
		$sQuery = $this->getDeleteQuery();
		
		/*Not generated yet (think to call loadFromJson) */
		
		//Return the job !
		return true;
	}


	///[METHOD][save]Method to save an object in the database
	///[PARAMETER][string][$session]Our string with Json encoding
	///[PARAMETER][string][$url]Our string with Json encoding
	///[RETURNS]boolean, true if done
	public function save($session, $url){
		//Our query
		$sQuery = "";
		//Get the query !!!
		if($this->getId_Items() == 0)
			$sQuery = $this->getInsertQuery();
		else
			$sQuery = $this->getUpdateQuery();
		
		/*Not generated yet (think to call loadFromJson) */
		
		//Return the job !
		return true;
	}



};
?>