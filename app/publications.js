/*
* FIle to init and manage the contact products
*
*
*/

/// <reference path="../lib/PUBLICATIONS/PUBLICATIONS_Domaines.js" />
/// <reference path="../lib/PUBLICATIONS/PUBLICATIONS_Publications.js" />
/// <reference path="../lib/PUBLICATIONS/PUBLICATIONS_Fichiers.js" />

/// <reference path="../lay/CONTACTS/LAY_Contacts.js" />
/// <reference path="../lay/CONTACTS/LAY_Organisations.js" />

// const HEIMDALL_AUTO_QUERY_SIZE = 2;

// const HEIMDALL_NUMBER_OF_FILTER_MAX = 4;
// const HEIMDALL_NUMBER_OF_CONTACTS_PLOTS = 25;
// const HEIMDALL_QUERY_METHOD_LIKE_StartsWith = "COND_LIKE_SW";
// const HEIMDALL_QUERY_METHOD_LIKE_EndsWith = "COND_LIKE_EW";
// const HEIMDALL_QUERY_METHOD_LIKE_Contains = "COND_LIKE_C";

// const HEIMDALL_LAY_QUERY_Filter = "LAY_Query_Filter_";
// const HEIMDALL_LAY_QUERY_Filter_Container = "LAY_Container_Query_Filter_";
// const HEIMDALL_BTN_PLOTS_MORE_CONTACT = "BTN_More_Contacts";

const HEIMDALL_LAY_PUBLICATIONS_EXTENDED_ID = "LAY_Publication_extension_";
//const HEIMDALL_LAY_CONTACT_EXTENDED_ID = "LAY_Contact_extension_";
const HEIMDALL_LAY_PUBLICATIONS_EXTENDED_ADDRESS_ID = "LAY_Publication_extension_address_";
//const HEIMDALL_LAY_CONTACT_EXTENDED_ADDRESS_ID = "LAY_Contact_extension_address_";

var WIN_Publications = null;

Heimdall_Publications = {
    menus : [
        {id : "OPT_Publications_General", onclick : "publicationMenu_General_CLICK();", text : "Général"},
        {id : "OPT_Publications_Domaines", onclick : "publicationMenu_Domaines_CLICK();", text : "Domaines"},
        {id : "OPT_Publications_Publications", onclick : "publicationMenu_Publications_CLICK();", text : "Publications"}
    ],
    menuClassUpdate : function(sId){
        //our count
        var nCount = 0;
        //our iterrator
        var nLine = 0;

        //the element
        var oElement = null;

        //get the count
        nCount = Heimdall_Publications.menus.length;
        //loop
        while(nLine < nCount){
            //get the element
            oElement = document.getElementById(Heimdall_Publications.menus[nLine].id);
            //we got it ?
            if(oElement != null){
                oElement.className = "OPT_ others";
            }
            //Next
            nLine++;
        }

        //if Id is good
        if(sId != null){
            //the size matter
            if(sId != ""){
                //get the element
                oElement = document.getElementById(sId);
                //we got it ?
                if(oElement != null){
                    oElement.className = "OPT_ current";
                }
            }
        }
    },
    //our menu to generated
    generateMenuCode : function(){
        return '<li id="OPT_PRODUCT_Publications" class="OPT_" onclick="Heimdall_Publications.onProductClick();">Publications</li>';
        //return '<li class="OPT_" onclick="Heimdall_Publications.onProductClick();">Publications</li>';
    },
    //method to generate
    generateHTML : function(){
        //our code
        var sCode = "";

        //our count
        var nCount = 0;
        //our iterrator
        var nLine = 0;

        //get the count
        nCount = Heimdall_Publications.menus.length;
        //loop
        while(nLine < nCount){
            //create the code !!!
            sCode += '<div id="' + Heimdall_Publications.menus[nLine].id + '" class="OPT_ others" onclick="location.hash = ' + "'" + Heimdall_Publications.menus[nLine].id + "';" + Heimdall_Publications.menus[nLine].onclick + '">' + Heimdall_Publications.menus[nLine].text + '</div>';
            //Next
            nLine++;
        }

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
        oElement.innerHTML = Heimdall_Publications.generateHTML();

        //
        publicationMenuCLICK();

        //return the good
        return true;
    }
};

///[FUNCTION][loadStatics_Domaines]Function to load all the domaine from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Domaines(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oDomaines = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.publications.Domaines = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oDomaines = new Domaines();
                //load it !
                oDomaines.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.publications.Domaines.push(oDomaines);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Domaines_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStaticsPublicationsData]Function to load all the Publications data from the DTB
///[RETURNS][Boolean]True if done
function loadStaticsPublicationsData(){
    //Our domaine loader
    loadStatics_Domaines();
    //Happy End !
    return true;
}

