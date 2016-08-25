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
            sCode += "\t" + '<input id="SAI_Pwd" class="SAI_" type="password" name="SAI_Pwd" value="Pwd"/>' + "\r\n";
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
            
            //get the array
            var ary_Response = null;
            //get the element
            var oElement = null
            //get the msgBox
            var oBox = null; //oBox and not XBox :p
            //our user name 
            var sName = "";

            //close the connection form
            Heimdall.members.connectionWindow.dispose();
            
            //get the array
            ary_Response = JSON.parse(sText);

            //analyse the response 
            switch (ary_Response["Status"]) {
                case "LDAP_Failed":
                    //overview that stop all
                    new Overview("Nope", 250, 150, "#AE4242", 0.75);
                    //get the element to plot  the blocking text
                    oElement = document.getElementById("Nope");
                    if(oElement != null)
                        oElement.innerHTML = "Connection impossible pour l'instant, recommencer ultérieurement !!!";
                    break;
                case "LDAP_Connection_KO":
                    
                    oBox = new MsgBox("Utilisateur inconnu ou password erroné !");
                    oBox.onDisposed = Heimdall.methods.connection;

                    break;
                case "LDAP_Connection_OK":
                    //init the contact
                    init_contacts();

                    //get the name
                    //sName = ary_Response["UserInfo"][0]["displayname"][0];
                    sName = ary_Response["UserInfo_displayname"];

                    if(ary_Response["Comment"] != "")
                        sName += "<br/>" + ary_Response["Comment"];

                    //says Hi !!!
                    MsgBox("Bonjour " + sName);

                    //get element to change the name
                    oElement = document.getElementById("LAB_User");
                    if(oElement)
                        oElement.innerHTML = sName;
                    
                    break;
                default:
                    alert("FATAL ERROR");
                    break;
            }

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

    //create the connection overview
    Heimdall.methods.connection();

}