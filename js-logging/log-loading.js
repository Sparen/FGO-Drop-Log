// This file contains the functions called by the HTML files to actually load their contents.
// It was separated from log-master.js for visibility and depends on log-master's functions.

function loadDaily() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    console.log("loadDaily: Loading Daily Quests - Saber (Oct 2017 Dailies)");
    loadObject(daily_saber_2017_10_obj, "daily-saber-2017-10");
    console.log("loadDaily: Loading Daily Quests - Lancer (Oct 2017 Dailies)");
    loadObject(daily_lancer_2017_10_obj, "daily-lancer-2017-10");
    console.log("loadDaily: Loading Daily Quests - Archer (Oct 2017 Dailies)");
    loadObject(daily_archer_2017_10_obj, "daily-archer-2017-10");
    console.log("loadDaily: Loading Daily Quests - Rider (Oct 2017 Dailies)");
    loadObject(daily_rider_2017_10_obj, "daily-rider-2017-10");
    console.log("loadDaily: Loading Daily Quests - Caster (Oct 2017 Dailies)");
    loadObject(daily_caster_2017_10_obj, "daily-caster-2017-10");
    console.log("loadDaily: Loading Daily Quests - Assassin (Oct 2017 Dailies)");
    loadObject(daily_assassin_2017_10_obj, "daily-assassin-2017-10");
    console.log("loadDaily: Loading Daily Quests - Berserker (Oct 2017 Dailies)");
    loadObject(daily_berserker_2017_10_obj, "daily-berserker-2017-10");

    console.log("loadDaily: Loading Daily Quests - Saber (Aug 2018 Dailies)");
    loadObject(daily_saber_2018_08_obj, "daily-saber-2018-08");
    console.log("loadDaily: Loading Daily Quests - Lancer (Aug 2018 Dailies)");
    loadObject(daily_lancer_2018_08_obj, "daily-lancer-2018-08");
    console.log("loadDaily: Loading Daily Quests - Archer (Aug 2018 Dailies)");
    loadObject(daily_archer_2018_08_obj, "daily-archer-2018-08");
    console.log("loadDaily: Loading Daily Quests - Rider (Aug 2018 Dailies)");
    loadObject(daily_rider_2018_08_obj, "daily-rider-2018-08");
    console.log("loadDaily: Loading Daily Quests - Caster (Aug 2018 Dailies)");
    loadObject(daily_caster_2018_08_obj, "daily-caster-2018-08");
    console.log("loadDaily: Loading Daily Quests - Assassin (Aug 2018 Dailies)");
    loadObject(daily_assassin_2018_08_obj, "daily-assassin-2018-08");
    console.log("loadDaily: Loading Daily Quests - Berserker (Aug 2018 Dailies)");
    loadObject(daily_berserker_2018_08_obj, "daily-berserker-2018-08");
}

