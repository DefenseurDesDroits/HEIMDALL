//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:32
//Filename : Mouvements.js
//Description : La table qui note les mouvements

///[CLASS][Mouvements]La table qui note les mouvements
///[AUTHOR]LUDO
function Mouvements(){
	//Legacy 
	Items.call(this);
	//our new member data
	var MouvementsmemberSet = {	

		// ///[MEMBER][integer][nId_Mouvements]Clef de la table
		//nId_Mouvements : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][datetime "yyyymmdd"][dtEffectif]Hour of effective time
		dtEffectif : "",
		// ///[MEMBER][integer][nId_Stocks]Le stock du mouvement
		//nId_Stocks : 0 //inherited from => Stocks.Stocks.nId_Stocks,
		///[MEMBER][integer][nQuantite]La quantite du mouvement
		nQuantite : 0,
		///[MEMBER][string][sMotif]Motif du mouvement
		sMotif : "",
		///[MEMBER][string][sClef_Operation]Clef de l'operation
		sClef_Operation : "",
		// ///[MEMBER][integer][nId_Contacts]Responsable du mouvement
		//nId_Contacts : 0 //inherited from => Contacts.Contacts.nId_Contacts,
	};
	//get the legacy
	legacy(this.members, MouvementsmemberSet, true);


	//Our super
	this.myMouvements = {};
	//Our hack
	var oMouvements = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Mouvements]Method to get the Id_Mouvements
	///[RETURNS]The Id_Mouvements
	this.getId_Mouvements = function(){
		//Return the getter in inheritage
		return oMouvements.myItems.getId_Items();
	};
	//hack guy !!!
	this.myMouvements.getId_Mouvements = this.getId_Mouvements;

	///[METHOD][getEffectif]Method to get the Effectif
	///[RETURNS]The Effectif
	this.getEffectif = function(){
		//Return the member
		return oMouvements.members.dtEffectif;
	};
	//hack guy !!!
	this.myMouvements.getEffectif = this.getEffectif;

	///[METHOD][getId_Stocks]Method to get the Id_Stocks
	///[RETURNS]The Id_Stocks
	this.getId_Stocks = function(){
		//Return the getter in inheritage
		return oMouvements.myStocks.getId_Stocks();
	};
	//hack guy !!!
	this.myMouvements.getId_Stocks = this.getId_Stocks;

	///[METHOD][getQuantite]Method to get the Quantite
	///[RETURNS]The Quantite
	this.getQuantite = function(){
		//Return the member
		return oMouvements.members.nQuantite;
	};
	//hack guy !!!
	this.myMouvements.getQuantite = this.getQuantite;

	///[METHOD][getMotif]Method to get the Motif
	///[RETURNS]The Motif
	this.getMotif = function(){
		//Return the member
		return oMouvements.members.sMotif;
	};
	//hack guy !!!
	this.myMouvements.getMotif = this.getMotif;

	///[METHOD][getClef_Operation]Method to get the Clef_Operation
	///[RETURNS]The Clef_Operation
	this.getClef_Operation = function(){
		//Return the member
		return oMouvements.members.sClef_Operation;
	};
	//hack guy !!!
	this.myMouvements.getClef_Operation = this.getClef_Operation;

	///[METHOD][getId_Contacts]Method to get the Id_Contacts
	///[RETURNS]The Id_Contacts
	this.getId_Contacts = function(){
		//Return the getter in inheritage
		return oMouvements.myContacts.getId_Contacts();
	};
	//hack guy !!!
	this.myMouvements.getId_Contacts = this.getId_Contacts;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Mouvements]Method to set the Id_Mouvements
	///[PARAMETER][number][nValue]Our new value for Id_Mouvements
	///[RETURNS]Boolean true if done 
	this.setId_Mouvements = function(nValue){
		//Return the member
		return oMouvements.myItems.setId_Items(nValue);
	};
	//hack guy !!!
	this.myMouvements.setId_Mouvements = this.setId_Mouvements;

	///[METHOD][setEffectif]Method to set the Effectif
	///[PARAMETER][string][dtValue]Our new value for Effectif
	///[RETURNS]Boolean true if done 
	this.setEffectif = function(dtValue){
		//security on null guy !!!
		if(dtValue == null)
			return false;
		//security on type guy !!!
		if(typeof dtValue === 'string'){
			oMouvements.members.dtEffectif = dtValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myMouvements.setEffectif = this.setEffectif;

	///[METHOD][setId_Stocks]Method to set the Id_Stocks
	///[PARAMETER][number][nValue]Our new value for Id_Stocks
	///[RETURNS]Boolean true if done 
	this.setId_Stocks = function(nValue){
		//Return the member
		return oMouvements.myStocks.setnId_Stocks(nValue);
	};
	//hack guy !!!
	this.myMouvements.setId_Stocks = this.setId_Stocks;

	///[METHOD][setQuantite]Method to set the Quantite
	///[PARAMETER][number][nValue]Our new value for Quantite
	///[RETURNS]Boolean true if done 
	this.setQuantite = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oMouvements.members.nQuantite = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myMouvements.setQuantite = this.setQuantite;

	///[METHOD][setMotif]Method to set the Motif
	///[PARAMETER][string][sValue]Our new value for Motif
	///[RETURNS]Boolean true if done 
	this.setMotif = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oMouvements.members.sMotif = sValue.slice(0, 256);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myMouvements.setMotif = this.setMotif;

	///[METHOD][setClef_Operation]Method to set the Clef_Operation
	///[PARAMETER][string][sValue]Our new value for Clef_Operation
	///[RETURNS]Boolean true if done 
	this.setClef_Operation = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oMouvements.members.sClef_Operation = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myMouvements.setClef_Operation = this.setClef_Operation;

	///[METHOD][setId_Contacts]Method to set the Id_Contacts
	///[PARAMETER][number][nValue]Our new value for Id_Contacts
	///[RETURNS]Boolean true if done 
	this.setId_Contacts = function(nValue){
		//Return the member
		return oMouvements.myContacts.setnId_Contacts(nValue);
	};
	//hack guy !!!
	this.myMouvements.setId_Contacts = this.setId_Contacts;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oMouvements.members, ary_, true);
	};
	//hack guy !!!
	this.myMouvements.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oMouvements.members, jsonSet, true);
	};
	//hack guy !!!
	this.myMouvements.loadFromJson = this.loadFromJson;


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
				oMouvements.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Mouvements_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myMouvements.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oMouvements.members);
	};
	//hack guy !!!
	this.myMouvements.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Mouvements_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myMouvements.deleteMyself = this.deleteMyself;


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
				oMouvements.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Mouvements_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oMouvements.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myMouvements.save = this.save;



};