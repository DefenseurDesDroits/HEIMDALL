<?php

include_once("Download.php");
include_once("PUBLICATIONS_Fichiers.php");
//include_once("PUBLICATIONS_Publications.php");

//Const, path to store the file from the script location 
const HEIMDALL_DEFAULT_DIR = "../content/";
//Const, path to store the file from the script location 
const HEIMDALL_DEFAULT_DIR_SAVED = "content/";
//Const, typ of file
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

    //Does the folder exists ?
    if( ! is_dir(HEIMDALL_DEFAULT_DIR) ){
        //if not create the folder !!!
        mkdir(HEIMDALL_DEFAULT_DIR);
    }

    //execute the write and riecive the new path value !
    $sFile = writeFileOnServerId(HEIMDALL_DEFAULT_TYP, HEIMDALL_DEFAULT_DIR, $nId);
    //$sFile = writeFileOnServer(HEIMDALL_DEFAULT_TYP, HEIMDALL_DEFAULT_DIR);

    //save the file
    $oFichiers->setPath( str_replace(HEIMDALL_DEFAULT_DIR, HEIMDALL_DEFAULT_DIR_SAVED, $sFile) );
    //get the filesize
    $oFichiers->setFilesize(filesize($sFile));
    //get the hash 
    $oFichiers->setChecksum(hash("sha512", $sFile));//http://php.net/manual/en/function.hash.php
    //$oFichiers->setChecksum(md5_file($sFile));

    //save the server path 
    $oFichiers->save($oAgent);

    echo $oFichiers->exportToJson();

    //Is Rogue One the Best Star Wars Ever ?
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