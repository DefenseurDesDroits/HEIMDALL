/*
* File to init the products
* Ludowic "MagnusMoi" EMMANUEL 2016
*
*/

/// <reference path="contacts.js" />

///[Class][Heimdall]Our Heimdall global object
var Heimdall = {
    flags :  {
        waitData : true,
        debug : true
    },
    members : {
        products : {}
    },
    methods : {}
};

///[FUNCTION][init]Function to init all the products
function init(){

    //init the contact
    init_contacts();

}