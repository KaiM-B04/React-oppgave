const classesData = [
  {
    name: "Barbarian",
    description:
      "The strong embrace the wild that hides inside - keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage.",
    subclasses: ["Berserker", "Wildheart", "Wild Magic"],
    features: ["Unarmoured Defense", "Rage"],
  },

  {
    name: "Bard",
    description:
      "You know music is more than a fancy - it is power. Through study and adventure, you have mastered song, speech, and the magic within.",
    subclasses: ["College of Lore", "College of Valour", "College of Swords"],
    features: ["Bardic Inspiration"],
  },

  {
    name: "Cleric",
    description:
      "Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill.",
    subclasses: [
      "Life Domain",
      "Light Domain",
      "Trickery Domain",
      "Knowledge Domain",
      "Nature Domain",
      "Tempest Domain",
      "War Domain",
    ],
    features: ["Domain Spells"],
  },

  {
    name: "Druid",
    description:
      "Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms.",
    subclasses: [
      "Circle of the Moon",
      "Circle of the Land",
      "Circle of the Spores",
    ],
    features: ["Wildshape"],
  },

  {
    name: "Fighter",
    description:
      "Fighters have mastered the art of combat, wielding weapons with unmatched skill and wearing armour like a second skin.",
    subclasses: ["Battle Master", "Eldritch Knight", "Champion"],
    features: ["Second Wind (Action)", "Fighting Style"],
  },

  {
    name: "Monk",
    description:
      "Channel your cosmic enlightenment by deftly dodging and efficiently disassembling your foes through stunning strikes and a whirlwind of martial art attacks.",
    subclasses: [
      "Way of the Open Hand",
      "Way of Shadow",
      "Way of the Four Elements",
    ],
    features: [
      "Flurry of Blows (Action)",
      "Ki",
      "Unarmoured Defense",
      "Martial Arts: Dextrous Attacks",
      "Martial Arts: Deft Strikes",
      "Martial Arts: Bonus Unarmed Strike",
    ],
  },

  {
    name: "Paladin",
    description:
      "Fuelled by the Oaths you swore to uphold justice and righteousness, you are a beacon of hope in dark times.",
    subclasses: [
      "Oath of Devotion",
      "Oath of the Ancients",
      "Oath of Vengeance",
      "Oathbreaker",
    ],
    features: ["Channel Oath", "Lay on Hands", "Divine Sense"],
  },

  {
    name: "Ranger",
    description:
      "Rangers are unrivalled scouts and trackers, honing a deep connection with nature in order to hunt their favoured prey.",
    subclasses: ["Beast Master", "Hunter", "Gloom Stalker"],
    features: ["Favoured Enemy", "Natural Explorer"],
  },

  {
    name: "Rogue",
    description:
      "With stealth, skill and uncanny reflexes, a rogue's versatility lets them get the upper hand in almost any situation.",
    subclasses: ["Thief", "Arcane Trickster", "Assassin"],
    features: ["Sneak Attack (Melee)", "Sneak Attack (Ranged)"],
  },

  {
    name: "Sorcerer",
    description:
      "Sorcerers are natural spellcasters, drawing on inherent magic from a gift or bloodline.",
    subclasses: ["Draconic Bloodline", "Wild Magic", "Storm Sorcery"],
    features: ["Sorccery Points"],
  },

  {
    name: "Warlock",
    description:
      "Bound by a pact to an all-powerful patron, warlocks trade their loyalty for supernatural abilities and unique magic.",
    subclasses: ["The Fiend", "The Great Old One", "Archfey"],
    features: ["Eldritch Blast"],
  },

  {
    name: "Wizard",
    description:
      "Wizards master the arcane by specialising in individual schools of magic, combining ancient spells with modern research.",
    subclasses: [
      "Abjuration School",
      "Conjuration School",
      "Divination School",
      "Enchantment School",
      "Evocation School",
      "Necromancy School",
      "Illusion School",
      "Transmutation School",
    ],
    features: ["Arcane Recovery"],
  },
];

export default classesData;
