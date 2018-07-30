"use strict";

function loadQueryEngine() {
    initPathMap();
    console.log("loadQueryEngine: Preparing Query Engine");
    var tablecontents = "";
    var numitems = imgpathmap.length;
    var itemcounter = 0; //Some items will be excluded, so make sure the table doesn't break weirdly when excluding them.
    for (var i = 0; i < numitems; i += 1) {
        //Retrieve the target Item ID
        var targetID = imgpathmap[i].id;
        var targetPath = imgpathmap[i].path;
        var targetLabel = imgpathmap[i].label;
        var targetqengine = imgpathmap[i].qengine;
        if (targetqengine == "ALWAYS") {
            var button = '<button type="button" onclick="getDropStats(\'' + targetID + '\', \'' + targetPath + '\', \'' + targetLabel + '\', false)">Run</button>';
            var tablerow = '';
            if (itemcounter % 7 == 0) {tablerow += '<tr>';}
            tablerow += '<th style="border-color: #444444"><hr>' + targetID + '<hr>' + '<img class="item" src="' + targetPath + '"><br>' + targetLabel + '<br>' + button + '</th>';
            if (itemcounter % 7 == 6) {tablerow += '</tr>';}
            tablecontents += tablerow;
            itemcounter += 1;
        } else if (targetqengine == "EVENT") {
            var button = '<button type="button" onclick="getDropStats(\'' + targetID + '\', \'' + targetPath + '\', \'' + targetLabel + '\', true)">Run</button>';
            var tablerow = '';
            if (itemcounter % 7 == 0) {tablerow += '<tr>';}
            tablerow += '<th style="border-color: #444444"><hr>' + targetID + '<hr>' + '<img class="item" src="' + targetPath + '"><br>' + targetLabel + '<br>' + button + '</th>';
            if (itemcounter % 7 == 6) {tablerow += '</tr>';}
            tablecontents += tablerow;
            itemcounter += 1;
        }
    }
    if (itemcounter % 7 != 6) {tablecontents += '</tr>';} //prevent malformed tables
    document.getElementById("query-engine-master").innerHTML = tablecontents;
}

//Calculates stats for the given item ID. Used in Query Engine.
function getDropStats(itemID, itemPath, itemLabel, eventflag) {
    var todisplay = "<p>Query Results:</p>";
    todisplay += '<table><tr><th><span style="color:#FF6666">UNRELIABLE</span></th><th><span style="color:#FF66AA">LACKING DATA</span></th><th><span style="color:#CCAAFF">SOMEWHAT RELIABLE</span></th><th><span style="color:#88CCFF">RATHER RELIABLE</span></th><th><span style="color:#66DDFF">RELIABLE</span></th><th><span style="color:#66EEDD">VERY RELIABLE</span></th><th><span style="color:#66FFCC">EXTREMELY RELIABLE</span></th></tr>';
    todisplay += '<tr><td><span style="color:#FF6666">0-5 Runs</span></td><td><span style="color:#FF66AA">6-10 Runs</span></td><td><span style="color:#CCAAFF">11-25 Runs</span></td><td><span style="color:#88CCFF">26-50 Runs</span></td><td><span style="color:#66DDFF">51-75 Runs</span></td><td><span style="color:#66EEDD">76-100 Runs</span></td><td><span style="color:#66FFCC">100 Runs</span></td></tr></table>';
    todisplay += '<div><span class="h-fuyuki">FUYUKI&nbsp;</span>&nbsp;<span class="h-orleans">ORLEANS&nbsp;</span>&nbsp;<span class="h-septem">SEPTEM&nbsp;</span>&nbsp;<span class="h-okeanos">OKEANOS&nbsp;</span>&nbsp;<span class="h-london">LONDON&nbsp;</span>&nbsp;<span class="h-epu">E PLURIBUS UNUM&nbsp;</span>&nbsp;<span class="h-camelot">CAMELOT&nbsp;</span><br>';
    todisplay += '<span class="h-daily-knight1">DAILY (KNIGHT)&nbsp;</span>&nbsp;<span class="h-daily-cavalry1">DAILY (CAVALRY)&nbsp;</span>&nbsp;<span class="h-hunting">HUNTING&nbsp;</span><br>';
    todisplay += '<span class="h-gudaguda">GUDAGUDA&nbsp;</span>&nbsp;<span class="h-halloween">HALLOWEEN&nbsp;</span>&nbsp;<span class="h-christmas">CHRISTMAS&nbsp;</span>&nbsp;<span class="h-saberwars">SABER WARS&nbsp;</span>&nbsp;<span class="h-davinci">DA VINCI&nbsp;</span>&nbsp;<span class="h-accelzero">ACCEL ZERO&nbsp;</span>&nbsp;<span class="h-summer">SUMMER&nbsp;</span></div><br>';
    todisplay += '<div style="border: 1px solid #444444; padding: 2px">'
    todisplay += '<table><tr><th style="border-color: #222222"><hr>' + itemID + '<hr>' + '<img class="item" src="' + itemPath + '"><br>' + itemLabel + '</th></tr></table>'
    //Iterate through all accepted quests
    //Ensure only the most recent daily quests are used
    todisplay += getDropDisplay(itemID, eventflag);
    todisplay += "</div>";
    document.getElementById("query-engine-result").innerHTML = todisplay;
}

