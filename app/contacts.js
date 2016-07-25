/*
* FIle to init and manage the contact products
*
*
*/

/// <reference path="../lib/CONTACTS_contact_Types.js" />

const HEIMDALL_NUMBER_OF_FILTER_MAX = 4;
const HEIMDALL_NUMBER_OF_CONTACTS_PLOTS = 25;
const HEIMDALL_QUERY_METHOD_LIKE_StartsWith = "COND_LIKE_SW";
const HEIMDALL_QUERY_METHOD_LIKE_EndsWith = "COND_LIKE_EW";
const HEIMDALL_QUERY_METHOD_LIKE_Contains = "COND_LIKE_C";

const HEIMDALL_LAY_QUERY_Filter = "LAY_Query_Filter_";
const HEIMDALL_BTN_PLOTS_MORE_CONTACT = "BTN_More_Contacts";

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

function loadStaticsContactsData(){

    loadStatics_Contact_Types();
    loadStatics_Civilites();

    return true;
}

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

function contactClick(nLine){
    alert(Heimdall.members.products.contacts.Contacts[nLine].getNom() + " " + Heimdall.members.products.contacts.Contacts[nLine].getPrenom());
}

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

    sCode += "</div>";

    //return the code
    return sCode;
}

function plotMoreContact(nOffset, nLimit){
    return plotContacts(Heimdall.members.products.contacts.Contacts, false, nOffset, nLimit);
}

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

function deleteSelectionField(sFieldName){
    
    //get our element 
    var oElement = document.getElementById(sFieldName);

    //test dude
    if(oElement != null)
        oElement.remove();
    
    //alert('NotDevYet');
    return true;
}

function createSelectionField(sNext){
    //our code
    var sCode = "";

    //create the block
    sCode += "<div id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    sCode += "\t" + "<button id=\"BTN_DEL_" + sNext + "\" class=\"BTN_ heim_Inline_Block\" type=\"button\" onclick=\"deleteSelectionField('" + sNext + "')\">-</button>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_Column_" + sNext + "\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sNom\">Nom</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sPrenom\">Prénom</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_COND_" + sNext + "\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_StartsWith + "\">Commence Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_EndsWith +"\">Termine Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_Contains +"\">Contient</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + '<input id="SAI_Value_' + sNext + '" class="SAI_" type="text" name="SAI_search_Query" value=""/>';
    //sCode += "\t" + "<div class=\"heim_Inline_Block\">" + sNext + "</div>" + "\r\n";
    sCode += "</div>";

    return sCode;
}

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

    //is there too much field ?
    if(oElement.childElementCount >= HEIMDALL_NUMBER_OF_FILTER_MAX){
        alert('Trop de critère, la limite est de ' + HEIMDALL_NUMBER_OF_FILTER_MAX + " critères");
        return false;
    }

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
    if(oNext != null){
        alert('Trop de critère, la limite est de ' + HEIMDALL_NUMBER_OF_FILTER_MAX + " critères ...\r\nMais il y a un truc bizarre");
        return false;
    }

    //Add it
    oElement.innerHTML += createSelectionField(sNext);

    return true;
}

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

///[FUNCTION][init_contacts]Function to init the contact part
function init_contacts(){
    
    //our code
    var sCode = "";
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

    //init heimdall section
    Heimdall.members.products["contacts"] = {};
    Heimdall.members.products.contacts["Contact_Types"] = [];
    Heimdall.members.products.contacts["Civilites"] = [];
    Heimdall.members.products.contacts["Contacts"] = [];

    //init the loader of Civilities/Contact_types
    loadStaticsContactsData();

    //if our 
    if(oElement != null){

        //build da code !!!
        sCode += '<div id="PNL_Research" class="PNL_ heim_Inline_Block">\r\n';

        sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>RECHERCHE</h1></div>\r\n';
        sCode += '<br/>\r\n';
        sCode += '\t<div id="LAY_Query" class="LAY_ heim_Right heim_Block">';

        sCode += '\t\t<input id="SAI_search_Query" class="SAI_" type="text" name="SAI_search_Query" value=""/>';
		sCode += '\t\t<button id="BTN_Search_Query" class="BTN_" type="button" onclick="contactDoQuery()">Q</button>';
        
        sCode += '\t</div>\r\n';
        sCode += '<br/>\r\n';
        sCode += '<br/>\r\n';
        
        sCode += '\t<div id="LAY_Query_extended" class="LAY_ heim_Block">';

        sCode += '\t</div>\r\n';
        sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="addSelectionField()">+</button>';

        sCode += '</div>\r\n';

        sCode += '<div id="PNL_List" class="PNL_ heim_Inline_Block">NOpe</div>';

        oElement.innerHTML = sCode;

        return true;
    }

    return false;
}