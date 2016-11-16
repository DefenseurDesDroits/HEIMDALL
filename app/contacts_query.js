/*
* FIle to init and manage the contact products sub menu
*
*
*/

const HEIMDALL_NUMBER_OF_CQUERY_MAX = 10;

///[FUNCTION][contact_query_KeySearch]Function to manage the enter on the SAI_ Search field
///[PARAMETER][Event][event]Next field name
function contact_query_KeySearch(event){
    //ths SAI Value
    var sValue = "";
    //our element 
    var oElement = null;

    if(event.keyCode == 13)
        contact_queryDoQuery();

    oElement = document.getElementById("SAI_search_Query");

    if(oElement != null){
        sValue = oElement.value;

        if(sValue.length > HEIMDALL_AUTO_QUERY_SIZE)
            contact_queryDoQuery();
    }
}

///[FUNCTION][contact_queryDoQueryComplete]Function to manage the research for every case
///[PARAMETER][String][sIdWaiting]our id to plots the query work
///[PARAMETER][Pointer][ptrFunctionCreateArg]Function to create the argument of query (no parameter)
///[PARAMETER][Pointer][ptrFunctionResponse]Function to analyse the responseText (one parameter string)
///[RETURNS][Boolean]True if done
function contact_queryDoQueryComplete(sIdWaiting, ptrFunctionCreateArg, ptrFunctionResponse){
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
    oReq.open("POST", "php/queryManager_Query.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=" +Heimdall.members.user["UserId"] + "&Session=" + "" + "&Action=contacts_query&Args=" + JSON.stringify(ptrFunctionCreateArg())); 
    //Return the job !
    return true;
}

function contact_queryArrayToList(ary_){
    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //our list
    var sList = "";

    nCount = ary_.length;
    nLine = 0;
    //to optimize cycle !!!
    if(nLine < nCount){
        sList += ary_[nLine];
        nLine++;
    }
    //loop
    while(nLine < nCount){
        //
        sList += ", " + ary_[nLine];
        //Next
        nLine++;
    }

    //return the list
    return sList;
}

function contact_queryTagToList(oTag){
    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //our code
    var sCode = "";

    //our array
    var ary_ = null;

    //check the tag !!!
    if(oTag == null)
        return sCode;

    //try it !!!
    try {
        //get the JSON
        ary_ = JSON.parse( oTag.getId_Items_Json() );
        console.log("TRY => " + oTag.getId_Items_Json());
    } catch (error) {
        ary_ = [];
        console.log("ERROR => " + error);
    }

    //get the count !!!
    nCount = ary_.length;
    nLine = 0;
    if(nLine < nCount){
        //our id !
        sCode += ary_[nLine].uid;
        //next
        nLine++;
    }
    //the loop
    while(nLine < nCount){
        //our id !
        sCode += ", " + ary_[nLine].uid;
        //next
        nLine++;
    }

    //our code
    return sCode;
}

