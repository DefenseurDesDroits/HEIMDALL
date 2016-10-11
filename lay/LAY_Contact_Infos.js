

/// <reference path="../lib/CONTACTS_Contact_Infos.js" />

/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Contact_Infos = [];

//SAVE_LAY_Contact_Infos
function SAVE_LAY_Contact_Infos(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Contact_Infos, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Contact_Infos[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Contact_Infos[nPosition].getObj();

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

//DELETE_LAY_Contact_Infos
function DELETE_LAY_Contact_Infos(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Contact_Infos, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Contact_Infos[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Contact_Infos[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Contact_Infos(){

	//our super
    this.myLAY_Contact_Infos = {};
    //hack
    var oLAY_Contact_Infos = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Contacts][oObj]The Contacts object
		oObj : null,
        ///[MEMBER][string][element]The dom element
        oDiv : null
    };

	//our right !!!
	this.LAY_Rights = new LAY_Accreditations_Item();

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Contact_Infos.members.sName;
    };
    this.myLAY_Contact_Infos.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Contact_Infos.members.sName;
    };
    this.myLAY_Contact_Infos.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Contact_Infos.members.oObj;
	};
	this.myLAY_Contact_Infos.getObj = this.getObj;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Contact_Infos.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Contact_Infos.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Contact_Infos.members.oObj = oItem;
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
		
		sCode += "<div id=\"" + oLAY_Contact_Infos.getId() + "\">";
		
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Contact_Infos.getId() + "\">" + "</div>";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\t<input id="SAI_Fonction_' + oLAY_Contact_Infos.getId() + '" class="SAI_" type="text" name="SAI_Fonction_' + oLAY_Contact_Infos.getId() + '" value=""/>';
		sCode += "<br\>";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Langues_" + oLAY_Contact_Infos.getId() + "\">" + "\r\n";
		//get the count
		nCount = Heimdall.members.products.contacts.Langues.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
			//add option
			sCode += "\t" + "\t" + "\t" +"<option value=\"" + Heimdall.members.products.contacts.Langues[nIt].getId_Langues() + "\">" + Heimdall.members.products.contacts.Langues[nIt].getNom() + "</option>" + "\r\n";
			//Next
			nIt++;
		}
		sCode += "\t" + "\t" + "</select>" + "\r\n";

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Contact_Infos('" + oLAY_Contact_Infos.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Contact_Infos('" + oLAY_Contact_Infos.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";

		sCode += "\t" + "<div id=\"LAY_Contact_Infos_Adr_"  + oLAY_Contact_Infos.getId() + "\">---</div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Contact_Infos.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Contact_Infos.members.oDiv = document.getElementById(oLAY_Contact_Infos.getId());
        if(oLAY_Contact_Infos.members.oDiv == null)
            return false;

        return true;
    };
    this.myLAY_Contact_Infos.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Contact_Infos.generateHTML();

        return oLAY_Contact_Infos.attach();
    };
    this.myLAY_Contact_Infos.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Contact_Infos.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Contact_Infos.members.oDiv.parentNode.removeChild(oLAY_Contact_Infos.members.oDiv);
        //nullify the div
        oLAY_Contact_Infos.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Contact_Infos.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Contact_Infos.setName(sDivId);
		//Initialise component
		if(oLAY_Contact_Infos.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Contact_Infos, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Contact_Infos.push(oLAY_Contact_Infos);
			else
				//change
				ARY_LAY_Contact_Infos[nPosition] = oLAY_Contact_Infos;
			
			//set the object contact
			oLAY_Contact_Infos.LAY_Rights.setObj(oLAY_Contact_Infos.getObj());
			//Accreditation !!!
			oLAY_Contact_Infos.LAY_Rights.init("LAY_Accreditation_" + oLAY_Contact_Infos.getId(), sDivId);
			
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Contact_Infos.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Contact_Infos.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Contact_Infos, "sName", oLAY_Contact_Infos.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Contact_Infos.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Contact_Infos.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Contact_Infos.members.oObj == null)
			oLAY_Contact_Infos.members.oObj = new Contacts();
			//return false;

		oElement = document.getElementById("SAI_Fonction_" + oLAY_Contact_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Contact_Infos.members.oObj.getFonction();

		oElement = document.getElementById("COMBO_Langues_" + oLAY_Contact_Infos.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Langues, "nId_Langues", oLAY_Contact_Infos.members.oObj.getId_Langues());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}

        //

		return true;
	};
	this.myLAY_Contact_Infos.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the contact 
		var oContact_Infos = oLAY_Contact_Infos.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("SAI_Fonction_" + oLAY_Contact_Infos.getId());
		if(oElement != null)
			oContact_Infos.setPseudo(oElement.value);

		oElement = document.getElementById("COMBO_Langues_" + oLAY_Contact_Infos.getId());
		if(oElement != null)
			oContact_Infos.setId_Langues(parseInt(Heimdall.members.products.contacts.Langues[oElement.selectedIndex].getId_Langues()));

		///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug && oElement != null){
			console.log("COMBO_Langues value : "  + oElement.selectedIndex);
			console.log("COMBO_Langues ID : "  + Heimdall.members.products.contacts.Langues[oElement.selectedIndex].getId_Langues());
		}
		///[/DEBUG]
		
        //The infos

		//The right !!!
		oLAY_Contact_Infos.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Contact_Infos.members.oObj = oContact_Infos;
		
	};
	this.myLAY_Contact_Infos.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Contact_Infos.setObj(oItem);
		return oLAY_Contact_Infos.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Contact_Infos.init = this.init;
}

