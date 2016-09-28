//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-16 12:05:32
//Filename : Civilites.js
//Description : Table des civilités des contacts

///[CLASS][Civilites]Table des civilités des contacts
///[AUTHOR]Ludo
function Civilites(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Civilites]Identité de nde la table civilité
		nId_Civilites : 0,
		///[MEMBER][string][sNom]Nom de la civilité
		sNom : "",
		///[MEMBER][string][sAbr]Abréviation
		sAbr : ""
	};


	//Our super
	this.myCivilites = {};
	//Our hack
	var oCivilites = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Civilites]Method to get the Id_Civilites
	///[RETURNS]The Id_Civilites
	this.getId_Civilites = function(){
		//Return the member
		return oCivilites.members.nId_Civilites;
	};
	//hack guy !!!
	this.myCivilites.getId_Civilites = this.getId_Civilites;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oCivilites.members.sNom;
	};
	//hack guy !!!
	this.myCivilites.getNom = this.getNom;

	///[METHOD][getAbr]Method to get the Abr
	///[RETURNS]The Abr
	this.getAbr = function(){
		//Return the member
		return oCivilites.members.sAbr;
	};
	//hack guy !!!
	this.myCivilites.getAbr = this.getAbr;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Civilites]Method to set the Id_Civilites
	///[PARAMETER][number][nValue]Our new value for Id_Civilites
	///[RETURNS]Boolean true if done 
	this.setId_Civilites = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oCivilites.members.nId_Civilites = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myCivilites.setId_Civilites = this.setId_Civilites;

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
			oCivilites.members.sNom = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myCivilites.setNom = this.setNom;

	///[METHOD][setAbr]Method to set the Abr
	///[PARAMETER][string][sValue]Our new value for Abr
	///[RETURNS]Boolean true if done 
	this.setAbr = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oCivilites.members.sAbr = sValue.slice(0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myCivilites.setAbr = this.setAbr;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oCivilites.members, ary_, true);
	};
	//hack guy !!!
	this.myCivilites.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oCivilites.members, jsonSet, true);
	};
	//hack guy !!!
	this.myCivilites.loadFromJson = this.loadFromJson;


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
				oCivilites.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Civilites_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myCivilites.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oCivilites.members);
	};
	//hack guy !!!
	this.myCivilites.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Civilites_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myCivilites.deleteMyself = this.deleteMyself;


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
				oCivilites.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Civilites_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oCivilites.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myCivilites.save = this.save;



};