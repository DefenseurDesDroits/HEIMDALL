//Module : Contacts
//Created by : Ludo
//Generated on : 2016-09-07 11:51:43
//Filename : Groups.js
//Description : Table des groups héritant de la table Contacts

///[CLASS][Groups]Table des groups héritant de la table Contacts
///[AUTHOR]Ludo
function Groups(){
	//Legacy 
	Contacts.call(this);
	//our new member data
	var GroupsmemberSet = {	

		// ///[MEMBER][integer][nId_Groups]Identifiant de la table Groups. Clef étrangère sur la table contact
		//nId_Groups : 0 //inherited from => Contacts.Contacts.nId_Contacts,
		///[MEMBER][string][jsonUGrp_Json]Json, liste des utilisateurs
		jsonUGrp_Json : "",
		///[MEMBER][boolean][bFichiers]Ce groupe héberge t'il des fichiers ?
		bFichiers : false,
		///[MEMBER][string][sNomGroupe]Nom unique du group
		sNomGroupe : ""
	};
	//get the legacy
	legacy(this.members, GroupsmemberSet, true);


	//Our super
	this.myGroups = {};
	//Our hack
	var oGroups = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Groups]Method to get the Id_Groups
	///[RETURNS]The Id_Groups
	this.getId_Groups = function(){
		//Return the getter in inheritage
		return oGroups.myContacts.getId_Contacts();
	};
	//hack guy !!!
	this.myGroups.getId_Groups = this.getId_Groups;

	///[METHOD][getUGrp_Json]Method to get the UGrp_Json
	///[RETURNS]The UGrp_Json
	this.getUGrp_Json = function(){
		//Return the member
		return oGroups.members.jsonUGrp_Json;
	};
	//hack guy !!!
	this.myGroups.getUGrp_Json = this.getUGrp_Json;

	///[METHOD][getFichiers]Method to get the Fichiers
	///[RETURNS]The Fichiers
	this.getFichiers = function(){
		//Return the member
		return oGroups.members.bFichiers;
	};
	//hack guy !!!
	this.myGroups.getFichiers = this.getFichiers;

	///[METHOD][getNomGroupe]Method to get the NomGroupe
	///[RETURNS]The NomGroupe
	this.getNomGroupe = function(){
		//Return the member
		return oGroups.members.sNomGroupe;
	};
	//hack guy !!!
	this.myGroups.getNomGroupe = this.getNomGroupe;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Groups]Method to set the Id_Groups
	///[PARAMETER][number][nValue]Our new value for Id_Groups
	///[RETURNS]Boolean true if done 
	this.setId_Groups = function(nValue){
		//Return the member
		return oGroups.myContacts.setnId_Contacts(nValue);
	};
	//hack guy !!!
	this.myGroups.setId_Groups = this.setId_Groups;

	///[METHOD][setUGrp_Json]Method to set the UGrp_Json
	///[PARAMETER][string][sValue]Our new value for UGrp_Json
	///[RETURNS]Boolean true if done 
	this.setUGrp_Json = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			oGroups.members.jsonUGrp_Json = sValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myGroups.setUGrp_Json = this.setUGrp_Json;

	///[METHOD][setFichiers]Method to set the Fichiers
	///[PARAMETER][boolean][bValue]Our new value for Fichiers
	///[RETURNS]Boolean true if done 
	this.setFichiers = function(bValue){
		//security on null guy !!!
		if(bValue == null)
			return false;
		//security on type guy !!!
		if(typeof bValue === 'boolean'){
			oGroups.members.bFichiers = bValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myGroups.setFichiers = this.setFichiers;

	///[METHOD][setNomGroupe]Method to set the NomGroupe
	///[PARAMETER][string][sValue]Our new value for NomGroupe
	///[RETURNS]Boolean true if done 
	this.setNomGroupe = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oGroups.members.sNomGroupe = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myGroups.setNomGroupe = this.setNomGroupe;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oGroups.members, ary_, true);
	};
	//hack guy !!!
	this.myGroups.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oGroups.members, jsonSet, true);
	};
	//hack guy !!!
	this.myGroups.loadFromJson = this.loadFromJson;


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
				oGroups.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Groups_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myGroups.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oGroups.members);
	};
	//hack guy !!!
	this.myGroups.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Groups_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myGroups.deleteMyself = this.deleteMyself;


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
				oGroups.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Groups_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oGroups.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myGroups.save = this.save;



};