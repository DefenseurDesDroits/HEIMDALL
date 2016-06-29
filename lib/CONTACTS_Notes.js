//Module : Contacts
//Created by : Ludo
//Generated on : 2016-06-29 04:04:05
//Filename : Notes.js
//Description : Table des notes sur les items

///[CLASS][Notes]Table des notes sur les items
///[AUTHOR]Ludo
function Notes(){
	//our new member data
	var NotesmemberSet = {	

		// ///[MEMBER][integer][nId_Notes]Identifiant sur la tables
		//nId_Notes : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][string][sTitre]Titre de la note
		sTitre : "",
		///[MEMBER][boolean][bUrgente]Urgente la note ?
		bUrgente : false,
		///[MEMBER][string][sTexte]Le texte de la note
		sTexte : "",
		///[MEMBER][integer][nId_Items_Linked]Objet sur lequel est liée la note
		nId_Items_Linked : 0
	};
	//get the legacy
	legacy(this.members, NotesmemberSet, true);


	//Our super
	this.myNotes = {};
	//Our hack
	var oNotes = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Notes]Method to get the Id_Notes
	///[RETURNS]The Id_Notes
	this.getId_Notes = function(){
		//Return the getter in inheritage
		return oNotes.myItems.getnId_Items();
	};
	//hack guy !!!
	this.myNotes.getId_Notes = this.getId_Notes;

	///[METHOD][getTitre]Method to get the Titre
	///[RETURNS]The Titre
	this.getTitre = function(){
		//Return the member
		return oNotes.members.sTitre;
	};
	//hack guy !!!
	this.myNotes.getTitre = this.getTitre;

	///[METHOD][getUrgente]Method to get the Urgente
	///[RETURNS]The Urgente
	this.getUrgente = function(){
		//Return the member
		return oNotes.members.bUrgente;
	};
	//hack guy !!!
	this.myNotes.getUrgente = this.getUrgente;

	///[METHOD][getTexte]Method to get the Texte
	///[RETURNS]The Texte
	this.getTexte = function(){
		//Return the member
		return oNotes.members.sTexte;
	};
	//hack guy !!!
	this.myNotes.getTexte = this.getTexte;

	///[METHOD][getId_Items_Linked]Method to get the Id_Items_Linked
	///[RETURNS]The Id_Items_Linked
	this.getId_Items_Linked = function(){
		//Return the member
		return oNotes.members.nId_Items_Linked;
	};
	//hack guy !!!
	this.myNotes.getId_Items_Linked = this.getId_Items_Linked;



	///[SECTION][SETTERS]#################################################

	///[METHOD][getId_Notes]Method to set the Id_Notes
	///[PARAMETER][number][nValue]Our new value for Id_Notes
	///[RETURNS]Boolean true if done 
	this.getId_Notes = function(nValue){
		//Return the member
		return oNotes.myItems.setnId_Items(nValue);
	};
	//hack guy !!!
	this.myNotes.getId_Notes = this.getId_Notes;

	///[METHOD][getTitre]Method to set the Titre
	///[PARAMETER][string][sValue]Our new value for Titre
	///[RETURNS]Boolean true if done 
	this.getTitre = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oNotes.members.sTitre = sValue.slice(0, 64);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotes.getTitre = this.getTitre;

	///[METHOD][getUrgente]Method to set the Urgente
	///[PARAMETER][boolean][bValue]Our new value for Urgente
	///[RETURNS]Boolean true if done 
	this.getUrgente = function(bValue){
		//security on null guy !!!
		if(bValue == null)
			return false;
		//security on type guy !!!
		if(typeof bValue === 'boolean'){
			oNotes.members.bUrgente = bValue;
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotes.getUrgente = this.getUrgente;

	///[METHOD][getTexte]Method to set the Texte
	///[PARAMETER][string][sValue]Our new value for Texte
	///[RETURNS]Boolean true if done 
	this.getTexte = function(sValue){
		//security on null guy !!!
		if(sValue == null)
			return false;
		//security on type guy !!!
		if(typeof sValue === 'string'){
			//Never trust the FRONT !!!
			oNotes.members.sTexte = sValue.slice(0, 512);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotes.getTexte = this.getTexte;

	///[METHOD][getId_Items_Linked]Method to set the Id_Items_Linked
	///[PARAMETER][number][nValue]Our new value for Id_Items_Linked
	///[RETURNS]Boolean true if done 
	this.getId_Items_Linked = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oNotes.members.nId_Items_Linked = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myNotes.getId_Items_Linked = this.getId_Items_Linked;



	///[SECTION][WORKSHOP]################################################

	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oNotes.members, jsonSet, true);
	};
	//hack guy !!!
	this.myNotes.loadFromJson = this.loadFromJson;


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
				oNotes.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Notes_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNotes.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oNotes.members);
	};
	//hack guy !!!
	this.myNotes.exportToJson = this.exportToJson;


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
		oReq.open("POST", url + "/php/Notes_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNotes.deleteMyself = this.deleteMyself;


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
				oNotes.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Notes_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Json=" + oNotes.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myNotes.save = this.save;



};