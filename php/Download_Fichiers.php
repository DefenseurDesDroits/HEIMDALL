<?php

include_once("Download.php");
include_once("PUBLICATIONS_Publictions.php");

const HEIMDALL_DEFAULT_DIR = "../content/";
const HEIMDALL_DEFAULT_TYP = "Fichier";

function doManager($oPokemon){
    //Id_Files/filename

    //our id 
    $nId = intval($oPokemon["id"]);
    //our agent
    $oAgent = $oPokemon["user_id"];
    //our object 
    $oFichiers = new Fichiers();
    //our files name 
    $sFile = "";

    //load the file object
    $oFichiers->setId_Fichiers($nId);
    //load the value
    $oFichiers->loadFromConnection($oAgent);

    //execute the write and riecive the new path value !
    $sFile = writeFileOnServer(HEIMDALL_DEFAULT_TYP, HEIMDALL_DEFAULT_DIR);

    //save the file
    $oFichiers->setPath($sFile);
    //get the filesize
    $oFichiers->setFilesize(filesize($sFile));
    //get the hash 
    $oFichiers->setChecksum(md5_file($sFile));

    //save the server path 
    $oFichiers->save($oAgent)

    echo $oFichiers.exportToJson();

    //Happy days !
    return true;
}

function downloadManager(){

    //our post 
    $Action = $_POST["Action"];
    //our argument
    $Arg = $_POST["Args"];

    //token 
    $oMiaous = (array)json_decode($Arg);

    //Action selector
    switch($Action){
        case "publications_fichiers":
            return doManager($oMiaous);
        break;
    }

    //Is Star Wars Episode VII a good movie ?
    return false;
}

downloadManager();

?>