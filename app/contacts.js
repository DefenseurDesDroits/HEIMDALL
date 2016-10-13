/*
* FIle to init and manage the contact products
*
*
*/

/// <reference path="../lib/CONTACTS_contact_Types.js" />
/// <reference path="../lib/CONTACTS_Civilites.js" />
/// <reference path="../lib/CONTACTS_Titres.js" />

/// <reference path="../lay/LAY_Contacts.js" />
/// <reference path="../lay/LAY_Organisations.js" />

const HEIMDALL_AUTO_QUERY_SIZE = 2;

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

Heimdall_Contacts = {
    //our menu to generated
    generateMenuCode : function(){
        return '<li class="OPT_ current">Contacts</li>';
    },
    //method to generate
    generateHTML : function(){
        //our code
        var sCode = "";

        //our code to make
        sCode += '<div id="OPT_Contacts_General" class="OPT_ current">Général</div>';
		sCode += '<div id="OPT_Contacts_Contacts" class="OPT_ others">Contacts</div>';
		sCode += '<div id="OPT_Contacts_Users" class="OPT_ others">Users</div>';
		sCode += '<div id="OPT_Contacts_Organisations" class="OPT_ others">Organisations</div>';
		sCode += '<div id="OPT_Contacts_Groups" class="OPT_ others">Groupes</div>';

        //our code
        return sCode;
    },
    //sub product choose
    onClick : function(sId){
        return false;
    },
    //product choose
    onProductClick : function(){
        //the element 
        var oElement = null;

        //get the element
        oElement = document.getElementById("OPT_Detail");

        //change the HTML
        oElement.innerHTML = Heimdall_Contacts.generateHTML();

        //return the good
        return true;
    }
};

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

///[FUNCTION][loadStatics_Titres]Function to load all the Titles from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Accreditations(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oAccreditations = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Accreditations = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oAccreditations = new Accreditations();
                //load it !
                oAccreditations.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Accreditations.push(oAccreditations);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Accreditations_manager.php", true);
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

///[FUNCTION][loadStatics_Groups]Function to load all the Groups from the DTB
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

///[FUNCTION][loadStatics_Pays]Function to load all the Country from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Pays(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oPays = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Pays = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oPays = new Pays();
                //load it !
                oPays.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Pays.push(oPays);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Pays_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStatics_Organisation_Types]Function to load all the kind of operations from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Organisation_Types(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oOrganisation_Types = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Organisation_Types = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oOrganisation_Types = new Organisation_Types();
                //load it !
                oOrganisation_Types.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Organisation_Types.push(oOrganisation_Types);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Organisation_Types_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStatics_Langues]Function to load all the kind of operations from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Langues(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oLangues = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.contacts.Langues = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oLangues = new Langues();
                //load it !
                oLangues.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.contacts.Langues.push(oLangues);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Langues_manager.php", true);
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
    loadStatics_Accreditations();
    //loadStatics_Groups();//do you want security troubles ? O_o
    loadStatics_Pays();
    loadStatics_Langues();
    loadStatics_Organisation_Types();

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

function accreditationHTML_1(){
    return "Tous";
}

function accreditationHTML_2(){
    
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

function accreditationHTML_3(){
    
    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;
    
    return "Personel";
}

function accreditationLAYClick(nId){
    
    //our type name
    var sTypeName = "";

    //element 
    var oElement = null;

    //Accreditations ID
    var nAccreditation = 0;

    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;
    

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
        oElement = document.getElementById("Accreditations_" + nAccreditation);
        //the element exists ?
        if(oElement != null){
            oElement.src = "img/" + sTypeName + ".png";
        }
        //Next 
        nIt++;
    }

    sTypeName = Heimdall.members.products.contacts.Accreditations[nId].getNom();
    nAccreditation = Heimdall.members.products.contacts.Accreditations[nId].getId_Accreditations();

    //get element
    oElement = document.getElementById("Accreditations_" + nAccreditation);
    //the element exists ?
    if(oElement != null){
        oElement.src = "img/" + sTypeName + "_Selected.png";
    }

    //get element
    oElement = document.getElementById("Accreditations_Extension");
    //the element exists ?
    if(oElement != null){
        oElement.innerHTML = eval("accreditationHTML_" + nAccreditation + "();");
        //oElement.innerHTML = "Nah !!!";
    }
    //MsgBox("Accreditation : " + nId);
}

function accreditationsLAYDiv(){
    //our code
    var sCode = "";
    //our type name
    var sTypeName = "";
    //Accreditations ID
    var nAccreditation = 0;

    //our count
    var nCount = 0;
    //our iterator
    var nIt = 0;

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
        sCode += "<img id=\"Accreditations_" + nAccreditation + "\" src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\" onclick=\"accreditationLAYClick(" + nIt + ")\"/>";
        //sCode += "<img id=\"Accreditations_" + nAccreditation + "\" src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\" onclick=\"accreditationLAYClick(" + nAccreditation + ")\"/>";
        //next
        nIt++;
    }

    //extension div
    sCode += "<div id=\"Accreditations_Extension\"></div>";

    return sCode;
}

