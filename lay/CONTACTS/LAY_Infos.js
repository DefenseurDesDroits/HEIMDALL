

/// <reference path="../lib/CONTACTS_Infos.js" />

/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Infos = [];

//SAVE_LAY_Infos
function SAVE_LAY_Infos(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Infos, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Infos[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Infos[nPosition].getObj();

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

//DELETE_LAY_Infos
function DELETE_LAY_Infos(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Infos, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Infos[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Infos[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Infos(){

	//our super
    this.myLAY_Infos = {};
    //hack
    var oLAY_Infos = this;

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
        return oLAY_Infos.members.sName;
    };
    this.myLAY_Infos.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Infos.members.sName;
    };
    this.myLAY_Infos.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Infos.members.oObj;
	};
	this.myLAY_Infos.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Infos.members.oParent;
	};
	this.myLAY_Infos.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Infos.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Infos.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Infos.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Infos.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_)]LAY_), our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Infos.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Infos.setParent = this.setParent;

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
		
		sCode += "<div id=\"" + oLAY_Infos.getId() + "\">" + "\r\n";
		
		 ///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug){
			sCode += "\t" + "<div id=\"LAB_Id_" + oLAY_Infos.getId() + "\"></div>" + "\r\n";
		}
		///[/DEBUG]

		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Infos.getId() + "\"></div>" + "\r\n";

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Infos('" + oLAY_Infos.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Infos('" + oLAY_Infos.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += "\t" + '<input id="SAI_Adr1_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Adr1_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";
		sCode += "\t" + '<input id="SAI_Adr2_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Adr2_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";
		sCode += "\t" + '<input id="SAI_Adr3_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Adr3_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";

		sCode += "\t" + "<br/>" + "\r\n";
		sCode += "\t" + "<span>CP</span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_CP_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_CP_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";    

		sCode += "\t" + "<br/>" + "\r\n";
		sCode += "\t" + "<span>Cedex</span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_Cedex_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Cedex_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";

		sCode += "\t" + "<br/>" + "\r\n";
		sCode += "\t" + "<span>Ville</span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_Ville_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Ville_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";
		
		sCode += "\t" + "<span>Pays</span>" + "\r\n";
		sCode += "\t" + "\t" + "<select id=\"COMBO_Pays_" + oLAY_Infos.getId() + "\">" + "\r\n";
		//get the count
		nCount = Heimdall.members.products.contacts.Pays.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
			//add option
			sCode += "\t" + "\t" + "\t" +"<option value=\"" + Heimdall.members.products.contacts.Pays[nIt].getId_Pays() + "\">" + Heimdall.members.products.contacts.Pays[nIt].getNom() + "</option>" + "\r\n";
			//Next
			nIt++;
		}
		sCode += "\t" + "\t" + "</select>" + "\r\n";

		sCode += "\t" + "<br/>" + "\r\n";
		sCode += "\t" + "<span>Site</span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_Site_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Site_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";
		sCode += "\t" + "<br/>";

		sCode += "\t" + "<br/>";
		
		sCode += "\t" + '<div>Adresse 1</div>' + "\r\n";
		sCode += "\t" + "<span>Téléphone 1 </span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_Tel1_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Tel1_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";
		sCode += "\t" + "<span>Courriel 1 </span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_Courriel1_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Courriel1_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";

		sCode += "\t" + '<div>Adresse 2</div>' + "\r\n";
		sCode += "\t" + "<span>Téléphone 2 </span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_Tel2_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Tel2_' + oLAY_Infos.getId() + '" value="' + "" + '"/>' + "\r\n";
		sCode += "\t" + "<span>Courriel 2 </span>" + "\r\n";
		sCode += "\t" + '<input id="SAI_Courriel2_' + oLAY_Infos.getId() + '" class="SAI_" type="text" name="SAI_Courriel2_' + oLAY_Infos.getId() + '" value="' +"" + '"/>' + "\r\n";

		sCode += "\t" + "</form>" + "\r\n";

		sCode += "</div>";
		//console.log(sCode);
		//return the code
		return sCode;
    };
    this.myLAY_Infos.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Infos.members.oDiv = document.getElementById(oLAY_Infos.getId());
        if(oLAY_Infos.members.oDiv == null)
            return false;
		
		//the events you spread
		if(oLAY_Infos.getParent() != null){
			//a div ?
			if(oLAY_Infos.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Infos.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Infos.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Infos.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Infos.generateHTML();

        return oLAY_Infos.attach();
    };
    this.myLAY_Infos.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Infos.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Infos.members.oDiv.parentNode.removeChild(oLAY_Infos.members.oDiv);
        //nullify the div
        oLAY_Infos.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Infos.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Infos.setName(sDivId);
		//Initialise component
		if(oLAY_Infos.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Infos, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Infos.push(oLAY_Infos);
			else
				//change
				ARY_LAY_Infos[nPosition] = oLAY_Infos;
			
			//set the object contact
			oLAY_Infos.LAY_Rights.setObj(oLAY_Infos.getObj());
			//Accreditation !!!
			oLAY_Infos.LAY_Rights.init("LAY_Accreditation_" + oLAY_Infos.getId(), sDivId);
			
			//write
			console.log("Contact_Info" + oLAY_Infos.getId());
			//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
			oLAY_Infos.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Infos, null));

			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Infos.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Infos.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Infos, "sName", oLAY_Infos.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Infos.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Infos.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Infos.members.oObj == null)
			oLAY_Infos.members.oObj = new Infos();
			//return false;

		 ///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug){
			oElement = document.getElementById("LAB_Id_" + oLAY_Infos.getId());
			if(oElement != null)
				oElement.innerHTML= oLAY_Infos.members.oObj.getId_Items();
		}
		///[/DEBUG]

		//Adresse 1 to 3
		oElement = document.getElementById("SAI_Adr1_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getAdr1();
		oElement = document.getElementById("SAI_Adr2_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getAdr2();
		oElement = document.getElementById("SAI_Adr3_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getAdr3();
		
		//CP
		oElement = document.getElementById("SAI_CP_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getCP();

		//Cedex
		oElement = document.getElementById("SAI_Cedex_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getCedex();

		//Ville
		oElement = document.getElementById("SAI_Ville_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getVille();
		
		//our country
		oElement = document.getElementById("COMBO_Pays_" + oLAY_Infos.getId());
		if(oElement != null){
			nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Pays, "nId_Pays", oLAY_Infos.members.oObj.getId_Pays());
			if(nPosition != POTOURS_FIND_NOTFOUND){
				//Option created in the same order than stored
				oElement.selectedIndex = nPosition;
			}
		}

		//Site
		oElement = document.getElementById("SAI_Site_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getSite();
		
		//Adr1
		oElement = document.getElementById("SAI_Tel1_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getTelephone1();
		oElement = document.getElementById("SAI_Courriel1_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getCourriel1();

		//Adr2
		oElement = document.getElementById("SAI_Tel2_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getTelephone2();
		oElement = document.getElementById("SAI_Courriel2_" + oLAY_Infos.getId());
		if(oElement != null)
			oElement.value = oLAY_Infos.members.oObj.getCourriel2();
		console.log("DONE !!!!! " + oLAY_Infos.members.oObj.exportToJson());
		return true;
	};
	this.myLAY_Infos.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the contact 
		var oInfos = oLAY_Infos.members.oObj;
		//element 
		var oElement = null;

		//our adr 1 to 3
		oElement = document.getElementById("SAI_Adr1_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setAdr1(oElement.value);
		oElement = document.getElementById("SAI_Adr2_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setAdr2(oElement.value);
		oElement = document.getElementById("SAI_Adr3_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setAdr3(oElement.value);

		//CP
		oElement = document.getElementById("SAI_CP_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setCP(oElement.value);

		//Cedex
		oElement = document.getElementById("SAI_Cedex_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setCedex(oElement.value);

		//Ville
		oElement = document.getElementById("SAI_Ville_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setVille(oElement.value);
		
		//Pays
		oElement = document.getElementById("COMBO_Pays_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setId_Pays(parseInt(Heimdall.members.products.contacts.Pays[oElement.selectedIndex].getId_Pays()));
		
		//Site
		oElement = document.getElementById("SAI_Site_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setSite(oElement.value);

		//Adr 1
		oElement = document.getElementById("SAI_Tel1_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setTelephone1(oElement.value);
		oElement = document.getElementById("SAI_Courriel1_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setCourriel1(oElement.value);
		
		//Adr 2
		oElement = document.getElementById("SAI_Tel2_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setTelephone2(oElement.value);
		oElement = document.getElementById("SAI_Courriel2_" + oLAY_Infos.getId());
		if(oElement != null)
			oInfos.setCourriel2(oElement.value);
		
		//The right !!!
		oLAY_Infos.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Infos.members.oObj = oInfos;
		
	};
	this.myLAY_Infos.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Infos.setObj(oItem);
		return oLAY_Infos.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Infos.init = this.init;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){

		if(e != null){
			if(e.detail.oObject != null){
				/* Nah ! */
			}
		}
	}
	this.myLAY_Infos.subComponentLoaded = this.subComponentLoaded;
}

