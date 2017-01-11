/// <reference path="../../lib/CONTACTS/CONTACTS_Logs.js" />
/// <reference path="../../lib/PUBLICATIONS/PUBLICATIONS_Stocks.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Civilites.js" />
/// <reference path="../../lib/CONTACTS/CONTACTS_Titres.js" />
/// <reference path="../../lib/Potours_Legacy.js" />

//our gloabal instance object 
var ARY_LAY_LIST_Stocks = [];

//SAVE_LAY_LIST_Stocks
function SAVE_LAY_LIST_Stocks(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	//our result
	var bResult = false;
	
	//our log object 
	var oLogs = null;
	
	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_LIST_Stocks, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

	//Update the object 
	ARY_LAY_LIST_Stocks[nPosition].ViewToObject();
	//get the Item
	oItem = ARY_LAY_LIST_Stocks[nPosition].getObj();
	
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

//ADD_LAY_LIST_Stocks
function ADD_LAY_Stocks(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
    //our new Lay to add
    var LAY_ = null;
    //our List
    var LIST_ = null;
	
	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_LIST_Stocks, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;

    //Get the List
    LIST_ = ARY_LAY_LIST_Stocks[nPosition];
	//Update the object 
	LIST_.ViewToObject();
	//create the Item
	oItem = new Stocks();
	//create the LAY_
    LAY_ = new LAY_Stocks();

    //Set item
    oItem.setId_Creator(parseInt(Heimdall.members.user["UserId"]));
    //Set accreditation all
    oItem.setId_Accreditations_Item(1);
    //our contact object
    oItem.setId_Publications(parseInt(LIST_.getObj().getId_Items()));

    //set the LAY 
    LAY_.init("LAY_LIST_" + sId, "LAY_Stock", oItem);

    //add it !
    LIST_.ary_LAY_Stocks.push(LAY_);
	
    //
    LIST_.ObjToView();

	//Sad God Sake !!! 
	return true;
}

function LAY_LIST_Stocks(){

	//our super
    this.myLAY_LIST_Stocks = {};
    //hack
    var oLAY_LIST_Stocks = this;

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
	//this.LAY_Rights = new LAY_Accreditations_Item();

    //the array of LAY_
    this.ary_LAY_Stocks = [];

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_LIST_Stocks.members.sName;
    };
    this.myLAY_LIST_Stocks.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_LIST_Stocks.members.sName;
    };
    this.myLAY_LIST_Stocks.getId = this.getId;

	///[METHOD]Method to get our object
	///[RETURNS]string, our Object
	this.getObj = function(){
		return oLAY_LIST_Stocks.members.oObj;
	};
	this.myLAY_LIST_Stocks.getObj = this.getObj;

    ///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_LIST_Stocks.members.oParent;
	};
	this.myLAY_LIST_Stocks.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_LIST_Stocks.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_LIST_Stocks.setName = this.setName;
	
	///[METHOD]Method to get our Object
    ///[PARAMETER][string][sValue]string, our new Object
	///[RETURNS]boolean, true if done
	this.setObj = function(oItem){
		//security
		if(oItem == null)
			return false;
		//Affectation
		oLAY_LIST_Stocks.members.oObj = oItem;
		//Happy end 
		return true
	};
	this.myLAY_LIST_Stocks.setObj = this.setObj;

    ///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_)]LAY_, our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_LIST_Stocks.members.oParent = LAY_;
		return true;
    }
    this.myLAY_LIST_Stocks.setParent = this.setParent;

	///[SECTION]WORKSHOP##############################################
	
	///[METHOD]Method to write the html code
	///[RETURNS]string, the HTML text of the controls
    this.generateHTML = function(){

        //our code
		var sCode = "";
		
        //our 
		sCode += "<div id=\"" + oLAY_LIST_Stocks.getId() + "\">";
		
        //Menu
		sCode += "\t" + "<div id=\"LAY_Menu_" + oLAY_LIST_Stocks.getId() + "\">" + "\r\n";
        
        //Is the Item boss here new ?
        if(oLAY_LIST_Stocks.getObj().getId_Items() != 0 && oLAY_LIST_Stocks.getObj().getId_Items() != "0")
            sCode += "\t" + "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"ADD_LAY_Stocks('" + oLAY_LIST_Stocks.getId() + "')\">Ajouter</div>" + "\r\n";
		
        sCode += "\t" + "</div>" + "\r\n";        

        //List des contacts infos
        sCode += "\t" + "<div id=\"LAY_LIST_" + oLAY_LIST_Stocks.getId() + "\">" + "\r\n";        
		sCode += "\t" + "</div>" + "\r\n";  
		
		sCode += "</div>";
		
		//return the code
		return sCode;
    };
    this.myLAY_LIST_Stocks.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_LIST_Stocks.members.oDiv = document.getElementById(oLAY_LIST_Stocks.getId());
        if(oLAY_LIST_Stocks.members.oDiv == null)
            return false;

        //the events you spread
		if(oLAY_LIST_Stocks.getParent() != null){
			//a div ?
			if(oLAY_LIST_Stocks.getParent().members.oDiv != null){
				//add the event listener
				oLAY_LIST_Stocks.members.oDiv.addEventListener(Heimdall.Events.loaded_Stock,oLAY_LIST_Stocks.getParent().subComponentStockLoaded);
				//oLAY_LIST_Stocks.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_LIST_Stocks.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_LIST_Stocks.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_LIST_Stocks.generateHTML();

        return oLAY_LIST_Stocks.attach();
    };
    this.myLAY_LIST_Stocks.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_LIST_Stocks.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_LIST_Stocks.members.oDiv.parentNode.removeChild(oLAY_LIST_Stocks.members.oDiv);
        //nullify the div
        oLAY_LIST_Stocks.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_LIST_Stocks.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//our count
        var nCount = 0;
        //our line
        var nLine = 0;
        //get the position ]:)
		var nPosition = 0;

        //our item
        var oItem = null;
        //our new Lay to add
        var LAY_ = null;

		//initialize the name and ID
		oLAY_LIST_Stocks.setName(sDivId);
		//Initialise component
		if(oLAY_LIST_Stocks.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_LIST_Stocks, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_LIST_Stocks.push(oLAY_LIST_Stocks);
			else
				//change
				ARY_LAY_LIST_Stocks[nPosition] = oLAY_LIST_Stocks;

            //Post
            oLAY_LIST_Stocks.postList(sDivOwner, sDivId);

			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_LIST_Stocks.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_LIST_Stocks.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_LIST_Stocks, "sName", oLAY_LIST_Stocks.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_LIST_Stocks.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_LIST_Stocks.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		//our count
        var nCount = 0;
        //our iterator
        var nLine = 0;
		
        //get our count
        nCount = oLAY_LIST_Stocks.ary_LAY_Stocks.length;
        //Loop
        while(nLine < nCount){
            //
            oLAY_LIST_Stocks.ary_LAY_Stocks[nLine].ObjToView();
            //Next
            nLine++;
        }

		return true;
	};
	this.myLAY_LIST_Stocks.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		//our count
        var nCount = 0;
        //our iterator
        var nLine = 0;
		
        //get our count
        nCount = oLAY_LIST_Stocks.ary_LAY_Stocks.length;
        //Loop
        while(nLine < nCount){
            //
            oLAY_LIST_Stocks.ary_LAY_Stocks[nLine].ViewToObject();
            //Next
            nLine++;
        }

		return true;		
	};
	this.myLAY_LIST_Stocks.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, oItem){
		oLAY_LIST_Stocks.setObj(oItem);
		//return oLAY_LIST_Stocks.postList(sDivOwner, sDivId);
		return oLAY_LIST_Stocks.initializeLayout(sDivOwner, sDivId);
	};
	this.myLAY_LIST_Stocks.init = this.init;

    this.responseList = function(sDivOwner, sDivId, ary_){

        //our count
        var nCount = 0;
        //our line
        var nLine = 0;

        //our item
        var oItem = null;
        //our new Lay to add
        var LAY_ = null;

        //our event
        var eventL = null;

        //clear
        oLAY_LIST_Stocks.ary_LAY_Stocks = [];
        
        //get the loop
        nCount = ary_.length;
        //start the loop
        while(nLine < nCount){
            //create the Item
            oItem = new Stocks();
            //create the LAY_
            LAY_ = new LAY_Stocks();
            //Load
            oItem.loadFromArray(ary_[nLine]);
            //our name you idiot !!!
            LAY_.setName("CI_" + oItem.getId_Items());
            //our layout
            LAY_.setObj(oItem);
            //push
            oLAY_LIST_Stocks.ary_LAY_Stocks.push(LAY_);

            LAY_.setParent(oLAY_LIST_Stocks);
            LAY_.init("LAY_LIST_" + oLAY_LIST_Stocks.getId(), "LAY_Stocks_" + oItem.getId_Items(), oItem);

            //Next
            nLine++;
        }

        console.log("LAY_LIST_Stocks : responseList Done !!!");

        //if no result !!!
        if(nLine == 0){
            //to obtain the master's ObjToView
            eventL = Heimdall.methods.createStockLoadedEvent(oLAY_LIST_Stocks, null);
            //eventL = Heimdall.methods.createLoadedEvent(oLAY_LIST_Stocks, null);
            //spread the word of our master and lord Cthulhu
            oLAY_LIST_Stocks.members.oDiv.dispatchEvent(eventL);

            console.log("LAY_LIST_Stocks : responseList Spread Done !!!");
        }
        
    };
    this.myLAY_LIST_Stocks.responseList = this.responseList;

    this.postList = function(sDivOwner, sDivId){

        //Our request object
        var oReq = new XMLHttpRequest();
        //Define the function
        oReq.onreadystatechange = function(){

            //if everything is alright
            if(oReq.readyState == 4 && oReq.status == 200){
                //Plots !
                oLAY_LIST_Stocks.responseList(sDivOwner, sDivId, JSON.parse(oReq.responseText));
            }
            
        };

        //prepare the query*********************
        //check the open
        oReq.open("POST", "php/Stock_Publications_Links_Stocks_manager.php", true);
        //set the request header
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
        oReq.send("Id=" + parseInt(Heimdall.members.user["UserId"]) + "&Session=" + "" + "&Action=LIST&Id_Item=" + oLAY_LIST_Stocks.getObj().getId_Items()); 

        console.log("LAY_LIST_Stocks : postList Done !!!");

        //Return the job !
        return true;
    };
    this.myLAY_LIST_Stocks.postList = this.postList;

    ///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){
        //our position
        var nPosition = 0;

        //our event
        var eventL = null;

		if(e != null){
			if(e.detail.oObject != null){
                //find 
                //get the position
                nPosition = findInPotoursObjLst(oLAY_LIST_Stocks.ary_LAY_Stocks, "sName", e.detail.oObject.getName());
                //In ?
                if(nPosition == POTOURS_FIND_NOTFOUND)
                    return false;

                console.log("LAY_LIST_Stocks reception " + nPosition + "/" + oLAY_LIST_Stocks.ary_LAY_Stocks.length);

                //remove handler, cause we are no bad boys :)
				oLAY_LIST_Stocks.ary_LAY_Stocks[nPosition].members.oDiv.removeEventListener(Heimdall.Events.loaded, oLAY_LIST_Stocks.subComponentLoaded);

                //if it's the last
                if(nPosition == oLAY_LIST_Stocks.ary_LAY_Stocks.length - 1){
                    //to obtain the master's ObjToView
                    eventL = Heimdall.methods.createStockLoadedEvent(oLAY_LIST_Stocks, null);
                    //eventL = Heimdall.methods.createLoadedEvent(oLAY_LIST_Stocks, null);
                    //spread the word of our master and lord Cthulhu
                    oLAY_LIST_Stocks.members.oDiv.dispatchEvent(eventL);
                    
                    console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
                }                

				// if(e.detail.oObject.getName() == oLAY_LIST_Stocks.LIST_Infos.getName()){
				// 	//remove handler, cause we are no bad boys :)
				//     window.removeEventListener(Heimdall.Events.loaded, oLAY_LIST_Stocks.subComponentLoaded);
				// 	//spread the message : No Mercy For the Rebels Troup StormTroopers !!!
				// 	oLAY_LIST_Stocks.members.oDiv.dispatchEvent( Heimdall.methods.createStockLoadedEvent(oLAY_LIST_Stocks, null));
				// 	//oLAY_LIST_Stocks.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_LIST_Stocks, null));
				// }
			}
		}
	}
	this.myLAY_LIST_Stocks.subComponentLoaded = this.subComponentLoaded;
}

