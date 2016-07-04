//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-04 05:56:02
//Filename : Items.js
//Description : Table de tous les items avec des droits

///[CLASS][Items]Table de tous les items avec des droits
///[AUTHOR]Ludo
function Items(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Items]Identité de la table
		nId_Items : 0,
		///[MEMBER][integer][nId_groups_owner]Groupe possedant l'item
		nId_groups_owner : 0,
		///[MEMBER][integer][nId_Accreditations_Item]Clef étrangère sur le niveau d'accreditation
		nId_Accreditations_Item : 0,
		///[MEMBER][datetime "yyyymmdd"][dtModifie]date de dernière modification
		dtModifie : ""
	};


	//Our super
	this.myItems = {};
	//Our hack
	var oItems = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Items]Method to get the Id_Items
	///[RETURNS]The Id_Items
	this.getId_Items = function(){
		//Return the member
		return oItems.members.nId_Items;
	};
	//hack guy !!!
	this.myItems.getId_Items = this.getId_Items;

	///[METHOD][getId_groups_owner]Method to get the Id_groups_owner
	///[RETURNS]The Id_groups_owner
	this.getId_groups_owner = function(){
		//Return the member
		return oItems.members.nId_groups_owner;
	};
	//hack guy !!!
	this.myItems.getId_groups_owner = this.getId_groups_owner;

	///[METHOD][getId_Accreditations_Item]Method to get the Id_Accreditations_Item
	///[RETURNS]The Id_Accreditations_Item
	this.getId_Accreditations_Item = function(){
		//Return the member
		return oItems.members.nId_Accreditations_Item;
	};
	//hack guy !!!
	this.myItems.getId_Accreditations_Item = this.getId_Accreditations_Item;

	///[METHOD][getModifie]Method to get the Modifie
	///[RETURNS]The Modifie
	this.getModifie = function(){
		//Return the member
		return oItems.members.dtModifie;
	};
	//hack guy !!!
	this.myItems.getModifie = this.getModifie;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Items]Method to set the Id_Items
	///[PARAMETER][number][nValue]Our new value for Id_Items
	///[RETURNS]Boolean true if done 
	this.setId_Items = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oItems.members.nId_Items = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myItems.setId_Items = this.setId_Items;

	///[METHOD][setId_groups_owner]Method to set the Id_groups_owner
	///[PARAMETER][number][nValue]Our new value for Id_groups_owner
	///[RETURNS]Boolean true if done 
	this.setId_groups_owner = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oItems.members.nId_groups_owner = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myItems.setId_groups_owner = this.setId_groups_owner;

	///[METHOD][setId_Accreditations_Item]Method to set the Id_Accreditations_Item
	///[PARAMETER][number][nValue]Our new value for Id_Accreditations_Item
	///[RETURNS]Boolean true if done 
	this.setId_Accreditations_Item = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oItems.members.nId_Accreditations_Item = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myItems.setId_Accreditations_Item = this.setId_Accreditations_Item;

	///[METHOD][setModifie]Method to set the Modifie
	///[PARAMETER][string][dtValue]Our new value for Modifie
	///[RETURNS]Boolean true if done 
	this.setModifie = function(dtValue){
		//security on null guy !!!
		if(dtValue == null)
			return false;
		//security on type guy !!!
		if(typeof dtValue === 'string'){
			oItems.members.dtModifie = dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myItems.setModifie = this.setModifie;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oItems.members, jsonSet, true);
	};
	//hack guy !!!
	this.myItems.loadFromJson = this.loadFromJson;


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
				oItems.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Items_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myItems.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oItems.members);
	};
	//hack guy !!!
	this.myItems.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Items_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myItems.deleteMyself = this.deleteMyself;


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
				oItems.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Items_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Json=" + oItems.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myItems.save = this.save;



};