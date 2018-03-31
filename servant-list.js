var servantlist_obj_release = {
    "servants": [
        {
            "idnum": "001",
            "sicon": "shielder-mash.png",
            "ename": "Mash Kyrielight",
            "jname1": "マシュ・キリエライト",
            "cicon": "shielder-s.png",
            "rarity": "3-4",
            "deck": ["Q", "A", "A", "B", "B"],
            "deckhits": [2, 2, 1, 3],
            "np": "A",
            "starabs": "99",
            "stargen": "9.9%",
            "npcharge": ["0.84%", "3.0%"],
            "gender": "Female",
            "ess": "Earth",
            "alignment": "Lawful Good",
            "traits": ["Humanoid - Riding", "Weak to Enuma Elish"]
        },
        {
            "idnum": "002",
            "sicon": "saber-altria.png",
            "ename": "Altria Pendragon",
            "jname1": "アルトリア・ペンドラゴン",
            "cicon": "saber-g.png",
            "rarity": "5",
            "deck": ["Q", "A", "A", "B", "B"],
            "deckhits": [2, 2, 1, 3],
            "np": "B",
            "starabs": "102",
            "stargen": "10%",
            "npcharge": ["0.86%", "3.0%"],
            "gender": "Female",
            "ess": "Earth",
            "alignment": "Lawful Good",
            "traits": ["Altria - Dragon - Humanoid - King - Riding - Saberface", "Weak to Enuma Elish"]
        }
    ]
};

function loadServantList() {
    loadObject(servantlist_obj_release, "table-release");
}

function loadObject(obj, dest) {
    var str = '<tr><th>ID</th><th>Icon</th><th>Class</th><th>Rarity</th><th>Name</th><th>Deck</th><th>NP</th><th>Crit Star<br>Absorb | Gen</th><th>NP Charge<br>ATK | DEF</th><th>Gender</th><th>Attribute</th><th>Alignment</th><th>Extra Traits</th></tr>';
    for (i = 0; i < obj.servants.length; i += 1) {
        var servant = obj.servants[i];
        str += '<tr><td>' + servant.idnum + '</td><td><img class="servantmed" src="./sicon/' + servant.sicon + '"></td>';
        str += '<td><img class="cicon" src="./cicon/' + servant.cicon + '"></td><td>' + servant.rarity + '</td>';
        if (servant.hasOwnProperty('jname2')) {
            str += '<td>' + servant.ename + '<br>' + servant.jname1 + '<br>' + servant.jname2 + '</td>';
        } else {
            str += '<td>' + servant.ename + '<br>' + servant.jname1 + '</td>';
        }
        str += '<td>'
        for (j = 0; j < 5; j += 1) {
            var x = servant.deck[j];
            if (x === "Q") {
                str += '<div class="iconq">Q</div>';
            } else if (x === "A") {
                str += '<div class="icona">A</div>';
            } else if (x === "B") {
                str += '<div class="iconb">B</div>';
            }
        }
        str += '</td><td>';
        if (servant.np === "Q") {
            str += '<div class="iconq">Q</div>';
        } else if (servant.np === "A") {
            str += '<div class="icona">A</div>';
        } else if (servant.np === "B") {
            str += '<div class="iconb">B</div>';
        }
        str += '</td>';
        str += '<td>' + servant.starabs + ' | ' + servant.stargen + '</td><td>' + servant.npcharge[0] + ' | ' + servant.npcharge[1] + '</td>';
        str += '<td>' + servant.gender + '</td><td>' + servant.ess + '</td><td>' + servant.alignment + '</td><td>';
        for (k = 0; k < servant.traits.length; k += 1) {
            var t = servant.traits[k];
            str += t;
            str += '<br>';
        }
        str += '</td></tr>';
    }
    document.getElementById(dest).innerHTML = str;
}