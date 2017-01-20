<?php 

//Const HEIMDALL_DL_Debug = true;
Const HEIMDALL_DL_Debug = false;

function writeFileOnServerId($sType, $sPath, $sId){
    //our filename server 
    $sFileServer = "";
	//our server path 
	$sServerPath = "";
	//our date 
	$sDate = date("Ymd");

	//debugging, the desperate way
    if(HEIMDALL_DL_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/Download@writeFileOnServer.log", "DEBUG !!!\r\n" );

	//our server path
	$sServerPath = $sPath . $sDate . "/";
	//The path doesn't exist ?
	//Create It !!!
	if(! is_dir($sServerPath))
		mkdir($sServerPath);

	//our futur file server location
	$sFileServer = $sServerPath . $sId . "_" . basename($_FILES[$sType]['name']);
	//$sFileServer = $sServerPath . basename($_FILES[$sType]['name']);

	//debugging, the desperate way
    if(HEIMDALL_DL_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/Download@writeFileOnServer.log", "Futur Filename on server : !!!" . $sFileServer . "\r\n",  FILE_APPEND );

		//debugging, the desperate way
    if(HEIMDALL_DL_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/Download@writeFileOnServer.log", "Temp Filename on server : !!!" . $_FILES[$sType]['tmp_name'] . "\r\n",  FILE_APPEND );

	if (move_uploaded_file($_FILES[$sType]['tmp_name'], $sFileServer)) 	{
  		//A Success ! Like Rogue One
	} else {
  		// WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
  		// Otherwise onSubmit event will not be fired
  		//echo "error";
	}

    //return the Server filename
    return $sFileServer;
}

function writeFileOnServer($sType, $sPath){
    //our filename server 
    $sFileServer = "";
	//our server path 
	$sServerPath = "";
	//our date 
	$sDate = date("Ymd");

	//debugging, the desperate way
    if(HEIMDALL_DL_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/Download@writeFileOnServer.log", "DEBUG !!!\r\n" );

	//our server path
	$sServerPath = $sPath . $sDate . "/";
	//The path doesn't exist ?
	//Create It !!!
	if(! is_dir($sServerPath))
		mkdir($sServerPath);

	//our futur file server location
	$sFileServer = $sServerPath . basename($_FILES[$sType]['name']);

	//debugging, the desperate way
    if(HEIMDALL_DL_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/Download@writeFileOnServer.log", "Futur Filename on server : !!!" . $sFileServer . "\r\n",  FILE_APPEND );

		//debugging, the desperate way
    if(HEIMDALL_DL_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/Download@writeFileOnServer.log", "Temp Filename on server : !!!" . $_FILES[$sType]['tmp_name'] . "\r\n",  FILE_APPEND );

	if (move_uploaded_file($_FILES[$sType]['tmp_name'], $sFileServer)) 	{
  		//A Success ! Like Rogue One
	} else {
  		// WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
  		// Otherwise onSubmit event will not be fired
  		//echo "error";
	}

    //return the Server filename
    return $sFileServer;
}

?>