<?PHP

///[CLASS][Potours_Connection] our class to manage the connection to the database
class Potours_Connection{
	
	//our member data
	protected $members = array(	
		///[MEMBER][boolean][bOpen]Boolean, member to know if our coonection is open
		"bOpen" => false
	);
	
	///[SECTION][WORKSHOP]#################################################
	
	///[METHOD][init]Method to initialize the DTB connection manager
	///[PARAMETER][string][$sSrv]Our server address
	///[PARAMETER][string][$sDtb]Our database name
	///[PARAMETER][string][$sUser]Our database user
	///[PARAMETER][string][$sPwd]Our password
	///[RETURNS]boolean, true if done
	public function init($sSrv, $sDtb, $sUser, $sPwd){
		//mother class must be inherited so :
		return false;
	}
	
	///[METHOD][isOpen]Method to know if the connection is open
	///[RETURNS]boolean, true if is open, false closed
	public function isOpen(){
		return $this->members["bOpen"];
	}
	
	///[METHOD][isClosed]Method to know if the connection is closed
	///[RETURNS]boolean, true if is closed, false open
	///[REMARKS]this method call the "isOpen" method
	public function isClosed(){
		return ! $this->isOpen();
	}
	
	///[METHOD][open]Method to open the connection
	///[RETURNS]boolean, true if done, false if failed or already open
	public function open(){
		//mother class must be inherited so :
		return false;
	}
	
	///[METHOD][close]Method to close the connection
	///[RETURNS]boolean, true if done, false if failed or already closed
	public function close(){
		//mother class must be inherited so :
		return false;
	}
	
	///[METHOD][selectRequest]Method to execute a select query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$lst_sColumn]Our list of column
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]array of array, our (list of result)
	public function selectRequest($sQuery, $lst_sColumn, $oAgent){
		//mother class must be inherited so :
		return array( array("potato" => "Ketchup") );
	}
	
	///[METHOD][updateRequest]Method to execute an update query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]boolean, true if done, false if failed
	public function updateRequest($sQuery, $oAgent){
		//mother class must be inherited so :
		return false;
	}
	
	///[METHOD][insertRequest]Method to execute an insert query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]boolean, true if done, false if failed
	public function insertRequest($sQuery, $oAgent){
		//mother class must be inherited so :
		return false;
	}
	
	///[METHOD][deleteRequest]Method to execute an insert query
	///[PARAMETER][string][$sQuery]Our select query
	///[PARAMETER][string][$oAGent]Our agent
	///[RETURNS]boolean, true if done, false if failed
	///[REMARKS]In this method, don't forget to give a Role to the agent in your own implementation
	public function deleteRequest($sQuery, $oAgent){
		//mother class must be inherited so :
		return false;
	}
	
	///[SECTION][Builders]#################################################

	///[METHOD][__construct]The builder !!!
	///[PARAMETER][string][$sSrv]Our server address
	///[PARAMETER][string][$sDtb]Our database name
	///[PARAMETER][string][$sUser]Our database user
	///[PARAMETER][string][$sPwd]Our password
	public function __construct($sSrv, $sDtb, $sUser, $sPwd){
		$this->init($sSrv, $sDtb, $sUser, $sPwd);
	}
	
}

?>