//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:49
//Filename : Pays.js
//Description : Tables des pays

///[CLASS][Pays]Tables des pays
///[AUTHOR]Ludo
function Pays(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Pays]Identifiant de la table
		nId_Pays : 0,
		///[MEMBER][string][sCode]Code du pays
		sCode : "",
		///[MEMBER][string][sAlpha2]Code alpha du pays en 2 caractères
		sAlpha2 : "",
		///[MEMBER][string][sAlpha3]Code alpha du pays en 3 caractères
		sAlpha3 : "",
		///[MEMBER][string][sNom]Nom du pays
		sNom : "",
		///[MEMBER][string][jsonId_Langues_Json]Liste des langues du pays
		jsonId_Langues_Json : ""
	};


	//Our super
	this.myPays = {};
	//Our hack
	var oPays = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Pays]Method to get the Id_Pays
	///[RETURNS]The Id_Pays
	this.getId_Pays = function(){
		//Return the member
		return oPays.members.nId_Pays;
	};
	//hack guy !!!
	this.myPays.getId_Pays = this.getId_Pays;

	///[METHOD][getCode]Method to get the Code
	///[RETURNS]The Code
	this.getCode = function(){
		//Return the member
		return oPays.members.sCode;
	};
	//hack guy !!!
	this.myPays.getCode = this.getCode;

	///[METHOD][getAlpha2]Method to get the Alpha2
	///[RETURNS]The Alpha2
	this.getAlpha2 = function(){
		//Return the member
		return oPays.members.sAlpha2;
	};
	//hack guy !!!
	this.myPays.getAlpha2 = this.getAlpha2;

	///[METHOD][getAlpha3]Method to get the Alpha3
	///[RETURNS]The Alpha3
	this.getAlpha3 = function(){
		//Return the member
		return oPays.members.sAlpha3;
	};
	//hack guy !!!
	this.myPays.getAlpha3 = this.getAlpha3;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oPays.members.sNom;
	};
	//hack guy !!!
	this.myPays.getNom = this.getNom;

	///[METHOD][getId_Langues_Json]Method to get the Id_Langues_Json
	///[RETURNS]The Id_Langues_Json
	this.getId_Langues_Json = function(){
		//Return the member
		return oPays.members.jsonId_Langues_Json;
	};
	//hack guy !!!
	this.myPays.getId_Langues_Json = this.getId_Langues_Json;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Pays]Method to set the Id_Pays
	///[PARAMETER][number][nValue]Our new value for Id_Pays
	///[RETURNS]Boolean true if done 
	this.setId_Pays = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oPays.members.nId_Pays = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPays.setId_Pays = this.setId_Pays;

	///[METHOD][setCode]Method to set the Code
	///[PARAMETER][string][sValue]Our new value for Code
	///[RETURNS]Boolean true if done 
	this.setCode = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oPays.members.sCode = sValue.slice(0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPays.setCode = this.setCode;

	///[METHOD][setAlpha2]Method to set the Alpha2
	///[PARAMETER][string][sValue]Our new value for Alpha2
	///[RETURNS]Boolean true if done 
	this.setAlpha2 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oPays.members.sAlpha2 = sValue.slice(0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPays.setAlpha2 = this.setAlpha2;

	///[METHOD][setAlpha3]Method to set the Alpha3
	///[PARAMETER][string][sValue]Our new value for Alpha3
	///[RETURNS]Boolean true if done 
	this.setAlpha3 = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oPays.members.sAlpha3 = sValue.slice(0, 8);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPays.setAlpha3 = this.setAlpha3;

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
			oPays.members.sNom = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPays.setNom = this.setNom;

	///[METHOD][setId_Langues_Json]Method to set the Id_Langues_Json
	///[PARAMETER][string][sValue]Our new value for Id_Langues_Json
	///[RETURNS]Boolean true if done 
	this.setId_Langues_Json = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			oPays.members.jsonId_Langues_Json = sValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPays.setId_Langues_Json = this.setId_Langues_Json;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oPays.members, jsonSet, true);
	};
	//hack guy !!!
	this.myPays.loadFromJson = this.loadFromJson;


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
				oPays.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Pays_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myPays.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oPays.members);
	};
	//hack guy !!!
	this.myPays.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Pays_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myPays.deleteMyself = this.deleteMyself;


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
				oPays.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Pays_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oPays.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myPays.save = this.save;



};