//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-16 12:05:32
//Filename : Contacts.js
//Description : Table des contacts. Hérite de celle Noeuds pour gérer la notion de hiérarchie

///[CLASS][Contacts]Table des contacts. Hérite de celle Noeuds pour gérer la notion de hiérarchie
///[AUTHOR]Ludo
function Contacts(){
	//Legacy 
	Noeuds.call(this);
	//our new member data
	var ContactsmemberSet = {	

		// ///[MEMBER][integer][nId_Contacts]Identité de la table contact, héritée de celle noeuds
		//nId_Contacts : 0 //inherited from => Contacts.Noeuds.nId_Noeuds,
		///[MEMBER][string][sPrenom]Prénom du contact
		sPrenom : "",
		///[MEMBER][string][sNom]Nom du contact
		sNom : "",
		///[MEMBER][integer][nId_Civilites]Clef étrangère sur la table civilité pour noter le contact
		nId_Civilites : 0,
		///[MEMBER][integer][nId_Titres]Clef étrangère sur les titres pour noter le titre du contact
		nId_Titres : 0,
		///[MEMBER][integer][nId_Contact_Types]Clef étrangère sur le contact pour obtenir le type du contact
		nId_Contact_Types : 0
	};
	//get the legacy
	legacy(this.members, ContactsmemberSet, true);


	//Our super
	this.myContacts = {};
	//Our hack
	var oContacts = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Contacts]Method to get the Id_Contacts
	///[RETURNS]The Id_Contacts
	this.getId_Contacts = function(){
		//Return the getter in inheritage
		return oContacts.myNoeuds.getId_Noeuds();
	};
	//hack guy !!!
	this.myContacts.getId_Contacts = this.getId_Contacts;

	///[METHOD][getPrenom]Method to get the Prenom
	///[RETURNS]The Prenom
	this.getPrenom = function(){
		//Return the member
		return oContacts.members.sPrenom;
	};
	//hack guy !!!
	this.myContacts.getPrenom = this.getPrenom;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oContacts.members.sNom;
	};
	//hack guy !!!
	this.myContacts.getNom = this.getNom;

	///[METHOD][getId_Civilites]Method to get the Id_Civilites
	///[RETURNS]The Id_Civilites
	this.getId_Civilites = function(){
		//Return the member
		return oContacts.members.nId_Civilites;
	};
	//hack guy !!!
	this.myContacts.getId_Civilites = this.getId_Civilites;

	///[METHOD][getId_Titres]Method to get the Id_Titres
	///[RETURNS]The Id_Titres
	this.getId_Titres = function(){
		//Return the member
		return oContacts.members.nId_Titres;
	};
	//hack guy !!!
	this.myContacts.getId_Titres = this.getId_Titres;

	///[METHOD][getId_Contact_Types]Method to get the Id_Contact_Types
	///[RETURNS]The Id_Contact_Types
	this.getId_Contact_Types = function(){
		//Return the member
		return oContacts.members.nId_Contact_Types;
	};
	//hack guy !!!
	this.myContacts.getId_Contact_Types = this.getId_Contact_Types;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Contacts]Method to set the Id_Contacts
	///[PARAMETER][number][nValue]Our new value for Id_Contacts
	///[RETURNS]Boolean true if done 
	this.setId_Contacts = function(nValue){
		//Return the member
		return oContacts.myNoeuds.setnId_Noeuds(nValue);
	};
	//hack guy !!!
	this.myContacts.setId_Contacts = this.setId_Contacts;

	///[METHOD][setPrenom]Method to set the Prenom
	///[PARAMETER][string][sValue]Our new value for Prenom
	///[RETURNS]Boolean true if done 
	this.setPrenom = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oContacts.members.sPrenom = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContacts.setPrenom = this.setPrenom;

	///[METHOD][setNom]Method to set the Nom
	///[PARAMETER][string][sValue]Our new value for Nom
	///[RETURNS]Boolean true if done 
	this.setNom = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oContacts.members.sNom = sValue.slice(0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContacts.setNom = this.setNom;

	///[METHOD][setId_Civilites]Method to set the Id_Civilites
	///[PARAMETER][number][nValue]Our new value for Id_Civilites
	///[RETURNS]Boolean true if done 
	this.setId_Civilites = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oContacts.members.nId_Civilites = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContacts.setId_Civilites = this.setId_Civilites;

	///[METHOD][setId_Titres]Method to set the Id_Titres
	///[PARAMETER][number][nValue]Our new value for Id_Titres
	///[RETURNS]Boolean true if done 
	this.setId_Titres = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oContacts.members.nId_Titres = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContacts.setId_Titres = this.setId_Titres;

	///[METHOD][setId_Contact_Types]Method to set the Id_Contact_Types
	///[PARAMETER][number][nValue]Our new value for Id_Contact_Types
	///[RETURNS]Boolean true if done 
	this.setId_Contact_Types = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oContacts.members.nId_Contact_Types = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContacts.setId_Contact_Types = this.setId_Contact_Types;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oContacts.members, ary_, true);
	};
	//hack guy !!!
	this.myContacts.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oContacts.members, jsonSet, true);
	};
	//hack guy !!!
	this.myContacts.loadFromJson = this.loadFromJson;


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
				oContacts.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Contacts_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContacts.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oContacts.members);
	};
	//hack guy !!!
	this.myContacts.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Contacts_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContacts.deleteMyself = this.deleteMyself;


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
				oContacts.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Contacts_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oContacts.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContacts.save = this.save;



};