///[FUNCTION][contact_queryCreateArgs]Function to plot line of contacts
///[RETURNS][Array of Arguments]Array of arguments
function contact_queryCreateArgs(){

    //get the content layout
    var oElement = null;
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
    //get the position
    var nPosition = 0;

    //our value
    var sValue = "";

    //our resutl array 
    var ary_Result = [];
    //temp array
    var ary_ = [];

    //contacts section**********************************************

    //get the element
    oElement = document.getElementById("SAI_Contacts_Prenom");
    //element present
    if(oElement != null){
        //nom
        sValue = oElement.value;
        sValue = sValue.trim();
        //test
        if(sValue != "" && sValue.toUpperCase() != "'PRENOM'"){
            ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sPrenom"], Value : sValue});
        }
    }

    //get the element
    oElement = document.getElementById("SAI_Contacts_Nom");
    //element present
    if(oElement != null){
        //nom
        sValue = oElement.value;
        //test
        if(sValue != "" && sValue.toUpperCase() != "'NOM'"){
            ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sNom"], Value : sValue});
        }
    }

    //get the array
    ary_ = [];
    //get the element
    contact_queryLISTSave("COMBO_Civilites", ary_, "COMBO_Civilites");
    //get the string
    sValue = contact_queryArrayToList(ary_["COMBO_Civilites"]);
    //test
    if(sValue != "" ){
        ary_Result.push({Method : 'COND_IN_LIST', Names : ["Id_Civilites"], Value : sValue});
    }

    //get the array
    ary_ = [];
    //get the element
    contact_queryLISTSave("COMBO_Titres", ary_, "COMBO_Titres");
    //get the string
    sValue = contact_queryArrayToList(ary_["COMBO_Titres"]);
    //test
    if(sValue != "" ){
        ary_Result.push({Method : 'COND_IN_LIST', Names : ["Id_Titres"], Value : sValue});
    }
    
    //get the array
    ary_ = [];
    //get the element
    contact_queryLISTSave("COMBO_Contact_Types", ary_, "COMBO_Contact_Types");
    //get the string
    sValue = contact_queryArrayToList(ary_["COMBO_Contact_Types"]);
    //test
    if(sValue != "" ){
        ary_Result.push({Method : 'COND_IN_LIST', Names : ["Id_Contact_Types"], Value : sValue});
    }

    //infos section*************************************************

    //get the element
    oElement = document.getElementById("COMBO_Infos");
    //element present
    if(oElement != null){
        //if section asked
        if(oElement.selectedIndex == 1){
        //if(oElement.value == 1){
            //get the element
            oElement = document.getElementById("SAI_Infos_Fonction");
            //element present
            if(oElement != null){
                //nom
                sValue = oElement.value;
                sValue = sValue.trim();
                if(sValue.toUpperCase() == "'FONCTION'")
                    sValue = "";
                //test
                //if(sValue != "" && sValue.toUpperCase() != "'FONCTION'"){
                    ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sFonction"], Value : sValue});
                //}
            }

            //get the array
            ary_ = [];
            //get the element
            contact_queryLISTSave("COMBO_Langues", ary_, "COMBO_Langues");
            //get the string
            sValue = contact_queryArrayToList(ary_["COMBO_Langues"]);
            //test
            if(sValue != "" ){
                ary_Result.push({Method : 'COND_IN_LIST', Names : ["Id_Langues"], Value : sValue});
            }
        }
    }

    //adresses section**********************************************

    //get the element
    oElement = document.getElementById("COMBO_Adresses");
    //element present
    if(oElement != null){
        //if section asked
        if(oElement.selectedIndex == 1){
        //if(oElement.value == 1){
            //get the element
            oElement = document.getElementById("SAI_Adr_Ville");
            //element present
            if(oElement != null){
                //nom
                sValue = oElement.value;
                sValue = sValue.trim();
                if(sValue.toUpperCase() == "'VILLE'")
                    sValue = "";
                ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sVille"], Value : sValue});

            }
            //get the element
            oElement = document.getElementById("SAI_Adr_CP");
            //element present
            if(oElement != null){
                //nom
                sValue = oElement.value;
                sValue = sValue.trim();
                if(sValue.toUpperCase() == "'CP'")
                    sValue = "";
                ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sCP"], Value : sValue});

            }
            //get the element
            oElement = document.getElementById("SAI_Adr_Tel");
            //element present
            if(oElement != null){
                //nom
                sValue = oElement.value;
                sValue = sValue.trim();
                if(sValue.toUpperCase() == "'TELEPHONE'")
                    sValue = "";
                ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sTelephone1", "sTelephone2"], Value : sValue});

            }
            //get the element
            oElement = document.getElementById("SAI_Adr_Courriel");
            //element present
            if(oElement != null){
                //nom
                sValue = oElement.value;
                sValue = sValue.trim();
                if(sValue.toUpperCase() == "'COURRIEL'")
                    sValue = "";
                ary_Result.push({Method : HEIMDALL_QUERY_METHOD_LIKE_StartsWith, Names : ["sCourriel1", "sCourriel2"], Value : sValue});

            }

            //get the array
            ary_ = [];
            //get the element
            contact_queryLISTSave("COMBO_Pays", ary_, "COMBO_Pays");
            //get the string
            sValue = contact_queryArrayToList(ary_["COMBO_Pays"]);
            //test
            if(sValue != "" ){
                ary_Result.push({Method : 'COND_IN_LIST', Names : ["Id_Pays"], Value : sValue});
            }
        }
    }
    
    //tags section**************************************************

    //
    oElement = document.getElementById("COMBO_Segments");
    if(oElement != null){
        console.log("LIST_Tags ");
        //our case
        switch (oElement.selectedIndex) {
            case 0:
                //get the tag list
                oElement = document.getElementById("LIST_Tags");
                if(oElement != null){
                    nLine = 0;
                    nCount = oElement.options.length;
                    while(nLine < nCount){
                        //if selected
                        if(oElement.options[nLine].selected){
                            //get the position
                            nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Segments_Tags, "nId_Items", oElement.options[nLine].value);
                            //test
                            if(nPosition != POTOURS_FIND_NOTFOUND){
                                //get the value
                                sValue = contact_queryTagToList(Heimdall.members.products.contacts.Segments_Tags[nPosition]);
                                //List
                                ary_Result.push({Method : "COND_IN_LIST", Names : ["xxx.contacts.Id_Contacts"], Value : sValue});
                            }
                        }
                        //next
                        nLine++;
                    }
                }
                break;
            case 1:
                //get the tag list
                oElement = document.getElementById("LIST_Tags");
                if(oElement != null){
                    nLine = 0;
                    nCount = oElement.options.length;
                    while(nLine < nCount){
                        //if selected
                        if(oElement.options[nLine].selected){
                            //get the position
                            nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Segments_Tags, "nId_Items", oElement.options[nLine].value);
                            //test
                            if(nPosition != POTOURS_FIND_NOTFOUND){
                                //get the value
                                sValue = contact_queryTagToList(Heimdall.members.products.contacts.Segments_Tags[nPosition]);
                                //List
                                ary_Result.push({Method : "COND_NIN_LIST", Names : ["xxx.contacts.Id_Contacts"], Value : sValue});
                            }
                        }
                        //next
                        nLine++;
                    }
                }
                break;
            // case 2:
                
            //     break;
            default:
                console.log("LIST_Tags Default => " +  oElement.selectedIndex);
                break;
        }
    }

    //segments section**********************************************

    return ary_Result;
}

