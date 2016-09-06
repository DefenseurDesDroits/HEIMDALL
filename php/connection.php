<?PHP

//Module : Common
//Created by : Ludowic "MagnusMoi" EMMANUEL
//Filename : Noeuds.php
//Description : Connection file

//Connection 

//Choose your include*********************************
//include the default DTB
//include "Potours_Connection.php";
//include the postGre Sql DTB
include_once "Potours_Connection_PGSQL.php";

//Create the connection object************************

//default case
//$oConnection = new Potours_Connection("ip", "dtb", "usr", "pwd");
//default case
//$oConnection = new Potours_Connection_PGSQL("192.168.1.183:5432", "crm", "infocom", "07_PVo-DT1G6");
$oConnection = new Potours_Connection_PGSQL("192.168.1.183", "crm", "infocom", "07_PVo-DT1G6");
$oConnection->open();

//Quotes Function

///[METHOD][setId_Noeuds]Method to set the Id_Noeuds
///[PARAMETER][string][$sStr]Our string to escape
///[RETURNS]string, da job !!!
function Quotes($sStr){
	//return da escape string
	return "'" . str_replace("'", "''", $sStr) . "'";
	//return pg_escape_literal($GLOBALS["oConnection"]->getConnectionObject(), $sStr);
	//return pg_escape_literal(null, $sStr);
}

?>
