<?PHP
//Module : Contacts
//Created by : Ludo
//Generated on : 2016-08-17 02:48:28
//Filename : Contacts_Infos.php
//Description : Table des adresses. Hérité de la classe item.


//include to dtb connection
include "CONTACTS_Items.php";

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
		$this->members += $InfosmemberSet;	}


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
		return $this->members["sAdr1"];
	}

	///[METHOD][getAdr2]Method to get the Adr2
	///[RETURNS]The Adr2
	public function getAdr2(){
		//Return the member
		return $this->members["sAdr2"];
	}

	///[METHOD][getAdr3]Method to get the Adr3
	///[RETURNS]The Adr3
	public function getAdr3(){
		//Return the member
		return $this->members["sAdr3"];
	}

	///[METHOD][getCP]Method to get the CP
	///[RETURNS]The CP
	public function getCP(){
		//Return the member
		return $this->members["sCP"];
	}

	///[METHOD][getCedex]Method to get the Cedex
	///[RETURNS]The Cedex
	public function getCedex(){
		//Return the member
		return $this->members["sCedex"];
	}

	///[METHOD][getVille]Method to get the Ville
	///[RETURNS]The Ville
	public function getVille(){
		//Return the member
		return $this->members["sVille"];
	}

	///[METHOD][getTelephone1]Method to get the Telephone1
	///[RETURNS]The Telephone1
	public function getTelephone1(){
		//Return the member
		return $this->members["sTelephone1"];
	}

	///[METHOD][getCourriel1]Method to get the Courriel1
	///[RETURNS]The Courriel1
	public function getCourriel1(){
		//Return the member
		return $this->members["sCourriel1"];
	}

	///[METHOD][getTelephone2]Method to get the Telephone2
	///[RETURNS]The Telephone2
	public function getTelephone2(){
		//Return the member
		return $this->members["sTelephone2"];
	}

	///[METHOD][getCourriel2]Method to get the Courriel2
	///[RETURNS]The Courriel2
	public function getCourriel2(){
		//Return the member
		return $this->members["sCourriel2"];
	}

	///[METHOD][getSite]Method to get the Site
	///[RETURNS]The Site
	public function getSite(){
		//Return the member
		return $this->members["sSite"];
	}

	///[METHOD][getId_Pays]Method to get the Id_Pays
	///[RETURNS]The Id_Pays
	public function getId_Pays(){
		//Return the member
		return $this->members["nId_Pays"];
	}

	///[METHOD][getId_Contact_Infos]Method to get the Id_Contact_Infos
	///[RETURNS]The Id_Contact_Infos
	public function getId_Contact_Infos(){
		//Return the member
		return $this->members["nId_Contact_Infos"];
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
			 $this->members["sAdr1"] = substr($sValue, 0, 256);
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
			 $this->members["sAdr2"] = substr($sValue, 0, 256);
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
			 $this->members["sAdr3"] = substr($sValue, 0, 256);
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
			 $this->members["sCP"] = substr($sValue, 0, 8);
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
			 $this->members["sCedex"] = substr($sValue, 0, 8);
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
			 $this->members["sVille"] = substr($sValue, 0, 64);
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
			 $this->members["sTelephone1"] = substr($sValue, 0, 16);
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
			 $this->members["sCourriel1"] = substr($sValue, 0, 64);
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
			 $this->members["sTelephone2"] = substr($sValue, 0, 16);
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
			 $this->members["sCourriel2"] = substr($sValue, 0, 64);
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
			 $this->members["sSite"] = substr($sValue, 0, 64);
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
			 $this->members["nId_Pays"] = $nValue;
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
			 $this->members["nId_Contact_Infos"] = $nValue;
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
			return parent::getColumns($bId) . ", xxx.Infos.Id_Infos, xxx.Infos.Adr1, xxx.Infos.Adr2, xxx.Infos.Adr3, xxx.Infos.CP, xxx.Infos.Cedex, xxx.Infos.Ville, xxx.Infos.Telephone1, xxx.Infos.Courriel1, xxx.Infos.Telephone2, xxx.Infos.Courriel2, xxx.Infos.Site, xxx.Infos.Id_Pays, xxx.Infos.Id_Contact_Infos";
		return parent::getColumns($bId) . ", xxx.Infos.Id_Infos, xxx.Infos.Adr1, xxx.Infos.Adr2, xxx.Infos.Adr3, xxx.Infos.CP, xxx.Infos.Cedex, xxx.Infos.Ville, xxx.Infos.Telephone1, xxx.Infos.Courriel1, xxx.Infos.Telephone2, xxx.Infos.Courriel2, xxx.Infos.Site, xxx.Infos.Id_Pays, xxx.Infos.Id_Contact_Infos";
	}


	///[METHOD][getCorrespondanceArray]Method to get the list of the column in a string 
	///[RETURNS][array]array, our columns correspondance in an array 
	public function getCorrespondanceArray(){
		return array(
			"nId_Infos" => "xxx.Infos.Id_Infos", 
			"sAdr1" => "xxx.Infos.Adr1", 
			"sAdr2" => "xxx.Infos.Adr2", 
			"sAdr3" => "xxx.Infos.Adr3", 
			"sCP" => "xxx.Infos.CP", 
			"sCedex" => "xxx.Infos.Cedex", 
			"sVille" => "xxx.Infos.Ville", 
			"sTelephone1" => "xxx.Infos.Telephone1", 
			"sCourriel1" => "xxx.Infos.Courriel1", 
			"sTelephone2" => "xxx.Infos.Telephone2", 
			"sCourriel2" => "xxx.Infos.Courriel2", 
			"sSite" => "xxx.Infos.Site", 
			"nId_Pays" => "xxx.Infos.Id_Pays", 
			"nId_Contact_Infos" => "xxx.Infos.Id_Contact_Infos"
) + parent::getCorrespondanceArray();
	}


	///[METHOD][getTable]Method to get the table name 
	///[PARAMETER][boolean][$bTrueName = true]boolean, give the true name or not ? 
	///[RETURNS][string]string, our table name
	public function getTable($bTrueName = false){
		if( $bTrueName)
			return parent::getTable($bTrueName) . ", xxx.Infos";
		return parent::getTable($bTrueName) . ", xxx.Infos";
	}


	///[METHOD][getLinkConditions]Method to get the conditions to link with parent table 
	///[PRAMETER][boolean][$bAll]Parameter to obtain parents Link conditions
	///[RETURNS][string]string, our conditions 
	public function getLinkConditions($bAll = false){
		//get the parent link condition
		$sParentCondition = parent::getLinkConditions();
		//test the parent condition
		if($sParentCondition != "" && $bAll)
			return $sParentCondition ." \r\nAND xxx.Items.Id_Items =  xxx.Infos.Id_Infos";
		else
			return " xxx.Items.Id_Items = xxx.Infos.Id_Infos";
	}


	///[METHOD][getConditions]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getConditions(){
		return parent::getConditions() . " \r\nAND " . $this->getLinkConditions() . " \r\nAND xxx.Infos.Id_Infos = " . Quotes($this->getId_Infos());
	}


	///[METHOD][getSelectQuery]Method to get the list of the column in a string 
	///[RETURNS][string]string, select query
	public function getSelectQuery(){
		return "SELECT " . $this->getColumns() . "\r\n" . "FROM " . $this->getTable() . "\r\n" . "WHERE " . $this->getConditions();
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
		return parent::getInsertQuery() . ";\r\n" . "INSERT INTO " . $this->getTable() . " (" . $this->getColumns(false) . ")" . "\r\n" . "VALUES(" . $this->getValues() . " )";
	}


	///[METHOD][getUpdateQuery]Method to get the conditions 
	///[RETURNS][string]string, our conditions 
	public function getUpdateQuery(){
		//Our query
		$Query = "";
		
		//Start the build
		$Query .= parent::getUpdateQuery() . ";\r\n" . "UPDATE " . "xxx.Infos" . "\r\n" ;
		//build the set
		$Query .= "SET " . "\r\n" ;
		$Query .=  "Adr1  = " . Quotes($this->getAdr1());
		$Query .= ", " .  "Adr2  = " . Quotes($this->getAdr2());
		$Query .= ", " .  "Adr3  = " . Quotes($this->getAdr3());
		$Query .= ", " .  "CP  = " . Quotes($this->getCP());
		$Query .= ", " .  "Cedex  = " . Quotes($this->getCedex());
		$Query .= ", " .  "Ville  = " . Quotes($this->getVille());
		$Query .= ", " .  "Telephone1  = " . Quotes($this->getTelephone1());
		$Query .= ", " .  "Courriel1  = " . Quotes($this->getCourriel1());
		$Query .= ", " .  "Telephone2  = " . Quotes($this->getTelephone2());
		$Query .= ", " .  "Courriel2  = " . Quotes($this->getCourriel2());
		$Query .= ", " .  "Site  = " . Quotes($this->getSite());
		$Query .= ", " .  "Id_Pays  = " . Quotes($this->getId_Pays());
		$Query .= ", " .  "Id_Contact_Infos  = " . Quotes($this->getId_Contact_Infos());
		//build the condition
		$Query .= "WHERE Id_Infos = " . Quotes($this->getId_Infos());
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
		if($this->getId_Infos() == 0)
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
		return $this->loadFromConnection($oAgent);
	}



};
?>