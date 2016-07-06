//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:49
//Filename : Organisation_Types.js
//Description : Tables des différants type d'organisations possibles

///[CLASS][Organisation_Types]Tables des différants type d'organisations possibles
///[AUTHOR]Ludo
function Organisation_Types(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Organisation_Types]Identifiant de la table en Auto-Incrément
		nId_Organisation_Types : 0,
		///[MEMBER][string][sNom]Nom du type d'organisation
		sNom : ""
	};


	//Our super
	this.myOrganisation_Types = {};
	//Our hack
	var oOrganisation_Types = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Organisation_Types]Method to get the Id_Organisation_Types
	///[RETURNS]The Id_Organisation_Types
	this.getId_Organisation_Types = function(){
		//Return the member
		return oOrganisation_Types.members.nId_Organisation_Types;
	};
	//hack guy !!!
	this.myOrganisation_Types.getId_Organisation_Types = this.getId_Organisation_Types;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oOrganisation_Types.members.sNom;
	};
	//hack guy !!!
	this.myOrganisation_Types.getNom = this.getNom;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Organisation_Types]Method to set the Id_Organisation_Types
	///[PARAMETER][number][nValue]Our new value for Id_Organisation_Types
	///[RETURNS]Boolean true if done 
	this.setId_Organisation_Types = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oOrganisation_Types.members.nId_Organisation_Types = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myOrganisation_Types.setId_Organisation_Types = this.setId_Organisation_Types;

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
			oOrganisation_Types.members.sNom = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myOrganisation_Types.setNom = this.setNom;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oOrganisation_Types.members, jsonSet, true);
	};
	//hack guy !!!
	this.myOrganisation_Types.loadFromJson = this.loadFromJson;


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
				oOrganisation_Types.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Organisation_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myOrganisation_Types.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oOrganisation_Types.members);
	};
	//hack guy !!!
	this.myOrganisation_Types.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Organisation_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myOrganisation_Types.deleteMyself = this.deleteMyself;


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
				oOrganisation_Types.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Organisation_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oOrganisation_Types.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myOrganisation_Types.save = this.save;



};