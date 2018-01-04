"use strict";

//Constants for the event items for use when multiple items have the same shorthand
var ID_HONNOUJI_PT = 0;
var ID_T_NASU = 1;
var ID_YT_CHAWAN = 2;
var ID_HIRA_GUMO = 3;

var ID_MINI_RIBBON = 0;
var ID_SILVER_BELL = 1;
var ID_GOLD_STAR = 2;
var ID_M_SOCK = 3;

var ID_ALTRIUM = 0;
var ID_TRANSISTOR = 1;
var ID_AP_LENS = 2;
var ID_VACUUM_TUBE = 3;

function SCsaberwars2018() {
    //Get the string located at name/id saberwars2018-sc-input
    var input = document.getElementById("saberwars2018-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "A") {
            typeConst = ID_ALTRIUM;
        } else if (typeID == "T") {
            typeConst = ID_TRANSISTOR;
        } else if (typeID == "L") {
            typeConst = ID_AP_LENS;
        } else if (typeID == "V") {
            typeConst = ID_VACUUM_TUBE;
        } else {
            alert("SCsaberwars2018: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_ALTRIUM) {
                itemblock += 'ALTRIUM';
            } else if (typeConst == ID_TRANSISTOR) {
                itemblock += 'TRANSISTOR';
            } else if (typeConst == ID_AP_LENS) {
                itemblock += 'AP_LENS';
            } else if (typeConst == ID_VACUUM_TUBE) {
                itemblock += 'VACUUM_TUBE';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("saberwars2018-sc-output").innerHTML = output;
}

function SCchristmas2017() {
    //Get the string located at name/id christmas2017-sc-input
    var input = document.getElementById("christmas2017-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "R") {
            typeConst = ID_MINI_RIBBON;
        } else if (typeID == "B") {
            typeConst = ID_SILVER_BELL;
        } else if (typeID == "S") {
            typeConst = ID_GOLD_STAR;
        } else if (typeID == "X") {
            typeConst = ID_M_SOCK;
        } else {
            alert("SCchristmas2017: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_MINI_RIBBON) {
                itemblock += 'MINI_RIBBON';
            } else if (typeConst == ID_SILVER_BELL) {
                itemblock += 'SILVER_BELL';
            } else if (typeConst == ID_GOLD_STAR) {
                itemblock += 'GOLD_STAR';
            } else if (typeConst == ID_M_SOCK) {
                itemblock += 'M_SOCK';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("christmas2017-sc-output").innerHTML = output;
}

function SCgudaguda() {
    //Get the string located at name/id gudaguda-sc-input
    var input = document.getElementById("gudaguda-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "H" && stacksize < 100) {
            typeConst = ID_HIRA_GUMO;
        } else if (typeID == "H" && stacksize >= 100) {
            typeConst = ID_HONNOUJI_PT;
        } else if (typeID == "N") {
            typeConst = ID_T_NASU;
        } else if (typeID == "C") {
            typeConst = ID_YT_CHAWAN;
        } else {
            alert("SCgudaguda: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_HONNOUJI_PT) {
                itemblock += 'HONNOJI_PT';
            } else if (typeConst == ID_HIRA_GUMO) {
                itemblock += 'HIRA_GUMO';
            } else if (typeConst == ID_T_NASU) {
                itemblock += 'T_NASU';
            } else if (typeConst == ID_YT_CHAWAN) {
                itemblock += 'YT_CHAWAN';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("gudaguda-sc-output").innerHTML = output;
}