<?PHP

// data: {"from": "paul", "msg": "It's rainy over here today", "location": "Paris"}

// data: {"from": "ella", "msg": "I am now a grand-mother", "location": "Austin"}

// event: direct
// data: {"from": "yann", "msg": "You should check your inbox", "location": "Boston"}

// data: {"from": "pietra", "msg": "Any suggestion for a restaurant in Warsaw?", "location": "Krakow"}

// event: checkin
// data: {"from": "Peter", "place": "StarCoffee", "location": "Berlin"}

// data: {"from": "judith", "msg": "Walked 52 miles in 24 hours!", "location": "Edinburgh"}

// data: {"from": "Ying", "msg": "dreaming of french cheese and red wine, right now.", "location": "Beijing"}

// event: forward
// data: {"from": "roland", "through": "Sasha", "msg": "watch this! http://youtu.be/LybAHotsvOg", "location": "Mexico"}

// data: {"from": "Sandrine", "msg": "dressed in blue today", "location":"Brussel"}

// data: {"from": "anthony", "msg": "what could I do today?", "location": "Rio"}

// function onload() {
// 	var timeline = document.getElementById( "timeline" ), 
// 		lastMsg = document.getElementById( "lastMsg" ),
// 		// Create the EventSource
// 		evtSrc = new EventSource( "sse.php" ),
// 		message = document.createElement( "div" );
// 	message.classList.add( "msg" );

// 	// Listen for messages/events on the EventSource
// 	evtSrc.onmessage = function ( e ) {
// 		addMessage( "status", JSON.parse(e.data) );
// 	}
// 	evtSrc.addEventListener("checkin", function( e ) {
// 		addMessage( "checkin", JSON.parse(e.data) );
// 	}, false);
// 	evtSrc.addEventListener("forward", function( e ) {
// 		addMessage( "forward", JSON.parse(e.data) );
// 	}, false);
// 	evtSrc.addEventListener("direct", function( e ) {
// 		addMessage( "direct", JSON.parse(e.data) );
// 	}, false);

// 	// Functions to display the messages
// 	function addMessage( type, data ) {
// 		var msg = message.cloneNode( false ),
// 			content;
// 		msg.classList.add( type );
// 		content = "<b>☺ " + userStr( data.from ) + "</b>";
// 		if ( type === "forward" ) {
// 			content += " » by " + userStr( data.through );
// 		}
// 		content += "<br/>" + ( data.msg || "<em>currently at</em> " + data.place ) + "<br/>";
// 		content += "<i>¤ " + data.location + "</i>";
// 		msg.innerHTML = content;
// 		lastMsg = timeline.insertBefore( msg, lastMsg );
// 	}

// 	function userStr( name ) {
// 		return "<a href='#"+ name +"'>"+ name +"</a>";
// 	}
// }

// // Send appropriate mime type
// header("Content-Type: text/event-stream\n\n");
// // Read sample messages
// $filename = "timelineEvents.txt";
// $handle = fopen($filename, "r");
// $contents = fread($handle, filesize($filename));
// fclose($handle);
// // Split the messages into an array
// $messages = preg_split( "/\n\n/", $contents );
// // Send one message every 2 to 7 seconds
// foreach ( $messages as $message ) {
// 	echo $message;
// 	echo "\n\n";
// 	ob_flush();
// 	flush();
// 	sleep( rand(2, 7) );
// }

//CONST HEIMDALL_QUERY_Create_Group = false;
CONST HEIMDALL_QUERY_Create_Group = true;

function Export_CSV(){
    // Send appropriate mime type
    header("Content-Type: text/event-stream\n\n");
    header('Cache-Control: no-cache');

    //debugging, the desperate way :D
    if(HEIMDALL_LDAP_Debug){
        file_put_contents(dirname(__FILE__) . "/../logs/CONTACTS_Query_Export@Export_CSV.log", "[CALL] " ."\r\n");
        file_put_contents(dirname(__FILE__) . "/../logs/CONTACTS_Query_Export@Export_CSV.log", "Filename : " . $_GET['Filename'] . "\r\n",  FILE_APPEND );
        file_put_contents(dirname(__FILE__) . "/../logs/CONTACTS_Query_Export@Export_CSV.log", "Data : " . $_GET['Data'] . "\r\n",  FILE_APPEND );
    }
        
    //file_put_contents(dirname(__FILE__) . "/../logs/CONACTS_Query_Export@Export_CSV.log", print_r($oInfos, TRUE) . "\r\n",  FILE_APPEND );

    //create the filename
    $sFilename = "";
    //our aray of array
    $ary_Ary = [];
    //our array keys
    $ary_Keys = [];
    //
    $handle = 0;

    //our count 
    $nCount = 0;
    //our iterator 
    $nLine = 0;
    //our count row
    $nCountRow = 0;
    //our iterator row
    $nLineRow = 0;

    //our

    //our code
    $sCode = "";

    //return false
    //return false;

    //get the Filename
    $sFilename = "../export/" . $_GET['Filename'];

    //get the count
    $handle = fopen($sFilename, "w");
    //get the count
    $nCount = count($ary_Ary);
    //start the loop
    while($nLine < $nCount){
        //write the line
        foreach( $ary_Ary[$nLine] as $ary_){
            //get the keys
            $ary_Keys = array_keys($ary_);
            //get the count
            $nCountRow = count($ary_Keys);
            
            //if the line is the first, write the column
            if($nLine == 0){
                //our line reset
                $nLineRow = 0;
                //for the first element
                if($nLineRow < $nCountRow){
                    //add the column
                    $sCode += $ary_Keys[$nLineRow];
                    //next !
                    $nLineRow++;
                }
                //loop
                while($nLineRow < $nCountRow){
                    //add the column
                    $sCode += ";" + $ary_Keys[$nLineRow];
                    //next !
                    $nLineRow++;
                }
                //the line marker!!!
                $sCode += "\r\n";
                //write it !!!
                fwrite($handle, $sCode);
            }
            
            //our line reset
            $nLineRow = 0;
            $sCode = "";
            //for the first element
            if($nLineRow < $nCountRow){
                //add the column
                $sCode += $ary_[$ary_Keys[$nLineRow]];
                //next !
                $nLineRow++;
            }
            //loop
            while($nLineRow < $nCountRow){
                //add the column
                $sCode += ";" + $ary_[$ary_Keys[$nLineRow]];
                //next !
                $nLineRow++;
            }
            //the line marker!!!
            $sCode += "\r\n";
            //write it !!!
            fwrite($handle, $sCode);
            //flush
            fflush($handle);
        }

        //next
        $nLine++;
    }

    //Close
    fclose($handle);

    if(HEIMDALL_LDAP_Debug){
        sleep(5);
        file_put_contents(dirname(__FILE__) . "/../logs/CONTACTS_Query_Export@Export_CSV.log", "[Disconnect Test] " . "\r\n",  FILE_APPEND );
        sleep(5);
        file_put_contents(dirname(__FILE__) . "/../logs/CONTACTS_Query_Export@Export_CSV.log", "[Disconnect Test SUCCEED] " . "\r\n",  FILE_APPEND );
    }

    //Happy End !!!
    return true;
}

Export_CSV();

?>