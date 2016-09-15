/*
* FIle to init and manage the contact products
*
*
*/

/// <reference path="../lib/CONTACTS_contact_Types.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />

const HEIMDALL_NUMBER_OF_FILTER_MAX = 4;
const HEIMDALL_NUMBER_OF_CONTACTS_PLOTS = 25;
const HEIMDALL_QUERY_METHOD_LIKE_StartsWith = "COND_LIKE_SW";
const HEIMDALL_QUERY_METHOD_LIKE_EndsWith = "COND_LIKE_EW";
const HEIMDALL_QUERY_METHOD_LIKE_Contains = "COND_LIKE_C";

const HEIMDALL_LAY_QUERY_Filter = "LAY_Query_Filter_";
const HEIMDALL_LAY_QUERY_Filter_Container = "LAY_Container_Query_Filter_";
const HEIMDALL_BTN_PLOTS_MORE_CONTACT = "BTN_More_Contacts";

const HEIMDALL_LAY_CONTACT_EXTENDED_ID = "LAY_Contact_extension_";
const HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID = "LAY_Contact_extension_address_";

var WIN_Contacts = null;

///[FUNCTION][loadStatics_Civilites]Function to load all the civilities from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Civilites(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oCivilites = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Civilites = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oCivilites = new Civilites();
                //load it !
                oCivilites.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Civilites.push(oCivilites);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Civilites_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStatics_Titres]Function to load all the Titles from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Titres(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oTitres = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Titres = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oTitres = new Titres();
                //load it !
                oTitres.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Titres.push(oTitres);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Titres_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStatics_Contact_Types]Function to load all the Contacts types from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Contact_Types(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oContact_Types = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Contact_Types = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oContact_Types = new Contact_Types();
                //load it !
                oContact_Types.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Contact_Types.push(oContact_Types);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Contact_Types_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStatics_Contact_Types]Function to load all the Contacts types from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Groups(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oGroups = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Groups = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oGroups = new Groups();
                //load it !
                oGroups.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Groups.push(oGroups);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Groups_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStaticsContactsData]Function to load all the Contacts data from the DTB
///[RETURNS][Boolean]True if done
function loadStaticsContactsData(){

    loadStatics_Contact_Types();
    loadStatics_Civilites();
    loadStatics_Titres();
    loadStatics_Groups();

    return true;
}

///[FUNCTION][plotsAddress]Function to plots an address
///[PARAMETER][address][oAdr]The object we want plots
///[RETURNS][String]HTML Code of the element
function plotsAddress(oAdr){

    //our code
    var sCode = "";

    //our Div You baka
    sCode += "<div>" + "\r\n";
    
    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        console.log("plotsAddress, json : " + oAdr.exportToJson());
        sCode += "\t" + "<div>Adresse ID : " + oAdr.getId_Infos() + "<div>" + "\r\n";
    }
    ///[/DEBUG]

    sCode += "\t" + "<form class=\"LAY_\">" + "\r\n";

    sCode += "\t" + '<input id="SAI_Adr1_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Adr1_' + oAdr.getId_Infos() + '" value="' + oAdr.getAdr1() + '"/>';
    sCode += "\t" + '<input id="SAI_Adr2_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Adr2_' + oAdr.getId_Infos() + '" value="' + oAdr.getAdr2() + '"/>';
    sCode += "\t" + '<input id="SAI_Adr2_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Adr3_' + oAdr.getId_Infos() + '" value="' + oAdr.getAdr3() + '"/>';

    sCode += "\t" + "<br/>";
    sCode += "\t" + "<span>CP</span>";
    sCode += "\t" + '<input id="SAI_CP_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_CP_' + oAdr.getId_Infos() + '" value="' + oAdr.getCP() + '"/>';    

    sCode += "\t" + "<br/>";
    sCode += "\t" + "<span>Cedex</span>";
    sCode += "\t" + '<input id="SAI_Cedex_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Cedex_' + oAdr.getId_Infos() + '" value="' + oAdr.getCedex() + '"/>';

    sCode += "\t" + "<br/>";
    sCode += "\t" + "<span>Ville</span>";
    sCode += "\t" + '<input id="SAI_Ville_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Ville_' + oAdr.getId_Infos() + '" value="' + oAdr.getVille() + '"/>';
    sCode += "\t" + "<span>Pays</span>";
    sCode += "\t" + '<div>Waiting for a combo box</div>';

    sCode += "\t" + "<br/>";
    sCode += "\t" + "<span>Site</span>";
    sCode += "\t" + '<input id="SAI_Site_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Site_' + oAdr.getId_Infos() + '" value="' + oAdr.getSite() + '"/>';
    sCode += "\t" + "<br/>";

    sCode += "\t" + "<br/>";
    
    sCode += "\t" + '<div>Adresse 1</div>'
    sCode += "\t" + "<span>Téléphone 1 </span>";
    sCode += "\t" + '<input id="SAI_Tel1_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Tel1_' + oAdr.getId_Infos() + '" value="' + oAdr.getTelephone1() + '"/>';
    sCode += "\t" + "<span>Courriel 1 </span>";
    sCode += "\t" + '<input id="SAI_Courriel1_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Courriel1_' + oAdr.getId_Infos() + '" value="' + oAdr.getCourriel1() + '"/>';

    sCode += "\t" + '<div>Adresse 2</div>'
    sCode += "\t" + "<span>Téléphone 2 </span>";
    sCode += "\t" + '<input id="SAI_Tel2_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Tel2_' + oAdr.getId_Infos() + '" value="' + oAdr.getTelephone2() + '"/>';
    sCode += "\t" + "<span>Courriel 2 </span>";
    sCode += "\t" + '<input id="SAI_Courriel2_' + oAdr.getId_Infos() + '" class="SAI_" type="text" name="SAI_Courriel2_' + oAdr.getId_Infos() + '" value="' + oAdr.getCourriel2() + '"/>';

    sCode += "\t" + "</form>" + "\r\n";

    sCode += "</div>";

    return sCode;
}

