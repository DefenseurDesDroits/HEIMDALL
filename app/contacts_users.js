/*
* FIle to init and manage the contact products sub menu
*
*
*/

const HEIMDALL_NUMBER_OF_USERS_MAX = 10;

///[FUNCTION][contact_users_KeySearch]Function to manage the enter on the SAI_ Search field
///[PARAMETER][Event][event]Next field name
function contact_users_KeySearch(event){
    //ths SAI Value
    var sValue = "";
    //our element 
    var oElement = null;

    if(event.keyCode == 13)
        contact_usersDoQuery();

    oElement = document.getElementById("SAI_search_Query");

    if(oElement != null){
        sValue = oElement.value;

        if(sValue.length > HEIMDALL_AUTO_QUERY_SIZE)
            contact_usersDoQuery();
    }
}

///[FUNCTION][contact_usersDoQueryComplete]Function to manage the research for every case
///[PARAMETER][String][sIdWaiting]our id to plots the query work
///[PARAMETER][Pointer][ptrFunctionCreateArg]Function to create the argument of query (no parameter)
///[PARAMETER][Pointer][ptrFunctionResponse]Function to analyse the responseText (one parameter string)
///[RETURNS][Boolean]True if done
function contact_usersDoQueryComplete(sIdWaiting, ptrFunctionCreateArg, ptrFunctionResponse){
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
    oReq.open("POST", "php/queryManager_Users.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=" +Heimdall.members.user["UserId"] + "&Session=" + "" + "&Action=contacts_users&Args=" + JSON.stringify(ptrFunctionCreateArg())); 
    //Return the job !
    return true;
}

///[FUNCTION][contact_usersCreateArgs]Function to plot line of contacts
///[RETURNS][Array of Arguments]Array of arguments
function contact_usersCreateArgs(){

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
    ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sNom", "sPrenom", "sPseudo"], Value : oElement.value});

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

///[FUNCTION][contact_usersCreateSelectionField]Function to plot line of contacts
///[PARAMETER][String][sNext]Next field name
///[RETURNS][Boolean]True if done
function contact_usersCreateSelectionField(sNext){
    //our code
    var sCode = "";

    //create the block
    sCode += "<div id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    //sCode += "<form id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    sCode += "\t" + "<button id=\"BTN_DEL_" + sNext + "\" class=\"BTN_ heim_Inline_Block\" type=\"button\" onclick=\"deleteSelectionField('" + sNext + "')\">-</button>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_Column_" + sNext + "\" onkeyup=\"contactKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sNom\">Nom</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sPrenom\">Prénom</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sPseudo\">Pseudo</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_COND_" + sNext + "\" onkeyup=\"contactKeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_StartsWith + "\">Commence Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_EndsWith +"\">Termine Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_Contains +"\">Contient</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + '<input id="SAI_Value_' + sNext + '" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="contact_users_KeySearch(event)"/>';
    //sCode += "\t" + "<div class=\"heim_Inline_Block\">" + sNext + "</div>" + "\r\n";
    sCode += "</div>";
    //sCode += "</form>";

    return sCode;
}

///[FUNCTION][contact_usersAddSelectionField]Function to plot line of contacts
///[RETURNS][Boolean]True if done
function contact_usersAddSelectionField(){

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
    oElement.innerHTML += contact_usersCreateSelectionField(sNext);

    return true;
}

///[FUNCTION][contact_usersCreateSelectionField]Function to plot line of contacts
///[PARAMETER][Integer][nStart]The start point
///[PARAMETER][Integer][nLength]The numbers of ploted users
///[RETURNS][Boolean]True if done
function contact_usersPlots(nStart, nLength){
    //our element
    var oElement = null;

    //our user
    var oUsers = null;

    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //get the count
    nCount = Heimdall.members.products.contacts.Users.length;
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
            oUsers = Heimdall.members.products.contacts.Users[nLine];
            //add the code
            sCode += "<div id=\"User_Line_" + oUsers.getId_Users() + "\" onclick=\"contact_usersClick(" + nLine + ")\" class=\"OPT_Users\">" + oUsers.getPseudo() + "</div>";
            //Next
            nLine++;
        }
        //BTN_ for the previous
        if(nStart >= nLength){
            nStart -= HEIMDALL_NUMBER_OF_USERS_MAX;
            sCode += "<div id=\"BTN_Previous_Users\" onclick=\"contact_usersPlots(" + nStart + ", " + nLength + ")\">Afficher les " + nLength + " précédents</div>";
        }
        //BTN_ for the next ten
        if(nCount < Heimdall.members.products.contacts.Users.length)
            sCode += "<div id=\"BTN_Next_Users\" onclick=\"contact_usersPlots(" + nCount + ", " + nLength + ")\">Afficher les " + nLength + " suivants</div>";

        //add tho the element
        oElement.innerHTML = sCode;
    }

    //happy Ends
    return true;
}

