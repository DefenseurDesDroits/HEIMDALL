/*
* FIle to init and manage the publications products sub menu
*
*
*/

const HEIMDALL_NUMBER_OF_DOMAINES_MAX = 10;

function publications_domainesMember(oDomaine){

    //our iterrator
    var nLine = 0;
    //our count
    var nCount = 0;

    //our aray of members
    var ary_ = null;

    //our Id list returned
    var sCode = "";

    try {
        ary_ = JSON.parse(oDomaine.getUGrp_Json());
    } catch (error) {
        console.log("publications_domainesMember error " + error);
        return sCode;
    }

    //our count
    nCount = ary_.length;
    //our first element folks !
    if(nLine < nCount){
        //add it !!!
        sCode += ary_[nLine].uid;
        //next
        nLine++;
    }
    //our loop
    while(nLine < nCount){
        //add it !!!
        sCode += ", " + ary_[nLine].uid;
        //next
        nLine++;
    }
    
    //return the code
    return sCode;
}

///[FUNCTION][publications_domaines_KeySearch]Function to manage the enter on the SAI_ Search field
///[PARAMETER][Event][event]Next field name
function publications_domaines_KeySearch(event){
    //ths SAI Value
    var sValue = "";
    //our element 
    var oElement = null;

    if(event.keyCode == 13)
        publications_domainesDoQuery();

    oElement = document.getElementById("SAI_search_Query");

    if(oElement != null){
        sValue = oElement.value;

        if(sValue.length > HEIMDALL_AUTO_QUERY_SIZE)
            publications_domainesDoQuery();
    }
}

///[FUNCTION][publications_domainesDoQueryComplete]Function to manage the research for every case
///[PARAMETER][String][sIdWaiting]our id to plots the query work
///[PARAMETER][Pointer][ptrFunctionCreateArg]Function to create the argument of query (no parameter)
///[PARAMETER][Pointer][ptrFunctionResponse]Function to analyse the responseText (one parameter string)
///[RETURNS][Boolean]True if done
function publications_domainesDoQueryComplete(sIdWaiting, ptrFunctionCreateArg, ptrFunctionResponse){
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
    oReq.open("POST", "php/queryManager_Domaines.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=" +Heimdall.members.user["UserId"] + "&Session=" + "" + "&Action=publications_domaines&Args=" + JSON.stringify(ptrFunctionCreateArg())); 
    //Return the job !
    return true;
}

///[FUNCTION][publications_domainesCreateArgs]Function to plot line of publications
///[RETURNS][Array of Arguments]Array of arguments
function publications_domainesCreateArgs(){

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
    ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sNom", "sDescription"], Value : oElement.value});

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
            //push the result !
            ary_Result.push(struct_);
        }

        //next
        nLine++;
    }

    return ary_Result;
}

///[FUNCTION][publications_domainesCreateSelectionField]Function to plot line of publications
///[PARAMETER][String][sNext]Next field name
///[RETURNS][Boolean]True if done
function publications_domainesCreateSelectionField(sNext){
    //our code
    var sCode = "";

    //create the block
    sCode += "<div id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    
    sCode += "\t" + "<button id=\"BTN_DEL_" + sNext + "\" class=\"BTN_ heim_Inline_Block\" type=\"button\" onclick=\"deleteSelectionField('" + sNext + "')\">-</button>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_Column_" + sNext + "\" onkeyup=\"publicationsKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sNom\">Nom</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sDescription\">Description</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_COND_" + sNext + "\" onkeyup=\"publicationsKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_StartsWith + "\">Commence Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_EndsWith +"\">Termine Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_Contains +"\">Contient</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + '<input id="SAI_Value_' + sNext + '" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="publications_domaines_KeySearch(event)"/>';
    
    sCode += "</div>";

    return sCode;
}

///[FUNCTION][publications_domainesAddSelectionField]Function to plot line of publications
///[RETURNS][Boolean]True if done
function publications_domainesAddSelectionField(){

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
    oElement.innerHTML += publications_domainesCreateSelectionField(sNext);

    return true;
}