///[FUNCTION][plotsAddress]Function to plots an address
///[PARAMETER][array of address][ary_Adr]The object we want plots
///[PARAMETER][integer][nLine]Line of the contact
///[RETURNS][String]HTML Code of the element
function plotsAddresses(ary_Adr, nLine){

    //our element for Address
    var oElement = document.getElementById(HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + nLine);
    //our code
    var sCode = "";
    //our count 
    var nCount = 0;
    //our iterrator
    var nIt = 0;
    //our address object 
    var oAdr = 0;    

    //get the count
    nCount = ary_Adr.length;

    while(nIt < nCount){
        oAdr = new Infos();
        oAdr.loadFromArray(ary_Adr[nIt]);
        sCode += plotsAddress(oAdr);
        //Next
        nIt++;
    }

    //yeah do da job !!!
    oElement.innerHTML = sCode;
}

///[FUNCTION][contactAddresses]Function to load and plots address of contacts
///[PARAMETER][integer][nLine]Line of the contact
///[RETURNS][Boolean]True if done
function contactAddresses(nLine){

    //our element for Address
    var oElement = document.getElementById(HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + nLine);

    oElement.innerHTML = "Adresse en cours de chargement !";

    if(Heimdall.members.products.contacts.Contacts[nLine].members["IdLinks"] == null){
        oElement.innerHTML = "Pas d'adresse !";
        return false;
    }

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){

        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //Plots !

            ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("contactAddresses, response text : " + "\r\n" + "\t" + oReq.responseText);
            }
            ///[/DEBUG]

            plotsAddresses(JSON.parse(oReq.responseText), nLine);
        }
        
    };

    //oReq.responseText
    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        console.log("contactAddresses, idlinks : " + "\r\n" + "\t" + Heimdall.members.products.contacts.Contacts[nLine].members["IdLinks"]);
    }
    ///[/DEBUG]

    //inform
    oElement.innerHTML = "Préparation de la requête en cours !";

    //prepare the query*********************
    //check the open
    oReq.open("POST", "php/Contact_Infos_Links_Infos_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=" + Heimdall.members.products.contacts.Contacts[nLine].members["IdLinks"] + "&Session=" + "" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][contactDivHeader]Function to plot the contact header