function loadFree() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    console.log("loadFree: Loading Free Quests - Fuyuki");
    loadObject(free_fuyuki_obj, "free-fuyuki");
    console.log("loadFree: Loading Free Quests - Orleans");
    loadObject(free_orleans_obj, "free-orleans");
    console.log("loadFree: Loading Free Quests - Septem");
    loadObject(free_septem_obj, "free-septem");
    console.log("loadFree: Loading Free Quests - Okeanos");
    loadObject(free_okeanos_obj, "free-okeanos");
    console.log("loadFree: Loading Free Quests - London");
    loadObject(free_london_obj, "free-london");
    console.log("loadFree: Loading Free Quests - E Pluribus Unum");
    loadObject(free_epu_obj, "free-epu");
    console.log("loadFree: Loading Free Quests - Camelot");
    loadObject(free_camelot_obj, "free-camelot");
    console.log("loadFree: Loading Free Quests - Babylonia");
    loadObject(free_babylonia_obj, "free-babylonia");

    console.log("loadFree: Loading Raid Quests - Solomon");
    // For Solomon, instead of dumping everything into one table, each raid gets its own table (since drops on every one is disjoint)
    // We will isolate each quest node in its own log object.
    var obj_solo_flauros = {"cssclass": "h-solomon", "quests": [raid_solomon_obj.quests[0]]};
    loadObject(obj_solo_flauros, "raid-solomon-2");
    var obj_solo_forneus = {"cssclass": "h-solomon", "quests": [raid_solomon_obj.quests[1]]};
    loadObject(obj_solo_forneus, "raid-solomon-3");
    var obj_solo_barbatos = {"cssclass": "h-solomon", "quests": [raid_solomon_obj.quests[2]]};
    loadObject(obj_solo_barbatos, "raid-solomon-4");
    var obj_solo_halphas = {"cssclass": "h-solomon", "quests": [raid_solomon_obj.quests[3]]};
    loadObject(obj_solo_halphas, "raid-solomon-5");
    var obj_solo_amon = {"cssclass": "h-solomon", "quests": [raid_solomon_obj.quests[4]]};
    loadObject(obj_solo_amon, "raid-solomon-6");
    var obj_solo_sabnock = {"cssclass": "h-solomon", "quests": [raid_solomon_obj.quests[5]]};
    loadObject(obj_solo_sabnock, "raid-solomon-7");
    var obj_solo_andromalius = {"cssclass": "h-solomon", "quests": [raid_solomon_obj.quests[6]]};
    loadObject(obj_solo_andromalius, "raid-solomon-10");
}

function loadFreeEOR() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
}

function loadFreeCITL() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
}

function loadEvent17() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    initPathMapEvent();
    console.log("loadEvent: Loading Event Quests - Halloween 2017");
    loadObject(event_halloween2017_obj, "event-halloween2017");
    console.log("loadEvent: Loading Event Quests - GUDAGUDA 2017");
    loadObject(event_gudaguda2017_obj, "event-gudaguda2017");
    console.log("loadEvent: Loading Event Quests - Christmas 2017");
    loadObject(event_christmas2017_obj, "event-christmas2017");
}

function loadEvent18() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    initPathMapEvent();
    console.log("loadEvent: Loading Event Quests - Saber Wars 2018");
    loadObject(event_saberwars2018_obj, "event-saberwars2018");
    console.log("loadEvent: Loading Event Quests - Da Vinci 2018");
    loadObject(event_davinci2018_obj, "event-davinci2018");
    console.log("loadEvent: Loading Event Quests - Fate/Accel Zero Order 2018");
    loadObject(event_accelzero2018_objA, "event-accelzero2018A");
    loadObject(event_accelzero2018_objB, "event-accelzero2018B");
    console.log("loadEvent: Loading Event Quests - Summer 2018");
    loadObject(event_summer2018part1_objA, "event-summer2018p1a");
    loadObject(event_summer2018part1_objB, "event-summer2018p1b");
    loadObject(event_summer2018part2_obj, "event-summer2018p2");
    console.log("loadEvent: Loading Event Quests - Prisma Codes 2018");
    loadObject(event_prismacodes2018_obj, "event-prisma2018");
    console.log("loadEvent: Loading Event Quests - Halloween 2018");
    loadObject(event_halloween2018_obj, "event-halloween2018");
    console.log("loadEvent: Loading Event Quests - Christmas 2018");
    loadObject(event_christmas2018_obj, "event-christmas2018");
}

function loadEvent19() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    initPathMapEvent();
    console.log("loadEvent: Loading Event Quests - Moonfest 2017 RE");
    loadObject(event_moonfest2017RE_obj, "event-moonfest2017RE");
}

function loadHuntEvent() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    console.log("loadHuntEvent: Loading Hunting Quests Part 1");
    loadObject(event_hunting1_obj, "event-hunting1");
    console.log("loadHuntEvent: Loading Hunting Quests Part 2");
    loadObject(event_hunting2_obj, "event-hunting2");
}