function publicationMenu_General_CLICK(){
    //get the content layout
    // var oElement = document.getElementById("LAY_Content");

    // oElement.innerHTML = contactMenuHTML();

    Heimdall_Publications.menuClassUpdate("OPT_Publications_General");

    notDevYet();
}

function publicationMenu_Domaines_CLICK(){
    //get the content layout
    // var oElement = document.getElementById("LAY_Content");

    // oElement.innerHTML = contactMenuHTML();

    //Heimdall_Publications.menuClassUpdate("OPT_Publications_Domaines");

    publicationsMenu_domaines_CLICK();

    //notDevYet();
}

function publicationMenu_Publications_CLICK(){
    //get the content layout
    // var oElement = document.getElementById("LAY_Content");

    // oElement.innerHTML = contactMenuHTML();

    //Heimdall_Publications.menuClassUpdate("OPT_Publications_Publications");

    publicationsMenu_publications_CLICK();

    //notDevYet();
}

function publicationMenu_Fichiers_CLICK(){
    //get the content layout
    // var oElement = document.getElementById("LAY_Content");

    // oElement.innerHTML = contactMenuHTML();

    Heimdall_Publications.menuClassUpdate("OPT_Publications_Fichiers");

    notDevYet();
}

///[FUNCTION][publicationClick]Function on click of a publication
///[PARAMETER][integer][nLine]Line of the publication
function publicationClick(nLine){

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

            //eval("LAY_Publications_" + Heimdall.members.products.contacts.Publications[nLine].getId_Publication_Types() + "(HEIMDALL_LAY_CONTACT_EXTENDED_ID + nLine, Heimdall.members.products.contacts.Publications[nLine]);");

        }
    }

}

///[FUNCTION][publicationAYDiv]Function to plot a publication inline
///[PARAMETER][Publications][oPublication]Our publication we plots
///[PARAMETER][integer][nLine]Line of the publication
///[RETURNS][String]HTML Code of the element
function publicationdiv(oPublication, nLine){

    //our code
    var sCode = "";
    //our type
    var sType = "";
    //our name
    var sName = "";
    //our type name 
    var sTypeName = ""

    //type position
    var nPosition = 0;
    //paire or not ?
    var bPaire = (nLine % 2 == 0);

    //fill sType
    nPosition = findInPotoursObjLst(Heimdall.members.products.publications.Domaines, "nId_Domaines", oPublication.getId_Domaines());
    if(nPosition != POTOURS_FIND_NOTFOUND){
        //to load the image
        sTypeName = Heimdall.members.products.products.publications.Domaines[nPosition].getNom();
        sType = "<img src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\"/>";
    }
    else
        sType = "Type not found (aryL :" + Heimdall.members.products.products.publications.Domaines.length + ")";

    //master div
    if(bPaire)
        sCode += "<div class=\"inlinePublication heim_Block paire\" onclick=\"notDevYet()\">";
        //sCode += "<div class=\"inlinePublication heim_Block paire\" onclick=\"publicationClick(" + nLine + ")\">";
    else
        sCode += "<div class=\"inlinePublication heim_Block impaire\" onclick=\"notDevYet()\">";
        //sCode += "<div class=\"inlinePublication heim_Block impaire\" onclick=\"contactClick(" + nLine + ")\">";
    //sCode += "<div class=\"inlinePublication heim_Block impaire\">";

    sCode += "\t" + "<div class=\"inlinePublication_Publication heim_Inline_Block\">";
    sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + sType + " Domaine</div>";
    sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + oPublication.getNom();
    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        sCode += " ( ID : " + oPublication.getId_Publications() + ")";
    }
    ///[/DEBUG]
    sCode += "</div>";
    //date time ?
    if(oPublication.getMaj() != "")
        sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + oPublication.getMaj() + "</div>";
    else
        sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + oPublication.getCreation() + "</div>";
    //dématerialisé
    if(oPublication.getDematerialise())
        sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + "Dématérialisé</div>";
    else
        sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + "Physique</div>";
    sCode += "\t" + "</div>";

    sCode += "</div>";

    //return the code
    return sCode;
}

///[FUNCTION][publicationDivHeader]Function to plot the publication header
///[RETURNS][String]HTML Code of the element
function publicationDivHeader(){
    //our code
    var sCode = "";
    //our type
    var sType = "";
    //our name
    var sName = "Nom";
    //our type name 
    var sTypeName = "domaines"

    //type position
    var nPosition = 0;

    //fill sType
    sType = "<img src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\"/>";

    sCode += "<div class=\"inlinePublication heim_Block impaire\">";

    sCode += "\t" + "<div class=\"inlinePublication_Publication heim_Inline_Block\">";
    sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + sType + " Domaine</div>";
    sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + "Nom</div>";
    sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + "Mise à jour</div>";
    sCode += "\t" + "\t" + "<div class=\"inlinePublication_Publication_Type heim_Inline_Block\">" + "Dématérialisé</div>";
    sCode += "\t" + "</div>";

    sCode += "</div>";

    //return the code
    return sCode;
}

