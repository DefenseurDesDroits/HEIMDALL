//USER WARNING : IF YOUR ARE NOT A JAVASCRIPT OR PERL DEVElOPPER DON'T TRY
// TO CHANGE ANYTHING !!!
//
//DUBLIN CORE METADATA§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
//Project : JBibi
//Authors : Ludowic EMMANUEL | 
//Corp.   : XXXXXXXXXXX
//Created : 2014-12-10 14:04:00
//Version : 1.0
//UpDated : XXXX-XX-XX XX:XX:XX
//FileName: JSlider.js
//###########################################################################
//                                 Slider !
//---------------------------------------------------------------------------
//THIS FILE :
//          This file contains the basics elements of the Bibi library in the
//           JavaScript Language : The Bibi Slider or JSlider is a basical
//          photo slider.
//
//CONTAINS  :
//          This JavaScript file contains, many items : 
//              => JSlider : the standard Slider
//
//              => JBibi : The global object of the the lib !
//
//###########################################################################

//***************************************************************************
//                                 JSlider
//---------------------------------------------------------------------------
//AUTHORS    : Ludowic EMMANUEL |
//VERSION    : 0.1
//CREATED    : 2014-12-10 14:04:00 AS STD_Bidget in library version under 1.0
//UPDATED    : XXXX-XX-XX XX:XX:XX
//
//THIS FUNCT°:
//            This function creates a standard Slider
//
//YES WE CAN :
//            => Create a JSlider in a existing canvas
//
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//PARAMETERS :
//            => canvas : id of the canvas to plot our slider
//            => reserve : reserve of pictures
//
//METHODES   :
//            => setTransitionSpeed(speed) //function to set the transition speed
//              in percent
//            => setTransitionClock(time) //function to set the transition clock
//            => setAutoDuration(autoTime) //function to set the auto-duration
//            => setMode(M) //function to set mode
//            => init(imgsVector) //function to init the imgs for the sliders
//            => run() //function to run the slider
//            => auto() //function to auto slide :3
//            => stop() //to stop with brutality
//
//***************************************************************************

//constantes****************************************************
//about transition times :p
var CSTT_SLIDER_TRANSITION_SPEED = 20;//speed in percent
var CSTT_SLIDER_TRANSITION_CLOCK = 50;//in millisecondes
var CSTT_SLIDER_TRANSITION_TIME = 5000;//in millisecondes
//About transition style :D
var CSTT_SLIDER_TRANSITION_BRUTAL = 0;
var CSTT_SLIDER_TRANSITION_LEFT = 1;
var CSTT_SLIDER_TRANSITION_RIGHT = 2;
/*var CSTT_SLIDER_TRANSITION_UP = 3;
var CSTT_SLIDER_TRANSITION_DOWN = 4;
var CSTT_SLIDER_TRANSITION_WHAREHOUSE_GATE = 5;
*/
var CSTT_SLIDER_TRANSITION_DEFAULT = CSTT_SLIDER_TRANSITION_BRUTAL;

