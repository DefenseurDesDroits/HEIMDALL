

/// <reference path="../../lib/CONTACTS/CONTACTS_Segments.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Contacts.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Civilites.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Titres.js" />
/// <reference path="../../lib/Potours_List.js" />
/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Segments = [];

//SAVE_LAY_Segments
function SAVE_LAY_Segments(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Segments, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Segments[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Segments[nPosition].getObj();

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

//DELETE_LAY_Segments
function DELETE_LAY_Segments(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Segments, "sName", sId);
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

function SEARCH_CONTACTS_LAY_Segments(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	
	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Segments, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	//Update the object 
	ARY_LAY_Segments[nPosition].searchFutureContacts();
	
	//Sad God Sake !!!
	return true;
}

function SEARCH_GRP_LAY_SegmentsOut(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Segments, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Segments[nPosition].loadSegmentsOut();

	//Sad God Sake !!!
	return true;
}

function LAY_Segments(){

	//our super
    this.myLAY_Segments = {};
    //hack
    var oLAY_Segments = this;

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

	//our LIST
	this.LIST_Contacts = new Potours_List();
	this.LIST_Contacts.onDblClick = function(sTag){

		//our position
		var nPosition = 0;
		//the array of the items
		var ary_ = oLAY_Segments.LIST_Contacts.getItems();

		//get the position
		nPosition = findInObjLst(ary_, "Tag", sTag);

		//In ?
		if(nPosition == POTOURS_FIND_NOTFOUND)
			return false;

		if(!oLAY_Segments.LIST_Contacts.deleteLayout())
			console.log("LIST_Contacts.onDblClick => What !!!");

		ary_.splice(nPosition, 1);

		if(!oLAY_Segments.LIST_Contacts.setItems(ary_))
			console.log("LIST_Contacts.onDblClick => What 2 !!!");
		
		oLAY_Segments.LIST_Contacts.init("LAY_Current_Members_" + oLAY_Segments.getId(), "GrpContacts");

		return true;
	};
	this.LIST_Futures_Contacts = new Potours_List();
	this.LIST_Futures_Contacts.onDblClick = function(sTag){

		//our position
		var nPosition = 0;
		//the array of the items
		var ary_ = oLAY_Segments.LIST_Contacts.getItems();
		var ary_F = oLAY_Segments.LIST_Futures_Contacts.getItems();

		//get the position
		nPosition = findInObjLst(ary_F, "Tag", sTag);

		//In ?
		if(nPosition == POTOURS_FIND_NOTFOUND)
			return false;

		//Crew section***********************************

		if(!oLAY_Segments.LIST_Contacts.deleteLayout())
			console.log("LIST_Futures_Contacts.onDblClick => What !!!");

		//Add it to the member crew
		ary_.push(ary_F[nPosition]);

		if(!oLAY_Segments.LIST_Contacts.setItems(ary_))
			console.log("LIST_Futures_Contacts.onDblClick => What 2 !!!");
		
		oLAY_Segments.LIST_Contacts.init("LAY_Current_Members_" + oLAY_Segments.getId(), "GrpContacts");
		
		//Others section**********************************

		if(!oLAY_Segments.LIST_Futures_Contacts.deleteLayout())
			console.log("LIST_Futures_Contacts.onDblClick => What !!!");

		//remove it from the non member crew
		ary_F.splice(nPosition, 1);

		if(!oLAY_Segments.LIST_Futures_Contacts.setItems(ary_F))
			console.log("LIST_Futures_Contacts.onDblClick => What 2 !!!");
		
		oLAY_Segments.LIST_Futures_Contacts.init("LAY_Futures_Contacts_" + oLAY_Segments.getId(), "GrpFuturesContacts");
	};

	//our right !!!
	this.LAY_Rights = new LAY_Accreditations_Item();

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Segments.members.sName;
    };
    this.myLAY_Segments.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Segments.members.sName;
    };
    this.myLAY_Segments.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]Object, our Object
	this.getObj = function(){
		return oLAY_Segments.members.oObj;
	};
	this.myLAY_Segments.getObj = this.getObj;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Segments.members.oParent;
	};
	this.myLAY_Segments.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Segments.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Segments.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Segments.members.oObj = oItem;
		//Happy end 
		return true
	}

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_)]LAY_), our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Segments.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Segments.setParent = this.setParent;

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
		
		sCode += "<div id=\"" + oLAY_Segments.getId() + "\">";
		
		//acceditation
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Segments.getId() + "\">" + "</div>";
		
		//Segments field
		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\t<input id="SAI_Nom_' + oLAY_Segments.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Segments.getId() + '" size=\"50\" value=""/>';
		sCode += "<br/>";
		sCode += "PARAMETERS";
		sCode += "<br/>";
		sCode += '\t\t<textarea id="TXT_Parameters_' + oLAY_Segments.getId() + '" class="SAI_" type="text" name="TXT_Parameters_' + oLAY_Segments.getId() + '" cols=\"50\" value=""></textarea>';

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Segments('" + oLAY_Segments.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Segments('" + oLAY_Segments.getId() + "')\">Supprimer</div>" + "\r\n";
		
		sCode += "\t" + "</form>";
		
		//Our user search
		sCode += "\t" + "<div id=\"LAY_Members_" + oLAY_Segments.getId() + "\"></div>";
		sCode += "\t" + "\t" + "<div id=\"LAB_Current_Members_" + oLAY_Segments.getId() + "\">Membres actuels</div>";
		sCode += "\t" + "\t" + "<div id=\"LAY_Current_Members_" + oLAY_Segments.getId() + "\"></div>";
		sCode += "\t" + "\t" + "<div id=\"LAY_Resarch_Members_" + oLAY_Segments.getId() + "\">Recherche de membres</div>";
		sCode += "\t" + "\t" + '<input id="SAI_Contacts_' + oLAY_Segments.getId() + '" class="SAI_" type="text" name="SAI_Contacts_' + oLAY_Segments.getId() + '" value=""/>';
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SEARCH_CONTACTS_LAY_Segments('" + oLAY_Segments.getId() + "')\">Q</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div id=\"LAY_Futures_Contacts_" + oLAY_Segments.getId() + "\"></div>";
		sCode += "\t" + "</div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Segments.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Segments.members.oDiv = document.getElementById(oLAY_Segments.getId());
        if(oLAY_Segments.members.oDiv == null)
            return false;

		//the events you spread
		if(oLAY_Segments.getParent() != null){
			//a div ?
			if(oLAY_Segments.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Segments.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Segments.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Segments.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Segments.generateHTML();

        return oLAY_Segments.attach();
    };
    this.myLAY_Segments.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Segments.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Segments.members.oDiv.parentNode.removeChild(oLAY_Segments.members.oDiv);
        //nullify the div
        oLAY_Segments.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Segments.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Segments.setName(sDivId);
		//Initialise component
		if(oLAY_Segments.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Segments, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Segments.push(oLAY_Segments);
			else
				//change
				ARY_LAY_Segments[nPosition] = oLAY_Segments;

			//set the object contact
			oLAY_Segments.LAY_Rights.setObj(oLAY_Segments.getObj());
			//Accreditation !!!
			oLAY_Segments.LAY_Rights.init("LAY_Accreditation_" + oLAY_Segments.getId(), sDivId);
			
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Segments.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Segments.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Segments, "sName", oLAY_Segments.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Segments.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
    this.myLAY_Segments.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Segments.members.oObj == null)
			oLAY_Segments.members.oObj = new Segments();
			//return false;
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Segments.getId());
		if(oElement != null)
			oElement.value = oLAY_Segments.members.oObj.getNom();

		oElement = document.getElementById("TXT_Parameters_" + oLAY_Segments.getId());
		if(oElement != null)
			oElement.value = oLAY_Segments.members.oObj.getParametres();

		oLAY_Segments.loadContacts();
		
		return true;
	};
	this.myLAY_Segments.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the Organisations
		var oSegments = oLAY_Segments.members.oObj;
		//element 
		var oElement = null;

		//the array of the items
		var ary_ = oLAY_Segments.LIST_Contacts.getItems();
		//array of {uid, until}
		var ary_Result = [];

		//our count
		var nCount = 0;
		//our iterrator 
		var nLine = 0;

		//our PARAMETERS
		var sParameters = "";

		//Change the Name !!!*******************************************

		oElement = document.getElementById("SAI_Nom_" + oLAY_Segments.getId());
		if(oElement != null){
			oSegments.setNom(oElement.value);
		}

		oElement = document.getElementById("TXT_Parameters_" + oLAY_Segments.getId());
		if(oElement != null){
			//get the parmeters
			sParameters = oElement.value;
			if(sParameters == "")
				sParameters = "{}";

			//is the parameters all right ?
			try {
				JSON.parse(sParameters);
			} catch (error) {
				sParameters = "{}";
			}

			oSegments.setParametres(sParameters);
			//oSegments.setParametres(oElement.value);
		}
		
		//Change the Json !!!*******************************************

		//get the count 
		nCount = ary_.length;
		//start the loop 
		while(nLine < nCount){
			//
			ary_Result.push({uid:ary_[nLine].Tag, until : ""});
			//console.log("ViewToObject => " + ary_[nLine].Tag);
			//Next
			nLine++;
		}
		//change the Json 
		oSegments.setId_Items_Json(JSON.stringify(ary_Result));
		
		//The right !!!
		oLAY_Segments.LAY_Rights.ViewToObject();
		//Parano !
		oLAY_Segments.members.oObj = oSegments;

		console.log("ViewToObject => " + oSegments.getId_Items_Json());
		
	};
	this.myLAY_Segments.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Segments.setObj(oItem);
		return oLAY_Segments.initializeLayout(sDivOwner, sDivId);
	};
	this.myLAY_Segments.init = this.init;

	///SEPCIAL

	this.responseList = function(LIST_, sText, sIDParent, sIdElement){
		//our Segments
		var oContacts = null;

		//our count
		var nCount = 0;
		//our iterator
		var nLine = 0;

		//our text to plots
		var sTitle = "";

		//array to plots
		var ary_ = [];
		//
		var ary_Items = [];

		if(sText == "")
			return false;

		//get the array
		ary_ = JSON.parse(sText);
		//
		nCount = ary_.length;
		//
		while(nLine < nCount){
			//New Segments
			oContacts = new Contacts();
			//load 
			oContacts.loadFromArray(ary_[nLine]);
			//do the text 
			sTitle = oContacts.getPrenom() + " " + oContacts.getNom();
			//add the item
			ary_Items.push({Text : sTitle, Tag : oContacts.getId_Contacts()});
			console.log("Response : " + oContacts.getId_Contacts());
			//Next
			nLine++;
		}

		LIST_.deleteLayout();

		LIST_.setItems(ary_Items);

		LIST_.init(sIDParent, sIdElement);

		return true;
	};

	this.loadContacts = function(){

		//get the Organisations
		var oSegments = oLAY_Segments.members.oObj;

		//our count
		var nCount = 0;
		//our iterator
		var nLine = 0;

		//The code 
		var sCode = "";

		//our Json array 
		var ary_oItems = [];

		//a item 
		var oItem = null;

		//Our request object
		var oReq = new XMLHttpRequest();

		//have we an object ?
		if(oSegments == null)
			return false;

		//have stuff to plot ?
		if(oSegments.getId_Items_Json() == "")
			return oLAY_Segments.responseContacts("");
		
		try {
			//get the array
			ary_oItems = JSON.parse(oSegments.getId_Items_Json());
			console.log("loadContacts => TRY PASS!!!");
		} catch (error) {
			ary_oItems = [];
			console.log("loadContacts => CATCH ! ");
		}
		//get the array
		//ary_oItems = JSON.parse(oSegments.getId_Items_Json());
		//get the count
		nCount = ary_oItems.length;
		//start the loop
		while(nLine < nCount){
			//If done
			if(sCode != "")
				sCode += ", ";
			//
			sCode += ary_oItems[nLine]["uid"];
			console.log("loadContacts => " + ary_oItems[nLine]["uid"]);
			//Next
			nLine++;
		}

		//have stuff to plot ?
		if(sCode == "")
			return oLAY_Segments.responseContacts("");

		//Define the function
		oReq.onreadystatechange = function(){

			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				//Response
				oLAY_Segments.responseContacts(oReq.responseText);
			}
			
		};

		//prepare the query*********************
		//check the open
		oReq.open("POST", "php/queryManager.php", true);
		//oReq.open("POST", "php/queryManager_Contacts.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + "" + "&Action=contacts_contacts&Args=" + JSON.stringify([{Method : "COND_IN_LIST", Names : ["xxx.contacts.Id_Contacts"], Value : sCode} ]) ); 
		//Return the job !
		return true;
	};

	this.responseContacts = function(sText){
		//call the common function
		return oLAY_Segments.responseList(oLAY_Segments.LIST_Contacts, sText, "LAY_Current_Members_" + oLAY_Segments.getId(), "GrpContacts");
	};

	this.searchFutureContacts = function(){
		//get the Organisations
		var oSegments = oLAY_Segments.members.oObj;

		//our count
		var nCount = 0;
		//our iterator
		var nLine = 0;

		//The code 
		var sCode = "";

		//our Json array 
		var ary_oItems = [];

		//an item 
		var oItem = null;

		//an element 
		var oElement = null;

		//Our request object
		var oReq = new XMLHttpRequest();

		oElement = document.getElementById("SAI_Contacts_" + oLAY_Segments.getId());
		if(oElement == null)
			return false;

		//have we an object ?
		if(oSegments == null)
			return false;

		//have stuff to plot ?
		if(oSegments.getId_Items_Json() != ""){

			try {
				//get the array
				ary_oItems = JSON.parse(oSegments.getId_Items_Json());
			} catch (error) {
				ary_oItems = [];
			}

			//get the count
			nCount = ary_oItems.length;
			//start the loop
			while(nLine < nCount){
				//If done
				if(sCode != "")
					sCode += ", ";
				//
				sCode += ary_oItems[nLine]["uid"];
				//Next
				nLine++;
			}
		}

		//Define the function
		oReq.onreadystatechange = function(){

			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				//Response
				oLAY_Segments.responseFutureContacts(oReq.responseText);
			}
			
		};

		console.log("Element value : " + oElement.value);

		//prepare the query*********************
		//check the open
		oReq.open("POST", "php/queryManager.php", true);
		//oReq.open("POST", "php/queryManager_Contacts.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + "" + "&Action=contacts_contacts&Args=" + JSON.stringify([
			{Method : "COND_NIN_LIST", Names : ["xxx.contacts.Id_Contacts"], Value : sCode},
			{Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sNom", "sPrenom"], Value : oElement.value} 
		] ) ); 
		//Return the job !
		return true;
	};

	this.responseFutureContacts = function(sText){
		//call the common function
		return oLAY_Segments.responseList(oLAY_Segments.LIST_Futures_Contacts, sText, "LAY_Futures_Contacts_" + oLAY_Segments.getId(), "GrpFuturesContacts");
	};

}