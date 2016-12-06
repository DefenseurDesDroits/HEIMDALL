/*
* FIle to init and manage the publications products sub menu
*
*
*/

const HEIMDALL_NUMBER_OF_PUBLICATIONS_MAX = 10;

///[FUNCTION][publications_publications_KeySearch]Function to manage the enter on the SAI_ Search field
///[PARAMETER][Event][event]Next field name
function publications_publications_KeySearch(event){
    //ths SAI Value
    var sValue = "";
    //our element 
    var oElement = null;

    if(event.keyCode == 13)
        publications_publicationsDoQuery();

    oElement = document.getElementById("SAI_search_Query");

    if(oElement != null){
        sValue = oElement.value;

        if(sValue.length > HEIMDALL_AUTO_QUERY_SIZE)
            publications_publicationsDoQuery();
    }
}

///[FUNCTION][publications_publicationsDoQueryComplete]Function to manage the research for every case
///[PARAMETER][String][sIdWaiting]our id to plots the query work
///[PARAMETER][Pointer][ptrFunctionCreateArg]Function to create the argument of query (no parameter)
///[PARAMETER][Pointer][ptrFunctionResponse]Function to analyse the responseText (one parameter string)
///[RETURNS][Boolean]True if done
function publications_publicationsDoQueryComplete(sIdWaiting, ptrFunctionCreateArg, ptrFunctionResponse){
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
    oReq.open("POST", "php/queryManager_Publicationss.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=" +Heimdall.members.user["UserId"] + "&Session=" + "" + "&Action=publications_publications&Args=" + JSON.stringify(ptrFunctionCreateArg())); 
    //Return the job !
    return true;
}

///[FUNCTION][publications_publicationsCreateArgs]Function to plot line of publications
///[RETURNS][Array of Arguments]Array of arguments
function publications_publicationsCreateArgs(){

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
            //push the result !
            ary_Result.push(struct_);
        }

        //next
        nLine++;
    }

    return ary_Result;
}

///[FUNCTION][publications_publicationsCreateSelectionField]Function to plot line of publications
///[PARAMETER][String][sNext]Next field name
///[RETURNS][Boolean]True if done
function publications_publicationsCreateSelectionField(sNext){
    //our code
    var sCode = "";

    //create the block
    sCode += "<div id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    //sCode += "<form id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    sCode += "\t" + "<button id=\"BTN_DEL_" + sNext + "\" class=\"BTN_ heim_Inline_Block\" type=\"button\" onclick=\"deleteSelectionField('" + sNext + "')\">-</button>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_Column_" + sNext + "\" onkeyup=\"publicationsKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sNom\">Nom</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sPrenom\">Prénom</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_COND_" + sNext + "\" onkeyup=\"publicationsKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_StartsWith + "\">Commence Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_EndsWith +"\">Termine Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_Contains +"\">Contient</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + '<input id="SAI_Value_' + sNext + '" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="publications_publications_KeySearch(event)"/>';
    //sCode += "\t" + "<div class=\"heim_Inline_Block\">" + sNext + "</div>" + "\r\n";
    sCode += "</div>";
    //sCode += "</form>";

    return sCode;
}

///[FUNCTION][publications_publicationsAddSelectionField]Function to plot line of publications
///[RETURNS][Boolean]True if done
function publications_publicationsAddSelectionField(){

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
    oElement.innerHTML += publications_publicationsCreateSelectionField(sNext);

    return true;
}

///[FUNCTION][publications_publicationsCreateSelectionField]Function to plot line of publications
///[PARAMETER][Integer][nStart]The start point
///[PARAMETER][Integer][nLength]The numbers of ploted publications
///[RETURNS][Boolean]True if done
function publications_publicationsPlots(nStart, nLength){
    //our element
    var oElement = null;

    //our user
    var oPublications = null;

    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //get the count
    nCount = Heimdall.members.products.publications.Publications.length;
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
            oPublications = Heimdall.members.products.publications.Publications[nLine];
            //add the code
            sCode += "<div id=\"User_Line_" + oPublications.getId_Publications() + "\" onclick=\"publications_publicationsClick(" + nLine + ")\" class=\"OPT_Publications\">" + oPublications.getNom() + " " + oPublications.getPrenom() + "</div>";
            //Next
            nLine++;
        }
        //BTN_ for the previous
        if(nStart >= nLength){
            nStart -= HEIMDALL_NUMBER_OF_PUBLICATIONS_MAX;
            sCode += "<div id=\"BTN_Previous_Publications\" onclick=\"publications_publicationsPlots(" + nStart + ", " + nLength + ")\">Afficher les " + nLength + " précédents</div>";
        }
        //BTN_ for the next ten
        if(nCount < Heimdall.members.products.publications.Publications.length)
            sCode += "<div id=\"BTN_Next_Publications\" onclick=\"publications_publicationsPlots(" + nCount + ", " + nLength + ")\">Afficher les " + nLength + " suivants</div>";

        //add tho the element
        oElement.innerHTML = sCode;
    }

    //happy Ends
    return true;
}

