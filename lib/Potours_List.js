

//our gloabal instance object 
var ARY_Potours_List = [];

const POTOURS_LIST_ITEM_ID_STARTING_ELEMENT = "Potours_List_Item_";

//On Click
CLICK_Potours_List = function(sId, sTag){
    //our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_Potours_List, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

    //have we a click function
    if(ARY_Potours_List[nPosition].onClick == null)
        return false;

	//Sad God Sake !!!
	return ARY_Potours_List[nPosition].onClick(sTag);
}

DBLCLICK_Potours_List = function(sId, sTag){
    //our position
	var nPosition = 0;
	//our item
	var oItem = null;

	//get the position
	nPosition = findInPotoursObjLst(ARY_Potours_List, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

    //have we a click function
    if(ARY_Potours_List[nPosition].onDblClick == null)
        return false;

	//Sad God Sake !!!
	return ARY_Potours_List[nPosition].onDblClick(sTag);
}

function Potours_List(){

    //our super
    this.myPotours_List = {};
    //hack
    var oPotours_List = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
        ///[MEMBER][string][element]The dom element
        oDiv : null,
        ///
        lst_oItems : [],
        lst_oSeletedItems : []
    };

    ///[SECTION]Property##############################################
	


	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oPotours_List.members.sName;
    };
    this.myPotours_List.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oPotours_List.members.sName;
    };
    this.myPotours_List.getId = this.getId;

    ///[METHOD]Method to get our objects
	///[RETURNS]string, our Object
    this.getItems = function(){
        return oPotours_List.members.lst_oItems;
    };
    this.myPotours_List.getItems = this.getItems;

    ///[METHOD]Method to get our selected objects
	///[RETURNS]string, our Object
    this.getSeletedItems = function(){
        return oPotours_List.members.lst_oSeletedItems;
    };
    this.myPotours_List.getSeletedItems = this.getSeletedItems;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]string, our control name
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oPotours_List.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myPotours_List.setName = this.setName;

    ///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
    this.setItems = function(lst_oData){
        if(lst_oData != null){
            oPotours_List.members.lst_oItems = lst_oData;
            oPotours_List.members.lst_oSeletedItems = [];
            //console.log("Potours_List => Items : " + oPotours_List.members.lst_oItems.length);
            //redraw
            return true;
        }
        //console.log("Potours_List => setItems failed");
        return false;
    }

    ///[SECTION]WORKSHOP##############################################

    ///[METHOD]Method to write the html code
	///[RETURNS]string, the HTML text of the controls
    this.generateHTML = function(){

        //our code
		var sCode = "";
        //our tag 
        var sTag = "";
        //our id 
        var sId = "";
        //our text
        var sText = "";

		//our count
		var nCount = 0;
		//our iterator
		var nIt = 0;
		//position of the civilite
		var nPosition = 0;
		
		sCode += "<div id=\"Potours_List_" + oPotours_List.getId() + "\" class=\"LIST_\">";
		
        sId = oPotours_List.getId();

		//get the count
		nCount = oPotours_List.members.lst_oItems.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
            //prepare
            sTag = oPotours_List.members.lst_oItems[nIt]["Tag"];
            sText = oPotours_List.members.lst_oItems[nIt]["Text"];
			//add option
			sCode += "\t" + "<div id=\"" + POTOURS_LIST_ITEM_ID_STARTING_ELEMENT + sId + "_"+ sTag + "\" onclick=\"CLICK_Potours_List('" + sId + "', " + sTag + ")\" ondblclick=\"DBLCLICK_Potours_List('" + sId + "', " + sTag + ");\" class=\"LIST_Item\">" + sText + "</div>" + "\r\n";
			//Next
			nIt++;
		}

		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myPotours_List.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        console.log("Attach Component 1 : " + oPotours_List.getId());

        oPotours_List.members.oDiv = document.getElementById("Potours_List_" + oPotours_List.getId());
        if(oPotours_List.members.oDiv == null)
            return false;

        console.log("Attach Component 2 : Attached " + oPotours_List.members.oDiv.id );

        return true;
    };
    this.myPotours_List.attach = this.attach;

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
        oDivOwner.innerHTML += oPotours_List.generateHTML();

        return oPotours_List.attach();
    };
    this.myPotours_List.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //our tag 
        var sTag = "";
        //our id 
        var sId = "";

        //our element
        var oElement = null;

        //console.log("Delete Component 1");

        //if not attach
        if(oPotours_List.members.oDiv == null)
            return false;
        
        //console.log("Delete Component 2 : Div OK !!!");

        sId = oPotours_List.getId();

        //get the count
		nCount = oPotours_List.members.lst_oItems.length;
		//init the iterator
		nIt = 0;
		//loop
		while(nIt < nCount){
            //prepare
            sTag = oPotours_List.members.lst_oItems[nIt]["Tag"];
            //get the element
            oElement = document.getElementById("Potours_List_Item_" + sId + "_"+ sTag);
            oPotours_List.members.oDiv.removeChild(oElement);
            delete oElement;
            //Next
			nIt++;
		}

        oPotours_List.members.oDiv.innerHTML = "";
        //remove from the parent node
        oPotours_List.members.oDiv.parentNode.removeChild(oPotours_List.members.oDiv);
        //nullify the div
        oPotours_List.members.oDiv.outerHTML = "";
        //delete oPotours_List.members.oDiv;
        oPotours_List.members.oDiv = null;

        //console.log("Delete Component 3 : Removed !!!");

        //Happy End
        return true;
    };
    this.myPotours_List.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oPotours_List.setName(sDivId);
		//Initialise component
		if(oPotours_List.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_Potours_List, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_Potours_List.push(oPotours_List);
			else
				//change
				ARY_Potours_List[nPosition] = oPotours_List;
			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myPotours_List.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oPotours_List.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_Potours_List, "sName", oPotours_List.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_Potours_List.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myPotours_List.deleteLayout = this.deleteLayout;

    ///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId){
        oPotours_List.setName(sDivId);
		return oPotours_List.initializeLayout(sDivOwner, sDivId);
	}
	this.myPotours_List.init = this.init;

    this.onClick = null;
    this.onDblClick = null;
}