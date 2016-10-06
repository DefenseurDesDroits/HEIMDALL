


/// <reference path="../lib/CONTACTS_Accreditations.js" />
/// <reference path="../lib/CONTACTS_Contacts.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />
/// <reference path="../lib/Potours_LIST.js" />
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

function LAY_Accreditations_ItemHTML_1(sId){
    return "Tout le monde, " + sId;
}

function LAY_Accreditations_ItemHTML_2(sId){
    
    //Heimdall.members.user["MemberOf"]
    
    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;

    if(Heimdall.members.user["MemberOf"] == null){
        return "The current user has no groups : ERROR";
    }

    nCount = Heimdall.members.user["MemberOf"].length
    nIt = 0;
    while(nIt < nCount){
        //
        sCode += "<div class=\"\" onclick=\"notDevYet()\">" + Heimdall.members.user["MemberOf"][nIt].getNomGroupe() +  "</div>";
        //Next
        nIt++;
    }

    return sCode;
}

function LAY_Accreditations_ItemResponse(LIST_, sText, sIDParent, sIdElement){
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

	//delete the layout
	LIST_.deleteLayout();
	//change the array
	LIST_.setItems(ary_Items);
	//reinit !!!
	LIST_.init(sIDParent, sIdElement);
	//return da job !!!
	return true;
}

function LAY_Accreditations_responseFutureUsers(LIST_, sText, sIDParent, sIdElement){
	LAY_Accreditations_ItemResponse(LIST_, sText, sIDParent, sIdElement);
}

function LAY_Accreditations_searchFutureUsers(LIST_, ary_uid, sSAI_Id, sIDParent, sIdElement){

	//our count
	var nCount = 0;
	//our iterator
	var nLine = 0;

	//The code 
	var sCode = "";

	//an item 
	var oItem = null;

	//an element 
	var oElement = null;

	//Our request object
	var oReq = new XMLHttpRequest();

	oElement = document.getElementById(sSAI_Id);
	if(oElement == null)
		return false;

	//have stuff to plot ?
	//get the count
	nCount = ary_uid.length;
	//start the loop
	while(nLine < nCount){
		//If done
		if(sCode != "")
			sCode += ", ";
		//
		sCode += ary_uid[nLine]["uid"];
		//Next
		nLine++;
	}

	//Define the function
	oReq.onreadystatechange = function(){

		//if everything is alright
		if(oReq.readyState == 4 && oReq.status == 200){
			//Response
			LAY_Accreditations_responseFutureUsers(LIST_, oReq.responseText, sIDParent, sIdElement)
		}
		
	};

	console.log("Element value : " + oElement.value + " | From " + sSAI_Id);

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
}

function LAY_Accreditations_searchFutureUsersId(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//the array of the items
	var ary_uid = [];

	//our json
	var sJson = "";

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Accreditations_Item, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//get the Item
	oItem = ARY_LAY_Accreditations_Item[nPosition];

	//
	sJson = oItem.members.oObj.getId_users_json();
	//Have we user
	if(sJson != ""){
		ary_uid = JSON.parse(sJson);
	}

	return LAY_Accreditations_searchFutureUsers(oItem.LIST_Out, ary_uid, "SAI_Pseudo_" + sId, "LAY_Item_Out_" + sId, "LIST_Item_Out_" + sId);
}

function LAY_Accreditations_ItemResponseUser(LIST_, sText, sIDParent, sIdElement){
	LAY_Accreditations_ItemResponse(LIST_, sText, sIDParent, sIdElement);
}

