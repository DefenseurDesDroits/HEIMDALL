//Module : Contacts
//Created by : Ludo
//Generated on : 2016-06-29 04:04:05
//Filename : Titres.js
//Description : Tables des titres des contacts

///[CLASS][Titres]Tables des titres des contacts
///[AUTHOR]Ludo
function Titres(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Titres]Identité de la table des titres
		nId_Titres : 0,
		///[MEMBER][string][sNom]Nom des titres
		sNom : "",
		///[MEMBER][integer][nRang]Rang du titre
		nRang : 0
	};


	//Our super
	this.myTitres = {};
	//Our hack
	var oTitres = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Titres]Method to get the Id_Titres
	///[RETURNS]The Id_Titres
	this.getId_Titres = function(){
		//Return the member
		return oTitres.members.nId_Titres;
	};
	//hack guy !!!
	this.myTitres.getId_Titres = this.getId_Titres;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oTitres.members.sNom;
	};
	//hack guy !!!
	this.myTitres.getNom = this.getNom;

	///[METHOD][getRang]Method to get the Rang
	///[RETURNS]The Rang
	this.getRang = function(){
		//Return the member
		return oTitres.members.nRang;
	};
	//hack guy !!!
	this.myTitres.getRang = this.getRang;



	///[SECTION][SETTERS]#################################################

	///[METHOD][getId_Titres]Method to set the Id_Titres
	///[PARAMETER][number][nValue]Our new value for Id_Titres
	///[RETURNS]Boolean true if done 
	this.getId_Titres = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oTitres.members.nId_Titres = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myTitres.getId_Titres = this.getId_Titres;

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
			oTitres.members.sNom = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myTitres.getNom = this.getNom;

	///[METHOD][getRang]Method to set the Rang
	///[PARAMETER][number][nValue]Our new value for Rang
	///[RETURNS]Boolean true if done 
	this.getRang = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oTitres.members.nRang = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myTitres.getRang = this.getRang;



	///[SECTION][WORKSHOP]################################################

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oTitres.members, jsonSet, true);
	};
	//hack guy !!!
	this.myTitres.loadFromJson = this.loadFromJson;


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
				oTitres.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Titres_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myTitres.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oTitres.members);
	};
	//hack guy !!!
	this.myTitres.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Titres_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myTitres.deleteMyself = this.deleteMyself;


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
				oTitres.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Titres_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Json=" + oTitres.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myTitres.save = this.save;



};