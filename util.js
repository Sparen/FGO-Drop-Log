"use strict";

//Constants for the event items for use when multiple items have the same shorthand
var ID_HONNOUJI_PT = 0;
var ID_T_NASU = 1;
var ID_YT_CHAWAN = 2;
var ID_HIRA_GUMO = 3;

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