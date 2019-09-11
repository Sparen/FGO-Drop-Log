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

/* Nerofest 2019 Rerun */
const nerofest2019_defobj = [
    {"ID": "B", "itemID": "NERO_BRONZE"}, {"ID": "S", "itemID": "NERO_SILVER"}, {"ID": "G", "itemID": "NERO_GOLD"}, {"ID": "P", "itemID": "CRIMSON_PETAL"}
];

function SCnerofest2019_FC(num) { // Based on SCchristmas2018_BL
    var output = "P3x" + num + ",P4x3,P5x2";
    document.getElementById("nerofest2019-sc-input").value = output;
    SCnerofest2019();
}

function SCnerofest2019() {
    SCmain("nerofest2019", nerofest2019_defobj);
}

/* Moonfest 2017 Rerun */
const moonfest2017re_defobj = [
    {"ID": "D", "itemID": "DUMPLING"}, {"ID": "G", "itemID": "GOLDEN_DUMPLING"}
];

function SCmoonfest2017RE_Add(str) { // Adds the selected blob to the input
    document.getElementById("moonfest2017re-sc-input").value = document.getElementById("moonfest2017re-sc-input").value + str + ",";
}

function SCmoonfest2017RE() {
    SCmain("moonfest2017re", moonfest2017re_defobj);
}

/* Christmas 2018 */
const christmas2018_defobj = [
    {"ID": "C", "itemID": "CHEESECAKE"}, {"ID": "S", "itemID": "SHORTCAKE"}, {"ID": "F", "itemID": "FRUITCAKE"}, {"ID": "M", "itemID": "MIRACLE_STOCKING"}
];

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
    SCmain("christmas2018", christmas2018_defobj);
}

/* Halloween 2018 */
const halloween2018_defobj = [
    {"ID": "C", "itemID": "BAG_OF_COPPER"}, {"ID": "S", "itemID": "BAG_OF_SILVER"}, {"ID": "G", "itemID": "BAG_OF_GOLD"}
];

function SChalloween2018() {
    SCmain("halloween2018", halloween2018_defobj);
}

/* Prisma Codes 2018 */
const prisma2018_defobj = [
    {"ID": "P", "itemID": "EXPENSIVE_PUDDING"}, {"ID": "M", "itemID": "MAGICAL_BUSHIDO_MUSASHI"}, {"ID": "L", "itemID": "MR_LION_GO_TOY"}
];

function SCprisma2018() {
    SCmain("prisma2018", prisma2018_defobj);
}

/* Summer 2018 */
const summer2018_defobj = [
    {"ID": "F", "itemID": "FOOD"}, {"ID": "W", "itemID": "FRESH_WATER"}, {"ID": "L", "itemID": "LUMBER"}, {"ID": "S", "itemID": "STONE"}, {"ID": "I", "itemID": "IRON"}, {"ID": "C", "itemID": "CEMENT"}, {"ID": "O", "itemID": "OIL"}, {"ID": "U", "itemID": "UISCE_ALLOY"}, {"ID": "E", "itemID": "EADROM_ALLOY"}, {"ID": "R", "itemID": "REALTA_ALLOY"}
];

function SCsummer2018() {
    SCmain("summer2018", summer2018_defobj);
}

/* Da Vinci 2018 */
const davinci2018_defobj = [
    {"ID": "V", "itemID": "VITRUVIAN_MAN"}, {"ID": "S", "itemID": "SELF_PORTRAIT"}, {"ID": "L", "itemID": "MONA_LISA"}, {"ID": "M", "itemID": "MANUSCRIPT"}
];

function SCdavinci2018() {
    SCmain("davinci2018", davinci2018_defobj);
}

/* Saber Wars 2018 */
const saberwars2018_defobj = [
    {"ID": "A", "itemID": "ALTRIUM"}, {"ID": "T", "itemID": "TRANSISTOR"}, {"ID": "L", "itemID": "AP_LENS"}, {"ID": "V", "itemID": "VACUUM_TUBE"}
];

function SCsaberwars2018() {
    SCmain("saberwars2018", saberwars2018_defobj);
}

/* Christams 2017 */
const christmas2017_defobj = [
    {"ID": "R", "itemID": "MINI_RIBBON"}, {"ID": "B", "itemID": "SILVER_BELL"}, {"ID": "S", "itemID": "GOLD_STAR"}, {"ID": "X", "itemID": "M_SOCK"}
];

function SCchristmas2017() {
    SCmain("christmas2017", christmas2017_defobj);
}

/* Gudaguda 1 */
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