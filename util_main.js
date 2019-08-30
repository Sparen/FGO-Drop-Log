"use strict";

// This library contains code to run a general purpose version of the shorthand converter.
// This library was created on August 29, 2019 for Nerofest 2019. 
// All future shorthand converters should utilize this library to avoid violating DRY and to simplify the work required.

/* The definition array contains the following objects:
 * ID (single letter)
 * itemID (name used in master list)
 */

function getObjectFromID(defobj, targetID) {
	for (var i = 0; i < defobj.length; i += 1) {
		if (defobj[i].ID == targetID) {
			return defobj[i];
		}
	}
	return null;
}

function SCmain(target, defobj) {
    //Get the string located at name/id <target>-sc-input
    var input = document.getElementById("" + target + "-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeObj = getObjectFromID(defobj, typeID);
        if (typeObj == null) {
            alert("SC" + target + ": Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "' + typeObj.itemID + '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("" + target + "-sc-output").innerHTML = output;
}
