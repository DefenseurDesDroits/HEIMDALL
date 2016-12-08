/// <reference path="../../lib/PUBLICATIONS/PUBLICATIONS_Fichiers.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Contacts.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Civilites.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Titres.js" />
/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Fichiers = [];

//SAVE_LAY_Fichiers
function SAVE_LAY_Fichiers(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Fichiers, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Fichiers[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Fichiers[nPosition].getObj();

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

//DELETE_LAY_Fichiers
function DELETE_LAY_Fichiers(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Fichiers, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	// //Update the object 
	// ARY_LAY_Fichiers[nPosition].ViewToObject();
	// //get the Item
	// oItem = ARY_LAY_Fichiers[nPosition].members.getObj();

	// //Sad God Sake !!!
	// return oItem.delete(Heimdall.members.user["UserId"], ".");

	alert("Delete NotDevYet : " + sId);
	return true;
}

function LAY_Fichiers(){

	//our super
    this.myLAY_Fichiers = {};
    //hack
    var oLAY_Fichiers = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Fichiers][oObj]The Fichiers object
		oObj : null,
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null,
		///[MEMBER][STring][sPath]Path of the new file
		sPath : ""
    };

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Fichiers.members.sName;
    };
    this.myLAY_Fichiers.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Fichiers.members.sName;
    };
    this.myLAY_Fichiers.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Fichiers.members.oObj;
	};
	this.myLAY_Fichiers.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Fichiers.members.oParent;
	};
	this.myLAY_Fichiers.getParent = this.getParent;

	///[METHOD]Method to get our file path
	///[RETURNS]string, our file path
    this.getPath = function(){
        return oLAY_Fichiers.members.sPath;
    };
    this.myLAY_Fichiers.getName = this.getName;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Fichiers.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Fichiers.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Fichiers.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_Fichiers.setObj = this.setObj;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Fichiers.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Fichiers.setParent = this.setParent;

	///[SECTION]WORKSHOP##############################################
	
	///[METHOD]Method to write the html code
	///[RETURNS]string, the HTML text of the controls
    this.generateHTML = function(){

        //our code
		var sCode = "";
		
		//our count
		var nCount = 0;
		//our iterator
		var nIt = 0;
		//position of the fichier
		var nPosition = 0;
		
		sCode += "<div id=\"" + oLAY_Fichiers.getId() + "\">";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\tVersion : <input id="SAI_Version_' + oLAY_Fichiers.getId() + '" class="SAI_" type="text" name="SAI_Version_' + oLAY_Fichiers.getId() + '" value=""/>';
		sCode += "\t\t<br/>";
		sCode += '\t\tFichier local : <input id="SAI_File_' + oLAY_Fichiers.getId() + '" class="SAI_" type="text" name="SAI_File_' + oLAY_Fichiers.getId() + '" value=""/>';
		sCode += "\t\t<br/>";
		sCode += '\t\tPath : <input id="SAI_Path_' + oLAY_Fichiers.getId() + '" class="SAI_" type="text" name="SAI_Path_' + oLAY_Fichiers.getId() + '" value="" readonly/>';
		sCode += "\t\t<br/>";
		sCode += '\t\tTaille : <input id="SAI_Filesize_' + oLAY_Fichiers.getId() + '" class="SAI_" type="text" name="SAI_Filesize_' + oLAY_Fichiers.getId() + '" value="" readonly/>';
		sCode += "\t\t<br/>";
		sCode += '\t\tChecksum : <input id="SAI_Checksum_' + oLAY_Fichiers.getId() + '" class="SAI_" type="text" name="SAI_Checksum_' + oLAY_Fichiers.getId() + '" value="" readonly/>';

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Fichiers('" + oLAY_Fichiers.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Fichiers('" + oLAY_Fichiers.getId() + "')\">Supprimer</div>" + "\r\n";

		sCode += "\t" + "</form>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Fichiers.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Fichiers.members.oDiv = document.getElementById(oLAY_Fichiers.getId());
        if(oLAY_Fichiers.members.oDiv == null)
            return false;

		//the events you spread
		if(oLAY_Fichiers.getParent() != null){
			//a div ?
			if(oLAY_Fichiers.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Fichiers.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Fichiers.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Fichiers.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Fichiers.generateHTML();

        return oLAY_Fichiers.attach();
    };
    this.myLAY_Fichiers.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Fichiers.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Fichiers.members.oDiv.parentNode.removeChild(oLAY_Fichiers.members.oDiv);
        //nullify the div
        oLAY_Fichiers.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Fichiers.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Fichiers.setName(sDivId);
		//Initialise component
		if(oLAY_Fichiers.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Fichiers, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Fichiers.push(oLAY_Fichiers);
			else
				//change
				ARY_LAY_Fichiers[nPosition] = oLAY_Fichiers;
			
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Fichiers.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Fichiers.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Fichiers, "sName", oLAY_Fichiers.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Fichiers.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
    this.myLAY_Fichiers.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Fichiers.members.oObj == null)
			oLAY_Fichiers.members.oObj = new Fichiers();
			//return false;
			
		oElement = document.getElementById("SAI_Version_" + oLAY_Fichiers.getId());
		if(oElement != null)
			oElement.value = oLAY_Fichiers.members.oObj.getVersion();
		
		oElement = document.getElementById("SAI_Path_" + oLAY_Fichiers.getId());
		if(oElement != null)
			oElement.value = oLAY_Fichiers.members.oObj.getPath();

		oElement = document.getElementById("SAI_Filesize_" + oLAY_Fichiers.getId());
		if(oElement != null)
			oElement.value = oLAY_Fichiers.members.oObj.getFilesize();

		oElement = document.getElementById("SAI_Checksum_" + oLAY_Fichiers.getId());
		if(oElement != null)
			oElement.value = oLAY_Fichiers.members.oObj.getChecksum();

		return true;
	};
	this.myLAY_Fichiers.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the Fichiers
		var oFichiers = oLAY_Fichiers.members.oObj;
		//element 
		var oElement = null;

		oElement = document.getElementById("SAI_Version_" + oLAY_Fichiers.getId());
		if(oElement != null)
			oFichiers.setVersion(oElement.value);

		oElement = document.getElementById("SAI_File_" + oLAY_Fichiers.getId());
		if(oElement != null)
			oLAY_Fichiers.members.sPath = oElement.value;

		// oElement = document.getElementById("SAI_Path_" + oLAY_Fichiers.getId());
		// if(oElement != null)
		// 	oFichiers.setPath(oElement.value);

		//Parano !
		oLAY_Fichiers.members.oObj = oFichiers;
		
	};
	this.myLAY_Fichiers.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Fichiers.setObj(oItem);
		return oLAY_Fichiers.initializeLayout(sDivOwner, sDivId);
	}
	this.myLAY_Fichiers.init = this.init;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){

		if(e != null){
			if(e.detail.oObject != null){
				if(e.detail.oObject.getName() == oLAY_Fichiers.LAY_Contact_Infos.getName()){
					//remove handler, cause we are no bad boys :)
					oLAY_Fichiers.LAY_Contact_Infos.members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_Fichiers.subComponentLoaded);
					//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
					oLAY_Fichiers.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Fichiers, null));
				}
			}
		}
	}
	this.myLAY_Fichiers.subComponentLoaded = this.subComponentLoaded;
}