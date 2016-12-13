<?php 

public function writeFileOnServer($sType, $sPath){
    //our filename server 
    $sFileServer = "";

	$uploadfile = $sPath . basename($_FILES[$sType]['name']);
	//$uploadfile = $sPath . basename($_FILES['userfile']['name']);
	if (move_uploaded_file($_FILES[$sType]['tmp_name'], $uploadfile)) 	{
	//if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) 	{
  		//echo "success";
		  
	} else {
  		// WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
  		// Otherwise onSubmit event will not be fired
  		//echo "error";
	}

    //return the Server filename
    return $sFileServer;
}

?>