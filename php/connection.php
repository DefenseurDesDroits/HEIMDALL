<?PHP

//Connection 

//Choose your include*********************************
//include the default DTB
include "Potours_Connection.php";
//include the postGre Sql DTB
//include "Potours_Connection_PGSQL.php";

//Create the connection object************************

//default case
$oConnection = new Potours_Connection("ip", "dtb", "usr", "pwd");
//default case
//$oConnection = new Potours_Connection_PGSQL("ip", "dtb", "usr", "pwd");

?>