function LAY_Accreditations_ItemLoadUser(LIST_, ary_uid, sIDParent, sIdElement){

	//our count
	var nCount = 0;
	//our iterator
	var nLine = 0;

	//The code 
	var sCode = "";

	//our Json array 
	var ary_oItems = ary_uid;

	//a item 
	var oItem = null;

	//Our request object
	var oReq = new XMLHttpRequest();

	//have we an object ?
	if(LIST_ == null)
		return false;

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
		return LAY_Accreditations_ItemResponseUser(LIST_, "", sIDParent, sIdElement);

	//Define the function
	oReq.onreadystatechange = function(){

		//if everything is alright
		if(oReq.readyState == 4 && oReq.status == 200){
			//Response
			LAY_Accreditations_ItemResponseUser(LIST_, oReq.responseText, sIDParent, sIdElement);
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
}

function LAY_Accreditations_ItemHTML_3(sId){
    
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;

    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;
    
	//array of uid
	var ary_uid = [];

	//the json
	var sJson = "";
	//our code
	var sCode = "";

	//element 
    var oElement = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Accreditations_Item, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//get the Item
	oItem = ARY_LAY_Accreditations_Item[nPosition];

	//element 
	oElement = document.getElementById("LAY_Accreditations_Items_Extension_" + sId );

	//add it to element
	oElement.innerHTML = "";
	sCode += "<div id=\"LAY_Item_In_" + sId + "\" ></div>" + "\r\n";

	sCode += "<div id=\"LAY_Item_Search_" + sId + "\">" + "\r\n";

	sCode += "\t" + '<input id="SAI_Pseudo_' + sId + '" class="SAI_" type="text" name="SAI_Pseudo_' + sId + '" value=""/>';
	sCode += "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"LAY_Accreditations_searchFutureUsersId('" + sId + "');\">Q</div>" + "\r\n";

	sCode += "</div>" + "\r\n";

	sCode += "<div id=\"LAY_Item_Out_" + sId + "\" />";

	oElement.innerHTML = sCode;

	oItem.LIST_In = new Potours_List();
	oItem.LIST_In.onDblClick = function(sTag){

		//our position
		var nPosition = 0;
		//the array of the items
		var ary_ = oItem.LIST_In.getItems();

		//get the position
		nPosition = findInObjLst(ary_, "Tag", sTag);

		//In ?
		if(nPosition == POTOURS_FIND_NOTFOUND)
			return false;

		if(!oItem.LIST_In.deleteLayout())
			console.log("LAY_Accreditations_ItemHTML_3.onDblClick => What !!!");

		ary_.splice(nPosition, 1);

		if(!oItem.LIST_In.setItems(ary_))
			console.log("LAY_Accreditations_ItemHTML_3.onDblClick => What 2 !!!");
		
		oItem.LIST_In.init("LAY_Item_In_" + sId, "LIST_Item_In_" + sId);

		return true;
	};

	oItem.LIST_Out = new Potours_List();
	oItem.LIST_Out.onDblClick = function(sTag){

		//our position
		var nPosition = 0;
		//the array of the items
		var ary_ = oItem.LIST_In.getItems();
		var ary_F = oItem.LIST_Out.getItems();

		//get the position
		nPosition = findInObjLst(ary_F, "Tag", sTag);

		//In ?
		if(nPosition == POTOURS_FIND_NOTFOUND)
			return false;

		//Crew section***********************************

		if(!oItem.LIST_In.deleteLayout())
			console.log("oItem.LIST_Out.onDblClick => What !!!");

		//Add it to the member crew
		ary_.push(ary_F[nPosition]);

		if(!oItem.LIST_In.setItems(ary_))
			console.log("oItem.LIST_Out.onDblClick => What 2 !!!");
		
		oItem.LIST_In.init("LAY_Item_In_" + sId, "LIST_Item_In_" + sId);
		
		//Others section**********************************

		if(!oItem.LIST_Out.deleteLayout())
			console.log("oItem.LIST_Out.onDblClick => What !!!");

		//remove it from the non member crew
		ary_F.splice(nPosition, 1);

		if(!oItem.LIST_Out.setItems(ary_F))
			console.log("oItem.LIST_Out.onDblClick => What 2 !!!");
		
		oItem.LIST_Out.init("LAY_Item_Out_" + sId, "LIST_Item_Out_" + sId);
	};

	//
	sJson = oItem.members.oObj.getId_users_json();
	//Have we user
	if(sJson != ""){
		ary_uid = JSON.parse(sJson);
	}

	//go to the plots !!!
	LAY_Accreditations_ItemLoadUser(oItem.LIST_In, ary_uid, "LAY_Item_In_" + sId , "LIST_Item_In_" + sId );
	
	//go to the plots !!!
	// LAY_Accreditations_ItemLoadUser(oItem.LIST_Out, ary_uid, "LAY_Item_Out_" + sId , "LIST_Item_Out_" + sId );

	//return the 
    //alert( "Le droit Personel, " + sId);
    //return "Le droit Personel, " + sId;
}

//CLICK_LAY_Accreditations_Item
function CLICK_LAY_Accreditations_Item(sId, nClick){
	//our position
	var nPosition = 0;

	//type of the click
	var sType = "";
	var sTypeName = "";

	//element 
    var oElement = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Accreditations_Item, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//get the count
    nCount = Heimdall.members.products.contacts.Accreditations.length;
    //init the iterator
    nIt = 0;
    //Loop 
    while(nIt < nCount){
        //get Infos
        sTypeName = Heimdall.members.products.contacts.Accreditations[nIt].getNom();
        nAccreditation = Heimdall.members.products.contacts.Accreditations[nIt].getId_Accreditations();
        //get element
        oElement = document.getElementById("IMG_Accreditations_" + sId + "_" + nAccreditation);
        //the element exists ?
        if(oElement != null){
            oElement.src = "img/" + sTypeName + ".png";
        }
		//get the type
		if(nClick == nAccreditation)
			sType = sTypeName;
        //Next 
        nIt++;
    }

	//the element
	oElement = document.getElementById(sId);

	//get element
    oElement = document.getElementById("IMG_Accreditations_" + sId + "_" + nClick);
    //the element exists ?
    if(oElement != null){
        oElement.src = "img/" + sType + "_Selected.png";
    }

	 //get element
    oElement = document.getElementById("LAY_Accreditations_Items_Extension_" + sId );
    //the element exists ?
    if(oElement != null){
        eval("LAY_Accreditations_ItemHTML_" + nClick + "('" + sId + "');");
        //oElement.innerHTML = eval("LAY_Accreditations_ItemHTML_" + nClick + "('" + sId + "');");
    }

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

	//
	this.LIST_In = null;
	//
	this.LIST_Out = null;

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
	//our id
	var sId = "";

    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;

	//fill the Id !
	sId = oLAY_Accreditations_Item.getId();

	//start the code
	sCode += "<div id=\"LAY_Accreditations_Items_" + oLAY_Accreditations_Item.getId() + "\">";

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
        sCode += "<img id=\"IMG_Accreditations_" + sId + "_" + nAccreditation + "\" src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\" onclick=\"CLICK_LAY_Accreditations_Item('" + sId + "', " + nAccreditation + ")\"/>";
        //next
        nIt++;
    }

    //extension div
    sCode += "<div id=\"LAY_Accreditations_Items_Extension_" + sId + "\"></div>";

	sCode += "</div>";

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