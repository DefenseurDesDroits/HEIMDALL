//Module : Publications
//Created by : LUDO
//Generated on : 2016-11-29 10:25:39
//Filename : Fichiers.js
//Description : Table des fichiers physiques sur le serveur

///[CLASS][Fichiers]Table des fichiers physiques sur le serveur
///[AUTHOR]LUDO
function Fichiers(){
	//our member data
	this.members = {	

		///[MEMBER][integer][nId_Fichiers]Clef primaire des fichiers
		nId_Fichiers : 0,
		///[MEMBER][integer][nId_Publications]Clef étrangère sur les publications
		nId_Publications : 0,
		///[MEMBER][string][sPath]Chemin du fichier sur le serveur
		sPath : "",
		///[MEMBER][integer][nFilesize]Taille du fichier sur le serveur
		nFilesize : 0,
		///[MEMBER][string][sChecksum]Checksum du fichier
		sChecksum : "",
		///[MEMBER][string][sVersion]Version du fichier
		sVersion : ""
	};


	//Our super
	this.myFichiers = {};
	//Our hack
	var oFichiers = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Fichiers]Method to get the Id_Fichiers
	///[RETURNS]The Id_Fichiers
	this.getId_Fichiers = function(){
		//Return the member
		return oFichiers.members.nId_Fichiers;
	};
	//hack guy !!!
	this.myFichiers.getId_Fichiers = this.getId_Fichiers;

	///[METHOD][getId_Publications]Method to get the Id_Publications
	///[RETURNS]The Id_Publications
	this.getId_Publications = function(){
		//Return the member
		return oFichiers.members.nId_Publications;
	};
	//hack guy !!!
	this.myFichiers.getId_Publications = this.getId_Publications;

	///[METHOD][getPath]Method to get the Path
	///[RETURNS]The Path
	this.getPath = function(){
		//Return the member
		return oFichiers.members.sPath;
	};
	//hack guy !!!
	this.myFichiers.getPath = this.getPath;

	///[METHOD][getFilesize]Method to get the Filesize
	///[RETURNS]The Filesize
	this.getFilesize = function(){
		//Return the member
		return oFichiers.members.nFilesize;
	};
	//hack guy !!!
	this.myFichiers.getFilesize = this.getFilesize;

	///[METHOD][getChecksum]Method to get the Checksum
	///[RETURNS]The Checksum
	this.getChecksum = function(){
		//Return the member
		return oFichiers.members.sChecksum;
	};
	//hack guy !!!
	this.myFichiers.getChecksum = this.getChecksum;

	///[METHOD][getVersion]Method to get the Version
	///[RETURNS]The Version
	this.getVersion = function(){
		//Return the member
		return oFichiers.members.sVersion;
	};
	//hack guy !!!
	this.myFichiers.getVersion = this.getVersion;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Fichiers]Method to set the Id_Fichiers
	///[PARAMETER][number][nValue]Our new value for Id_Fichiers
	///[RETURNS]Boolean true if done 
	this.setId_Fichiers = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oFichiers.members.nId_Fichiers = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myFichiers.setId_Fichiers = this.setId_Fichiers;

	///[METHOD][setId_Publications]Method to set the Id_Publications
	///[PARAMETER][number][nValue]Our new value for Id_Publications
	///[RETURNS]Boolean true if done 
	this.setId_Publications = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oFichiers.members.nId_Publications = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myFichiers.setId_Publications = this.setId_Publications;

	///[METHOD][setPath]Method to set the Path
	///[PARAMETER][string][sValue]Our new value for Path
	///[RETURNS]Boolean true if done 
	this.setPath = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oFichiers.members.sPath = sValue.slice(0, 512);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myFichiers.setPath = this.setPath;

	///[METHOD][setFilesize]Method to set the Filesize
	///[PARAMETER][number][nValue]Our new value for Filesize
	///[RETURNS]Boolean true if done 
	this.setFilesize = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oFichiers.members.nFilesize = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myFichiers.setFilesize = this.setFilesize;

	///[METHOD][setChecksum]Method to set the Checksum
	///[PARAMETER][string][sValue]Our new value for Checksum
	///[RETURNS]Boolean true if done 
	this.setChecksum = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oFichiers.members.sChecksum = sValue.slice(0, 1024);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myFichiers.setChecksum = this.setChecksum;

	///[METHOD][setVersion]Method to set the Version
	///[PARAMETER][string][sValue]Our new value for Version
	///[RETURNS]Boolean true if done 
	this.setVersion = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oFichiers.members.sVersion = sValue.slice(0, 32);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myFichiers.setVersion = this.setVersion;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oFichiers.members, ary_, true);
	};
	//hack guy !!!
	this.myFichiers.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oFichiers.members, jsonSet, true);
	};
	//hack guy !!!
	this.myFichiers.loadFromJson = this.loadFromJson;


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
				oFichiers.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Fichiers_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myFichiers.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oFichiers.members);
	};
	//hack guy !!!
	this.myFichiers.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Fichiers_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myFichiers.deleteMyself = this.deleteMyself;


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
				oFichiers.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Fichiers_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oFichiers.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myFichiers.save = this.save;



};