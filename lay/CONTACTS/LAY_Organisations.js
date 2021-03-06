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
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Organisations, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Organisations[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Organisations[nPosition].getObj();

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
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null
    };
	
	//our right !!!
	this.LAY_Rights = new LAY_Accreditations_Item();

	//Contact_Infos
	this.LAY_Contact_Infos = new LAY_LIST_Contact_Infos();

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

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Organisations.members.oParent;
	};
	this.myLAY_Organisations.getParent = this.getParent;

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
	};
	this.myLAY_Organisations.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Organisations.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Organisations.setParent = this.setParent;

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
		
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Organisations.getId() + "\">" +  "</div>";

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
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Organisations.getId() + "\"></div>";
		
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

		//the events you spread
		if(oLAY_Organisations.getParent() != null){
			//a div ?
			if(oLAY_Organisations.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Organisations.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Organisations.getParent().subComponentLoaded);
			}
		}

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
			
			//set the object contact
			oLAY_Organisations.LAY_Rights.setObj(oLAY_Organisations.getObj());
			//Accreditation !!!
			oLAY_Organisations.LAY_Rights.init("LAY_Accreditation_" + oLAY_Organisations.getId(), sDivId);

			//event listener !!
			oLAY_Organisations.LAY_Contact_Infos.setParent(oLAY_Organisations);
			//init the contact infos !
			oLAY_Organisations.LAY_Contact_Infos.init(HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Organisations.getId(), "CIS_" + sDivId, oLAY_Organisations.getObj());
			
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
				ARY_LAY_Organisations.splice(nPosition, 1);

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

		oLAY_Organisations.LAY_Contact_Infos.ObjToView();

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
		

		oLAY_Organisations.LAY_Contact_Infos.ViewToObject();

		//The right !!!
		oLAY_Organisations.LAY_Rights.ViewToObject();
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

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){

		if(e != null){
			if(e.detail.oObject != null){
				if(e.detail.oObject.getName() == oLAY_Organisations.LAY_Contact_Infos.getName()){
					//remove handler, cause we are no bad boys :)
					oLAY_Organisations.LAY_Contact_Infos.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Organisations.subComponentLoaded);
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					oLAY_Organisations.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Organisations, null));
				}
			}
		}
	}
	this.myLAY_Organisations.subComponentLoaded = this.subComponentLoaded;
}