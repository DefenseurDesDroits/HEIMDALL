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
        user : {},
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
            Heimdall.members.connectionWindow = new Overview("WIN_connection", 200, 100, "#e3e3e3", 0.5);

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
            if(Heimdall.members.connectionWindow != null)
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
                case "LDAP_Connection_KO_No_User":
                    Heimdall.methods.connection();
                    break;
                case "LDAP_Connection_KO":
                    
                    oBox = new MsgBox("Utilisateur inconnu ou password erroné !");
                    oBox.onDisposed = Heimdall.methods.connection;

                    break;
                case "LDAP_Connection_OK":
                    //init the contact
                    init_contacts();

                    //get the response array
                    Heimdall.members.user = ary_Response;
                    //stock loacly
                    localStorage.setItem("Token", Heimdall.members.user["Token"])

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
        },
        submitConnectionToken : function(){
            
            //Our request object
            var oReq = new XMLHttpRequest();

            //element to obtain the values
            var oElement = null;

            //
            var sCode = "";

            //the user login
            var sToken = localStorage.getItem("Token");

            //Define the function
            oReq.onreadystatechange = function(){
                //if everything is alright
                if(oReq.readyState == 4 && oReq.status == 200){
                    Heimdall.methods.responseConnection(oReq.responseText);
                }
            };

            //Warning*******************************

            sCode += "<div>Essai de récupération de session ...</div>";

            //create the window
            Heimdall.members.connectionWindow = new Overview("WIN_connection", 200, 100, "#e3e3e3", 0.5);

            //get the element
            oElement = document.getElementById("WIN_connection");

            if(oElement != null){
                oElement.innerHTML = sCode;
            }

            //prepare the query*********************
            //check the open
            oReq.open("POST", "php/LDAPManager.php", true);
            //set the request header
            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
            oReq.send("Token=" + sToken); 
            //Return the job !
            return true;
        },
        addElement : function(){

            var sCode = "";

            for(var sProduct in Heimdall.members.products){
                sCode += Heimdall.members.products[sProduct].addMenu("WIN_Add");
            }

            //show the token
            sCode += Heimdall.debug.methods.addMenuShowToken();

            //to the box !!!
            MsgBox(sCode);

        },
        userManager : function(){
            //our code
            var sCode = "";

            sCode += "<div>" + "\r\n";

            sCode += "\t" + "<div id=\"BTN_Dectonnection\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();Heimdall.methods.disconnect();\">Deconnection</div>" + "\r\n";

            sCode += "</div>" + "\r\n";

            //to the box !!!
            MsgBox(sCode);
        },
        disconnect : function(){

            ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("Disconnect sequence : ");
            }
            ///[/DEBUG]

            //reset the token by force !!!
            localStorage.setItem("Token", "");
            //reconnection !!!

            ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("Call to init ! ");
            }
            ///[/DEBUG]

            //init it you baka
            init_Produits();

            ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("\t" + "Call done ! ");
            }
            ///[/DEBUG]
        }
    },
    debug : {
        methods : {
            addMenuShowToken : function(){
                //our code
                var sCode = "";

                sCode += "<div>" + "\r\n";

                sCode += "\t" + "<div>Contacts</div>" + "\r\n";
                sCode += "\t" + "<div id=\"BTN_Debug_showToken\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();Heimdall.debug.methods.showToken();\">Show the Token</div>" + "\r\n";

                sCode += "</div>" + "\r\n";

                return sCode;
            },
            showToken : function(){
                    MsgBox(Heimdall.members.user["Token"]);
                }
            }
        }
};

///[FUNCTION][init]Function to init all the products
function init_Produits(){
//function init(){

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        console.log("Init sequence : ");
    }
    ///[/DEBUG]

    if(localStorage.getItem("Token") != ""){
        //auto connection
        Heimdall.methods.submitConnectionToken();

        ///[DEBUG]Operaion time !!!
        if(Heimdall.flags.debug){
            console.log("\t" + "Token detected : " + localStorage.getItem("Token"));
        }
        ///[/DEBUG]
    }
    else{
        //create the connection overview
        Heimdall.methods.connection();

        ///[DEBUG]Operaion time !!!
        if(Heimdall.flags.debug){
            console.log("\t" + "No Token detected !!! ");
        }
        ///[/DEBUG]
    }

}