//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:32
//Filename : Locations.js
//Description : Lieux du stock

///[CLASS][Locations]Lieux du stock
///[AUTHOR]LUDO
function Locations(){
	//Legacy 
	Items.call(this);
	//our new member data
	var LocationsmemberSet = {	

		// ///[MEMBER][integer][nId_Locations]Clef unique de la table locations
		//nId_Locations : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][string][sNom]Le nom du lieux
		sNom : ""
	};
	//get the legacy
	legacy(this.members, LocationsmemberSet, true);


	//Our super
	this.myLocations = {};
	//Our hack
	var oLocations = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Locations]Method to get the Id_Locations
	///[RETURNS]The Id_Locations
	this.getId_Locations = function(){
		//Return the getter in inheritage
		return oLocations.myItems.getId_Items();
	};
	//hack guy !!!
	this.myLocations.getId_Locations = this.getId_Locations;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oLocations.members.sNom;
	};
	//hack guy !!!
	this.myLocations.getNom = this.getNom;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Locations]Method to set the Id_Locations
	///[PARAMETER][number][nValue]Our new value for Id_Locations
	///[RETURNS]Boolean true if done 
	this.setId_Locations = function(nValue){
		//Return the member
		return oLocations.myItems.setId_Items(nValue);
	};
	//hack guy !!!
	this.myLocations.setId_Locations = this.setId_Locations;

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
			oLocations.members.sNom = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myLocations.setNom = this.setNom;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oLocations.members, ary_, true);
	};
	//hack guy !!!
	this.myLocations.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oLocations.members, jsonSet, true);
	};
	//hack guy !!!
	this.myLocations.loadFromJson = this.loadFromJson;


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
				oLocations.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Locations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLocations.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oLocations.members);
	};
	//hack guy !!!
	this.myLocations.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Locations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLocations.deleteMyself = this.deleteMyself;


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
				oLocations.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Locations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oLocations.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myLocations.save = this.save;



};