function LAY_Contacts_4(sDivOwner, oContacts){
    //Edition Layout
    var oLay = null;

    oLay = new LAY_Groups();

    oLay.init(sDivOwner, "Groups" +  oContacts.getId_Groups(), oContacts);

    oLay.ObjToView();
}

function LAY_Contacts_3(sDivOwner, oContacts){
    //Edition Layout
    var oLay = null;

    oLay = new LAY_Users();

    oLay.init(sDivOwner, "Users" +  oContacts.getId_Users(), oContacts);

    oLay.ObjToView();
}

function LAY_Contacts_2(sDivOwner, oContacts){
    //Edition Layout
    var oLay = null;

    oLay = new LAY_Organisations();

    oLay.init(sDivOwner, "Organisations" +  oContacts.getId_Organisations(), oContacts);

    oLay.ObjToView();
}

function LAY_Contacts_1_LoadedHandler(e){
    //get the Lay who throw it ]:)
    var LAY_ = e.detail.oObject;

    //security
    if(LAY_ != null){
        //plot !
        LAY_.ObjToView();
        //remove the eventlistener
        LAY_.members.oDiv.removeEventListener(Heimdall.Events.loaded, LAY_Contacts_1_LoadedHandler);
        //
        console.log("LAY_Contacts_1_LoadedHandler");
    }
}

function LAY_Contacts_1(sDivOwner, oContacts){

    //Edition Layout
    var oLay = null;

    oLay = new LAY_Contacts();

    oLay.init(sDivOwner, "Contacts" +  oContacts.getId_Contacts(), oContacts);

    //When it's load, plots !!!
    oLay.members.oDiv.addEventListener(Heimdall.Events.loaded, LAY_Contacts_1_LoadedHandler);
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

            eval("LAY_Contacts_" + Heimdall.members.products.contacts.Contacts[nLine].getId_Contact_Types() + "(HEIMDALL_LAY_CONTACT_EXTENDED_ID + nLine, Heimdall.members.products.contacts.Contacts[nLine]);");

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
            //load it !
            oContact.loadFromArray(ary_Contacts[nLine]);

            //what a case !!!
            switch (oContact.getId_Contact_Types()) {
                case 1://nothing to do :p
                    
                    break;
                case "2"://transform Contact as organisation
                case 2://transform Contact as organisation too
                    oContact = new Organisations();
                    oContact.loadFromArray(ary_Contacts[nLine]);
                    break;
                case "3"://transform Contact as user
                case 3://transform Contact as user too
                    oContact = new Users();
                    oContact.loadFromArray(ary_Contacts[nLine]);
                    break;
                case "4"://transform Contact as Groups
				case 4://transform Contact as Groups too
                    oContact = new Groups();
					oContact.loadFromArray(ary_Contacts[nLine]);
                    break;
                default:
                    break;
            }

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

            //add it!!!
            if(nLine < nCountPlot)
                oElement.innerHTML += contactdiv(oContact, nLine); 
            
            //add to the global list
            Heimdall.members.products.contacts.Contacts.push(oContact);

            //next
            nLine++;
        }
    }
    else{
        //to the loop machine
        while(nLine < nCountPlot){

            oContact = ary_Contacts[nLine];

            //seems faster isn't it ?
            oElement.innerHTML += contactdiv(oContact, nLine); 
            //oElement.innerHTML += contactdiv(ary_Contacts[nLine], nLine); 
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

///[FUNCTION][contactDoQuery]Function to manage the research for every case
///[PARAMETER][String][sIdWaiting]our id to plots the query work
///[PARAMETER][Pointer][ptrFunctionCreateArg]Function to create the argument of query (no parameter)
///[PARAMETER][Pointer][ptrFunctionResponse]Function to analyse the responseText (one parameter string)
///[RETURNS][Boolean]True if done
function contactDoQueryComplete(sIdWaiting, ptrFunctionCreateArg, ptrFunctionResponse){
    //get the content layout
    var oElement = document.getElementById(sIdWaiting);

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){

        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //Response
            ptrFunctionResponse(oReq.responseText);
        }
        
    };

    //inform
    if(oElement != null)
        oElement.innerHTML = "Préparation de la requête en cours";

    //prepare the query*********************
    //check the open
    oReq.open("POST", "php/queryManager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=" +Heimdall.members.user["UserId"] + "&Session=" + "" + "&Action=contacts_contacts&Args=" + JSON.stringify(ptrFunctionCreateArg())); 
    //Return the job !
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

///[FUNCTION][contactDoQuery]Function to manage the research response from the server
///[PARAMETER][String][sText]our response text to parse as Json
function contactDoQueryResponse(sText){
    //Plots !
    plotContacts(JSON.parse(sText), true, 0, HEIMDALL_NUMBER_OF_CONTACTS_PLOTS);
}

///[FUNCTION][contactDoQuery]Function to manage the research
///[RETURNS][Boolean]True if done
function contactDoQuery(){
    //call the generique function
    contactDoQueryComplete("PNL_List", createArgs, contactDoQueryResponse);
    //Call the specific :)
    return true;
}

///[FUNCTION][contactDoQuery]Function to manage te key stroke on enter to throw a research
///[PARAMETER][event][event]our key event
function contactKeySearch(event){
    //ths SAI Value
    var sValue = "";
    //our element 
    var oElement = null;

    if(event.keyCode == 13)
        contactDoQuery();

    oElement = document.getElementById("SAI_search_Query");

    if(oElement != null){
        sValue = oElement.value;

        if(sValue.length > HEIMDALL_AUTO_QUERY_SIZE)
            contactDoQuery();
    }
}

function groupWinContact(oContact){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oContact == null){
        oContact = new Groups();
        oContact.setId_Civilites(1);
        oContact.setId_Titres(1);
        oContact.setId_Accreditations_Item(1);
        oContact.setId_Contact_Types(4);//set to the type contact !!!
        // nLine = Heimdall.members.products.contacts.Contacts.length;
        // Heimdall.members.products.contacts.Contacts.push(oContact);
    }
        
    //create the win form
    WIN_Contacts = new  Overview("WIN_Contacts", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Groups();

    oLay.init("WIN_Contacts", "Groups" + oContact.getId_Groups(), oContact);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Contacts");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Contacts.dispose();\">Quitter</div>";
    }

}

