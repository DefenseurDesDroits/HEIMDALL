/*
* FIle to init and manage the contact products
*
*
*/

///[FUNCTION][contactDoQuery]Function to manage the research
function contactDoQuery(){
    //Ya ya ya !
    alert("It's working bro ! or sis ... :)");

    //Our request object
    var oReq = new XMLHttpRequest();
    //Define the function
    oReq.onreadystatechange = function(){
        //if everything is alright
        if(oReq.readyState == 4 && oReq.status == 200){
            var oElement = document.getElementById("PNL_List");
            oElement.innerHTML = oReq.responseText;
        }
    };
    //prepare the query*********************
    //check the open
    oReq.open("POST", "php/queryManager.php", true);
    //set the request header
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    oReq.send("Id=0&Session=" + "" + "&Action=contacts_contacts&Args=" + JSON.stringify({Method : "Like", Value : "Name"})); 
    //Return the job !
    return true;
}

///[FUNCTION][init_contacts]Function to init the contact part
function init_contacts(){
    
    //our code
    var sCode = "";
    //get the content layout
    var oElement = document.getElementById("LAY_Content");

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
        
        sCode += '\t<div id="LAY_Query_extended" class="LAY_ heim_Block">';
        sCode += '\t</div>\r\n';

        sCode += '</div>\r\n';

        sCode += '<div id="PNL_List" class="PNL_ heim_Inline_Block">NOpe</div>';

        oElement.innerHTML = sCode;

        return true;
    }

    return false;
}