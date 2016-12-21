//Module : Stocks
//Created by : LUDO
//Generated on : 2016-12-20 09:14:32
//Filename : Stocks.js
//Description : Notre table pour gérer les tables entre la location et les publications

///[CLASS][Stocks]Notre table pour gérer les tables entre la location et les publications
///[AUTHOR]LUDO
function Stocks(){
	//Legacy 
	Items.call(this);
	//our new member data
	var StocksmemberSet = {	

		// ///[MEMBER][integer][nId_Stocks]Notre clef unique
		//nId_Stocks : 0 //inherited from => Contacts.Items.nId_Items,
		///[MEMBER][integer][nId_Locations]Le lieux du stock
		nId_Locations : 0,
		///[MEMBER][integer][nId_Publications]La publication
		nId_Publications : 0
	};
	//get the legacy
	legacy(this.members, StocksmemberSet, true);


	//Our super
	this.myStocks = {};
	//Our hack
	var oStocks = this;


	///[SECTION][GETTERS]#################################################

	///[METHOD][getId_Stocks]Method to get the Id_Stocks
	///[RETURNS]The Id_Stocks
	this.getId_Stocks = function(){
		//Return the getter in inheritage
		return oStocks.myItems.getId_Items();
	};
	//hack guy !!!
	this.myStocks.getId_Stocks = this.getId_Stocks;

	///[METHOD][getId_Locations]Method to get the Id_Locations
	///[RETURNS]The Id_Locations
	this.getId_Locations = function(){
		//Return the member
		return oStocks.members.nId_Locations;
	};
	//hack guy !!!
	this.myStocks.getId_Locations = this.getId_Locations;

	///[METHOD][getId_Publications]Method to get the Id_Publications
	///[RETURNS]The Id_Publications
	this.getId_Publications = function(){
		//Return the member
		return oStocks.members.nId_Publications;
	};
	//hack guy !!!
	this.myStocks.getId_Publications = this.getId_Publications;



	///[SECTION][SETTERS]#################################################

	///[METHOD][setId_Stocks]Method to set the Id_Stocks
	///[PARAMETER][number][nValue]Our new value for Id_Stocks
	///[RETURNS]Boolean true if done 
	this.setId_Stocks = function(nValue){
		//Return the member
		return oStocks.myItems.setnId_Items(nValue);
	};
	//hack guy !!!
	this.myStocks.setId_Stocks = this.setId_Stocks;

	///[METHOD][setId_Locations]Method to set the Id_Locations
	///[PARAMETER][number][nValue]Our new value for Id_Locations
	///[RETURNS]Boolean true if done 
	this.setId_Locations = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oStocks.members.nId_Locations = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myStocks.setId_Locations = this.setId_Locations;

	///[METHOD][setId_Publications]Method to set the Id_Publications
	///[PARAMETER][number][nValue]Our new value for Id_Publications
	///[RETURNS]Boolean true if done 
	this.setId_Publications = function(nValue){
		//security on null guy !!!
		if(nValue == null)
			return false;
		//security on type guy !!!
		if(typeof nValue === 'number'){
			oStocks.members.nId_Publications = Math.floor(nValue);
			//Happy end
			return true;
		}
		//Don't fool me next Time !!!
		return false;
	};
	//hack guy !!!
	this.myStocks.setId_Publications = this.setId_Publications;



	///[SECTION][WORKSHOP]################################################
	///[REMARK]this the section we custumize

	///[METHOD][loadFromArray]Method to set the object fields from a json
	///[PARAMETER][string][ary_]Our array with members
	///[RETURNS]boolean, true if done
	this.loadFromArray = function(ary_){
		//Return the job !
		return legacy(oStocks.members, ary_, true);
	};
	//hack guy !!!
	this.myStocks.loadFromArray = this.loadFromArray;


	///[METHOD][loadFromJson]Method to set the object fields from a json
	///[PARAMETER][string][sJson]Our string with Json encoding
	///[RETURNS]boolean, true if done
	this.loadFromJson = function(sJson){
		//Our Json object
		var jsonSet = JSON.parse(sJson);
		//Return the job !
		return legacy(oStocks.members, jsonSet, true);
	};
	//hack guy !!!
	this.myStocks.loadFromJson = this.loadFromJson;


	///[METHOD][loadFromConnection]Method to load from a connection
	///[PARAMETER][string][session]Our session
	///[PARAMETER][string][url]Our url
	///[RETURNS]boolean, true if done
	this.loadFromConnection = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oStocks.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Stocks_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=GET"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myStocks.loadFromConnection = this.loadFromConnection;


	///[METHOD][exportToJson]Method to export as a json string the element of our object
	///[RETURNS]string, our json ready to go
	this.exportToJson = function(){
		//Return the job !
		return JSON.stringify(oStocks.members);
	};
	//hack guy !!!
	this.myStocks.exportToJson = this.exportToJson;


	///[METHOD][deleteMyself]Method to delete the record in the DTB
	///[PARAMETER][string][session]Our session
	///[PARAMETER][string][url]Our url
	///[RETURNS]boolean, true if done
	this.deleteMyself = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				//Ah !
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Stocks_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=DELETE"); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myStocks.deleteMyself = this.deleteMyself;


	///[METHOD][save]Method to save with a connection
	///[PARAMETER][string][session]Our session
	///[PARAMETER][string][url]Our url
	///[RETURNS]boolean, true if done
	this.save = function(session, url){
		//Our request object
		var oReq = new XMLHttpRequest();
		//Define the function
		oReq.onreadystatechange = function(){
			//if everything is alright
			if(oReq.readyState == 4 && oReq.status == 200){
				oStocks.loadFromJson(oReq.responseText);
			}
		};
		//prepare the query*********************
		//check the open
		oReq.open("POST", url + "/php/Stocks_manager.php", true);
		//set the request header
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		oReq.send("Id=0&Session=" + session + "&Action=SAVE&Data=" + oStocks.exportToJson()); 
		//Return the job !
		return true;
	};
	//hack guy !!!
	this.myStocks.save = this.save;



};