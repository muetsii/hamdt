const RNG = require('../generator/RNG');

const CAT_ = 'placeholder';
const CAT_PHY = 'physical';
const CAT_EQU = 'equipment';
const CAT_BAK = 'bakemono';
const CAT_KUE = 'kueijin';
const CAT_KUE_DEM = 'kueijin:demon';
const CAT_KUE_SHI = 'kueijin:shintai';
const CAT_KUE_CHI = 'kueijin:chi';
const CAT_KUE_SOU = 'kueijin:soul';
const CAT_KUE_BIL = 'kueijin:bile-shintai';
const CAT_KUE_GDB = 'kueijin:godbody';
const CAT_KUE_OTH = 'kueijin:others';

// TODO: load from a file
//    constructor(name, tier, category, description, frequency=1, specialRule) {

function specialRuleRemoveSimilar(m) {
    const radyx = this.name.split(':')[0];
    for (let i=0; i<m.powers.length; i++) {
        if (m.powers[i].name != this.name && m.powers[i].name.split(':')[0] == radyx) {
            m.powers.splice(i, 1);
        }
    }
}

const PROB_AMMO = 0.3;
function specialRuleAddAmmo(m) {
    const ammo = POWERS.find( (p) => p.name = 'ammo');
    let opportunities = m.tier;
    while (opportunities>=0) {
        if (Math.random() < PROB_AMMO) {
            m.powers.addPower(ammo);
        } else {
            opportunities--;
        }
    }
}

function specialRuleRemoveAmmo(m) {
    m.powers.splice(m.powers.indexOf( (p) => p.name='ammo'), 1);
}

