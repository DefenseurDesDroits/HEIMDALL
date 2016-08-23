/*
* File to init the products
* Ludowic "MagnusMoi" EMMANUEL 2016
*
*/

/// <reference path="contacts.js" />

///[Class][Heimdall]Our Heimdall global object
var Heimdall = {
    flags :  {
        waitData : true,
        debug : true
    },
    members : {
        products : {},
        connectionWindow : null
    },
    methods : {
        connection : function(){

            //our code
            var sCode = "";
            //our element
            var oElement = null;

            sCode += "";

            sCode += "<form class=\"LAY_\">" + "\r\n";
            sCode += "\t" + '<input id="SAI_User" class="SAI_" type="text" name="SAI_User" value="User"/>' + "\r\n";
            sCode += "<br/>" + "\r\n";
            sCode += "\t" + '<input id="SAI_Pwd" class="SAI_" type="text" name="SAI_Pwd" value="Pwd"/>' + "\r\n";
            sCode += "</form>" + "\r\n";
            sCode += "\t" + "<div class=\"BTN_ \" onclick=\"Heimdall.methods.submitConnection()\">Valider</div>" + "\r\n";

            //
            Heimdall.members.connectionWindow = new Overview("WIN_connection", 800, 600, "#e3e3e3", 0.5);

            //get the element
            oElement = document.getElementById("WIN_connection");

            if(oElement != null){
                oElement.innerHTML = sCode;
            }

        },
        responseConnection : function(sText){
            
            Heimdall.members.connectionWindow.dispose();
            MsgBox(sText);
            //notDevYet();
        },
        submitConnection : function(){
            
            //Our request object
            var oReq = new XMLHttpRequest();

            //element to obtain the values
            var oElement = null;

            //the user login
            var sUser = "";
            //the pwd
            var sPwd = "";

            //Define the function
            oReq.onreadystatechange = function(){
                //if everything is alright
                if(oReq.readyState == 4 && oReq.status == 200){
                    Heimdall.methods.responseConnection(oReq.responseText);
                }
            };

            //Get user and pwd**********************

            //get the user
            oElement = document.getElementById("SAI_User");

            //set the sUser
            if(oElement != null)
                sUser = oElement.value;

            //get the pwd
            oElement = document.getElementById("SAI_Pwd");

            //set the sUser
            if(oElement != null)
                sPwd = oElement.value;

            //prepare the query*********************
            //check the open
            oReq.open("POST", "php/LDAPManager.php", true);
            //set the request header
            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
            oReq.send("User=" + sUser + "&Pwd=" + sPwd); 
            //Return the job !
            return true;
        }
    }
};

///[FUNCTION][init]Function to init all the products
function init(){

    //init the contact
    init_contacts();

    //create the connection overview
    //new Overview("Nah", 800, 600, "#e3e3e3", 0.5);
    //notDevYet();
    Heimdall.methods.connection();

}