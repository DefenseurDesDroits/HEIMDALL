<?PHP

//call the parent class you baka !
include "Potours_Connection.php";

///[CLASS][Potours_Connection] our class to manage the connection to the database
class Potours_Connection_PGSQL extends Potours_Connection{
	
	
	///[SECTION][GETTERS]#################################################
	
	///[METHOD][getConnectionString]Method to get the connection string
	///[RETURNS]string, our connection
	public function getConnectionString(){
		//return our connection string
		return $this->members["sConnectionString"];
	}

	///[METHOD][getConnectionString]Method to get the connection string
	///[RETURNS]string, our connection
	public function getConnectionObject(){
		//return our connection string
		return $this->members["pgConnection"];
	}
	
	///[SECTION][WORKSHOP]#################################################
	
	///[METHOD][init]Method to initialize the DTB connection manager
	///[PARAMETER][string][$sSrv]Our server address
	///[PARAMETER][string][$sDtb]Our database name
	///[PARAMETER][string][$sUser]Our database user
	///[PARAMETER][string][$sPwd]Our password
	///[RETURNS]boolean, true if done
	public function init($sSrv, $sDtb, $sUser, $sPwd){
		//create the connection string
		$this->members["sConnectionString"] = "host=" . $sSrv . " dbname=" . $sDtb . " user=" . $sUser . " password=" . $sPwd;
		//job done !!!
		return true;
	}
	
	///[METHOD][open]Method to open the connection
	///[RETURNS]boolean, true if done, false if failed or already open
	public function open(){
		if($this->isClosed()){
			//get the connection
			$this->members["pgConnection"] = pg_connect($this->members["sConnectionString"]) or die(false);
			//set the boolean flag!!!
			$this->members["bOpen"] = true;
			//everthing is all right !!!
			return true;
		}
		//default return
		return false;
	}
	
	///[METHOD][close]Method to close the connection
	///[RETURNS]boolean, true if done, false if failed or already closed
	public function close(){
		if($this->isOpen()){
			//close the connection
			pg_close($this->members["pgConnection"]);
			//nullify the member
			$this->members["pgConnection"] = null;
			//set the boolean flag!!!
			$this->members["bOpen"] = false;
			//everthing is all right !!!
			return true;
		}
		//default return
		return false;
	}
	
	///[METHOD][selectRequest]Method to execute a select query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$lst_sColumn]Our list of column
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]array of array, our (list of result)
	public function selectRequest($sQuery, $lst_sColumn, $oAgent){
		//define our object to recieve the query
		$result = null;
		//define ou object to recieve the lines
		$oLine = null;
		//our result array
		$ary_Result = null;
		//our line array
		$ary_ = null;
		
		//count for lst column
		$nCount = count($lst_sColumn);
		//our iterator
		$nLine = 0;
		
		if($this->isClosed()){
			//no connection etablished
			return array( array("ERROR" => 'No connection !!! ') );
		}
		
		//get the query
		$result = pg_query($this->members["pgConnection"], $sQuery);

		//does we have a query result ?
		if($result != false){
			
			//allocation of our result array
			$ary_Result = array();
			
			while ($oLine = pg_fetch_array($result, null, PGSQL_ASSOC)) {
				//prepare the next line
				$ary_ = array();
				$nLine = 0;
				foreach ($oLine as $col_value) {
					//if the column count is good !!!
					if($nLine < $nCount){
						$ary_[$lst_sColumn[$nLine]] = $col_value;
					}
					else{
						array_push($ary_, $col_value);
					}
					//Next column
					$nLine++;
				}
				//add the line
				array_push($ary_Result, $ary_);
			}
			
			//ok !!!
			return $ary_Result;
		}
		
		//mother class must be inherited so :
		return array( array("ERROR" => 'Request failed : ' . pg_last_error()) );
	}
	
	///[METHOD][updateRequest]Method to execute an update query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]boolean, true if done, false if failed
	public function updateRequest($sQuery, $oAgent){
		/*pg_query_params() a day ?*/
		if($this->isOpen()){
			if(pg_query($this->members["pgConnection"], $sQuery) != false)
				return true;
		}
		//don't bother me !
		return false;
	}
	
	///[METHOD][insertRequest]Method to execute an insert query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]boolean, true if done, false if failed
	public function insertRequest($sQuery, $oAgent){
		/*pg_query_params() a day ?*/
		if($this->isOpen()){
			if(pg_query($this->members["pgConnection"], $sQuery) != false)
				return true;
		}
		//don't bother me !
		return false;
	}
	
	///[METHOD][deleteRequest]Method to execute an insert query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]boolean, true if done, false if failed
	///[REMARKS]In this method, don't forget to give a Role to the agent in your own implementation
	public function deleteRequest($sQuery, $oAgent){
		/*pg_query_params() a day ?*/
		if($this->isOpen()){
			if(pg_query($this->members["pgConnection"], $sQuery) != false)
				return true;
		}
		//don't bother me !
		return false;
	}
	
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	///[PARAMETER][string][$sSrv]Our server address
	///[PARAMETER][string][$sDtb]Our database name
	///[PARAMETER][string][$sUser]Our database user
	///[PARAMETER][string][$sPwd]Our password
	public function __construct($sSrv, $sDtb, $sUser, $sPwd){
		//call the parent builder
		parent::__construct($sSrv, $sDtb, $sUser, $sPwd);
		//add a new members
		///[MEMBER][object][pgConnection]Object, our object to connect to the PostgreSQL Database
		$this->members["pgConnection"] = null;
		///[MEMBER][string][sConnectionString]string, our string connection
		$this->members["sConnectionString"] = "";
		//method to init the construct
		$this->init($sSrv, $sDtb, $sUser, $sPwd);
	}
	
}

?>