const RNG = require('../generator/RNG');

const CAT_ = 'placeholder';
const CAT_PHY = 'physical';
const CAT_EQU = 'equipment';
const CAT_BAK = 'bakemono';

const PROB_AMMO = 0.3;

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
        specialRule: specialRuleRemoveSimilar
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
        specialRule: specialRuleRemoveSimilar
    },
    {
        category: CAT_EQU, tier: 4,
        name: 'ArmorClass:4',
        description: 'Class 4 armors, +4 soak, -2 Dex',
        specialRule: specialRuleRemoveSimilar
    },
    {
        category: CAT_EQU, tier: 5,
        name: 'ArmorClass:5',
        description: 'Class 5 armors, +5 soak, -3 Dex',
        specialRule: specialRuleRemoveSimilar
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
        description: 'Muestran el Yomi. FdV a 8 para no paralizarse 5 turnos menos AStucia',
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
        description: '1 wp -> look through the WAll',
    },
    {
        category: CAT_BAK, tier: 1,
        name: 'Thousand Jaws',
        description: 'Several mouths in any body part. One extra attack Str +1 agg.',
    },
];

module.exports = POWERS;
