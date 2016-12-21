/// <reference path="../../lib//STOCKS/STOCKS_Stocks.js" />

/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Stocks = [];

//SAVE_LAY_Stocks
function SAVE_LAY_Stocks(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Stocks, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Stocks[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Stocks[nPosition].getObj();

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

//DELETE_LAY_Stocks
function DELETE_LAY_Stocks(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Stocks, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Stocks[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Stocks[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Stocks(){

	//our super
    this.myLAY_Stocks = {};
    //hack
    var oLAY_Stocks = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Stocks][oObj]The Stocks object
		oObj : null,
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null
    };

	//our right !!!
	this.LAY_Rights = new LAY_Accreditations_Item();

	//Stocks
	//this.LAY_Mouvements = new LAY_LIST_Mouvements();

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Stocks.members.sName;
    };
    this.myLAY_Stocks.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Stocks.members.sName;
    };
    this.myLAY_Stocks.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Stocks.members.oObj;
	};
	this.myLAY_Stocks.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Stocks.members.oParent;
	};
	this.myLAY_Stocks.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Stocks.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Stocks.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Stocks.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Stocks.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Stocks.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Stocks.setParent = this.setParent;

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
		
		sCode += "<div id=\"" + oLAY_Stocks.getId() + "\">";
		
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Stocks.getId() + "\">" + "</div>";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += "";

		sCode += "\t" + "\t" + "<select id=\"COMBO_Locations_" + oLAY_Stocks.getId() + "\">" + "\r\n";
		//get the count
		nCount = Heimdall.members.products.stocks.Locations.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
			//add option
			sCode += "\t" + "\t" + "\t" +"<option value=\"" + Heimdall.members.products.stocks.Locations[nIt].getId_Locations() + "\">" + Heimdall.members.products.stocks.Locations[nIt].getNom() + "</option>" + "\r\n";
			//Next
			nIt++;
		}
		sCode += "\t" + "\t" + "</select>" + "\r\n";

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Stocks('" + oLAY_Stocks.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Stocks('" + oLAY_Stocks.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Stocks.getId() + "\"></div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Stocks.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Stocks.members.oDiv = document.getElementById(oLAY_Stocks.getId());
        if(oLAY_Stocks.members.oDiv == null)
            return false;
		
		//the events you spread
		if(oLAY_Stocks.getParent() != null){
			//a div ?
			if(oLAY_Stocks.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Stocks.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Stocks.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Stocks.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Stocks.generateHTML();

        return oLAY_Stocks.attach();
    };
    this.myLAY_Stocks.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Stocks.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Stocks.members.oDiv.parentNode.removeChild(oLAY_Stocks.members.oDiv);
        //nullify the div
        oLAY_Stocks.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Stocks.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Stocks.setName(sDivId);
		//Initialise component
		if(oLAY_Stocks.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Stocks, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Stocks.push(oLAY_Stocks);
			else
				//change
				ARY_LAY_Stocks[nPosition] = oLAY_Stocks;
			
			//set the object contact
			oLAY_Stocks.LAY_Rights.setObj(oLAY_Stocks.getObj());
			//Accreditation !!!
			oLAY_Stocks.LAY_Rights.init("LAY_Accreditation_" + oLAY_Stocks.getId(), sDivId);
			
			// //event listener !!
			// oLAY_Stocks.LAY_Mouvements.setParent(oLAY_Stocks);
			// //init the contact infos !
			// oLAY_Stocks.LAY_Mouvements.init(HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Stocks.getId(), "FPS_" + sDivId, oLAY_Stocks.getObj());

			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Stocks.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Stocks.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Stocks, "sName", oLAY_Stocks.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Stocks.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Stocks.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Stocks.members.oObj == null)
			oLAY_Stocks.members.oObj = new Stocks();
			//return false;

		oElement = document.getElementById("COMBO_Locations_" + oLAY_Stocks.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.stocks.Locations, "nId_Items", oLAY_Stocks.members.oObj.getId_Locations());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}
		
		//logs
		console.log("LAY_Stocks : ObjToView");

		//oLAY_Stocks.LAY_Mouvements.ObjToView();

		return true;
	};
	this.myLAY_Stocks.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the contact 
		var oStocks = oLAY_Stocks.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("COMBO_Locations_" + oLAY_Stocks.getId());
		if(oElement != null)
			oStocks.setId_Locations(parseInt(Heimdall.members.products.stocks.Locations[oElement.selectedIndex].getId_Locations()));

		///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug && oElement != null){
			console.log("COMBO_Locations value : "  + oElement.selectedIndex);
			console.log("COMBO_Locations ID : "  + Heimdall.members.products.stocks.Locations[oElement.selectedIndex].getId_Locations());
		}
		///[/DEBUG]

		///[DEBUG]Operation time !!!
		if(Heimdall.flags.debug){
			console.log("StocksLAYDIVSave, json : " + "\r\n" + oStocks.exportToJson());
			console.log("user id : " + Heimdall.members.user["UserId"]);
		}
		///[/DEBUG]
		
		//oLAY_Stocks.LAY_Mouvements.ViewToObject();

		//The right !!!
		oLAY_Stocks.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Stocks.members.oObj = oStocks;
		
	};
	this.myLAY_Stocks.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Stocks.setObj(oItem);
		return oLAY_Stocks.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Stocks.init = this.init;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){
		if(e != null){
			if(e.detail.oObject != null){
				if(e.detail.oObject.getName() == oLAY_Stocks.LAY_Mouvements.getName()){
					//remove handler, cause we are no bad boys :)
					oLAY_Stocks.LAY_Mouvements.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Stocks.subComponentLoaded);
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					oLAY_Stocks.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Stocks, null));
				}
			}
		}
	}
	this.myLAY_Stocks.subComponentLoaded = this.subComponentLoaded;
}