///[RETURNS][String]HTML Code of the element
function contactDivHeader(){
    //our code
    var sCode = "";
    //our type
    var sType = "";
    //our name
    var sName = "Nom";
    //our type name 
    var sTypeName = "contact_types"
    //our organisation
    var sOrga = "Orga/Type";
    //our function 
    var sFunction = "Fonction/APE";

    //type position
    var nPosition = 0;

    //fill sType
    sType = "<img src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\"/>";

    //master div
    sCode += "<div class=\"inlineContact heim_Block impaire\">";

    sCode += "\t" + "<div class=\"inlineContact_Contact heim_Inline_Block\">";

    sCode += "\t" + "\t" + "<div class=\"inlineContact_Contact_Type heim_Inline_Block\">" + sType + "</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineContact_Contact_Name heim_Inline_Block\">" + sName+ "</div>";

    sCode += "\t" + "</div>";

    sCode += "\t" + "<div class=\"inlineContact_Organisation heim_Inline_Block\">";

    sCode += "\t" + "\t" + "<div class=\"inlineContact_Organisation_Organisation heim_Inline_Block\">" + sOrga + "</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineContact_Organisation_Fonction heim_Inline_Block\">" + sFunction + "</div>";

    sCode += "\t" + "</div>";

    sCode += "</div>";

    //return the code
    return sCode;
}

///[FUNCTION][contactLAYDIVSave]Function to save the change in a contact
///[PARAMETER][integer][nLine]Line of the contact
///[RETURNS][Boolean]True if done
function contactLAYDIVSave(nLine){
    
    //get the contact 
    var oContact = Heimdall.members.products.contacts.Contacts[nLine];
    //element 
    var oElement = null;

    // 

    oElement = document.getElementById("COMBO_Civilite_" + nLine);
    if(oElement != null)
        oContact.setId_Civilites(parseInt(Heimdall.members.products.contacts.Civilites[oElement.selectedIndex].getId_Civilites()));

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug && oElement != null){
        console.log("COMBO_Civilite value : "  + oElement.selectedIndex);
        console.log("COMBO_Civilite ID : "  + Heimdall.members.products.contacts.Civilites[oElement.selectedIndex].getId_Civilites());
    }
    ///[/DEBUG]

    oElement = document.getElementById("SAI_Nom_" + nLine);
    if(oElement != null)
        oContact.setNom(oElement.value);

    oElement = document.getElementById("SAI_Prenom_" + nLine);
    if(oElement != null)
        oContact.setPrenom(oElement.value);

    oElement = document.getElementById("COMBO_Titres_" + nLine);
    if(oElement != null)
        oContact.setId_Titres(parseInt(Heimdall.members.products.contacts.Titres[oElement.selectedIndex].getId_Titres()));

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug && oElement != null){
        console.log("COMBO_Titres value : "  + oElement.selectedIndex);
        console.log("COMBO_Titres ID : "  + Heimdall.members.products.contacts.Titres[oElement.selectedIndex].getId_Titres());
    }
    ///[/DEBUG]

    ///[DEBUG]Operation time !!!
    if(Heimdall.flags.debug){
        console.log("contactLAYDIVSave, json : " + "\r\n" + oContact.exportToJson());
        console.log("user id : " + Heimdall.members.user["UserId"]);
    }
    ///[/DEBUG]

    //will change !!!
    if(oContact.getId_Accreditations_Item() == 0)
        oContact.setId_Accreditations_Item(1);

    return oContact.save(Heimdall.members.user["UserId"], ".");
}

///[FUNCTION][contactLAYDIVDelete]Function to delete the change in a contact
///[PARAMETER][integer][nLine]Line of the contact
///[RETURNS][Boolean]True if done
function contactLAYDIVDelete(nLine){
    alert("Delete NotDevYet : " + nLine);
}

