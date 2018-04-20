"use strict";

/* ----- ----- ----- ----- ----- CODE ----- ----- ----- ----- ----- */

//Map contiaining item string -> image path data
var imgpathmap = [];

function initPathMap() {
    //Skill Up Gems
    imgpathmap.push({"id": "GEM_BL_SAB", "path": "./icon/Shiningsaber.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_LAN", "path": "./icon/Shininglancer.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_ARC", "path": "./icon/Shiningarcher.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_RID", "path": "./icon/Shiningrider.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_CAS", "path": "./icon/Shiningcaster.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_ASS", "path": "./icon/Shiningassassin.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_BER", "path": "./icon/Shiningberserker.png", "label": "B", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_SAB", "path": "./icon/Magicsaber.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_LAN", "path": "./icon/Magiclancer.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_ARC", "path": "./icon/Magicarcher.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_RID", "path": "./icon/Magicrider.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_CAS", "path": "./icon/Magiccaster.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_ASS", "path": "./icon/Magicassassin.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_BER", "path": "./icon/Magicberserker.png", "label": "B", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_SAB", "path": "./icon/Secretsaber.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_LAN", "path": "./icon/Secretlancer.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_ARC", "path": "./icon/Secretarcher.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_RID", "path": "./icon/Secretrider.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_CAS", "path": "./icon/Secretcaster.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_ASS", "path": "./icon/Secretassassin.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_BER", "path": "./icon/Secretberserker.png", "label": "B", "qengine": "ALWAYS"});
    //Ascension pieces
    imgpathmap.push({"id": "PIECE_XXX", "path": "./icon/Saber_piece.png", "label": "ANY", "qengine": "NEVER"});
    imgpathmap.push({"id": "PIECE_SAB", "path": "./icon/Saber_piece.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PIECE_LAN", "path": "./icon/Lancer_piece.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PIECE_ARC", "path": "./icon/Archer_piece.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PIECE_RID", "path": "./icon/Rider_piece.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PIECE_CAS", "path": "./icon/Caster_piece.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PIECE_ASS", "path": "./icon/Assassin_piece.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PIECE_BER", "path": "./icon/Berserker_piece.png", "label": "B", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MONU_XXX", "path": "./icon/Saber_monument.png", "label": "ANY", "qengine": "NEVER"});
    imgpathmap.push({"id": "MONU_SAB", "path": "./icon/Saber_monument.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MONU_LAN", "path": "./icon/Lancer_monument.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MONU_ARC", "path": "./icon/Archer_monument.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MONU_RID", "path": "./icon/Rider_monument.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MONU_CAS", "path": "./icon/Caster_monument.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MONU_ASS", "path": "./icon/Assassin_monument.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MONU_BER", "path": "./icon/Berserker_monument.png", "label": "B", "qengine": "ALWAYS"});
    //EXP Items
    imgpathmap.push({"id": "EXP_1_SAB", "path": "./icon/Ember-of-Wisdom---Brown-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_LAN", "path": "./icon/Ember-of-Wisdom---Brown-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_ARC", "path": "./icon/Ember-of-Wisdom---Brown-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_RID", "path": "./icon/Ember-of-Wisdom---Brown-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_CAS", "path": "./icon/Ember-of-Wisdom---Brown-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_ASS", "path": "./icon/Ember-of-Wisdom---Brown-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_BER", "path": "./icon/Ember-of-Wisdom---Brown-Berserker.png", "label": "B", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_SAB", "path": "./icon/Light-of-Wisdom---Brown-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_LAN", "path": "./icon/Light-of-Wisdom---Brown-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_ARC", "path": "./icon/Light-of-Wisdom---Brown-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_RID", "path": "./icon/Light-of-Wisdom---Brown-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_CAS", "path": "./icon/Light-of-Wisdom---Brown-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_ASS", "path": "./icon/Light-of-Wisdom---Brown-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_BER", "path": "./icon/Light-of-Wisdom---Brown-Berserker.png", "label": "B", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_SAB", "path": "./icon/Fire-of-Wisdom---Silver-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_LAN", "path": "./icon/Fire-of-Wisdom---Silver-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_ARC", "path": "./icon/Fire-of-Wisdom---Silver-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_RID", "path": "./icon/Fire-of-Wisdom---Silver-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_CAS", "path": "./icon/Fire-of-Wisdom---Silver-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_ASS", "path": "./icon/Fire-of-Wisdom---Silver-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_BER", "path": "./icon/Fire-of-Wisdom---Silver-Berserker.png", "label": "B", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_SAB", "path": "./icon/Blaze-of-Wisdom---Gold-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_LAN", "path": "./icon/Blaze-of-Wisdom---Gold-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_ARC", "path": "./icon/Blaze-of-Wisdom---Gold-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_RID", "path": "./icon/Blaze-of-Wisdom---Gold-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_CAS", "path": "./icon/Blaze-of-Wisdom---Gold-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_ASS", "path": "./icon/Blaze-of-Wisdom---Gold-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_BER", "path": "./icon/Blaze-of-Wisdom---Gold-Berserker.png", "label": "B", "qengine": "NEVER"});
    //Common drops
    imgpathmap.push({"id": "DRAGON_FANG", "path": "./icon/Dragon_fang.png", "label": "DF", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "EVIL_BONE", "path": "./icon/Unlucky_bone.png", "label": "EB", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PROOF_OF_HERO", "path": "./icon/Heros_proof.png", "label": "PoH", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "VOIDS_DUST", "path": "./icon/Voids_dust.png", "label": "VD", "qengine": "ALWAYS"});
    //Rare drops
    imgpathmap.push({"id": "ETERNAL_GEAR", "path": "./icon/Infinity_gear.png", "label": "EG", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "FORBIDDEN_PAGE", "path": "./icon/Forbidden_page.png", "label": "FP", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GHOST_LANTERN", "path": "./icon/Ghost_lantern.png", "label": "GL", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "HOMUNCULUS_BABY", "path": "./icon/Homunculus_baby.png", "label": "HB", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "METEORIC_HORSESHOE", "path": "./icon/Meteoric_horseshoe.png", "label": "MH", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "OCTUPLET_CRYSTAL", "path": "./icon/Octuplet_twin_crystals.png", "label": "OC", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PHOENIX_FEATHER", "path": "./icon/Phoenix_plume.png", "label": "PF", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SERPENT_JEWEL", "path": "./icon/Snake_jewel.png", "label": "SJ", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SEED_OF_YGGDRASIL", "path": "./icon/Yggdrasil_seed.png", "label": "SoY", "qengine": "ALWAYS"});
    //Super rare drops
    imgpathmap.push({"id": "BLACK_BEAST_GREASE", "path": "./icon/Blacktallow.png", "label": "BBG", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "CLAW_OF_CHAOS", "path": "./icon/Talon_of_chaos.png", "label": "CoC", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "DRAGONS_REVERSE_SCALE", "path": "./icon/Dragons_reverse_scale.png", "label": "DRS", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "HEART_OF_A_FOREIGN_GOD", "path": "./icon/Heart_of_a_foreign_god.png", "label": "HFG", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SPIRIT_ROOT", "path": "./icon/Spiritroot.png", "label": "SR", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "TEARSTONE_OF_BLOOD", "path": "./icon/Tearstone of Blood.png", "label": "ToB", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "WARHORSE_YOUNG_HORN", "path": "./icon/Warhorse Small Horn.png", "label": "WYH", "qengine": "ALWAYS"});
    //Special drops

    //Event drops
    //-- Nerofest
    imgpathmap.push({"id": "NERO_BRONZE", "path": "./icon/ event/Bronze_nero_medal.png", "label": "BNM", "qengine": "EVENT"});
    imgpathmap.push({"id": "NERO_GOLD", "path": "./icon/ event/Gold_nero_medal.png", "label": "GNM", "qengine": "EVENT"});
    //-- Moon Goddess
    imgpathmap.push({"id": "DUMPLING", "path": "./icon/ event/Dango.png", "label": "D", "qengine": "EVENT"});
    imgpathmap.push({"id": "GOLDEN_DUMPLING", "path": "./icon/ event/Goldendango.png", "label": "RD", "qengine": "EVENT"});
    //-- Halloween 2017
    imgpathmap.push({"id": "PETIT_CAKE", "path": "./icon/ event/Cupcake.png", "label": "PC", "qengine": "EVENT"});
    imgpathmap.push({"id": "SWEET_CANDLE", "path": "./icon/ event/Sweet_candle.png", "label": "SC", "qengine": "EVENT"});
    imgpathmap.push({"id": "MISCHIEVOUS_BAT", "path": "./icon/ event/Trick_bat.png", "label": "MB", "qengine": "EVENT"});
    imgpathmap.push({"id": "PUMPKIN_LANTERN", "path": "./icon/ event/Pumpkin.png", "label": "PL", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_TRICK_OR_TREAT", "path": "./icon/ ce/Trickicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_MAID_IN_HALLOWEEN", "path": "./icon/ ce/Maidicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_HALLOWEEN_PRINCESS", "path": "./icon/ ce/Princessicon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- GUDAGUDA 2017 [string constants have been greatly abbreviated to maintain sanity when scrolling horizontally]
    imgpathmap.push({"id": "HONNOJI_PT", "path": "./icon/ event/Honnoji.png", "label": "HP", "qengine": "EVENT"});
    imgpathmap.push({"id": "T_NASU", "path": "./icon/ event/Tsukumogami_nasu.png", "label": "TN", "qengine": "EVENT"});
    imgpathmap.push({"id": "YT_CHAWAN", "path": "./icon/ event/Youhen_tenmoku_chawan.png", "label": "YTC", "qengine": "EVENT"});
    imgpathmap.push({"id": "HIRA_GUMO", "path": "./icon/ event/Hiragumo.png", "label": "HG", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_OKITA", "path": "./icon/ ce/Okitaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_NOBU", "path": "./icon/ ce/Nobuicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_GUDAO", "path": "./icon/ ce/Gudaoicon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Christmas 2017 [string constants have been greatly abbreviated to maintain sanity when scrolling horizontally]
    imgpathmap.push({"id": "MINI_RIBBON", "path": "./icon/ event/Mini_ribbon.png", "label": "MR", "qengine": "EVENT"});
    imgpathmap.push({"id": "SILVER_BELL", "path": "./icon/ event/Silver_bell.png", "label": "SB", "qengine": "EVENT"});
    imgpathmap.push({"id": "GOLD_STAR", "path": "./icon/ event/Gold_star.png", "label": "GS", "qengine": "EVENT"});
    imgpathmap.push({"id": "M_SOCK", "path": "./icon/ event/Magic_sock.png", "label": "MS", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_HOLY_NIGHT_SIGN", "path": "./icon/ ce/Holynighticon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Saber Wars 2018 [string constants have been greatly abbreviated to maintain sanity when scrolling horizontally]
    imgpathmap.push({"id": "ALTRIUM", "path": "./icon/ event/Altrium.png", "label": "アホ", "qengine": "EVENT"});
    imgpathmap.push({"id": "TRANSISTOR", "path": "./icon/ event/Transistor.png", "label": "TG", "qengine": "EVENT"});
    imgpathmap.push({"id": "AP_LENS", "path": "./icon/ event/Universallens.png", "label": "APL", "qengine": "EVENT"});
    imgpathmap.push({"id": "VACUUM_TUBE", "path": "./icon/ event/Vacuumtube.png", "label": "VT", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_MYSTERIOUS_SUBSTANCE_BETA", "path": "./icon/ ce/Substancebetaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_MYSTERIOUS_SUBSTANCE_ALPHA", "path": "./icon/ ce/Substancealphaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_PURELY_BLOOM", "path": "./icon/ ce/Purebloomicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_STAR_OF_ALTRIA", "path": "./icon/ ce/Artoriastaricon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Valentines 2018 [Items are only here for reference as no logging is intended]
    //imgpathmap.push({"id": "CHOCO_COIN_ALL", "path": "./icon/ event/All-Coin.png", "label": "X", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_SABER", "path": "./icon/ event/Saber-Coin.png", "label": "S", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_LANCER", "path": "./icon/ event/Lancer-Coin.png", "label": "L", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_ARCHER", "path": "./icon/ event/Archer-Coin.png", "label": "A", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_RIDER", "path": "./icon/ event/Rider-Coin.png", "label": "R", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_CASTER", "path": "./icon/ event/Caster-Coin.png", "label": "C", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_ASSASSIN", "path": "./icon/ event/Assassin-Coin.png", "label": "A", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_BERSERKER", "path": "./icon/ event/Berserker-Coin.png", "label": "B", "qengine": "EVENT"});
    //imgpathmap.push({"id": "BAKING_CHOCOLATE", "path": "./icon/ event/Matchoco.png", "label": "BC", "qengine": "EVENT"});
    //-- Kara no Kyoukai 2018 [Items are only here for reference as no logging is intended]
    //imgpathmap.push({"id": "MINERAL_WATER", "path": "./icon/ event/mineralWater.png", "label": "MW", "qengine": "EVENT"});
    //imgpathmap.push({"id": "STRAWBERRY_IC", "path": "./icon/ event/strawberryIceCream.png", "label": "SIC", "qengine": "EVENT"});
    //imgpathmap.push({"id": "BLACK_CAT_FIGURINE", "path": "./icon/ event/blackCatFigurine.png", "label": "BCF", "qengine": "EVENT"});
    //-- Da Vinci 2018 [Manuscripts default to True image for contrast with background]
    imgpathmap.push({"id": "VITRUVIAN_MAN", "path": "./icon/ event/vitruvianMan.png", "label": "VM", "qengine": "EVENT"});
    imgpathmap.push({"id": "SELF_PORTRAIT", "path": "./icon/ event/selfPortrait.png", "label": "SP", "qengine": "EVENT"});
    imgpathmap.push({"id": "MONA_LISA", "path": "./icon/ event/monaLisa.png", "label": "ML", "qengine": "EVENT"});
    imgpathmap.push({"id": "MANUSCRIPT", "path": "./icon/ event/manuscriptTrue.png", "label": "M", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_SCHOLARS_OF_CHALDEA", "path": "./icon/ ce/Schoolchaldeaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_THE_MERCILESS_ONE", "path": "./icon/ ce/Empietaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_MAIDEN_LEADING_CHALDEA", "path": "./icon/ ce/Holymaidenchaldeaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Face/Accel Zero Order [string constants have been greatly abbreviated to maintain sanity when scrolling horizontally]
    imgpathmap.push({"id": "EMB_SAB", "path": "./icon/ event/accelzero/120_Saber Emblem.png", "label": "S", "qengine": "EVENT"});
    imgpathmap.push({"id": "EMB_LAN", "path": "./icon/ event/accelzero/122_Lancer Emblem.png", "label": "L", "qengine": "EVENT"});
    imgpathmap.push({"id": "EMB_ARC", "path": "./icon/ event/accelzero/121_Archer Emblem.png", "label": "A", "qengine": "EVENT"});
    imgpathmap.push({"id": "EMB_RID", "path": "./icon/ event/accelzero/123_Rider Emblem.png", "label": "R", "qengine": "EVENT"});
    imgpathmap.push({"id": "EMB_CAS", "path": "./icon/ event/accelzero/124_Caster Emblem.png", "label": "C", "qengine": "EVENT"});
    imgpathmap.push({"id": "EMB_ASS", "path": "./icon/ event/accelzero/125_Assassin Emblem.png", "label": "A", "qengine": "EVENT"});
    imgpathmap.push({"id": "EMB_BER", "path": "./icon/ event/accelzero/126_Berserker Emblem.png", "label": "B", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_CREST_WORMS", "path": "./icon/ ce/Crestwormsicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_HIS_RIGHTFUL_PLACE", "path": "./icon/ ce/Hisrightfulplaceicon.png", "label": "CE", "qengine": "EVENT-CE"});
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
    console.log("loadFree: Loading Free Quests - London");
    loadObject(free_london_obj, "free-london");
    console.log("loadFree: Loading Free Quests - E Pluribus Unum");
    loadObject(free_epu_obj, "free-epu");
}

function loadEvent() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    console.log("loadEvent: Loading Event Quests - Halloween 2017");
    loadObject(event_halloween2017_obj, "event-halloween2017");
    console.log("loadEvent: Loading Event Quests - GUDAGUDA 2017");
    loadObject(event_gudaguda2017_obj, "event-gudaguda2017");
    console.log("loadEvent: Loading Event Quests - Christmas 2017");
    loadObject(event_christmas2017_obj, "event-christmas2017");
    console.log("loadEvent: Loading Event Quests - Saber Wars 2018");
    loadObject(event_saberwars2018_obj, "event-saberwars2018");
    console.log("loadEvent: Loading Event Quests - Da Vinci 2018");
    loadObject(event_davinci2018_obj, "event-davinci2018");
    console.log("loadEvent: Loading Event Quests - Fate/Accel Zero Order 2018");
    loadObject(event_accelzero2018_objA, "event-accelzero2018A");
    loadObject(event_accelzero2018_objB, "event-accelzero2018B");
}

function loadHuntEvent() {
    initPathMap(); //Initialize Path Map to load image paths into the imgpathmap
    console.log("loadHuntEvent: Loading Hunting Quests Part 1");
    loadObject(event_hunting1_obj, "event-hunting1");
}

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

//Loads log object into the HTML table located at tableid
function loadObject(logobj, tableid) {
    var tablehtml = "<tr><th>Location + Quest</th><th>AP</th><th>Col</th><th>Last Upd</th><th>Boss</th><th>#</th>";

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
        //Same as above but used to store stack size data. Each element is an object mapping stack size to occurences
        var numitemstackUNLOG = [];
        var numitemstackTOTAL = [];
        //Initialize arrays for the current quest
        for (var j = 0; j < imgpathmap.length; j += 1) {
            numitemUNLOG.push(0);
            numitemTOTAL.push(0);
            numitemstackUNLOG.push({});
            numitemstackTOTAL.push({});
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
                            //Increment item count by the stack size
                            numitemTOTAL[l] += currdroplog.stackdrop[k].stack;
                            if (numitemstackTOTAL[l][currdroplog.stackdrop[k].stack] === undefined) {
                                numitemstackTOTAL[l][currdroplog.stackdrop[k].stack] = 1;
                            } else {
                                numitemstackTOTAL[l][currdroplog.stackdrop[k].stack] += 1;
                            }
                            if (!currdroplog.uplog) {
                                numitemUNLOG[l] += currdroplog.stackdrop[k].stack;
                                if (numitemstackUNLOG[l][currdroplog.stackdrop[k].stack] === undefined) {
                                    numitemstackUNLOG[l][currdroplog.stackdrop[k].stack] = 1;
                                } else {
                                    numitemstackUNLOG[l][currdroplog.stackdrop[k].stack] += 1;
                                }
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
        if (quest.hasOwnProperty('icon')) {
            tablehtml += '<td><img class="servantsmall" src="./sicon/' + quest["icon"] + '"></td>';
        } else {
            tablehtml += '<td></td>';
        }
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


                var stacksizetext = "";
                //Make the tooltip with stack size information iff the item was a stack item
                if (Object.keys(numitemstackTOTAL[m]).length !== 0) {
                    stacksizetext += '<span class="tooltiptext">';
                    stacksizetext += 'All Runs:<br>';
                    for(var key in numitemstackTOTAL[m]) {
                        var value = numitemstackTOTAL[m][key];
                        stacksizetext += "Stack Size: " + key.toString() + "; Stack Drop #: " + value.toString() + "<br>";
                    }
                    stacksizetext += '<hr>Only Unlogged Runs:<br>';
                    for(var key in numitemstackUNLOG[m]) {
                        var value = numitemstackUNLOG[m][key];
                        stacksizetext += "Stack Size: " + key.toString() + "; Stack Drop #: " + value.toString() + "<br>";
                    }
                    stacksizetext += '</span>';
                }

                if (numitemTOTAL[m] > 0) {
                    tablehtml += '<td><div class="tooltip">' + numitemUNLOG[m].toString() + ' [' + numitemTOTAL[m].toString() + ']<br>' + percent + '<span style="font-size:6px">%</span><br>' + apperdrop + '<span style="font-size:4px">AP</span>' + stacksizetext + '</div></td>';
                } else {
                    tablehtml += '<td>-</td>';
                }
            }
        }

        tablehtml += '</tr>';
    }

    //Finally, write the table

    document.getElementById(tableid).innerHTML = tablehtml;
}

//Calculates stats for the given item ID. Used in Query Engine.
function getDropStats(itemID, itemPath, itemLabel, eventflag) {
    var todisplay = "<p>Query Results:</p>";
    todisplay += '<table><tr><th><span style="color:#FF6666">UNRELIABLE</span></th><th><span style="color:#FF66AA">LACKING DATA</span></th><th><span style="color:#CCAAFF">SOMEWHAT RELIABLE</span></th><th><span style="color:#88CCFF">RATHER RELIABLE</span></th><th><span style="color:#66DDFF">RELIABLE</span></th><th><span style="color:#66EEDD">VERY RELIABLE</span></th><th><span style="color:#66FFCC">EXTREMELY RELIABLE</span></th></tr>';
    todisplay += '<tr><td><span style="color:#FF6666">0-5 Runs</span></td><td><span style="color:#FF66AA">6-10 Runs</span></td><td><span style="color:#CCAAFF">11-25 Runs</span></td><td><span style="color:#88CCFF">26-50 Runs</span></td><td><span style="color:#66DDFF">51-75 Runs</span></td><td><span style="color:#66EEDD">76-100 Runs</span></td><td><span style="color:#66FFCC">100 Runs</span></td></tr></table>';
    todisplay += '<div><span class="h-fuyuki">FUYUKI&nbsp;</span>&nbsp;<span class="h-orleans">ORLEANS&nbsp;</span>&nbsp;<span class="h-septem">SEPTEM&nbsp;</span>&nbsp;<span class="h-okeanos">OKEANOS&nbsp;</span>&nbsp;<span class="h-london">LONDON&nbsp;</span>&nbsp;<span class="h-epu">E PLURIBUS UNUM&nbsp;</span><br>';
    todisplay += '<span class="h-daily-knight1">DAILY (KNIGHT)&nbsp;</span>&nbsp;<span class="h-daily-cavalry1">DAILY (CAVALRY)&nbsp;</span>&nbsp;<span class="h-hunting">HUNTING&nbsp;</span><br>';
    todisplay += '<span class="h-gudaguda">GUDAGUDA&nbsp;</span>&nbsp;<span class="h-halloween">HALLOWEEN&nbsp;</span>&nbsp;<span class="h-christmas">CHRISTMAS&nbsp;</span>&nbsp;<span class="h-saberwars">SABER WARS&nbsp;</span>&nbsp;<span class="h-davinci">DA VINCI&nbsp;</span>&nbsp;<span class="h-accelzero">ACCEL ZERO&nbsp;</span></div><br>';
    todisplay += '<div style="border: 1px solid #444444; padding: 2px">'
    todisplay += '<table><tr><th style="border-color: #222222"><hr>' + itemID + '<hr>' + '<img class="item" src="' + itemPath + '"><br>' + itemLabel + '</th></tr></table>'
    //Iterate through all accepted quests
    //Ensure only the most recent daily quests are used
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
    todisplay += getDropStatsQ(itemID, free_london_obj);
    todisplay += getDropStatsQ(itemID, free_epu_obj);
    //If limited time quest checkbox is enabled
    if (document.getElementById("queryLTQCB").checked) {
        todisplay += getDropStatsQ(itemID, event_hunting1_obj);
    }
    //If the item is an event item or if the checkbox for viewing event data for all items is checked
    if (eventflag || document.getElementById("queryEventCB").checked) {
        todisplay += getDropStatsQ(itemID, event_halloween2017_obj);
        todisplay += getDropStatsQ(itemID, event_gudaguda2017_obj);
        todisplay += getDropStatsQ(itemID, event_christmas2017_obj);
        todisplay += getDropStatsQ(itemID, event_saberwars2018_obj);
        todisplay += getDropStatsQ(itemID, event_davinci2018_obj);
        todisplay += getDropStatsQ(itemID, event_accelzero2018_objA);
        todisplay += getDropStatsQ(itemID, event_accelzero2018_objB);
    }
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
            //First, the basic information
            toreturn += '<div style="border: 1px solid #222222; padding: 8px; background-color: #111111">'
            toreturn += '<h4 class="' + logobj.cssclass + '">' + quest.qname + ' [' + quest.ap + ' AP]</h4>';
            toreturn += '<div class="useDIN" style="padding-left: 16px; padding-top: 4px; color:' + textcolor + '">Number of runs: ' + numrunsTOTAL.toString();

            var percentdecimalfix = 1; //default to 1 decimal place
            if ((numitemcountTOTAL / numrunsTOTAL * 100) >= 100) {percentdecimalfix = 0;}
            var percent = (numitemcountTOTAL / numrunsTOTAL * 100).toFixed(percentdecimalfix);
            if (numrunsTOTAL === 0) {percent = (0).toFixed(0);} //avoid NaN

            var apperdropdecimalfix = 1; //default to 1 decimal place
            if ((quest.ap.toString()/(numitemcountTOTAL / numrunsTOTAL)) >= 100) {apperdropdecimalfix = 0;}
            var apperdrop = (parseInt(quest.ap)/(numitemcountTOTAL / numrunsTOTAL)).toFixed(apperdropdecimalfix);
            if (numrunsTOTAL === 0 || numitemcountTOTAL === 0) {apperdrop = "?";} //avoid NaN

            //Padding for slightly more uniform formatting. Not going beyond 1000 because it's pointless lol
            if (numrunsTOTAL >= 1000) {toreturn += '&nbsp;';} else if (numrunsTOTAL >= 100) {toreturn += '&nbsp;&nbsp;';} else if (numrunsTOTAL >= 10) {toreturn += '&nbsp;&nbsp;&nbsp;';} else {toreturn += '&nbsp;&nbsp;&nbsp;&nbsp;';}

            var runsperdrop = (apperdrop/parseInt(quest.ap)).toFixed(1);

            toreturn += 'Total # Drops: ' + numitemcountTOTAL.toString() + '<br>Drop Rate Per Run: ' + percent + '%<br>AP Per Drop: ' + apperdrop + '<span style="font-size:8px">AP</span>&nbsp;&nbsp;[' + runsperdrop + ' Runs per drop]</div>';
            toreturn += '</div>'
        }
    }
    return toreturn
}