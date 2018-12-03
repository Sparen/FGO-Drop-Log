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

var ID_VITRUVIAN_MAN = 0;
var ID_SELF_PORTRAIT = 1;
var ID_MONA_LISA = 2;
var ID_MANUSCRIPT = 3;

var ID_FOOD = 0;
var ID_FRESH_WATER = 1;
var ID_LUMBER = 2;
var ID_STONE = 3;
var ID_IRON = 4;
var ID_CEMENT = 10;
var ID_OIL = 11;
var ID_UISCE = 12;
var ID_EADROM = 13;
var ID_REALTA = 14;

var ID_EXPENSIVE_PUDDING = 0;
var ID_MAGICAL_BUSHIDO_MUSASHI = 1;
var ID_MR_LION_GO_TOY = 2;

var ID_BAG_OF_COPPER = 0;
var ID_BAG_OF_SILVER = 1;
var ID_BAG_OF_GOLD = 2;

var ID_CHEESECAKE = 0;
var ID_SHORTCAKE = 1;
var ID_FRUITCAKE = 2;
var ID_MIRACLE_STOCKING = 3;

function SCchristmas2018_BL(num) { // Add the drop ID context for the bare numbers; pipe them into the main function
    var output = "M2x" + num + ",M4x4,M5x3";
    document.getElementById("christmas2018-sc-input").value = output;
    SCchristmas2018();
}

function SCchristmas2018_SF() { // Add the drop ID context for the bare numbers; pipe them into the main function
    var input = document.getElementById("christmas2018-sc-input-sf").value;
    var drops = input.split(" ");
    var output = "S2x" + drops[0] + ",S3x" + drops[1]+ ",S4x" + drops[2] + ",F2x" + drops[3] + ",F3x" + drops[4] + ",M3x" + drops[5] + ",M4x" + drops[6]+ ",M5x" + drops[7];
    document.getElementById("christmas2018-sc-input").value = output;
    SCchristmas2018();
}

function SCchristmas2018_PS() { // Add the drop ID context for the bare numbers; pipe them into the main function
    var input = document.getElementById("christmas2018-sc-input-ps").value;
    var drops = input.split(" ");
    var output = "C2x" + drops[0] + ",C3x" + drops[1] + ",S2x" + drops[2] + ",S3x" + drops[3] + ",M3x" + drops[4] + ",M4x" + drops[5];
    document.getElementById("christmas2018-sc-input").value = output;
    SCchristmas2018();
}

