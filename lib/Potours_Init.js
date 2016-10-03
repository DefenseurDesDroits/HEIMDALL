

//var ary_Potours_Files = ["lib/Potours_Overview.js"];
var ary_Potours_Files = ["lib/Potours_Legacy.js", "lib/Potours_Overview.js", "lib/Potours_List.js"];

const POTOURS_VERSION = "0.2.2";

function Potours_loadScript(sFilename){
    var fileref = document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", sFilename);
    fileref.setAttribute("id", "Potours_Load_" + sFilename);

    //document.getElementsByTagName("head")[0].appendChild(fileref);
    document.head.appendChild(fileref);
    
}

function Potours_loadScriptAsync(ary_sFilename, nLine, callback, sVersion){

    if(nLine < ary_sFilename.length){
        
        //console.log("Potours Load script : " + ary_sFilename[nLine]);
        
        var nNext = nLine + 1;
        var script = document.createElement('script');
        script.setAttribute("type","text/javascript");

        if(sVersion != null)
            script.setAttribute("src", ary_sFilename[nLine] + "?" + sVersion);
        else
            script.setAttribute("src", ary_sFilename[nLine]);

        script.setAttribute("id", "Potours_Load_" + ary_sFilename[nLine]);

        script.onload = function(){
            //console.log("Potours Loaded script : " + ary_sFilename[nLine]);
            Potours_loadScriptAsync(ary_sFilename, nNext, callback, sVersion);
        };

        document.head.appendChild(script);
    }
    else{
        //console.log("Potours Load script over !!! ");
        callback();
    }
} 

function Potours_loadScriptFiles(ary_sFilename, callback, sVersion){

    Potours_loadScriptAsync(ary_sFilename, 0, callback, sVersion);

}

function Potours_init_lib(callback){
    //console.log("Potours init !!! ");
    Potours_loadScriptFiles(ary_Potours_Files, callback, POTOURS_VERSION);
    //console.log("Potours done !!! ");
}