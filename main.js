//Module : None
//Created by : Ludo Lib JsPhp
//Generated on : 2016-07-06 08:20:49
//Filename : main.js
//Description : Main file of our main app

const MAIN_VERSION = "0.0.2";

var ary_sFileLib = [
	/*CONTACT LIB !!! */
	"lib/CONTACTS_Accreditations.js",
	"lib/CONTACTS_Item_Types.js",
	"lib/CONTACTS_Items.js",
	"lib/CONTACTS_Noeuds.js",
	"lib/CONTACTS_Notes.js",
	"lib/CONTACTS_Contact_Types.js",
	"lib/CONTACTS_Titres.js",
	"lib/CONTACTS_Civilites.js",
	"lib/CONTACTS_Contacts.js",
	"lib/CONTACTS_Langues.js",
	"lib/CONTACTS_Pays.js",
	"lib/CONTACTS_Contact_Infos.js",
	"lib/CONTACTS_Infos.js",
	"lib/CONTACTS_Organisation_Types.js",
	"lib/CONTACTS_Organisations.js",
	"lib/CONTACTS_Users.js",
	"lib/CONTACTS_Notifications.js",
	"lib/CONTACTS_Groups.js"
];

var oWinLoader = {};
var oSliderLoader = {};
var ary_Waiting = [
	"img/loading/Rot_01.png",
	"img/loading/Rot_02.png",
	"img/loading/Rot_03.png",
	"img/loading/Rot_04.png",
	"img/loading/Rot_05.png",
	"img/loading/Rot_06.png",
	"img/loading/Rot_07.png",
	"img/loading/Rot_08.png"
];

///[METHOD][reset]Our reset function ]:)
function reset(){
	window.location.assign(window.location.href);
}

///[METHOD][main_Loading]Our function to create a loadind overview until waiting the end of loading
function main_Loading(){

	//create the win
	oWinLoader = new  Overview("WIN_Loading", 500, 500, "#3498DB", 0.8);

	//get the element
	var oElement = document.getElementById("WIN_Loading");

	oElement.innerHTML = "<canvas id=\"CVS_Loading\" width=\"500\" height=\"500\">Votre navigateur ne supporte pas le Canvas</canvas>";
	oElement.innerHTML += "<div id=\"CVS_Loading_Res\"></div>";

	oSliderLoader = new JSlider("CVS_Loading", "CVS_Loading_Res");

	oSliderLoader.init(ary_Waiting);
	oSliderLoader.setAutoDuration(20);
	oSliderLoader.run();

}

///[METHOD][main_Init]Our function to start the app
function main_Init(){
	//stop beacuase all the lib are loaded
	oSliderLoader.stop();
	//close and distroy this window !!!
	oWinLoader.dispose();

	//init dude !!!
	init_Produits();
}

///[METHOD][main_App]Our function to load the products
function main_App(){
	Potours_loadScriptFiles(["app/contacts.js", "app/produits.js"], main_Init, MAIN_VERSION);
}

///[METHOD][main_Lib_Init]Our function to load the lib js files
function main_Lib_Init(){
	//Entertain us !!!
	main_Loading();
	//load the lib !!!
	Potours_loadScriptFiles(ary_sFileLib, main_App);
}

///[METHOD][main]Our main function
function main(){
	//test of load lib
	Potours_init_lib(main_Lib_Init);
};