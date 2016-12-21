/// <reference path="../../lib/STOCKS/STOCKS_Locations.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Items.js" />
/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Locations = [];

//SAVE_LAY_Locations
function SAVE_LAY_Locations(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Locations, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Locations[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Locations[nPosition].getObj();

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

//DELETE_LAY_Locations
function DELETE_LAY_Locations(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Locations, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Locations[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Locations[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Locations(){

	//our super
    this.myLAY_Locations = {};
    //hack
    var oLAY_Locations = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Locations][oObj]The Locations object
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
        return oLAY_Locations.members.sName;
    };
    this.myLAY_Locations.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Locations.members.sName;
    };
    this.myLAY_Locations.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Locations.members.oObj;
	};
	this.myLAY_Locations.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Locations.members.oParent;
	};
	this.myLAY_Locations.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Locations.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Locations.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Locations.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Locations.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Locations.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Locations.setParent = this.setParent;

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
		
		sCode += "<div id=\"" + oLAY_Locations.getId() + "\">";

		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Locations.getId() + "\">" + "Droits" + "</div>";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\tNom : <input id="SAI_Nom_' + oLAY_Locations.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Locations.getId() + '" value=""/>';

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Locations('" + oLAY_Locations.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Locations('" + oLAY_Locations.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Locations.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Locations.members.oDiv = document.getElementById(oLAY_Locations.getId());
        if(oLAY_Locations.members.oDiv == null)
            return false;

		//the events you spread
		if(oLAY_Locations.getParent() != null){
			//a div ?
			if(oLAY_Locations.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Locations.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Locations.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Locations.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Locations.generateHTML();

        return oLAY_Locations.attach();
    };
    this.myLAY_Locations.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Locations.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Locations.members.oDiv.parentNode.removeChild(oLAY_Locations.members.oDiv);
        //nullify the div
        oLAY_Locations.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Locations.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Locations.setName(sDivId);
		//Initialise component
		if(oLAY_Locations.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Locations, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Locations.push(oLAY_Locations);
			else
				//change
				ARY_LAY_Locations[nPosition] = oLAY_Locations;
			
			//set the object contact
			oLAY_Locations.LAY_Rights.setObj(oLAY_Locations.getObj());
			//Accreditation !!!
			oLAY_Locations.LAY_Rights.init("LAY_Accreditation_" + oLAY_Locations.getId(), sDivId);
			
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Locations.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Locations.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Locations, "sName", oLAY_Locations.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Locations.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
    this.myLAY_Locations.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Locations.members.oObj == null)
			oLAY_Locations.members.oObj = new Locations();
			//return false;
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Locations.getId());
		if(oElement != null)
			oElement.value = oLAY_Locations.members.oObj.getNom();

		return true;
	};
	this.myLAY_Locations.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the Locations
		var oLocations = oLAY_Locations.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("SAI_Nom_" + oLAY_Locations.getId());
		if(oElement != null)
			oLocations.setNom(oElement.value);

		//The right !!!
		oLAY_Locations.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Locations.members.oObj = oLocations;
		
	};
	this.myLAY_Locations.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Locations.setObj(oItem);
		return oLAY_Locations.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Locations.init = this.init;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){

		if(e != null){
			if(e.detail.oObject != null){
				if(e.detail.oObject.getName() == oLAY_Locations.LAY_Contact_Infos.getName()){
					//remove handler, cause we are no bad boys :)
					oLAY_Locations.LAY_Contact_Infos.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Locations.subComponentLoaded);
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					oLAY_Locations.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Locations, null));
				}
			}
		}
	}
	this.myLAY_Locations.subComponentLoaded = this.subComponentLoaded;
}