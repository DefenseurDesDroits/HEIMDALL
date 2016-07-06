//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:49
//Filename : Organisations.js
//Description : Table des organisations. héritant de celle des contacts

///[CLASS][Organisations]Table des organisations. héritant de celle des contacts
///[AUTHOR]Ludo
function Organisations(){
	//our new member data
	var OrganisationsmemberSet = {	

		// ///[MEMBER][integer][nId_Organisations]Identifiant hérité de la table Contacts
		//nId_Organisations : 0 //inherited from => Contacts.Contacts,
		///[MEMBER][integer][nId_Organisation_Type]Clef étrangère sur la table Organistion_Types. Type de l'organisation
		nId_Organisation_Type : 0,
		///[MEMBER][string][sNom]Nom de l'organisation
		sNom : ""
	};
	//get the legacy
	legacy(this.members, OrganisationsmemberSet, true);


	//Our super
	this.myOrganisations = {};
	//Our hack
	var oOrganisations = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Organisations]Method to get the Id_Organisations
	///[RETURNS]The Id_Organisations
	this.getId_Organisations = function(){
		//[ERROR]The column Contacts.Organisations.nId_Organisations has an inheritance : Contacts.Contacts WITHOUT any linked row !!!
		return oOrganisations.members.nId_Organisations;
	};
	//hack guy !!!
	this.myOrganisations.getId_Organisations = this.getId_Organisations;

	///[METHOD][getId_Organisation_Type]Method to get the Id_Organisation_Type
	///[RETURNS]The Id_Organisation_Type
	this.getId_Organisation_Type = function(){
		//Return the member
		return oOrganisations.members.nId_Organisation_Type;
	};
	//hack guy !!!
	this.myOrganisations.getId_Organisation_Type = this.getId_Organisation_Type;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oOrganisations.members.sNom;
	};
	//hack guy !!!
	this.myOrganisations.getNom = this.getNom;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Organisations]Method to set the Id_Organisations
	///[PARAMETER][number][nValue]Our new value for Id_Organisations
	///[RETURNS]Boolean true if done 
	this.setId_Organisations = function(nValue){
		//[ERROR]Return the member
		return false;
	};
	//hack guy !!!
	this.myOrganisations.setId_Organisations = this.setId_Organisations;

	///[METHOD][setId_Organisation_Type]Method to set the Id_Organisation_Type
	///[PARAMETER][number][nValue]Our new value for Id_Organisation_Type
	///[RETURNS]Boolean true if done 
	this.setId_Organisation_Type = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oOrganisations.members.nId_Organisation_Type = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myOrganisations.setId_Organisation_Type = this.setId_Organisation_Type;

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
			oOrganisations.members.sNom = sValue.slice(0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myOrganisations.setNom = this.setNom;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oOrganisations.members, jsonSet, true);
	};
	//hack guy !!!
	this.myOrganisations.loadFromJson = this.loadFromJson;


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
				oOrganisations.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Organisations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myOrganisations.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oOrganisations.members);
	};
	//hack guy !!!
	this.myOrganisations.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Organisations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myOrganisations.deleteMyself = this.deleteMyself;


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
				oOrganisations.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Organisations_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oOrganisations.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myOrganisations.save = this.save;



};