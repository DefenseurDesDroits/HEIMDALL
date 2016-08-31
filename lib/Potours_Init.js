

//var ary_Potours_Files = ["lib/Potours_Overview.js"];
var ary_Potours_Files = ["lib/Potours_Legacy.js", "lib/Potours_Overview.js"];

function Potours_loadScript(sFilename){
    var fileref = document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", sFilename);
    fileref.setAttribute("id", "Potours_Load_" + sFilename);

    //document.getElementsByTagName("head")[0].appendChild(fileref);
    document.head.appendChild(fileref);
    
}

function Potours_loadScriptAsync(ary_sFilename, nLine, callback){

    if(nLine < ary_sFilename.length){
        
        //console.log("Potours Load script : " + ary_sFilename[nLine]);
        
        var nNext = nLine + 1;
        var script = document.createElement('script');
        script.setAttribute("type","text/javascript");
        script.setAttribute("src", ary_sFilename[nLine]);
        script.setAttribute("id", "Potours_Load_" + ary_sFilename[nLine]);

        script.onload = function(){
            //console.log("Potours Loaded script : " + ary_sFilename[nLine]);
            Potours_loadScriptAsync(ary_sFilename, nNext, callback);
        };

        //document.getElementsByTagName("head")[0].appendChild(fileref);
        document.head.appendChild(script);

    }
    else{
        //console.log("Potours Load script over !!! ");
        callback();
    }
} 

function Potours_loadScriptFiles(ary_sFilename, callback){

    Potours_loadScriptAsync(ary_sFilename, 0, callback);

}

function Potours_init_lib(callback){
    //console.log("Potours init !!! ");
    Potours_loadScriptFiles(ary_Potours_Files, callback);
    //console.log("Potours done !!! ");
}