///[FUNCTION][contactLAYDiv]Function to plot a contact
///[PARAMETER][integer][nLine]Line of the contact
///[RETURNS][String]HTML Code of the element
function contactLAYDiv(sIdPart, nLine){
    //our code
    var sCode = "";
    //our civilities part ----
    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;
    //position of the civilite
    var nPosition = 0;

    //sCode += "<form action=\"contactLAYDIVSave(" +nLine + ")\">" + "\r\n";
    sCode += "<form class=\"LAY_\">" + "\r\n";

    sCode += "\t" + "<select id=\"COMBO_Civilite_" + sIdPart + "\">" + "\r\n";
    //get the count
    nCount = Heimdall.members.products.contacts.Civilites.length;
    //init the iterator
    nIt = 0;
    //loop
    while(nIt < nCount){
        //add option
        sCode += "\t" + "\t" +"<option value=\"" + Heimdall.members.products.contacts.Civilites[nIt].getId_Civilites() + "\">" + Heimdall.members.products.contacts.Civilites[nIt].getNom() + "</option>" + "\r\n";
        //Next
        nIt++;
    }
    sCode += "\t" + "</select>" + "\r\n";

    sCode += '\t\t<input id="SAI_Nom_' + sIdPart + '" class="SAI_" type="text" name="SAI_Nom_' + nLine + '" value="' + Heimdall.members.products.contacts.Contacts[nLine].getNom() + '"/>';
    sCode += '\t\t<input id="SAI_Prenom_' + sIdPart + '" class="SAI_" type="text" name="SAI_Prenom_' + nLine + '" value="' + Heimdall.members.products.contacts.Contacts[nLine].getPrenom() + '"/>';

    //sCode += "\t" + "<br/>" + "\r\n";

    sCode += "\t" + "<select id=\"COMBO_Titres_" + sIdPart + "\">" + "\r\n";
    //get the count
    nCount = Heimdall.members.products.contacts.Titres.length;
    //init the iterator
    nIt = 0;
    //loop
    while(nIt < nCount){
        //add option
        sCode += "\t" + "\t" +"<option value=\"" + Heimdall.members.products.contacts.Titres[nIt].getId_Titres() + "\">" + Heimdall.members.products.contacts.Titres[nIt].getNom() + "</option>" + "\r\n";
        //Next
        nIt++;
    }
    sCode += "\t" + "</select>" + "\r\n";

    sCode += "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"contactLAYDIVSave(" + sIdPart + ")\">Sauvegarder</div>" + "\r\n";
    //sCode += "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right\" onclick=\"contactLAYDIVSave(" + nLine + ")\">Sauvegarder</div>" + "\r\n";
    sCode += "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"contactLAYDIVDelete(" + sIdPart + ")\">Supprimer</div>" + "\r\n";
    //sCode += "\t" + "<div class=\"BTN_ BTN_Fiche heim_Right heim_Inline_Block\" onclick=\"contactLAYDIVDelete(" + nLine + ")\">Supprimer</div>" + "\r\n";

    sCode += "</form>";
    sCode += "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID + nLine + "\">---</div>";

    //return the code
    return sCode;
}

function contactLAYDivFill(sIdPart, oContact){

    //our position
    var nPosition = 0;
    //our element to do everything
    var oElement = null;

    if(oContact == null)
        return false;

    oElement = document.getElementById("COMBO_Civilite_" + sIdPart);
    if(oElement != null){
        nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Civilites, "nId_Civilites", oContact.getId_Civilites());
        if(nPosition != POTOURS_FIND_NOTFOUND){
            //Option created in the same order than stored
            oElement.selectedIndex = nPosition;
        }
    }
        
    oElement = document.getElementById("SAI_Nom_" + sIdPart);
    if(oElement != null)
        oElement.value = oContact.getNom();

    oElement = document.getElementById("SAI_Prenom_" + sIdPart);
    if(oElement != null)
        oElement.value = oContact.getPrenom();

    oElement = document.getElementById("COMBO_Titres_" + sIdPart);
    if(oElement != null){
        nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Titres, "nId_Titres", oContact.getId_Titres());
        if(nPosition != POTOURS_FIND_NOTFOUND){
            //Option created in the same order than stored
            oElement.selectedIndex = nPosition;
        }
    }

    return true;
}

///[FUNCTION][contactClick]Function on click of a contact
///[PARAMETER][integer][nLine]Line of the contact
function contactClick(nLine){

    //Extended elements we must close
    var oExt = document.getElementsByClassName("heim_Block LAY_Extension");
    //our count 
    var nCount = 0;
    //our iterator
    var nIt = 0;
    //our element number
    var nElement = -1;
    //our element to extend
    var oElement = null;
    //combo value element
    var COMBO_Civilite = null;
    //combo title
    var COMBO_Titres = null;
    //position of civilite
    var nPosition = 0;
    
    //first : remove the extended !
    if(oExt != null){
        nCount = oExt.length;
        while(nIt < nCount){

            ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("contactClick, class LAY_Extension " + nIt + "/" + nCount);
            }
            ///[/DEBUG]

            //
            if(oExt[nIt] != null){

                ///[DEBUG]Operaion time !!!
                if(Heimdall.flags.debug){
                    console.log("\t" + "=> ID : " + oExt[nIt].id);
                    console.log("\t" + "\t" + "=> className : " + oExt[nIt].className);
                }
                ///[/DEBUG]

                //oExt[nIt].className = "heim_Block";//raise error !!!
                if(oExt[nIt].id != HEIMDALL_LAY_CONTACT_EXTENDED_ID + nLine)
                    oExt[nIt].innerHTML = "";
                else
                    nElement = nIt;
            }
            //next
            nIt++;
        }
    }
    
    //second : extend new
    oElement = document.getElementById(HEIMDALL_LAY_CONTACT_EXTENDED_ID + nLine);
    if(oElement != null){
        if(oElement.innerHTML == ""){
            //create dude
            oElement.innerHTML = contactLAYDiv(nLine, nLine);

            contactLAYDivFill(nLine, Heimdall.members.products.contacts.Contacts[nLine]);

            //Obtain Address
            contactAddresses(nLine);

        }
    }

    
}