///[FUNCTION][publications_publicationsLoadedHandle]Function to load 
///[PARAMETER][Event][e]The event
function publications_publicationsLoadedHandle(e){
    //get the Lay who throw it ]:)
    var LAY_ = e.detail.oObject;

    //security
    if(LAY_ != null){
        //plot !
        LAY_.ObjToView();
        //remove the eventlistener
        LAY_.members.oDiv.removeEventListener(Heimdall.Events.loaded, publications_publicationsLoadedHandle);
        //
        console.log("publications_publicationsLoadedHandle");
    }
}

///[FUNCTION][publications_publicationsClick]Function to manage the click on the user menu
///[PARAMETER][Integer][nLine]The line of the user 
function publications_publicationsClick(nLine){
    //our publications layout
    var LAY_ = new LAY_Publications();
    //our publications
    var oPublications = null;
    //our element
    var oElement = null;

    //not negative
    if(nLine >= 0){
        //in the range ?
        if(nLine < Heimdall.members.products.publications.Publications.length){
            //get the PNL_
            oElement = document.getElementById("PNL_Win");
            //clean the element
            oElement.innerHTML = "";
            //get the publications
            oPublications = Heimdall.members.products.publications.Publications[nLine];
            //init
            LAY_.init("PNL_Win", "Publications" +  oPublications.getId_Publications(), oPublications);
            //When it's load, plots !!!
            LAY_.members.oDiv.addEventListener(Heimdall.Events.loaded, publications_publicationsLoadedHandle);
            //plots
            //LAY_.ObjToView();
        }
    }
}

///[FUNCTION][publications_publicationsDoQueryResponse]Function to manage the research response from the server
///[PARAMETER][String][sText]our response text to parse as Json
function publications_publicationsDoQueryResponse(sText){
    //the publications
    var oPublications = null;

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //our array
    var ary_ = [];

    //get the array
    ary_ = JSON.parse(sText);

    //restart the array of publications
    Heimdall.members.products.publications.Publications = [];

    //get the count 
    nCount = ary_.length;
    //start the loop
    while(nLine < nCount){
        //our user
        oPublications = new Publications();
        //load
        oPublications.loadFromArray(ary_[nLine]);
        //push to the global array
        Heimdall.members.products.publications.Publications.push(oPublications);
        //Next
        nLine++;
    }

    //Plots !
    return publications_publicationsPlots(0, HEIMDALL_NUMBER_OF_PUBLICATIONS_MAX);
}

///[FUNCTION][publications_publicationsDoQuery]Function to exceute the research
function publications_publicationsDoQuery(){
    //our element
    var oElement = null;
    //call the generique function
    publications_publicationsDoQueryComplete("LAY_List_User", publications_publicationsCreateArgs, publications_publicationsDoQueryResponse);
    //get the PNL_
    oElement = document.getElementById("PNL_Win");
    //clear the layout
    if(oElement != null)
        oElement.innerHTML = "";
    //Call the specific :)
    return true;
}

///[FUNCTION][publicationsMenu_publications_CLICK]Function to generate the HTML of the sub-menu
function publicationsMenu_publications_HTML(){
    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //build da code !!!
    sCode += '<div id="PNL_Research" class="PNL_ heim_Inline_Block">\r\n';

    sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>Publications</h1></div>\r\n';
    sCode += '<br/>\r\n';
    sCode += '\t<div id="LAY_Query" class="LAY_ heim_Right heim_Block">';

    sCode += '\t\t<input id="SAI_search_Query" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="publications_publications_KeySearch(event)"/>';
    sCode += '\t\t<button id="BTN_Search_Query" class="BTN_" type="button" onclick="publications_publicationsDoQuery()">Q</button>';
    
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

    sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="publications_publicationsAddSelectionField()">+</button>';

    sCode += '\t</div>\r\n';
    
    sCode += '\t<div id="LAY_List_User">List bro</div>\r\n';

    sCode += '</div>\r\n';

    sCode += '<div id="PNL_Win" class="PNL_ heim_Inline_Block"></div>';

    return sCode;
}

///[FUNCTION][publicationsMenu_publications_CLICK]Function to manage the click on the sub-menu
function publicationsMenu_publications_CLICK(){
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

    oElement.innerHTML = publicationsMenu_publications_HTML();

    Heimdall_Publications.menuClassUpdate("OPT_Publications_Publications");

    return true;
}