//Module : Contacts
//Created by : Ludo
//Generated on : 2016-10-24 09:39:49
//Filename : Segments.js
//Description : Table gérant les segments.

///[CLASS][Segments]Table gérant les segments.
///[AUTHOR]Ludo
function Segments(){
	//Legacy 
	Items.call(this);
	//our new member data
	var SegmentsmemberSet = {	

		// ///[MEMBER][integer][nId_Segments]Clef unique de la table hérité de Items
		//nId_Segments : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][integer][nId_Items_Owner]Propriétaire du segment.
		nId_Items_Owner : 0,
		///[MEMBER][string][nId_Items_Json]Liste des items du segment
		nId_Items_Json : "",
		///[MEMBER][string][sParametres]Liste des paramêtres du segments.
		sParametres : "",
		///[MEMBER][string][sNom]Nom du segments
		sNom : ""
	};
	//get the legacy
	legacy(this.members, SegmentsmemberSet, true);


	//Our super
	this.mySegments = {};
	//Our hack
	var oSegments = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Segments]Method to get the Id_Segments
	///[RETURNS]The Id_Segments
	this.getId_Segments = function(){
		//Return the getter in inheritage
		return oSegments.myItems.getId_Items();
	};
	//hack guy !!!
	this.mySegments.getId_Segments = this.getId_Segments;

	///[METHOD][getId_Items_Owner]Method to get the Id_Items_Owner
	///[RETURNS]The Id_Items_Owner
	this.getId_Items_Owner = function(){
		//Return the member
		return oSegments.members.nId_Items_Owner;
	};
	//hack guy !!!
	this.mySegments.getId_Items_Owner = this.getId_Items_Owner;

	///[METHOD][getId_Items_Json]Method to get the Id_Items_Json
	///[RETURNS]The Id_Items_Json
	this.getId_Items_Json = function(){
		//Return the member
		return oSegments.members.nId_Items_Json;
	};
	//hack guy !!!
	this.mySegments.getId_Items_Json = this.getId_Items_Json;

	///[METHOD][getParametres]Method to get the Parametres
	///[RETURNS]The Parametres
	this.getParametres = function(){
		//Return the member
		return oSegments.members.sParametres;
	};
	//hack guy !!!
	this.mySegments.getParametres = this.getParametres;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oSegments.members.sNom;
	};
	//hack guy !!!
	this.mySegments.getNom = this.getNom;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Segments]Method to set the Id_Segments
	///[PARAMETER][number][nValue]Our new value for Id_Segments
	///[RETURNS]Boolean true if done 
	this.setId_Segments = function(nValue){
		//Return the member
		return oSegments.myItems.setnId_Items(nValue);
	};
	//hack guy !!!
	this.mySegments.setId_Segments = this.setId_Segments;

	///[METHOD][setId_Items_Owner]Method to set the Id_Items_Owner
	///[PARAMETER][number][nValue]Our new value for Id_Items_Owner
	///[RETURNS]Boolean true if done 
	this.setId_Items_Owner = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oSegments.members.nId_Items_Owner = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.mySegments.setId_Items_Owner = this.setId_Items_Owner;

	///[METHOD][setId_Items_Json]Method to set the Id_Items_Json
	///[PARAMETER][string][sValue]Our new value for Id_Items_Json
	///[RETURNS]Boolean true if done 
	this.setId_Items_Json = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oSegments.members.nId_Items_Json = sValue.slice(0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.mySegments.setId_Items_Json = this.setId_Items_Json;

	///[METHOD][setParametres]Method to set the Parametres
	///[PARAMETER][string][sValue]Our new value for Parametres
	///[RETURNS]Boolean true if done 
	this.setParametres = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oSegments.members.sParametres = sValue.slice(0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.mySegments.setParametres = this.setParametres;

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
			oSegments.members.sNom = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.mySegments.setNom = this.setNom;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oSegments.members, ary_, true);
	};
	//hack guy !!!
	this.mySegments.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oSegments.members, jsonSet, true);
	};
	//hack guy !!!
	this.mySegments.loadFromJson = this.loadFromJson;


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
				oSegments.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Segments_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.mySegments.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oSegments.members);
	};
	//hack guy !!!
	this.mySegments.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Segments_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.mySegments.deleteMyself = this.deleteMyself;


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
				oSegments.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Segments_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oSegments.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.mySegments.save = this.save;



};