//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-25 12:16:41
//Filename : Accreditations.js
//Description : Table des accréditations sur les items

///[CLASS][Accreditations]Table des accréditations sur les items
///[AUTHOR]Ludo
function Accreditations(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Accreditations]Identifiant de la table des accrédiations
		nId_Accreditations : 0,
		///[MEMBER][string][sNom]Nom de l'accrédiation
		sNom : "",
		///[MEMBER][integer][nNiveau]Niveau de l'accréditation
		nNiveau : 0
	};


	//Our super
	this.myAccreditations = {};
	//Our hack
	var oAccreditations = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Accreditations]Method to get the Id_Accreditations
	///[RETURNS]The Id_Accreditations
	this.getId_Accreditations = function(){
		//Return the member
		return oAccreditations.members.nId_Accreditations;
	};
	//hack guy !!!
	this.myAccreditations.getId_Accreditations = this.getId_Accreditations;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oAccreditations.members.sNom;
	};
	//hack guy !!!
	this.myAccreditations.getNom = this.getNom;

	///[METHOD][getNiveau]Method to get the Niveau
	///[RETURNS]The Niveau
	this.getNiveau = function(){
		//Return the member
		return oAccreditations.members.nNiveau;
	};
	//hack guy !!!
	this.myAccreditations.getNiveau = this.getNiveau;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Accreditations]Method to set the Id_Accreditations
	///[PARAMETER][number][nValue]Our new value for Id_Accreditations
	///[RETURNS]Boolean true if done 
	this.setId_Accreditations = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oAccreditations.members.nId_Accreditations = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myAccreditations.setId_Accreditations = this.setId_Accreditations;

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
			oAccreditations.members.sNom = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myAccreditations.setNom = this.setNom;

	///[METHOD][setNiveau]Method to set the Niveau
	///[PARAMETER][number][nValue]Our new value for Niveau
	///[RETURNS]Boolean true if done 
	this.setNiveau = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oAccreditations.members.nNiveau = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myAccreditations.setNiveau = this.setNiveau;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oAccreditations.members, ary_, true);
	};
	//hack guy !!!
	this.myAccreditations.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oAccreditations.members, jsonSet, true);
	};
	//hack guy !!!
	this.myAccreditations.loadFromJson = this.loadFromJson;


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
				oAccreditations.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Accreditations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myAccreditations.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oAccreditations.members);
	};
	//hack guy !!!
	this.myAccreditations.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Accreditations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myAccreditations.deleteMyself = this.deleteMyself;


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
				oAccreditations.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Accreditations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oAccreditations.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myAccreditations.save = this.save;



};