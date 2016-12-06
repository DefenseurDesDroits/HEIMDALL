/// <reference path="../../lib/PUBLICATIONS/PUBLICATIONS_Domaines.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Contacts.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Civilites.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Titres.js" />
/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Domaines = [];

//SAVE_LAY_Domaines
function SAVE_LAY_Domaines(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Domaines, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Domaines[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Domaines[nPosition].getObj();

	//save
	bResult = oItem.save(Heimdall.members.user["UserId"], ".");

	// //log it !!!
	// oLogs = new Logs();
	// //fill the logs !
	// oLogs.setId_Items(parseInt(oItem.getId_Items()));
	// //oLogs.setCreation("YYYYMMDD");
	// oLogs.setId_Creator(parseInt(Heimdall.members.user["UserId"]));
	// //oLogs.setValidation("YYYYMMDD");
	// oLogs.setId_Validator(parseInt(Heimdall.members.user["UserId"]));
	// oLogs.setValeur(oItem.exportToJson());
	// oLogs.setSuppression(false);
	// //save the logs !!!
	// oLogs.save(Heimdall.members.user["UserId"], ".");
	
	//Sad God Sake !!! 
	return bResult;
}

//DELETE_LAY_Domaines
function DELETE_LAY_Domaines(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Domaines, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Domaines[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Domaines[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Domaines(){

	//our super
    this.myLAY_Domaines = {};
    //hack
    var oLAY_Domaines = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Domaines][oObj]The Domaines object
		oObj : null,
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null
    };

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Domaines.members.sName;
    };
    this.myLAY_Domaines.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Domaines.members.sName;
    };
    this.myLAY_Domaines.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Domaines.members.oObj;
	};
	this.myLAY_Domaines.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Domaines.members.oParent;
	};
	this.myLAY_Domaines.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Domaines.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Domaines.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Domaines.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Domaines.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Domaines.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Domaines.setParent = this.setParent;

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
		
		sCode += "<div id=\"" + oLAY_Domaines.getId() + "\">";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\tNom : <input id="SAI_Nom_' + oLAY_Domaines.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Domaines.getId() + '" value=""/>';
		sCode += "\t\t<br/>";
		sCode += "\t\tDescription : ";
		sCode += "\t\t<br/>";
		sCode += '\t\t<textarea id="TXT_Description_' + oLAY_Domaines.getId() + '" class="SAI_" type="text" name="TXT_Description_' + oLAY_Domaines.getId() + '" cols=\"50\" value=""></textarea>';

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Domaines('" + oLAY_Domaines.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Domaines('" + oLAY_Domaines.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Domaines.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Domaines.members.oDiv = document.getElementById(oLAY_Domaines.getId());
        if(oLAY_Domaines.members.oDiv == null)
            return false;

		//the events you spread
		if(oLAY_Domaines.getParent() != null){
			//a div ?
			if(oLAY_Domaines.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Domaines.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Domaines.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Domaines.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Domaines.generateHTML();

        return oLAY_Domaines.attach();
    };
    this.myLAY_Domaines.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Domaines.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Domaines.members.oDiv.parentNode.removeChild(oLAY_Domaines.members.oDiv);
        //nullify the div
        oLAY_Domaines.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Domaines.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Domaines.setName(sDivId);
		//Initialise component
		if(oLAY_Domaines.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Domaines, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Domaines.push(oLAY_Domaines);
			else
				//change
				ARY_LAY_Domaines[nPosition] = oLAY_Domaines;
			
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Domaines.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Domaines.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Domaines, "sName", oLAY_Domaines.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Domaines.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
    this.myLAY_Domaines.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Domaines.members.oObj == null)
			oLAY_Domaines.members.oObj = new Domaines();
			//return false;
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Domaines.getId());
		if(oElement != null)
			oElement.value = oLAY_Domaines.members.oObj.getNom();

		oElement = document.getElementById("TXT_Description_" + oLAY_Domaines.getId());
		if(oElement != null)
			oElement.value = oLAY_Domaines.members.oObj.getDescription();

		return true;
	};
	this.myLAY_Domaines.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the Domaines
		var oDomaines = oLAY_Domaines.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("SAI_Nom_" + oLAY_Domaines.getId());
		if(oElement != null)
			oDomaines.setNom(oElement.value);
		
		oElement = document.getElementById("TXT_Description_" + oLAY_Domaines.getId());
		if(oElement != null)
			oDomaines.setDescription(oElement.value);

		//Parano !
		oLAY_Domaines.members.oObj = oDomaines;
		
	};
	this.myLAY_Domaines.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Domaines.setObj(oItem);
		return oLAY_Domaines.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Domaines.init = this.init;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){

		if(e != null){
			if(e.detail.oObject != null){
				if(e.detail.oObject.getName() == oLAY_Domaines.LAY_Contact_Infos.getName()){
					//remove handler, cause we are no bad boys :)
					oLAY_Domaines.LAY_Contact_Infos.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Domaines.subComponentLoaded);
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					oLAY_Domaines.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Domaines, null));
				}
			}
		}
	}
	this.myLAY_Domaines.subComponentLoaded = this.subComponentLoaded;
}