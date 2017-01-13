/// <reference path="../../lib//PUBLICATIONS/PUBLICATIONS_Publications.js" />

/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Publications = [];

//
const HEIMDALL_LAY_FILES_EXTENDED_ID = "LAY_LIST_FILES_";
//
//const HEIMDALL_LAY_STOCKS_EXTENDED_ID = "LAY_LIST_STOCKS_";

//SAVE_LAY_Publications
function SAVE_LAY_Publications(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Publications, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Publications[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Publications[nPosition].getObj();

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

//DELETE_LAY_Publications
function DELETE_LAY_Publications(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Publications, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Publications[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Publications[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Publications(){

	//our super
    this.myLAY_Publications = {};
    //hack
    var oLAY_Publications = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Publications][oObj]The Publications object
		oObj : null,
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null,
		//[MEMBER][Boolean][bStock]Did we want to see the Stock ?
		bStock : false,
		//
		bFilesLoaded : true,
		//
		bStockLoaded : true,
		//
		nFlags : 0
    };

	//our right !!!
	this.LAY_Rights = new LAY_Accreditations_Item();

	//Linked files
	this.LAY_Fichiers = new LAY_LIST_Fichiers();
	//Linkes Stocks
	this.LAY_Stocks = new LAY_LIST_Stocks();

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Publications.members.sName;
    };
    this.myLAY_Publications.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Publications.members.sName;
    };
    this.myLAY_Publications.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Publications.members.oObj;
	};
	this.myLAY_Publications.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Publications.members.oParent;
	};
	this.myLAY_Publications.getParent = this.getParent;

	this.isStockShowed = function(){
		return oLAY_Publications.members.bStock;
	};
	this.myLAY_Publications.isStockShowed = this.isStockShowed;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Publications.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Publications.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Publications.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Publications.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Publications.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Publications.setParent = this.setParent;

	this.setStockShowed = function(bValue){
		if(bValue == null)
			return false;
		oLAY_Publications.members.bStock = bValue;
		return true;
	};
	this.myLAY_Publications.setStockShowed = this.setStockShowed;

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
		
		sCode += "<div id=\"" + oLAY_Publications.getId() + "\">";
		
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Publications.getId() + "\">" + "</div>";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\t<input id="SAI_Nom_' + oLAY_Publications.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Publications.getId() + '" value=""/>';
		sCode += "<br\>";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Domaines_" + oLAY_Publications.getId() + "\">" + "\r\n";
		//get the count
		nCount = Heimdall.members.products.publications.Domaines.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
			//add option
			sCode += "\t" + "\t" + "\t" +"<option value=\"" + Heimdall.members.products.publications.Domaines[nIt].getId_Domaines() + "\">" + Heimdall.members.products.publications.Domaines[nIt].getNom() + "</option>" + "\r\n";
			//Next
			nIt++;
		}
		sCode += "\t" + "\t" + "</select>" + "\r\n";

		sCode += '\t\t<input id="CHK_Dematerialisee_' + oLAY_Publications.getId() + '" class="SAI_" type="checkbox" name="CHK_Dematerialisee_' + oLAY_Publications.getId() + '" value=""/>';
		sCode += "Dématerialisée";

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Publications('" + oLAY_Publications.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Publications('" + oLAY_Publications.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_FILES_EXTENDED_ID + oLAY_Publications.getId() + "\"></div>";
		//sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Publications.getId() + "\"></div>";
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_STOCKS_EXTENDED_ID + oLAY_Publications.getId() + "\"></div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Publications.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Publications.members.oDiv = document.getElementById(oLAY_Publications.getId());
        if(oLAY_Publications.members.oDiv == null)
            return false;
		
		//the events you spread
		if(oLAY_Publications.getParent() != null){
			//a div ?
			if(oLAY_Publications.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Publications.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Publications.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Publications.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Publications.generateHTML();

        return oLAY_Publications.attach();
    };
    this.myLAY_Publications.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Publications.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Publications.members.oDiv.parentNode.removeChild(oLAY_Publications.members.oDiv);
        //nullify the div
        oLAY_Publications.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Publications.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Publications.setName(sDivId);
		//Initialise component
		if(oLAY_Publications.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Publications, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Publications.push(oLAY_Publications);
			else
				//change
				ARY_LAY_Publications[nPosition] = oLAY_Publications;
			
			//set the object contact
			oLAY_Publications.LAY_Rights.setObj(oLAY_Publications.getObj());
			//Accreditation !!!
			oLAY_Publications.LAY_Rights.init("LAY_Accreditation_" + oLAY_Publications.getId(), sDivId);
			
			//
			oLAY_Publications.members.bFilesLoaded = false;
			oLAY_Publications.members.bStockLoaded = false;
			oLAY_Publications.members.nFlags = 0;

			//event listener !!
			oLAY_Publications.LAY_Fichiers.setParent(oLAY_Publications);
			//init the contact infos !
			oLAY_Publications.LAY_Fichiers.init(HEIMDALL_LAY_FILES_EXTENDED_ID + oLAY_Publications.getId(), "FPS_" + sDivId, oLAY_Publications.getObj());
			//oLAY_Publications.LAY_Fichiers.init(HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Publications.getId(), "FPS_" + sDivId, oLAY_Publications.getObj());

			console.log("LAY_Publication : initializeLayout, LAY_Fichiers");

			if(oLAY_Publications.isStockShowed()){
				//event listener !!
				oLAY_Publications.LAY_Stocks.setParent(oLAY_Publications);
				//init the contact infos !
				oLAY_Publications.LAY_Stocks.init(HEIMDALL_LAY_STOCKS_EXTENDED_ID + oLAY_Publications.getId(), "SPS_" + sDivId, oLAY_Publications.getObj());
				//
				console.log("LAY_Publication : initializeLayout, LAY_Stocks");
			}

			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Publications.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Publications.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Publications, "sName", oLAY_Publications.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Publications.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Publications.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Publications.members.oObj == null)
			oLAY_Publications.members.oObj = new Publications();
			//return false;

		oElement = document.getElementById("COMBO_Domaines_" + oLAY_Publications.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.publications.Domaines, "nId_Items", oLAY_Publications.members.oObj.getId_Domaines());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Publications.getId());
		if(oElement != null)
			oElement.value = oLAY_Publications.members.oObj.getNom();

		oElement = document.getElementById("CHK_Dematerialisee_" + oLAY_Publications.getId());
		if(oElement != null)
			oElement.value = oLAY_Publications.members.oObj.getDematerialisee();
		
		//logs
		console.log("LAY_Publications : ObjToView");

		//And the linked files ?
		oLAY_Publications.LAY_Fichiers.ObjToView();
		//And the linked stocks ?
		if(oLAY_Publications.isStockShowed())
			oLAY_Publications.LAY_Stocks.ObjToView();

		return true;
	};
	this.myLAY_Publications.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the contact 
		var oPublications = oLAY_Publications.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("COMBO_Domaines_" + oLAY_Publications.getId());
		if(oElement != null)
			oPublications.setId_Domaines(parseInt(Heimdall.members.products.publications.Domaines[oElement.selectedIndex].getId_Domaines()));

		///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug && oElement != null){
			console.log("COMBO_Domaines value : "  + oElement.selectedIndex);
			console.log("COMBO_Domaines ID : "  + Heimdall.members.products.publications.Domaines[oElement.selectedIndex].getId_Domaines());
		}
		///[/DEBUG]

		oElement = document.getElementById("SAI_Nom_" + oLAY_Publications.getId());
		if(oElement != null)
			oPublications.setNom(oElement.value);

		oElement = document.getElementById("CHK_Dematerialisee_" + oLAY_Publications.getId());
		if(oElement != null)
			oPublications.setDematerialisee(oElement.value);

		///[DEBUG]Operation time !!!
		if(Heimdall.flags.debug){
			console.log("PublicationsLAYDIVSave, json : " + "\r\n" + oPublications.exportToJson());
			console.log("user id : " + Heimdall.members.user["UserId"]);
		}
		///[/DEBUG]
		
		//our linked files
		oLAY_Publications.LAY_Fichiers.ViewToObject();
		//And the linked stocks ?
		if(oLAY_Publications.isStockShowed())
			oLAY_Publications.LAY_Stocks.ViewToObject();

		//The right !!!
		oLAY_Publications.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Publications.members.oObj = oPublications;
		
	};
	this.myLAY_Publications.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Publications.setObj(oItem);
		return oLAY_Publications.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Publications.init = this.init;

	this.spreadMsg = function(sTitle = ""){

		console.log("LAY_Publication : spreadMsg, " + sTitle);

		if(oLAY_Publications.isStockShowed()){
			if(! (oLAY_Publications.members.bFilesLoaded && oLAY_Publications.members.bStockLoaded) )
				return false;
		}
		else{
			if(!oLAY_Publications.members.bFilesLoaded)
				return false;
		}

		console.log("LAY_Publication : spreadMsg => Done !!!");

		//Hall hail to the King !!!
		oLAY_Publications.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Publications, null));
		//Good End
		return true;
	}
	this.myLAY_Publications.spreadMsg = this.spreadMsg;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){

		if(e != null){
			if(e.detail.oObject != null){
				if(e.detail.oObject.getName() == oLAY_Publications.LAY_Fichiers.getName()){
					//remove handler, cause we are no bad boys :)
					oLAY_Publications.LAY_Fichiers.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Publications.subComponentLoaded);
					//loaded
					oLAY_Publications.members.bFilesLoaded = true;
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					//oLAY_Publications.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Publications, null));
					oLAY_Publications.spreadMsg("FilesLoaded");
				}
				else if(e.detail.oObject.getName() == oLAY_Publications.LAY_Stocks.getName()){
					//remove handler, cause we are no bad boys :)
					//oLAY_Publications.LAY_Stocks.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Publications.subComponentLoaded);
					oLAY_Publications.LAY_Stocks.members.oDiv.removeEventListener(Heimdall.Events.loaded_Stock, oLAY_Publications.subComponentLoaded);

					oLAY_Publications.members.bStockLoaded = true;
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					oLAY_Publications.spreadMsg("StockLoaded");
				}
				else{
					oLAY_Publications.spreadMsg("What ??? " + e.detail.oObject.getName());
				}
			}
		}
	}
	this.myLAY_Publications.subComponentLoaded = this.subComponentLoaded;

	this.subComponentStockLoaded = function(e){
		oLAY_Publications.spreadMsg("Trollolo");
		oLAY_Publications.subComponentLoaded(e);
	}
	this.myLAY_Publications.subComponentStockLoad = this.subComponentStockLoad;

}