//slider object
function JSlider(canvas, reserve){
    
    //take the canvas in memory :3
    this.cvs = document.getElementById(canvas);
    //take the 2d graphique context :3
    this.ctx = this.cvs.getContext('2d');
    
    //take th div to be hidden
    this.rsv = document.getElementById(reserve);
    
    //list
    this.imgs = [];
    
    //position in slider
    this.position = 0;
    
    //our timer for globales transition :3
    this.timer = 0;
    
    //our timer to manage a slide
    this.transitionTimer = 0;
    
    //progress in percent
    this.transition = 0;
    
    //speed in percent
	this.transitionSpeed = CSTT_SLIDER_TRANSITION_SPEED;
    
    //function to set the transition speed
    this.setTransitionSpeed = function(speed){
        this.transitionSpeed = speed;
    }
    
    //in millisecondes
	this.transitionClock = CSTT_SLIDER_TRANSITION_CLOCK;
    
    //function to set the transition clock
    this.setTransitionClock = function(time){
        this.transitionClock = time;
    }
    
	//in millisecondes
	this.autoDuration = CSTT_SLIDER_TRANSITION_TIME;
    
    //function to set the auto-duration
    this.setAutoDuration = function(autoTime){
        this.autoDuration = autoTime;
    }
    
    //transition mode
    this.mode = CSTT_SLIDER_TRANSITION_DEFAULT;
    
    //function to set mode
    this.setMode = function(M){
        switch(M){
            case 0 : //CSTT_SLIDER_TRANSITION_BRUTAL
            case 1 : //CSTT_SLIDER_TRANSITION_LEFT
            case 2 : //CSTT_SLIDER_TRANSITION_RIGHT
                this.mode = M;
                break;
            default :
                this.mode = CSTT_SLIDER_TRANSITION_DEFAULT;
                break;
        };
    }
    
    //is control enable ?
    this.control = false;
    
    //trick :p
    var me = this;
    
    //function to init the imgs for the slider
    this.init = function(imgsVector){
        
        //list of vector :p
        this.imgs = imgsVector;
        
        //set visibility
        this.rsv.style.visibility = "hidden";
        
        //erase content
        this.rsv.innerHTML = "";
        
        //init 
        for(var i = 0; i < this.imgs.length; i++){
            this.rsv.innerHTML += '<img id="'+ this.imgs[i]+'" src="' + this.imgs[i] +'" /><br/>';;
        }
        
    }
    
    //set elements :p
    //for later :p
    
    //function to run the slider
    this.run = function(){
        
        //draw the first :p
        if(this.imgs.length > 0){
            var img = document.getElementById(this.imgs[0]);
            //alert("ooh");
            //Second the new !
            //this.ctx.drawImage(img, 0, 0);
			this.ctx.drawImage(img, 0, 0, me.cvs.width, me.cvs.height);
        }
        
        this.timer = setInterval( this.auto, this.autoDuration);
    }
    
    //function to auto slide :3
    this.auto = function(){
        switch(me.mode){
            case 0 : //CSTT_SLIDER_TRANSITION_BRUTAL
                me.BRUTAL();
                break;
            case 1 : //CSTT_SLIDER_TRANSITION_LEFT
                me.LEFT();
                break;
            case 2 ://CSTT_SLIDER_TRANSITION_RIGHT
                me.RIGHT();
                break;
        };
    }
    
    //function to brutal transition
    this.BRUTAL = function(){
        //la précédente transition est elle faite ?
        if(me.transitionTimer == 0)
        {
            //on règle
            me.transition = 0;
            //
            me.position++;
            //
            me.transitionTimer = setInterval(me.slideBRUTAL, me.transitionClock);
        }
    }
    
    this.slideBRUTAL = function(){
        
        //to stop itself in case :p
        if( me.transition > 99)
        {
            var handle = me.transitionTimer;
            me.transitionTimer = 0;
            clearInterval(handle);
            return false;
        }
        
        //advance !
        me.transition += 100;
        
        //get the position
        var i = me.position % me.imgs.length;
        if(i < 0)
            i += me.imgs.length;
        var img = document.getElementById(me.imgs[i]);
        
        //Second the new !
        //me.ctx.drawImage(img, 0, 0);
		me.ctx.drawImage(img, 0, 0, me.cvs.width, me.cvs.height);
        
        return true;
    }
    
    this.LEFT = function(){
        //the previous transition is done ?
        if(me.transitionTimer == 0)
        {
            //reboot
            me.transition = 0;
            //increase
            me.position++;
            //set the timer
            me.transitionTimer = setInterval(me.slideLEFT, me.transitionClock);
        }
    }
    
    this.slideLEFT = function(){
        
        //to stop itself in case :p
        if( me.transition > 99)
        {
            var handle = me.transitionTimer;
            me.transitionTimer = 0;
            clearInterval(handle);
            return false;
        }
        
        //advance !
        me.transition += me.transitionSpeed;
        
        var i = me.position % me.imgs.length;
        //if i < 
        if(i < 0)
            i += me.imgs.length;
        //get next picture
        var img = document.getElementById(me.imgs[i]);
        
        //calculate
        var X0 = me.cvs.width * me.transitionSpeed / 100;
        var X1 = me.cvs.width - me.cvs.width * me.transition  / 100;
        
        //first we draw old 
        me.ctx.putImageData(me.ctx.getImageData(X0, 0, me.cvs.width - X0, me.cvs.height), 0, 0);
        
        //Second the new !
        //me.ctx.drawImage(img, X1, 0);
		me.ctx.drawImage(img, X1, 0, me.cvs.width, me.cvs.height);
        
        return true;
        
    }
    
    this.RIGHT = function(){
        
        //the previous transition is done ?
        if(me.transitionTimer == 0)
        {
            //reboot
            me.transition = 0;
            //decrease
            me.position--;
            //set the timer
            me.transitionTimer = setInterval(me.slideRIGHT, me.transitionClock);
        }
        
    }
    
    this.slideRIGHT = function(){
        
        //to stop itself in case :p
        if( me.transition > 99)
        {
            var handle = me.transitionTimer;
            me.transitionTimer = 0;
            clearInterval(handle);
            return false;
        }
        
        //advance !
        me.transition += me.transitionSpeed;
        
        var i = me.position % me.imgs.length;
        //if i < 
        if(i < 0)
            i += me.imgs.length;
        //get next picture
        var img = document.getElementById(me.imgs[i]);
        
        var X0 = me.cvs.width * me.transitionSpeed / 100;
        var X1 = me.cvs.width * me.transition  / 100;
        
        //first we draw old 
        me.ctx.putImageData(me.ctx.getImageData(0, 0, me.cvs.width - X0, me.cvs.height), X0, 0);
        
        //Second the new !
        //me.ctx.drawImage(img, me.cvs.width - X1, 0, X1, me.cvs.height, 0, 0, X1, me.cvs.height);
		me.ctx.drawImage(img, me.cvs.width - X1, 0, X1, me.cvs.height, 0, 0, me.cvs.width, me.cvs.height);
        
        return true;
        
    }
    
    //to stop with brutality
    this.stop = function(){
        clearInterval(this.timer);
        this.timer = 0;
        var handle = this.transitionTimer;
		this.transitionTimer = 0;
		clearInterval(handle);
    }
    
}

//Function to stop and clear a list of slider ]:)
function JSliderCollectionSTopAndClear(lst_oSliders){
	
	//loop
	while(lst_oSliders.length > 0){
		
		//stop it if it's not already done !!!
		if(lst_oSliders[0] != 0){
			lst_oSliders[0].stop();
		}
		
		//remove it from the list !!!
		lst_oSliders.splice(0, 1);
	}
	
	//result !!!
	return true;
}