// Obtains the node divs for the item and sorts them.
function getDropDisplay(itemID, eventflag) {
    var nodes = [];
    nodes.push(getDropStatsQ(itemID, daily_saber_2017_10_obj, "DAILY"));
    nodes.push(getDropStatsQ(itemID, daily_lancer_2017_10_obj, "DAILY"));
    nodes.push(getDropStatsQ(itemID, daily_archer_2017_10_obj, "DAILY"));
    nodes.push(getDropStatsQ(itemID, daily_rider_2017_10_obj, "DAILY"));
    nodes.push(getDropStatsQ(itemID, daily_caster_2017_10_obj, "DAILY"));
    nodes.push(getDropStatsQ(itemID, daily_assassin_2017_10_obj, "DAILY"));
    nodes.push(getDropStatsQ(itemID, daily_berserker_2017_10_obj, "DAILY"));
    nodes.push(getDropStatsQ(itemID, free_fuyuki_obj, "FREE"));
    nodes.push(getDropStatsQ(itemID, free_orleans_obj, "FREE"));
    nodes.push(getDropStatsQ(itemID, free_septem_obj, "FREE"));
    nodes.push(getDropStatsQ(itemID, free_okeanos_obj, "FREE"));
    nodes.push(getDropStatsQ(itemID, free_london_obj, "FREE"));
    nodes.push(getDropStatsQ(itemID, free_epu_obj, "FREE"));
    nodes.push(getDropStatsQ(itemID, free_camelot_obj, "FREE"));
    //If limited time quest checkbox is enabled
    if (document.getElementById("queryLTQCB").checked) {
        nodes.push(getDropStatsQ(itemID, event_hunting1_obj, "EVENT"));
    }
    //If the item is an event item or if the checkbox for viewing event data for all items is checked
    if (eventflag || document.getElementById("queryEventCB").checked) {
        nodes.push(getDropStatsQ(itemID, event_halloween2017_obj, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_gudaguda2017_obj, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_christmas2017_obj, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_saberwars2018_obj, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_davinci2018_obj, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_accelzero2018_objA, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_accelzero2018_objB, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_summer2018part1_objA, "EVENT"));
        nodes.push(getDropStatsQ(itemID, event_summer2018part1_objB, "EVENT"));
    }
    // Note: nodes is an array of arrays of objects
    var nodeobjlist = [];
    var nodelisthtml = "";
    for (var i = 0; i < nodes.length; i += 1) {
        for (var j = 0; j < nodes[i].length; j += 1) {
            nodeobjlist.push(nodes[i][j]);
        }
    }
    // If necessary, sort
    if (document.getElementById("querySortByAPD").checked) {
        nodeobjlist = sortNodesByAPD(nodeobjlist);
    }

    for (var i = 0; i < nodeobjlist.length; i += 1) {
        nodelisthtml += nodeobjlist[i].htmlval;
    }
    return nodelisthtml;
}