///[FUNCTION][contactLAYDiv]Function to plot a contact inline
///[PARAMETER][Contacts][oContact]Our contact we plots
///[PARAMETER][integer][nLine]Line of the contact
///[RETURNS][String]HTML Code of the element
function contactdiv(oContact, nLine){

    //our code
    var sCode = "";
    //our type
    var sType = "";
    //our name
    var sName = "";
    //our type name 
    var sTypeName = ""
    //our organisation
    var sOrga = "Orga/Type";
    //our function 
    var sFunction = "Fonction/APE";
    //Civilites
    var sCivilite = "";

    //type position
    var nPosition = 0;
    //paire or not ?
    var bPaire = (nLine % 2 == 0);

    //fill sType
    nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Contact_Types, "nId_Contact_Types", oContact.getId_Contact_Types());
    if(nPosition != POTOURS_FIND_NOTFOUND){
        //to load the image
        sTypeName = Heimdall.members.products.contacts.Contact_Types[nPosition].getNom();
        sType = "<img src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\"/>";
    }
    else
        sType = "Type not found (aryL :" + Heimdall.members.products.contacts.Contact_Types.length + ")";

    //fill
    // nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Civilites, "nId_Civilites", oContact.getId_Civilites());
    // if(nPosition != POTOURS_FIND_NOTFOUND)
    //     sName = Heimdall.members.products.contacts.Civilites[nPosition].getAbr() + " ";

    //the name
    if(oContact.getPrenom() == "")
        sName += oContact.getNom();
    else
        sName += oContact.getPrenom() + " " + oContact.getNom();

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        sName += " ( ID : " + oContact.getId_Contacts() + ")";
    }
    ///[/DEBUG]   

    //if the function is not null
    if(oContact.members["fonction"] != null)
        sFunction = oContact.members["fonction"];
    else
        sFunction = "- - -";

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        console.log("contactdiv, contact fonction : " + oContact.members["fonction"]);
    }
    ///[/DEBUG]   

    //master div
    if(bPaire)
        sCode += "<div class=\"inlineContact heim_Block paire\" onclick=\"contactClick(" + nLine + ")\">";
    else
        sCode += "<div class=\"inlineContact heim_Block impaire\" onclick=\"contactClick(" + nLine + ")\">";

    sCode += "\t" + "<div class=\"inlineContact_Contact heim_Inline_Block\">";

    sCode += "\t" + "\t" + "<div class=\"inlineContact_Contact_Type heim_Inline_Block\">" + sType + "</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineContact_Contact_Name heim_Inline_Block\">" + sName+ "</div>";

    sCode += "\t" + "</div>";

    sCode += "\t" + "<div class=\"inlineContact_Organisation heim_Inline_Block\">";

    sCode += "\t" + "\t" + "<div class=\"inlineContact_Organisation_Organisation heim_Inline_Block\">" + sOrga + "</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineContact_Organisation_Fonction heim_Inline_Block\">" + sFunction + "</div>";

    sCode += "\t" + "</div>";

    sCode += "<div id=\"" + HEIMDALL_LAY_CONTACT_EXTENDED_ID + nLine + "\" class=\"heim_Block LAY_Extension\" ></div>";

    sCode += "</div>";

    //return the code
    return sCode;
}

///[FUNCTION][plotMoreContact]Function to plot line of contacts
///[PARAMETER][integer][nOffset]Our start line
///[PARAMETER][integer][nLimit]integer to determine the last print line
///[RETURNS][Boolean]True if done
function plotMoreContact(nOffset, nLimit){
    return plotContacts(Heimdall.members.products.contacts.Contacts, false, nOffset, nLimit);
}