///[FUNCTION][contact_usersClick]Function to manage the click on the user menu
///[PARAMETER][Integer][nLine]The line of the user 
function contact_usersClick(nLine){
    //our users layout
    var LAY_ = new LAY_Users();
    //our contact
    var oContacts = null;
    //our element
    var oElement = null;

    //not negative
    if(nLine >= 0){
        //in the range ?
        if(nLine < Heimdall.members.products.contacts.Users.length){
            //get the PNL_
            oElement = document.getElementById("PNL_Win");
            //clean the element
            oElement.innerHTML = "";
            //get the contact
            oContacts = Heimdall.members.products.contacts.Users[nLine];
            //init
            LAY_.init("PNL_Win", "Users" +  oContacts.getId_Users(), oContacts);
            //plots
            LAY_.ObjToView();
        }
    }
}

///[FUNCTION][contact_usersDoQueryResponse]Function to manage the research response from the server
///[PARAMETER][String][sText]our response text to parse as Json
function contact_usersDoQueryResponse(sText){
    //the users
    var oUsers = null;

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //our array
    var ary_ = [];

    //get the array
    ary_ = JSON.parse(sText);

    //restart the array of users
    Heimdall.members.products.contacts.Users = [];

    //get the count 
    nCount = ary_.length;
    //start the loop
    while(nLine < nCount){
        //our user
        oUsers = new Users();
        //load
        oUsers.loadFromArray(ary_[nLine]);
        //push to the global array
        Heimdall.members.products.contacts.Users.push(oUsers);
        //Next
        nLine++;
    }

    //Plots !
    return contact_usersPlots(0, HEIMDALL_NUMBER_OF_USERS_MAX);
}

///[FUNCTION][contact_usersDoQuery]Function to exceute the research
function contact_usersDoQuery(){
    //call the generique function
    contact_usersDoQueryComplete("LAY_List_User", contact_usersCreateArgs, contact_usersDoQueryResponse);
    //Call the specific :)
    return true;
}

///[FUNCTION][contactMenu_users_CLICK]Function to generate the HTML of the sub-menu
function contactMenu_users_HTML(){
    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //build da code !!!
    sCode += '<div id="PNL_Research" class="PNL_ heim_Inline_Block">\r\n';

    sCode += '\t<div id="LAY_Title" class="LAY_ heim_Block"><h1>Utilisateurs</h1></div>\r\n';
    sCode += '<br/>\r\n';
    sCode += '\t<div id="LAY_Query" class="LAY_ heim_Right heim_Block">';

    sCode += '\t\t<input id="SAI_search_Query" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="contact_users_KeySearch(event)"/>';
    sCode += '\t\t<button id="BTN_Search_Query" class="BTN_" type="button" onclick="contact_usersDoQuery()">Q</button>';
    
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
    sCode += '\t<button id="BTN_Add_Query_Condition" class="BTN_" type="button" onclick="contact_usersAddSelectionField()">+</button>';

    sCode += '\t</div>\r\n';
    
    sCode += '\t<div id="LAY_List_User">List bro</div>\r\n';

    sCode += '</div>\r\n';

    sCode += '<div id="PNL_Win" class="PNL_ heim_Inline_Block"></div>';

    return sCode;
}

///[FUNCTION][contactMenu_users_CLICK]Function to manage the click on the sub-menu
function contactMenu_users_CLICK(){
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

    oElement.innerHTML = contactMenu_users_HTML();

    Heimdall_Contacts.menuClassUpdate("OPT_Contacts_Users");

    return true;
}