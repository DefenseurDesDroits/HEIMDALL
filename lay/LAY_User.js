

/// <reference path="../lib/CONTACTS_Users.js" />

/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Contacts = [];

//SAVE_LAY_Contacts
function SAVE_LAY_Contacts(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Contacts, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Contacts[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Contacts[nPosition].getObj();

	//Sad God Sake !!!
	return oItem.save(Heimdall.members.user["UserId"], ".");
}

//DELETE_LAY_Contacts
function DELETE_LAY_Contacts(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Contacts, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Contacts[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Contacts[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Contacts(){

	//our super
    this.myLAY_Contacts = {};
    //hack
    var oLAY_Contacts = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Contacts][oObj]The Contacts object
		oObj : null,
        ///[MEMBER][string][element]The dom element
        oDiv : null
    };

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Contacts.members.sName;
    };
    this.myLAY_Contacts.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Contacts.members.sName;
    };
    this.myLAY_Contacts.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Contacts.members.oObj;
	};
	this.myLAY_Contacts.getObj = this.getObj;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Contacts.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Contacts.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Contacts.members.oObj = oItem;
		//Happy end 
		return true
	}

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
		
		sCode += "<div id=\"" + oLAY_Contacts.getId() + "\">";
		
		//sCode += "<div >" + accreditationsLAYDiv() + "</div>";
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Contacts.getId() + "\">" + "accreditationsLAYDiv()" + "</div>";

		//sCode += "<form action=\"contactLAYDIVSave(" +nLine + ")\">" + "\r\n";
		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Civilite_" + oLAY_Contacts.getId() + "\">" + "\r\n";
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

		sCode += '\t\t<input id="SAI_Nom_' + oLAY_Contacts.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Contacts.getId() + '" value=""/>';
		sCode += '\t\t<input id="SAI_Prenom_' + oLAY_Contacts.getId() + '" class="SAI_" type="text" name="SAI_Prenom_' + oLAY_Contacts.getId() + '" value=""/>';

		//sCode += "\t" + "<br/>" + "\r\n";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Titres_" + oLAY_Contacts.getId() + "\">" + "\r\n";
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

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Contacts('" + oLAY_Contacts.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Contacts('" + oLAY_Contacts.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Contacts.getId() + "\">---</div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Contacts.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Contacts.members.oDiv = document.getElementById(oLAY_Contacts.getId());
        if(oLAY_Contacts.members.oDiv == null)
            return false;

        return true;
    };
    this.myLAY_Contacts.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Contacts.generateHTML();

        return oLAY_Contacts.attach();
    };
    this.myLAY_Contacts.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Contacts.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Contacts.members.oDiv.parentNode.removeChild(oLAY_Contacts.members.oDiv);
        //nullify the div
        oLAY_Contacts.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Contacts.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Contacts.setName(sDivId);
		//Initialise component
		if(oLAY_Contacts.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Contacts, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Contacts.push(oLAY_Contacts);
			else
				//change
				ARY_LAY_Contacts[nPosition] = oLAY_Contacts;
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Contacts.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Contacts.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Contacts, "sName", oLAY_Contacts.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Contacts.slice(nPosition, nPosition + 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Contacts.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Contacts.members.oObj == null)
			oLAY_Contacts.members.oObj = new Contacts();
			//return false;

		oElement = document.getElementById("COMBO_Civilite_" + oLAY_Contacts.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Civilites, "nId_Civilites", oLAY_Contacts.members.oObj.getId_Civilites());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Contacts.getId());
		if(oElement != null)
			oElement.value = oLAY_Contacts.members.oObj.getNom();

		oElement = document.getElementById("SAI_Prenom_" + oLAY_Contacts.getId());
		if(oElement != null)
			oElement.value = oLAY_Contacts.members.oObj.getPrenom();

		oElement = document.getElementById("COMBO_Titres_" + oLAY_Contacts.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Titres, "nId_Titres", oLAY_Contacts.members.oObj.getId_Titres());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}

		return true;
	};
	this.myLAY_Contacts.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the contact 
		var oContact = oLAY_Contacts.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("COMBO_Civilite_" + oLAY_Contacts.getId());
		if(oElement != null)
			oContact.setId_Civilites(parseInt(Heimdall.members.products.contacts.Civilites[oElement.selectedIndex].getId_Civilites()));

		///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug && oElement != null){
			console.log("COMBO_Civilite value : "  + oElement.selectedIndex);
			console.log("COMBO_Civilite ID : "  + Heimdall.members.products.contacts.Civilites[oElement.selectedIndex].getId_Civilites());
		}
		///[/DEBUG]

		oElement = document.getElementById("SAI_Nom_" + oLAY_Contacts.getId());
		if(oElement != null)
			oContact.setNom(oElement.value);

		oElement = document.getElementById("SAI_Prenom_" + oLAY_Contacts.getId());
		if(oElement != null)
			oContact.setPrenom(oElement.value);

		oElement = document.getElementById("COMBO_Titres_" + oLAY_Contacts.getId());
		if(oElement != null)
			oContact.setId_Titres(parseInt(Heimdall.members.products.contacts.Titres[oElement.selectedIndex].getId_Titres()));

		///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug && oElement != null){
			console.log("COMBO_Titres value : "  + oElement.selectedIndex);
			console.log("COMBO_Titres ID : "  + Heimdall.members.products.contacts.Titres[oElement.selectedIndex].getId_Titres());
		}
		///[/DEBUG]

		///[DEBUG]Operation time !!!
		if(Heimdall.flags.debug){
			console.log("contactLAYDIVSave, json : " + "\r\n" + oContact.exportToJson());
			console.log("user id : " + Heimdall.members.user["UserId"]);
		}
		///[/DEBUG]
		
		//Parano !
		oLAY_Contacts.members.oObj = oContact;
		
	};
	this.myLAY_Contacts.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Contacts.setObj(oItem);
		return oLAY_Contacts.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Contacts.init = this.init;
}

