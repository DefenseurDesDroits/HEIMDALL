//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:49
//Filename : Notifications.js
//Description : Tables des notifications utilisateurs

///[CLASS][Notifications]Tables des notifications utilisateurs
///[AUTHOR]Ludo
function Notifications(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Notifications]Identifiant de la table
		nId_Notifications : 0,
		///[MEMBER][string][sMsg]Message de la notification
		sMsg : "",
		///[MEMBER][integer][nId_Auteur]Clef étrangère sur la table User. L'auteur de la notification.
		nId_Auteur : 0,
		///[MEMBER][integer][nId_Destinataire]Clef étrangère sur la table User. Le destiantaire de la notification.
		nId_Destinataire : 0
	};


	//Our super
	this.myNotifications = {};
	//Our hack
	var oNotifications = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Notifications]Method to get the Id_Notifications
	///[RETURNS]The Id_Notifications
	this.getId_Notifications = function(){
		//Return the member
		return oNotifications.members.nId_Notifications;
	};
	//hack guy !!!
	this.myNotifications.getId_Notifications = this.getId_Notifications;

	///[METHOD][getMsg]Method to get the Msg
	///[RETURNS]The Msg
	this.getMsg = function(){
		//Return the member
		return oNotifications.members.sMsg;
	};
	//hack guy !!!
	this.myNotifications.getMsg = this.getMsg;

	///[METHOD][getId_Auteur]Method to get the Id_Auteur
	///[RETURNS]The Id_Auteur
	this.getId_Auteur = function(){
		//Return the member
		return oNotifications.members.nId_Auteur;
	};
	//hack guy !!!
	this.myNotifications.getId_Auteur = this.getId_Auteur;

	///[METHOD][getId_Destinataire]Method to get the Id_Destinataire
	///[RETURNS]The Id_Destinataire
	this.getId_Destinataire = function(){
		//Return the member
		return oNotifications.members.nId_Destinataire;
	};
	//hack guy !!!
	this.myNotifications.getId_Destinataire = this.getId_Destinataire;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Notifications]Method to set the Id_Notifications
	///[PARAMETER][number][nValue]Our new value for Id_Notifications
	///[RETURNS]Boolean true if done 
	this.setId_Notifications = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oNotifications.members.nId_Notifications = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotifications.setId_Notifications = this.setId_Notifications;

	///[METHOD][setMsg]Method to set the Msg
	///[PARAMETER][string][sValue]Our new value for Msg
	///[RETURNS]Boolean true if done 
	this.setMsg = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oNotifications.members.sMsg = sValue.slice(0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotifications.setMsg = this.setMsg;

	///[METHOD][setId_Auteur]Method to set the Id_Auteur
	///[PARAMETER][number][nValue]Our new value for Id_Auteur
	///[RETURNS]Boolean true if done 
	this.setId_Auteur = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oNotifications.members.nId_Auteur = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotifications.setId_Auteur = this.setId_Auteur;

	///[METHOD][setId_Destinataire]Method to set the Id_Destinataire
	///[PARAMETER][number][nValue]Our new value for Id_Destinataire
	///[RETURNS]Boolean true if done 
	this.setId_Destinataire = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oNotifications.members.nId_Destinataire = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotifications.setId_Destinataire = this.setId_Destinataire;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oNotifications.members, jsonSet, true);
	};
	//hack guy !!!
	this.myNotifications.loadFromJson = this.loadFromJson;


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
				oNotifications.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Notifications_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNotifications.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oNotifications.members);
	};
	//hack guy !!!
	this.myNotifications.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Notifications_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNotifications.deleteMyself = this.deleteMyself;


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
				oNotifications.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Notifications_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oNotifications.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNotifications.save = this.save;



};