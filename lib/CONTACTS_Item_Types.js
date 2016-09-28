//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-25 12:16:41
//Filename : Item_Types.js
//Description : Table des types d'items

///[CLASS][Item_Types]Table des types d'items
///[AUTHOR]Ludo
function Item_Types(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_item_types]Identité de la table
		nId_item_types : 0,
		///[MEMBER][string][sNom]Nom de l'item
		sNom : ""
	};


	//Our super
	this.myItem_Types = {};
	//Our hack
	var oItem_Types = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_item_types]Method to get the Id_item_types
	///[RETURNS]The Id_item_types
	this.getId_item_types = function(){
		//Return the member
		return oItem_Types.members.nId_item_types;
	};
	//hack guy !!!
	this.myItem_Types.getId_item_types = this.getId_item_types;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oItem_Types.members.sNom;
	};
	//hack guy !!!
	this.myItem_Types.getNom = this.getNom;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_item_types]Method to set the Id_item_types
	///[PARAMETER][number][nValue]Our new value for Id_item_types
	///[RETURNS]Boolean true if done 
	this.setId_item_types = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oItem_Types.members.nId_item_types = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myItem_Types.setId_item_types = this.setId_item_types;

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
			oItem_Types.members.sNom = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myItem_Types.setNom = this.setNom;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oItem_Types.members, ary_, true);
	};
	//hack guy !!!
	this.myItem_Types.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oItem_Types.members, jsonSet, true);
	};
	//hack guy !!!
	this.myItem_Types.loadFromJson = this.loadFromJson;


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
				oItem_Types.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Item_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myItem_Types.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oItem_Types.members);
	};
	//hack guy !!!
	this.myItem_Types.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Item_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myItem_Types.deleteMyself = this.deleteMyself;


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
				oItem_Types.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Item_Types_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oItem_Types.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myItem_Types.save = this.save;



};