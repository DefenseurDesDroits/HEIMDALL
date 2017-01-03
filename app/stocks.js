/*
* FIle to init and manage the stocks products
*
*
*/

/// <reference path="../lib/STOCKS/STOCKS_Locations.js" />
/// <reference path="../lib/STOCKS/STOCKS_Stocks.js" />
/// <reference path="../lib/STOCKS/STOCKS_Mouvements.js" />

/// <reference path="../lay/CONTACTS/LAY_Contacts.js" />
/// <reference path="../lay/CONTACTS/LAY_Organisations.js" />

//const HEIMDALL_LAY_STOCKS_EXTENDED_ID = "LAY_Stock_extension_";
const HEIMDALL_LAY_STOCKS_EXTENDED_ID = "LAY_LIST_STOCKS_";
const HEIMDALL_LAY_STOCKS_EXTENDED_ADDRESS_ID = "LAY_Stock_extension_address_";

var WIN_Stocks = null;

Heimdall_Stocks = {
    menus : [
        {id : "OPT_Stocks_Locations", onclick : "stockMenu_Locations_CLICK();", text : "Locations"},
        {id : "OPT_Stocks_Stocks", onclick : "stockMenu_Stocks_CLICK();", text : "Stocks"}
    ],
    menuClassUpdate : function(sId){
        //our count
        var nCount = 0;
        //our iterrator
        var nLine = 0;

        //the element
        var oElement = null;

        //get the count
        nCount = Heimdall_Stocks.menus.length;
        //loop
        while(nLine < nCount){
            //get the element
            oElement = document.getElementById(Heimdall_Stocks.menus[nLine].id);
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
        return '<li id="OPT_PRODUCT_Stocks" class="OPT_" onclick="Heimdall_Stocks.onProductClick();">Stocks</li>';
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
        nCount = Heimdall_Stocks.menus.length;
        //loop
        while(nLine < nCount){
            //create the code !!!
            sCode += '<div id="' + Heimdall_Stocks.menus[nLine].id + '" class="OPT_ others" onclick="location.hash = ' + "'" + Heimdall_Stocks.menus[nLine].id + "';" + Heimdall_Stocks.menus[nLine].onclick + '">' + Heimdall_Stocks.menus[nLine].text + '</div>';
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
        oElement.innerHTML = Heimdall_Stocks.generateHTML();

        //
        stockMenuCLICK();

        //return the good
        return true;
    }
};

///[FUNCTION][loadStatics_Locations]Function to load all the location from the DTB
///[RETURNS][Boolean]True if done
function loadStatics_Locations(){

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            //our object to convert
            var oLocations = null;
            //our array of result
            var ary_Json = JSON.parse(oReq.responseText);

            //our count
            var nCount = 0;
            //our iterrator
            var nLine = 0;

            //reset
            Heimdall.members.products.stocks.Locations = [];
            //get the number of result
            nCount = ary_Json.length;
            //loop
            while(nLine < nCount){

                //realloc the variable
                oLocations = new Locations();
                //load it !
                oLocations.loadFromArray(ary_Json[nLine]);

                //add it
                Heimdall.members.products.stocks.Locations.push(oLocations);

                //next
                nLine++;
            }

            Heimdall.flags.waitData = false;
        }
    };
    //prepare the query*********************
    Heimdall.flags.waitData = true;
    //check the open
    oReq.open("POST", "php/Locations_manager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "session" + "&Action=LIST"); 
    //Return the job !
    return true;

}

///[FUNCTION][loadStaticsStocksData]Function to load all the Stocks data from the DTB
///[RETURNS][Boolean]True if done
function loadStaticsStocksData(){
    //Our location loader
    loadStatics_Locations();
    //Happy End !
    return true;
}

function stockMenu_General_CLICK(){
    Heimdall_Stocks.menuClassUpdate("OPT_Stocks_General");

    notDevYet();
}

function stockMenu_Locations_CLICK(){
    stocksMenu_locations_CLICK();
}

function stockMenu_Stocks_CLICK(){
    stocksMenu_stocks_CLICK();
}

function stockMenu_Mouvements_CLICK(){
    Heimdall_Stocks.menuClassUpdate("OPT_Stocks_Mouvements");

    notDevYet();
}

///[FUNCTION][stockClick]Function on click of a stock
///[PARAMETER][integer][nLine]Line of the stock
function stockClick(nLine){

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

        }
    }

}