///[FUNCTION][plotMoreContact]Function to plot line of contacts
///[PARAMETER][array of contacts][ary_Contacts]Our array with contact to plots
///[PARAMETER][boolean][bFromJson]Load form Json ?
///[PARAMETER][integer][nOffset]Our start line
///[PARAMETER][integer][nLimit]integer to determine the last print line
///[RETURNS][Boolean]True if done
function plotContacts(ary_Contacts, bFromJson, nOffset, nLimit){

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        var xStartTime = Date.now();
        var xEndTime = 0;
        var xTime = 0;
    }
    ///[/DEBUG]

    //our contact
    var oContact = null;
    //array of stuff
    var ary_Json = [];
    //our element list
    var oElement = document.getElementById("PNL_List");
    //our btn element
    var oBTN_ = document.getElementById(HEIMDALL_BTN_PLOTS_MORE_CONTACT);
    //our count
    var nCount = 0;
    //our count plots
    var nCountPlot = 0;
    //our iterator
    var nLine = 0;

    //More ?
    var bMore = false;
    
    //get the nLine start
    nLine = nOffset;
    //get the count 
    if(nLimit > 0){
        nCount = ary_Contacts.length;
        nCountPlot = Math.min( ary_Contacts.length, nOffset + nLimit);
        if(nCount < ary_Contacts.length)
            bMore = true;
    }   
    else{
        nCount = ary_Contacts.length;
        nCountPlot = ary_Contacts.length;
    }
        
    //delete the BTN to add
    if(oBTN_ != null)
        oBTN_.remove();
    //reset the graphical
    if(nOffset == 0)
        oElement.innerHTML = contactDivHeader();

    //ary_Contacts var an array from JSON
    if(bFromJson){
        //reset the value
        Heimdall.members.products.contacts.Contacts = [];
        //to the loop machine
        while(nLine < nCount){
            //init
            oContact = new Contacts();
            //oContact.loadFromJson(JSON.stringify(ary_Json[nLine]));
            oContact.loadFromArray(ary_Contacts[nLine]);
            //add fonction in memory ]:)
            oContact.members["fonction"] = ary_Contacts[nLine]["fonction"];
            //add the contact info
            if(ary_Contacts[nLine]["IdLinks"] === undefined)   
                oContact.members["IdLinks"] = 0;
            else
                oContact.members["IdLinks"] = ary_Contacts[nLine]["IdLinks"];

             ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("plotContacts, contact fonction : " + ary_Contacts[nLine]["fonction"]);
                console.log("plotContacts, ary IdLinks : " + ary_Contacts[nLine]["IdLinks"]);
                console.log("plotContacts, contact IdLinks : " + oContact.members["IdLinks"]);
                console.log("plotContacts, JSON : " + JSON.stringify( ary_Contacts[nLine] ) );
            }
            ///[/DEBUG]   

            //add to the global list
            Heimdall.members.products.contacts.Contacts.push(oContact);
            //add it!!!
            if(nLine < nCountPlot)
                oElement.innerHTML += contactdiv(oContact, nLine); 
            //next
            nLine++;
        }
    }
    else{
        //to the loop machine
        while(nLine < nCountPlot){
            //seems faster isn't it ?
            oElement.innerHTML += contactdiv(ary_Contacts[nLine], nLine); 
            //next
            nLine++;
        }
    }
    
    //add the BTN_
    if(nCount != nCountPlot){
        nOffset += HEIMDALL_NUMBER_OF_CONTACTS_PLOTS;
        oElement.innerHTML += "<div id =\"" + HEIMDALL_BTN_PLOTS_MORE_CONTACT + "\" class=\"BTN_\" onclick=\"plotMoreContact(" + nOffset +", " + HEIMDALL_NUMBER_OF_CONTACTS_PLOTS + ")\">Voir " + HEIMDALL_NUMBER_OF_CONTACTS_PLOTS + " résultats de plus !</div>";
    }

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        xEndTime = Date.now();
        xTime = xEndTime - xStartTime;
        oElement.innerHTML += "<div>Execution en " + xTime + " millisecondes ]:) Pour " + nLine + " Element(s)</div>";
    }
    ///[/DEBUG]

}

