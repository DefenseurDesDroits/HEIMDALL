<?PHP 

Const POTOURS_DATA_COLUMN_NOT_FOUND = -1;

class Potours_Data{

    //our header list 
    protected $ary_Header = [];
    //our Data
    protected $ary_Data = [];

    //function to get the list of headers :
    public function getHeaders(){
        return $this->ary_Header;
    }

    public function getColumnCount(){
        return count($this->ary_Header);
    }

    public function getLineCount(){
        return count($this->ary_Data);
    }

    public function getColumnIndex($sColumnName){
        //our count
        $nCount = 0;
        //our iterrator
        $nLine = 0;

        //get the count
        $nCount = count($this->$ary_Header);

        //loop !
        while($nLine < $nCount){
            //compare
            if($this->$ary_Header[$nLine] == $sColumnName)
                return $nLine;
            //Next
            $nLine++;
        }

        //bad gateaway
        return POTOURS_DATA_COLUMN_NOT_FOUND;
    }

    public function getCell($nColumn, $nLine, $sDefault = ""){

        if($nColumn < 0 || $nLine < 0)
            return $sDefault;

        if($nColumn >= count($this->ary_Header) || $nLine >= count($this->ary_Data))
            return $sDefault;

        if(array_key_exists( $nLine, $this->ary_Data )){
            if(array_key_exists($nColumn, $this->ary_Data[$nLine])){
                return $this->ary_Data[$nLine][$nColumn];
            }
        }

        //default stuff
        return $sDefault;
    }

    public function getCellFromName($sColumnName, $nLine, $sDefault = ""){
        return $this->getCell($this->getColumnIndex($sColumnName), $nLine, $sDefault = "");
    }

    public function loadCSV($sFilename, $sDelimitor, $bHeader = false){

        //our handler
        $handler = fopen($sFilename, 'r');
        //our coulumn count 
        $nCount = 0;
        //our column iterrator
        $nCell = 0;
        //our line counter
        $nLine = 0;

        $this->ary_Header = [];
        $this->ary_Data = [];

        if($handler != null){

            while (($data = fgetcsv($handler, 1000, $sDelimitor)) !== FALSE) {
                //get the count
                $nCount = count($data);
                //reset the celle count 
                $nCell = 0;
                
                $this->ary_Data[$nLine] = [];

                //do the loop
                while($nCell < $nCount){

                    $data[$nCell] = str_replace("\r", "", $data[$nCell]);
                    $data[$nCell] = str_replace("\n", "", $data[$nCell]);

                    //first line for header
                    if($nLine == 0){
                        if($bHeader)
                            $this->ary_Header[$nCell] = $data[$nCell];
                        else
                            $this->ary_Header[$nCell] = $nCell;
                    }

                    //note the data 
                    $this->ary_Data[$nLine][$nCell] = $data[$nCell];

                    //Next
                    $nCell++;
                }

                if($nLine > 0){
                    if($bHeader){
                        //to erase the header of Data
                        $this->ary_Data[$nLine - 1] = $this->ary_Data[$nLine];
                    }     
                }

                //our next line
                $nLine++;
            }

            //to erase the header of Data
            if($bHeader)
                array_pop($this->ary_Data);

            //don't be dirty !!!
            fclose($handler);

            //happy end
            return true;
        }

        return false;
    }

}

?>