///[FUNCTION][plotMorePublication]Function to plot line of publications
///[PARAMETER][integer][nOffset]Our start line
///[PARAMETER][integer][nLimit]integer to determine the last print line
///[RETURNS][Boolean]True if done
function plotMorePublication(nOffset, nLimit){
    return plotPublications(Heimdall.members.products.contacts.Publications, false, nOffset, nLimit);
}

///[FUNCTION][plotMorePublication]Function to plot line of publications
///[PARAMETER][array of publications][ary_Publications]Our array with publication to plots
///[PARAMETER][boolean][bFromJson]Load form Json ?
///[PARAMETER][integer][nOffset]Our start line
///[PARAMETER][integer][nLimit]integer to determine the last print line
///[RETURNS][Boolean]True if done
function plotPublications(ary_Publications, bFromJson, nOffset, nLimit){

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        var xStartTime = Date.now();
        var xEndTime = 0;
        var xTime = 0;
    }
    ///[/DEBUG]

    //our contact
    var oPublication = null;
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
        nCount = ary_Publications.length;
        nCountPlot = Math.min( ary_Publications.length, nOffset + nLimit);
        if(nCount < ary_Publications.length)
            bMore = true;
    }   
    else{
        nCount = ary_Publications.length;
        nCountPlot = ary_Publications.length;
    }
        
    //delete the BTN to add
    if(oBTN_ != null)
        oBTN_.remove();
    //reset the graphical
    if(nOffset == 0)
        oElement.innerHTML = publicationDivHeader();

    //ary_Publications var an array from JSON
    if(bFromJson){
        //reset the value
        Heimdall.members.products.publications.Publications = [];
        //to the loop machine
        while(nLine < nCount){
            //init
            oPublication = new Publications();
            //load it !
            oPublication.loadFromArray(ary_Publications[nLine]);

             ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("plotPublications, publication fonction : " + ary_Publications[nLine]["fonction"]);
                console.log("plotPublications, ary IdLinks : " + ary_Publications[nLine]["IdLinks"]);
                console.log("plotPublications, publication IdLinks : " + oPublication.members["IdLinks"]);
                console.log("plotPublications, JSON : " + JSON.stringify( ary_Publications[nLine] ) );
            }
            ///[/DEBUG]   

            //add it!!!
            if(nLine < nCountPlot)
                oElement.innerHTML += publicationdiv(oPublication, nLine); 
            
            //add to the global list
            Heimdall.members.products.publications.Publications.push(oPublication);

            //next
            nLine++;
        }
    }
    else{
        //to the loop machine
        while(nLine < nCountPlot){

            oPublication = ary_Publications[nLine];

            //seems faster isn't it ?
            oElement.innerHTML += publicationdiv(oPublication, nLine); 
            //next
            nLine++;
        }
    }
    
    //add the BTN_
    if(nCount != nCountPlot){
        nOffset += HEIMDALL_NUMBER_OF_CONTACTS_PLOTS;
        oElement.innerHTML += "<div id =\"" + HEIMDALL_BTN_PLOTS_MORE_CONTACT + "\" class=\"BTN_\" onclick=\"plotMorePublication(" + nOffset +", " + HEIMDALL_NUMBER_OF_CONTACTS_PLOTS + ")\">Voir " + HEIMDALL_NUMBER_OF_CONTACTS_PLOTS + " résultats de plus !</div>";
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
function deletePublicationSelectionField(sFieldName){
    
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

///[FUNCTION][createSelectionField]Function to plot line of publications
///[PARAMETER][String][sNext]Next field name
///[RETURNS][Boolean]True if done
function createPublicationSelectionField(sNext){
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

///[FUNCTION][addSelectionField]Function to plot line of publications
///[RETURNS][Boolean]True if done
function addPublicationsSelectionField(){

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

///[FUNCTION][publicationDoQuery]Function to manage the research for every case
///[PARAMETER][String][sIdWaiting]our id to plots the query work
///[PARAMETER][Pointer][ptrFunctionCreateArg]Function to create the argument of query (no parameter)
///[PARAMETER][Pointer][ptrFunctionResponse]Function to analyse the responseText (one parameter string)
///[RETURNS][Boolean]True if done
function publicationDoQueryComplete(sIdWaiting, ptrFunctionCreateArg, ptrFunctionResponse){
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

///[FUNCTION][addSelectionField]Function to plot line of publications
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

///[FUNCTION][publicationDoQuery]Function to manage the research response from the server
///[PARAMETER][String][sText]our response text to parse as Json
function publicationDoQueryResponse(sText){
    //Plots !
    plotPublications(JSON.parse(sText), true, 0, HEIMDALL_NUMBER_OF_CONTACTS_PLOTS);
}

///[FUNCTION][publicationDoQuery]Function to manage the research
///[RETURNS][Boolean]True if done
function publicationDoQuery(){
    //call the generique function
    contactDoQueryComplete("PNL_List", createArgs, contactDoQueryResponse);
    //Call the specific :)
    return true;
}

///[FUNCTION][publicationDoQuery]Function to manage te key stroke on enter to throw a research
///[PARAMETER][event][event]our key event
function publicationKeySearch(event){
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

function domaineWinPublication(oDomaine){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oDomaine == null){
        oDomaine = new Domaines();
        oDomaine.setNom("#NO NAME !!!");
    }
        
    //create the win form
    WIN_Publications = new  Overview("WIN_Publications", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Domaines();

    oLay.init("WIN_Publications", "Domaines" + oDomaine.getId_Domaines(), oDomaine);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Publications");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Publications.dispose();\">Quitter</div>";
    }

}

function publicationWinPublication(oPublication){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oPublication == null){
        oPublication = new Publications();
        oPublication.setId_Domaines(1);
        oPublication.setId_Accreditations_Item(1);
        console.log("NAh Nah !!!");
    }
        
    //create the win form
    WIN_Publications = new  Overview("WIN_Publications", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Publications();

    oLay.init("WIN_Publications", "Publications" + oPublication.getId_Publications(), oPublication);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Publications");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Publications.dispose();\">Quitter</div>";
    }

}

function fichierWinPublication(oFichier){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oFichier == null){
        oFichier = new Fichiers();
        oFichier.setVersion("#NO NAME !!!");
    }
        
    //create the win form
    WIN_Publications = new  Overview("WIN_Publications", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Organisations();

    oLay.init("WIN_Publications", "Fichiers" + oFichier.getId_Domaines(), oFichier);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Publications");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Publications.dispose();\">Quitter</div>";
    }

}

function publicationsAddMenu(sDivID){
    
    //our code
    var sCode = "";

    sCode += "<div>" + "\r\n";

    sCode += "\t" + "<div>Publications</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Domaine\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();domaineWinPublication(null);\">Ajouter un domaine</div>" + "\r\n";
    //sCode += "\t" + "<div id=\"BTN_Add_Domaine\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();notDevYet();\">Ajouter un domaine</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Publication\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();publicationWinPublication(null);\">Ajouter une publication</div>" + "\r\n";
    //sCode += "\t" + "<div id=\"BTN_Add_Publication\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();notDevYet();\">Ajouter une publication</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Fichier\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();notDevYet();\">Ajouter un fichier</div>" + "\r\n";

    sCode += "</div>" + "\r\n";

    return sCode;
}

function publicationMenuHTML(){
    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //build da code !!!
    sCode += '<div id="PNL_Research" class="PNL_ heim_Inline_Block">\r\n';

    sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>RECHERCHE</h1></div>\r\n';
    sCode += '<br/>\r\n';
    sCode += '\t<div id="LAY_Query" class="LAY_ heim_Right heim_Block">';

    sCode += '\t\t<input id="SAI_search_Query" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="publicationKeySearch(event)"/>';
    sCode += '\t\t<button id="BTN_Search_Query" class="BTN_" type="button" onclick="publicationDoQuery()">Q</button>';
    
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

    sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="addPublicationsSelectionField()">+</button>';

    sCode += '\t</div>\r\n';
    
    sCode += '</div>\r\n';

    sCode += '<div id="PNL_List" class="PNL_ heim_Inline_Block">NOpe</div>';

    return sCode;
}

function publicationMenuCLICK(){
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

    oElement.innerHTML = publicationMenuHTML();

    Heimdall_Produits.menuClassUpdate("OPT_PRODUCT_Publications");
    Heimdall_Publications.menuClassUpdate("OPT_Publications_General");

    //console.log("publicationMenuCLICK()");

    return true;
}

///[FUNCTION][init_publications]Function to init the publication part
///[RETURNS][Boolean]True if done
function init_publications(){
    
    //init heimdall section
    Heimdall.members.products["publications"] = {};
    Heimdall.members.products.publications["Domaines"] = [];

    Heimdall.members.products.publications["addMenu"] = publicationsAddMenu;
    Heimdall.members.products.publications["generateMenuCode"] = Heimdall_Publications.generateMenuCode;

    //init the loader of Publication
    loadStaticsPublicationsData();

    return true;
    //return publicationMenuCLICK();
}