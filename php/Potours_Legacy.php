<?php 

function findInPotoursObjArray($ary_, $sMember, $sValueSearched){
    //our count 
    $nCount = 0;
    //our iterrator
    $nLine = 0;

    if(is_array($ary_)){
        //init
        $nCount = count($ary_);
        //loop
        while($nLine < $nCount){
            //if is an array 
            if(is_array($ary_[$nLine])){
                //compare
                if(array_key_exists($sMember, $ary_[$nLine])){
                    if($ary_[$nLine][$sMember] == $sValueSearched)
                        return $nLine;
                }
            }  
            //next line 
            $nLine++;
        }
    }
    //Nope
    return -1;
}

function findLstInPotoursObjArray($ary_, $sMember, $sValueSearched){
    //our count 
    $nCount = 0;
    //our iterrator
    $nLine = 0;
    //array 
    $ary_o = array();

    if(is_array($ary_)){
        //init
        $nCount = count($ary_);
        //loop
        while($nLine < $nCount){
            //if is an array 
            if(is_array($ary_[$nLine])){
                //compare
                if(array_key_exists($sMember, $ary_[$nLine])){
                    if($ary_[$nLine][$sMember] == $sValueSearched)
                        array_push($ary_o, $nLine);
                }  
            }                
            //next line 
            $nLine++;
        }
    }
    //Nope
    return $ary_o;
}

function GetLstInPotoursObjArray($ary_, $sMember, $sValueSearched){
    //our count 
    $nCount = 0;
    //our iterrator
    $nLine = 0;
    //array 
    $ary_o = array();

    if(is_array($ary_)){
        //init
        $nCount = count($ary_);
        //loop
        while($nLine < $nCount){
            //if is an array 
            if(is_array($ary_[$nLine])){
                //compare
                if(array_key_exists($sMember, $ary_[$nLine])){
                    if($ary_[$nLine][$sMember] == $sValueSearched)
                        array_push($ary_o, $ary_[$nLine]);
                }  
            }                
            //next line 
            $nLine++;
        }
    }
    //Nope
    return $ary_o;
}

?>