//Module : None
//Created by : Ludo Lib JsPhp
//Generated on : 2016-07-06 08:20:49
//Filename : main.js
//Description : Main file of our main app

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

///[METHOD][main]Our reset function ]:)
function reset(){
	window.location.assign(window.location.href);
}

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

function main_Lib_Init(){
	//Entertain us !!!
	main_Loading();
	//load the lib
	Potours_loadScriptFiles(ary_sFileLib, main_App);
}

function main_Init(){

	oSliderLoader.stop();

	oWinLoader.dispose();

	eval("init();");
}

function main_App(){
	Potours_loadScriptFiles(["app/contacts.js", "app/produits.js"], main_Init);
}

///[METHOD][main]Our main function
function main(){
	//test of load lib
	Potours_init_lib(main_Lib_Init);
	//Potours_init_lib();
	
	// console.log("Nah");

	// Potours_loadScriptFiles(["app/contacts.js", "app/produits.js"]);

	//To your job
	//setTimeout(function(){ console.log("Nope");eval("init();"); }, 3000);
	// setTimeout(function(){ console.log("Nope");init(); }, 3000);
	
	//eval("init();");


	//init();
};