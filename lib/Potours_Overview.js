



function Overview(sId, nWidth, nHeight, sColor, xOpacity){
    
    this.sID = sId;
    this.sShadowID = "SHADOWS_" + sId;
    var Me = this;

    //init function 
    this.init = function(nWidth, nHeight, sColor, xOpacity){

        //get da body element
        var oBody = document.body;
        //our code
        var sCode = "";

        //our top
        var nTop = (oBody.clientHeight - nHeight) / 2;
        if (nTop < 0)
            nTop = 0;
        var nLeft = (oBody.clientWidth - nWidth) / 2;
        if (nLeft < 0)
            nLeft = 0;

        sCode += "<div id=\"" + this.sShadowID + "\" style=\"background-color:" + sColor + ";width:100%;height:100%;opacity:" + xOpacity + ";top:0px;left:0px;position:absolute\">";
        //sCode += "\t" + "<div id=\"" + this.sID + "\" style=\"width:" + nWidth + "px;height:" + nHeight + "px;background-color:#FFFFFF;opacity:1.0\" />";
        sCode += "</div>";  
        sCode += "\t" + "<div id=\"" + this.sID + "\" style=\"width:" + nWidth + "px;height:" + nHeight + "px;background-color:#FFFFFF;opacity:1.0;top:" + nTop + "px;left:" + nLeft + "px;position:absolute\" />";   

        //add the night to 
        oBody.innerHTML += sCode;

    }

    //init us !
    this.init(nWidth, nHeight, sColor, xOpacity);

    this.onDisposed = function(){
        /* Nothing */
    }

    this.dispose = function(){
        //get da body element
        var oBody = document.body;

        oBody.removeChild(document.getElementById(this.sID));
        oBody.removeChild(document.getElementById(this.sShadowID));

        this.onDisposed();
    }
}

var ptrMsgBox = null;

function MsgBox(sMessage){

    Overview.call(this, "MsgBoxID", 200, 150, "#A2A2A2", 0.5);

    this.sText = sMessage;

    //only one message box
    ptrMsgBox = this;

    this.plotsText = function(){

        //get the parent
        var oElement = document.getElementById(this.sID);

        //our code
        var sCode = "";

        //our code yeah !!!
        sCode += "<div id=\"" + this.sID + "_Content\">" + this.sText + "</div>";
        sCode += "<div class=\"BTN_\" onclick=\"ptrMsgBox.dispose()\">OK</div>";

        //put the code
        oElement.innerHTML = sCode;

    }

    this.plotsText();

}

function notDevYet(){
    return MsgBox("NotDevYet");
}