///[FUNCTION][contact_queryCreateSelectionField]Function to plot line of contacts
///[PARAMETER][String][sNext]Next field name
///[RETURNS][Boolean]True if done
function contact_queryCreateSelectionField(sNext){
    //our code
    var sCode = "";

    //create the block
    sCode += "<div id=\"" + sNext + "\" class=\"" + HEIMDALL_LAY_QUERY_Filter +"\">" + "\r\n";
    sCode += "\t" + "<button id=\"BTN_DEL_" + sNext + "\" class=\"BTN_ heim_Inline_Block\" type=\"button\" onclick=\"deleteSelectionField('" + sNext + "')\">-</button>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_Column_" + sNext + "\" onkeyup=\"contact_query_KeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"sNom\">Nom</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + "<select id=\"COMBO_COND_" + sNext + "\" onkeyup=\"contact_query_KeySearch(event)\">" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_StartsWith + "\">Commence Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_EndsWith +"\">Termine Par</option>" + "\r\n";
    sCode += "\t" + "\t" +"<option value=\"" + HEIMDALL_QUERY_METHOD_LIKE_Contains +"\">Contient</option>" + "\r\n";
    sCode += "\t" + "</select>" + "\r\n";
    sCode += "\t" + '<input id="SAI_Value_' + sNext + '" class="SAI_" type="text" name="SAI_search_Query" value="" onkeyup="contact_query_KeySearch(event)"/>';
    sCode += "</div>";

    return sCode;
}

///[FUNCTION][contact_queryAddSelectionField]Function to plot line of contacts
///[RETURNS][Boolean]True if done
function contact_queryAddSelectionField(){

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
    oElement.innerHTML += contact_queryCreateSelectionField(sNext);

    return true;
}

///[FUNCTION][contact_queryCreateSelectionField]Function to plot line of contacts
///[PARAMETER][Integer][nStart]The start point
///[PARAMETER][Integer][nLength]The numbers of ploted query
///[RETURNS][Boolean]True if done
function contact_queryPlots(nStart, nLength){
    //our element
    var oElement = null;

    //our user
    var oQuery = null;

    //our code
    var sCode = "";
    //our Civilites
    var sCivilite = "";
    //our Titres
    var sTitre = "";
    //our our contact type
    var sType = "";

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;
    //our position
    var nPosition = 0;

    //get the count
    nCount = Heimdall.members.products.contacts.Segments_List.length;
    //
    if(nStart + nLength < nCount)
        nCount = nStart + nLength;

    //get the element 
    oElement = document.getElementById("LAY_Rows_Elements");

    //element not null
    if(oElement != null){
        //set the iterrator
        nLine = nStart;
        //our loop
        while(nLine < nCount){
            //get the user
            oQuery = Heimdall.members.products.contacts.Segments_List[nLine];
            //get the civilities
            nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Civilites, "nId_Civilites", oQuery.getId_Civilites());
            //our position
            if(nPosition == POTOURS_FIND_NOTFOUND)
                sCivilite = "";
            else
                sCivilite = Heimdall.members.products.contacts.Civilites[nPosition].getNom();
            //get the Title
            nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Titres, "nId_Titres", oQuery.getId_Titres());
            //our position
            if(nPosition == POTOURS_FIND_NOTFOUND)
                sTitre = "";
            else
                sTitre = Heimdall.members.products.contacts.Titres[nPosition].getNom();
            //get the Title
            nPosition = findInPotoursObjLst(Heimdall.members.products.contacts.Contact_Types, "nId_Contact_Types", oQuery.getId_Contact_Types());
            //our position
            if(nPosition == POTOURS_FIND_NOTFOUND)
                sType = "";
            else
                sType = Heimdall.members.products.contacts.Contact_Types[nPosition].getNom();
            //add the code
            sCode += "<div id=\"Query_Line_" + oQuery.getId_Contacts() + "\" onclick=\"notDevYet();\" class=\"OPT_Query\" style=\"width:100%;\">";
            sCode += "\t" + "<div class=\"heim_Inline_Block\" style=\"width:5%;\">" + sCivilite + "</div>";
            sCode += "\t" + "<div class=\"heim_Inline_Block\" style=\"width:10%;\">" + oQuery.getPrenom() + " " + oQuery.getNom() + "</div>";
            sCode += "\t" + "<div class=\"heim_Inline_Block\" style=\"width:10%;\">" + sTitre + "</div>";
            sCode += "\t" + "<div class=\"heim_Inline_Block\" style=\"width:5%;\">" + sType + "</div>";
            sCode += "\t" + "<div class=\"heim_Inline_Block\" style=\"width:20%;\"> " + oQuery.members["sFonction"] + "</div>";
            sCode += "\t" + "<div class=\"heim_Inline_Block\" style=\"width:25%;\"> " + oQuery.members["sAdr1"] + " " + oQuery.members["sAdr2"] + " " + oQuery.members["sAdr3"] + " " + oQuery.members["sCP"] + " " + oQuery.members["sVille"] + " " + oQuery.members["sCedex"] + " " + oQuery.members["sTelephone1"] + " " + oQuery.members["sCourriel1"] + " " + oQuery.members["sTelephone2"] + " " + oQuery.members["sCourriel2"] + "</div>";
            sCode += "\t" + "<div class=\"heim_Inline_Block\"> " + oQuery.members["sSite"] + "</div>";
            sCode += "</div>";

            //Next
            nLine++;
        }
        // //BTN_ for the previous
        // if(nStart >= nLength){
        //     nStart -= HEIMDALL_NUMBER_OF_CQUERY_MAX;
        //     sCode += "<div id=\"BTN_Previous_Query\" onclick=\"contact_queryPlots(" + nStart + ", " + nLength + ")\">Afficher les " + nLength + " précédents</div>";
        // }
        // //BTN_ for the next ten
        // if(nCount < Heimdall.members.products.contacts.Segments_List.length)
        //     sCode += "<div id=\"BTN_Next_Query\" onclick=\"contact_queryPlots(" + nCount + ", " + nLength + ")\">Afficher les " + nLength + " suivants</div>";

        //add tho the element
        oElement.innerHTML = sCode;
    }

    //happy Ends
    return true;
}

