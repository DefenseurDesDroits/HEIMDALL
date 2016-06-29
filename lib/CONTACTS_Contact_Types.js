//Module : Contacts
//Created by : Ludo
//Generated on : 2016-06-29 04:04:05
//Filename : Contact_Types.js
//Description : Table des types de contact

///[CLASS][Contact_Types]Table des types de contact
///[AUTHOR]Ludo
function Contact_Types(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Contact_Types]Identité de la table
		nId_Contact_Types : 0,
		///[MEMBER][string][sNom]Type du contact
		sNom : ""
	};


	//Our super
	this.myContact_Types = {};
	//Our hack
	var oContact_Types = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Contact_Types]Method to get the Id_Contact_Types
	///[RETURNS]The Id_Contact_Types
	this.getId_Contact_Types = function(){
		//Return the member
		return oContact_Types.members.nId_Contact_Types;
	};
	//hack guy !!!
	this.myContact_Types.getId_Contact_Types = this.getId_Contact_Types;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oContact_Types.members.sNom;
	};
	//hack guy !!!
	this.myContact_Types.getNom = this.getNom;



	///[SECTION][SETTERS]#################################################

	///[METHOD][getId_Contact_Types]Method to set the Id_Contact_Types
	///[PARAMETER][number][nValue]Our new value for Id_Contact_Types
	///[RETURNS]Boolean true if done 
	this.getId_Contact_Types = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oContact_Types.members.nId_Contact_Types = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContact_Types.getId_Contact_Types = this.getId_Contact_Types;

	///[METHOD][getNom]Method to set the Nom
	///[PARAMETER][string][sValue]Our new value for Nom
	///[RETURNS]Boolean true if done 
	this.getNom = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oContact_Types.members.sNom = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContact_Types.getNom = this.getNom;



	///[SECTION][WORKSHOP]################################################

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oContact_Types.members, jsonSet, true);
	};
	//hack guy !!!
	this.myContact_Types.loadFromJson = this.loadFromJson;


	///[METHOD][loadFromConnection]Method to load from a connection
	///[PARAMETER][string][session]Our string with Json encoding
	///[PARAMETER][string][url]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromConnection = function(session, url){
		//Our request object
		var oRep = new XMLHttpRequest();
		//Define the function
		oRep.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oContact_Types.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Contact_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContact_Types.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oContact_Types.members);
	};
	//hack guy !!!
	this.myContact_Types.exportToJson = this.exportToJson;


	///[METHOD][deleteMyself]Method to delete the record in the DTB
	///[PARAMETER][string][session]Our string with Json encoding
	///[PARAMETER][string][url]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.deleteMyself = function(session, url){
		//Our request object
		var oRep = new XMLHttpRequest();
		//Define the function
		oRep.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				//Ah !
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Contact_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContact_Types.deleteMyself = this.deleteMyself;


	///[METHOD][save]Method to save with a connection
	///[PARAMETER][string][session]Our string with Json encoding
	///[PARAMETER][string][url]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.save = function(session, url){
		//Our request object
		var oRep = new XMLHttpRequest();
		//Define the function
		oRep.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oContact_Types.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Contact_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Json=" + oContact_Types.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContact_Types.save = this.save;



};