//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-16 12:05:32
//Filename : Organisations.js
//Description : Table des organisations. héritant de celle des contacts

///[CLASS][Organisations]Table des organisations. héritant de celle des contacts
///[AUTHOR]Ludo
function Organisations(){
	//Legacy 
	Contacts.call(this);
	//our new member data
	var OrganisationsmemberSet = {	

		// ///[MEMBER][integer][nId_Organisations]Identifiant hérité de la table Contacts
		//nId_Organisations : 0 //inherited from => Contacts.Contacts.nId_Contacts,
		///[MEMBER][integer][nId_Organisation_Type]Clef étrangère sur la table Organistion_Types. Type de l'organisation
		nId_Organisation_Type : 0,
		///[MEMBER][string][sAcronyme]New Columns Created with Ludo Library
		sAcronyme : ""
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
		//Return the getter in inheritage
		return oOrganisations.myContacts.getId_Contacts();
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

	///[METHOD][getAcronyme]Method to get the Acronyme
	///[RETURNS]The Acronyme
	this.getAcronyme = function(){
		//Return the member
		return oOrganisations.members.sAcronyme;
	};
	//hack guy !!!
	this.myOrganisations.getAcronyme = this.getAcronyme;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Organisations]Method to set the Id_Organisations
	///[PARAMETER][number][nValue]Our new value for Id_Organisations
	///[RETURNS]Boolean true if done 
	this.setId_Organisations = function(nValue){
		//Return the member
		return oOrganisations.myContacts.setnId_Contacts(nValue);
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

	///[METHOD][setAcronyme]Method to set the Acronyme
	///[PARAMETER][string][sValue]Our new value for Acronyme
	///[RETURNS]Boolean true if done 
	this.setAcronyme = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oOrganisations.members.sAcronyme = sValue.slice(0, 16);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myOrganisations.setAcronyme = this.setAcronyme;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oOrganisations.members, ary_, true);
	};
	//hack guy !!!
	this.myOrganisations.loadFromArray = this.loadFromArray;


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