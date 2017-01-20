//Module : Publications
//Created by : LUDO
//Generated on : 2016-12-09 10:49:46
//Filename : Domaines.js
//Description : Table gérant les domaines des publications

///[CLASS][Domaines]Table gérant les domaines des publications
///[AUTHOR]LUDO
function Domaines(){
	//Legacy 
	Noeuds.call(this);
	//our new member data
	var DomainesmemberSet = {	

		// ///[MEMBER][integer][nId_Domaines]Identifiant de la table
		//nId_Domaines : 0 //inherited from => Contacts.Noeuds.nId_Noeuds,
		///[MEMBER][string][sNom]Nom du domaine
		sNom : "",
		///[MEMBER][string][sDescription]Description du domaine de publication
		sDescription : ""
	};
	//get the legacy
	legacy(this.members, DomainesmemberSet, true);


	//Our super
	this.myDomaines = {};
	//Our hack
	var oDomaines = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Domaines]Method to get the Id_Domaines
	///[RETURNS]The Id_Domaines
	this.getId_Domaines = function(){
		//Return the getter in inheritage
		return oDomaines.myNoeuds.getId_Noeuds();
	};
	//hack guy !!!
	this.myDomaines.getId_Domaines = this.getId_Domaines;

	///[METHOD][getNom]Method to get the Nom
	///[RETURNS]The Nom
	this.getNom = function(){
		//Return the member
		return oDomaines.members.sNom;
	};
	//hack guy !!!
	this.myDomaines.getNom = this.getNom;

	///[METHOD][getDescription]Method to get the Description
	///[RETURNS]The Description
	this.getDescription = function(){
		//Return the member
		return oDomaines.members.sDescription;
	};
	//hack guy !!!
	this.myDomaines.getDescription = this.getDescription;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Domaines]Method to set the Id_Domaines
	///[PARAMETER][number][nValue]Our new value for Id_Domaines
	///[RETURNS]Boolean true if done 
	this.setId_Domaines = function(nValue){
		//Return the member
		return oDomaines.myNoeuds.setnId_Noeuds(nValue);
	};
	//hack guy !!!
	this.myDomaines.setId_Domaines = this.setId_Domaines;

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
			oDomaines.members.sNom = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myDomaines.setNom = this.setNom;

	///[METHOD][setDescription]Method to set the Description
	///[PARAMETER][string][sValue]Our new value for Description
	///[RETURNS]Boolean true if done 
	this.setDescription = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oDomaines.members.sDescription = sValue.slice(0, 512);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myDomaines.setDescription = this.setDescription;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oDomaines.members, ary_, true);
	};
	//hack guy !!!
	this.myDomaines.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oDomaines.members, jsonSet, true);
	};
	//hack guy !!!
	this.myDomaines.loadFromJson = this.loadFromJson;


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
				oDomaines.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Domaines_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myDomaines.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oDomaines.members);
	};
	//hack guy !!!
	this.myDomaines.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Domaines_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myDomaines.deleteMyself = this.deleteMyself;


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
				oDomaines.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Domaines_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oDomaines.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myDomaines.save = this.save;



};