///[FUNCTION][contact_queryClick]Function to manage the click on the user menu
///[PARAMETER][Integer][nLine]The line of the user 
function contact_queryClick(nLine){
    //our query layout
    var LAY_ = new LAY_Query();
    //our contact
    var oContacts = null;
    //our element
    var oElement = null;

    //not negative
    if(nLine >= 0){
        //in the range ?
        if(nLine < Heimdall.members.products.contacts.Query.length){
            //get the PNL_
            oElement = document.getElementById("PNL_Win");
            //clean the element
            oElement.innerHTML = "";
            //get the contact
            oContacts = Heimdall.members.products.contacts.Query[nLine];
            //init
            LAY_.init("PNL_Win", "Query" +  oContacts.getId_Query(), oContacts);
            //plots
            LAY_.ObjToView();
        }
    }
}

///[FUNCTION][contact_queryDoQueryResponse]Function to manage the research response from the server
///[PARAMETER][String][sText]our response text to parse as Json
function contact_queryDoQueryResponse(sText){
    //the query
    var oContact = null;

    //our count
    var nCount = 0;
    //our iterrator
    var nLine = 0;

    //our array
    var ary_ = [];

    //get the array
    ary_ = JSON.parse(sText);

    //restart the array of query
    Heimdall.members.products.contacts.Segments_List = [];

    //get the count 
    nCount = ary_.length;
    //start the loop
    while(nLine < nCount){
        //our user
        oContact = new Contacts();
        //add other stuff ]:)
        oContact.members["sFonction"] = ary_[nLine]["sFonction"];
        oContact.members["sVille"] = ary_[nLine]["sVille"];
        //load
        oContact.loadFromArray(ary_[nLine]);
        //push to the global array
        Heimdall.members.products.contacts.Segments_List.push(oContact);
        //Next
        nLine++;
    }

    //Plots !
    return contact_queryPlots(0, Heimdall.members.products.contacts.Segments_List.length);
    //return contact_queryPlots(0, HEIMDALL_NUMBER_OF_CQUERY_MAX);
}

///[FUNCTION][contact_queryDoQuery]Function to exceute the research
function contact_queryDoQuery(){
    //our element
    var oElement = null;
    //call the generique function
    contact_queryDoQueryComplete("LAY_List_User", contact_queryCreateArgs, contact_queryDoQueryResponse);
    //get the PNL_ 
    oElement = document.getElementById("LAY_Rows_Elements");
    //oElement = document.getElementById("PNL_Win_Inline");
    //clear the layout
    if(oElement != null)
        oElement.innerHTML = "";
    //Call the specific :)
    return true;
}

function contact_queryLISTSelect(sLIST_ID, ary_, sAry_ID){
    //our element
    var oElement = null;
    //our option
    var oOption = null;

    //iterrator to save the 
    var nIt = 0;
    //our count
    var nCount = 0;
    
    //load the List oh yeah !!!
    oElement = document.getElementById(sLIST_ID);
    if(oElement != null){
        if(ary_[sAry_ID] != null){
            nCount = oElement.options.length;
            nIt = 0;
            while(nIt < nCount){
                //if selected add it dude !!!
                oOption = oElement.options[nIt];
                //find
                if( findInArray(ary_[sAry_ID], oOption.value) != POTOURS_FIND_NOTFOUND) 
                    oOption.selected = true;
                else
                    oOption.selected = false;
                //next
                nIt++;
            }
        }
    }
}

function contact_queryLISTSave(sLIST_ID, ary_, sAry_ID){
    //our element
    var oElement = null;
    //our option
    var oOption = null;

    //iterrator to save the 
    var nIt = 0;
    //our count
    var nCount = 0;
    
    //save the List oh yeah !!!
    oElement = document.getElementById(sLIST_ID);
    if(oElement != null){
        ary_[sAry_ID] = [];
        nCount = oElement.options.length;
        nLine = 0;
        while(nLine < nCount){
            //if selected add it dude !!!
            oOption = oElement.options[nLine];
            //if the option if selected :
            if(oOption.selected){
                //add the id
                ary_[sAry_ID].push(oOption.value);
            }
            //next
            nLine++;
        }
    }
}

