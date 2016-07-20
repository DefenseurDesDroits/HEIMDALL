//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-20 04:38:54
//Filename : Contact_Infos.js
//Description : Table des informations liées au contact

///[CLASS][Contact_Infos]Table des informations liées au contact
///[AUTHOR]Ludo
function Contact_Infos(){
	//Legacy 
	Items.call(this);
	//our new member data
	var Contact_InfosmemberSet = {	

		// ///[MEMBER][integer][nId_Contact_Infos]Identifiant sur la table contact
		//nId_Contact_Infos : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][integer][nId_Contacts]Clef étrangère sur la contact
		nId_Contacts : 0,
		///[MEMBER][string][sFonction]Fonction du contact
		sFonction : "",
		///[MEMBER][integer][nId_Langues]Clef étrangère sur la table langue. Langue du contact pour cette fonction.
		nId_Langues : 0
	};
	//get the legacy
	legacy(this.members, Contact_InfosmemberSet, true);


	//Our super
	this.myContact_Infos = {};
	//Our hack
	var oContact_Infos = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Contact_Infos]Method to get the Id_Contact_Infos
	///[RETURNS]The Id_Contact_Infos
	this.getId_Contact_Infos = function(){
		//Return the getter in inheritage
		return oContact_Infos.myItems.getnId_Items();
	};
	//hack guy !!!
	this.myContact_Infos.getId_Contact_Infos = this.getId_Contact_Infos;

	///[METHOD][getId_Contacts]Method to get the Id_Contacts
	///[RETURNS]The Id_Contacts
	this.getId_Contacts = function(){
		//Return the member
		return oContact_Infos.members.nId_Contacts;
	};
	//hack guy !!!
	this.myContact_Infos.getId_Contacts = this.getId_Contacts;

	///[METHOD][getFonction]Method to get the Fonction
	///[RETURNS]The Fonction
	this.getFonction = function(){
		//Return the member
		return oContact_Infos.members.sFonction;
	};
	//hack guy !!!
	this.myContact_Infos.getFonction = this.getFonction;

	///[METHOD][getId_Langues]Method to get the Id_Langues
	///[RETURNS]The Id_Langues
	this.getId_Langues = function(){
		//Return the member
		return oContact_Infos.members.nId_Langues;
	};
	//hack guy !!!
	this.myContact_Infos.getId_Langues = this.getId_Langues;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Contact_Infos]Method to set the Id_Contact_Infos
	///[PARAMETER][number][nValue]Our new value for Id_Contact_Infos
	///[RETURNS]Boolean true if done 
	this.setId_Contact_Infos = function(nValue){
		//Return the member
		return oContact_Infos.myItems.setnId_Items(nValue);
	};
	//hack guy !!!
	this.myContact_Infos.setId_Contact_Infos = this.setId_Contact_Infos;

	///[METHOD][setId_Contacts]Method to set the Id_Contacts
	///[PARAMETER][number][nValue]Our new value for Id_Contacts
	///[RETURNS]Boolean true if done 
	this.setId_Contacts = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oContact_Infos.members.nId_Contacts = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContact_Infos.setId_Contacts = this.setId_Contacts;

	///[METHOD][setFonction]Method to set the Fonction
	///[PARAMETER][string][sValue]Our new value for Fonction
	///[RETURNS]Boolean true if done 
	this.setFonction = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oContact_Infos.members.sFonction = sValue.slice(0, 128);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContact_Infos.setFonction = this.setFonction;

	///[METHOD][setId_Langues]Method to set the Id_Langues
	///[PARAMETER][number][nValue]Our new value for Id_Langues
	///[RETURNS]Boolean true if done 
	this.setId_Langues = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oContact_Infos.members.nId_Langues = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myContact_Infos.setId_Langues = this.setId_Langues;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oContact_Infos.members, jsonSet, true);
	};
	//hack guy !!!
	this.myContact_Infos.loadFromJson = this.loadFromJson;


	///[METHOD][loadFromConnection]Method to load from a connection
	///[PARAMETER][string][session]Our string with Json encoding
	///[PARAMETER][string][url]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromConnection = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oContact_Infos.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Contact_Infos_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContact_Infos.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oContact_Infos.members);
	};
	//hack guy !!!
	this.myContact_Infos.exportToJson = this.exportToJson;


	///[METHOD][deleteMyself]Method to delete the record in the DTB
	///[PARAMETER][string][session]Our string with Json encoding
	///[PARAMETER][string][url]Our string with Json encoding
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
		oReq.open("POST", url + "/php/Contact_Infos_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContact_Infos.deleteMyself = this.deleteMyself;


	///[METHOD][save]Method to save with a connection
	///[PARAMETER][string][session]Our string with Json encoding
	///[PARAMETER][string][url]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.save = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oContact_Infos.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Contact_Infos_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oContact_Infos.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myContact_Infos.save = this.save;



};