///[FUNCTION][stockAYDiv]Function to plot a stock inline
///[PARAMETER][Stocks][oStock]Our stock we plots
///[PARAMETER][integer][nLine]Line of the stock
///[RETURNS][String]HTML Code of the element
function stockdiv(oStock, nLine){

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
    nPosition = findInPotoursObjLst(Heimdall.members.products.stocks.Locations, "nId_Locations", oStock.getId_Locations());
    if(nPosition != POTOURS_FIND_NOTFOUND){
        //to load the image
        sTypeName = Heimdall.members.products.products.stocks.Locations[nPosition].getNom();
        sType = "<img src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\"/>";
    }
    else
        sType = "Type not found (aryL :" + Heimdall.members.products.products.stocks.Locations.length + ")";

    //master div
    if(bPaire)
        sCode += "<div class=\"inlineStock heim_Block paire\" onclick=\"notDevYet()\">";
        //sCode += "<div class=\"inlineStock heim_Block paire\" onclick=\"stockClick(" + nLine + ")\">";
    else
        sCode += "<div class=\"inlineStock heim_Block impaire\" onclick=\"notDevYet()\">";
        //sCode += "<div class=\"inlineStock heim_Block impaire\" onclick=\"contactClick(" + nLine + ")\">";

    sCode += "\t" + "<div class=\"inlineStock_Stock heim_Inline_Block\">";
    sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + sType + " Location</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + oStock.getNom();
    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        sCode += " ( ID : " + oStock.getId_Stocks() + ")";
    }
    ///[/DEBUG]
    sCode += "</div>";
    //date time ?
    if(oStock.getMaj() != "")
        sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + oStock.getMaj() + "</div>";
    else
        sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + oStock.getCreation() + "</div>";
    //dématerialisé
    if(oStock.getDematerialise())
        sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + "Dématérialisé</div>";
    else
        sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + "Physique</div>";
    sCode += "\t" + "</div>";

    sCode += "</div>";

    //return the code
    return sCode;
}

///[FUNCTION][stockDivHeader]Function to plot the stock header
///[RETURNS][String]HTML Code of the element
function stockDivHeader(){
    //our code
    var sCode = "";
    //our type
    var sType = "";
    //our name
    var sName = "Nom";
    //our type name 
    var sTypeName = "locations"

    //type position
    var nPosition = 0;

    //fill sType
    sType = "<img src=\"img/" + sTypeName + ".png\" alt=\"" + sTypeName + "\" height=\"32\" width=\"32\"/>";

    sCode += "<div class=\"inlineStock heim_Block impaire\">";

    sCode += "\t" + "<div class=\"inlineStock_Stock heim_Inline_Block\">";
    sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + sType + " Location</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + "Nom</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + "Mise à jour</div>";
    sCode += "\t" + "\t" + "<div class=\"inlineStock_Stock_Type heim_Inline_Block\">" + "Dématérialisé</div>";
    sCode += "\t" + "</div>";

    sCode += "</div>";

    //return the code
    return sCode;
}

///[FUNCTION][plotMoreStock]Function to plot line of stocks
///[PARAMETER][integer][nOffset]Our start line
///[PARAMETER][integer][nLimit]integer to determine the last print line
///[RETURNS][Boolean]True if done
function plotMoreStock(nOffset, nLimit){
    return plotStocks(Heimdall.members.products.contacts.Stocks, false, nOffset, nLimit);
}