function contact_queryFilterManager(nLine){
    //our element
    var oElement = null;
    //our option
    var oOption = null;

    //our value
    var sValue = "";

    //the segment
    var oSegment = null

    //array of element
    var ary_ = [];
    //our data
    var ary_Data = [];

    //iterrator to save the 
    var nIt = 0;
    //our count
    var nCount = 0;

    //check the segment
    if(nLine >= 0 && nLine < Heimdall.members.products.contacts.Segments_Filtres.length)
        oSegment = Heimdall.members.products.contacts.Segments_Filtres[nLine];
    else
        return false;
    
    //get the ary_
    ary_ = JSON.parse(oSegment.getParametres());
    ary_Data = ary_["Data"];

    //CONTACT PART #######################################################

    //get the element
    oElement = document.getElementById("SAI_Contacts_Prenom");
    //element present
    if(oElement != null){
        if(ary_Data["SAI_Contacts_Prenom"] != null)
            oElement.value = ary_Data["SAI_Contacts_Prenom"];
        else
            oElement.value = "";
    }

    //get the element
    oElement = document.getElementById("SAI_Contacts_Nom");
    //element present
    if(oElement != null){
        if(ary_Data["SAI_Contacts_Nom"] != null)
            oElement.value = ary_Data["SAI_Contacts_Nom"];
        else
            oElement.value = "";
    }

    //load the List oh yeah !!!
    contact_queryLISTSelect("COMBO_Civilites", ary_Data, "COMBO_Civilites");
    //load the Titres
    contact_queryLISTSelect("COMBO_Titres", ary_Data, "COMBO_Titres");
    //load the contact type
    contact_queryLISTSelect("COMBO_Contact_Types", ary_Data, "COMBO_Contact_Types");

    //FUNCTION PART ######################################################

    oElement = document.getElementById("COMBO_Infos");
    if(oElement != null){
        if(ary_Data["COMBO_Infos"] != null)
            oElement.selectedIndex = ary_Data["COMBO_Infos"];
        else
            oElement.selectedIndex = 0;
    }

    //get the element
    oElement = document.getElementById("SAI_Infos_Fonction");
    //element present
    if(oElement != null){
        if(ary_Data["SAI_Infos_Fonction"] != null)
            oElement.value = ary_Data["SAI_Infos_Fonction"];
        else
            oElement.value = "";
    }

    //load the languages
    contact_queryLISTSelect("COMBO_Langues", ary_Data, "COMBO_Langues");

    //ADRESSES PART ######################################################

    oElement = document.getElementById("COMBO_Adresses");
    if(oElement != null){
        if(ary_Data["COMBO_Adresses"] != null)
            oElement.selectedIndex = ary_Data["COMBO_Adresses"];
        else
            oElement.selectedIndex = 0;
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_Ville");
    //element present
    if(oElement != null){
        if(ary_Data["SAI_Adr_Ville"] != null)
            oElement.value = ary_Data["SAI_Adr_Ville"];
        else
            oElement.value = "";
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_CP");
    //element present
    if(oElement != null){
        if(ary_Data["SAI_Adr_CP"] != null)
            oElement.value = ary_Data["SAI_Adr_CP"];
        else
            oElement.value = "";
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_Tel");
    //element present
    if(oElement != null){
        if(ary_Data["SAI_Adr_Tel"] != null)
            oElement.value = ary_Data["SAI_Adr_Tel"];
        else
            oElement.value = "";
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_Courriel");
    //element present
    if(oElement != null){
        if(ary_Data["SAI_Adr_Courriel"] != null)
            oElement.value = ary_Data["SAI_Adr_Courriel"];
        else
            oElement.value = "";
    }

    //Load the country
    contact_queryLISTSelect("COMBO_Pays", ary_Data, "COMBO_Pays");

    //TAGS PART ##########################################################

    //Load the country
    contact_queryLISTSelect("LIST_Tags", ary_Data, "LIST_Tags");

    //LOADING PART #######################################################

    //next
    return true;
}

function contact_querySaveFiltre(oSegments){

    //our Json
    var ary_Data = {};

    //our Json object
    var oJson = {};

    //our JSON String
    var sJson = "";

    //iterrator to save the 
    var nLine = 0;
    //our count
    var nCount = 0;

    //our element
    var oElement = null;
    //our option
    var oOption = null;

    //segment test
    if(oSegments == null)
        return false;
    
    //do stuff

    //get the ary_
    try {
        ary_ = JSON.parse(oSegments.getParametres());
        ary_Data = ary_["Data"];
    } catch (error) {
        ary_Data = {"nope" : ""};
    }

    //CONTACT PART #######################################################

    //get the element
    oElement = document.getElementById("SAI_Contacts_Prenom");
    //element present
    if(oElement != null){
        ary_Data["SAI_Contacts_Prenom"] = oElement.value;
    }

    //get the element
    oElement = document.getElementById("SAI_Contacts_Nom");
    //element present
    if(oElement != null){
        ary_Data["SAI_Contacts_Nom"] = oElement.value;
    }

    //save the civilities
    contact_queryLISTSave("COMBO_Civilites", ary_Data, "COMBO_Civilites");
    //save the Titres
    contact_queryLISTSave("COMBO_Titres", ary_Data, "COMBO_Titres");
    //save the contact type
    contact_queryLISTSave("COMBO_Contact_Types", ary_Data, "COMBO_Contact_Types");

    //FUNCTION PART ######################################################

    //save the List oh yeah !!!
    oElement = document.getElementById("COMBO_Infos");
    if(oElement != null){
        ary_Data["COMBO_Infos"] = oElement.selectedIndex;
    }

    //get the element
    oElement = document.getElementById("SAI_Infos_Fonction");
    //element present
    if(oElement != null){
        ary_Data["SAI_Infos_Fonction"] = oElement.value;
    }

    //save the languages
    contact_queryLISTSave("COMBO_Langues", ary_Data, "COMBO_Langues");

    //FUNCTION PART ######################################################

    //save the List oh yeah !!!
    oElement = document.getElementById("COMBO_Adresses");
    if(oElement != null){
        ary_Data["COMBO_Adresses"] = oElement.selectedIndex;
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_Ville");
    //element present
    if(oElement != null){
        ary_Data["SAI_Adr_Ville"] = oElement.value;
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_CP");
    //element present
    if(oElement != null){
        ary_Data["SAI_Adr_CP"] = oElement.value;
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_Tel");
    //element present
    if(oElement != null){
        ary_Data["SAI_Adr_Tel"] = oElement.value;
    }

    //get the element
    oElement = document.getElementById("SAI_Adr_Courriel");
    //element present
    if(oElement != null){
        ary_Data["SAI_Adr_Courriel"] = oElement.value;
    }

    //save the country
    contact_queryLISTSave("COMBO_Pays", ary_Data, "COMBO_Pays");

    //TAGS PART ##########################################################
    
    //save the country
    contact_queryLISTSave("LIST_Tags", ary_Data, "LIST_Tags");

    //SAVING PART ########################################################

    //The object
    oJson = { Nature : "filtres", Data : ary_Data};
    //The string
    sJson = JSON.stringify(oJson);

    console.log("JSON : " + sJson);
    //set the Json
    oSegments.setParametres(sJson);
    //save
    oSegments.save(Heimdall.members.user["UserId"], ".");

    //right !
    return true;
}

function contact_queryFilterCreator(){

    //our new segments
    var oSegments = null;

    //to cacth the name
    var oElement = null;

    oSegments = new Segments();
    oSegments.setId_Items_Owner(parseInt(Heimdall.members.user["UserId"]));
    oSegments.setId_Accreditations_Item(1);

    //set the name !!!
    oElement = document.getElementById("SAI_Segment_Nom");
    //not null
    if(oElement != null)
        oSegments.setNom(oElement.value.trim());

    //warning
    contact_querySaveFiltre(oSegments);

    //add to the list
}

function conctact_queryManageSaveFilter(){
    //
    var oElement = null;
    //our line selected
    var nLine = 0;

    //get the element
    oElement = document.getElementById("SAI_Segment_Nom");

    //if the element is here
    if(oElement != null){
        //not null
        if(oElement.value.trim() != "" && oElement.value.toUpperCase() != "'SEGMENTS'"){
            contact_queryFilterCreator();
            console.log("conctact_queryManageSaveFilter => Creation!!!");
        }
        else{
            //get the combo box 
            oElement = document.getElementById("COMBO_Filtre");
            //we have one
            if(oElement != null){
                //get the line
                nLine = oElement.selectedIndex;
                //console.log("conctact_queryManageSaveFilter => Combo : " + nLine);
                //selected
                if(nLine >= 0){
                    //
                    nLine = oElement.options[nLine].value;
                    nLine = findInPotoursObjLst(Heimdall.members.products.contacts.Segments_Filtres, "nId_Items", nLine);
                    //nLine = findInPotoursObjLst(Heimdall.members.products.contacts.Segments_Filtres, "nId_Contacts", nLine);
                    //console.log("conctact_queryManageSaveFilter => Line step one : " + nLine);
                    if(nLine >= 0){
                        contact_querySaveFiltre(Heimdall.members.products.contacts.Segments_Filtres[nLine]);
                        //console.log("conctact_queryManageSaveFilter => Line step two : " + nLine);
                    }
                }
            }
        }
    }
}

///[FUNCTION][contactMenu_query_HTML]Function to generate the HTML of the sub-menu
function contactMenu_query_HTML(){
    //our code
    var sCode = "";

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //build da code !!!
    sCode += '<div id="PNL_Research_Inline" class="PNL_ heim_Block">\r\n';

    sCode += '\t' + '<div id="LAY_Title" class="LAY_ heim_Block"><h1>Requêtes</h1></div>\r\n';

    sCode += '\t' + "<div class=\"PNL_ heim_Inline_Block\" style=\"width:10%;height:69%;\">";
    
    sCode += '\t' + '\t' + '<div id="LAY_Query_extended" class="LAY_ heim_Block">';
    //add the filters
    sCode += '\t' + '\t' + '\t' + "<div class=\"LAB_\">Filtres</div>";

    sCode += '\t' + '\t' + '\t' + "<form>";
    sCode += '\t' + '\t' + '\t' + "<div id=\"LAY_Content_Filtres\">";
    sCode += '\t' + '\t' + '\t' + '\t' + "<select id=\"COMBO_Filtre\">";
    sCode += '\t' + '\t' + '\t' + '\t' + '\t' + "<option value=\"-1\" \">Nouveau</option>";
    //get the count
    nCount = Heimdall.members.products.contacts.Segments_Filtres.length;
    nLine = 0;
    while(nLine < nCount){
        //add the line
        sCode += '\t' + '\t' + '\t' + '\t' + '\t' + "<option onclick=\"contact_queryFilterManager(" + nLine + ");\" value =\"" + Heimdall.members.products.contacts.Segments_Filtres[nLine].getId_Segments() + "\" \">" + Heimdall.members.products.contacts.Segments_Filtres[nLine].getNom() + "</option>";
        //Next
        nLine++;
    }
    sCode += '\t' + '\t' + '\t' + '\t' + "</select>";
    sCode += '\t' + '\t' + '\t' + "</div>";
    sCode += '\t' + '\t' + '<div id="BTN_Contacts_Query" class="BTN_" onclick="contact_queryDoQuery();">SEARCH</div>\r\n';
    sCode += '\t' + '\t' + '\t' + "<input id=\"SAI_Segment_Nom\" type=\"text\" value=\"'Segments'\"></input> ";
    sCode += '\t' + '\t' + '<div id="BTN_Segments_Save" class="BTN_" onclick="conctact_queryManageSaveFilter();">Save</div>\r\n';
    sCode += '\t' + '\t' + '\t' + "</form>";

    sCode += '\t' + '\t' + '</div>\r\n';
    sCode += '\t' + "</div>";

    sCode += '\t' + "<div class=\"PNL_ heim_Inline_Block\" style=\"width:28%;height:69%;\">";
    sCode += '\t' + "<div class=\"PNL_ heim_Block\">";
    //sCode += '\t' + "<div class=\"PNL_ heim_Inline_Block\" style=\"width:28%;height:69%;\">";
    sCode += '\t' + '\t' + "<div class=\"LAB_\">Contacts</div>";
    sCode += '\t' + '\t' + "<form>";
    //sCode += '\t' + '\t' + "<form>";
    sCode += '\t' + '\t' + '\t' + "<input id=\"SAI_Contacts_Prenom\" type=\"text\" value=\"'prenom'\"></input> ";
    sCode += '\t' + '\t' + '\t' + "<input id=\"SAI_Contacts_Nom\" type=\"text\" value=\"'nom'\"></input> ";
    sCode += '\t' + '\t' + '\t' + "<br/>";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Civilites\" multiple size=\"3\">";
    //get the count
    nCount = Heimdall.members.products.contacts.Civilites.length;
    nLine = 0;
    while(nLine < nCount){
        //add the option
        sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"" + Heimdall.members.products.contacts.Civilites[nLine].getId_Civilites() + "\" >"+ Heimdall.members.products.contacts.Civilites[nLine].getNom() + "</option>";
        //Next
        nLine++;
    }
    sCode += '\t' + '\t' + '\t' + "</select>";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Titres\" multiple size=\"3\">";
    //get the count
    nCount = Heimdall.members.products.contacts.Titres.length;
    nLine = 0;
    while(nLine < nCount){
        //add the option
        sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"" + Heimdall.members.products.contacts.Titres[nLine].getId_Titres() + "\" >"+ Heimdall.members.products.contacts.Titres[nLine].getNom() + "</option>";
        //Next
        nLine++;
    }
    sCode += '\t' + '\t' + '\t' + "</select>";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Contact_Types\" multiple size=\"3\">";
    //get the count
    nCount = Heimdall.members.products.contacts.Contact_Types.length;
    nLine = 0;
    while(nLine < nCount){
        //add the option
        sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"" + Heimdall.members.products.contacts.Contact_Types[nLine].getId_Contact_Types() + "\" >"+ Heimdall.members.products.contacts.Contact_Types[nLine].getNom() + "</option>";
        //Next
        nLine++;
    }
    sCode += '\t' + '\t' + '\t' + "</select>";
    sCode += '\t' + '\t' + "</form>";
    sCode += '\t' + "</div>";
    sCode += '\t' + "</div>";

    sCode += '\t' + "<div class=\"PNL_ heim_Inline_Block\" style=\"width:10%;height:69%;\">";
    sCode += '\t' + "<div class=\"PNL_ heim_Block\">";
    sCode += '\t' + '\t' + "<div class=\"LAB_\">Infos";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Infos\">";
    sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"0\">Sans les Infos</option>";
    sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"1\">Avec les Infos</option>";
    sCode += '\t' + '\t' + '\t' +  "</select>";
    sCode += '\t' + '\t' + "</div>";
    sCode += '\t' + '\t' + "<form>";
    sCode += '\t' + '\t' + '\t' + "<input id=\"SAI_Infos_Fonction\" type=\"text\" value=\"'fonction'\"></input>";
    sCode += '\t' + '\t' + '\t' + "<br/>";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Langues\" multiple size=\"3\">";
     //get the count
    nCount = Heimdall.members.products.contacts.Langues.length;
    nLine = 0;
    while(nLine < nCount){
        //add the option
        sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"" + Heimdall.members.products.contacts.Langues[nLine].getId_Langues() + "\" >"+ Heimdall.members.products.contacts.Langues[nLine].getNom() + "</option>";
        //Next
        nLine++;
    }
    sCode += '\t' + '\t' + '\t' +  "</select>";
    sCode += '\t' + '\t' + "</form>";
    sCode += '\t' + "</div>";
    sCode += '\t' + "</div>";

    sCode += '\t' + "<div class=\"PNL_ heim_Inline_Block\" style=\"width:28%;height:69%;\">";
    sCode += '\t' + "<div class=\"PNL_ heim_Block\">";
    sCode += '\t' + '\t' + "<div class=\"LAB_\">Adresses";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Adresses\">";
    sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"0\">Sans les adresses</option>";
    sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"1\">Avec les adresses</option>";
    sCode += '\t' + '\t' + '\t' +  "</select>";
    sCode += '\t' + '\t' + "</div>";
    sCode += '\t' + '\t' + "<form>";
    sCode += '\t' + '\t' + "<input id=\"SAI_Adr_Ville\" type=\"text\" value=\"'ville'\" size=\"15\"></input>";
    sCode += '\t' + '\t' + '\t' + "<input id=\"SAI_Adr_CP\" type=\"text\" value=\"'cp'\" size=\"6\"></input>";
    sCode += '\t' + '\t' + '\t' + "<input id=\"SAI_Adr_Tel\" type=\"text\" value=\"'telephone'\" size=\"15\"></input>";
    sCode += '\t' + '\t' + '\t' + "<input id=\"SAI_Adr_Courriel\" type=\"text\" value=\"'courriel'\" size=\"15\"></input>";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Pays\" multiple size=\"3\">";
     //get the count
    nCount = Heimdall.members.products.contacts.Pays.length;
    nLine = 0;
    while(nLine < nCount){
        //add the option
        sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"" + Heimdall.members.products.contacts.Pays[nLine].getId_Pays() + "\" >"+ Heimdall.members.products.contacts.Pays[nLine].getNom() + "</option>";
        //Next
        nLine++;
    }
    sCode += '\t' + '\t' + '\t' +  "</select>";
    sCode += '\t' + '\t' + "</form>";
    sCode += '\t' + "</div>";
    sCode += '\t' + "</div>";

    sCode += '\t' + "<div class=\"PNL_ heim_Inline_Block\" style=\"width:19%;height:69%;\">";
    sCode += '\t' + "<div class=\"PNL_ heim_Block\">";
    sCode += '\t' + '\t' + "<div class=\"LAB_\">Segments";
    sCode += '\t' + '\t' + '\t' + "<select id=\"COMBO_Segments\">";
    sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"0\">Avec les membres suivants</option>";
    sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"1\">Sans les membres suivants</option>";
    sCode += '\t' + '\t' + '\t' +  "</select>";
    sCode += '\t' + '\t' + "</div>";
    sCode += '\t' + '\t' + "<div id=\"LAY_Content_Tag\">";
    sCode += '\t' + '\t' + '\t' + "<select id=\"LIST_Tags\" multiple size=\"4\">";
    //get the count
    nCount = Heimdall.members.products.contacts.Segments_Tags.length;
    nLine = 0;
    while(nLine < nCount){
        //add the option
        sCode += '\t' + '\t' + '\t' + '\t' + "<option value=\"" + Heimdall.members.products.contacts.Segments_Tags[nLine].getId_Segments() + "\" >"+ Heimdall.members.products.contacts.Segments_Tags[nLine].getNom() + "</option>";
        //Next
        nLine++;
    }
    sCode += '\t' + '\t' + '\t' +  "</select>";
    sCode += '\t' + '\t' + "</div>";
    sCode += '\t' + "</div>";
    sCode += '\t' + "</div>";

    sCode += '</div>\r\n';

    sCode += '<div id="PNL_Win_Inline" class="PNL_ heim_Block">';
    sCode += '\t' + '<div id="LAY_Title"> Titres </div>';
    sCode += '\t' + '<div id="LAY_Rows_Elements"></div>';
    sCode += '</div>';

    return sCode;
}

///[FUNCTION][contactMenu_query_CLICK]Function to manage the click on the sub-menu
function contactMenu_query_CLICK(){
    //get the content layout
    var oElement = document.getElementById("LAY_Content");
    //our potours list
    var LIST_ = null;
    //our iterator
    var nLine = 0;
    //our count 
    var nCount = 0;
    //our text/tag array !!!
    var ary_ = [];

    //generate the code
    oElement.innerHTML = contactMenu_query_HTML();

    //Update the options !
    Heimdall_Contacts.menuClassUpdate("OPT_Contacts_Query");

    return true;
}