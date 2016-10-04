

/// <reference path="../lib/CONTACTS_Groups.js" />
/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_List.js" />
/// <reference path="../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_Groups = [];

//SAVE_LAY_Groups
function SAVE_LAY_Groups(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Groups, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Groups[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_Groups[nPosition].getObj();

	//Sad God Sake !!!
	return oItem.save(Heimdall.members.user["UserId"], ".");
}

//DELETE_LAY_Groups
function DELETE_LAY_Groups(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Groups, "sName", sId);
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

function SEARCH_USERS_LAY_Groups(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Groups, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_Groups[nPosition].searchFutureUsers();

	//Sad God Sake !!!
	return true;
}

function LAY_Groups(){

	//our super
    this.myLAY_Groups = {};
    //hack
    var oLAY_Groups = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
		///[MEMBER][Organisations][oObj]The Organisations object
		oObj : null,
        ///[MEMBER][string][element]The dom element
        oDiv : null
    };

	//our LIST
	this.LIST_Users = new Potours_List();
	this.LIST_Users.onDblClick = function(sTag){

		//our position
		var nPosition = 0;
		//the array of the items
		var ary_ = oLAY_Groups.LIST_Users.getItems();

		//get the position
		nPosition = findInObjLst(ary_, "Tag", sTag);

		//In ?
		if(nPosition == POTOURS_FIND_NOTFOUND)
			return false;

		if(!oLAY_Groups.LIST_Users.deleteLayout())
			console.log("LIST_Users.onDblClick => What !!!");

		ary_.splice(nPosition, 1);

		if(!oLAY_Groups.LIST_Users.setItems(ary_))
			console.log("LIST_Users.onDblClick => What 2 !!!");
		
		oLAY_Groups.LIST_Users.init("LAY_Current_Members_" + oLAY_Groups.getId(), "GrpUsers");

		return true;
	};
	this.LIST_Futures_Users = new Potours_List();
	this.LIST_Futures_Users.onDblClick = function(sTag){

		//our position
		var nPosition = 0;
		//the array of the items
		var ary_ = oLAY_Groups.LIST_Users.getItems();
		var ary_F = oLAY_Groups.LIST_Futures_Users.getItems();

		//get the position
		nPosition = findInObjLst(ary_F, "Tag", sTag);

		//In ?
		if(nPosition == POTOURS_FIND_NOTFOUND)
			return false;

		//Crew section***********************************

		if(!oLAY_Groups.LIST_Users.deleteLayout())
			console.log("LIST_Futures_Users.onDblClick => What !!!");

		//Add it to the member crew
		ary_.push(ary_F[nPosition]);

		if(!oLAY_Groups.LIST_Users.setItems(ary_))
			console.log("LIST_Futures_Users.onDblClick => What 2 !!!");
		
		oLAY_Groups.LIST_Users.init("LAY_Current_Members_" + oLAY_Groups.getId(), "GrpUsers");
		
		//Others section**********************************

		if(!oLAY_Groups.LIST_Futures_Users.deleteLayout())
			console.log("LIST_Futures_Users.onDblClick => What !!!");

		//remove it from the non member crew
		ary_F.splice(nPosition, 1);

		if(!oLAY_Groups.LIST_Futures_Users.setItems(ary_F))
			console.log("LIST_Futures_Users.onDblClick => What 2 !!!");
		
		oLAY_Groups.LIST_Futures_Users.init("LAY_Futures_Users_" + oLAY_Groups.getId(), "GrpFuturesUsers");
	};

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Groups.members.sName;
    };
    this.myLAY_Groups.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Groups.members.sName;
    };
    this.myLAY_Groups.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_Groups.members.oObj;
	};
	this.myLAY_Groups.getObj = this.getObj;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Groups.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Groups.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_Groups.members.oObj = oItem;
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
		
		sCode += "<div id=\"" + oLAY_Groups.getId() + "\">";
		
		sCode += "\t" + "<div id=\"LAY_Accreditation_" + oLAY_Groups.getId() + "\">" + "accreditationsLAYDiv()" + "</div>";

		sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

		sCode += '\t\t<input id="SAI_Nom_' + oLAY_Groups.getId() + '" class="SAI_" type="text" name="SAI_Nom_' + oLAY_Groups.getId() + '" size=\"50\" value=""/>';

		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SAVE_LAY_Groups('" + oLAY_Groups.getId() + "')\">Sauvegarder</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"DELETE_LAY_Groups('" + oLAY_Groups.getId() + "')\">Supprimer</div>" + "\r\n";
		
		sCode += "\t" + "</form>";
		
		sCode += "\t" + "<div id=\"LAY_Members_" + oLAY_Groups.getId() + "\"></div>";
		sCode += "\t" + "\t" + "<div id=\"LAB_Current_Members_" + oLAY_Groups.getId() + "\">Membres actuels</div>";
		sCode += "\t" + "\t" + "<div id=\"LAY_Current_Members_" + oLAY_Groups.getId() + "\"></div>";
		sCode += "\t" + "\t" + "<div id=\"LAY_Resarch_Members_" + oLAY_Groups.getId() + "\">Recherche de membres</div>";
		sCode += "\t" + "\t" + '<input id="SAI_Pseudo_' + oLAY_Groups.getId() + '" class="SAI_" type="text" name="SAI_Pseudo_' + oLAY_Groups.getId() + '" value=""/>';
		sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"SEARCH_USERS_LAY_Groups('" + oLAY_Groups.getId() + "')\">Q</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div id=\"LAY_Futures_Users_" + oLAY_Groups.getId() + "\"></div>";
		sCode += "\t" + "</div>";
		
		sCode += "\t" + "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + oLAY_Groups.getId() + "\">---</div>";
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_Groups.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Groups.members.oDiv = document.getElementById(oLAY_Groups.getId());
        if(oLAY_Groups.members.oDiv == null)
            return false;

        return true;
    };
    this.myLAY_Groups.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Groups.generateHTML();

        return oLAY_Groups.attach();
    };
    this.myLAY_Groups.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Groups.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Groups.members.oDiv.parentNode.removeChild(oLAY_Groups.members.oDiv);
        //nullify the div
        oLAY_Groups.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Groups.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Groups.setName(sDivId);
		//Initialise component
		if(oLAY_Groups.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Groups, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Groups.push(oLAY_Groups);
			else
				//change
				ARY_LAY_Groups[nPosition] = oLAY_Groups;

			oLAY_Groups.loadUsers();
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Groups.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Groups.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Groups, "sName", oLAY_Groups.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Groups.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
    this.myLAY_Groups.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our position
		var nPosition = 0;
		//our element to do everything
		var oElement = null;

		if(oLAY_Groups.members.oObj == null)
			oLAY_Groups.members.oObj = new Groups();
			//return false;
			
		oElement = document.getElementById("SAI_Nom_" + oLAY_Groups.getId());
		if(oElement != null)
			oElement.value = oLAY_Groups.members.oObj.getNomGroupe();

		return true;
	};
	this.myLAY_Groups.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//get the Organisations
		var oGroups = oLAY_Groups.members.oObj;
		//element 
		var oElement = null;

		//the array of the items
		var ary_ = oLAY_Groups.LIST_Users.getItems();
		//array of {uid, until}
		var ary_Result = [];

		//our count
		var nCount = 0;
		//our iterrator 
		var nLine = 0;

		oElement = document.getElementById("SAI_Nom_" + oLAY_Groups.getId());
		if(oElement != null){
			oGroups.setNom(oElement.value);
			oGroups.setNomGroupe(oElement.value);
		}
		
		//get the count 
		nCount = ary_.length;
		//start the loop 
		while(nLine < nCount){
			//
			ary_Result.push({uid:ary_[nLine].Tag, until : ""});
			//Next
			nLine++;
		}
		//change the Json 
		oGroups.setUGrp_Json(JSON.stringify(ary_Result));

		//Parano !
		oLAY_Groups.members.oObj = oGroups;
		
	};
	this.myLAY_Groups.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_Groups.setObj(oItem);
		return oLAY_Groups.initializeLayout(sDivOwner, sDivId);
	};
	this.myLAY_Groups.init = this.init;

	///SEPCIAL

	this.responseList = function(LIST_, sText, sIDParent, sIdElement){
		//our Groups
		var oUser = null;

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
			//New Groups
			oUser = new Users();
			//load 
			oUser.loadFromArray(ary_[nLine]);
			//do the text 
			sTitle = oUser.getPseudo() + " (" + oUser.getPrenom() + " " + oUser.getNom() +  ")";
			//add the item
			ary_Items.push({Text : sTitle, Tag : oUser.getId_Users()});
			//Next
			nLine++;
		}

		LIST_.deleteLayout();

		LIST_.setItems(ary_Items);

		LIST_.init(sIDParent, sIdElement);

		return true;
	}

	this.loadUsers = function(){

		//get the Organisations
		var oGroups = oLAY_Groups.members.oObj;

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
		if(oGroups == null)
			return false;

		//have stuff to plot ?
		if(oGroups.getUGrp_Json() == "")
			return oLAY_Groups.responseUsers("");

		//get the array
		ary_oItems = JSON.parse(oGroups.getUGrp_Json());
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

		//have stuff to plot ?
		if(sCode == "")
			return oLAY_Groups.responseUsers("");

		//Define the function
		oReq.onreadystatechange = function(){

			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				//Response
				oLAY_Groups.responseUsers(oReq.responseText);
			}
			
		};

		//prepare the query*********************
		//check the open
		oReq.open("POST", "php/queryManager_Users.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + "" + "&Action=contacts_users&Args=" + JSON.stringify([{Method : "COND_IN_LIST", Names : ["Id_Users"], Value : sCode} ]) ); 
		//Return the job !
		return true;
	};

	this.responseUsers = function(sText){
		//call the common function
		return oLAY_Groups.responseList(oLAY_Groups.LIST_Users, sText, "LAY_Current_Members_" + oLAY_Groups.getId(), "GrpUsers");
	};

	this.searchFutureUsers = function(){
		//get the Organisations
		var oGroups = oLAY_Groups.members.oObj;

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

		oElement = document.getElementById("SAI_Pseudo_" + oLAY_Groups.getId());
		if(oElement == null)
			return false;

		//have we an object ?
		if(oGroups == null)
			return false;

		//have stuff to plot ?
		if(oGroups.getUGrp_Json() != ""){
			//get the array
			ary_oItems = JSON.parse(oGroups.getUGrp_Json());
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
				oLAY_Groups.responseFutureUsers(oReq.responseText);
			}
			
		};

		console.log("Element value : " + oElement.value);

		//prepare the query*********************
		//check the open
		oReq.open("POST", "php/queryManager_Users.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + "" + "&Action=contacts_users&Args=" + JSON.stringify([
			{Method : "COND_NIN_LIST", Names : ["Id_Users"], Value : sCode},
			{Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sNom", "sPrenom", "sPseudo"], Value : oElement.value} 
		] ) ); 
		//Return the job !
		return true;
	};

	this.responseFutureUsers = function(sText){
		//call the common function
		return oLAY_Groups.responseList(oLAY_Groups.LIST_Futures_Users, sText, "LAY_Futures_Users_" + oLAY_Groups.getId(), "GrpFuturesUsers");
	};
}