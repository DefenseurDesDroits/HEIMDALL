//Module : Contacts
//Created by : Ludo
//Generated on : 2016-07-06 08:20:49
//Filename : Noeuds.js
//Description : Table pour gérer les noeuds

///[CLASS][Noeuds]Table pour gérer les noeuds
///[AUTHOR]Ludo
function Noeuds(){
	//our new member data
	var NoeudsmemberSet = {	

		// ///[MEMBER][integer][nId_Noeuds]Identité de la table
		//nId_Noeuds : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][integer][nId_Noeuds_Parent]identité de la table sur le noeuds parent
		nId_Noeuds_Parent : 0
	};
	//get the legacy
	legacy(this.members, NoeudsmemberSet, true);


	//Our super
	this.myNoeuds = {};
	//Our hack
	var oNoeuds = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Noeuds]Method to get the Id_Noeuds
	///[RETURNS]The Id_Noeuds
	this.getId_Noeuds = function(){
		//Return the getter in inheritage
		return oNoeuds.myItems.getnId_Items();
	};
	//hack guy !!!
	this.myNoeuds.getId_Noeuds = this.getId_Noeuds;

	///[METHOD][getId_Noeuds_Parent]Method to get the Id_Noeuds_Parent
	///[RETURNS]The Id_Noeuds_Parent
	this.getId_Noeuds_Parent = function(){
		//Return the member
		return oNoeuds.members.nId_Noeuds_Parent;
	};
	//hack guy !!!
	this.myNoeuds.getId_Noeuds_Parent = this.getId_Noeuds_Parent;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Noeuds]Method to set the Id_Noeuds
	///[PARAMETER][number][nValue]Our new value for Id_Noeuds
	///[RETURNS]Boolean true if done 
	this.setId_Noeuds = function(nValue){
		//Return the member
		return oNoeuds.myItems.setnId_Items(nValue);
	};
	//hack guy !!!
	this.myNoeuds.setId_Noeuds = this.setId_Noeuds;

	///[METHOD][setId_Noeuds_Parent]Method to set the Id_Noeuds_Parent
	///[PARAMETER][number][nValue]Our new value for Id_Noeuds_Parent
	///[RETURNS]Boolean true if done 
	this.setId_Noeuds_Parent = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oNoeuds.members.nId_Noeuds_Parent = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNoeuds.setId_Noeuds_Parent = this.setId_Noeuds_Parent;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oNoeuds.members, jsonSet, true);
	};
	//hack guy !!!
	this.myNoeuds.loadFromJson = this.loadFromJson;


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
				oNoeuds.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Noeuds_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNoeuds.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oNoeuds.members);
	};
	//hack guy !!!
	this.myNoeuds.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Noeuds_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNoeuds.deleteMyself = this.deleteMyself;


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
				oNoeuds.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Noeuds_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oNoeuds.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNoeuds.save = this.save;



};