


/// <reference path="../lib/CONTACTS_Accreditations.js" />
/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Accreditations_Item = [];

//SAVE_LAY_Accreditations_Item
function SAVE_LAY_Accreditations_Item(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Accreditations_Item, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Accreditations_Item[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Accreditations_Item[nPosition].getObj();

	//Sad God Sake !!!
	return oItem.save(Heimdall.members.user["UserId"], ".");
}

//DELETE_LAY_Accreditations_Item
function DELETE_LAY_Accreditations_Item(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Accreditations_Item, "sName", sId);
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

function LAY_Accreditations_Item(){

	//our super
    this.myLAY_Accreditations_Item = {};
    //hack
    var oLAY_Accreditations_Item = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Accreditations][oObj]The Accreditations object
		oObj : null,
        ///[MEMBER][string][element]The dom element
        oDiv : null
    };

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Accreditations_Item.members.sName;
    };
    this.myLAY_Accreditations_Item.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Accreditations_Item.members.sName;
    };
    this.myLAY_Accreditations_Item.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Accreditations_Item.members.oObj;
	};
	this.myLAY_Accreditations_Item.getObj = this.getObj;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Accreditations_Item.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Accreditations_Item.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Accreditations_Item.members.oObj = oItem;
		//Happy end 
		return true
	}

	///[SECTION]WORKSHOP##############################################
	
	///[METHOD]Method to write the html code
	///[RETURNS]string, the HTML text of the controls
    this.generateHTML = function(){

        //our code
    var sCode = "";
    //our type name
    var sTypeName = "";
    //Accreditations ID
    var nAccreditation = 0;

    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;

	sCode += "<div id=\"Accreditations_Items_" + oLAY_Accreditations_Item.getId() + "\"></div>";

    //get the count
    nCount = Heimdall.members.products.contacts.Accreditations.length;
    //init the iterator
    nIt = 0;
    //loop 
    while(nIt < nCount){
        //get the value
        sTypeName = Heimdall.members.products.contacts.Accreditations[nIt].getNom();
        nAccreditation = Heimdall.members.products.contacts.Accreditations[nIt].getId_Accreditations();
        //write them
        sCode += "<img id=\"Accreditations_" + nAccreditation + "\" src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\" onclick=\"accreditationLAYClick(" + nIt + ")\"/>";
        //next
        nIt++;
    }

    //extension div
    sCode += "<div id=\"Accreditations_Extension\"></div>";

    return sCode;
    };
    this.myLAY_Accreditations_Item.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Accreditations_Item.members.oDiv = document.getElementById(oLAY_Accreditations_Item.getId());
        if(oLAY_Accreditations_Item.members.oDiv == null)
            return false;

        return true;
    };
    this.myLAY_Accreditations_Item.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Accreditations_Item.generateHTML();

        return oLAY_Accreditations_Item.attach();
    };
    this.myLAY_Accreditations_Item.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Accreditations_Item.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Accreditations_Item.members.oDiv.parentNode.removeChild(oLAY_Accreditations_Item.members.oDiv);
        //nullify the div
        oLAY_Accreditations_Item.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Accreditations_Item.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Accreditations_Item.setName(sDivId);
		//Initialise component
		if(oLAY_Accreditations_Item.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Accreditations_Item, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Accreditations_Item.push(oLAY_Accreditations_Item);
			else
				//change
				ARY_LAY_Accreditations_Item[nPosition] = oLAY_Accreditations_Item;
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Accreditations_Item.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Accreditations_Item.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Accreditations_Item, "sName", oLAY_Accreditations_Item.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Accreditations_Item.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
    this.myLAY_Accreditations_Item.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Accreditations_Item.members.oObj == null)
			oLAY_Accreditations_Item.members.oObj = new Items();
			//return false;

		// oElement = document.getElementById("COMBO_Organisation_Types_" + oLAY_Accreditations_Item.getId());
		// if(oElement != null){
		// 	nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Organisation_Types, "nId_Organisation_Types", oLAY_Accreditations_Item.members.oObj.getId_Organisation_Type());
		// 	if(nPosition != POTOURS_FIND_NOTFOUND){
		// 		//Option created in the same order than stored
		// 		oElement.selectedIndex = nPosition;
		// 	}
		// }
			
		// oElement = document.getElementById("SAI_Nom_" + oLAY_Accreditations_Item.getId());
		// if(oElement != null)
		// 	oElement.value = oLAY_Accreditations_Item.members.oObj.getNom();

		return true;
	};
	this.myLAY_Accreditations_Item.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the Accreditations
		var oAccreditations = oLAY_Accreditations_Item.members.oObj;
		//element 
		var oElement = null;

		// oElement = document.getElementById("COMBO_Organisation_Types_" + oLAY_Accreditations_Item.getId());
		// if(oElement != null)
		// 	oAccreditations.setId_Organisation_Type(parseInt(Heimdall.members.products.contacts.Organisation_Types[oElement.selectedIndex].getId_Organisation_Types()));

		// oElement = document.getElementById("SAI_Nom_" + oLAY_Accreditations_Item.getId());
		// if(oElement != null)
		// 	oAccreditations.setNom(oElement.value);
		
		// //Parano !
		// oLAY_Accreditations_Item.members.oObj = oAccreditations;
		
	};
	this.myLAY_Accreditations_Item.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Accreditations_Item.setObj(oItem);
		return oLAY_Accreditations_Item.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Accreditations_Item.init = this.init;
}