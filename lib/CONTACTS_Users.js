//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:49
//Filename : Users.js
//Description : Table des utilisateurs, héritant de celle des contacts

///[CLASS][Users]Table des utilisateurs, héritant de celle des contacts
///[AUTHOR]Ludo
function Users(){
	//our new member data
	var UsersmemberSet = {	

		// ///[MEMBER][integer][nId_Users]Identifiant de la table hérité de la table contact
		//nId_Users : 0 //inherited from => Contacts.Contacts.nId_Contacts,
		///[MEMBER][string][sPseudo]Pseudo de l'utilisateur
		sPseudo : "",
		///[MEMBER][string][jsonId_Accreditations_Exp_Json]Json des différantes accréditations
		jsonId_Accreditations_Exp_Json : ""
	};
	//get the legacy
	legacy(this.members, UsersmemberSet, true);


	//Our super
	this.myUsers = {};
	//Our hack
	var oUsers = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Users]Method to get the Id_Users
	///[RETURNS]The Id_Users
	this.getId_Users = function(){
		//Return the getter in inheritage
		return oUsers.myContacts.getnId_Contacts();
	};
	//hack guy !!!
	this.myUsers.getId_Users = this.getId_Users;

	///[METHOD][getPseudo]Method to get the Pseudo
	///[RETURNS]The Pseudo
	this.getPseudo = function(){
		//Return the member
		return oUsers.members.sPseudo;
	};
	//hack guy !!!
	this.myUsers.getPseudo = this.getPseudo;

	///[METHOD][getId_Accreditations_Exp_Json]Method to get the Id_Accreditations_Exp_Json
	///[RETURNS]The Id_Accreditations_Exp_Json
	this.getId_Accreditations_Exp_Json = function(){
		//Return the member
		return oUsers.members.jsonId_Accreditations_Exp_Json;
	};
	//hack guy !!!
	this.myUsers.getId_Accreditations_Exp_Json = this.getId_Accreditations_Exp_Json;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Users]Method to set the Id_Users
	///[PARAMETER][number][nValue]Our new value for Id_Users
	///[RETURNS]Boolean true if done 
	this.setId_Users = function(nValue){
		//Return the member
		return oUsers.myContacts.setnId_Contacts(nValue);
	};
	//hack guy !!!
	this.myUsers.setId_Users = this.setId_Users;

	///[METHOD][setPseudo]Method to set the Pseudo
	///[PARAMETER][string][sValue]Our new value for Pseudo
	///[RETURNS]Boolean true if done 
	this.setPseudo = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oUsers.members.sPseudo = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myUsers.setPseudo = this.setPseudo;

	///[METHOD][setId_Accreditations_Exp_Json]Method to set the Id_Accreditations_Exp_Json
	///[PARAMETER][string][sValue]Our new value for Id_Accreditations_Exp_Json
	///[RETURNS]Boolean true if done 
	this.setId_Accreditations_Exp_Json = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			oUsers.members.jsonId_Accreditations_Exp_Json = sValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myUsers.setId_Accreditations_Exp_Json = this.setId_Accreditations_Exp_Json;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oUsers.members, jsonSet, true);
	};
	//hack guy !!!
	this.myUsers.loadFromJson = this.loadFromJson;


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
				oUsers.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Users_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myUsers.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oUsers.members);
	};
	//hack guy !!!
	this.myUsers.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Users_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myUsers.deleteMyself = this.deleteMyself;


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
				oUsers.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Users_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oUsers.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myUsers.save = this.save;



};