function userWinContact(oContact){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oContact == null){
        oContact = new Users();
        oContact.setId_Civilites(1);
        oContact.setId_Titres(1);
        oContact.setId_Accreditations_Item(1);
        oContact.setId_Contact_Types(3);//set to the type contact !!!
        // nLine = Heimdall.members.products.contacts.Contacts.length;
        // Heimdall.members.products.contacts.Contacts.push(oContact);
    }
        
    //create the win form
    WIN_Contacts = new  Overview("WIN_Contacts", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Users();

    oLay.init("WIN_Contacts", "Users" + oContact.getId_Users(), oContact);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Contacts");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Contacts.dispose();\">Quitter</div>";
    }

}

function organisationWinContact(oContact){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oContact == null){
        oContact = new Organisations();
        oContact.setId_Civilites(1);
        oContact.setId_Titres(1);
        oContact.setId_Accreditations_Item(1);
        oContact.setId_Contact_Types(2);//set to the type contact !!!
        // nLine = Heimdall.members.products.contacts.Contacts.length;
        // Heimdall.members.products.contacts.Contacts.push(oContact);
    }
        
    //create the win form
    WIN_Contacts = new  Overview("WIN_Contacts", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Organisations();

    oLay.init("WIN_Contacts", "Organisations" + oContact.getId_Contacts(), oContact);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Contacts");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Contacts.dispose();\">Quitter</div>";
    }

}

function contactWinContact(oContact){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oContact == null){
        oContact = new Contacts();
        oContact.setId_Accreditations_Item(1);
        oContact.setId_Contact_Types(1);//set to the type contact !!!
        // nLine = Heimdall.members.products.contacts.Contacts.length;
        // Heimdall.members.products.contacts.Contacts.push(oContact);
    }
        
    //create the win form
    WIN_Contacts = new  Overview("WIN_Contacts", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Contacts();

    oLay.init("WIN_Contacts", "Contacts" + oContact.getId_Contacts(), oContact);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Contacts");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Contacts.dispose();\">Quitter</div>";
    }

}

function contactsAddMenu(sDivID){
    
    //our code
    var sCode = "";

    sCode += "<div>" + "\r\n";

    sCode += "\t" + "<div>Contacts</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Contact\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();contactWinContact(null);\">Ajouter un contact</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Organisation\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();organisationWinContact(null);\">Ajouter une organisation</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Users\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();userWinContact(null);\">Ajouter un utilisateur</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Groups\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();groupWinContact(null);\">Ajouter un group</div>" + "\r\n";

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
    Heimdall.members.products.contacts["Accreditations"] = [];
    Heimdall.members.products.contacts["Pays"] = [];
    Heimdall.members.products.contacts["Organisation_Types"] = [];
    Heimdall.members.products.contacts["Langues"] = [];

    Heimdall.members.products.contacts["addMenu"] = contactsAddMenu;
    Heimdall.members.products.contacts["generateMenuCode"] = Heimdall_Contacts.generateMenuCode;


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