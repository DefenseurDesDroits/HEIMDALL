//Module : Publications
//Created by : LUDO
//Generated on : 2016-12-09 10:49:46
//Filename : Publications.js
//Description : Tables des publications disponibles dans la base de données

///[CLASS][Publications]Tables des publications disponibles dans la base de données
///[AUTHOR]LUDO
function Publications(){
	//Legacy 
	Noeuds.call(this);
	//our new member data
	var PublicationsmemberSet = {	

		// ///[MEMBER][integer][nId_Publications]Clef unique de la table publication
		//nId_Publications : 0 //inherited from => Contacts.Noeuds.nId_Noeuds,
		///[MEMBER][string][sNom]Nom de la publication
		sNom : "",
		///[MEMBER][integer][nId_Domaines]Domaine de la publication
		nId_Domaines : 0,
		///[MEMBER][datetime "yyyymmdd"][dtCreation]Date de création de la publication
		dtCreation : "",
		///[MEMBER][datetime "yyyymmdd"][dtMaj]Date de mise à jour de la publication
		dtMaj : "",
		///[MEMBER][boolean][bDematerialisee]La publication est-elle dématerialisée
		bDematerialisee : false
	};
	//get the legacy
	legacy(this.members, PublicationsmemberSet, true);


	//Our super
	this.myPublications = {};
	//Our hack
	var oPublications = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Publications]Method to get the Id_Publications
	///[RETURNS]The Id_Publications
	this.getId_Publications = function(){
		//Return the getter in inheritage
		return oPublications.myNoeuds.getId_Noeuds();
	};
	//hack guy !!!
	this.myPublications.getId_Publications = this.getId_Publications;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oPublications.members.sNom;
	};
	//hack guy !!!
	this.myPublications.getNom = this.getNom;

	///[METHOD][getId_Domaines]Method to get the Id_Domaines
	///[RETURNS]The Id_Domaines
	this.getId_Domaines = function(){
		//Return the member
		return oPublications.members.nId_Domaines;
	};
	//hack guy !!!
	this.myPublications.getId_Domaines = this.getId_Domaines;

	///[METHOD][getCreation]Method to get the Creation
	///[RETURNS]The Creation
	this.getCreation = function(){
		//Return the member
		return oPublications.members.dtCreation;
	};
	//hack guy !!!
	this.myPublications.getCreation = this.getCreation;

	///[METHOD][getMaj]Method to get the Maj
	///[RETURNS]The Maj
	this.getMaj = function(){
		//Return the member
		return oPublications.members.dtMaj;
	};
	//hack guy !!!
	this.myPublications.getMaj = this.getMaj;

	///[METHOD][getDematerialisee]Method to get the Dematerialisee
	///[RETURNS]The Dematerialisee
	this.getDematerialisee = function(){
		//Return the member
		return oPublications.members.bDematerialisee;
	};
	//hack guy !!!
	this.myPublications.getDematerialisee = this.getDematerialisee;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Publications]Method to set the Id_Publications
	///[PARAMETER][number][nValue]Our new value for Id_Publications
	///[RETURNS]Boolean true if done 
	this.setId_Publications = function(nValue){
		//Return the member
		return oPublications.myNoeuds.setnId_Noeuds(nValue);
	};
	//hack guy !!!
	this.myPublications.setId_Publications = this.setId_Publications;

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
			oPublications.members.sNom = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPublications.setNom = this.setNom;

	///[METHOD][setId_Domaines]Method to set the Id_Domaines
	///[PARAMETER][number][nValue]Our new value for Id_Domaines
	///[RETURNS]Boolean true if done 
	this.setId_Domaines = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oPublications.members.nId_Domaines = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPublications.setId_Domaines = this.setId_Domaines;

	///[METHOD][setCreation]Method to set the Creation
	///[PARAMETER][string][dtValue]Our new value for Creation
	///[RETURNS]Boolean true if done 
	this.setCreation = function(dtValue){
		//security on null guy !!!
		if(dtValue == null)
			return false;
		//security on type guy !!!
		if(typeof dtValue === 'string'){
			oPublications.members.dtCreation = dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPublications.setCreation = this.setCreation;

	///[METHOD][setMaj]Method to set the Maj
	///[PARAMETER][string][dtValue]Our new value for Maj
	///[RETURNS]Boolean true if done 
	this.setMaj = function(dtValue){
		//security on null guy !!!
		if(dtValue == null)
			return false;
		//security on type guy !!!
		if(typeof dtValue === 'string'){
			oPublications.members.dtMaj = dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPublications.setMaj = this.setMaj;

	///[METHOD][setDematerialisee]Method to set the Dematerialisee
	///[PARAMETER][boolean][bValue]Our new value for Dematerialisee
	///[RETURNS]Boolean true if done 
	this.setDematerialisee = function(bValue){
		//security on null guy !!!
		if(bValue == null)
			return false;
		//security on type guy !!!
		if(typeof bValue === 'boolean'){
			oPublications.members.bDematerialisee = bValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myPublications.setDematerialisee = this.setDematerialisee;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oPublications.members, ary_, true);
	};
	//hack guy !!!
	this.myPublications.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oPublications.members, jsonSet, true);
	};
	//hack guy !!!
	this.myPublications.loadFromJson = this.loadFromJson;


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
				oPublications.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Publications_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myPublications.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oPublications.members);
	};
	//hack guy !!!
	this.myPublications.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Publications_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myPublications.deleteMyself = this.deleteMyself;


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
				oPublications.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Publications_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oPublications.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myPublications.save = this.save;



};