<?php //yeah

//put your include
// include_once("CONTACTS_Contacts.php");
// include_once("CONTACTS_Organisations.php");
// include_once("CONTACTS_Users.php");

include_once("queryTools.php");

include_once("CONTACTS_Contact_Infos.php");
include_once("CONTACTS_Infos.php");

//define const 
const QUERY_METHOD_LIKE = "Like";
//Const HEIMDALL_QM_CONTACTS_SEGEMENT_Debug = false;
Const HEIMDALL_QM_CONTACTS_SEGEMENT_Debug = true;

///[FUNCTION][searchQuery]Function to search the contact
function searchQuery($Args){

    //Our query 
    $sQuery = "";
    //the method dude
    $sMethod = "";
    //selection part
    $sSelection = "";
    //the from part
    $sFrom = "";
    //our condition part
    $sWhere = "";
    //our order
    $sOrder = "";

    //our contact
    $oContact = new Contacts();
    //our info_contacts
    $oContact_Infos = new Contact_Infos();
    //our info 
    $oInfos = new Infos();

    //result query array 
    $ary_ = array();
    //result array 
    $ary_Obj = array();
    //one arg
    $ary_Arg = array();

    //Position dude
    $nPosition = 0;
    //our count
    $nCount = 0;
    //our iterrator
    $nLine = 0;

    //Contact info enable ?
    $bContact_Infos = false;
    //info ineable
    $bInfos = false;

    //debugging, the desperate way
    if(HEIMDALL_QM_CONTACTS_SEGEMENT_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Query@searchQuery.log", "DEBUG !!!\r\n" );

    //coreespondance set 
    $ary_Corres = $oContact->getCorrespondanceArray();

    //recreate the query
    $sSelection = "SELECT DISTINCT " . $oContact->getColumns() . "\r\n" ;
    //$sQuery = "SELECT DISTINCT " . $oContact->getColumns() . "\r\n" ;
    $sFrom .= "FROM " . $oContact->getTable() . "\r\n"  ;
    //$sQuery .= "FROM " . $oContact->getTable() . "\r\n"  ;

    //add the link between column s and foreign Key
    $sWhere .= "WHERE " . $oContact->getLinkConditions(true);
    //$sQuery .= "WHERE " . $oContact->getLinkConditions(true);

    //add type 
    $sWhere .= "\r\n" . "AND xxx.contacts.id_contact_types <> 0";
    //$sWhere .= "\r\n" . "AND xxx.contacts.id_contact_types = 1";
    //$sQuery .= "\r\n" . "AND xxx.contacts.id_contact_types = 1";

    $sOrder .= "\r\n" . "ORDER BY xxx.contacts.nom, xxx.contacts.prenom";

    //get the count
    $nCount = count($Args);
    //reinit the iterrator
    $nLine = 0;
    //loop
    while($nLine < $nCount){
        //do job !!!
        $ary_Arg = (array) $Args[$nLine];
        //element to add 
        if(!$bContact_Infos || !$bInfos){
            if(!$bContact_Infos){
                if(in_array("sFonction", (array) $ary_Arg["Names"])){
                    //add to the correpondance array
                    $ary_Corres["sFonction"] = "xxx.Contact_Infos.Fonction";
                    //Get the selection
                    $sSelection .= ", xxx.Contact_Infos.Fonction" . "\r\n" ;
                    //add from the section 
                    $sFrom .= ", xxx.Contact_Infos" . "\r\n" ;
                    //add to the Where
                    $sWhere .= "\r\n" . "AND xxx.Contact_Infos.Id_Contacts = xxx.contacts.id_Contacts";
                    //our order
                    $sOrder .= ", xxx.Contact_Infos.Fonction";
                    //never go again
                    $bContact_Infos = true;
                }
            }
            if(!$bInfos){
                
                //our stage
                if(in_array("sVille", (array) $ary_Arg["Names"])){
                    
                    //Just in case
                    if(!$bContact_Infos){
                        //add to the correpondance array
                        $ary_Corres["sFonction"] = "xxx.Contact_Infos.Fonction";
                        //Get the selection
                        $sSelection .= ", xxx.Contact_Infos.Fonction" . "\r\n" ;
                        //add from the section 
                        $sFrom .= ", xxx.Contact_Infos" . "\r\n" ;
                        //add to the Where
                        $sWhere .= "\r\n" . "AND xxx.Contact_Infos.Id_Contacts = xxx.contacts.id_Contacts";
                        //our order
                        //$sOrder .= ", xxx.Contact_Infos.Fonction";
                        //never go again
                        $bContact_Infos = true;
                    }
                    
                    //add to the correpondance array
                    $ary_Corres["sAdr1"] = "xxx.Infos.Adr1";
                    $ary_Corres["sAdr2"] = "xxx.Infos.Adr2";
                    $ary_Corres["sAdr3"] = "xxx.Infos.Adr3";
                    $ary_Corres["sCP"] = "xxx.Infos.CP";
                    $ary_Corres["sCedex"] = "xxx.Infos.Cedex";
                    $ary_Corres["sVille"] = "xxx.Infos.Ville";
                    $ary_Corres["sTelephone1"] = "xxx.Infos.Telephone1";
                    $ary_Corres["sCourriel1"] = "xxx.Infos.Courriel1";
                    $ary_Corres["sTelephone2"] = "xxx.Infos.Telephone2";
                    $ary_Corres["sCourriel2"] = "xxx.Infos.Courriel2";
                    $ary_Corres["sSite"] = "xxx.Infos.Site";
                    //Get the selection
                    $sSelection .= ", xxx.Infos.Adr1" ;
                    $sSelection .= ", xxx.Infos.Adr2" ;
                    $sSelection .= ", xxx.Infos.Adr3" ;
                    $sSelection .= ", xxx.Infos.CP" ;
                    $sSelection .= ", xxx.Infos.Cedex" ;
                    $sSelection .= ", xxx.Infos.Ville" ;
                    $sSelection .= ", xxx.Infos.Telephone1" ;
                    $sSelection .= ", xxx.Infos.Courriel1" ;
                    $sSelection .= ", xxx.Infos.Telephone2" ;
                    $sSelection .= ", xxx.Infos.Courriel2" ;
                    $sSelection .= ", xxx.Infos.Site" . "\r\n" ;
                    //add from the section 
                    $sFrom .= ", xxx.Infos" . "\r\n" ;
                    //add to the Where
                    $sWhere .= "\r\n" . "AND xxx.Contact_Infos.Id_Contact_Infos = xxx.Infos.id_Contact_Infos";
                    //our order
                    //$sOrder .= ", xxx.Contact_Infos.Fonction";
                    //never go again
                    $bInfos = true;
                }
            }
        }
        //don't waste your time if nothing
        if($ary_Arg["Value"] != ""){

            if(HEIMDALL_QM_CONTACTS_SEGEMENT_Debug)
                file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Query@searchQuery.log", "The Method : " . $ary_Arg["Method"] . "\r\n" . "The Value : " . $ary_Arg["Value"] . "\r\n",  FILE_APPEND );

            //get the method
            $sMethod = $ary_Arg["Method"];
            //identify the Method
            $nPosition = strpos($sMethod, "COND_");
            if($nPosition === false)
                $nPosition = 0;
            else{
                //get the sub method
                $sMethod = str_replace("COND_", "", $sMethod);
                //Select dude
                switch ($sMethod) {
                    case 'LIKE_SW'://Starts with !!! (and not Star Wars you baka !!!)
                        $sWhere .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", $ary_Arg["Value"] . "%", $ary_Corres );
                        //$sQuery .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", $ary_Arg["Value"] . "%", $ary_Corres );
                        break;
                    case 'LIKE_EW'://Ends with !!!
                        $sWhere .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", "%" . $ary_Arg["Value"], $ary_Corres );
                        //$sQuery .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", "%" . $ary_Arg["Value"], $ary_Corres );
                        break;
                    case 'LIKE_C'://Contains !!!
                        $sWhere .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", "%" . $ary_Arg["Value"] . "%", $ary_Corres );
                        //$sQuery .= " AND " . createCondition((array) $ary_Arg["Names"], "ILIKE", "%" . $ary_Arg["Value"] . "%", $ary_Corres );
                        break;
                    case 'IN_LIST':
                        $ary_Obj = (array) $ary_Arg["Names"];
                        if($ary_Arg["Value"] != "")
                            $sWhere .= " AND " . $ary_Obj[0] . " IN(" . $ary_Arg["Value"] . ")";
                            //$sQuery .= " AND " . $ary_Obj[0] . " IN(" . $ary_Arg["Value"] . ")";
                        break;
                    case 'NIN_LIST':
                        $ary_Obj = (array) $ary_Arg["Names"];
                        if($ary_Arg["Value"] != "")
                            $sWhere .= " AND " . $ary_Obj[0] . " NOT IN(" . $ary_Arg["Value"] . ")";
                            //$sQuery .= " AND " . $ary_Obj[0] . " NOT IN(" . $ary_Arg["Value"] . ")";
                        break;
                    default:
                        # code...
                        break;
                }
            }

        }
        
        //next
        $nLine++;
    }
    
    //$sQuery .= "\r\n" . "ORDER BY xxx.contacts.nom, xxx.contacts.prenom";

    //create the query 
    $sQuery = $sSelection . $sFrom . $sWhere . $sOrder;

    //debugging, the desperate way
    if(HEIMDALL_QM_CONTACTS_SEGEMENT_Debug)
        file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Query@searchQuery.log", "The Query : \r\n " . $sQuery . "\r\n",  FILE_APPEND );

    //get the array (so ugly way bro !!!)
    $GLOBALS["oConnection"]->open();
    $ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", ($oContact->getColumns() . ", fonction, adr1, adr2, adr3, cp, cedex, ville, tel1, courriel1, tel2, courriel2, site") ), null);
    //$ary_ = $GLOBALS["oConnection"]->selectRequest($sQuery, explode(", ", ($oContact->getColumns() . ", fonction") ), null);
    $GLOBALS["oConnection"]->close();

    //get the count
    $nCount = count($ary_);
    //reinit the iterrator
    $nLine = 0;
    //cool
    $ary_Obj = array();
    //start the loop
    while($nLine < $nCount){

        //do it
        $oContact = new Contacts();
        $oContact->loadFromArray($ary_[$nLine], true);

        // //custom part ]:)
        if(HEIMDALL_QM_CONTACTS_SEGEMENT_Debug)
            file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Query@searchQuery.log", "The Array : \r\n " . print_r($ary_[$nLine], true) . "\r\n",  FILE_APPEND );

        if(HEIMDALL_QM_CONTACTS_SEGEMENT_Debug && $bContact_Infos)
            file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Query@searchQuery.log", "The Function : \r\n " . $ary_[$nLine]["fonction"] . "\r\n",  FILE_APPEND );

        $ary_Obj[$nLine] = $oContact->exportToArray();
        if($bContact_Infos)
            ($ary_Obj[$nLine])["sFonction"] = $ary_[$nLine]["fonction"];
        else
            ($ary_Obj[$nLine])["sFonction"] = "";

        if($bInfos){
            ($ary_Obj[$nLine])["sAdr1"] = $ary_[$nLine]["adr1"];
            ($ary_Obj[$nLine])["sAdr2"] = $ary_[$nLine]["adr2"];
            ($ary_Obj[$nLine])["sAdr3"] = $ary_[$nLine]["adr3"];
            ($ary_Obj[$nLine])["sCP"] = $ary_[$nLine]["cp"];
            ($ary_Obj[$nLine])["sVille"] = $ary_[$nLine]["ville"];
            ($ary_Obj[$nLine])["sCedex"] = $ary_[$nLine]["cedex"];
            ($ary_Obj[$nLine])["sTelephone1"] = $ary_[$nLine]["tel1"];
            ($ary_Obj[$nLine])["sCourriel1"] = $ary_[$nLine]["courriel1"];
            ($ary_Obj[$nLine])["sTelephone2"] = $ary_[$nLine]["tel2"];
            ($ary_Obj[$nLine])["sCourriel2"] = $ary_[$nLine]["courriel2"];
            ($ary_Obj[$nLine])["sSite"] = $ary_[$nLine]["site"];
        } 
        else{
            ($ary_Obj[$nLine])["sAdr1"] = "";
            ($ary_Obj[$nLine])["sAdr2"] = "";
            ($ary_Obj[$nLine])["sAdr3"] = "";
            ($ary_Obj[$nLine])["sCP"] = "";
            ($ary_Obj[$nLine])["sVille"] = "";
            ($ary_Obj[$nLine])["sCedex"] = "";
            ($ary_Obj[$nLine])["sTelephone1"] = "";
            ($ary_Obj[$nLine])["sCourriel1"] = "";
            ($ary_Obj[$nLine])["sTelephone2"] = "";
            ($ary_Obj[$nLine])["sCourriel2"] = "";
            ($ary_Obj[$nLine])["sSite"] = "";
        }
        
        //Next
        $nLine++;
    }

    // //debugging, the desperate way
    // if(HEIMDALL_QM_CONTACTS_SEGEMENT_Debug)
    //     file_put_contents(dirname(__FILE__) . "/../logs/queryManager_Query@searchQuery.log", "The Query : \r\n " . $sQuery . "\r\n",  FILE_APPEND );

    //push it to the view !!!
    echo json_encode($ary_Obj);

    //Happy End
    return True;
}

///[FUNCTION][queryCenter]Function to manage the call from the call of query
function queryCenter(){

    //our post 
    $Action = $_POST["Action"];
    //our argument
    $Arg = $_POST["Args"];

    //Action selector
    switch($Action){
        case "contacts_query":
            return searchQuery((array)json_decode($Arg));
        break;
    }

    //Is Star Wars Episode VII a good movie ?
    return false;
}

//call the light
queryCenter();

?>