const POWERS = [
    {
        category: CAT_, tier: 0,
        name: '',
        description: '',
    },
    {
        category: CAT_, tier: 0,
        name: '',
        description: '',
    },
    {
        category: CAT_, tier: 0,
        name: '',
        description: '',
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'STR:1',
        description: 'Flojo: 1 en Fuerza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'DEX:1',
        description: 'Torpe: 1 en Destreza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'STA:1',
        description: 'Debilucho: 1 en Resistencia',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'PHY:1',
        description: 'Escuálido: 1 en Atributos Físicos',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'MEN:1',
        description: 'Lerdo: 1 en Atributos Mentales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.5,
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'SOC:1',
        description: 'Desagradable: 1 en Atributos Sociales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.2,
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'Combat:0',
        description: 'Inepto en combate: 0 en habilidades de combate',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 0,
        name: 'Athletics:0',
        description: 'Inepto en Atletismo: 0 en Atletismo',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'STR:3',
        description: ': 3 en Fuerza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'DEX:3',
        description: ': 3 en Destreza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'STA:3',
        description: ': 3 en Resistencia',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'PHY:3',
        description: ': 3 en Atributos Físicos',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.6,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'MEN:3',
        description: ': 3 en Atributos Mentales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.4,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'SOC:3',
        description: ': 3 en Atributos Sociales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.2,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'Combat:3',
        description: ': 3 en habilidades de combate',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 1,
        name: 'Athletics:3',
        description: ': 3 en Atletismo',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'STR:4',
        description: ': 4 en Fuerza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'DEX:4',
        description: ': 4 en Destreza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'STA:4',
        description: ': 4 en Resistencia',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'PHY:4',
        description: ': 4 en Atributos Físicos',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.6,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'MEN:4',
        description: ': 4 en Atributos Mentales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.4,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'SOC:4',
        description: ': 4 en Atributos Sociales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.2,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'Combat:4',
        description: ': 4 en habilidades de combate',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 2,
        name: 'Athletics:4',
        description: ': 4 en Atletismo',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'STR:5',
        description: ': 5 en Fuerza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'DEX:5',
        description: ': 5 en Destreza',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'STA:5',
        description: ': 5 en Resistencia',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'PHY:5',
        description: ': 5 en Atributos Físicos',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.6,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'MEN:5',
        description: ': 5 en Atributos Mentales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.5,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'SOC:5',
        description: ': 5 en Atributos Sociales',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.2,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'Combat:5',
        description: ': 5 en habilidades de combate',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_PHY, tier: 3,
        name: 'Athletics:5',
        description: ': 5 en Atletismo',
        specialRule: specialRuleRemoveSimilar,
    },

    // EQUIPMENT
    {
        category: CAT_EQU, tier: 0,
        name: 'Nothing',
        description: 'No lleva nada útil',
        specialRule: (m) => {
            m.powers = m.powers.filter((p) => p.category != CAT_EQU || p.name == this.name);
        }
    },
    {
        category: CAT_EQU, tier: 0,
        name: 'Naked',
        description: 'Va desnudo',
        freq: 0.2,
    },
    {
        category: CAT_EQU, tier: 0,
        name: 'Money',
        description: 'Lleva dinero',
    },
    {
        category: CAT_EQU, tier: 0,
        name: 'Tool',
        description: 'Lleva una herramienta que podría ser usada como un arma precaria',
    },
    {
        category: CAT_EQU, tier: 0,
        name: 'out of ammo',
        description: 'if the monster has firearms, the are out of ammo',
        specialRule: specialRuleRemoveAmmo,
    },
    {
        category: CAT_EQU, tier: 0,
        name: 'ammo',
        description: 'from their main weapon, if the monster does not have, from a type useful to the player',
        freq: 0.3,
    },
    {
        category: CAT_EQU, tier: 1,
        name: 'knuckles',
        description: '',
    },
    {
        category: CAT_EQU, tier: 1,
        name: 'baseball bat',
        description: '',
    },
    {
        category: CAT_EQU, tier: 1,
        name: 'knife',
        description: '',
    },
    {
        category: CAT_EQU, tier: 1,
        name: 'light pistol',
        description: '',
    },
    {
        category: CAT_EQU, tier: 1,
        name: 'stake',
        description: '',
        freq: 0.4,
    },
    {
        category: CAT_EQU, tier: 1,
        name: 'crossbow',
        description: '',
        freq: 0.3,
    },
    {
        category: CAT_EQU, tier: 2,
        name: 'sword',
        description: '',
    },
    {
        category: CAT_EQU, tier: 2,
        name: 'submachinegun',
        description: '',
        freq: 0.5,
    },
    {
        category: CAT_EQU, tier: 2,
        name: 'shotgun',
        description: '',
    },
    {
        category: CAT_EQU, tier: 3,
        name: 'rifle',
        description: '',
        freq: 0.2,
    },
    {
        category: CAT_EQU, tier: 2,
        name: 'ArmorClass:2',
        description: 'Class 2 armors, +2 soak, -1 Dex',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.5,
    },
    {
        category: CAT_EQU, tier: 3,
        name: 'axe',
        description: '',
    },
    {
        category: CAT_EQU, tier: 3,
        name: 'katana',
        description: '',
    },
    {
        category: CAT_EQU, tier: 3,
        name: 'assault rifle',
        description: '',
    },
    {
        category: CAT_EQU, tier: 3,
        name: 'semi-auto shotgun',
        description: '',
    },
    {
        category: CAT_EQU, tier: 3,
        name: 'ArmorClass:3',
        description: 'Class 3 armors, +3 soak, -1 Dex',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.5,
    },
    {
        category: CAT_EQU, tier: 3,
        name: 'grenade',
        description: '',
        freq: 0.4,
    },
    {
        category: CAT_EQU, tier: 4,
        name: 'ArmorClass:4',
        description: 'Class 4 armors, +4 soak, -2 Dex',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.5,
    },
    {
        category: CAT_EQU, tier: 5,
        name: 'ArmorClass:5',
        description: 'Class 5 armors, +5 soak, -3 Dex',
        specialRule: specialRuleRemoveSimilar,
        freq: 0.5,
    },

    // Bakemono
    {
        category: CAT_BAK, tier: 1,
        name: 'Armor',
        description: 'scaly and mottled skin, +3 soak',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Fuerza Monstruosa',
        description: '+5 Fuerza',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Furia asesina',
        description: 'Cinco puntos de chi demoníaco usables como los Kuejin. Puede tener naturaleza fuego',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Garras y colmillos',
        description: 'agravadas',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Miembros adicionales',
        description: 'tentáclos, zarcillos, patas de insecto... para hacer fintas',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Ojos de los Mil Infiernos',
        description: 'Muestran el Yomi. FdV a 8 para no paralizarse 5 turnos menos Astucia',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Piel resbaladiza',
        description: 'Mucosa. Ataques de Pelea o CC hacen la mitad de daño tras absorber. Presa +3 dificultad.',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Púas',
        description: '+2 absorción, ataques cuerpo a cuerpo hace tirada de abosrción o sufre la mitad del daño que caus, agravado.',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Púas +2',
        description: '+2 absorción, ataques cuerpo a cuerpo hace tirada de abosrción o sufre la mitad del daño que caus, agravado. Puede disparar las espinas haciendo Fue de daño',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Tumores venenosos',
        description: 'Al ser atacado con garras o colmillos, estallan soltando veneno. Tres niveles de daño. Ataques cuerpo a cuerpo igual si no se supera tirada de Destreza.',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Bitting Plague',
        description: 'Vomit insects, Stamina +3 aggravate damge, no amor soak. Can use twice a day',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Centipede\'s Kiss',
        description: 'Spit a poisonous needle. 3 dice damage, if one helth level is done, deactivated hallucinacin for the scene, and after another health level',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Fleshflow',
        description: 'Shapeshifting via self-fleshcrafting',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Hellis Beauty',
        description: '+3 Appearance',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Razor Tattoos',
        description: 'Str - 1 agg damage',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Spirit Eye',
        description: '1 wp -> look through the Wall',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Thousand Jaws',
        description: 'Several mouths in any body part. One extra attack Str +1 agg.',
    },

    // Kuei-jin
    {
        category: CAT_KUE, tier: 0,
        name: 'Dharma:0',
        description: 'chih mei',
        freq: 0.5,
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 1,
        name: 'Dharma:1',
        description: '',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 2,
        name: 'Dharma:2',
        description: '',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 3,
        name: 'Dharma:3',
        description: '',
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 4,
        name: 'Dharma:4',
        description: '',
        freq: 0.8,
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 5,
        name: 'Dharma:5',
        description: '',
        freq: 0.4,
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 6,
        name: 'Dharma:6',
        description: '',
        freq: 0.2,
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 7,
        name: 'Dharma:7',
        description: '',
        freq: 0.1,
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 8,
        name: 'Dharma:8',
        description: '',
        freq: 0.05,
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 9,
        name: 'Dharma:9',
        description: '',
        freq: 0.025,
        specialRule: specialRuleRemoveSimilar,
    },
    {
        category: CAT_KUE, tier: 10,
        name: 'Dharma:10',
        description: '',
        freq: 0.0125,
        specialRule: specialRuleRemoveSimilar,
    },
];

