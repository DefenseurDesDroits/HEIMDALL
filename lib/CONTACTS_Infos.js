//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-25 12:16:41
//Filename : Infos.js
//Description : Table des adresses. Hérité de la classe item.

///[CLASS][Infos]Table des adresses. Hérité de la classe item.
///[AUTHOR]Ludo
function Infos(){
	//Legacy 
	Items.call(this);
	//our new member data
	var InfosmemberSet = {	

		// ///[MEMBER][integer][nId_Infos]Identifiant des adresses
		//nId_Infos : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][string][sAdr1]Première partie de l'adresse
		sAdr1 : "",
		///[MEMBER][string][sAdr2]Deuxième partie de l'adresse
		sAdr2 : "",
		///[MEMBER][string][sAdr3]Troisième et dernière partie de l'adresse
		sAdr3 : "",
		///[MEMBER][string][sCP]Le Code postal
		sCP : "",
		///[MEMBER][string][sCedex]Le code cedex
		sCedex : "",
		///[MEMBER][string][sVille]La Ville
		sVille : "",
		///[MEMBER][string][sTelephone1]Téléphone numéro 1
		sTelephone1 : "",
		///[MEMBER][string][sCourriel1]Courriel numéro 1
		sCourriel1 : "",
		///[MEMBER][string][sTelephone2]Téléphone numéro 2
		sTelephone2 : "",
		///[MEMBER][string][sCourriel2]Courriel numéro 2
		sCourriel2 : "",
		///[MEMBER][string][sSite]Adresse du site web
		sSite : "",
		///[MEMBER][integer][nId_Pays]Clef étrangère sur la table pays. C'est le pays de l'adresse.
		nId_Pays : 0,
		///[MEMBER][integer][nId_Contact_Infos]Clef étrangère sur la table Contact_Infos Le contact info propriétaire de cette adresse
		nId_Contact_Infos : 0
	};
	//get the legacy
	legacy(this.members, InfosmemberSet, true);


	//Our super
	this.myInfos = {};
	//Our hack
	var oInfos = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Infos]Method to get the Id_Infos
	///[RETURNS]The Id_Infos
	this.getId_Infos = function(){
		//Return the getter in inheritage
		return oInfos.myItems.getId_Items();
	};
	//hack guy !!!
	this.myInfos.getId_Infos = this.getId_Infos;

	///[METHOD][getAdr1]Method to get the Adr1
	///[RETURNS]The Adr1
	this.getAdr1 = function(){
		//Return the member
		return oInfos.members.sAdr1;
	};
	//hack guy !!!
	this.myInfos.getAdr1 = this.getAdr1;

	///[METHOD][getAdr2]Method to get the Adr2
	///[RETURNS]The Adr2
	this.getAdr2 = function(){
		//Return the member
		return oInfos.members.sAdr2;
	};
	//hack guy !!!
	this.myInfos.getAdr2 = this.getAdr2;

	///[METHOD][getAdr3]Method to get the Adr3
	///[RETURNS]The Adr3
	this.getAdr3 = function(){
		//Return the member
		return oInfos.members.sAdr3;
	};
	//hack guy !!!
	this.myInfos.getAdr3 = this.getAdr3;

	///[METHOD][getCP]Method to get the CP
	///[RETURNS]The CP
	this.getCP = function(){
		//Return the member
		return oInfos.members.sCP;
	};
	//hack guy !!!
	this.myInfos.getCP = this.getCP;

	///[METHOD][getCedex]Method to get the Cedex
	///[RETURNS]The Cedex
	this.getCedex = function(){
		//Return the member
		return oInfos.members.sCedex;
	};
	//hack guy !!!
	this.myInfos.getCedex = this.getCedex;

	///[METHOD][getVille]Method to get the Ville
	///[RETURNS]The Ville
	this.getVille = function(){
		//Return the member
		return oInfos.members.sVille;
	};
	//hack guy !!!
	this.myInfos.getVille = this.getVille;

	///[METHOD][getTelephone1]Method to get the Telephone1
	///[RETURNS]The Telephone1
	this.getTelephone1 = function(){
		//Return the member
		return oInfos.members.sTelephone1;
	};
	//hack guy !!!
	this.myInfos.getTelephone1 = this.getTelephone1;

	///[METHOD][getCourriel1]Method to get the Courriel1
	///[RETURNS]The Courriel1
	this.getCourriel1 = function(){
		//Return the member
		return oInfos.members.sCourriel1;
	};
	//hack guy !!!
	this.myInfos.getCourriel1 = this.getCourriel1;

	///[METHOD][getTelephone2]Method to get the Telephone2
	///[RETURNS]The Telephone2
	this.getTelephone2 = function(){
		//Return the member
		return oInfos.members.sTelephone2;
	};
	//hack guy !!!
	this.myInfos.getTelephone2 = this.getTelephone2;

	///[METHOD][getCourriel2]Method to get the Courriel2
	///[RETURNS]The Courriel2
	this.getCourriel2 = function(){
		//Return the member
		return oInfos.members.sCourriel2;
	};
	//hack guy !!!
	this.myInfos.getCourriel2 = this.getCourriel2;

	///[METHOD][getSite]Method to get the Site
	///[RETURNS]The Site
	this.getSite = function(){
		//Return the member
		return oInfos.members.sSite;
	};
	//hack guy !!!
	this.myInfos.getSite = this.getSite;

	///[METHOD][getId_Pays]Method to get the Id_Pays
	///[RETURNS]The Id_Pays
	this.getId_Pays = function(){
		//Return the member
		return oInfos.members.nId_Pays;
	};
	//hack guy !!!
	this.myInfos.getId_Pays = this.getId_Pays;

	///[METHOD][getId_Contact_Infos]Method to get the Id_Contact_Infos
	///[RETURNS]The Id_Contact_Infos
	this.getId_Contact_Infos = function(){
		//Return the member
		return oInfos.members.nId_Contact_Infos;
	};
	//hack guy !!!
	this.myInfos.getId_Contact_Infos = this.getId_Contact_Infos;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Infos]Method to set the Id_Infos
	///[PARAMETER][number][nValue]Our new value for Id_Infos
	///[RETURNS]Boolean true if done 
	this.setId_Infos = function(nValue){
		//Return the member
		return oInfos.myItems.setnId_Items(nValue);
	};
	//hack guy !!!
	this.myInfos.setId_Infos = this.setId_Infos;

	///[METHOD][setAdr1]Method to set the Adr1
	///[PARAMETER][string][sValue]Our new value for Adr1
	///[RETURNS]Boolean true if done 
	this.setAdr1 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sAdr1 = sValue.slice(0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setAdr1 = this.setAdr1;

	///[METHOD][setAdr2]Method to set the Adr2
	///[PARAMETER][string][sValue]Our new value for Adr2
	///[RETURNS]Boolean true if done 
	this.setAdr2 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sAdr2 = sValue.slice(0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setAdr2 = this.setAdr2;

	///[METHOD][setAdr3]Method to set the Adr3
	///[PARAMETER][string][sValue]Our new value for Adr3
	///[RETURNS]Boolean true if done 
	this.setAdr3 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sAdr3 = sValue.slice(0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setAdr3 = this.setAdr3;

	///[METHOD][setCP]Method to set the CP
	///[PARAMETER][string][sValue]Our new value for CP
	///[RETURNS]Boolean true if done 
	this.setCP = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sCP = sValue.slice(0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setCP = this.setCP;

	///[METHOD][setCedex]Method to set the Cedex
	///[PARAMETER][string][sValue]Our new value for Cedex
	///[RETURNS]Boolean true if done 
	this.setCedex = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sCedex = sValue.slice(0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setCedex = this.setCedex;

	///[METHOD][setVille]Method to set the Ville
	///[PARAMETER][string][sValue]Our new value for Ville
	///[RETURNS]Boolean true if done 
	this.setVille = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sVille = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setVille = this.setVille;

	///[METHOD][setTelephone1]Method to set the Telephone1
	///[PARAMETER][string][sValue]Our new value for Telephone1
	///[RETURNS]Boolean true if done 
	this.setTelephone1 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sTelephone1 = sValue.slice(0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setTelephone1 = this.setTelephone1;

	///[METHOD][setCourriel1]Method to set the Courriel1
	///[PARAMETER][string][sValue]Our new value for Courriel1
	///[RETURNS]Boolean true if done 
	this.setCourriel1 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sCourriel1 = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setCourriel1 = this.setCourriel1;

	///[METHOD][setTelephone2]Method to set the Telephone2
	///[PARAMETER][string][sValue]Our new value for Telephone2
	///[RETURNS]Boolean true if done 
	this.setTelephone2 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sTelephone2 = sValue.slice(0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setTelephone2 = this.setTelephone2;

	///[METHOD][setCourriel2]Method to set the Courriel2
	///[PARAMETER][string][sValue]Our new value for Courriel2
	///[RETURNS]Boolean true if done 
	this.setCourriel2 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sCourriel2 = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setCourriel2 = this.setCourriel2;

	///[METHOD][setSite]Method to set the Site
	///[PARAMETER][string][sValue]Our new value for Site
	///[RETURNS]Boolean true if done 
	this.setSite = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oInfos.members.sSite = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setSite = this.setSite;

	///[METHOD][setId_Pays]Method to set the Id_Pays
	///[PARAMETER][number][nValue]Our new value for Id_Pays
	///[RETURNS]Boolean true if done 
	this.setId_Pays = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oInfos.members.nId_Pays = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setId_Pays = this.setId_Pays;

	///[METHOD][setId_Contact_Infos]Method to set the Id_Contact_Infos
	///[PARAMETER][number][nValue]Our new value for Id_Contact_Infos
	///[RETURNS]Boolean true if done 
	this.setId_Contact_Infos = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oInfos.members.nId_Contact_Infos = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myInfos.setId_Contact_Infos = this.setId_Contact_Infos;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oInfos.members, ary_, true);
	};
	//hack guy !!!
	this.myInfos.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oInfos.members, jsonSet, true);
	};
	//hack guy !!!
	this.myInfos.loadFromJson = this.loadFromJson;


	///[METHOD][loadFromConnection]Method to load from a connection
	///[PARAMETER][string][session]Our session
	///[PARAMETER][string][url]Our url
	///[RETURNS]boolean, true if done
	this.loadFromConnection = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oInfos.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Infos_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myInfos.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oInfos.members);
	};
	//hack guy !!!
	this.myInfos.exportToJson = this.exportToJson;


	///[METHOD][deleteMyself]Method to delete the record in the DTB
	///[PARAMETER][string][session]Our session
	///[PARAMETER][string][url]Our url
	///[RETURNS]boolean, true if done
	this.deleteMyself = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				//Ah !
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Infos_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myInfos.deleteMyself = this.deleteMyself;


	///[METHOD][save]Method to save with a connection
	///[PARAMETER][string][session]Our session
	///[PARAMETER][string][url]Our url
	///[RETURNS]boolean, true if done
	this.save = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oInfos.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Infos_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oInfos.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myInfos.save = this.save;



};