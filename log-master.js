"use strict";

//When adding new data, use CTRL-F on the name of the region, quest name, or class.
//That's the only sane way to do this, unfortunately.
//Use _SABER, _FUYUKI, etc.

/* ----- ----- ----- ----- ----- DAILY QUESTS ----- ----- ----- ----- ----- */
// _SABER 
var daily_saber_obj = {
    "quests": [
        {
            "qname": "10 AP", "last-upd": "2017 10 16", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_SAB", "EXP_3_SAB"] }
            ]
        },
        {
            "qname": "20 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "30 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "40 AP", "last-upd": "2017 10 16", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["GEM_RD_SAB", "PIECE_SAB", "PIECE_SAB"] }
            ]
        }
    ]
};
// _LANCER
var daily_lancer_obj = {
    "quests": [
        {
            "qname": "10 AP", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": ["GEM_BL_LAN", "GEM_BL_LAN", "GEM_BL_LAN", "PIECE_LAN", "EVIL_BONE"] }
            ]
        },
        {
            "qname": "20 AP", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": ["EXP_3_LAN", "PIECE_LAN", "EVIL_BONE", "EVIL_BONE"] }
            ]
        },
        {
            "qname": "30 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "40 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _ARCHER
var daily_archer_obj = {
    "quests": [
        {
            "qname": "10 AP", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": ["EXP_2_ARC", "EXP_3_ARC"] },
                { "uplog": false, "drop": ["PIECE_ARC"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "PIECE_ARC", "EXP_3_ARC"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "EXP_2_ARC", "EXP_3_ARC"] }
            ]
        },
        {
            "qname": "20 AP", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "EXP_2_ARC", "EXP_3_ARC", "EVIL_BONE"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "PIECE_ARC", "EXP_2_ARC", "EVIL_BONE"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "GEM_BL_ARC", "PIECE_ARC"] },
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "GEM_BL_ARC", "EXP_3_ARC", "EVIL_BONE"] }
            ]
        },
        {
            "qname": "30 AP", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "GEM_RD_ARC", "GEM_GD_ARC", "PIECE_ARC", "MONU_ARC"] },
            ]
        },
        {
            "qname": "40 AP", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": ["GEM_BL_ARC", "GEM_RD_ARC", "GEM_GD_ARC", "MONU_ARC", "MONU_ARC"] },
            ]
        }
    ]
};
// _RIDER
var daily_rider_obj = {
    "quests": [
        {
            "qname": "10 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "20 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "30 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "40 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _CASTER
var daily_caster_obj = {
    "quests": [
        {
            "qname": "10 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "20 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "30 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "40 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _ASSASSIN
var daily_assassin_obj = {
    "quests": [
        {
            "qname": "10 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "20 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "30 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "40 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _BERSERKER
var daily_berserker_obj = {
    "quests": [
        {
            "qname": "10 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "20 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "30 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "40 AP", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};

/* ----- ----- ----- ----- ----- FREE QUESTS ----- ----- ----- ----- ----- */
// _FUYUKI
var free_fuyuki_obj = {
    "quests": [
        {
            "qname": "X-A: The Residential Ruin", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": [] }
            ]
        },
        {
            "qname": "X-B: Ground Zero", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-C: Giant Bridge", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-D: Blood Soaked Port", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-E: Church of Wandering Corpses", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-F: Burnt-Down Schoolhouse", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-G: Blazing Forest", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mobile Coordinate No.0: Massive Cavern", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _ORLEANS
var free_orleans_obj = {
    "quests": [
        {
            "qname": "Domremy: Jeanne's Birthplace", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Vaucouleure: First Fortress", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "La Charite: Loire Ridge", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Jura: Primeval Forest", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Lyon: Town of the Dead", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Marseille: Facing the Mediterranean Sea", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Thiers: Town of Blades", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Bordeaux: A Toast with Wine", "last-upd": "2017 10 16", "column": "3",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": ["GEM_BL_ASS"] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] }
            ]
        },
        {
            "qname": "Orleans: Fateful Fortress", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Paris: City of Art", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _SEPTEM
var free_septem_obj = {
    "quests": [
        {
            "qname": "Appia Road: Queen of the Street", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Rome: Rome Was Not Built In A Day", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mt. Etna: Exciting Land", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Florence: City of Flowers", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mediolanum: Middle of the Plain", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Germania: The Dark Forest", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Massilia: An Ancient Harbour", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Gaul: Smoldering Warzone", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Britania: Misty Forest", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Shaped Isle: Cave of the Goddess", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Alliance Capital: Rome's Horizon", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _OKEANOS
var free_okeanos_obj = {
    "quests": [
        {
            "qname": "Pirate Ship: Band of Corsairs", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Pirate Island: Pirate Hideout", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "King's Abode Island: Cursed Pirates", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mapped Island: Minotaur's Maze", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Sunken Rock Seas: Ship Graveyard", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": [] }
            ]
        },
        {
            "qname": "Two-Current Sea: Sea of Freedom", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Island of Wyverns: Dragon Paradise", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Caldera Island: Unexplored Island", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Stormy Seas: Wandering Ghost Ship", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Archipelago: Quiet Bay", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Bountiful Sea: Secret Route", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};

/* ----- ----- ----- ----- ----- CODE ----- ----- ----- ----- ----- */

//Map contiaining item string -> image path data
var imgpathmap = [];

function initPathMap() {
    //Skill Up Gems
    imgpathmap.push({"id": "GEM_BL_SAB", "path": "./icon/Shiningsaber.png", "label": "S"});
    imgpathmap.push({"id": "GEM_BL_LAN", "path": "./icon/Shininglancer.png", "label": "L"});
    imgpathmap.push({"id": "GEM_BL_ARC", "path": "./icon/Shiningarcher.png", "label": "A"});
    imgpathmap.push({"id": "GEM_BL_RID", "path": "./icon/Shiningrider.png", "label": "R"});
    imgpathmap.push({"id": "GEM_BL_CAS", "path": "./icon/Shiningcaster.png", "label": "C"});
    imgpathmap.push({"id": "GEM_BL_ASS", "path": "./icon/Shiningassassin.png", "label": "A"});
    imgpathmap.push({"id": "GEM_BL_BER", "path": "./icon/Shiningberserker.png", "label": "B"});
    imgpathmap.push({"id": "GEM_RD_SAB", "path": "./icon/Magicsaber.png", "label": "S"});
    imgpathmap.push({"id": "GEM_RD_LAN", "path": "./icon/Magiclancer.png", "label": "L"});
    imgpathmap.push({"id": "GEM_RD_ARC", "path": "./icon/Magicarcher.png", "label": "A"});
    imgpathmap.push({"id": "GEM_RD_RID", "path": "./icon/Magicrider.png", "label": "R"});
    imgpathmap.push({"id": "GEM_RD_CAS", "path": "./icon/Magiccaster.png", "label": "C"});
    imgpathmap.push({"id": "GEM_RD_ASS", "path": "./icon/Magicassassin.png", "label": "A"});
    imgpathmap.push({"id": "GEM_RD_BER", "path": "./icon/Magicberserker.png", "label": "B"});
    imgpathmap.push({"id": "GEM_GD_SAB", "path": "./icon/Secretsaber.png", "label": "S"});
    imgpathmap.push({"id": "GEM_GD_LAN", "path": "./icon/Secretlancer.png", "label": "L"});
    imgpathmap.push({"id": "GEM_GD_ARC", "path": "./icon/Secretarcher.png", "label": "A"});
    imgpathmap.push({"id": "GEM_GD_RID", "path": "./icon/Secretrider.png", "label": "R"});
    imgpathmap.push({"id": "GEM_GD_CAS", "path": "./icon/Secretcaster.png", "label": "C"});
    imgpathmap.push({"id": "GEM_GD_ASS", "path": "./icon/Secretassassin.png", "label": "A"});
    imgpathmap.push({"id": "GEM_GD_BER", "path": "./icon/Secretberserker.png", "label": "B"});
    //Ascension pieces
    imgpathmap.push({"id": "PIECE_SAB", "path": "./icon/Saber_piece.png", "label": "S"});
    imgpathmap.push({"id": "PIECE_LAN", "path": "./icon/Lancer_piece.png", "label": "L"});
    imgpathmap.push({"id": "PIECE_ARC", "path": "./icon/Archer_piece.png", "label": "A"});
    imgpathmap.push({"id": "PIECE_RID", "path": "./icon/Rider_piece.png", "label": "R"});
    imgpathmap.push({"id": "PIECE_CAS", "path": "./icon/Caster_piece.png", "label": "C"});
    imgpathmap.push({"id": "PIECE_ASS", "path": "./icon/Assassin_piece.png", "label": "A"});
    imgpathmap.push({"id": "PIECE_BER", "path": "./icon/Berserker_piece.png", "label": "B"});
    imgpathmap.push({"id": "MONU_SAB", "path": "./icon/Saber_monument.png", "label": "S"});
    imgpathmap.push({"id": "MONU_LAN", "path": "./icon/Lancer_monument.png", "label": "L"});
    imgpathmap.push({"id": "MONU_ARC", "path": "./icon/Archer_monument.png", "label": "A"});
    imgpathmap.push({"id": "MONU_RID", "path": "./icon/Rider_monument.png", "label": "R"});
    imgpathmap.push({"id": "MONU_CAS", "path": "./icon/Caster_monument.png", "label": "C"});
    imgpathmap.push({"id": "MONU_ASS", "path": "./icon/Assassin_monument.png", "label": "A"});
    imgpathmap.push({"id": "MONU_BER", "path": "./icon/Berserker_monument.png", "label": "B"});
    //EXP Items
    imgpathmap.push({"id": "EXP_1_SAB", "path": "./icon/Ember-of-Wisdom---Brown-Saber.png", "label": "S"});
    imgpathmap.push({"id": "EXP_1_LAN", "path": "./icon/Ember-of-Wisdom---Brown-Lancer.png", "label": "L"});
    imgpathmap.push({"id": "EXP_1_ARC", "path": "./icon/Ember-of-Wisdom---Brown-Archer.png", "label": "A"});
    imgpathmap.push({"id": "EXP_1_RID", "path": "./icon/Ember-of-Wisdom---Brown-Rider.png", "label": "R"});
    imgpathmap.push({"id": "EXP_1_CAS", "path": "./icon/Ember-of-Wisdom---Brown-Caster.png", "label": "C"});
    imgpathmap.push({"id": "EXP_1_ASS", "path": "./icon/Ember-of-Wisdom---Brown-Assassin.png", "label": "A"});
    imgpathmap.push({"id": "EXP_1_BER", "path": "./icon/Ember-of-Wisdom---Brown-Berserker.png", "label": "B"});
    imgpathmap.push({"id": "EXP_2_SAB", "path": "./icon/Light-of-Wisdom---Brown-Saber.png", "label": "S"});
    imgpathmap.push({"id": "EXP_2_LAN", "path": "./icon/Light-of-Wisdom---Brown-Lancer.png", "label": "L"});
    imgpathmap.push({"id": "EXP_2_ARC", "path": "./icon/Light-of-Wisdom---Brown-Archer.png", "label": "A"});
    imgpathmap.push({"id": "EXP_2_RID", "path": "./icon/Light-of-Wisdom---Brown-Rider.png", "label": "R"});
    imgpathmap.push({"id": "EXP_2_CAS", "path": "./icon/Light-of-Wisdom---Brown-Caster.png", "label": "C"});
    imgpathmap.push({"id": "EXP_2_ASS", "path": "./icon/Light-of-Wisdom---Brown-Assassin.png", "label": "A"});
    imgpathmap.push({"id": "EXP_2_BER", "path": "./icon/Light-of-Wisdom---Brown-Berserker.png", "label": "B"});
    imgpathmap.push({"id": "EXP_3_SAB", "path": "./icon/Fire-of-Wisdom---Silver-Saber.png", "label": "S"});
    imgpathmap.push({"id": "EXP_3_LAN", "path": "./icon/Fire-of-Wisdom---Silver-Lancer.png", "label": "L"});
    imgpathmap.push({"id": "EXP_3_ARC", "path": "./icon/Fire-of-Wisdom---Silver-Archer.png", "label": "A"});
    imgpathmap.push({"id": "EXP_3_RID", "path": "./icon/Fire-of-Wisdom---Silver-Rider.png", "label": "R"});
    imgpathmap.push({"id": "EXP_3_CAS", "path": "./icon/Fire-of-Wisdom---Silver-Caster.png", "label": "C"});
    imgpathmap.push({"id": "EXP_3_ASS", "path": "./icon/Fire-of-Wisdom---Silver-Assassin.png", "label": "A"});
    imgpathmap.push({"id": "EXP_3_BER", "path": "./icon/Fire-of-Wisdom---Silver-Berserker.png", "label": "B"});
    imgpathmap.push({"id": "EXP_4_SAB", "path": "./icon/Blaze-of-Wisdom---Gold-Saber.png", "label": "S"});
    imgpathmap.push({"id": "EXP_4_LAN", "path": "./icon/Blaze-of-Wisdom---Gold-Lancer.png", "label": "L"});
    imgpathmap.push({"id": "EXP_4_ARC", "path": "./icon/Blaze-of-Wisdom---Gold-Archer.png", "label": "A"});
    imgpathmap.push({"id": "EXP_4_RID", "path": "./icon/Blaze-of-Wisdom---Gold-Rider.png", "label": "R"});
    imgpathmap.push({"id": "EXP_4_CAS", "path": "./icon/Blaze-of-Wisdom---Gold-Caster.png", "label": "C"});
    imgpathmap.push({"id": "EXP_4_ASS", "path": "./icon/Blaze-of-Wisdom---Gold-Assassin.png", "label": "A"});
    imgpathmap.push({"id": "EXP_4_BER", "path": "./icon/Blaze-of-Wisdom---Gold-Berserker.png", "label": "B"});
    //Common drops
    imgpathmap.push({"id": "DRAGON_FANG", "path": "./icon/Dragon_fang.png", "label": "DF"});
    imgpathmap.push({"id": "EVIL_BONE", "path": "./icon/Unlucky_bone.png", "label": "EB"});
    imgpathmap.push({"id": "PROOF_OF_HERO", "path": "./icon/Heros_proof.png", "label": "PoH"});
    imgpathmap.push({"id": "VOIDS_DUST", "path": "./icon/Voids_dust.png", "label": "VD"});
    //Rare drops
    imgpathmap.push({"id": "FORBIDDEN_PAGE", "path": "./icon/Forbidden_page.png", "label": "FP"});
    imgpathmap.push({"id": "GHOST_LANTERN", "path": "./icon/Ghost_lantern.png", "label": "GL"});
    imgpathmap.push({"id": "HOMUNCULUS_BABY", "path": "./icon/Homunculus_baby.png", "label": "HB"});
    imgpathmap.push({"id": "INFINITY_GEAR", "path": "./icon/Infinity_gear.png", "label": "IG"});
    imgpathmap.push({"id": "METEORIC_HORSESHOE", "path": "./icon/Meteoric_horseshoe.png", "label": "MH"});
    imgpathmap.push({"id": "OCTUPLET_CRYSTAL", "path": "./icon/Octuplet_twin_crystals.png", "label": "OC"});
    imgpathmap.push({"id": "PHOENIX_FEATHER", "path": "./icon/Phoenix_plume.png", "label": "PF"});
    imgpathmap.push({"id": "SNAKE_JEWEL", "path": "./icon/Snake_jewel.png", "label": "SJ"});
    imgpathmap.push({"id": "SEED_OF_YGGDRASIL", "path": "./icon/Yggdrasil_seed.png", "label": "SoY"});
    //Super rare drops
    imgpathmap.push({"id": "CLAW_OF_CHAOS", "path": "./icon/Talon_of_chaos.png", "label": "CoC"});
    imgpathmap.push({"id": "DRAGONS_REVERSE_SCALE", "path": "./icon/Dragons_reverse_scale.png", "label": "DRS"});
    imgpathmap.push({"id": "HEART_OF_A_FOREIGN_GOD", "path": "./icon/Heart_of_a_foreign_god.png", "label": "HFG"});
    //Special drops

    //Misc
}

function loadDaily() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    console.log("loadDaily: Loading Daily Quests - Saber");
    loadObject(daily_saber_obj, "daily-saber");
    console.log("loadDaily: Loading Daily Quests - Lancer");
    loadObject(daily_lancer_obj, "daily-lancer");
    console.log("loadDaily: Loading Daily Quests - Archer");
    loadObject(daily_archer_obj, "daily-archer");
    console.log("loadDaily: Loading Daily Quests - Rider");
    loadObject(daily_rider_obj, "daily-rider");
    console.log("loadDaily: Loading Daily Quests - Caster");
    loadObject(daily_caster_obj, "daily-caster");
    console.log("loadDaily: Loading Daily Quests - Assassin");
    loadObject(daily_assassin_obj, "daily-assassin");
    console.log("loadDaily: Loading Daily Quests - Berserker");
    loadObject(daily_berserker_obj, "daily-berserker");
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
}

//Loads log object into the HTML table located at tableid
function loadObject(logobj, tableid) {
    var tablehtml = "<tr><th>Location + Quest</th><th>Col</th><th>Last Upd</th><th>#</th>";

    //We want to determine all the possible items that spawn given all occurrences in this object.
    //We will store this using a boolean array of size equivalent to that of imgpathmap
    //In the first run, all that will be done is log the items dropped.
    var numitems = imgpathmap.length;
    var logItems = [];

    for (var i = 0; i < numitems; i += 1) {
        //Retrieve the target Item ID
        var targetID = imgpathmap[i].id;
        var found = false;
        //Cross reference to see if it exists in the drop data
        for (var j = 0; j < logobj.quests.length; j += 1) {
            var droplog = logobj.quests[j].droplog;
            for (var k = 0; k < droplog.length; k += 1) {
                var droplist = droplog[k].drop;
                for (var l = 0; l < droplist.length; l += 1) {
                    if (targetID === droplist[l]) {
                        found = true;
                        break;
                    }
                }
            }
        }
        if (found) {
            logItems.push(1);
        } else {
            logItems.push(0);
        }
    }

    //Now that we know which items were dropped...
    //Populate the first row in the table.
    for (var i = 0; i < numitems; i += 1) {
        if (logItems[i] === 1) { //a hit
            tablehtml += '<th><img class="item" src="' + imgpathmap[i].path + '"><br>' + imgpathmap[i].label + '</th>';
        }
    }

    tablehtml += "</tr>"

    //Now we want to iterate through the quests and retrieve their data.
    for (var i = 0; i < logobj.quests.length; i += 1) {
        var quest = logobj.quests[i];
        //Gather data
        var numrunsUNLOG = 0;
        var numrunsTOTAL = 0;
        //These arrays are the same size as imgpathmap and logItems
        var numitemUNLOG = [];
        var numitemTOTAL = [];
        //Initialize arrays for the current quest
        for (var j = 0; j < imgpathmap.length; j += 1) {
            numitemUNLOG.push(0);
            numitemTOTAL.push(0);
        }
        //Now we iterate through the droplogs
        for (var j = 0; j < quest.droplog.length; j += 1) {
            var currdroplog = quest.droplog[j];
            //For every drop in the current droplog, if there are drops
            if (currdroplog.hasOwnProperty('drop')) {
                for (var k = 0; k < currdroplog.drop.length; k += 1) {
                    //console.log("Found " + currdroplog.drop[k] + " in quest " + quest.qname);
                    //Search for matches in the list of items
                    for (var l = 0; l < imgpathmap.length; l += 1) {
                        if (currdroplog.drop[k] === imgpathmap[l].id) {
                            numitemTOTAL[l] += 1;
                            if (!currdroplog.uplog) {
                                numitemUNLOG[l] += 1;
                            }
                        }
                    }
                }
            }
            //Increment run counts
            numrunsTOTAL += 1;
            if (!currdroplog.uplog) {
                numrunsUNLOG += 1;
            }
        }
        //Now that we've checked everything in the droplogs, let's create the table row for this quest
        //First, the basic information
        tablehtml += '<tr><td>' + quest.qname + '</td><td>' + quest.column + '</td>';
        tablehtml += '<td>' + quest["last-upd"] + '</td>';
        tablehtml += '<td>' + numrunsUNLOG.toString() + ' [' + numrunsTOTAL.toString() + ']</td>';

        //Next, the drops
        for (var m = 0; m < imgpathmap.length; m += 1) {
            if (logItems[m] === 1) {
                tablehtml += '<td>' + numitemUNLOG[m].toString() + ' [' + numitemTOTAL[m].toString() + ']</td>';
            }
        }

        tablehtml += '</tr>';
    }

    //Finally, write the table

    document.getElementById(tableid).innerHTML = tablehtml;
}