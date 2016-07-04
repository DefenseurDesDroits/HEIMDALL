//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-04 05:56:02
//Filename : Langues.js
//Description : Tables des langues

///[CLASS][Langues]Tables des langues
///[AUTHOR]Ludo
function Langues(){
	//our member data
	this.members = {	

		///[MEMBER][long][nId_Langues]Identité de la table
		nId_Langues : 0,
		///[MEMBER][string][sNom]Nom du pays
		sNom : ""
	};


	//Our super
	this.myLangues = {};
	//Our hack
	var oLangues = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Langues]Method to get the Id_Langues
	///[RETURNS]The Id_Langues
	this.getId_Langues = function(){
		//Return the member
		return oLangues.members.nId_Langues;
	};
	//hack guy !!!
	this.myLangues.getId_Langues = this.getId_Langues;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oLangues.members.sNom;
	};
	//hack guy !!!
	this.myLangues.getNom = this.getNom;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Langues]Method to set the Id_Langues
	///[PARAMETER][number][lValue]Our new value for Id_Langues
	///[RETURNS]Boolean true if done 
	this.setId_Langues = function(lValue){
		//security on null guy !!!
		if(lValue == null)
			return false;
		//security on type guy !!!
		if(typeof lValue === 'number'){
			oLangues.members.nId_Langues = Math.floor(lValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLangues.setId_Langues = this.setId_Langues;

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
			oLangues.members.sNom = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLangues.setNom = this.setNom;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oLangues.members, jsonSet, true);
	};
	//hack guy !!!
	this.myLangues.loadFromJson = this.loadFromJson;


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
				oLangues.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Langues_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLangues.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oLangues.members);
	};
	//hack guy !!!
	this.myLangues.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Langues_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLangues.deleteMyself = this.deleteMyself;


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
				oLangues.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Langues_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Json=" + oLangues.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLangues.save = this.save;



};