function SCchristmas2018() {
    var input = document.getElementById("christmas2018-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "C") {
            typeConst = ID_CHEESECAKE;
        } else if (typeID == "S") {
            typeConst = ID_SHORTCAKE;
        } else if (typeID == "F") {
            typeConst = ID_BAG_OF_GOLD;
        } else if (typeID == "M") {
            typeConst = ID_MIRACLE_STOCKING;
        } else {
            alert("SCchristmas2018: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_CHEESECAKE) {
                itemblock += 'CHEESECAKE';
            } else if (typeConst == ID_SHORTCAKE) {
                itemblock += 'SHORTCAKE';
            } else if (typeConst == ID_FRUITCAKE) {
                itemblock += 'FRUITCAKE';
            } else if (typeConst == ID_MIRACLE_STOCKING) {
                itemblock += 'MIRACLE_STOCKING';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("christmas2018-sc-output").innerHTML = output;
}

function SChalloween2018() {
    var input = document.getElementById("halloween2018-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "C") {
            typeConst = ID_BAG_OF_COPPER;
        } else if (typeID == "S") {
            typeConst = ID_BAG_OF_SILVER;
        } else if (typeID == "G") {
            typeConst = ID_BAG_OF_GOLD;
        } else {
            alert("SChalloween2018: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_BAG_OF_COPPER) {
                itemblock += 'BAG_OF_COPPER';
            } else if (typeConst == ID_BAG_OF_SILVER) {
                itemblock += 'BAG_OF_SILVER';
            } else if (typeConst == ID_BAG_OF_GOLD) {
                itemblock += 'BAG_OF_GOLD';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("halloween2018-sc-output").innerHTML = output;
}

function SCprisma2018() {
    //Get the string located at name/id summer2018-sc-input
    var input = document.getElementById("prisma2018-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "P") {
            typeConst = ID_EXPENSIVE_PUDDING;
        } else if (typeID == "M") {
            typeConst = ID_MAGICAL_BUSHIDO_MUSASHI;
        } else if (typeID == "L") {
            typeConst = ID_MR_LION_GO_TOY;
        } else {
            alert("SCprisma2018: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_EXPENSIVE_PUDDING) {
                itemblock += 'EXPENSIVE_PUDDING';
            } else if (typeConst == ID_MAGICAL_BUSHIDO_MUSASHI) {
                itemblock += 'MAGICAL_BUSHIDO_MUSASHI';
            } else if (typeConst == ID_MR_LION_GO_TOY) {
                itemblock += 'MR_LION_GO_TOY';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("prisma2018-sc-output").innerHTML = output;
}

function SCsummer2018() {
    //Get the string located at name/id summer2018-sc-input
    var input = document.getElementById("summer2018-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "F") {
            typeConst = ID_FOOD;
        } else if (typeID == "W") {
            typeConst = ID_FRESH_WATER;
        } else if (typeID == "L") {
            typeConst = ID_LUMBER;
        } else if (typeID == "S") {
            typeConst = ID_STONE;
        } else if (typeID == "I") {
            typeConst = ID_IRON;
        } else if (typeID == "C") {
            typeConst = ID_CEMENT;
        } else if (typeID == "O") {
            typeConst = ID_OIL;
        } else if (typeID == "U") {
            typeConst = ID_UISCE;
        } else if (typeID == "E") {
            typeConst = ID_EADROM;
        } else if (typeID == "R") {
            typeConst = ID_REALTA;
        } else {
            alert("SCsummer2018: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_FOOD) {
                itemblock += 'FOOD';
            } else if (typeConst == ID_FRESH_WATER) {
                itemblock += 'FRESH_WATER';
            } else if (typeConst == ID_LUMBER) {
                itemblock += 'LUMBER';
            } else if (typeConst == ID_STONE) {
                itemblock += 'STONE';
            } else if (typeConst == ID_IRON) {
                itemblock += 'IRON';
            } else if (typeConst == ID_CEMENT) {
                itemblock += 'CEMENT';
            } else if (typeConst == ID_OIL) {
                itemblock += 'OIL';
            } else if (typeConst == ID_UISCE) {
                itemblock += 'UISCE_ALLOY';
            } else if (typeConst == ID_EADROM) {
                itemblock += 'EADROM_ALLOY';
            } else if (typeConst == ID_REALTA) {
                itemblock += 'REALTA_ALLOY';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("summer2018-sc-output").innerHTML = output;
}

function SCdavinci2018() {
    //Get the string located at name/id davinci2018-sc-input
    var input = document.getElementById("davinci2018-sc-input").value;
    var output = '<code>{ "uplog": false, "drop": [], "stackdrop": [';
    var drops = input.split(",");
    for (var i = 0; i < drops.length; i += 1) {
        var count = drops[i];
        var splitunit = count.split("x"); //First half is ID and stack size, second is number of stacks
        var typeID = count[0]; //First character in each drop unit
        var stacksize = parseInt(count.substr(1, count.length - 1));
        var dropcount = parseInt(splitunit[1]);
        var typeConst = 0;
        if (typeID == "V") {
            typeConst = ID_VITRUVIAN_MAN;
        } else if (typeID == "S") {
            typeConst = ID_SELF_PORTRAIT;
        } else if (typeID == "L") {
            typeConst = ID_MONA_LISA;
        } else if (typeID == "M") {
            typeConst = ID_MANUSCRIPT;
        } else {
            alert("SCdavinci2018: Unable to parse input - unknown item type " + typeID);
        }
        //For each drop occurrence
        for (var j = 0; j < dropcount; j += 1) {
            var itemblock = '{"id": "';
            if (typeConst == ID_VITRUVIAN_MAN) {
                itemblock += 'VITRUVIAN_MAN';
            } else if (typeConst == ID_SELF_PORTRAIT) {
                itemblock += 'SELF_PORTRAIT';
            } else if (typeConst == ID_MONA_LISA) {
                itemblock += 'MONA_LISA';
            } else if (typeConst == ID_MANUSCRIPT) {
                itemblock += 'MANUSCRIPT';
            }
            itemblock += '", "stack": ';
            itemblock += stacksize.toString();
            itemblock += '}, ';
            output += itemblock;
        }
    }
    output = output.substr(0, output.length - 2); //prune last trailing comma and space
    output += '] },</code>';
    document.getElementById("davinci2018-sc-output").innerHTML = output;
}

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