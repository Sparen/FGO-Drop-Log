"use strict";

/* ----- ----- ----- ----- ----- CODE ----- ----- ----- ----- ----- */

//Map contiaining item string -> image path data
var imgpathmap = [];

// Given the global Image Path Map, pushes all standard drops into the array.
function initPathMap() {
    //Skill Up Gems
    imgpathmap.push({"id": "GEM_BL_SAB", "path": "./icon/ gem/Shiningsaber.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_LAN", "path": "./icon/ gem/Shininglancer.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_ARC", "path": "./icon/ gem/Shiningarcher.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_RID", "path": "./icon/ gem/Shiningrider.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_CAS", "path": "./icon/ gem/Shiningcaster.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_ASS", "path": "./icon/ gem/Shiningassassin.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_BL_BER", "path": "./icon/ gem/Shiningberserker.png", "label": "B", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_SAB", "path": "./icon/ gem/Magicsaber.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_LAN", "path": "./icon/ gem/Magiclancer.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_ARC", "path": "./icon/ gem/Magicarcher.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_RID", "path": "./icon/ gem/Magicrider.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_CAS", "path": "./icon/ gem/Magiccaster.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_ASS", "path": "./icon/ gem/Magicassassin.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_RD_BER", "path": "./icon/ gem/Magicberserker.png", "label": "B", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_SAB", "path": "./icon/ gem/Secretsaber.png", "label": "S", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_LAN", "path": "./icon/ gem/Secretlancer.png", "label": "L", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_ARC", "path": "./icon/ gem/Secretarcher.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_RID", "path": "./icon/ gem/Secretrider.png", "label": "R", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_CAS", "path": "./icon/ gem/Secretcaster.png", "label": "C", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_ASS", "path": "./icon/ gem/Secretassassin.png", "label": "A", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GEM_GD_BER", "path": "./icon/ gem/Secretberserker.png", "label": "B", "qengine": "ALWAYS"});
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
    imgpathmap.push({"id": "EXP_1_SAB", "path": "./icon/ exp/Ember-of-Wisdom---Brown-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_LAN", "path": "./icon/ exp/Ember-of-Wisdom---Brown-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_ARC", "path": "./icon/ exp/Ember-of-Wisdom---Brown-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_RID", "path": "./icon/ exp/Ember-of-Wisdom---Brown-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_CAS", "path": "./icon/ exp/Ember-of-Wisdom---Brown-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_ASS", "path": "./icon/ exp/Ember-of-Wisdom---Brown-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_1_BER", "path": "./icon/ exp/Ember-of-Wisdom---Brown-Berserker.png", "label": "B", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_SAB", "path": "./icon/ exp/Light-of-Wisdom---Brown-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_LAN", "path": "./icon/ exp/Light-of-Wisdom---Brown-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_ARC", "path": "./icon/ exp/Light-of-Wisdom---Brown-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_RID", "path": "./icon/ exp/Light-of-Wisdom---Brown-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_CAS", "path": "./icon/ exp/Light-of-Wisdom---Brown-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_ASS", "path": "./icon/ exp/Light-of-Wisdom---Brown-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_2_BER", "path": "./icon/ exp/Light-of-Wisdom---Brown-Berserker.png", "label": "B", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_SAB", "path": "./icon/ exp/Fire-of-Wisdom---Silver-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_LAN", "path": "./icon/ exp/Fire-of-Wisdom---Silver-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_ARC", "path": "./icon/ exp/Fire-of-Wisdom---Silver-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_RID", "path": "./icon/ exp/Fire-of-Wisdom---Silver-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_CAS", "path": "./icon/ exp/Fire-of-Wisdom---Silver-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_ASS", "path": "./icon/ exp/Fire-of-Wisdom---Silver-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_3_BER", "path": "./icon/ exp/Fire-of-Wisdom---Silver-Berserker.png", "label": "B", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_SAB", "path": "./icon/ exp/Blaze-of-Wisdom---Gold-Saber.png", "label": "S", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_LAN", "path": "./icon/ exp/Blaze-of-Wisdom---Gold-Lancer.png", "label": "L", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_ARC", "path": "./icon/ exp/Blaze-of-Wisdom---Gold-Archer.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_RID", "path": "./icon/ exp/Blaze-of-Wisdom---Gold-Rider.png", "label": "R", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_CAS", "path": "./icon/ exp/Blaze-of-Wisdom---Gold-Caster.png", "label": "C", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_ASS", "path": "./icon/ exp/Blaze-of-Wisdom---Gold-Assassin.png", "label": "A", "qengine": "NEVER"});
    imgpathmap.push({"id": "EXP_4_BER", "path": "./icon/ exp/Blaze-of-Wisdom---Gold-Berserker.png", "label": "B", "qengine": "NEVER"});
    //Common drops
    imgpathmap.push({"id": "DEADLY_POISONOUS_NEEDLE", "path": "./icon/Stinger_of_Certain_Death.png", "label": "DPN", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "DRAGON_FANG", "path": "./icon/Dragon_fang.png", "label": "DF", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "EVIL_BONE", "path": "./icon/Unlucky_bone.png", "label": "EB", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "FOOLS_CHAIN", "path": "./icon/Chain of Fools.png", "label": "FC", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MYSTIC_SPINAL_FLUID", "path": "./icon/Magical_Cerebrospinal_Fluid_icon.png", "label": "MSF", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PROOF_OF_HERO", "path": "./icon/Heros_proof.png", "label": "PoH", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "VOIDS_DUST", "path": "./icon/Voids_dust.png", "label": "VD", "qengine": "ALWAYS"});
    //Rare drops
    imgpathmap.push({"id": "ETERNAL_GEAR", "path": "./icon/Infinity_gear.png", "label": "EG", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "FORBIDDEN_PAGE", "path": "./icon/Forbidden_page.png", "label": "FP", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GHOST_LANTERN", "path": "./icon/Ghost_lantern.png", "label": "GL", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "GREAT_KNIGHT_MEDAL", "path": "./icon/Great Knight Medal.png", "label": "GKM", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "HOMUNCULUS_BABY", "path": "./icon/Homunculus_baby.png", "label": "HB", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "METEORIC_HORSESHOE", "path": "./icon/Meteoric_horseshoe.png", "label": "MH", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "OCTUPLET_CRYSTAL", "path": "./icon/Octuplet_twin_crystals.png", "label": "OC", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PHOENIX_FEATHER", "path": "./icon/Phoenix_plume.png", "label": "PF", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "REFINED_MAGATAMA", "path": "./icon/Kotan_Magatama.png", "label": "RM", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SERPENT_JEWEL", "path": "./icon/Snake_jewel.png", "label": "SJ", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SEED_OF_YGGDRASIL", "path": "./icon/Yggdrasil_seed.png", "label": "SoY", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SHELL_OF_REMINISCENCE", "path": "./icon/Seashell of Recollection.png", "label": "SoR", "qengine": "ALWAYS"});
    //Super rare drops
    imgpathmap.push({"id": "BLACK_BEAST_GREASE", "path": "./icon/Blacktallow.png", "label": "BBG", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "CLAW_OF_CHAOS", "path": "./icon/Talon_of_chaos.png", "label": "CoC", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "CURSED_BEAST_GALLSTONE", "path": "./icon/Cursed_Beast_Cholecyst.png", "label": "CBG", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "DRAGONS_REVERSE_SCALE", "path": "./icon/Dragons_reverse_scale.png", "label": "DRS", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "HEART_OF_A_FOREIGN_GOD", "path": "./icon/Heart_of_a_foreign_god.png", "label": "HFG", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "LAMP_OF_EVIL_SEALING", "path": "./icon/Lamp of Sealed Evil.png", "label": "LES", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "MYSTERIOUS_DIVINE_WINE", "path": "./icon/Mysterious_Divine_Wine.png", "label": "MDW", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "PRIMORDIAL_LANUGO", "path": "./icon/Primordial_Lanugo.png", "label": "PL", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SCARAB_OF_WISDOM", "path": "./icon/Scarab of Wisdom.png", "label": "SoW", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "SPIRIT_ROOT", "path": "./icon/Spiritroot.png", "label": "SR", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "TEARSTONE_OF_BLOOD", "path": "./icon/Tearstone of Blood.png", "label": "ToB", "qengine": "ALWAYS"});
    imgpathmap.push({"id": "WARHORSE_YOUNG_HORN", "path": "./icon/Warhorse Small Horn.png", "label": "WYH", "qengine": "ALWAYS"});
}

// Given the global Image Path Map, pushes all event drops into the array.
function initPathMapEvent() {
    //Event drops
    //-- Nerofest (all runs here)
    imgpathmap.push({"id": "NERO_BRONZE", "path": "./icon/ event/nerofest/Bronze_nero_medal.png", "label": "BNM", "qengine": "EVENT"});
    imgpathmap.push({"id": "NERO_SILVER", "path": "./icon/ event/nerofest/Silver_nero_medal.png", "label": "SNM", "qengine": "EVENT"});
    imgpathmap.push({"id": "NERO_GOLD", "path": "./icon/ event/nerofest/Gold_nero_medal.png", "label": "GNM", "qengine": "EVENT"});
    imgpathmap.push({"id": "CRIMSON_PETAL", "path": "./icon/ event/nerofest/Crimson_Petal.png", "label": "CP", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_CHEER_FOR_MASTER", "path": "./icon/ ce/Cheer_for_Master.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Moon Festival
    imgpathmap.push({"id": "DUMPLING", "path": "./icon/ event/moongoddess/Dango.png", "label": "D", "qengine": "EVENT"});
    imgpathmap.push({"id": "GOLDEN_DUMPLING", "path": "./icon/ event/moongoddess/Goldendango.png", "label": "RD", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_MOONLIGHT_FEST", "path": "./icon/ ce/Moonlight_icon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Halloween 2017
    imgpathmap.push({"id": "PETIT_CAKE", "path": "./icon/ event/halloween/Cupcake.png", "label": "PC", "qengine": "EVENT"});
    imgpathmap.push({"id": "SWEET_CANDLE", "path": "./icon/ event/halloween/Sweet_candle.png", "label": "SC", "qengine": "EVENT"});
    imgpathmap.push({"id": "MISCHIEVOUS_BAT", "path": "./icon/ event/halloween/Trick_bat.png", "label": "MB", "qengine": "EVENT"});
    imgpathmap.push({"id": "PUMPKIN_LANTERN", "path": "./icon/ event/halloween/Pumpkin.png", "label": "PL", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_TRICK_OR_TREAT", "path": "./icon/ ce/Trickicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_MAID_IN_HALLOWEEN", "path": "./icon/ ce/Maidicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_HALLOWEEN_PRINCESS", "path": "./icon/ ce/Princessicon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- GUDAGUDA 2017 [string constants have been greatly abbreviated to maintain sanity when scrolling horizontally]
    imgpathmap.push({"id": "HONNOJI_PT", "path": "./icon/ event/gudaguda/Honnoji.png", "label": "HP", "qengine": "EVENT"});
    imgpathmap.push({"id": "T_NASU", "path": "./icon/ event/gudaguda/Tsukumogami_nasu.png", "label": "TN", "qengine": "EVENT"});
    imgpathmap.push({"id": "YT_CHAWAN", "path": "./icon/ event/gudaguda/Youhen_tenmoku_chawan.png", "label": "YTC", "qengine": "EVENT"});
    imgpathmap.push({"id": "HIRA_GUMO", "path": "./icon/ event/gudaguda/Hiragumo.png", "label": "HG", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_OKITA", "path": "./icon/ ce/Okitaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_NOBU", "path": "./icon/ ce/Nobuicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_GUDAO", "path": "./icon/ ce/Gudaoicon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Christmas 2017 [string constants have been greatly abbreviated to maintain sanity when scrolling horizontally]
    imgpathmap.push({"id": "MINI_RIBBON", "path": "./icon/ event/christmas/Mini_ribbon.png", "label": "MR", "qengine": "EVENT"});
    imgpathmap.push({"id": "SILVER_BELL", "path": "./icon/ event/christmas/Silver_bell.png", "label": "SB", "qengine": "EVENT"});
    imgpathmap.push({"id": "GOLD_STAR", "path": "./icon/ event/christmas/Gold_star.png", "label": "GS", "qengine": "EVENT"});
    imgpathmap.push({"id": "M_SOCK", "path": "./icon/ event/christmas/Magic_sock.png", "label": "MS", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_HOLY_NIGHT_SIGN", "path": "./icon/ ce/Holynighticon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Saber Wars 2018 [string constants have been greatly abbreviated to maintain sanity when scrolling horizontally]
    imgpathmap.push({"id": "ALTRIUM", "path": "./icon/ event/saberwars/Altrium.png", "label": "アホ", "qengine": "EVENT"});
    imgpathmap.push({"id": "TRANSISTOR", "path": "./icon/ event/saberwars/Transistor.png", "label": "TG", "qengine": "EVENT"});
    imgpathmap.push({"id": "AP_LENS", "path": "./icon/ event/saberwars/Universallens.png", "label": "APL", "qengine": "EVENT"});
    imgpathmap.push({"id": "VACUUM_TUBE", "path": "./icon/ event/saberwars/Vacuumtube.png", "label": "VT", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_MYSTERIOUS_SUBSTANCE_BETA", "path": "./icon/ ce/Substancebetaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_MYSTERIOUS_SUBSTANCE_ALPHA", "path": "./icon/ ce/Substancealphaicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_PURELY_BLOOM", "path": "./icon/ ce/Purebloomicon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_STAR_OF_ALTRIA", "path": "./icon/ ce/Artoriastaricon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Valentines 2018 [Items are only here for reference as no logging is intended]
    //imgpathmap.push({"id": "CHOCO_COIN_ALL", "path": "./icon/ event/valentines/All-Coin.png", "label": "X", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_SABER", "path": "./icon/ event/valentines/Saber-Coin.png", "label": "S", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_LANCER", "path": "./icon/ event/valentines/Lancer-Coin.png", "label": "L", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_ARCHER", "path": "./icon/ event/valentines/Archer-Coin.png", "label": "A", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_RIDER", "path": "./icon/ event/valentines/Rider-Coin.png", "label": "R", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_CASTER", "path": "./icon/ event/valentines/Caster-Coin.png", "label": "C", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_ASSASSIN", "path": "./icon/ event/valentines/Assassin-Coin.png", "label": "A", "qengine": "EVENT"});
    //imgpathmap.push({"id": "CHOCO_COIN_BERSERKER", "path": "./icon/ event/valentines/Berserker-Coin.png", "label": "B", "qengine": "EVENT"});
    //imgpathmap.push({"id": "BAKING_CHOCOLATE", "path": "./icon/ event/valentines/Matchoco.png", "label": "BC", "qengine": "EVENT"});
    //-- Kara no Kyoukai 2018 [Items are only here for reference as no logging is intended]
    //imgpathmap.push({"id": "MINERAL_WATER", "path": "./icon/ event/karanokyoukai/mineralWater.png", "label": "MW", "qengine": "EVENT"});
    //imgpathmap.push({"id": "STRAWBERRY_IC", "path": "./icon/ event/karanokyoukai/strawberryIceCream.png", "label": "SIC", "qengine": "EVENT"});
    //imgpathmap.push({"id": "BLACK_CAT_FIGURINE", "path": "./icon/ event/karanokyoukai/blackCatFigurine.png", "label": "BCF", "qengine": "EVENT"});
    //-- Da Vinci 2018 [Manuscripts default to True image for contrast with background]
    imgpathmap.push({"id": "VITRUVIAN_MAN", "path": "./icon/ event/davinci/vitruvianMan.png", "label": "VM", "qengine": "EVENT"});
    imgpathmap.push({"id": "SELF_PORTRAIT", "path": "./icon/ event/davinci/selfPortrait.png", "label": "SP", "qengine": "EVENT"});
    imgpathmap.push({"id": "MONA_LISA", "path": "./icon/ event/davinci/monaLisa.png", "label": "ML", "qengine": "EVENT"});
    imgpathmap.push({"id": "MANUSCRIPT", "path": "./icon/ event/davinci/manuscriptTrue.png", "label": "M", "qengine": "EVENT"});
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
    //-- Rashomon [No Logging Intended]
    //-- Journey to the West [No Logging Intended]
    //-- Onigashima [No Logging Intended]
    //-- Summer 2018
    imgpathmap.push({"id": "FOOD", "path": "./icon/ event/summer/Food.png", "label": "F", "qengine": "EVENT"});
    imgpathmap.push({"id": "FRESH_WATER", "path": "./icon/ event/summer/Water.png", "label": "FW", "qengine": "EVENT"});
    imgpathmap.push({"id": "LUMBER", "path": "./icon/ event/summer/Wood.png", "label": "L", "qengine": "EVENT"});
    imgpathmap.push({"id": "STONE", "path": "./icon/ event/summer/Stone.png", "label": "S", "qengine": "EVENT"});
    imgpathmap.push({"id": "IRON", "path": "./icon/ event/summer/Iron.png", "label": "I", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_SUMMERTIME_MISTRESS", "path": "./icon/ ce/Summer Time Mistress_Icon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CEMENT", "path": "./icon/ event/summer/Cement.png", "label": "C", "qengine": "EVENT"});
    imgpathmap.push({"id": "OIL", "path": "./icon/ event/summer/Oil.png", "label": "O", "qengine": "EVENT"});
    imgpathmap.push({"id": "UISCE_ALLOY", "path": "./icon/ event/summer/Uisce Alloy.png", "label": "UA", "qengine": "EVENT"});
    imgpathmap.push({"id": "EADROM_ALLOY", "path": "./icon/ event/summer/Eadrom Alloy.png", "label": "EA", "qengine": "EVENT"});
    imgpathmap.push({"id": "REALTA_ALLOY", "path": "./icon/ event/summer/Realta Alloy.png", "label": "RA", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_CHALDEA_LIFESAVERS", "path": "./icon/ ce/Chaldea Lifesavers_Icon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Prisma Codes
    imgpathmap.push({"id": "EXPENSIVE_PUDDING", "path": "./icon/ event/prismacodes/High-Class Pudding.png", "label": "EP", "qengine": "EVENT"});
    imgpathmap.push({"id": "MAGICAL_BUSHIDO_MUSASHI", "path": "./icon/ event/prismacodes/Magical Bushido Musashi.png", "label": "MBM", "qengine": "EVENT"});
    imgpathmap.push({"id": "MR_LION_GO_TOY", "path": "./icon/ event/prismacodes/Lion Go-kun.png", "label": "LGT", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_KALEID_RUBY", "path": "./icon/ ce/Kaleid Ruby_Icon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_KALEID_SAPPHIRE", "path": "./icon/ ce/Kaleid Sapphire_Icon.png", "label": "CE", "qengine": "EVENT-CE"});
    imgpathmap.push({"id": "CE_MAGICAL_RUBY", "path": "./icon/ ce/Magical Ruby_Icon.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Halloween 2018
    imgpathmap.push({"id": "BAG_OF_COPPER", "path": "./icon/ event/halloween/Bag of Copper.png", "label": "BoC", "qengine": "EVENT"});
    imgpathmap.push({"id": "BAG_OF_SILVER", "path": "./icon/ event/halloween/Bag of Silver.png", "label": "BoS", "qengine": "EVENT"});
    imgpathmap.push({"id": "BAG_OF_GOLD", "path": "./icon/ event/halloween/Bag of Gold.png", "label": "BoG", "qengine": "EVENT"});
    imgpathmap.push({"id": "HERO_SWORD", "path": "./icon/ event/halloween/Hero Sword.png", "label": "HS", "qengine": "EVENT"});
    imgpathmap.push({"id": "HERO_LANCE", "path": "./icon/ event/halloween/Hero Lance.png", "label": "HL", "qengine": "EVENT"});
    imgpathmap.push({"id": "HERO_BOW", "path": "./icon/ event/halloween/Hero Bow.png", "label": "HB", "qengine": "EVENT"});
    imgpathmap.push({"id": "HERO_MANTLE", "path": "./icon/ event/halloween/Hero Mantle.png", "label": "HM", "qengine": "EVENT"});
    imgpathmap.push({"id": "HERO_SHIELD", "path": "./icon/ event/halloween/Hero Shield.png", "label": "HS", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_WIZARD_AND_PRIEST", "path": "./icon/ ce/Wizard and Priest.png", "label": "CE", "qengine": "EVENT-CE"});
    //-- Christmas 2018
    imgpathmap.push({"id": "CHEESECAKE", "path": "./icon/ event/christmas/Cheesecake.png", "label": "CC", "qengine": "EVENT"});
    imgpathmap.push({"id": "SHORTCAKE", "path": "./icon/ event/christmas/Shortcake.png", "label": "SC", "qengine": "EVENT"});
    imgpathmap.push({"id": "FRUITCAKE", "path": "./icon/ event/christmas/Fruitcake.png", "label": "FC", "qengine": "EVENT"});
    imgpathmap.push({"id": "MIRACLE_STOCKING", "path": "./icon/ event/christmas/Miracle Stocking.png", "label": "MS", "qengine": "EVENT"});
    imgpathmap.push({"id": "CE_HOLY_NIGHT_SUPPER", "path": "./icon/ ce/Holy Night Dinner_Icon.png", "label": "CE", "qengine": "EVENT-CE"});
}

// Loads log object's drops into the HTML table located at tableid
// logobj parameter is a single log object with an array of quests.
function loadObject(logobj, tableid) {
    var tablehtml = "<tr><th>Location + Quest</th><th>AP</th><th>Col</th><th>Last Upd</th><th>Boss</th><th>#</th>";

    //We want to determine all the possible items that spawn given all occurrences in this object.
    //We will store this using a boolean array of size equivalent to that of imgpathmap
    //In the first run, all that will be done is log the items dropped.
    var numitems = imgpathmap.length;
    var logItems = getDropsInQuest(logobj);

    //Now that we know which items were dropped...
    //Populate the first row in the table.
    for (var i = 0; i < numitems; i += 1) {
        if (logItems[i] === 1) { //a hit
            tablehtml += '<th><img class="item" src="' + imgpathmap[i].path + '"><br>' + imgpathmap[i].label + '</th>';
        }
    }

    tablehtml += "</tr>";

    //Now we want to iterate through the quests and retrieve their data.
    for (var i = 0; i < logobj.quests.length; i += 1) {
        var quest = logobj.quests[i];
        //Gather data
        var questdata = getQuestDrops(quest);
        //Now that we've checked everything in the droplogs, let's create the table row for this quest
        tablehtml += generateQuestRow(quest, questdata, logItems, true, false);
    }

    //Finally, write the table
    document.getElementById(tableid).innerHTML = tablehtml;
}

// Returns an array of length equivalent to the number of items in the image path map.
// Each entry is 1 if found in log object's quest drops; 0 otherwise.
// logobj parameter is a single log object with an array of quests.
function getDropsInQuest(logobj) {
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
    return logItems;
}

// Returns an array of length equivalent to the number of items in the image path map.
// Each entry is 1 if found in quest drops; 0 otherwise.
// logobj parameter is a single log object with an array of quests.
function getDropsInQuestSingle(droplog) {
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
        if (found) {
            logItems.push(1);
        } else {
            logItems.push(0);
        }
    }
    return logItems;
}

// Retrieves quest data and returns it as an object.
// Takes a single quest object as a parameter
// Logs total number of runs, item drops, and item stacks (mapping of stack size to occurences)
function getQuestDrops(quest) {
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
    return {"numrunsUNLOG": numrunsUNLOG, "numrunsTOTAL": numrunsTOTAL, "numitemUNLOG": numitemUNLOG, "numitemTOTAL": numitemTOTAL, "numitemstackUNLOG": numitemstackUNLOG, "numitemstackTOTAL": numitemstackTOTAL};
}

// Given a quest, the counts for drops in the quest, and the log of items dropped in the quest, generates an HTML row
// To only show total counts, set unlogenable to false
// If dropsonly is true, only shows drops.
// Caller function should handle the table itsels as well as the table header.
function generateQuestRow(quest, questdata, logItems, unlogenable, dropsonly) {
    var rowhtml = "";
    //First, the basic information
    if (!dropsonly) {
        rowhtml += '<tr><td>' + quest.qname + '</td><td>' + quest.ap + '</td>';
        rowhtml += '<td>' + quest.column + '</td><td>' + quest["last-upd"] + '</td>';
        if (quest.hasOwnProperty('icon')) {
            rowhtml += '<td><img class="servantsmall" src="./sicon/' + quest["icon"] + '"></td>';
        } else {
            rowhtml += '<td></td>';
        }
        if (unlogenable) {
            rowhtml += '<td>' + questdata.numrunsUNLOG.toString() + ' [' + questdata.numrunsTOTAL.toString() + ']</td>';
        } else {
            rowhtml += '<td>' + questdata.numrunsTOTAL.toString() + '</td>';
        }
    }

    //Next, the drops
    for (var m = 0; m < imgpathmap.length; m += 1) {
        if (logItems[m] === 1) {
            var percentdecimalfix = 1; //default to 1 decimal place
            if ((questdata.numitemTOTAL[m] / questdata.numrunsTOTAL * 100) >= 100) {percentdecimalfix = 0;}
            var percent = (questdata.numitemTOTAL[m] / questdata.numrunsTOTAL * 100).toFixed(percentdecimalfix);
            if (questdata.numrunsTOTAL === 0) {percent = (0).toFixed(0);} //avoid NaN

            var apperdropdecimalfix = 1; //default to 1 decimal place
            if ((quest.ap.toString()/(questdata.numitemTOTAL[m] / questdata.numrunsTOTAL)) >= 100) {apperdropdecimalfix = 0;}
            var apperdrop = (parseInt(quest.ap)/(questdata.numitemTOTAL[m] / questdata.numrunsTOTAL)).toFixed(apperdropdecimalfix);
            if (questdata.numrunsTOTAL === 0 || questdata.numitemTOTAL[m] === 0) {apperdrop = "?";} //avoid NaN

            var stacksizetext = "";
            //Make the tooltip with stack size information iff the item was a stack item
            if (Object.keys(questdata.numitemstackTOTAL[m]).length !== 0) {
                stacksizetext += '<span class="tooltiptext">';
                stacksizetext += 'All Runs:<br>';
                for(var key in questdata.numitemstackTOTAL[m]) {
                    var value = questdata.numitemstackTOTAL[m][key];
                    stacksizetext += "Stack Size: " + key.toString() + "; Stack Drop #: " + value.toString() + "<br>";
                }
                if (unlogenable) {
                    stacksizetext += '<hr>Only Unlogged Runs:<br>';
                    for(var key in questdata.numitemstackUNLOG[m]) {
                        var value = questdata.numitemstackUNLOG[m][key];
                        stacksizetext += "Stack Size: " + key.toString() + "; Stack Drop #: " + value.toString() + "<br>";
                    }
                }
                stacksizetext += '</span>';
            }

            if (questdata.numitemTOTAL[m] > 0) {
                if (unlogenable) {
                    rowhtml += '<td><div class="tooltip">' + questdata.numitemUNLOG[m].toString() + ' [' + questdata.numitemTOTAL[m].toString() + ']<br>' + percent + '<span style="font-size:6px">%</span><br>' + apperdrop + '<span style="font-size:4px">AP</span>' + stacksizetext + '</div></td>';
                } else {
                    rowhtml += '<td><div class="tooltip">' + questdata.numitemTOTAL[m].toString() + '<br>' + percent + '<span style="font-size:6px">%</span><br>' + apperdrop + '<span style="font-size:4px">AP</span>' + stacksizetext + '</div></td>';
                }
            } else {
                rowhtml += '<td>-</td>';
            }
        }
    }
    rowhtml += '</tr>';
    return rowhtml;
}