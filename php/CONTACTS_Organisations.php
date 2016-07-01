<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-01 11:15:50
//Filename : Organisations.php
//Description : Table des organisations. héritant de celle des contacts

///[CLASS][Organisations]Table des organisations. héritant de celle des contacts
///[AUTHOR]Ludo
class Organisations extends Contacts{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$OrganisationsmemberSet = array(		

			// ///[MEMBER][integer][nId_Organisations]Identifiant hérité de la table Contacts
			//"nId_Organisations" => 0 //inherited from => Contacts.Contacts,
			///[MEMBER][integer][nId_Organisation_Type]Clef étrangère sur la table Organistion_Types. Type de l'organisation
			"nId_Organisation_Type" => 0,
			///[MEMBER][string][sNom]Nom de l'organisation
			"sNom" => ""
		);
		//get the legacy
		this->$members += $OrganisationsmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Organisations]Method to get the Id_Organisations
	///[RETURNS]The Id_Organisations
	public function getId_Organisations(){
		//[ERROR]The column Contacts.Organisations.nId_Organisations has an inheritance : Contacts.Contacts WITHOUT any linked row !!!
		return $this->$members["nId_Organisations"];
	};

	///[METHOD][getId_Organisation_Type]Method to get the Id_Organisation_Type
	///[RETURNS]The Id_Organisation_Type
	public function getId_Organisation_Type(){
		//Return the member
		return $this->$members["nId_Organisation_Type"];
	};

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	public function getNom(){
		//Return the member
		return $this->$members["sNom"];
	};



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Organisations]Method to set the Id_Organisations
	///[PARAMETER][integer][$nValue]Our new value for Id_Organisations
	///[RETURNS]Boolean true if done 
	public function setId_Organisations($nValue){
		//[ERROR]Return the member
		return false;
	};

	///[METHOD][setId_Organisation_Type]Method to set the Id_Organisation_Type
	///[PARAMETER][integer][$nValue]Our new value for Id_Organisation_Type
	///[RETURNS]Boolean true if done 
	public function setId_Organisation_Type($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Organisation_Type"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};

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
			 $this->$members["sNom"] = substr($sValue, 0, 256);
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
			return "xxx.Organisations.Id_Organisations, xxx.Organisations.Id_Organisation_Type, xxx.Organisations.Nom"
		return "xxx.Organisations.Id_Organisations, xxx.Organisations.Id_Organisation_Type, xxx.Organisations.Nom"
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Organisations"
		return "xxx.Organisations"
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return "xxx.Organisations.Id_Organisations = " . Quotes($this->getId_Organisations());
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
		
		$sValues .= Quotes( $this->getTable() . "." . $this->getId_Organisations());
		$sValues .= ", " . Quotes( $this->getTable() . "." . $this->getId_Organisation_Type());
		$sValues .= ", " . Quotes( $this->getTable() . "." . $this->getNom());
		
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
		$Query .=  $this->getTable() . "." . "Id_Organisation_Type  = " . Quotes($this->getId_Organisation_Type());
		$Query .= ", " .  $this->getTable() . "." . "Nom  = " . Quotes($this->getNom());
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
		if($this->getId_Organisations() == 0)
			$sQuery = $this->getInsertQuery();
		else
			$sQuery = $this->getUpdateQuery();
		
		/*Not generated yet (think to call loadFromJson) */
		
		//Return the job !
		return true;
	}



};
?>