/// <reference path="../lib/CONTACTS_Users.js" />

/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Users = [];

//SAVE_LAY_Users
function SAVE_LAY_Users(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Users, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Users[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Users[nPosition].getObj();

	//save
	bResult = oItem.save(Heimdall.members.user["UserId"], ".");

	//log it !!!
	oLogs = new Logs();
	//fill the logs !
	oLogs.setId_Items(parseInt(oItem.getId_Items()));
	//oLogs.setCreation("YYYYMMDD");
	oLogs.setId_Creator(parseInt(Heimdall.members.user["UserId"]));
	//oLogs.setValidation("YYYYMMDD");
	oLogs.setId_Validator(parseInt(Heimdall.members.user["UserId"]));
	oLogs.setValeur(oItem.exportToJson());
	oLogs.setSuppression(false);
	//save the logs !!!
	oLogs.save(Heimdall.members.user["UserId"], ".");

	//Sad God Sake !!!
	return bResult;
}

//DELETE_LAY_Users
function DELETE_LAY_Users(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Users, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Users[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Users[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Users(){

	//our super
    this.myLAY_Users = {};
    //hack
    var oLAY_Users = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Contacts][oObj]The Contacts object
		oObj : null,
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null
    };

	//our right !!!
	this.LAY_Rights = new LAY_Accreditations_Item();

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Users.members.sName;
    };
    this.myLAY_Users.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Users.members.sName;
    };
    this.myLAY_Users.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Users.members.oObj;
	};
	this.myLAY_Users.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Users.members.oParent;
	};
	this.myLAY_Users.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Users.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Users.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Users.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Users.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Users.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Users.setParent = this.setParent;

	///[SECTION]WORKSHOP##############################################
	
	///[METHOD]Method to write the html code
	///[RETURNS]string, the HTML text of the controls
    this.generateHTML = function(){

        //our code
		var sCode = "";
		//our civilities part ----
		//our count
		var nCount = 0;
		//our iterator
		var nIt = 0;
		//position of the civilite
		var nPosition = 0;
		
		sCode += "<div id=\"" + oLAY_Users.getId() + "\">";
		
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Users.getId() + "\">" + "</div>";
		//sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Users.getId() + "\">" + "accreditationsLAYDiv()" + "</div>";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\t<input id="SAI_Pseudo_' + oLAY_Users.getId() + '" class="SAI_" type="text" name="SAI_Pseudo_' + oLAY_Users.getId() + '" value=""/>';
		sCode += "<br\>";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Civilite_" + oLAY_Users.getId() + "\">" + "\r\n";
		//get the count
		nCount = Heimdall.members.products.contacts.Civilites.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
			//add option
			sCode += "\t" + "\t" + "\t" +"<option value=\"" + Heimdall.members.products.contacts.Civilites[nIt].getId_Civilites() + "\">" + Heimdall.members.products.contacts.Civilites[nIt].getNom() + "</option>" + "\r\n";
			//Next
			nIt++;
		}
		sCode += "\t" + "\t" + "</select>" + "\r\n";

		sCode += '\t\t<input id="SAI_Nom_' + oLAY_Users.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Users.getId() + '" value=""/>';
		sCode += '\t\t<input id="SAI_Prenom_' + oLAY_Users.getId() + '" class="SAI_" type="text" name="SAI_Prenom_' + oLAY_Users.getId() + '" value=""/>';

		//sCode += "\t" + "<br/>" + "\r\n";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Titres_" + oLAY_Users.getId() + "\">" + "\r\n";
		//get the count
		nCount = Heimdall.members.products.contacts.Titres.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
			//add option
			sCode += "\t" + "\t" + "\t" +"<option value=\"" + Heimdall.members.products.contacts.Titres[nIt].getId_Titres() + "\">" + Heimdall.members.products.contacts.Titres[nIt].getNom() + "</option>" + "\r\n";
			//Next
			nIt++;
		}
		sCode += "\t" + "\t" + "</select>" + "\r\n";

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Users('" + oLAY_Users.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Users('" + oLAY_Users.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Users.getId() + "\">---</div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Users.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Users.members.oDiv = document.getElementById(oLAY_Users.getId());
        if(oLAY_Users.members.oDiv == null)
            return false;
		
		//the events you spread
		if(oLAY_Users.getParent() != null){
			//a div ?
			if(oLAY_Users.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Users.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Users.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Users.attach = this.attach;

    ///[METHOD]Method to initialize the control
    ///[PARAMETER][string][sDivOwner]string, our owner div Id
	///[RETURNS]boolean, true if done
    this.initialyseComponent = function(sDivOwner){

        //our result
        var bResult = false;
        //the div of the owner
        var oDivOwner = document.getElementById(sDivOwner);

        if(oDivOwner == null)
            return false;
        
        //the inner HTML add
        oDivOwner.innerHTML += oLAY_Users.generateHTML();

        return oLAY_Users.attach();
    };
    this.myLAY_Users.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Users.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Users.members.oDiv.parentNode.removeChild(oLAY_Users.members.oDiv);
        //nullify the div
        oLAY_Users.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Users.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Users.setName(sDivId);
		//Initialise component
		if(oLAY_Users.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Users, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Users.push(oLAY_Users);
			else
				//change
				ARY_LAY_Users[nPosition] = oLAY_Users;
			
			//set the object contact
			oLAY_Users.LAY_Rights.setObj(oLAY_Users.getObj());
			//Accreditation !!!
			oLAY_Users.LAY_Rights.init("LAY_Accreditation_" + oLAY_Users.getId(), sDivId);
			
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Users.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Users.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Users, "sName", oLAY_Users.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Users.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Users.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Users.members.oObj == null)
			oLAY_Users.members.oObj = new Contacts();
			//return false;

		oElement = document.getElementById("SAI_Pseudo_" + oLAY_Users.getId());
		if(oElement != null)
			oElement.value = oLAY_Users.members.oObj.getPseudo();

		oElement = document.getElementById("COMBO_Civilite_" + oLAY_Users.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Civilites, "nId_Civilites", oLAY_Users.members.oObj.getId_Civilites());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Users.getId());
		if(oElement != null)
			oElement.value = oLAY_Users.members.oObj.getNom();

		oElement = document.getElementById("SAI_Prenom_" + oLAY_Users.getId());
		if(oElement != null)
			oElement.value = oLAY_Users.members.oObj.getPrenom();

		oElement = document.getElementById("COMBO_Titres_" + oLAY_Users.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Titres, "nId_Titres", oLAY_Users.members.oObj.getId_Titres());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}

		return true;
	};
	this.myLAY_Users.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the contact 
		var oUsers = oLAY_Users.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("SAI_Pseudo_" + oLAY_Users.getId());
		if(oElement != null)
			oUsers.setPseudo(oElement.value);

		oElement = document.getElementById("COMBO_Civilite_" + oLAY_Users.getId());
		if(oElement != null)
			oUsers.setId_Civilites(parseInt(Heimdall.members.products.contacts.Civilites[oElement.selectedIndex].getId_Civilites()));

		///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug && oElement != null){
			console.log("COMBO_Civilite value : "  + oElement.selectedIndex);
			console.log("COMBO_Civilite ID : "  + Heimdall.members.products.contacts.Civilites[oElement.selectedIndex].getId_Civilites());
		}
		///[/DEBUG]

		oElement = document.getElementById("SAI_Nom_" + oLAY_Users.getId());
		if(oElement != null)
			oUsers.setNom(oElement.value);

		oElement = document.getElementById("SAI_Prenom_" + oLAY_Users.getId());
		if(oElement != null)
			oUsers.setPrenom(oElement.value);

		oElement = document.getElementById("COMBO_Titres_" + oLAY_Users.getId());
		if(oElement != null)
			oUsers.setId_Titres(parseInt(Heimdall.members.products.contacts.Titres[oElement.selectedIndex].getId_Titres()));

		///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug && oElement != null){
			console.log("COMBO_Titres value : "  + oElement.selectedIndex);
			console.log("COMBO_Titres ID : "  + Heimdall.members.products.contacts.Titres[oElement.selectedIndex].getId_Titres());
		}
		///[/DEBUG]

		///[DEBUG]Operation time !!!
		if(Heimdall.flags.debug){
			console.log("UsersLAYDIVSave, json : " + "\r\n" + oUsers.exportToJson());
			console.log("user id : " + Heimdall.members.user["UserId"]);
		}
		///[/DEBUG]
		
		//The right !!!
		oLAY_Users.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Users.members.oObj = oUsers;
		
	};
	this.myLAY_Users.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Users.setObj(oItem);
		return oLAY_Users.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Users.init = this.init;
}

