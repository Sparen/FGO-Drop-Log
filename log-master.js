"use strict";

//When adding new data, use CTRL-F on the name of the region, quest name, or class.
//That's the only sane way to do this, unfortunately.
//Use _SABER, _FUYUKI, etc.

/* ----- ----- ----- ----- ----- DAILY QUESTS ----- ----- ----- ----- ----- */
// _SABER 2017 OCT
var daily_saber_2017_10_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Saber Training Ground - Novice", "ap": "10", "last-upd": "2017 10 16", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_SAB", "EXP_3_SAB"] }
            ]
        },
        {
            "qname": "Saber Training Ground - Intermediate", "ap": "20", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Saber Training Ground - Advanced", "ap": "30", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Saber Training Ground - Expert", "ap": "40", "last-upd": "2017 10 16", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["GEM_RD_SAB", "PIECE_SAB", "PIECE_SAB"] }
            ]
        }
    ]
};
// _LANCER 2017 OCT
var daily_lancer_2017_10_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Lancer Training Ground - Novice", "ap": "10", "last-upd": "2017 10 24", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_LAN", "GEM_BL_LAN", "GEM_BL_LAN", "PIECE_LAN", "EVIL_BONE"] },
                { "uplog": true, "drop": ["GEM_BL_LAN", "EXP_2_LAN", "EXP_3_LAN"] }
            ]
        },
        {
            "qname": "Lancer Training Ground - Intermediate", "ap": "20", "last-upd": "2017 10 24", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["EXP_3_LAN", "PIECE_LAN", "EVIL_BONE", "EVIL_BONE"] }
            ]
        },
        {
            "qname": "Lancer Training Ground - Advanced", "ap": "30", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Lancer Training Ground - Expert", "ap": "40", "last-upd": "2017 10 31", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_RD_LAN", "PIECE_LAN", "EXP_1_LAN", "EXP_2_LAN", "EXP_2_LAN", "VOIDS_DUST"] }
            ]
        }
    ]
};
// _ARCHER 2017 OCT
var daily_archer_2017_10_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Archer Training Ground - Novice", "ap": "10", "last-upd": "2017 10 17", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["EXP_2_ARC", "EXP_3_ARC"] },
                { "uplog": true, "drop": ["PIECE_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "EXP_3_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "PIECE_ARC", "EXP_3_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "EXP_2_ARC", "EXP_3_ARC"] }
            ]
        },
        {
            "qname": "Archer Training Ground - Intermediate", "ap": "20", "last-upd": "2017 10 17", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "EXP_2_ARC", "EXP_3_ARC", "EVIL_BONE"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "PIECE_ARC", "EXP_2_ARC", "EVIL_BONE"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "GEM_BL_ARC", "PIECE_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "GEM_BL_ARC", "EXP_3_ARC", "EVIL_BONE"] }
            ]
        },
        {
            "qname": "Archer Training Ground - Advanced", "ap": "30", "last-upd": "2017 10 17", "column": "125",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC", "GEM_RD_ARC", "GEM_GD_ARC", "PIECE_ARC", "MONU_ARC"] }
            ]
        },
        {
            "qname": "Archer Training Ground - Expert", "ap": "40", "last-upd": "2017 10 30", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_RD_ARC", "GEM_GD_ARC", "MONU_ARC", "MONU_ARC"] },
                { "uplog": true, "drop": ["GEM_RD_ARC", "PIECE_ARC", "PROOF_OF_HERO"] }
            ]
        }
    ]
};
// _RIDER 2017 OCT
var daily_rider_2017_10_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Rider Training Ground - Novice", "ap": "10", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Rider Training Ground - Intermediate", "ap": "20", "last-upd": "2017 10 30", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_RID", "GEM_BL_RID", "GEM_RD_RID", "EXP_3_RID", "EXP_3_RID"] }
            ]
        },
        {
            "qname": "Rider Training Ground - Advanced", "ap": "30", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Rider Training Ground - Expert", "ap": "40", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _CASTER 2017 OCT
var daily_caster_2017_10_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Caster Training Ground - Novice", "ap": "10", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Caster Training Ground - Intermediate", "ap": "20", "last-upd": "2017 11 03", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["EXP_3_CAS", "GEM_RD_CAS", "PIECE_CAS", "VOIDS_DUST"] }
            ]
        },
        {
            "qname": "Caster Training Ground - Advanced", "ap": "30", "last-upd": "2017 11 03", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_RD_CAS", "GEM_RD_CAS", "MONU_CAS"] }
            ]
        },
        {
            "qname": "Caster Training Ground - Expert", "ap": "40", "last-upd": "2017 11 03", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_GD_CAS", "PIECE_CAS", "MONU_CAS"] }
            ]
        }
    ]
};
// _ASSASSIN 2017 OCT
var daily_assassin_2017_10_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Assassin Training Ground - Novice", "ap": "10", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Assassin Training Ground - Intermediate", "ap": "20", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Assassin Training Ground - Advanced", "ap": "30", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Assassin Training Ground - Expert", "ap": "40", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _BERSERKER 2017 OCT
var daily_berserker_2017_10_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Berserker Training Ground - Novice", "ap": "10", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Berserker Training Ground - Intermediate", "ap": "20", "last-upd": "2017 11 01", "column": "32",
            "droplog": [
                { "uplog": true, "drop": ["EXP_2_BER", "GEM_BL_BER", "GEM_BL_BER", "PIECE_BER"] }
            ]
        },
        {
            "qname": "Berserker Training Ground - Advanced", "ap": "30", "last-upd": "2017 11 01", "column": "32",
            "droplog": [
                { "uplog": true, "drop": ["EXP_3_BER", "GEM_RD_BER", "PIECE_BER", "PIECE_BER", "VOIDS_DUST"] }
            ]
        },
        {
            "qname": "Berserker Training Ground - Expert", "ap": "40", "last-upd": "2017 11 01", "column": "32",
            "droplog": [
                { "uplog": true, "drop": ["EXP_2_BER", "EXP_2_BER", "GEM_BL_BER", "GEM_RD_BER", "GEM_RD_BER", "MONU_BER"] }
            ]
        }
    ]
};

