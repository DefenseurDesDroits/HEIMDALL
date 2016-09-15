//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-14 04:56:44
//Filename : Logs.js
//Description : Table pour enregistrer tous les changements de valeur d'item.

///[CLASS][Logs]Table pour enregistrer tous les changements de valeur d'item.
///[AUTHOR]Ludo
function Logs(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Logs]Clef primaire de la table de login.
		nId_Logs : 0,
		///[MEMBER][integer][nId_Items]Identifiant de l'objet modifié, cette clef n'est pas étrangère pour ne pas supprimer l'état des objets supprimés.
		nId_Items : 0,
		///[MEMBER][string][sCreation]Date de création du log.
		sCreation : "",
		///[MEMBER][integer][nId_Creator]Créateur du Log. Cette clef n'est pas étrangère pour ne pas supprimer l'état des objets supprimés.
		nId_Creator : 0,
		///[MEMBER][string][sValidation]Date de validation
		sValidation : "",
		///[MEMBER][integer][nId_Validator]Validateur de cette modification
		nId_Validator : 0,
		///[MEMBER][string][sValeur]Json, dernière valeur d'item
		sValeur : "",
		///[MEMBER][boolean][bSuppression]L'objet est il en attente de suppression (ou supprimé si Suppression == True And sValidation != '')
		bSuppression : false
	};


	//Our super
	this.myLogs = {};
	//Our hack
	var oLogs = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Logs]Method to get the Id_Logs
	///[RETURNS]The Id_Logs
	this.getId_Logs = function(){
		//Return the member
		return oLogs.members.nId_Logs;
	};
	//hack guy !!!
	this.myLogs.getId_Logs = this.getId_Logs;

	///[METHOD][getId_Items]Method to get the Id_Items
	///[RETURNS]The Id_Items
	this.getId_Items = function(){
		//Return the member
		return oLogs.members.nId_Items;
	};
	//hack guy !!!
	this.myLogs.getId_Items = this.getId_Items;

	///[METHOD][getCreation]Method to get the Creation
	///[RETURNS]The Creation
	this.getCreation = function(){
		//Return the member
		return oLogs.members.sCreation;
	};
	//hack guy !!!
	this.myLogs.getCreation = this.getCreation;

	///[METHOD][getId_Creator]Method to get the Id_Creator
	///[RETURNS]The Id_Creator
	this.getId_Creator = function(){
		//Return the member
		return oLogs.members.nId_Creator;
	};
	//hack guy !!!
	this.myLogs.getId_Creator = this.getId_Creator;

	///[METHOD][getValidation]Method to get the Validation
	///[RETURNS]The Validation
	this.getValidation = function(){
		//Return the member
		return oLogs.members.sValidation;
	};
	//hack guy !!!
	this.myLogs.getValidation = this.getValidation;

	///[METHOD][getId_Validator]Method to get the Id_Validator
	///[RETURNS]The Id_Validator
	this.getId_Validator = function(){
		//Return the member
		return oLogs.members.nId_Validator;
	};
	//hack guy !!!
	this.myLogs.getId_Validator = this.getId_Validator;

	///[METHOD][getValeur]Method to get the Valeur
	///[RETURNS]The Valeur
	this.getValeur = function(){
		//Return the member
		return oLogs.members.sValeur;
	};
	//hack guy !!!
	this.myLogs.getValeur = this.getValeur;

	///[METHOD][getSuppression]Method to get the Suppression
	///[RETURNS]The Suppression
	this.getSuppression = function(){
		//Return the member
		return oLogs.members.bSuppression;
	};
	//hack guy !!!
	this.myLogs.getSuppression = this.getSuppression;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Logs]Method to set the Id_Logs
	///[PARAMETER][number][nValue]Our new value for Id_Logs
	///[RETURNS]Boolean true if done 
	this.setId_Logs = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oLogs.members.nId_Logs = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setId_Logs = this.setId_Logs;

	///[METHOD][setId_Items]Method to set the Id_Items
	///[PARAMETER][number][nValue]Our new value for Id_Items
	///[RETURNS]Boolean true if done 
	this.setId_Items = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oLogs.members.nId_Items = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setId_Items = this.setId_Items;

	///[METHOD][setCreation]Method to set the Creation
	///[PARAMETER][string][sValue]Our new value for Creation
	///[RETURNS]Boolean true if done 
	this.setCreation = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oLogs.members.sCreation = sValue.slice(0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setCreation = this.setCreation;

	///[METHOD][setId_Creator]Method to set the Id_Creator
	///[PARAMETER][number][nValue]Our new value for Id_Creator
	///[RETURNS]Boolean true if done 
	this.setId_Creator = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oLogs.members.nId_Creator = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setId_Creator = this.setId_Creator;

	///[METHOD][setValidation]Method to set the Validation
	///[PARAMETER][string][sValue]Our new value for Validation
	///[RETURNS]Boolean true if done 
	this.setValidation = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oLogs.members.sValidation = sValue.slice(0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setValidation = this.setValidation;

	///[METHOD][setId_Validator]Method to set the Id_Validator
	///[PARAMETER][number][nValue]Our new value for Id_Validator
	///[RETURNS]Boolean true if done 
	this.setId_Validator = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oLogs.members.nId_Validator = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setId_Validator = this.setId_Validator;

	///[METHOD][setValeur]Method to set the Valeur
	///[PARAMETER][string][sValue]Our new value for Valeur
	///[RETURNS]Boolean true if done 
	this.setValeur = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oLogs.members.sValeur = sValue.slice(0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setValeur = this.setValeur;

	///[METHOD][setSuppression]Method to set the Suppression
	///[PARAMETER][boolean][bValue]Our new value for Suppression
	///[RETURNS]Boolean true if done 
	this.setSuppression = function(bValue){
		//security on null guy !!!
		if(bValue == null)
			return false;
		//security on type guy !!!
		if(typeof bValue === 'boolean'){
			oLogs.members.bSuppression = bValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLogs.setSuppression = this.setSuppression;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oLogs.members, ary_, true);
	};
	//hack guy !!!
	this.myLogs.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oLogs.members, jsonSet, true);
	};
	//hack guy !!!
	this.myLogs.loadFromJson = this.loadFromJson;


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
				oLogs.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Logs_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLogs.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oLogs.members);
	};
	//hack guy !!!
	this.myLogs.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Logs_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLogs.deleteMyself = this.deleteMyself;


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
				oLogs.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Logs_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oLogs.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLogs.save = this.save;



};