// Given an item ID and a log object, returns HTML with the contents of each node in the log object that drops the item
// Return format: [{"htmlval" : querynode, "apd" : apperdrop}, ...]
function getDropStatsQ(itemID, logobj, logtype) {
    var toreturn = []; //Array containing HTML nodes and their associated APD

    //For every quest in the log object...
    for (var i = 0; i < logobj.quests.length; i += 1) {
        var quest = logobj.quests[i];
        //Gather data
        var numrunsTOTAL = 0;
        var numitemcountTOTAL = 0;
        //Now we iterate through the droplogs
        for (var j = 0; j < quest.droplog.length; j += 1) {
            var currdroplog = quest.droplog[j];
            //For every drop in the current droplog, if there are drops
            if (currdroplog.hasOwnProperty('drop')) {
                for (var k = 0; k < currdroplog.drop.length; k += 1) {
                    if (currdroplog.drop[k] === itemID) {
                        numitemcountTOTAL += 1;
                    }
                }
            }
            //Handle stack drops here
            if (currdroplog.hasOwnProperty('stackdrop')) {
                for (var k = 0; k < currdroplog.stackdrop.length; k += 1) {
                    if (currdroplog.stackdrop[k].id === itemID) {
                        numitemcountTOTAL += currdroplog.stackdrop[k].stack;
                    }
                }
            }
            //Increment run counts
            numrunsTOTAL += 1;
        }
        if (document.getElementById("queryIgnoreSub5").checked && numrunsTOTAL < 5) {
            //If ignoring nodes with under 5 runs and this node has under 5 runs, do not add.
        }
        //If at least one occurrence of the item dropped, we will write a log.
        else if (numitemcountTOTAL > 0) {
            var textcolor = "#FFFFFF"; //Color of text. Will change depending on the reliability of the data.
            if (numrunsTOTAL <= 5) {
                textcolor = "#FF6666";
            } else if (numrunsTOTAL <= 10) {
                textcolor = "#FF66AA";
            } else if (numrunsTOTAL <= 25) {
                textcolor = "#CCAAFF";
            } else if (numrunsTOTAL <= 50) {
                textcolor = "#88CCFF";
            } else if (numrunsTOTAL <= 75) {
                textcolor = "#66DDFF";
            } else if (numrunsTOTAL <= 100) {
                textcolor = "#66EEDD";
            } else {
                textcolor = "#66FFCC";
            }
            //Let us begin the output

            //Calculate Quest AP cost
            var questap = quest.ap;
            if (document.getElementById("queryHalfAPFreeQ").checked && logtype === "FREE") {
                questap = Math.floor(questap/2);
            } else if (document.getElementById("queryHalfAPDailyQ").checked && logtype === "DAILY") {
                questap = Math.floor(questap/2);
            }

            //First, the basic information
            var querynode = "";
            querynode += '<div style="border: 1px solid #222222; padding: 8px; background-color: #111111">';
            if (document.getElementById("queryHalfAPFreeQ").checked && logtype === "FREE") {
                querynode += '<h4 class="' + logobj.cssclass + '">' + quest.qname + ' [' + quest.ap + ' AP -> ' + questap + ' AP]</h4>';
            } else if (document.getElementById("queryHalfAPDailyQ").checked && logtype === "DAILY") {
                querynode += '<h4 class="' + logobj.cssclass + '">' + quest.qname + ' [' + quest.ap + ' AP -> ' + questap + ' AP]</h4>';
            } else {
                querynode += '<h4 class="' + logobj.cssclass + '">' + quest.qname + ' [' + quest.ap + ' AP]</h4>';
            }
            querynode += '<div class="useDIN" style="padding-left: 16px; padding-top: 4px; color:' + textcolor + '">Number of runs: ' + numrunsTOTAL.toString();

            var percentdecimalfix = 1; //default to 1 decimal place
            if ((numitemcountTOTAL / numrunsTOTAL * 100) >= 100) {percentdecimalfix = 0;}
            var percent = (numitemcountTOTAL / numrunsTOTAL * 100).toFixed(percentdecimalfix);
            if (numrunsTOTAL === 0) {percent = (0).toFixed(0);} //avoid NaN

            var apperdropdecimalfix = 1; //default to 1 decimal place
            if ((questap.toString()/(numitemcountTOTAL / numrunsTOTAL)) >= 100) {apperdropdecimalfix = 0;}
            var apperdrop = (parseInt(questap)/(numitemcountTOTAL / numrunsTOTAL)).toFixed(apperdropdecimalfix);
            if (numrunsTOTAL === 0 || numitemcountTOTAL === 0) {apperdrop = "?";} //avoid NaN

            //Padding for slightly more uniform formatting. Not going beyond 1000 because it's pointless lol
            if (numrunsTOTAL >= 1000) {querynode += '&nbsp;';} else if (numrunsTOTAL >= 100) {querynode += '&nbsp;&nbsp;';} else if (numrunsTOTAL >= 10) {querynode += '&nbsp;&nbsp;&nbsp;';} else {querynode += '&nbsp;&nbsp;&nbsp;&nbsp;';}

            var runsperdrop = (apperdrop/parseInt(questap)).toFixed(1);

            querynode += 'Total # Drops: ' + numitemcountTOTAL.toString() + '<br>Drop Rate Per Run: ' + percent + '%<br>AP Per Drop: ' + apperdrop + '<span style="font-size:8px">AP</span>&nbsp;&nbsp;[' + runsperdrop + ' Runs per drop]</div>';
            querynode += '</div>';
            toreturn.push({"htmlval" : querynode, "apd" : parseFloat(apperdrop)});
        }
    }
    return toreturn;
}

// Sorts by APD, lowest at top. Wrapper for sortByField.
function sortNodesByAPD(nodeobjlist) {
    var newarr = sortByField("apd", nodeobjlist, 0, nodeobjlist.length - 1);
    return newarr;
}

//Sorts the output array by the given field in place using quick sort.
function sortByField(field, arr, left, right) {
    var len = arr.length;
    var pivot;
    var partitionIndex;

    if (left < right) {
        pivot = right; //set pivot
        partitionIndex = sortPartition(field, arr, pivot, left, right);
        sortByField(field, arr, left, partitionIndex - 1);
        sortByField(field, arr, partitionIndex + 1, right);
    }
    return arr;
}

function sortPartition(field, arr, pivot, left, right){
    //console.log("TEST: arr[pivot]: " + JSON.stringify(arr[pivot]));
    var pivotValue = arr[pivot][field];
    var partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i][field] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}