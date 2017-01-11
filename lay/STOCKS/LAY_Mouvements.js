/// <reference path="../../lib//STOCKS/STOCKS_Mouvements.js" />

/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Mouvements = [];

//SAVE_LAY_Mouvements
function SAVE_LAY_Mouvements(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Mouvements, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Mouvements[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Mouvements[nPosition].getObj();

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

//DELETE_LAY_Mouvements
function DELETE_LAY_Mouvements(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Mouvements, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Mouvements[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Mouvements[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Mouvements(){

	//our super
    this.myLAY_Mouvements = {};
    //hack
    var oLAY_Mouvements = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Mouvements][oObj]The Mouvements object
		oObj : null,
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null
    };

	//our right !!!
	this.LAY_Rights = new LAY_Accreditations_Item();

	//Mouvements
	//this.LAY_Mouvements = new LAY_LIST_Mouvements();

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Mouvements.members.sName;
    };
    this.myLAY_Mouvements.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Mouvements.members.sName;
    };
    this.myLAY_Mouvements.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Mouvements.members.oObj;
	};
	this.myLAY_Mouvements.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Mouvements.members.oParent;
	};
	this.myLAY_Mouvements.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Mouvements.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Mouvements.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Mouvements.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Mouvements.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Mouvements.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Mouvements.setParent = this.setParent;

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
		
		sCode += "<div id=\"" + oLAY_Mouvements.getId() + "\">";
		
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Mouvements.getId() + "\">" + "</div>";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		//sCode += "";

		//Effectif
		sCode += "\t" + "Mouvement effectif le : <input id=\"SAI_Date_Mouvements_" + oLAY_Mouvements.getId() + "\" type=\"date\"/><br/>";
		//Quantité
		sCode += "\t" + "Quantité : <input id=\"SAI_Quantite_Mouvements_" + oLAY_Mouvements.getId() + "\" type=\"number\" value=\"0\"/><br/>";
		//Motif
		sCode += "\t" + "Motif : <input id=\"SAI_Motif_Mouvements_" + oLAY_Mouvements.getId() + "\" type=\"text\"/><br/>";
		//Operation key
		sCode += "\t" + "Clef d'opération : <input id=\"SAI_Operation_Key_Mouvements_" + oLAY_Mouvements.getId() + "\" type=\"text\"/><br/>";

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Mouvements('" + oLAY_Mouvements.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Mouvements('" + oLAY_Mouvements.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Mouvements.getId() + "\"></div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Mouvements.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Mouvements.members.oDiv = document.getElementById(oLAY_Mouvements.getId());
        if(oLAY_Mouvements.members.oDiv == null)
            return false;
		
		//the events you spread
		if(oLAY_Mouvements.getParent() != null){
			//a div ?
			if(oLAY_Mouvements.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Mouvements.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Mouvements.getParent().subComponentLoaded);
				
				console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
			}
		}

        return true;
    };
    this.myLAY_Mouvements.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Mouvements.generateHTML();

        return oLAY_Mouvements.attach();
    };
    this.myLAY_Mouvements.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Mouvements.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Mouvements.members.oDiv.parentNode.removeChild(oLAY_Mouvements.members.oDiv);
        //nullify the div
        oLAY_Mouvements.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Mouvements.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Mouvements.setName(sDivId);
		//Initialise component
		if(oLAY_Mouvements.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Mouvements, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Mouvements.push(oLAY_Mouvements);
			else
				//change
				ARY_LAY_Mouvements[nPosition] = oLAY_Mouvements;
			
			//set the object contact
			oLAY_Mouvements.LAY_Rights.setObj(oLAY_Mouvements.getObj());
			//Accreditation !!!
			oLAY_Mouvements.LAY_Rights.init("LAY_Accreditation_" + oLAY_Mouvements.getId(), sDivId);
			
			// //event listener !!
			//oLAY_Mouvements.LAY_Mouvements.setParent(oLAY_Mouvements);
			// //init the contact infos !
			//oLAY_Mouvements.LAY_Mouvements.init(HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Mouvements.getId(), "FPS_" + sDivId, oLAY_Mouvements.getObj());

			//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
			oLAY_Mouvements.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Mouvements, null));

			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Mouvements.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Mouvements.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Mouvements, "sName", oLAY_Mouvements.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Mouvements.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Mouvements.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Mouvements.members.oObj == null)
			oLAY_Mouvements.members.oObj = new Mouvements();
			//return false;

		oElement = document.getElementById("SAI_Date_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			console.log("SAI_Date_Mouvements " + oLAY_Mouvements.members.oObj.getEffectif());
			oElement.value = oLAY_Mouvements.members.oObj.getEffectif();
		}

		oElement = document.getElementById("SAI_Quantite_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			oElement.value = oLAY_Mouvements.members.oObj.setQuantite();
		}

		oElement = document.getElementById("SAI_Motifs_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			oElement.value = oLAY_Mouvements.members.oObj.getMotif();
		}

		oElement = document.getElementById("SAI_Operation_Key_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			oElement.value = oLAY_Mouvements.members.oObj.getClef_Operation();
		}
		
		//logs
		console.log("LAY_Mouvements : ObjToView");

		//oLAY_Mouvements.LAY_Mouvements.ObjToView();

		return true;
	};
	this.myLAY_Mouvements.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the contact 
		var oMouvements = oLAY_Mouvements.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("SAI_Date_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			console.log("Date : " + oElement.value);
			oLAY_Mouvements.members.oObj.setEffectif(oElement.value);
		}

		oElement = document.getElementById("SAI_Quantite_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			oLAY_Mouvements.members.oObj.setQuantite(parseInt(oElement.value));
		}

		oElement = document.getElementById("SAI_Motifs_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			oLAY_Mouvements.members.oObj.setMotif(oElement.value);
		}

		oElement = document.getElementById("SAI_Operation_Key_Mouvements_" + oLAY_Mouvements.getId());
		if(oElement != null){
			oLAY_Mouvements.members.oObj.setClef_Operation(oElement.value);
		}

		//The right !!!
		oLAY_Mouvements.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Mouvements.members.oObj = oMouvements;
		
	};
	this.myLAY_Mouvements.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Mouvements.setObj(oItem);
		return oLAY_Mouvements.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Mouvements.init = this.init;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){
		if(e != null){
			if(e.detail.oObject != null){
				if(e.detail.oObject.getName() == oLAY_Mouvements.LAY_Mouvements.getName()){
					//remove handler, cause we are no bad boys :)
					oLAY_Mouvements.LAY_Mouvements.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Mouvements.subComponentLoaded);
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					oLAY_Mouvements.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Mouvements, null));
				}
			}
		}
	}
	this.myLAY_Mouvements.subComponentLoaded = this.subComponentLoaded;
}