function addSequence(baseName, category, first, last, specialRule, freqs) {
    for(let i=first; i<=last; i++) {
        POWERS.push({
            name: baseName + ':' + i,
            category,
            tier: i,
            description: '',
            specialRule,
            freq: freqs && Array.isArray(freqs) ? freqs[i] : freqs,
        });
    }
}

addSequence(
    'BlackWind',
    CAT_KUE_DEM,
    1, 10,
);

addSequence(
    'DemonShintai',
    CAT_KUE_DEM,
    1, 10,
);

addSequence(
    'BlackMontain',
    CAT_KUE_DEM,
    1, 10,
);

addSequence(
    'Kiai',
    CAT_KUE_DEM,
    1, 10,
);

addSequence(
    'HellWeaving',
    CAT_KUE_DEM,
    1, 10,
);

addSequence(
    'BeastShintai',
    CAT_KUE_SHI,
    1, 10,
    undefined,
    0.4,
);

addSequence(
    'BloodShintai',
    CAT_KUE_SHI,
    1, 10,
);

addSequence(
    'BoneShintai',
    CAT_KUE_SHI,
    1, 10,
);

addSequence(
    'FleshSintai',
    CAT_KUE_SHI,
    1, 10,
);

addSequence(
    'JadeShintai',
    CAT_KUE_SHI,
    1, 10,
);