/* ----- ----- ----- ----- ----- FREE QUESTS ----- ----- ----- ----- ----- */
// _FUYUKI
var free_fuyuki_obj = {
    "colors": ["#FFCC00", "#882200"],
    "quests": [
        {
            "qname": "X-A: The Residential Ruin", "ap": "3", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": [] }
            ]
        },
        {
            "qname": "X-B: Ground Zero", "ap": "4", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-C: Giant Bridge", "ap": "4", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-D: Blood Soaked Port", "ap": "5", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-E: Church of Wandering Corpses", "ap": "5", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-F: Burnt-Down Schoolhouse", "ap": "6", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "X-G: Blazing Forest", "ap": "15", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mobile Coordinate No.0: Massive Cavern", "ap": "7", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _ORLEANS
var free_orleans_obj = {
    "colors": ["#AAFFCC", "#338844"],
    "quests": [
        {
            "qname": "Domremy: Jeanne's Birthplace", "ap": "7", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Vaucouleure: First Fortress", "ap": "7", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "La Charite: Loire Ridge", "ap": "7", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Jura: Primeval Forest", "ap": "7", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Lyon: Town of the Dead", "ap": "7", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Marseille: Facing the Mediterranean Sea", "ap": "7", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Thiers: Town of Blades", "ap": "7", "last-upd": "2017 11 01", "column": "3",
            "droplog": [
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["DRAGON_FANG"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_RID"] }
            ]
        },
        {
            "qname": "Bordeaux: A Toast with Wine", "ap": "7", "last-upd": "2017 10 31", "column": "3",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": ["GEM_BL_ASS"] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_LAN"] },
                { "uplog": true, "drop": ["GEM_BL_ASS", "SEED_OF_YGGDRASIL"] },
                { "uplog": true, "drop": ["GEM_BL_ASS"] },
                { "uplog": true, "drop": [] }
            ]
        },
        {
            "qname": "Orleans: Fateful Fortress", "ap": "8", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Paris: City of Art", "ap": "13", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _SEPTEM
var free_septem_obj = {
    "colors": ["#FFFFCC", "#AA6600"],
    "quests": [
        {
            "qname": "Appia Road: Queen of the Street", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Rome: Rome Was Not Built In A Day", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mt. Etna: Exciting Land", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Florence: City of Flowers", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mediolanum: Middle of the Plain", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Germania: The Dark Forest", "ap": "15", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Massilia: An Ancient Harbour", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Gaul: Smoldering Warzone", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Britannia: Misty Forest", "ap": "10", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Shaped Isle: Cave of the Goddess", "ap": "9", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Alliance Capital: Rome's Horizon", "ap": "10", "last-upd": "", "column": "",
            "droplog": [
            ]
        }
    ]
};
// _OKEANOS
var free_okeanos_obj = {
    "colors": ["#CCEEFF", "#2222CC"],
    "quests": [
        {
            "qname": "Pirate Ship: Band of Corsairs", "ap": "12", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Pirate Island: Pirate Hideout", "ap": "13", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "King's Abode Island: Cursed Pirates", "ap": "13", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Mapped Island: Minotaur's Maze", "ap": "13", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Sunken Rock Seas: Ship Graveyard", "ap": "17", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": [] }
            ]
        },
        {
            "qname": "Two-Current Sea: Sea of Freedom", "ap": "14", "last-upd": "2017 11 03", "column": "37",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_BER"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_BER", "OCTUPLET_CRYSTAL"] },
                { "uplog": true, "drop": ["GEM_BL_ARC"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["OCTUPLET_CRYSTAL"] },
                { "uplog": true, "drop": ["GEM_BL_BER", "PROOF_OF_HERO"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "PROOF_OF_HERO"] }, 
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["PROOF_OF_HERO", "OCTUPLET_CRYSTAL"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["PROOF_OF_HERO"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_ARC"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_BER"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_BER"] },
                { "uplog": true, "drop": ["PROOF_OF_HERO"] },
                { "uplog": true, "drop": ["PROOF_OF_HERO"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_ARC"] },
                { "uplog": true, "drop": ["PROOF_OF_HERO"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["PROOF_OF_HERO"] },
                { "uplog": true, "drop": ["PROOF_OF_HERO"] },
                { "uplog": true, "drop": ["GEM_BL_ARC", "GEM_BL_ARC"] },
                { "uplog": true, "drop": ["GEM_BL_BER"] }
            ]
        },
        {
            "qname": "Island of Wyverns: Dragon Paradise", "ap": "14", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Caldera Island: Unexplored Island", "ap": "17", "last-upd": "", "column": "",
            "droplog": [
                { "uplog": false, "drop": ["GEM_BL_SAB", "METEORIC_HORSESHOE"] },
                { "uplog": false, "drop": [] }
            ]
        },
        {
            "qname": "Stormy Seas: Wandering Ghost Ship", "ap": "15", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Archipelago: Quiet Bay", "ap": "15", "last-upd": "", "column": "",
            "droplog": [
            ]
        },
        {
            "qname": "Bountiful Sea: Secret Route", "ap": "18", "last-upd": "2017 11 02", "column": "44",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_SAB"] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": [] },
                { "uplog": true, "drop": ["GEM_BL_SAB"] },
                { "uplog": true, "drop": [] }
            ]
        }
    ]
};

/* ----- ----- ----- ----- ----- EVENT QUESTS ----- ----- ----- ----- ----- */
// _HALLOWEEN2017 
var event_halloween2017_obj = {
    "colors": ["#FFCCAA", "#CC6633"],
    "quests": [
        {
            "qname": "Dancer's Castle Gate: First Stage", "ap": "10", "last-upd": "2017 10 19", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_LAN", "EVIL_BONE"], "stackdrop": [{"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 6}] }
            ]
        },
        {
            "qname": "Great Hall of the Cleaning Queen: Second Stage", "ap": "20", "last-upd": "2017 10 31", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_BER", "EVIL_BONE", "OCTUPLET_CRYSTAL"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 2}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 2}] },
                { "uplog": true, "drop": ["GEM_BL_LAN", "GEM_BL_CAS"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "SWEET_CANDLE", "stack": 4}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 2}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_BER", "GEM_BL_BER"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 2}] },
                { "uplog": true, "drop": ["GEM_BL_LAN", "EVIL_BONE", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_BER"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_LAN", "GEM_BL_LAN", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_LAN", "GEM_BL_CAS"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 2}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 2}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "SWEET_CANDLE", "stack": 4}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 6}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 2}] },
                { "uplog": true, "drop": ["OCTUPLET_CRYSTAL"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 4}] }
            ]
        },
        {
            "qname": "Throne of the Impaler: Thid Stage", "ap": "30", "last-upd": "2017 10 17", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "PETIT_CAKE", "stack": 2}] }
            ]
        },
        {
            "qname": "Hidden Room of Cat Maid: Final Stage", "ap": "40", "last-upd": "2017 10 28", "column": "30",
            "droplog": [
                { "uplog": true, "drop": ["GEM_BL_CAS", "SEED_OF_YGGDRASIL"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 5}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "PETIT_CAKE", "stack": 6}, {"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS", "GHOST_LANTERN", "GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "PETIT_CAKE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 5}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "PUMPKIN_LANTERN", "stack": 3}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_ASS"], "stackdrop": [{"id": "PUMPKIN_LANTERN", "stack": 3}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["EVIL_BONE"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE", "GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["EVIL_BONE", "GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["EVIL_BONE", "GHOST_LANTERN", "GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 5}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE", "GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_RID", "GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 6}, {"id": "PUMPKIN_LANTERN", "stack": 3}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 5}] },
                { "uplog": true, "drop": ["GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["EVIL_BONE", "SEED_OF_YGGDRASIL"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GHOST_LANTERN"], "stackdrop": [{"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_RID", "GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS", "GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GHOST_LANTERN", "GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["SEED_OF_YGGDRASIL"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_ASS", "GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": [], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_ASS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS", "DRAGON_FANG"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["EVIL_BONE", "GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE", "GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_RID", "GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["SEED_OF_YGGDRASIL"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "MISCHIEVOUS_BAT", "stack": 3}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "DRAGON_FANG", "SEED_OF_YGGDRASIL"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "SEED_OF_YGGDRASIL"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 4}, {"id": "PETIT_CAKE", "stack": 6}] },
                { "uplog": true, "drop": ["GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_CAS", "GEM_BL_ASS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}] },
                { "uplog": true, "drop": ["GEM_BL_CAS"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "PUMPKIN_LANTERN", "stack": 3}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 7}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}] },
                { "uplog": true, "drop": ["GEM_BL_CAS", "EVIL_BONE", "GHOST_LANTERN"], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "SWEET_CANDLE", "stack": 4}, {"id": "SWEET_CANDLE", "stack": 4}] }
            ]
        },
        {
            "qname": "Live Stage of the Dragon Princess: Encore Live", "ap": "50", "last-upd": "2017 10 28", "column": "30",
            "droplog": [
                { "uplog": true, "drop": [], "stackdrop": [{"id": "MISCHIEVOUS_BAT", "stack": 5}, {"id": "MISCHIEVOUS_BAT", "stack": 10}, {"id": "PETIT_CAKE", "stack": 8}, {"id": "PETIT_CAKE", "stack": 8}] }
            ]
        }
    ]
};

