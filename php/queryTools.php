<?php //yeah

//put your include
include_once("CONTACTS_Contacts.php");
include_once("CONTACTS_Organisations.php");
include_once("CONTACTS_Users.php");
include_once("CONTACTS_Groups.php");
include_once("Groups_manager_2.php");

function createCondition($ary_Column, $sOperator, $sStr, $ary_CorrespondanceSet = null){

    //our code 
    $sCode = "";

    //our count
    $nCount = 0;
    //our iterrator
    $nLine = 0;

    //no correspondance, easy way
    if($ary_CorrespondanceSet == null){
        $nCount = count($ary_Column);
        while ($nLine < $nCount) {
            if($sCode != "")
                $sCode .= " OR ";
            $sCode .= $ary_Column[$nLine] . " " . $sOperator . " " . Quotes($sStr);
            //next
            $nLine++;
        }
    }
    else{
        $nCount = count($ary_Column);
        while ($nLine < $nCount) {
            //check the existance of the key
            if(array_key_exists($ary_Column[$nLine], $ary_CorrespondanceSet)){
                if($sCode != "")
                    $sCode .= " OR ";
                $sCode .= $ary_CorrespondanceSet[$ary_Column[$nLine]] . " " . $sOperator . " " . Quotes($sStr);
            }
            //next
            $nLine++;
        }
    }

    return "(" . $sCode . ")";
}

function createRightsCondition($userId){

    //our query
    $sQuery = "";

    //groups of the users
    $ary_Groups = array();

    //our group odj 
    $oGrp = new Groups();

    //count
    $nCount = 0;
    //iterator 
    $nLine = 0;

    //get the array !
    $ary_Groups = groupsOfUser($userId);

    //Start !
    $sQuery .= "AND (" . "\r\n";
    //it's open !!!'
    $sQuery .= "\t" . "id_accreditations_item = 1 " . "\r\n";
    //Creator part
    $sQuery .= "\t" . "OR xxx.Items.id_creator = " . Quotes($userId) . "\r\n";
    //User part 
    $sQuery .= "\t" . "OR xxx.Items.id_users_json LIKE " . Quotes("%\"uid\":\"" . $userId . "\"%") . "\r\n";

    //groups part
    //get the count
    $nCount = count($ary_Groups);
    //the loop
    while($nLine < $nCount){
        //reset the obj
        $oGrp = new Groups();
        //get the obj
        $oGrp->loadFromArray($ary_Groups[$nLine]);
        //write the query !!!
        $sQuery .= "\t" . "OR xxx.Items.id_groups_json LIKE " . Quotes("%\"gid\":\"" . $oGrp->getId_Items() . "\"%") . "\r\n";
        //Next 
        $nLine++;
    }

    $sQuery .= ")";

    return $sQuery;
}

?>