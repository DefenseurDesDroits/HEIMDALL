<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-01 04:15:17
//Filename : Infos.php
//Description : Table des adresses. Hérité de la classe item.

///[CLASS][Infos]Table des adresses. Hérité de la classe item.
///[AUTHOR]Ludo
class Infos extends Items{
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	public function __construct(){
		//call the parent builder
		parent::__construct();
		//our new field
		//our new member data
		$InfosmemberSet = array(		

			// ///[MEMBER][integer][nId_Infos]Identifiant des adresses
			//"nId_Infos" => 0 //inherited from => Contacts.Items.nId_Items,
			///[MEMBER][string][sAdr1]Première partie de l'adresse
			"sAdr1" => "",
			///[MEMBER][string][sAdr2]Deuxième partie de l'adresse
			"sAdr2" => "",
			///[MEMBER][string][sAdr3]Troisième et dernière partie de l'adresse
			"sAdr3" => "",
			///[MEMBER][string][sCP]Le Code postal
			"sCP" => "",
			///[MEMBER][string][sCedex]Le code cedex
			"sCedex" => "",
			///[MEMBER][string][sVille]La Ville
			"sVille" => "",
			///[MEMBER][string][sTelephone1]Téléphone numéro 1
			"sTelephone1" => "",
			///[MEMBER][string][sCourriel1]Courriel numéro 1
			"sCourriel1" => "",
			///[MEMBER][string][sTelephone2]Téléphone numéro 2
			"sTelephone2" => "",
			///[MEMBER][string][sCourriel2]Courriel numéro 2
			"sCourriel2" => "",
			///[MEMBER][string][sSite]Adresse du site web
			"sSite" => "",
			///[MEMBER][integer][nId_Pays]Clef étrangère sur la table pays. C'est le pays de l'adresse.
			"nId_Pays" => 0,
			///[MEMBER][integer][nId_Contact_Infos]Clef étrangère sur la table Contact_Infos Le contact info propriétaire de cette adresse
			"nId_Contact_Infos" => 0
		);
		//get the legacy
		$this->$members += $InfosmemberSet;	}


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Infos]Method to get the Id_Infos
	///[RETURNS]The Id_Infos
	public function getId_Infos(){
		//Return the getter in inheritage
		return $this->getId_Items();
	}

	///[METHOD][getAdr1]Method to get the Adr1
	///[RETURNS]The Adr1
	public function getAdr1(){
		//Return the member
		return $this->$members["sAdr1"];
	}

	///[METHOD][getAdr2]Method to get the Adr2
	///[RETURNS]The Adr2
	public function getAdr2(){
		//Return the member
		return $this->$members["sAdr2"];
	}

	///[METHOD][getAdr3]Method to get the Adr3
	///[RETURNS]The Adr3
	public function getAdr3(){
		//Return the member
		return $this->$members["sAdr3"];
	}

	///[METHOD][getCP]Method to get the CP
	///[RETURNS]The CP
	public function getCP(){
		//Return the member
		return $this->$members["sCP"];
	}

	///[METHOD][getCedex]Method to get the Cedex
	///[RETURNS]The Cedex
	public function getCedex(){
		//Return the member
		return $this->$members["sCedex"];
	}

	///[METHOD][getVille]Method to get the Ville
	///[RETURNS]The Ville
	public function getVille(){
		//Return the member
		return $this->$members["sVille"];
	}

	///[METHOD][getTelephone1]Method to get the Telephone1
	///[RETURNS]The Telephone1
	public function getTelephone1(){
		//Return the member
		return $this->$members["sTelephone1"];
	}

	///[METHOD][getCourriel1]Method to get the Courriel1
	///[RETURNS]The Courriel1
	public function getCourriel1(){
		//Return the member
		return $this->$members["sCourriel1"];
	}

	///[METHOD][getTelephone2]Method to get the Telephone2
	///[RETURNS]The Telephone2
	public function getTelephone2(){
		//Return the member
		return $this->$members["sTelephone2"];
	}

	///[METHOD][getCourriel2]Method to get the Courriel2
	///[RETURNS]The Courriel2
	public function getCourriel2(){
		//Return the member
		return $this->$members["sCourriel2"];
	}

	///[METHOD][getSite]Method to get the Site
	///[RETURNS]The Site
	public function getSite(){
		//Return the member
		return $this->$members["sSite"];
	}

	///[METHOD][getId_Pays]Method to get the Id_Pays
	///[RETURNS]The Id_Pays
	public function getId_Pays(){
		//Return the member
		return $this->$members["nId_Pays"];
	}

	///[METHOD][getId_Contact_Infos]Method to get the Id_Contact_Infos
	///[RETURNS]The Id_Contact_Infos
	public function getId_Contact_Infos(){
		//Return the member
		return $this->$members["nId_Contact_Infos"];
	}



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Infos]Method to set the Id_Infos
	///[PARAMETER][integer][$nValue]Our new value for Id_Infos
	///[RETURNS]Boolean true if done 
	public function setId_Infos($nValue){
		//Return the member
		return $this->setId_Items($nValue);
	}

	///[METHOD][setAdr1]Method to set the Adr1
	///[PARAMETER][string][$sValue]Our new value for Adr1
	///[RETURNS]Boolean true if done 
	public function setAdr1($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sAdr1"] = substr($sValue, 0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setAdr2]Method to set the Adr2
	///[PARAMETER][string][$sValue]Our new value for Adr2
	///[RETURNS]Boolean true if done 
	public function setAdr2($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sAdr2"] = substr($sValue, 0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setAdr3]Method to set the Adr3
	///[PARAMETER][string][$sValue]Our new value for Adr3
	///[RETURNS]Boolean true if done 
	public function setAdr3($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sAdr3"] = substr($sValue, 0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setCP]Method to set the CP
	///[PARAMETER][string][$sValue]Our new value for CP
	///[RETURNS]Boolean true if done 
	public function setCP($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sCP"] = substr($sValue, 0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setCedex]Method to set the Cedex
	///[PARAMETER][string][$sValue]Our new value for Cedex
	///[RETURNS]Boolean true if done 
	public function setCedex($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sCedex"] = substr($sValue, 0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setVille]Method to set the Ville
	///[PARAMETER][string][$sValue]Our new value for Ville
	///[RETURNS]Boolean true if done 
	public function setVille($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sVille"] = substr($sValue, 0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setTelephone1]Method to set the Telephone1
	///[PARAMETER][string][$sValue]Our new value for Telephone1
	///[RETURNS]Boolean true if done 
	public function setTelephone1($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sTelephone1"] = substr($sValue, 0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setCourriel1]Method to set the Courriel1
	///[PARAMETER][string][$sValue]Our new value for Courriel1
	///[RETURNS]Boolean true if done 
	public function setCourriel1($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sCourriel1"] = substr($sValue, 0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setTelephone2]Method to set the Telephone2
	///[PARAMETER][string][$sValue]Our new value for Telephone2
	///[RETURNS]Boolean true if done 
	public function setTelephone2($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sTelephone2"] = substr($sValue, 0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setCourriel2]Method to set the Courriel2
	///[PARAMETER][string][$sValue]Our new value for Courriel2
	///[RETURNS]Boolean true if done 
	public function setCourriel2($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sCourriel2"] = substr($sValue, 0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setSite]Method to set the Site
	///[PARAMETER][string][$sValue]Our new value for Site
	///[RETURNS]Boolean true if done 
	public function setSite($sValue){
		//security on null guy !!!
		if($sValue == null)
			return false;
		//security on type guy !!!
		if(getType($sValue) == 'string'){
			//Never trust the FRONT !!!
			 $this->$members["sSite"] = substr($sValue, 0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Pays]Method to set the Id_Pays
	///[PARAMETER][integer][$nValue]Our new value for Id_Pays
	///[RETURNS]Boolean true if done 
	public function setId_Pays($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Pays"] = $nValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	}

	///[METHOD][setId_Contact_Infos]Method to set the Id_Contact_Infos
	///[PARAMETER][integer][$nValue]Our new value for Id_Contact_Infos
	///[RETURNS]Boolean true if done 
	public function setId_Contact_Infos($nValue){
		//security on null guy !!!
		if($nValue == null)
			return false;
		//security on type guy !!!
		if(getType($nValue) == 'integer'){
			 $this->$members["nId_Contact_Infos"] = $nValue;
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
			return parent::getColumns($bId) . ", xxx.Infos.Id_Infos, xxx.Infos.Adr1, xxx.Infos.Adr2, xxx.Infos.Adr3, xxx.Infos.CP, xxx.Infos.Cedex, xxx.Infos.Ville, xxx.Infos.Telephone1, xxx.Infos.Courriel1, xxx.Infos.Telephone2, xxx.Infos.Courriel2, xxx.Infos.Site, xxx.Infos.Id_Pays, xxx.Infos.Id_Contact_Infos";
		return parent::getColumns($bId) . ", xxx.Infos.Id_Infos, xxx.Infos.Adr1, xxx.Infos.Adr2, xxx.Infos.Adr3, xxx.Infos.CP, xxx.Infos.Cedex, xxx.Infos.Ville, xxx.Infos.Telephone1, xxx.Infos.Courriel1, xxx.Infos.Telephone2, xxx.Infos.Courriel2, xxx.Infos.Site, xxx.Infos.Id_Pays, xxx.Infos.Id_Contact_Infos";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondancein an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Infos" => "Id_Infos", 
			"sAdr1" => "Adr1", 
			"sAdr2" => "Adr2", 
			"sAdr3" => "Adr3", 
			"sCP" => "CP", 
			"sCedex" => "Cedex", 
			"sVille" => "Ville", 
			"sTelephone1" => "Telephone1", 
			"sCourriel1" => "Courriel1", 
			"sTelephone2" => "Telephone2", 
			"sCourriel2" => "Courriel2", 
			"sSite" => "Site", 
			"nId_Pays" => "Id_Pays", 
			"nId_Contact_Infos" => "Id_Contact_Infos"
);
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return "xxx.Infos";
		return "xxx.Infos";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return "xxx.Infos.Id_Infos = " . Quotes($this->getId_Infos());
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
		
		$sValues .= Quotes( $this->getId_Infos());
		$sValues .= ", " . Quotes( $this->getAdr1());
		$sValues .= ", " . Quotes( $this->getAdr2());
		$sValues .= ", " . Quotes( $this->getAdr3());
		$sValues .= ", " . Quotes( $this->getCP());
		$sValues .= ", " . Quotes( $this->getCedex());
		$sValues .= ", " . Quotes( $this->getVille());
		$sValues .= ", " . Quotes( $this->getTelephone1());
		$sValues .= ", " . Quotes( $this->getCourriel1());
		$sValues .= ", " . Quotes( $this->getTelephone2());
		$sValues .= ", " . Quotes( $this->getCourriel2());
		$sValues .= ", " . Quotes( $this->getSite());
		$sValues .= ", " . Quotes( $this->getId_Pays());
		$sValues .= ", " . Quotes( $this->getId_Contact_Infos());
		
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
		$Query .=  $this->getTable() . "." . "Adr1  = " . Quotes($this->getAdr1());
		$Query .= ", " .  $this->getTable() . "." . "Adr2  = " . Quotes($this->getAdr2());
		$Query .= ", " .  $this->getTable() . "." . "Adr3  = " . Quotes($this->getAdr3());
		$Query .= ", " .  $this->getTable() . "." . "CP  = " . Quotes($this->getCP());
		$Query .= ", " .  $this->getTable() . "." . "Cedex  = " . Quotes($this->getCedex());
		$Query .= ", " .  $this->getTable() . "." . "Ville  = " . Quotes($this->getVille());
		$Query .= ", " .  $this->getTable() . "." . "Telephone1  = " . Quotes($this->getTelephone1());
		$Query .= ", " .  $this->getTable() . "." . "Courriel1  = " . Quotes($this->getCourriel1());
		$Query .= ", " .  $this->getTable() . "." . "Telephone2  = " . Quotes($this->getTelephone2());
		$Query .= ", " .  $this->getTable() . "." . "Courriel2  = " . Quotes($this->getCourriel2());
		$Query .= ", " .  $this->getTable() . "." . "Site  = " . Quotes($this->getSite());
		$Query .= ", " .  $this->getTable() . "." . "Id_Pays  = " . Quotes($this->getId_Pays());
		$Query .= ", " .  $this->getTable() . "." . "Id_Contact_Infos  = " . Quotes($this->getId_Contact_Infos());
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
		if($this->getId_Infos() == 0)
			$sQuery = $this->getInsertQuery();
		else
			$sQuery = $this->getUpdateQuery();
		
		/*Not generated yet (think to call loadFromJson) */
		
		//Return the job !
		return true;
	}



};
?>