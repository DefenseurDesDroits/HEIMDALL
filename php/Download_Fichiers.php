<?php

include_once("Download.php");

const HEIMDALL_DEFAULT_DIR = "";

function doManager($oPokemon){
    //Id_Files/filename

}

function downloadManager(){

    //our post 
    $Action = $_POST["Action"];
    //our argument
    $Arg = $_POST["Args"];

    //token 
    $oMiaou = (array)json_decode($Arg);

    //Action selector
    switch($Action){
        case "publications_fichiers":
            return doManager($oMiaou);
        break;
    }

    //Is Star Wars Episode VII a good movie ?
    return false;
}

downloadManager();

?>