///[FUNCTION][publications_domainesCreateSelectionField]Function to plot line of publications
///[PARAMETER][Integer][nStart]The start point
///[PARAMETER][Integer][nLength]The numbers of ploted domaines
///[RETURNS][Boolean]True if done
function publications_domainesPlots(nStart, nLength){
    //our element
    var oElement = null;

    //our user
    var oDomaines = null;

    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //get the count
    nCount = Heimdall.members.products.publications.Domaines.length;
    //
    if(nStart + nLength < nCount)
        nCount = nStart + nLength;

    //get the element
    oElement = document.getElementById("LAY_List_User");

    //element not null
    if(oElement != null){
        //set the iterrator
        nLine = nStart;
        //our loop
        while(nLine < nCount){
            //get the user
            oDomaines = Heimdall.members.products.publications.Domaines[nLine];
            //add the code
            sCode += "<div id=\"Domaines_Line_" + oDomaines.getId_Domaines() + "\" onclick=\"publications_domainesClick(" + nLine + ")\" class=\"OPT_Domaines\">" + oDomaines.getNom() + "</div>";
            //Next
            nLine++;
        }
        //BTN_ for the previous
        if(nStart >= nLength){
            nStart -= HEIMDALL_NUMBER_OF_DOMAINES_MAX;
            sCode += "<div id=\"BTN_Previous_Domaines\" onclick=\"publications_domainesPlots(" + nStart + ", " + nLength + ")\">Afficher les " + nLength + " précédents</div>";
        }
        //BTN_ for the next ten
        if(nCount < Heimdall.members.products.publications.Domaines.length)
            sCode += "<div id=\"BTN_Next_Domaines\" onclick=\"publications_domainesPlots(" + nCount + ", " + nLength + ")\">Afficher les " + nLength + " suivants</div>";

        //add tho the element
        oElement.innerHTML = sCode;
    }

    //happy Ends
    return true;
}

///[FUNCTION][publications_domainesClick]Function to manage the click on the user menu
///[PARAMETER][Integer][nLine]The line of the user 
function publications_domainesClick(nLine){
    //our domaines layout
    var LAY_ = new LAY_Domaines();
    //our publications
    var oDomaines = null;
    //our element
    var oElement = null;

    //not negative
    if(nLine >= 0){
        //in the range ?
        if(nLine < Heimdall.members.products.publications.Domaines.length){
            //get the PNL_
            oElement = document.getElementById("PNL_Win");
            //clean the element
            oElement.innerHTML = "";
            //get the publications
            oDomaines = Heimdall.members.products.publications.Domaines[nLine];
            //init
            LAY_.init("PNL_Win", "Domaines" +  oDomaines.getId_Domaines(), oDomaines);
            //plots
            LAY_.ObjToView();
        }
    }
}

///[FUNCTION][publications_domainesDoQueryResponse]Function to manage the research response from the server
///[PARAMETER][String][sText]our response text to parse as Json
function publications_domainesDoQueryResponse(sText){
    //the domaines
    var oDomaines = null;

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //our array
    var ary_ = [];

    //get the array
    ary_ = JSON.parse(sText);

    //restart the array of domaines
    Heimdall.members.products.publications.Domaines = [];

    //get the count 
    nCount = ary_.length;
    //start the loop
    while(nLine < nCount){
        //our user
        oDomaines = new Domaines();
        //load
        oDomaines.loadFromArray(ary_[nLine]);
        //push to the global array
        Heimdall.members.products.publications.Domaines.push(oDomaines);
        //Next
        nLine++;
    }

    //Plots !
    return publications_domainesPlots(0, HEIMDALL_NUMBER_OF_DOMAINES_MAX);
}

///[FUNCTION][publications_domainesDoQuery]Function to exceute the research
function publications_domainesDoQuery(){
    //our element
    var oElement = null;
    //call the generique function
    publications_domainesDoQueryComplete("LAY_List_User", publications_domainesCreateArgs, publications_domainesDoQueryResponse);
    //get the PNL_
    oElement = document.getElementById("PNL_Win");
    //clear the layout
    if(oElement != null)
        oElement.innerHTML = "";
    //Call the specific :)
    return true;
}

///[FUNCTION][publicationsMenu_domaines_CLICK]Function to generate the HTML of the sub-menu
function publicationsMenu_domaines_HTML(){
    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //build da code !!!
    sCode += '<div id="PNL_Research" class="PNL_ heim_Inline_Block">\r\n';

    sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>Domaines</h1></div>\r\n';
    sCode += '<br/>\r\n';
    sCode += '\t<div id="LAY_Query" class="LAY_ heim_Right heim_Block">';

    sCode += '\t\t<input id="SAI_search_Query" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="publications_domaines_KeySearch(event)"/>';
    sCode += '\t\t<button id="BTN_Search_Query" class="BTN_" type="button" onclick="publications_domainesDoQuery()">Q</button>';
    
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

    //sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="notDevYet()">+</button>';
    sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="publications_domainesAddSelectionField()">+</button>';

    sCode += '\t</div>\r\n';
    
    sCode += '\t<div id="LAY_List_User">List bro</div>\r\n';

    sCode += '</div>\r\n';

    sCode += '<div id="PNL_Win" class="PNL_ heim_Inline_Block"></div>';

    return sCode;
}

///[FUNCTION][publicationsMenu_domaines_CLICK]Function to manage the click on the sub-menu
function publicationsMenu_domaines_CLICK(){
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

    oElement.innerHTML = publicationsMenu_domaines_HTML();

    Heimdall_Publications.menuClassUpdate("OPT_Publications_Domaines");

    return true;
}