///[FUNCTION][deleteSelectionField]Function to delete a Field of selection
///[PARAMETER][String][sFieldName]Field name to delete
///[RETURNS][Boolean]True if done
function deleteSelectionField(sFieldName){
    
    //get our element 
    var oElement = document.getElementById(sFieldName);
    //var the parentElement
    var oParent = oElement.parentElement;
    //container class
    var oContainers = document.getElementsByClassName(HEIMDALL_LAY_QUERY_Filter_Container);
    //
    var oBTN = document.getElementById("BTN_Add_Query_Condition");


    //test dude
    if(oElement != null)
        //oElement.remove();//Mozilla Cool way of life
        oParent.removeChild(oElement);//Damn you baka IE
    
    //did we have containers ?
    if(oContainers != null){
        //is there anything in it ?
        if(oContainers.length > 0){
            //if the element container is not the last
            if(oParent.id != oContainers[oContainers.length - 1].id){
                //oParent.parentElement.insertBefore(oParent, oParent.parentElement.lastChild);
                oParent.parentElement.insertBefore(oParent, oBTN);
            }
        }
    }

    //alert('NotDevYet');
    return true;
}

///[FUNCTION][createSelectionField]Function to plot line of contacts
///[PARAMETER][String][sNext]Next field name
///[RETURNS][Boolean]True if done
function createSelectionField(sNext){
    //our code
    var sCode = "";

    //create the block
    sCode += "<div id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    //sCode += "<form id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    sCode += "\t" + "<button id=\"BTN_DEL_" + sNext + "\" class=\"BTN_ heim_Inline_Block\" type=\"button\" onclick=\"deleteSelectionField('" + sNext + "')\">-</button>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_Column_" + sNext + "\" onkeyup=\"contactKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sNom\">Nom</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sPrenom\">Prénom</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sAPEFonction\">Ape/Fonction</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_COND_" + sNext + "\" onkeyup=\"contactKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_StartsWith + "\">Commence Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_EndsWith +"\">Termine Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_Contains +"\">Contient</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + '<input id="SAI_Value_' + sNext + '" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="contactKeySearch(event)"/>';
    //sCode += "\t" + "<div class=\"heim_Inline_Block\">" + sNext + "</div>" + "\r\n";
    sCode += "</div>";
    //sCode += "</form>";

    return sCode;
}

///[FUNCTION][addSelectionField]Function to plot line of contacts
///[RETURNS][Boolean]True if done
function addSelectionField(){

    //get container element 
    var oElement = document.getElementById("LAY_Query_extended");
    //our next element 
    var oNext = null;
    //Next element name 
    var sNext = "";

    //our count 
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //find next number to add
    nCount = HEIMDALL_NUMBER_OF_FILTER_MAX;
    sNext = HEIMDALL_LAY_QUERY_Filter + nLine;
    oNext = document.getElementById(sNext);
    while(nLine < nCount && oNext != null){
        //next
        nLine++;
        sNext = HEIMDALL_LAY_QUERY_Filter + nLine;
        oNext = document.getElementById(sNext);
    }

    //second time dude !!!
    if(oNext != null || nLine >= nCount){
        alert('Trop de critère, la limite est de ' + HEIMDALL_NUMBER_OF_FILTER_MAX + " critères ...\r\n");
        return false;
    }

    //HEIMDALL_LAY_QUERY_Filter_Container + nLine 

    oElement = document.getElementById(HEIMDALL_LAY_QUERY_Filter_Container + nLine);
    //Add it
    oElement.innerHTML += createSelectionField(sNext);

    return true;
}

///[FUNCTION][addSelectionField]Function to plot line of contacts
///[RETURNS][Array of Arguments]Array of arguments
function createArgs(){

    //get the content layout
    var oElement = document.getElementById("SAI_search_Query");
    //our next element 
    var oNext = null;
    //Next element name 
    var sNext = "";
    //the qury struct
    var struct_ = {};

    //our count 
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //our resutl array 
    var ary_Result = [];

    //the sai_ always here field
    ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sNom", "sPrenom"], Value : oElement.value});

    //find next number to add
    nCount = HEIMDALL_NUMBER_OF_FILTER_MAX;
    while(nLine < nCount){
        //get the nod
        sNext = HEIMDALL_LAY_QUERY_Filter + nLine;
        oNext = document.getElementById(sNext);
        
        //does the element exists
        if(oNext != null){

            //define the struct
            struct_ = {Method : "", Names : [], Value : ""};
            //fill the struct
            struct_.Method = document.getElementById("COMBO_COND_" + sNext).value;
            struct_.Names = [document.getElementById("COMBO_Column_" + sNext).value];
            struct_.Value = document.getElementById("SAI_Value_" + sNext).value;
            //console.log(JSON.stringify(struct_));
            //push the result !
            ary_Result.push(struct_);
        }

        //next
        nLine++;
    }

    //return [{Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sNom", "sPrenom"], Value : oElement.value}];
    return ary_Result;
}