/* ----- ----- ----- ----- ----- CODE ----- ----- ----- ----- ----- */

//Map contiaining item string -> image path data
var imgpathmap = [];

function initPathMap() {
    //Skill Up Gems
    imgpathmap.push({"id": "GEM_BL_SAB", "path": "./icon/Shiningsaber.png", "label": "S", "qengine": true});
    imgpathmap.push({"id": "GEM_BL_LAN", "path": "./icon/Shininglancer.png", "label": "L", "qengine": true});
    imgpathmap.push({"id": "GEM_BL_ARC", "path": "./icon/Shiningarcher.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "GEM_BL_RID", "path": "./icon/Shiningrider.png", "label": "R", "qengine": true});
    imgpathmap.push({"id": "GEM_BL_CAS", "path": "./icon/Shiningcaster.png", "label": "C", "qengine": true});
    imgpathmap.push({"id": "GEM_BL_ASS", "path": "./icon/Shiningassassin.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "GEM_BL_BER", "path": "./icon/Shiningberserker.png", "label": "B", "qengine": true});
    imgpathmap.push({"id": "GEM_RD_SAB", "path": "./icon/Magicsaber.png", "label": "S", "qengine": true});
    imgpathmap.push({"id": "GEM_RD_LAN", "path": "./icon/Magiclancer.png", "label": "L", "qengine": true});
    imgpathmap.push({"id": "GEM_RD_ARC", "path": "./icon/Magicarcher.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "GEM_RD_RID", "path": "./icon/Magicrider.png", "label": "R", "qengine": true});
    imgpathmap.push({"id": "GEM_RD_CAS", "path": "./icon/Magiccaster.png", "label": "C", "qengine": true});
    imgpathmap.push({"id": "GEM_RD_ASS", "path": "./icon/Magicassassin.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "GEM_RD_BER", "path": "./icon/Magicberserker.png", "label": "B", "qengine": true});
    imgpathmap.push({"id": "GEM_GD_SAB", "path": "./icon/Secretsaber.png", "label": "S", "qengine": true});
    imgpathmap.push({"id": "GEM_GD_LAN", "path": "./icon/Secretlancer.png", "label": "L", "qengine": true});
    imgpathmap.push({"id": "GEM_GD_ARC", "path": "./icon/Secretarcher.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "GEM_GD_RID", "path": "./icon/Secretrider.png", "label": "R", "qengine": true});
    imgpathmap.push({"id": "GEM_GD_CAS", "path": "./icon/Secretcaster.png", "label": "C", "qengine": true});
    imgpathmap.push({"id": "GEM_GD_ASS", "path": "./icon/Secretassassin.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "GEM_GD_BER", "path": "./icon/Secretberserker.png", "label": "B", "qengine": true});
    //Ascension pieces
    imgpathmap.push({"id": "PIECE_SAB", "path": "./icon/Saber_piece.png", "label": "S", "qengine": true});
    imgpathmap.push({"id": "PIECE_LAN", "path": "./icon/Lancer_piece.png", "label": "L", "qengine": true});
    imgpathmap.push({"id": "PIECE_ARC", "path": "./icon/Archer_piece.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "PIECE_RID", "path": "./icon/Rider_piece.png", "label": "R", "qengine": true});
    imgpathmap.push({"id": "PIECE_CAS", "path": "./icon/Caster_piece.png", "label": "C", "qengine": true});
    imgpathmap.push({"id": "PIECE_ASS", "path": "./icon/Assassin_piece.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "PIECE_BER", "path": "./icon/Berserker_piece.png", "label": "B", "qengine": true});
    imgpathmap.push({"id": "MONU_SAB", "path": "./icon/Saber_monument.png", "label": "S", "qengine": true});
    imgpathmap.push({"id": "MONU_LAN", "path": "./icon/Lancer_monument.png", "label": "L", "qengine": true});
    imgpathmap.push({"id": "MONU_ARC", "path": "./icon/Archer_monument.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "MONU_RID", "path": "./icon/Rider_monument.png", "label": "R", "qengine": true});
    imgpathmap.push({"id": "MONU_CAS", "path": "./icon/Caster_monument.png", "label": "C", "qengine": true});
    imgpathmap.push({"id": "MONU_ASS", "path": "./icon/Assassin_monument.png", "label": "A", "qengine": true});
    imgpathmap.push({"id": "MONU_BER", "path": "./icon/Berserker_monument.png", "label": "B", "qengine": true});
    //EXP Items
    imgpathmap.push({"id": "EXP_1_SAB", "path": "./icon/Ember-of-Wisdom---Brown-Saber.png", "label": "S", "qengine": false});
    imgpathmap.push({"id": "EXP_1_LAN", "path": "./icon/Ember-of-Wisdom---Brown-Lancer.png", "label": "L", "qengine": false});
    imgpathmap.push({"id": "EXP_1_ARC", "path": "./icon/Ember-of-Wisdom---Brown-Archer.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_1_RID", "path": "./icon/Ember-of-Wisdom---Brown-Rider.png", "label": "R", "qengine": false});
    imgpathmap.push({"id": "EXP_1_CAS", "path": "./icon/Ember-of-Wisdom---Brown-Caster.png", "label": "C", "qengine": false});
    imgpathmap.push({"id": "EXP_1_ASS", "path": "./icon/Ember-of-Wisdom---Brown-Assassin.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_1_BER", "path": "./icon/Ember-of-Wisdom---Brown-Berserker.png", "label": "B", "qengine": false});
    imgpathmap.push({"id": "EXP_2_SAB", "path": "./icon/Light-of-Wisdom---Brown-Saber.png", "label": "S", "qengine": false});
    imgpathmap.push({"id": "EXP_2_LAN", "path": "./icon/Light-of-Wisdom---Brown-Lancer.png", "label": "L", "qengine": false});
    imgpathmap.push({"id": "EXP_2_ARC", "path": "./icon/Light-of-Wisdom---Brown-Archer.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_2_RID", "path": "./icon/Light-of-Wisdom---Brown-Rider.png", "label": "R", "qengine": false});
    imgpathmap.push({"id": "EXP_2_CAS", "path": "./icon/Light-of-Wisdom---Brown-Caster.png", "label": "C", "qengine": false});
    imgpathmap.push({"id": "EXP_2_ASS", "path": "./icon/Light-of-Wisdom---Brown-Assassin.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_2_BER", "path": "./icon/Light-of-Wisdom---Brown-Berserker.png", "label": "B", "qengine": false});
    imgpathmap.push({"id": "EXP_3_SAB", "path": "./icon/Fire-of-Wisdom---Silver-Saber.png", "label": "S", "qengine": false});
    imgpathmap.push({"id": "EXP_3_LAN", "path": "./icon/Fire-of-Wisdom---Silver-Lancer.png", "label": "L", "qengine": false});
    imgpathmap.push({"id": "EXP_3_ARC", "path": "./icon/Fire-of-Wisdom---Silver-Archer.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_3_RID", "path": "./icon/Fire-of-Wisdom---Silver-Rider.png", "label": "R", "qengine": false});
    imgpathmap.push({"id": "EXP_3_CAS", "path": "./icon/Fire-of-Wisdom---Silver-Caster.png", "label": "C", "qengine": false});
    imgpathmap.push({"id": "EXP_3_ASS", "path": "./icon/Fire-of-Wisdom---Silver-Assassin.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_3_BER", "path": "./icon/Fire-of-Wisdom---Silver-Berserker.png", "label": "B", "qengine": false});
    imgpathmap.push({"id": "EXP_4_SAB", "path": "./icon/Blaze-of-Wisdom---Gold-Saber.png", "label": "S", "qengine": false});
    imgpathmap.push({"id": "EXP_4_LAN", "path": "./icon/Blaze-of-Wisdom---Gold-Lancer.png", "label": "L", "qengine": false});
    imgpathmap.push({"id": "EXP_4_ARC", "path": "./icon/Blaze-of-Wisdom---Gold-Archer.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_4_RID", "path": "./icon/Blaze-of-Wisdom---Gold-Rider.png", "label": "R", "qengine": false});
    imgpathmap.push({"id": "EXP_4_CAS", "path": "./icon/Blaze-of-Wisdom---Gold-Caster.png", "label": "C", "qengine": false});
    imgpathmap.push({"id": "EXP_4_ASS", "path": "./icon/Blaze-of-Wisdom---Gold-Assassin.png", "label": "A", "qengine": false});
    imgpathmap.push({"id": "EXP_4_BER", "path": "./icon/Blaze-of-Wisdom---Gold-Berserker.png", "label": "B", "qengine": false});
    //Common drops
    imgpathmap.push({"id": "DRAGON_FANG", "path": "./icon/Dragon_fang.png", "label": "DF", "qengine": true});
    imgpathmap.push({"id": "EVIL_BONE", "path": "./icon/Unlucky_bone.png", "label": "EB", "qengine": true});
    imgpathmap.push({"id": "PROOF_OF_HERO", "path": "./icon/Heros_proof.png", "label": "PoH", "qengine": true});
    imgpathmap.push({"id": "VOIDS_DUST", "path": "./icon/Voids_dust.png", "label": "VD", "qengine": true});
    //Rare drops
    imgpathmap.push({"id": "FORBIDDEN_PAGE", "path": "./icon/Forbidden_page.png", "label": "FP", "qengine": true});
    imgpathmap.push({"id": "GHOST_LANTERN", "path": "./icon/Ghost_lantern.png", "label": "GL", "qengine": true});
    imgpathmap.push({"id": "HOMUNCULUS_BABY", "path": "./icon/Homunculus_baby.png", "label": "HB", "qengine": true});
    imgpathmap.push({"id": "INFINITY_GEAR", "path": "./icon/Infinity_gear.png", "label": "IG", "qengine": true});
    imgpathmap.push({"id": "METEORIC_HORSESHOE", "path": "./icon/Meteoric_horseshoe.png", "label": "MH", "qengine": true});
    imgpathmap.push({"id": "OCTUPLET_CRYSTAL", "path": "./icon/Octuplet_twin_crystals.png", "label": "OC", "qengine": true});
    imgpathmap.push({"id": "PHOENIX_FEATHER", "path": "./icon/Phoenix_plume.png", "label": "PF", "qengine": true});
    imgpathmap.push({"id": "SNAKE_JEWEL", "path": "./icon/Snake_jewel.png", "label": "SJ", "qengine": true});
    imgpathmap.push({"id": "SEED_OF_YGGDRASIL", "path": "./icon/Yggdrasil_seed.png", "label": "SoY", "qengine": true});
    //Super rare drops
    imgpathmap.push({"id": "CLAW_OF_CHAOS", "path": "./icon/Talon_of_chaos.png", "label": "CoC", "qengine": true});
    imgpathmap.push({"id": "DRAGONS_REVERSE_SCALE", "path": "./icon/Dragons_reverse_scale.png", "label": "DRS", "qengine": true});
    imgpathmap.push({"id": "HEART_OF_A_FOREIGN_GOD", "path": "./icon/Heart_of_a_foreign_god.png", "label": "HFG", "qengine": true});
    //Special drops

    //Event drops
    //-- Nerofest
    imgpathmap.push({"id": "NERO_BRONZE", "path": "./icon/_event/Bronze_nero_medal.png", "label": "BNM", "qengine": false});
    imgpathmap.push({"id": "NERO_GOLD", "path": "./icon/_event/Gold_nero_medal.png", "label": "GNM", "qengine": false});
    //-- Moon Goddess
    imgpathmap.push({"id": "DUMPLING", "path": "./icon/_event/Dango.png", "label": "D", "qengine": false});
    imgpathmap.push({"id": "GOLDEN_DUMPLING", "path": "./icon/_event/Goldendango.png", "label": "RD", "qengine": false});
    //-- Halloween 2017
    imgpathmap.push({"id": "PETIT_CAKE", "path": "./icon/_event/Cupcake.png", "label": "PC", "qengine": false});
    imgpathmap.push({"id": "SWEET_CANDLE", "path": "./icon/_event/Sweet_candle.png", "label": "SC", "qengine": false});
    imgpathmap.push({"id": "MISCHIEVOUS_BAT", "path": "./icon/_event/Trick_bat.png", "label": "MB", "qengine": false});
    imgpathmap.push({"id": "PUMPKIN_LANTERN", "path": "./icon/_event/Pumpkin.png", "label": "PL", "qengine": false});

    //Misc
}

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

function loadEvent() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    console.log("loadEvent: Loading Event Quests - Halloween 2017");
    loadObject(event_halloween2017_obj, "event-halloween2017");
}

function loadQueryEngine() {
    initPathMap();
    console.log("loadQueryEngine: Preparing Query Engine");
    var tablecontents = "";
    var numitems = imgpathmap.length;
    for (var i = 0; i < numitems; i += 1) {
        //Retrieve the target Item ID
        var targetID = imgpathmap[i].id;
        var targetPath = imgpathmap[i].path;
        var targetLabel = imgpathmap[i].label;
        var targetqengine = imgpathmap[i].qengine;
        if (targetqengine) {
            var button = '<button type="button" onclick="getDropStats(\'' + targetID + '\', \'' + targetPath + '\', \'' + targetLabel + '\')">Run</button>';
            var tablerow = '';
            if (i % 7 == 0) {tablerow += '<tr>';}
            tablerow += '<th style="border-color: #444444"><hr>' + targetID + '<hr>' + '<img class="item" src="' + targetPath + '"><br>' + targetLabel + '<br>' + button + '</th>';
            if (i % 7 == 6) {tablerow += '</tr>';}
            tablecontents += tablerow;
        }
    }
    if (numitems % 7 != 6) {tablecontents += '</tr>';} //prevent malformed tables
    document.getElementById("query-engine-master").innerHTML = tablecontents;
}

//Loads log object into the HTML table located at tableid
function loadObject(logobj, tableid) {
    var tablehtml = "<tr><th>Location + Quest</th><th>AP</th><th>Col</th><th>Last Upd</th><th>#</th>";

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
                //Regular drops
                if (droplog[k].hasOwnProperty('drop')) {
                    var droplist = droplog[k].drop;
                    for (var l = 0; l < droplist.length; l += 1) {
                        if (targetID === droplist[l]) {
                            found = true;
                            break;
                        }
                    }
                }
                //Stack drops
                if (droplog[k].hasOwnProperty('stackdrop')) {
                    var stackdroplist = droplog[k].stackdrop;
                    for (var l = 0; l < stackdroplist.length; l += 1) {
                        if (targetID === stackdroplist[l].id) {
                            found = true;
                            break;
                        }
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
            //Handle stack drops here
            if (currdroplog.hasOwnProperty('stackdrop')) {
                for (var k = 0; k < currdroplog.stackdrop.length; k += 1) {
                    //Search for matches in the list of items
                    for (var l = 0; l < imgpathmap.length; l += 1) {
                        if (currdroplog.stackdrop[k].id === imgpathmap[l].id) {
                            numitemTOTAL[l] += currdroplog.stackdrop[k].stack;
                            if (!currdroplog.uplog) {
                                numitemUNLOG[l] += currdroplog.stackdrop[k].stack;
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
        tablehtml += '<tr><td>' + quest.qname + '</td><td>' + quest.ap + '</td><td>' + quest.column + '</td>';
        tablehtml += '<td>' + quest["last-upd"] + '</td>';
        tablehtml += '<td>' + numrunsUNLOG.toString() + ' [' + numrunsTOTAL.toString() + ']</td>';

        //Next, the drops
        for (var m = 0; m < imgpathmap.length; m += 1) {
            if (logItems[m] === 1) {
                var percentdecimalfix = 1; //default to 1 decimal place
                if ((numitemTOTAL[m] / numrunsTOTAL * 100) >= 100) {percentdecimalfix = 0;}
                var percent = (numitemTOTAL[m] / numrunsTOTAL * 100).toFixed(percentdecimalfix);
                if (numrunsTOTAL === 0) {percent = (0).toFixed(0);} //avoid NaN

                var apperdropdecimalfix = 1; //default to 1 decimal place
                if ((quest.ap.toString()/(numitemTOTAL[m] / numrunsTOTAL)) >= 100) {apperdropdecimalfix = 0;}
                var apperdrop = (parseInt(quest.ap)/(numitemTOTAL[m] / numrunsTOTAL)).toFixed(apperdropdecimalfix);
                if (numrunsTOTAL === 0 || numitemTOTAL[m] === 0) {apperdrop = "?";} //avoid NaN

                tablehtml += '<td>' + numitemUNLOG[m].toString() + ' [' + numitemTOTAL[m].toString() + ']<br>' + percent + '<span style="font-size:6px">%</span><br>' + apperdrop + '<span style="font-size:4px">AP</span></td>';
            }
        }

        tablehtml += '</tr>';
    }

    //Finally, write the table

    document.getElementById(tableid).innerHTML = tablehtml;
}

//Calculates stats for the given item ID
function getDropStats(itemID, itemPath, itemLabel) {
    var todisplay = "<p>Query Results:</p>";
    todisplay += '<p><span style="color:#FF0000">UNRELIABLE (0-5 Runs)</span><br><span style="color:#FF00AA">LACKING DATA (6-10 Runs)</span><br>';
    todisplay += '<span style="color:#CCAAFF">SOMEWHAT RELIABLE (11-25 Runs)</span><br><span style="color:#88CCFF">RATHER RELIABLE (26-50 Runs)</span><br>';
    todisplay += '<span style="color:#66DDFF">RELIABLE (51-75 Runs)</span><br><span style="color:#66EEDD">VERY RELIABLE (76-100 Runs)</span><br>';
    todisplay += '<span style="color:#66FFCC">EXTREMELY RELIABLE (>100 Runs)</span></p>';
    todisplay += '<div style="border: 1px solid #444444; padding: 2px">'
    todisplay += '<table><tr><th style="border-color: #222222"><hr>' + itemID + '<hr>' + '<img class="item" src="' + itemPath + '"><br>' + itemLabel + '</th></tr></table>'
    //Iterate through all accepted quests
    todisplay += getDropStatsQ(itemID, daily_saber_2017_10_obj);
    todisplay += getDropStatsQ(itemID, daily_lancer_2017_10_obj);
    todisplay += getDropStatsQ(itemID, daily_archer_2017_10_obj);
    todisplay += getDropStatsQ(itemID, daily_rider_2017_10_obj);
    todisplay += getDropStatsQ(itemID, daily_caster_2017_10_obj);
    todisplay += getDropStatsQ(itemID, daily_assassin_2017_10_obj);
    todisplay += getDropStatsQ(itemID, daily_berserker_2017_10_obj);
    todisplay += getDropStatsQ(itemID, free_fuyuki_obj);
    todisplay += getDropStatsQ(itemID, free_orleans_obj);
    todisplay += getDropStatsQ(itemID, free_septem_obj);
    todisplay += getDropStatsQ(itemID, free_okeanos_obj);
    todisplay += "</div>";
    document.getElementById("query-engine-result").innerHTML = todisplay;
}

function getDropStatsQ(itemID, logobj) {
    var toreturn = "";

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
        //If at least one occurrence of the item dropped, we will write a log.
        if (numitemcountTOTAL > 0) {
            var textcolor = "#FFFFFF"; //Color of text. Will change depending on the reliability of the data.
            if (numrunsTOTAL <= 5) {
                textcolor = "#FF0000";
            } else if (numrunsTOTAL <= 10) {
                textcolor = "#FF00AA";
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
            //First, the basic information
            toreturn += '<div style="border: 1px solid #222222; padding: 8px">'
            toreturn += '<h4 style="color:' + logobj.colors[0] + '; background-color:' + logobj.colors[1] + ';border-left: 4px solid ' + logobj.colors[0] + '; padding-left: 4px">' + quest.qname + '</h4>';
            toreturn += '<div class="useDIN" style="padding-left: 16px;color:' + textcolor + '">AP: ' + quest.ap + '<br>Number of runs: ' + numrunsTOTAL.toString() + '<br>';

            var percentdecimalfix = 1; //default to 1 decimal place
            if ((numitemcountTOTAL / numrunsTOTAL * 100) >= 100) {percentdecimalfix = 0;}
            var percent = (numitemcountTOTAL / numrunsTOTAL * 100).toFixed(percentdecimalfix);
            if (numrunsTOTAL === 0) {percent = (0).toFixed(0);} //avoid NaN

            var apperdropdecimalfix = 1; //default to 1 decimal place
            if ((quest.ap.toString()/(numitemcountTOTAL / numrunsTOTAL)) >= 100) {apperdropdecimalfix = 0;}
            var apperdrop = (parseInt(quest.ap)/(numitemcountTOTAL / numrunsTOTAL)).toFixed(apperdropdecimalfix);
            if (numrunsTOTAL === 0 || numitemcountTOTAL === 0) {apperdrop = "?";} //avoid NaN

            toreturn += 'Total # Drops: ' + numitemcountTOTAL.toString() + '<br>Drop Rate: ' + percent + '%<br>AP Per Drop: ' + apperdrop + '<span style="font-size:8px">AP</span></div>';
            toreturn += '</div>'
        }
    }
    return toreturn
}