addSequence(
    'GhostFlameShintai',
    CAT_KUE_SHI,
    1, 10,
);

addSequence(
    'SmokeShintai',
    CAT_KUE_SHI,
    1, 10,
    undefined,
    0.5,
);

addSequence(
    'StormShintai',
    CAT_KUE_SHI,
    1, 10,
    undefined, 0.5,
);

addSequence(
    'Equilibrium',
    CAT_KUE_CHI,
    1, 10,
);

addSequence(
    'FengShui',
    CAT_KUE_CHI,
    1, 10,
    undefined, 0.3,
);

addSequence(
    'Tapestry',
    CAT_KUE_CHI,
    1, 10,
);

addSequence(
    'YangPrana',
    CAT_KUE_CHI,
    1, 10,
);

addSequence(
    'YinPrana',
    CAT_KUE_CHI,
    1, 10,
);

addSequence(
    'ChiiuMuh',
    CAT_KUE_SOU,
    1, 10,
);

addSequence(
    'Cultivation',
    CAT_KUE_SOU,
    1, 10,
);

addSequence(
    'Internalize',
    CAT_KUE_SOU,
    1, 10,
);

addSequence(
    'Mibasham',
    CAT_KUE_SOU,
    1, 10,
    undefined, 0.4,
);

addSequence(
    'Obligation',
    CAT_KUE_SOU,
    1, 10,
);

addSequence(
    'TzuWei',
    CAT_KUE_SOU,
    1, 10,
    undefined, 0.5,
);

addSequence(
    'BalefireShintai',
    CAT_KUE_BIL,
    1, 10,
);

addSequence(
    'DecayShintai',
    CAT_KUE_BIL,
    1, 10,
);

addSequence(
    'DiseaseShintai',
    CAT_KUE_BIL,
    1, 10,
);

addSequence(
    'PoisonShintai',
    CAT_KUE_BIL,
    1, 10,
);

addSequence(
    'RadiationShintai',
    CAT_KUE_BIL,
    1, 10,
);

addSequence(
    'GodbodyWater',
    CAT_KUE_GDB,
    1, 10,
    undefined, 0.1,
);

addSequence(
    'GodbodyMetal',
    CAT_KUE_GDB,
    1, 10,
    undefined, 0.1,
);

addSequence(
    'GodbodyEarth',
    CAT_KUE_GDB,
    1, 10,
    undefined, 0.1,
);

addSequence(
    'GodbodyWood',
    CAT_KUE_GDB,
    1, 10,
    undefined, 0.1,
);

addSequence(
    'GodbodyFire',
    CAT_KUE_GDB,
    1, 10,
    undefined, 0.1,
);

addSequence(
    'PrayerEating',
    CAT_KUE_OTH,
    1, 10,
    undefined, 0.3,
);

addSequence(
    'InwardWay',
    CAT_KUE_OTH,
    1, 10,
    undefined, 0.3,
);

addSequence(
    'TempestOfInward',
    CAT_KUE_OTH,
    1, 10,
    undefined, 0.3,
);

addSequence(
    'Focus',
    CAT_KUE_OTH,
    1, 10,
    undefined, 0.3,
);

module.exports = POWERS;
