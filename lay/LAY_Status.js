

// https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline

//our gloabal instance object 
var ARY_LAY_Status = [];

//DELETE_LAY_Status
function REMOVE_LAY_Status(sId){
	//our position
	var nPosition = 0;
	//our item
	var oItem = null;
	
	//get the position
	nPosition = findInPotoursObjLst(ARY_LAY_Status, "sName", sId);
	//In ?
	if(nPosition == POTOURS_FIND_NOTFOUND)
		return false;
	
	//Suppression
	ARY_LAY_Status[nPosition].deleteLayout();

	//happy End
	return true;
}

function LAY_Status(){

    //our super
    this.myLAY_Status = {};
    //hack
    var oLAY_Status = this;

    this.members = {
        ///[MEMBER][string][sName]The name of the control/ Id in HTML
        sName : "",
        ///[MEMBER][element][oDiv]The dom element
        oDiv : null,
        ///
        oEvtSrc : null,
		///
		sText : "",
		//[MEMBER][LAY][oParent]The parent Layout
		oParent : null
    };

	///[SECTION]Property##############################################
	
	///[SECTION]Getters###############################################
	
	///[METHOD]Method to get our control name
	///[RETURNS]string, our control name
    this.getName = function(){
        return oLAY_Status.members.sName;
    };
    this.myLAY_Status.getName = this.getName;
	
	///[METHOD]Method to get our control Id
	///[RETURNS]string, our control Id
    this.getId = function(){
        return oLAY_Status.members.sName;
    };
    this.myLAY_Status.getId = this.getId;

	///[METHOD]Method to get our text
	///[RETURNS]string, our text
    this.getText = function(){
        return oLAY_Status.members.sText;
    };
    this.myLAY_Status.getText = this.getText;

	///[METHOD]Method to get our object
	///[RETURNS]control, our Parent
	this.getParent = function(){
		return oLAY_Status.members.oParent;
	};
	this.myLAY_Status.getParent = this.getParent;

	///[SECTION]Setters###############################################
	
	///[METHOD]Method to get our control Name
    ///[PARAMETER][string][sValue]string, our new control Name
	///[RETURNS]boolean, true if done
    this.setName = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Status.members.sName = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Status.setName = this.setName;

	///[METHOD]Method to get our text
    ///[PARAMETER][string][sValue]string, our new text
	///[RETURNS]boolean, true if done
    this.setText = function(sValue){
        if(sValue == null)
            return false;
        if(typeof sValue === 'string'){
            oLAY_Status.members.sText = sValue;
            return true;
        }
        return false;
    };
	this.myLAY_Status.setText = this.setText;

	///[METHOD]Method to set our control parent
    ///[PARAMETER][Control][LAY_)]LAY_), our parent
	///[RETURNS]boolean, true if done
	this.setParent = function(LAY_){
		if(LAY_ == null)
			return false;
		oLAY_Status.members.oParent = LAY_;
		return true;
    }
    this.myLAY_Status.setParent = this.setParent;

	this.setProgression = function(nPercent){
		//our element
		var oElement = document.getElementById("LAY_Status_PG_" + oLAY_Status.getId());
		
		//is the element aviable
		if(oElement != null){
			//good value
			if(nPercent > -1 && nPercent < 101){
				//set the width
				oElement.style.width = nPercent + "%";
				//Happy End
				return true;
			}
		}
		//bad end
		return false;
	}
	this.myLAY_Status.setProgression = this.setProgression;

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
		
		sCode += "<div id=\"" + oLAY_Status.getId() + "\">" + "\r\n";
		
		 ///[DEBUG]Operaion time !!!
		if(Heimdall.flags.debug){
			sCode += "\t" + "<div id=\"LAB_Id_" + oLAY_Status.getId() + "\"></div>" + "\r\n";
		}
		///[/DEBUG]

		sCode += "\t" + "<div id=\"LAY_Status_" + oLAY_Status.getId() + "\">" + "\r\n";
		//sCode += "\t" + "<div id=\"LAY_Status_" + oLAY_Status.getId() + "\"></div>" + "\r\n";
		sCode += "\t" + "\t" + "<div id=\"LAY_Status_Text_" + oLAY_Status.getId() + "\">" + oLAY_Status.getText() + "</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div id=\"LAY_Status_BTN_" + oLAY_Status.getId() + "\" class=\"BTN_\" onclick=\"REMOVE_LAY_Status('" + oLAY_Status.getId() + "')\">X</div>" + "\r\n";
		sCode += "\t" + "\t" + "<div id=\"LAY_Status_Content_" + oLAY_Status.getId() + "\" style=\"width:100%;height:20px;\">" + "\r\n";
		sCode += "\t" + "\t" + "\t" + "<div id=\"LAY_Status_PG_" + oLAY_Status.getId() + "\" style=\"background-color:#00FF00;height:20px;\"></div>" + "\r\n";
		sCode += "\t" + "\t" + "</div>" + "\r\n";
		sCode += "\t" + "</div>" + "\r\n";

		sCode += "</div>";
		//return the code
		return sCode;
    };
    this.myLAY_Status.generateHTML = this.generateHTML;

    ///[METHOD]Method to attach the object
	///[RETURNS]boolean, true if done
    this.attach = function(){
        
        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        oLAY_Status.members.oDiv = document.getElementById(oLAY_Status.getId());
        if(oLAY_Status.members.oDiv == null)
            return false;
		
		//the events you spread
		if(oLAY_Status.getParent() != null){
			//a div ?
			if(oLAY_Status.getParent().members.oDiv != null){
				//add the event listener
				oLAY_Status.members.oDiv.addEventListener(Heimdall.Events.loaded,oLAY_Status.getParent().subComponentLoaded);
			}
		}

        return true;
    };
    this.myLAY_Status.attach = this.attach;

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
        oDivOwner.innerHTML += oLAY_Status.generateHTML();

        return oLAY_Status.attach();
    };
    this.myLAY_Status.initialyseComponent = this.initialyseComponent;

    ///[METHOD]Method to delete the component
	///[RETURNS]boolean, true if done
    this.deleteComponent = function(){

        //our iterrator
        var nLine = 0;
        //our count
        var nCount = 0;

        //if not attach
        if(oLAY_Status.members.oDiv == null)
            return false;

        //remove from the parent node
        oLAY_Status.members.oDiv.parentNode.removeChild(oLAY_Status.members.oDiv);
        //nullify the div
        oLAY_Status.members.oDiv = null;

        //Happy End
        return true;
    };
    this.myLAY_Status.deleteComponent = this.deleteComponent;

	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
	///[RETURNS]boolean, true if done
	this.initializeLayout = function(sDivOwner, sDivId){
		//get the position ]:)
		var nPosition = 0;
		//initialize the name and ID
		oLAY_Status.setName(sDivId);
		//Initialise component
		if(oLAY_Status.initialyseComponent(sDivOwner)){
			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Status, "sName", sDivId);
			if(nPosition == POTOURS_FIND_NOTFOUND)
				//add to the global array
				ARY_LAY_Status.push(oLAY_Status);
			else
				//change
				ARY_LAY_Status[nPosition] = oLAY_Status;
			
			//spread the message : No Mercy For the Rebels Troops StormTroopers !!!
			//oLAY_Status.members.oDiv.dispatchEvent( Heimdall.methods.createLoadedEvent(oLAY_Status, null));

			//
			this.attach();
			//write
			console.log("Status_" + oLAY_Status.getId());

			//happy end
			return true;
		} 

		//sad
		return false;
	};
	this.myLAY_Status.initializeLayout = this.initializeLayout;
	
	///[METHOD]Method to delete the layout
	///[RETURNS]boolean, true if done
	this.deleteLayout = function(){
		//position 
		var nPosition = 0;

		if(oLAY_Status.deleteComponent()){
			//remove from the array now !

			//get the position
			nPosition = findInPotoursObjLst(ARY_LAY_Status, "sName", oLAY_Status.getId());
			//In ?
			if(nPosition != POTOURS_FIND_NOTFOUND)
				ARY_LAY_Status.splice(nPosition, 1);

			//Happy "the blue dragon cat" End
			return true;
		}

		//sad but true ! \m/
		return false;
	}
	this.myLAY_Status.deleteLayout = this.deleteLayout;

	///[METHOD]Method to plots the data of the object
	///[RETURNS]boolean, true if done
	this.ObjToView = function(){
		return true;
	};
	this.myLAY_Status.ObjToView = this.ObjToView;
	
	///[METHOD]Method to the view data into the object
	///[RETURNS]boolean, true if done
	this.ViewToObject = function(){
		
	};
	this.myLAY_Status.ViewToObject = this.ViewToObject;
	
	///[METHOD]Method to initialize the layout
    ///[PARAMETER][string][sDivOwner]string, our oxner div Id
    ///[PARAMETER][string][sDivId]string, our div Id
    ///[PARAMETER][string][sPHP]string, our php file
	///[RETURNS]boolean, true if done
	this.init = function(sDivOwner, sDivId, sPHP){
		oLAY_Status.initializeLayout(sDivOwner, sDivId);
		//return oLAY_Status.initializeLayout(sDivOwner, sDivId);

		//our Php
		if(sPHP != "")
			oLAY_Status.members.oEvtSrc = new EventSource(sPHP);
		return true;
	}
	this.myLAY_Status.init = this.init;

	///[METHOD]Method to handle sub component loaded event
	///[PARAMETER][event][e]event, our event
	this.subComponentLoaded = function(e){

		if(e != null){
			if(e.detail.oObject != null){
				/* Nah ! */
			}
		}
	}
	this.myLAY_Status.subComponentLoaded = this.subComponentLoaded;

}