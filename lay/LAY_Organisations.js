

/// <reference path="../lib/CONTACTS_Organisations.js" />
/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Organisations = [];

//SAVE_LAY_Organisations
function SAVE_LAY_Organisations(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Organisations, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Organisations[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Organisations[nPosition].getObj();

	//Sad God Sake !!!
	return oItem.save(Heimdall.members.user["UserId"], ".");
}

//DELETE_LAY_Organisations
function DELETE_LAY_Organisations(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Organisations, "sName", sId);
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

function LAY_Organisations(){

	//our super
    this.myLAY_Organisations = {};
    //hack
    var oLAY_Organisations = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Organisations][oObj]The Organisations object
		oObj : null,
        ///[MEMBER][string][element]The dom element
        oDiv : null
    };

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Organisations.members.sName;
    };
    this.myLAY_Organisations.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Organisations.members.sName;
    };
    this.myLAY_Organisations.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Organisations.members.oObj;
	};
	this.myLAY_Organisations.getObj = this.getObj;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Organisations.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Organisations.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Organisations.members.oObj = oItem;
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
		
		sCode += "<div id=\"" + oLAY_Organisations.getId() + "\">";
		
		//sCode += "<div >" + accreditationsLAYDiv() + "</div>";
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Organisations.getId() + "\">" + "accreditationsLAYDiv()" + "</div>";

		//sCode += "<form action=\"contactLAYDIVSave(" +nLine + ")\">" + "\r\n";
		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Organisation_Types_" + oLAY_Organisations.getId() + "\">" + "\r\n";
		//get the count
		nCount = Heimdall.members.products.contacts.Organisation_Types.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
			//add option
			sCode += "\t" + "\t" + "\t" +"<option value=\"" + Heimdall.members.products.contacts.Organisation_Types[nIt].getId_Organisation_Types() + "\">" + Heimdall.members.products.contacts.Organisation_Types[nIt].getNom() + "</option>" + "\r\n";
			//Next
			nIt++;
		}
		sCode += "\t" + "\t" + "</select>" + "\r\n";

		sCode += '\t\t<input id="SAI_Nom_' + oLAY_Organisations.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Organisations.getId() + '" value=""/>';

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Organisations('" + oLAY_Organisations.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Organisations('" + oLAY_Organisations.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Organisations.getId() + "\">---</div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Organisations.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Organisations.members.oDiv = document.getElementById(oLAY_Organisations.getId());
        if(oLAY_Organisations.members.oDiv == null)
            return false;

        return true;
    };
    this.myLAY_Organisations.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Organisations.generateHTML();

        return oLAY_Organisations.attach();
    };
    this.myLAY_Organisations.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Organisations.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Organisations.members.oDiv.parentNode.removeChild(oLAY_Organisations.members.oDiv);
        //nullify the div
        oLAY_Organisations.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Organisations.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Organisations.setName(sDivId);
		//Initialise component
		if(oLAY_Organisations.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Organisations, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Organisations.push(oLAY_Organisations);
			else
				//change
				ARY_LAY_Organisations[nPosition] = oLAY_Organisations;
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Organisations.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Organisations.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Organisations, "sName", oLAY_Organisations.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Organisations.slice(nPosition, nPosition + 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
    this.myLAY_Organisations.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Organisations.members.oObj == null)
			oLAY_Organisations.members.oObj = new Organisations();
			//return false;

		oElement = document.getElementById("COMBO_Organisation_Types_" + oLAY_Organisations.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Organisation_Types, "nId_Organisation_Types", oLAY_Organisations.members.oObj.getId_Organisation_Type());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Organisations.getId());
		if(oElement != null)
			oElement.value = oLAY_Organisations.members.oObj.getNom();

		return true;
	};
	this.myLAY_Organisations.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the Organisations
		var oOrganisations = oLAY_Organisations.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("COMBO_Organisation_Types_" + oLAY_Organisations.getId());
		if(oElement != null)
			oOrganisations.setId_Organisation_Type(parseInt(Heimdall.members.products.contacts.Organisation_Types[oElement.selectedIndex].getId_Organisation_Types()));

		oElement = document.getElementById("SAI_Nom_" + oLAY_Organisations.getId());
		if(oElement != null)
			oOrganisations.setNom(oElement.value);
		
		//Parano !
		oLAY_Organisations.members.oObj = oOrganisations;
		
	};
	this.myLAY_Organisations.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Organisations.setObj(oItem);
		return oLAY_Organisations.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Organisations.init = this.init;
}