///[FUNCTION][contactDoQuery]Function to manage the research
///[RETURNS][Boolean]True if done
function contactDoQuery(){

    //get the content layout
    var oElement = document.getElementById("PNL_List");

    //Ya ya ya !
    //alert("It's working bro ! or sis ... :)" );//just stop it !!!

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){

        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //Plots !
            plotContacts(JSON.parse(oReq.responseText), true, 0, HEIMDALL_NUMBER_OF_CONTACTS_PLOTS);
        }
        
    };

    //inform
    oElement.innerHTML = "Préparation de la requête en cours";

    //prepare the query*********************
    //check the open
    oReq.open("POST", "php/queryManager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "" + "&Action=contacts_contacts&Args=" + JSON.stringify(createArgs())); 
    //Return the job !
    return true;
}

function contactKeySearch(event){
    //notDevYet();
    //alert(event.keyCode);

    if(event.keyCode == 13)
        contactDoQuery();
}

function contactWinContact(oContact){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    if(oContact == null){
        oContact = new Contacts();
        oContact.setId_Contact_Types(1);//set to the type contact !!!
        nLine = Heimdall.members.products.contacts.Contacts.length;
        Heimdall.members.products.contacts.Contacts.push(oContact);
    }
        
    //create the win form
    WIN_Contacts = new  Overview("WIN_Contacts", 640, 480, "#6669A3", 0.5);

    //get the element to fill it
    oElement = document.getElementById("WIN_Contacts");
    if(oElement != null){
        oElement.innerHTML = contactLAYDiv(nLine, nLine) + "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Contacts.dispose();\">Quitter</div>";
        //oElement.innerHTML = contactLAYDiv("Solo", nLine) + "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Contacts.dispose();\">Quitter</div>";
    }

    contactLAYDivFill(nLine, oContact);

}

function contactsAddMenu(sDivID){
    
    //our code
    var sCode = "";

    sCode += "<div>" + "\r\n";

    sCode += "\t" + "<div>Contacts</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Contact\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();contactWinContact(null);\">Ajouter un contact</div>" + "\r\n";

    sCode += "</div>" + "\r\n";

    return sCode;
}

///[FUNCTION][init_contacts]Function to init the contact part
///[RETURNS][Boolean]True if done
function init_contacts(){
    
    //our code
    var sCode = "";
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //init heimdall section
    Heimdall.members.products["contacts"] = {};
    Heimdall.members.products.contacts["Contact_Types"] = [];
    Heimdall.members.products.contacts["Civilites"] = [];
    Heimdall.members.products.contacts["Titres"] = [];
    Heimdall.members.products.contacts["Contacts"] = [];
    Heimdall.members.products.contacts["Groups"] = [];

    Heimdall.members.products.contacts["addMenu"] = contactsAddMenu;

    //init the loader of Civilities/Contact_types
    loadStaticsContactsData();

    //if our 
    if(oElement != null){

        //build da code !!!
        sCode += '<div id="PNL_Research" class="PNL_ heim_Inline_Block">\r\n';

        sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>RECHERCHE</h1></div>\r\n';
        sCode += '<br/>\r\n';
        sCode += '\t<div id="LAY_Query" class="LAY_ heim_Right heim_Block">';

        sCode += '\t\t<input id="SAI_search_Query" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="contactKeySearch(event)"/>';
		sCode += '\t\t<button id="BTN_Search_Query" class="BTN_" type="button" onclick="contactDoQuery()">Q</button>';
        
        sCode += '\t</div>\r\n';
        sCode += '<br/>\r\n';
        sCode += '<br/>\r\n';
        
        sCode += '\t<div id="LAY_Query_extended" class="LAY_ heim_Block">';

        //find next number to add
        nCount = HEIMDALL_NUMBER_OF_FILTER_MAX;
        while(nLine < nCount){
            sCode += "\t<div id=\"" + HEIMDALL_LAY_QUERY_Filter_Container + nLine + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter_Container + "\"></div>\r\n";
            //next
            nLine++;
        }

        sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="addSelectionField()">+</button>';

        sCode += '\t</div>\r\n';
        
        sCode += '</div>\r\n';

        sCode += '<div id="PNL_List" class="PNL_ heim_Inline_Block">NOpe</div>';

        oElement.innerHTML = sCode;

        return true;
    }

    return false;
}