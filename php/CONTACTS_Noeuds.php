<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-01 11:15:50
//Filename : Noeuds.php
//Description : Table pour gérer les noeuds

///[CLASS][Noeuds]Table pour gérer les noeuds
///[AUTHOR]Ludo
class Noeuds extends Items{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$NoeudsmemberSet = array(		

			// ///[MEMBER][integer][nId_Noeuds]Identité de la table
			//"nId_Noeuds" => 0 //inherited from => Contacts.Items.nId_Items,
			///[MEMBER][integer][nId_Noeuds_Parent]identité de la table sur le noeuds parent
			"nId_Noeuds_Parent" => 0
		);
		//get the legacy
		this->$members += $NoeudsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Noeuds]Method to get the Id_Noeuds
	///[RETURNS]The Id_Noeuds
	public function getId_Noeuds(){
		//Return the getter in inheritage
		return $this->getId_Items();
	};

	///[METHOD][getId_Noeuds_Parent]Method to get the Id_Noeuds_Parent
	///[RETURNS]The Id_Noeuds_Parent
	public function getId_Noeuds_Parent(){
		//Return the member
		return $this->$members["nId_Noeuds_Parent"];
	};



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Noeuds]Method to set the Id_Noeuds
	///[PARAMETER][integer][$nValue]Our new value for Id_Noeuds
	///[RETURNS]Boolean true if done 
	public function setId_Noeuds($nValue){
		//Return the member
		return this->setId_Items($nValue);
	};

	///[METHOD][setId_Noeuds_Parent]Method to set the Id_Noeuds_Parent
	///[PARAMETER][integer][$nValue]Our new value for Id_Noeuds_Parent
	///[RETURNS]Boolean true if done 
	public function setId_Noeuds_Parent($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Noeuds_Parent"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][getColumns]Method to get the list of the column in a string 
	///[PARAMETER][boolean][$bId = true]boolean, write the column Id (primary key) or not? 
	///[RETURNS][string]string, our columns in a list 
	public function getColumns($bId = true){
		if( $bId)
			return "xxx.Noeuds.Id_Noeuds, xxx.Noeuds.Id_Noeuds_Parent"
		return "xxx.Noeuds.Id_Noeuds, xxx.Noeuds.Id_Noeuds_Parent"
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Noeuds"
		return "xxx.Noeuds"
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return "xxx.Noeuds.Id_Noeuds = " . Quotes($this->getId_Noeuds());
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
	};


	///[METHOD][getValues]Method to get the values 
	///[RETURNS][string]string, our columns in a list 
	public function getValues(){
		//Our values string
		$sValues = "";
		
		$sValues .= Quotes( $this->getTable() . "." . $this->getId_Noeuds());
		$sValues .= ", " . Quotes( $this->getTable() . "." . $this->getId_Noeuds_Parent());
		
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
		$Query .=  $this->getTable() . "." . "Id_Noeuds_Parent  = " . Quotes($this->getId_Noeuds_Parent());
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
		$sQuery = ""
		//Get the query !!!
		if($this->getId_Noeuds() == 0)
			$sQuery = $this->getInsertQuery();
		else
			$sQuery = $this->getUpdateQuery();
		
		/*Not generated yet (think to call loadFromJson) */
		
		//Return the job !
		return true;
	}



};
?>