///[FUNCTION][plotMoreStock]Function to plot line of stocks
///[PARAMETER][array of stocks][ary_Stocks]Our array with stock to plots
///[PARAMETER][boolean][bFromJson]Load form Json ?
///[PARAMETER][integer][nOffset]Our start line
///[PARAMETER][integer][nLimit]integer to determine the last print line
///[RETURNS][Boolean]True if done
function plotStocks(ary_Stocks, bFromJson, nOffset, nLimit){

    ///[DEBUG]Operaion time !!!
    if(Heimdall.flags.debug){
        var xStartTime = Date.now();
        var xEndTime = 0;
        var xTime = 0;
    }
    ///[/DEBUG]

    //our contact
    var oStock = null;
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
        nCount = ary_Stocks.length;
        nCountPlot = Math.min( ary_Stocks.length, nOffset + nLimit);
        if(nCount < ary_Stocks.length)
            bMore = true;
    }   
    else{
        nCount = ary_Stocks.length;
        nCountPlot = ary_Stocks.length;
    }
        
    //delete the BTN to add
    if(oBTN_ != null)
        oBTN_.remove();
    //reset the graphical
    if(nOffset == 0)
        oElement.innerHTML = stockDivHeader();

    //ary_Stocks var an array from JSON
    if(bFromJson){
        //reset the value
        Heimdall.members.products.stocks.Stocks = [];
        //to the loop machine
        while(nLine < nCount){
            //init
            oStock = new Stocks();
            //load it !
            oStock.loadFromArray(ary_Stocks[nLine]);

             ///[DEBUG]Operaion time !!!
            if(Heimdall.flags.debug){
                console.log("plotStocks, stock fonction : " + ary_Stocks[nLine]["fonction"]);
                console.log("plotStocks, ary IdLinks : " + ary_Stocks[nLine]["IdLinks"]);
                console.log("plotStocks, stock IdLinks : " + oStock.members["IdLinks"]);
                console.log("plotStocks, JSON : " + JSON.stringify( ary_Stocks[nLine] ) );
            }
            ///[/DEBUG]   

            //add it!!!
            if(nLine < nCountPlot)
                oElement.innerHTML += stockdiv(oStock, nLine); 
            
            //add to the global list
            Heimdall.members.products.stocks.Stocks.push(oStock);

            //next
            nLine++;
        }
    }
    else{
        //to the loop machine
        while(nLine < nCountPlot){

            oStock = ary_Stocks[nLine];

            //seems faster isn't it ?
            oElement.innerHTML += stockdiv(oStock, nLine); 
            //next
            nLine++;
        }
    }
    
    //add the BTN_
    if(nCount != nCountPlot){
        nOffset += HEIMDALL_NUMBER_OF_CONTACTS_PLOTS;
        oElement.innerHTML += "<div id =\"" + HEIMDALL_BTN_PLOTS_MORE_CONTACT + "\" class=\"BTN_\" onclick=\"plotMoreStock(" + nOffset +", " + HEIMDALL_NUMBER_OF_CONTACTS_PLOTS + ")\">Voir " + HEIMDALL_NUMBER_OF_CONTACTS_PLOTS + " résultats de plus !</div>";
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
function deleteStockSelectionField(sFieldName){
    
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

///[FUNCTION][createSelectionField]Function to plot line of stocks
///[PARAMETER][String][sNext]Next field name
///[RETURNS][Boolean]True if done
function createStockSelectionField(sNext){
    //our code
    var sCode = "";

    //create the block
    sCode += "<div id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    
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
    
    sCode += "</div>";

    return sCode;
}

///[FUNCTION][addSelectionField]Function to plot line of stocks
///[RETURNS][Boolean]True if done
function addStocksSelectionField(){

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

    oElement = document.getElementById(HEIMDALL_LAY_QUERY_Filter_Container + nLine);
    //Add it
    oElement.innerHTML += createSelectionField(sNext);

    return true;
}

///[FUNCTION][stockDoQuery]Function to manage the research for every case
///[PARAMETER][String][sIdWaiting]our id to plots the query work
///[PARAMETER][Pointer][ptrFunctionCreateArg]Function to create the argument of query (no parameter)
///[PARAMETER][Pointer][ptrFunctionResponse]Function to analyse the responseText (one parameter string)
///[RETURNS][Boolean]True if done
function stockDoQueryComplete(sIdWaiting, ptrFunctionCreateArg, ptrFunctionResponse){
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

///[FUNCTION][addSelectionField]Function to plot line of stocks
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

///[FUNCTION][stockDoQuery]Function to manage the research response from the server
///[PARAMETER][String][sText]our response text to parse as Json
function stockDoQueryResponse(sText){
    //Plots !
    plotStocks(JSON.parse(sText), true, 0, HEIMDALL_NUMBER_OF_CONTACTS_PLOTS);
}

///[FUNCTION][stockDoQuery]Function to manage the research
///[RETURNS][Boolean]True if done
function stockDoQuery(){
    //call the generique function
    contactDoQueryComplete("PNL_List", createArgs, contactDoQueryResponse);
    //Call the specific :)
    return true;
}

///[FUNCTION][stockDoQuery]Function to manage te key stroke on enter to throw a research
///[PARAMETER][event][event]our key event
function stockKeySearch(event){
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

function locationWinStock(oLocation){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oLocation == null){
        oLocation = new Locations();
        oLocation.setId_Accreditations_Item(1);
        oLocation.setNom("#NO NAME !!!");
    }
        
    //create the win form
    WIN_Stocks = new  Overview("WIN_Stocks", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Locations();

    oLay.init("WIN_Stocks", "Locations" + oLocation.getId_Locations(), oLocation);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Stocks");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Stocks.dispose();\">Quitter</div>";
    }

}

function stockWinStock(oStock){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oStock == null){
        oStock = new Stocks();
        oStock.setId_Locations(1);
        oStock.setId_Accreditations_Item(1);
        console.log("NAh Nah !!!");
    }
        
    //create the win form
    WIN_Stocks = new  Overview("WIN_Stocks", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Stocks();

    oLay.init("WIN_Stocks", "Stocks" + oStock.getId_Stocks(), oStock);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Stocks");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Stocks.dispose();\">Quitter</div>";
    }

}

function mouvementWinStock(oMouvement){

    //our line
    var nLine = 0;
    //our element to get the text zone
    var oElement = null;

    //Edition Layout
    var oLay = null;

    if(oMouvement == null){
        oMouvement = new Mouvements();
        oMouvement.setVersion("#NO NAME !!!");
    }
        
    //create the win form
    WIN_Stocks = new  Overview("WIN_Stocks", 640, 480, "#6669A3", 0.5);

    oLay = new LAY_Organisations();

    oLay.init("WIN_Stocks", "Mouvements" + oMouvement.getId_Locations(), oMouvement);

    oLay.ObjToView();

    //get the element to fill it
    oElement = document.getElementById("WIN_Stocks");
    if(oElement != null){
        oElement.innerHTML += "<div id=\"BTN_Quit\" class=\"BTN_\" onclick=\"WIN_Stocks.dispose();\">Quitter</div>";
    }

}

function stocksAddMenu(sDivID){
    
    //our code
    var sCode = "";

    sCode += "<div>" + "\r\n";

    sCode += "\t" + "<div>Stocks</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Location\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();locationWinStock(null);\">Ajouter un location</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Stock\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();stockWinStock(null);\">Ajouter une stock</div>" + "\r\n";
    sCode += "\t" + "<div id=\"BTN_Add_Mouvement\" class=\"BTN_\" onclick=\"ptrMsgBox.dispose();notDevYet();\">Ajouter un mouvement</div>" + "\r\n";

    sCode += "</div>" + "\r\n";

    return sCode;
}

function stockMenuHTML(){
    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //build da code !!!
    sCode += '<div id="PNL_Research" class="PNL_ heim_Inline_Block">\r\n';

    sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>STOCKS</h1></div>\r\n';
    //sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>RECHERCHE</h1></div>\r\n';
    sCode += '<br/>\r\n';
    sCode += '\t<div id="LAY_Query" class="LAY_ heim_Right heim_Block">';

    // sCode += '\t\t<input id="SAI_search_Query" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="stockKeySearch(event)"/>';
    // sCode += '\t\t<button id="BTN_Search_Query" class="BTN_" type="button" onclick="stockDoQuery()">Q</button>';
    
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

    //sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="addStocksSelectionField()">+</button>';

    sCode += '\t</div>\r\n';
    
    sCode += '</div>\r\n';

    sCode += '<div id="PNL_List" class="PNL_ heim_Inline_Block">NOpe</div>';

    return sCode;
}

function stockMenuCLICK(){
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

    oElement.innerHTML = stockMenuHTML();

    Heimdall_Produits.menuClassUpdate("OPT_PRODUCT_Stocks");
    Heimdall_Stocks.menuClassUpdate("OPT_Stocks_General");

    return true;
}

///[FUNCTION][init_stocks]Function to init the stock part
///[RETURNS][Boolean]True if done
function init_stocks(){
    
    //init heimdall section
    Heimdall.members.products["stocks"] = {};
    Heimdall.members.products.stocks["Locations"] = [];

    Heimdall.members.products.stocks["addMenu"] = stocksAddMenu;
    Heimdall.members.products.stocks["generateMenuCode"] = Heimdall_Stocks.generateMenuCode;

    //init the loader of Stock
    loadStaticsStocksData();

    return true;
}