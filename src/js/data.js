const numberToWordMap = {
  3: "three",
  4: "four",
  5: "five",
};
const star = [
  { name: 3 },
  { name: 4 },
  { name: 5 },
];

const classes = [
  { name: "Knight" },
  { name: "Mage" },
  { name: "Ranger" },
  { name: "Soul Weaver" },
  { name: "Thief" },
  { name: "Warrior" },
];

const element = [
  { name: "ice" },
  { name: "fire" },
  { name: "earth" },
  { name: "light" },
  { name: "dark" },
];

const buffs = [
  {
    name: "Increase Attack",
    effect: "Increases Attack by 50%.",
    type: "Buff",
  },
  {
    name: "Increase Defense",
    effect: "Increases Defense by 60%.",
    type: "Buff",
  },
  {
    name: "Invincible",
    effect: "Nullifies all damage.",
    type: "Buff",
  },
  {
    name: "Increase Speed",
    effect: "Increases Speed by 30%.",
    type: "Buff",
  },
  {
    name: "Immortal",
    effect: "Cannot die for a certain number of turns.",
    type: "Buff",
  },
  {
    name: "Barrier",
    effect: "When suffering damage, absorbs a certain amount of damage instead of Health.",
    type: "Buff",
  },
  {
    name: "Increase Critical Hit Resistance",
    effect: "Increase Critical Hit Resistance by 50%.",
    type: "Buff",
  },
  {
    name: "Continuous Heal",
    effect: "At the start of the tur, Recovers 15% of max Health. This effect can stack.",
    type: "Buff",
  },
  {
    name: "Counterattack",
    effect: "When attacked, the bearer immediately counterattacks the attacker with a basic skill. Cannot be triggered by extra attacks or counterattacks.",
    type: "Buff",
  },
  {
    name: "Stealth",
    effect: "When there are other allies, cannot be targeted. When suffering an attack that targets all allies, decreases damage suffered and is dispelled upon suffering damage from an attack.",
    type: "Buff",
  },
  {
    name: "Increase Critical Hit Chance",
    effect: "Increase Critical Hit Chance by 50%.",
    type: "Buff",
  },
  {
    name: "Immunity",
    effect: "Cannot be affected by any debuffs or some harmful effects.",
    type: "Buff",
  },
  {
    name: "Skill Nullifier",
    effect: "Nullifies damage from skills.",
    type: "Buff",
  },
  {
    name: "Increase Evasion",
    effect: "Increases Evasion by 50%.",
    type: "Buff",
  },
  {
    name: "Increase Attack (Greater)",
    effect: "Increases Attack by 75%.",
    type: "Buff",
  },
  {
    name: "Increase Critical Hit Damage",
    effect: "",
    type: "Buff",
  },
  {
    name: "Guardians Blessing",
    effect: "",
    type: "Buff",
  },
  {
    name: "Bubble",
    effect: "",
    type: "Buff",
  },
  {
    name: "Effect Resistance",
    effect: "",
    type: "Buff",
  },
  {
    name: "Effectiveness",
    effect: "",
    type: "Buff",
  },
  {
    name: "Weakness Shared",
    effect: "",
    type: "Buff",
  },
  {
    name: "Escort",
    effect: "",
    type: "Buff",
  },
  {
    name: "Exploiting Weak Points",
    effect: "",
    type: "Buff",
  },
  {
    name: "Vampirism",
    effect: "When attacking, absorbs 30% of damage dealt as Health.",
    type: "Buff",
  },
  {
    name: "Reflect",
    effect: "",
    type: "Buff",
  },
  {
    name: "Cleanse",
    effect: "",
    type: "Buff",
  },
  {
    name: "Deify",
    effect: "When attacking, increases Critical Hit Chance by 50%, and when attacked, decreases damage suffered by 50%. When more than one damage reduction effect is granted, only the strongest effect is applied. 5",
    type: "Buff",
  },


  {
    name: "Idol",
    effect: "My live show won't stop until my turn is over!",
    type: "Buff",
  },
  {
    name: "Vigor",
    effect: "Increases Attack and Defense by 30%.",
    type: "Buff",
  },
  {
    name: "Spirit's Blessing",
    effect: "Increases Effect Resistance by 60%.",
    type: "Buff",
  },
  {
    name: "Ice Cream",
    effect: "After being attacked, recovers 20% of max Health. Dispelled after being attacked.",
    type: "Buff",
  },
  {
    name: "Perception",
    effect: "Increases Critical Hit Chance and Critical Hit Damage by 15%",
    type: "Buff",
  },
  {
    name: "Indomitable",
    effect: "Increases Defense and Effect Resistance by 30%.",
    type: "Buff",
  },
  {
    name: "Rage",
    effect: "Increases Attack and Speed by 20%.",
    type: "Buff",
  },
  {
    name: "Multilayer Barrier",
    effect: "",
    type: "Buff",
  },
  {
    name: "Dual Attack",
    effect: "When an ally attacks with a basic skill, if the caster is able to act, attacks the same target with a basic attack. Cannot be triggered by counterattacks.",
    type: "Special",
  },
  {
    name: "Penetrate",
    effect: "Ignores the target's Defense when inflicting damage.",
    type: "Special",
  },
  {
    name: "Transfer",
    effect: "Transfers debuffs from the caster to the target.",
    type: "Special",
  },
  {
    name: "Extra Turn",
    effect: "Grants an extra turn.",
    type: "Special",
  },
  {
    name: "Detonate",
    effect: "Instantly activates designated debuffs inflicted on the enemy. Poison, Bleed, Burn, and Venom damages are proportional to the number of turns and guantitjy. Bomb damage is una fecte by the number of turns.",
    type: "Buff",
  },
  {
    name: "Random Buff",
    effect: "",
    type: "Buff",
  },
  {
    name: "Revive",
    effect: "Upon receiving lethal damage, revives with 3% of max Health.",
    type: "Buff",
  },
  {
    name: "Challenge",
    effect: "After counterattacking, when the target is a Hero, deals additional damage equivalent to 8% of the target's max Health. Dispelled after the effect activates and increases Speed of the bearer for 2 turns.",
    type: "Buff",
  }
];

const debuffs = [
  {
    name: "Decrease Defense",
    effect: "Decreases Defense by 70%.",
    type: "Debuff",
  },
  {
    name: "Decrease Speed",
    effect: "Decreases Speed by 30%.",
    type: "Debuff",
  },
  {
    name: "Decrease Attack",
    effect: "Decreases Attack by 50%.",
    type: "Debuff",
  },
  {
    name: "Stun",
    effect: "Cannot act for a certain number of turns.",
    type: "Debuff",
  },
  {
    name: "Unhealable",
    effect: "Cannot receive recover Health effects.",
    type: "Debuff",
  },
  {
    name: "Burn",
    effect: "At the start of the turn, suffers huge damage proportional to the caster's Attack.",
    type: "Debuff",
  },
  {
    name: "Cannot Buff",
    effect: "Cannot receive any buffs.",
    type: "Debuff",
  },
  {
    name: "Sleep",
    effect: "Cannot act for a certain number of turns. Decreases Critical Hit Resistance and Evasion by 100%, and when suffering damage from an attack, is dispeled.",
    type: "Debuff",
  },
  {
    name: "Poison",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Provoke",
    effect: "At the start of the turn, forcibly uses basic skill on the target that inflicted provoke.",
    type: "Debuff",
  },
  {
    name: "Decrease Critical Hit Resistance",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Decrease Hit Chance",
    effect: "Decreases Hit Chance by 50%",
    type: "Debuff",
  },
  {
    name: "Silence",
    effect: "When selecting a skill on the bearer's turn, cannot select skills other than the basic skill.",
    type: "Debuff",
  },
  {
    name: "Bleed",
    effect: "At the start of the turn, suffers damage proportional to the caster's Attack.",
    type: "Debuff",
  },
  {
    name: "Vampiric Touch",
    effect: "When attacked, recovers 10% of the attacker's max Health.",
    type: "Debuff",
  },
  {
    name: "Target",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Magic Nail",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Curse Boss",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Bomb",
    effect: "At the end of the duration, suffers damage proportional to the caster's Attack and is stunned for 1 turn. Duration cannot be extended or decreased, and stun effect ignores Effect Resistance.",
    type: "Debuff",
  },
  {
    name: "Curse",
    effect: "When an ally except for the bearer is attacked by Single Attack, additionally inflicts a portion of the damage on the bearer. The additional damage is infliced at the end of the turn.",
    type: "Debuff",
  },
  {
    name: "Restrict",
    effect: "Cannot receive Combat Readiness increase effects other than that provided by the Speed stat.",
    type: "Debuff",
  },
  {
    name: "Redirected Provoke",
    effect: "At the start of the turn, forcibly uses basic skill on the enemy with the highest max Health.",
    type: "Debuff",
  },
  {
    name: "Seal",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Stigma",
    effect: "Decreases amount recovered and the effect of Combat Readiness increases by 50%.",
    type: "Debuff",
  },
  {
    name: "Venom",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Frostbite",
    effect: "Cannot be subject to any damage reduction or damage sharing effects. Frostbite effect applies to Heroes only.",
    type: "Debuff",
  },
  {
    name: "Beguile",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Cannot Counterattack",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Block",
    effect: "",
    type: "Debuff",
  },
  {
    name: "Random Debuff",
    effect: "Inflicting a Random Debuff",
    type: "Debuff",
  },
  {
    name: "Rupture",
    effect: "When attacked, inflicts additional damage proportional to max Health. Applies to Heroes only.",
    type: "Debuff",
  },


  // { name: "Soul Steal",
  // effect: "",
  // type: "Debuff",
  // },
];

const specials = [
  {
    name: "Injury",
    effect: "Decreases max Health cumulatively, up to a maximum of 50%. Applies to Heroes only. Unaffected by Effect Resistance or whether or not the attack hits.",
    type: "Special",
  },
  {
    name: "Extinction",
    effect: "Targets killed by this skill cannot revive.",
    type: "Special",
  },
];

const characters = [
  {
    name: "Ras",
    star: 3,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "X-Slash",
        soul: "",
        cooldown: "",
        description: "Attacks with a sword, with 75% chance to dispel 3 buff. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Command Strike",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy repeatedly, before triggering a Dual Attack from the ally with the highest Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Sword of the Heir",
        soul: "",
        cooldown: "",
        description: "Strongly attacks all enemies with a swordstorm, before recovering the caster's Health and increasing Defense of the caster for 2 turns. Amount recovered and damage dealt increases proportional to the caster‘s max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense"],
      },
    },
  },

  {
    name: "Ludwig",
    star: 5,
    role: "Mage",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Starlight",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with magic, before a 60% chance to steal one buff. After attacking, when the caster has a buff, increases Combat Readiness by 15%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Moonlight Blow",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with light, decreasing buff durations by 1 turn before a 85% chance to stun for 1 turn. Grants the caster invincibility for 1 turn. After the attack, when the target is stunned, increases Combat Readiness of the caster by 50%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun", "Invincible"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Call of the Full Moon",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with Nocturne magic, and when an enemy is defeated, extends the caster's buff durations by 1 turn. Penetrates the target's Defense by 30%. When the caster is invincible, penetrates the target's Defense by an additional 30%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate", "Invincible"],
      },
    },
  },

  {
    name: "Krau",
    star: 5,
    role: "Knight",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Swordstorm",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a swordstorm, with a 50% chance to provoke for 1 turn. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Charge",
        soul: "",
        cooldown: "",
        description: "Shoves the enemy with a shield, decreasing Combat Readiness by 35%, before granting increased Defense to all allies for 2 turns. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Summon Ziegfried",
        soul: "",
        cooldown: "",
        description: "Summons the Guardian Ziegfried to attack, dealing damage proportional to the caster's lost Health, penetrating Defense. Also grants a barrier to the caster for 2 turns, with strength proportional to the caster's max Health. This attack cannot trigger a critical hit.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier", "Penetrate"],
      },
    },
  },

  {
    name: "Yuna",
    star: 5,
    role: "Ranger",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Homing Laser",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a drone, before increasing Combat Readiness of the caster by 15%, and increasing Combat Readiness of all allies except for the caster by 5%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Upgrade",
        soul: "",
        cooldown: "",
        description: "Buffs all allies with a drone and increases Attack and Speed for 3 turns. Grants an extra turn to the caster.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Speed", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Meteor Cannon",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a cannon. When there are three or fewer enemies, damage dealt increases with fewer enemies.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Iseria",
    star: 5,
    role: "Ranger",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Refined Flower",
        soul: "",
        cooldown: "",
        description: "Throws swords at the enemy, with a 35% chance to decrease Defense for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Oathkeeper",
        soul: "",
        cooldown: "",
        description: "Resets skill cooldown of an ally except for the caster with light energy. Grants an extra turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Full Bloom",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a giant Magic Sword, dispelling all buffs, before making them unable to be buffed and decreasing Defense for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff", "Decrease Defense"],
      },
    },
  },

  {
    name: "Summertime Iseria",
    star: 5,
    role: "Ranger",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Are you the Culprit?",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with swords, with a 60% chance each to dispel one buff twice.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Suppression Attempt",
        soul: "",
        cooldown: "",
        description: "Attack increases by 35%. When attacking, cannot trigger a critical hit. Does not cost any Souls to activate the caster's first Soulburn. After an ally except for the caster uses an attack that targets all enemies, activates Suppressl. Can only be activated once every 3 turns. Suppresslz Increases Combat Readiness of all allies by 15% and plants a bomb on two random enemies for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bomb"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Sword of Flowers!",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with swords of flowers, decreasing Attack for 2 turns and Increases Speed of the caster for 2 turns. At the end of the turn, detonates bombs inflicted on the enemy.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack", "Increase Speed", "Bomb", "Detonate"],
      },
    },
  },

  {
    name: "Destina",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Key to an Oath",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a staff and heals the ally with the lowest Health. Healing increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Regen",
        soul: "",
        cooldown: "",
        description: "Blesses an ally, dispelling two debuffs and recovering Health before increasing Combat Readiness by 30%. Healing increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Destina's Grace",
        soul: "",
        cooldown: "",
        description: "Grants all allies the blessing of a Spirit Lord, reviving all dead allies to 20% Health. For allies that are not dead, dispels all debuffs before recovering Health. Amount recovered increases proportional to the caster's max Health. At the start of the first battle, grants Spirit's Blessing to the caster for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Spirit's Blessing"],
      },
    },
  },

  {
    name: "Kayron",
    star: 5,
    role: "Thief",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Void Slash",
        soul: "",
        cooldown: "",
        description: "Attacks with a sword, with a 35% chance to decrease Hit Chance for 1 turn, dealing damage proportional to the caster's lost Health. When this skill is used, if it was not triggered by a Dual Attack and the caster has a buff, this skill changes into an attack that targets all enemies. The changed attack does not trigger a Dual Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Hit Chance"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Immortal Will",
        soul: "",
        cooldown: "",
        description: "Grants immortality and increased Evasion for 1 turn when the caster receives lethal damage and resets skill cooldown of Apocalypse. Can only be activated once every 9 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immortal", "Increase Evasion"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Apocalypse",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy by exploding the Archdemon's Mig t contained within the sword, before increasing Attack of the caster for 2 turns. When the enemy is defeated, extends the duration of any buffs already granted to the caster by 1 turn. Damage dealt increases proportional to the caster's lost Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
    },
  },

  {
    name: "Tenebria",
    star: 5,
    role: "Mage",
    element: "Fire",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Dark Explosion",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with an explosion of dark energy, with a 60% chance to put them thleep for 1 turn. When an enemy is put to sleep, the caster's Combat Readiness increases by 50%. This skill does not trigger a Dual Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Sleep"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Ominous Thunder",
        soul: "",
        cooldown: "",
        description: "Summons ominous thunder to attack all enemies, decreasing Combat Readiness by 20% and inflicting decreased Speed and restrict for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Speed", "Restrict"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Nightmare",
        soul: "",
        cooldown: "",
        description: "Drops Moon of Nightmare on all enemies, with a 70% chance each to decrease Defense for 2 turns and put them to sleep for 1 turn, before increasing Attack of the caster for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Sleep", "Increase Attack"],
      },
    },
  },

  {
    name: "Fairytale Tenebria",
    star: 5,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "One Pair",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a mystical power, with a 60% chance to inflict redirected provoke for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Redirected Provoke"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Wild Card",
        soul: "",
        cooldown: "",
        description: "When an ally is attacked by an enemy inflicted with provoke or redirected provoke, activates Shuffle. Shuffle can only be activated once per turn. Shuffle: Attacks all enemies and inflicts a random debuff for 1 turn. A successful attack against a target inflicted with provoke or redirected provoke inflicts additional damage. Additional damage increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Redirected Provoke", "Random Debuff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Tea Party",
        soul: "",
        cooldown: "",
        description: "Lures all enemies in with a tea party and attacks, dispelling one buff, making them unable to be buffed for 2 turns, and inflicting redirected provoke for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff", "Redirected Provoke"],
      },
    },
  },

  {
    name: "Tamarinne",
    star: 5,
    role: "Soul Weaver",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Serene Tune",
        soul: "",
        cooldown: "",
        description: "(Tamarinne) Attacks an enemy with a serene melody and heals the ally with the lowest Health. Amount recovered increases proportional to the ally's max Health. Decreases cooldown of Shining Stars? by 1 turn. (Idol) Attacks all enemies with a beautiful voice, dispelling all buffs. Triggers a Dual Attack from the ally with the highest Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Song of the Forest",
        soul: "",
        cooldown: "",
        description: "(Tamarinne) Heals all allies with a peaceful melody. Amount recovered increases proportional to the caster's max Health. Decreases cooldown of Shining Starr's by 1 turn. (Idol) With a powerful performance, increases Attack of all allies for 2 turns and increases Combat Readiness by 30%, recovering Health. Amount recovered increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Shining Star★",
        soul: "",
        cooldown: "",
        description: "Before performing, dispels all debuffs inflicted on all allies and recovers the caster to max Health and grants an extra turn. The caster becomes an idol for 3 turns and performs a concert. Begins the first battle with full cooldown count",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn", "Idol"],
      },
    },
  },

  {
    name: "Roana",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Soul Purification",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a noble power, granting a barrier to the ally with the lowest Health for 2 turns. Barrier strength increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Vigilant Eye",
        soul: "",
        cooldown: "",
        description: "Recovers Health of all allies when an ally is attacked by an extra attack, counterattack, or Dual Attack, and increases Combat Readiness of all allies by 5% each per attacked ally. Amount recovered is proportional to the caster's max Health and the number of attacked allies.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Noble Reckos",
        soul: "",
        cooldown: "",
        description: "With the grace of Rekos, recovers the Health of all allies and grants a barrier and revive for 2 turns. Amount recovered and barrier strength increase proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier", "Revive"],
      },
    },
  },

  {
    name: "Ravi",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Slaughter",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a double-edged axe, and absorbs some of the damage dealt as Health. A successful attack always results in a critical hit.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Demon's Blood",
        soul: "",
        cooldown: "",
        description: "Starts the first battle with 60 Fighting Spirit and increases Attack proportional to the caster's max Health. The rate of the increase Attack effect does not change after it is activated. After being attacked, increases Combat Readiness by 8% and after suffering a critical hit, dispels one debuff from the caster. Dispelling debuff effect can only be activated once per turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Devil Drive",
        soul: "",
        cooldown: "",
        description: "Brutally attacks all enemies, inflicting injuries before a 75% chance to stun for 1 turn. A successful attack always results in a critical hit. The severity of injuries increases proportional to damage dealt. Injuries decrease max Health of the target by up to 20% every time this skill is used.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Injury", "Stun"],
      },
    },
  },

  {
    name: "Lilias",
    star: 5,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Follow Me! Charge!",
        soul: "",
        cooldown: "",
        description: "Takes the lead to attack the enemy, and triggers a Dual Attack from a random ally. Increases Critical Hit Chance by 50% when attacking and damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "That's Far Enough!",
        soul: "",
        cooldown: "",
        description: "After an enemy uses a non-attack skill, dispels one debuff from the caster, and activates Suppression against the enemy caster. Suppression can only be activated once every 2 turns. Suppression: Provo es the target for 1 turn, and grants a barrier to the caster for 2 turns. Barrier strength increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Ready, Load, Fire!",
        soul: "",
        cooldown: "",
        description: "Dispels all debuffs from all allies and commands the Perland Army to attack by firing on all enemies before decreasing Combat Readiness by 25%. Increases Critical Hit Chance by 50% when attacking, inflicting damage according to the Attack of the Hero with the highest Attack. ",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Haste",
    star: 5,
    role: "Thief",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Envoy's Scythe",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with an enormous scythe, with a 40% chance to decrease Defense for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blood Rend",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a scythe, making them unhealable and inflicting vampiric touch for 2 turns, and recovers the Health of all allies. Amount recovered increases proportional to damage dealt.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Unhealable", "Vampiric Touch"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Vampiric Seal",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with Envoy's Scythe, dispelling two buffs before a 85% chance each to inflict two bleeding effects for 2 turns. A critical hit has a 70% chance to decrease Defense for 2 turns. When there are three or fewer enemies, damage dealt increases with fewer enemies. This skill cannot trigger a counterattack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Decrease Defense"],
      },
    },
  },

  {
    name: "Ken",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Knockout",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a flurry of strikes and has a 50% chance to decrease Defense for 2 turns. Burns the enemy for 2 turns when the caster is granted vigor. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "vigor", "Burn"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Celestial Kick",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a series of kicks, decreasing Defense for 2 turns before granting the caster increased Speed for 2 turns. When the caster is granted vigor, ignores Effect Resistance. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Speed", "Vigor"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Phoenix Flurry",
        soul: "",
        cooldown: "",
        description: "Attacks with a flurry of strikes before delivering a powerful blow, decreasing Attack for 2 turns and stunning for 1 turn. Grants vigor to the caster for 3 turns. Damage dealt increases proportional to the caster's max Health. At the start of the first battle, gains 4O Fighting Spirit.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack", "Stun", "Vigor"],
      },
    },
  },

  {
    name: "Cermia",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Playing with Fire!",
        soul: "",
        cooldown: "",
        description: "Attacks with a flaming sword, with a 55% chance to make the target unhealable for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Unhealable"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Hot Streak!",
        soul: "",
        cooldown: "",
        description: "Shoots fire, granting the caster increased Attack (Greater) for 2 turns, resetting the cooldown of All-in!, and granting an extra turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack (Greater)", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "All-In!",
        soul: "",
        cooldown: "",
        description: "Attacks with a blazing inferno, penetrating Defense by 50%",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate"],
      },
    },
  },

  {
    name: "Sol",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Defense",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Gunflame",
        soul: "",
        cooldown: "",
        description: "Attacks an enemy with pillars of fire. Damage dealt increases when the enemy isn't buffed. Activates Roman Cancel when the caster‘s Fighting Spirit is 100 after attacking. Cannot be triggered by a counterattack. Roman Cancel: Consumes all Fighting Spirit and extends the duration of buffs granted to the caster by 1 turn, before granting the caster an extra turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Volcanic Viper",
        soul: "",
        cooldown: "",
        description: "When an enemy uses a non-attack skill, increases Combat Readiness of the caster by 20% and gains 20 Fighting Spirit. When suffering an attack that targets all allies, activates Volcanic Viper against the attacker. This effect is not activated by a counterattack, Dual Attack, or extra attack. Each effect can only be activated once every 2 turns. Volcanic Viper (Acquire 2 Soul): Launches the enemy into the air and attacks repeatedly, inflicting silence for 2 turns. Damage dealt increases proportional to the enemy's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Tyrant Rave ver.Beta",
        soul: "",
        cooldown: "",
        description: "Attacks with a strong punch, dispelling all buffs before making them unable to be buffed for 2 turns. Damage dealt increases proportional to the enemy's max Health. After attacking, inflicts additional damage regardless of whether the attack hits.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
    },
  },

  {
    name: "Lilibet",
    star: 5,
    role: "Warrior",
    element: "Earth",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Slice-Slice",
        soul: "",
        cooldown: "",
        description: "Strikes and slices the enemy, with a 35% chance to make them unable to be buffed for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Snip-Snip",
        soul: "",
        cooldown: "",
        description: "Brutally cuts the enemy, with a 40% chance each to inflict three bleeding effects for 2 turns, before increasing Combat Readiness of the caster by 50%. When the target is bleeding after the attack, increases Combat Readiness of the caster by an additional 50%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Soul Cutter",
        soul: "",
        cooldown: "",
        description: "Slashes the enemy with Cho & Mal, before granting the caster skill nullifier once. When the enemy is defeated, inflicts extinction and decreases the caster's skill cooldown by 1 turn. Hit Chance is increased by 20% when using this skill.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Skill Nullifier", "Extinction"],
      },
    },
  },

  {
    name: "Baiken",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Tatami Gaeshi",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy repeatedly, with a 45% chance each to inflict two bleeding effects for 2 turns. A critical hit will reduce the caster's skill cooldowns by 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Tsurane Sanzu-watashi",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with expert swordsmanship, with a 55% chance each of inflicting three bleeding effects for 2 turns. One bleeding effect ignores Effect Resistance. A critical hit will grant an extra turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Garyo Tensei",
        soul: "",
        cooldown: "",
        description: "Delivers a deadly blow, detonating any bleeding effects inflicted on the enemy at the end of the turn. A critical hit increases the Combat Readiness of all allies by 15%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Detonate"],
      },
    },
  },

  {
    name: "Kawerik",
    star: 5,
    role: "Mage",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Spatial Relocation",
        soul: "",
        cooldown: "",
        description: "Approaches the enemy through subspace and attacks, before a 50% chance3to silence for 1 turn. Damage dealt increases proportional to the caster's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Dimensional Corridor",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy in a dimensional corridor, with a 75% chance each to dispel two buffs before increasing skill cooldowns by 1 turn twice. Grants stealth and increased Speed to the caster for 2 turns. Damage dealt increases proportional to the target's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stealth", "Increase Speed"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Dimensional Explosion",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with an explosion, silencing for 1 turn. Penetrates Defense by 30%. Damage dealt increases proportional to the caster's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "Penetrate"],
      },
    },
  },

  {
    name: "Diene",
    star: 5,
    role: "Soul Weaver",
    element: "ice",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Light of Judgment",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a ray of brilliant light, increasing the caster's Combat Readiness by 10%. Effect doubles when caster is buffed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blessings of th Goddess",
        soul: "",
        cooldown: "",
        description: "With the Blessings of the Goddess, dispels two debuffs from all allies and grants a barrier for 2 turns. Barrier strength increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Saint's Prayer",
        soul: "",
        cooldown: "",
        description: "A miracle of the Goddess manifests, increasing Attack and Critical Hit Resistance of all allies for 3 turns, before increasing the caster's Combat Readiness by 50%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Critical Hit Resistance"],
      },
    },
  },

  {
    name: "Laia",
    star: 5,
    role: "Warrior",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sing with Me!",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a sweet melody, and increases Combat Readiness of the caster by 10%. When The Spirit of Rock is unavailable due to cooldown count, triggers a Dual Attack from a random ally. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Sweet Cheers",
        soul: "",
        cooldown: "",
        description: "Dispels all debuffs from all allies and increases Combat Readiness by 15%, before decreasing skill cooldowns of all allies except for the caster by 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "The Spirit of Rock",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a bass. When the enemy is defeated, recovers Health of the caster and grants an extra turn. Penetrates the target's Defense, and cannot trigger a critical hit. Amount recovered and damage dealt increase proportional to the caster's max Health. Begins the first battle with full skill cooldown count, and when this skill is unavailable due to cooldown count, at the start of every turn, decreases all skill cooldowns by 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn", "Penetrate"],
      },
    },
  },

  {
    name: "Luluca",
    star: 5,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Wild Wave",
        soul: "",
        cooldown: "",
        description: "Attacks with intense elemental force, with a 50% chance to decrease Defense for 2 tui'ns. Damage dealt increases proportional to the amount of the enemy's lost Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Rekos's Blessing",
        soul: "",
        cooldown: "",
        description: "With the blessing of the stars, grants increased Defense and barrier to all allies for 2 turns. Barrier strength increases proportional to the caster's Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense", "Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Wave of vengeance",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with the power of ruin, with a 75% chance to decrease Defense for 2 turns, before increasing the caster's Attack. Increased Attack can stack up to 3 times.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
    },
  },

  {
    name: "Zeno",
    star: 5,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Effectievness",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Black Thron",
        soul: "",
        cooldown: "",
        description: "Attacks with thorns, with a 25% chance to stun for 1 turn. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Star's Armor",
        soul: "",
        cooldown: "",
        description: "When the enemy uses a non-attack skill, increases Defense of the caster and damage dealt by Ancient Beast by 7.0%, and increases Effectiveness by 5%. Can stack up to 8 times.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Ancient Beast",
        soul: "",
        cooldown: "",
        description: "Summons an ancient beast to attack all enemies, with a 65% chance to silence for 1 turn, and inflicts bleeding for 2 turns. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "Bleed"],
      },
    },
  },

  {
    name: "Ocean Breeze Luluca",
    star: 5,
    role: "Soul Weaver",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Order's in, Just wait!",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with overflowing energy, and increases Combat Readiness of the ally with the highest Combat Readiness except for the caster by 10%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "One Luluca's Special!",
        soul: "",
        cooldown: "",
        description: "After an enemy uses a non-attack skill, gains 2 Focus and increases Combat Readiness of the caster by 15%. Can only be activated once every 2 turns. After using a skill, when Focus is full, consumes all Focus and activates Luluca's Special Delivery. <br><br>Luluca's Special Delivery: Attacks all enemies who are interrupting her delivery, dispelling two buffs and an 85% chance to inflict silence for 1 turn and a 100% chance to decrease Hit Chance for 2 turns, before decreasing skill cooldowns of the caster by 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "Decrease Hit Chance"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "This One's on Me",
        soul: "",
        cooldown: "",
        description: "With quality customer service, dispels two debufiys from all allies and grants increased Defense for 2 turns and an ice cream.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Defense", "Ice Cream"],
      },
    },
  },

  {
    name: "Straze",
    star: 5,
    role: "Warrior",
    element: "Dark",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Powerfull Strike",
        soul: "",
        cooldown: "",
        description: "Swings a sword to attack the enemy and increases Combat Readiness of the caster by 20%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Destructive Gaze",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a wave of force and dispels two buffs. Ignores Effect Resistance of any targets with Attack lower than the caster's Attack. When there are three or fewer enemies, damage dealt increases with fewer enemies.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Star Extinction",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a sword. Penetrates Defense of the target with the highest max Health by 30%. When the caster's Attack is greater than the penetration target's Attack, penetration rate increases proportional to the difference, up to a maximum of 100%. Grants invincibility to the caster for 1 turn. This skill cannot trigger a counterattack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate", "Invincible"],
      },
    },
  },

  {
    name: "Zio",
    star: 5,
    role: "Mage",
    element: "Dark",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Let Me Destroy You",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a spear, before increasing Attack of the caster for 1 turn. When the caster is deified, activates Disappear as an extra attack. Disappear can only be activated once per turn, during the caster's turn. Disappear: Attacks the enemy with a swordstorm, and when the enemy is defeated, increases Combat Readiness of the caster by 50%. Penetrates the target's Defense by 50%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Deify", "Penetrate"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Supreme Authority",
        soul: "",
        cooldown: "",
        description: "At the start of the first battle, increases Combat Readiness by 10%. Unaffected by effects that reduce Combat Readiness increases the caster receives.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Bow Down Before Me",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy, dispelling two buffs before silencing for 1 turn and decreasing Combat Readiness by 30%. Grants deify to the caster for 3 turns. Penetrates the target's Defense by 100% and cannot trigger a critical hit. When the target is a Hero, damage dealt increases proportional to the target's current Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence", "deify", "Penetrate"],
      },
    },
  },

  {
    name: "Belian",
    star: 5,
    role: "Knight",
    element: "Light",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Light of Destruction",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a ray, with a 50% chance to dispel one buff. When used on the caster's turn, has a 35% chance to activate Incursion as an extra attack. Damage dealt increases proportional to the caster's max Health. incursion: Attacks all enemies, decreasing Speed and Hit Chance for 1 turn. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Speed", "Decrease Hit Chance"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Shackles of Suppression",
        soul: "",
        cooldown: "",
        description: "Decreases the amount of Soul acquired by the enemy by 100%. At the start of the turn, has a 70% chance to grant a random buff to the caster for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Random Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Apocalypse",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with the power of duties, decreasing Combat Readiness by a random amount between 20% and 40% and provokes for 1 turn. Increases Defense of the caster for 2 turns. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Increase Defense"],
      },
    },
  },

  {
    name: "Archdemon's Shadow",
    star: 5,
    role: "Mage",
    element: "Dark",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Touch of Chaos",
        soul: "",
        cooldown: "",
        description: "Has a 50% chance to seal the enemy for 2 turn, before attacking with lightning.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Seal"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Twisted Power",
        soul: "",
        cooldown: "",
        description: "Decreases damage suffered from a critical hit by 20%. When more than one damage reduction effect is granted, only the strongest effect is applied. After using Touch of Chaos, has a 40% chance to activate Burst. Effect chance is doubled when the target is sealed. Burst: Attacks all enemies, with a 60% chance to decrease Hit Chance for 1 turn, before increasing the caster's Combat Readiness by 25% and gaining 1 Focus.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Seal", "Decrease Hit Chance"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Dissolution",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with the power of Ilryos, with a 45% chance to decrease Defense for 2 turns, and a 75% chance each to inflict two burn effects for 2 turns. Grants the caster an extra turn. This skill cannot trigger a counterattack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Burn", "Extra Turn"],
      },
    },
  },

  {
    name: "Adin",
    star: 3,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Ankle Cut",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a sword, increasing Combat Readiness of the caster by 20%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blade Gust",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a blade gust, with an 80% chance to make them unable to be buffed for 2 turns. When there are three or fewer enemies, damage dealt increases with fewer enemies.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Lightning Bolt",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy repeatedly, granting increased Attack and Weakness Shared to the caster for 2 turns. A critical hit has a 75% chance to decrease Defense for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Weakness Shared", "Decrease Defense"],
      },
    },
  },

  {
    name: "Taeyou",
    star: 5,
    role: "Warrior",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Full Moon Slash",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a spear and increases Combat Readiness of the caster by 15%. Damage dealt increases proportional to the caster's Speed. When the caster is enraged, activates Tidal Crash as an extra attack. Tidal Crash can only be activated once per turn, during the caster's turn. Tidal Crash: Attacks the enemy by slashing downwards with a spear. Damage dealt increases proportional to the caster's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Rage"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Azure Wave Of The Ocean",
        soul: "",
        cooldown: "",
        description: "After an enemy uses a non-attack skill, dispels all debuffs from the caster and becomes enraged for 3 turns and grants skill nullifier once to the caster. Can only be activated once every 4 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Rage", "Skill Nullifier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Tornado Sweep",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies, dispelling all buffs, and increases skill cooldowns of the target with the highest Attack by 1 turn twice. Grants increased Attack and Speed to the caster for 2 turns. When the caster is enraged, ignores Effect Resistance.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Speed", "Rage"],
      },
    },
  },

  {
    name: "Arunka",
    star: 5,
    role: "Warrior",
    element: "Earth",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Dagger Throw",
        soul: "",
        cooldown: "",
        description: "Throws daggers at the enemy, with a 50% chance each to inflict two bleeding effects for 2 turns. A successful attack has a 50% chance to activate Expose as an extra attack. Expose can only be activated once per turn, during the caster's turn. Expose: Attacks the enemy, and recovers Health of the caster. Amount recovered increases proportional to the caster's Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Wild Instinct",
        soul: "",
        cooldown: "",
        description: "Attack increases by 30%. When attacking, cannot trigger a critical hit. At the end of an enemy's turn, when the target is granted a barrier, increases Combat Readiness of the caster by 5%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "A Trashing In The Prairie",
        soul: "",
        cooldown: "",
        description: "Runs up to the enemy to attack. When the enemy is defeated, inflicts extinction and resets cooldown of this skill. Penetrates the target's Defense by 70% and when the target is granted a barrier, increases damage dealt.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extinction", "Penetrate", "Barrier"],
      },
    },
  },

  {
    name: "Ran",
    star: 5,
    role: "Thief",
    element: "Ice",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Tempest",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a swordstorm. Penetrates the target's Defense by 20%. Damage dealt increases proportional to the caster's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Penetrate"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Mental Focus",
        soul: "",
        cooldown: "",
        description: "Grants immunity to all allies for 2 turns before increasing Attack of the caster for 2 turns. Grants an extra turn to the caster.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Increase Attack", "Extra Turn"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Instant Blade",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a sword, dispelling two buffs before a 80% chance to inflict stigma for 2 turns, and a 65% chance to decrease Defense for 2 turns. Grants skill nullifier once to the caster. Damage dealt increases proportional to the caster and the target's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stigma", "Decrease Defense", "Skill Nullifier"],
      },
    },
  },

  {
    name: "Vildred",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sweep",
        soul: "",
        cooldown: "",
        description: "Rapidly attacks two enemies with a swordstorm. Damage dealt increases proportional to the caster's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Dancing Blade",
        soul: "",
        cooldown: "",
        description: "Increases Attack of the caster for 2 turns and activates Dancing Blade when an enemy is defeated by Sweep or Blade Ascent. Increases Combat Readiness of the caster by 20% when an enemy is defeated. Dancing Blade (Acquire1 Soul): Attacks all enemies with a swordstorm.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Blade Ascent",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a swordstorm, dealing damage proportional to the caster's Speed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Aither",
    star: 3,
    role: "Soul Weaver",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Whispering Spirit",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with spirit power, with a 40% chance to decrease Speed for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Speed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Guard",
        soul: "",
        cooldown: "",
        description: "Recovers an ally's Health with water energy and dispels two debuffs, before increasing Combat Readiness of the caster by 20%. Amount recovered increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Spirit's Call",
        soul: "",
        cooldown: "",
        description: "Recovers Health of all allies and grants a barrier for 2 turns with spirit power. Amount recovered and barrier strength increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
    },
  },

  {
    name: "Charles",
    star: 5,
    role: "Knight",
    element: "Earth",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Slash",
        soul: "",
        cooldown: "",
        description: "Attacks with a giant sword, with a 50% chance to decrease Attack for 1 turn. After using this skill, has a 25% chance to activate Smash as an extra attack. Chance to activate Smash is doubled when the enemy is buffed.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Smash",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy repeatedly with a giant sword, with a 80% chance to dispel all buffs. Damage dealt increases proportional to number of buffs granted to the caster.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Faithfull Strike",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a swordstorm, increases Attack of all allies for 2 turns. Additionally increases Defense of the caster for 2 turns. When there are three or fewer enemies, damage dealt increases as enemies become fewer.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Defense"],
      },
    },
  },

  {
    name: "Alexa",
    star: 3,
    role: "Thief",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Fell",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy by cutting with dual-wielded swords. A critical hit will activate Lightning Bolt as an extra attack. Lightning Bolt can only be activated once per turn of the caster. Lightning Bolt (Acquire 1 Soul): Rapidly attacks the enemy by cutting with dual- wielded swords.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Cold Edge",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a cold blade, with a 80% chance each to inflict two poison effects for 2 turns, and increases the caster's Combat Readiness by 30%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Poison"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Crushing Blow",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy continuously, dealing damage proportional to the number of debuffs inflicted on the enemy.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Bask",
    star: 3,
    role: "Knight",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Protective Strike",
        soul: "",
        cooldown: "",
        description: "Slashes with a sword, with a 50% chance to decrease Attack for 1 turn. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Shield Blow",
        soul: "",
        cooldown: "",
        description: "Attacks with a shield, with a 85% chance to dispel all buffs. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Poison"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Will fo Protection",
        soul: "",
        cooldown: "",
        description: "Covers all allies with the Will of Protection, granting immunity for 3 turns, before granting a barrier to the caster for 3 turns. Barrier strength increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Barrier"],
      },
    },
  },

  {
    name: "Elson",
    star: 3,
    role: "Soul Weaver",
    element: "Light",
    imprint: {
      "release": "Defense",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Heavy Strike",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy, with a 50% chance to decrease Attack for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Meteor Shower",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with Meteor Shower of Light and recovers the Health of all allies. Healing increases proportional to the ally's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Light's Protection",
        soul: "",
        cooldown: "",
        description: "Recovers Health and increases Attack and Defense of all allies for 2 turns with strengthening magic. Amount recovered increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Defense"],
      },
    },
  },

  {
    name: "Maya",
    star: 4,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Defense",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Weakening Blow",
        soul: "",
        cooldown: "",
        description: "Attacks with a blunt weapon, with a 25% chance to stun for 1 turn. Damage dealt increases proportional to the caster's Defense.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Concuss",
        soul: "",
        cooldown: "",
        description: "Attacks with a shield, with a 80% chance each to stun for 1 turn before decreasing Combat Readiness by 30%. Damage dealt increases proportional to the caster's Defense.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Morale Boost",
        soul: "",
        cooldown: "",
        description: "Has a 60% chance to provoke all enemies for 1 turn, before a 85% chance to decrease Attack for 2 turns. Increases Defense of all allies for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Decrease Attack", "Increase Defense"],
      },
    },
  },

  {
    name: "Crozet",
    star: 4,
    role: "Knight",
    element: "Ice",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Defense",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Rush",
        soul: "",
        cooldown: "",
        description: "Attacks with a sword, with a 50% chance to decrease Attack for 1 turn. Damage dealt increases proportional to the caster's Defense.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Mark of Protection",
        soul: "",
        cooldown: "",
        description: "After an ally is attacked, when their Health is 50% or less, grants a barrier and increased Defense to the target for 2 turns. Barrier strength increases proportional to the target's max Health. Can only be activated once per turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier", "Increase Defense"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Breakthrough",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a swordstorm, decreasing their Combat Readiness by 35%, before a 75% chance to provoke for 1 turn. Damage dealt increases proportional to the caster's Defense.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke"],
      },
    },
  },

  {
    name: "Lorina",
    star: 3,
    role: "Warrior",
    element: "Dark",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sharp Blow",
        soul: "",
        cooldown: "",
        description: "Knocks the enemy into the air with a spear, increasing Combat Readiness of the caster by 20%. Damage dealt increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Spiritual Armament",
        soul: "",
        cooldown: "",
        description: "Increases Attack by 10.0% each time the caster attacks an enemy. Effect can only stack up to 5 times.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Resolve",
        soul: "",
        cooldown: "",
        description: "Jumps into the air and strikes down at the enemy, dealin%damage proportional to the amount of t e enemy's lost Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Achates",
    star: 4,
    role: "Soul Weaver",
    element: "Fire",
    imprint: {
      "release": "Defense%",        // SSS tier is ~10.8% defense :contentReference[oaicite:1]{index=1}
      "concentration": "Health%"    // SSS tier is ~12% health :contentReference[oaicite:2]{index=2}
    },
    skills: {
      skill_1: {
        number: 1,
        type: "Active",
        name: "Magic Design",
        soul: "+1 Soul",
        cooldown: "",
        description: "Attacks with a staff, with a 35‑50% chance to decrease Attack for 2 turns.",
        soulburn: { cost: "", effect: "" },
        trait: ["Decrease Attack"],
        skill_enhance: [
          { name: "+1", value: "+5%", effect: "damage dealt" },
          { name: "+2", value: "+5%", effect: "effect chance" },
          { name: "+3", value: "+10%", effect: "damage dealt" },
          { name: "+4", value: "+10%", effect: "effect chance" },
          { name: "+5", value: "+15%", effect: "damage dealt" }
        ]
      },
      skill_2: {
        number: 2,
        type: "Active",
        name: "Rapid Cure",
        soul: "+2 Souls",
        cooldown: "3 turns",
        description: "Recovers an ally's Health and grants a barrier for 1 turn, before decreasing the target's skill cooldown by 1 turn. Healing scales with caster's max Health.",
        soulburn: { cost: "", effect: "" },
        trait: ["Heal", "Invincibility", "Cooldown Reduction"],
        skill_enhance: [
          { name: "+1", value: "+5%", effect: "healing" },
          { name: "+2", value: "+5%", effect: "healing" },
          { name: "+3", value: "+5%", effect: "healing" },
          { name: "+4", value: "+5%", effect: "healing" },
          { name: "+5", value: "+10%", effect: "healing" }
        ]
      },
      skill_3: {
        number: 3,
        type: "Active",
        name: "Curing Prayer",
        soul: "+2 Souls",
        cooldown: "4 turns",
        description: "Dispels debuffs from all allies before healing them. Healing scales with caster's max Health.",
        soulburn: { cost: "-10 Souls", effect: "Increases heal amount" },
        trait: ["Cleanse", "Heal"],
        skill_enhance: [
          { name: "+1", value: "+5%", effect: "healing" },
          { name: "+2", value: "+5%", effect: "healing" },
          { name: "+3", value: "-1", effect: "turn cooldown" },
          { name: "+4", value: "+10%", effect: "healing" },
          { name: "+5", value: "+10%", effect: "healing" }
        ]
      }
    }
  },

  {
    name: "Angelica",
    star: 4,
    role: "Soul Weaver",
    element: "ice",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Holy Strike",
        soul: "",
        cooldown: "",
        description: "Attacks with a staff, with a 20% chance to stun for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Origin of Life",
        soul: "",
        cooldown: "",
        description: "Recovers ally's Health, as well as that of another ally with the least Health. with healing power. Amount recovered is proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Invincible"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Guide of the Goddess",
        soul: "",
        cooldown: "",
        description: "Recovers the Health of all allies and grants a barrier and immunity for 2 turns. Amount recovered and barrier strength are proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity", "Barrier"],
      },
    },
  },

  {
    name: "Clarissa",
    star: 4,
    role: "Warrior",
    element: "ice",
    imprint: {
      "release": "Attack",
      "concentration": "Dual Attack Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Harsh Lesson",
        soul: "",
        cooldown: "",
        description: "Attacks with a morning star, with a 35% chance to decrease Defense for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Rage",
        soul: "",
        cooldown: "",
        description: "The caster becomes enraged for 3 turns and activates Kya-hahaha when an enemy is defeated by Harsh Lesson or Hysteric. Kya-hahaha (Acquire 1 Soul): Attacks all enemies by swinging an iron mace.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Rage"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Hysteric",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies by spinning, inflicting two bleeding effects for 2 turns, with a 70% chance to decrease Defense for 2 turns. When an enemy is defeated, resets skill cooldown. When the caster is enraged, damage dealt is increased.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed", "Decrease Defense", "Rage"],
      },
    },
  },

  {
    name: "Montmorancy",
    star: 3,
    role: "Soul Weaver",
    element: "ice",
    imprint: {
      "release": "Defense",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sleep Sorcery",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with water energy, with a 65% chance to put them to sleep for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Sleep"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Purification",
        soul: "",
        cooldown: "",
        description: "Dispels one debuff from all allies, and heals debuffed allies. Amount recovered is proportional to the ally's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Watery Curtain",
        soul: "",
        cooldown: "",
        description: "Recovers ally's Health and grants immunity for 2 turns, before increasing the caster's Combat Readiness by 50%. Amount recovered increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Immunity"],
      },
    },
  },

  {
    name: "Corvus",
    star: 4,
    role: "Knight",
    element: "Fire",
    imprint: {
      "release": "Defense",
      "concentration": "Effect Resistance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Shield Slam",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy by shoving them with a shield, with a 50% chance to transfer one debuff from the caster to the enemy. When the caster is granted indomitable, damage dealt is increased and thesenemy is stunned for 1 turn. Damage dealt increases proportional to the caster's Defense.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Transfer", "Indomitable", "Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Macerate",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with an iron mace, decreasing Combat Readiness by 20%. When the enemy's Combat Readiness reaches 0, stuns for 1 turn. When the caster is granted indomitable, doubles the amount of Combat Readiness decrease. Damage dealt increases proportional to the caster's Defense.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun", "Indomitable"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Fury's Advent",
        soul: "",
        cooldown: "",
        description: "By discharging Fighting Spirit, grants indomitable to the caster for 3 turns and recovers Health before granting an extra turn. Begins the first battle with 50 Fighting Spirit. Gains ‘IO Fighting Spirit when attacked.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Indomitable", "Extra Turn"],
      },
    },
  },

  {
    name: "Enott",
    star: 3,
    role: "Warrior",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Ciritcal Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Smash",
        soul: "",
        cooldown: "",
        description: "Attacks with an axe, with a 30% chance to cause bleeding for 2 turns. Damage dealt increases proportional to the amount of the enemy's lost Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Bleed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Judgment",
        soul: "",
        cooldown: "",
        description: "Attacks with a sharp blow, with a 50% chance each to decrease Defense and make them unable to be buffed for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Cannot Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Prepare Judgment",
        soul: "",
        cooldown: "",
        description: "Corrects stance, increasing Attack and Critical Hit Chance of the caster for 2 turns and Combat Readiness by 30%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Critical Hit Chance"],
      },
    },
  },

  {
    name: "Jena",
    star: 3,
    role: "Mage",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiviness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Cold Blow",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a staff, with a 35% chance to stun for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Coerce",
        soul: "",
        cooldown: "",
        description: "Casts weakening magic, with a 75% chance each to decrease buff durations of all enemies by 1 turn and inflict frostbite for 2 turns. Grants immunity to all allies for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Frostbite", "Immunity"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Cold Snap",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with frost magic, with a 50% chance to decrease Defense for 2 turns before a 75% chance to decrease Combat Readiness by 20%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
    },
  },

  {
    name: "Byblis",
    star: 5,
    role: "Ranger",
    element: "Ice",
    imprint: {
      "release": "Health",
      "concentration": "Effectiviness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Floral Arrangement",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a magical flower, with a 50% chance to silence for 1 turn. After attacking, if the target is inflicted with silence, decreases Combat Readiness of the target by 20%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Silence"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Gardener's Secret",
        soul: "",
        cooldown: "",
        description: "When an ally suffers a counterattack, increases Combat Readiness of the caster by 20%, and activates I'm Warning You. I'm Warning You can only be activated once per turn. I'm Warning You: Attacks all enemies, decreasing buff durations by 2 turns and has a 60% chance to decrease Defense for 2 turns, before recovering Health of all allies. Amount recovered increases proportional to the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "A Larunda's Hospitality",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies with a specially prepared gift, decreasing buff durations by 1 turn and decreasing Hit Chance for turns, before removing 10 Soul. Grants a barrier to all allies for 2 turns. Barrier strength increases proportional to the target's Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Hit Chance", "Soul Steal", "Barrier"],
      },
    },
  },

  {
    name: "Blooming Lidica",
    star: 5,
    role: "Thief",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Twirling Thorns",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a sword, with a 30% chance to stun for 1 turn. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Seductive Scent",
        soul: "",
        cooldown: "",
        description: "Increases Speed proportional to the number of debuffs inflicted on all enemies, up to a maximum of 70%. After an ally except for the caster attacks, when the target has a debuff, activates Thorned Vine. Thorned Vine can only be activated once every 3 turns. Thorned Vine: Attacks all enemies, decreasing buff durations by 1 turn and making them unable to be buffed for 2 turns. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Fruit of Ecstasy",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a flower, and grants skill nullifier once to all allies. When the caster's Speed is greater than the target's Speed, penetrates the target's Defense, with penetration rate increasing proportional to the difference, up to a maximum of 100%. Damage dealt increases proportional to the caster's max Health. This attack cannot trigger a critical hit.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Skill Nullifier", "Penetrate"],
      },
    },
  },

  {
    name: "Abigail",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Ambush",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with bloodied wings, and increases Combat Readiness of the caster by 15%. When used on the caster's turn, has a 35% chance to activate Might as an extra effect. Damage dealt increases proportional to the caster's max Health. Might: Increases Combat Readiness of all allies by 15%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
        skill_enhance: [
          {
            name: "+1",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+2",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+3",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+4",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+5",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+6",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+7",
            value: "+10%",
            effect: "damage dealt",
          },
        ],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blood Banquet",
        soul: "",
        cooldown: "",
        description: "At the start of the turn, curses the enemy with the highest Attack for 1 turn. When the ally in the back row except for the caster receives lethal damage, consumes 30% of the caster's current Health, dispelling all debuffs from the target, before granting immortality and vampirims for 1 turn. Can only be activated once every 5 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Curse", "Immortal", "Vampirism"],
        skill_enhance: [
          {
            name: "+1",
            value: "-1",
            effect: "turn cooldown",
          },
        ],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Scarlet Garden",
        soul: "",
        cooldown: "",
        description: "After dispelling all buffs from the enemy, attacks with a field of bloody thorns, inflicting injuries. Increases Effectiveness of this attack by 50% and damage dealt proportional to the caster's max Health. The severity of injuries increases proportional to damage dealt. Injuries decrease max Health of the target by up to 25% every time this skill is used.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Injury"],
        skill_enhance: [
          {
            name: "+1",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+2",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+3",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+4",
            value: "-1",
            effect: "turn cooldown",
          },
          {
            name: "+5",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+6",
            value: "+5%",
            effect: "damage dealt",
          },
          {
            name: "+7",
            value: "+10%",
            effect: "damage dealt",
          },
        ],
      },
    },
  },

  {
    name: "Benimaru",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Move Out of the Way",
        soul: "",
        cooldown: "",
        description: "Cuts the enemy to attack. When the caster is granted Multilayer Barrier, increases damage dealt.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Multilayer Barrier"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Universal Perception",
        soul: "",
        cooldown: "",
        description: "At the start of the first battle, gains 50 Fighting Spirit. At the start of an enemy's extra turn, dispels all debuffs from the caster and grants Multilayer Barrier for 2 turns before increasing Combat Readiness by 25%. The effect following an enemy's extra turn can only be activated once every 2 turns. After attacking, when Fighting Spirit is full, consumes all Fighting Spirit to activate Hell Flare. Hell Flare: Attacks all enemies with a dark flame sphere. Penetrates the target's Defense by 30%, and when the caster is granted Multilayer Barrier, penetrates the target's Defense by an additional 30%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Extra Turn", "Multilayer Barrier", "Penetrate"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Show No Mercy",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy by slashing their soul, decreasing Defense for 2 turns, before increasing Combat Readiness of the ally with the highest Combat Readiness except for the caster by 15%. When the caster is granted Multilayer Barrier, acquired Fighting Spirit is doubled.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Multilayer Barrier"],
      },
    },
  },

  {
    name: "Edward Elric",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Effect Resistance",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "I'll Take You On!",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a transmuted blade, and grants a barrier to the caster for 1 turn. Damage dealt and barrier strength increase proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Equivalent Exchange",
        soul: "",
        cooldown: "",
        description: "After being attacked, when the caster has a debuff, dispels one debuff and activates Rise!. Rise! can only be activated once per turn. Rise!: Attacks all enemies with ground thorns, dispelling one buff and inflicting a random debuff for 2 turns, before increasing Combat Readiness of the caster by 20%. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Random Debuff"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "I'll Show You Our Difference!",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy together with Alphonse, and increases Combat Readiness of the caster by 50%. When the enemy is not an Elite or Boss monster, damage sharing effects are ignored. Damage dealt increases proportional to the caster's max Health. Damage dealt increases every time this skill is used and can stack up to 3 times.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Navy Captain Landy",
    star: 5,
    role: "Knight",
    element: "Light",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Precicion Targeting",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with gunfire, and increases Combat Readiness of the caster by 20%. After attacking, has a 40% chance to activate Salvo Fire as an extra attack. Salvo Fire: Attacks all enemies by firing off artillery, and recovers Health of the caster. Amount recovered increases proporfional to the caster's Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Ruler of the Sea",
        soul: "",
        cooldown: "",
        description: "Immune to debuffs which prevent movement and increases Critical Hit Resistance by 50%. At the start of battle, increases Critical Hit Resistance of all allies except for the caster for 2 turns. After attacking, increases Attack of the caster by 10%. This effect can stack up to 5 times.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Critical Hit Resistance"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Mobilize the Warship!",
        soul: "",
        cooldown: "",
        description: "After increasing Attack of the caster for 3 turns, attacks all enemies with a warship, stunning for 1 turn. Penetrates the target's Defense by 60%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Stun", "Penetrate"],
      },
    },
  },

  {
    name: "Conqueror Lilias",
    star: 5,
    role: "Warrior",
    element: "Light",
    imprint: {
      "release": "Attack",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Kneel Down",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a sword, triggering a Dual Attack from a random ally.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Cover!",
        soul: "",
        cooldown: "",
        description: "Distracts the enemy, decreasing Combat Readiness by 25%, with a 70% chance to inflict redirected provoke for 1 turn. Grants a barrier to the caster and the ally except for the caster with the highest max Health for 2 turns. Barrier strength increases proportional to the ally's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Redirected Provoke", "Barrier"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "For Honor!",
        soul: "",
        cooldown: "",
        description: "Encourages the Perland Army, granting vigor to all allies for 2 turns. Decreases buff duration of all enemies by 1 turn and has a 75% chance to decrease Attack for 2 turns. Grants an extra turn to the caster.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Vigor", "Decrease Attack", "Extra Turn"],
      },
    },
  },

  {
    name: "Harsetti",
    star: 5,
    role: "Mage",
    element: "Dark",
    imprint: {
      "release": "Defense",
      "concentration": "Health",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Gambit",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy, with a 60% chance to decrease Defense for 1 tum. When it is the caster's turn, uses En Passant as an extra attack. Damage dealt increases proportional to the caster's max Health. En Passant: Attacks all enemies, with a 60% chance to decrease Attack for 1 turn. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense", "Decrease Attack"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "The Law of Skuggiheim",
        soul: "",
        cooldown: "",
        description: "At the start of battle, Speed of the caster is fixed going forward, and Speed of all Heroes except for the caster is limited to a maximum of 90% of the caster's Speed. On the caster's turn, Combat Readiness increase effects of all Heroes is not applied. The Law of Skuggiheim only applies to PvP.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Checkmate",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies, decreasing buff duration by 2 turns and a 75% chance each to inflict unable to counterattack and unable to be buffed for 2 turns. Penetrates the target's Defense. When Focus is full, consumes it all, increasing damage dealt. Damage dealt increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Cannot Buff"],
      },
    },
  },

  {
    name: "Hazel",
    star: 3,
    role: "Soul Weaver",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Book of Fire",
        soul: "",
        cooldown: "",
        description: "Attacks with fire magic, with a 30% chance to make unhealable for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Unhealable"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Urgent Regen",
        soul: "",
        cooldown: "",
        description: "Heals the target proportional to the caster's Attack and the target's max Health, before increasing Combat Readiness of the caster by 15%. Amount recovered is doubled when the target's Health is 50% or less.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Attack Command",
        soul: "",
        cooldown: "",
        description: "Uses strengthening magic to increase Attack of all allies for 2 turns before recovering Health and dispelling one debuff. Amount recovered is proportional to the caster's Attack and the target's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
    },
  },

  {
    name: "Lucy",
    star: 3,
    role: "Soul Weaver",
    element: "Earth",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Paper Throw",
        soul: "",
        cooldown: "",
        description: "Throws paper to attack the enemy, with a 35% chance to restrict for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Restrict"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Paper Whrilwind",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies, with a 85% chance each to restrict and decrease Speed for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Restrict", "Decrease Speed"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Paper Barrier",
        soul: "",
        cooldown: "",
        description: "Uses many sheets of paper to recover Health of all allies and grant a barrier for 2 turns, before decreasing debuff durations by 1 turn. Amount recovered and barrier strength increase proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Barrier"],
      },
    },
  },

  {
    name: "Karin",
    star: 4,
    role: "Thief",
    element: "Ice",
    imprint: {
      "release": "Critical Hit Chance",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sequential Cutter",
        soul: "",
        cooldown: "",
        description: "Strikes the enemy with a sword. A critical hit will decrease skill cooldown by 1 tum.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Blade Art: Flash",
        soul: "",
        cooldown: "",
        description: "Slashes the enemy. A critical hit will decrease Defense for 1 turn and grant an extra turn to the caster.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Blade Art: Thunder",
        soul: "",
        cooldown: "",
        description: "Cuts the enemy with lightning speed. Damage dealt increases with a critical hit.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
    },
  },

  {
    name: "Azalea",
    star: 3,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Attack",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Presistent Attack",
        soul: "",
        cooldown: "",
        description: "Stabs the enemy with a spear and recovers Health of the caster. Amount recovered increases proportional to the caster's max Health.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Challenging Blow",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy, with a 80% chance each of provoking and making them unhealable for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke", "Unhealable"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Sweep",
        soul: "",
        cooldown: "",
        description: "Sweeps all enemies with a spear, with a 65% chance each to decrease Speed and Defense for 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Speed", "Decrease Defense"],
      },
    },
  },

  {
    name: "Closer Charles",
    star: 5,
    role: "Thief",
    element: "Dark",
    imprint: {
      "release": "Effectiveness",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Elimination",
        soul: "",
        cooldown: "",
        description: "Sharply cuts the enemy to attack. When used on the caster's turn, if the caster is granted perception, uses Demolition instead of Elimination. Demolition: Attacks the enemy with a sword. Damage dealt increases proportional to the target's lost Health. When the enemy is defeated, decreases cooldown of Descent by 1 turn. This attack does not trigger a Dual Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Perception"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Closer",
        soul: "",
        cooldown: "",
        description: "After an ally except for the caster attacks, if the enemy's Health is less than 30%, increases Combat Readiness of the caster by 35% and grants perception for 2 turns. Can only be activated once every 2 turns.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Perception"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Descent",
        soul: "",
        cooldown: "",
        description: "Attacks all enemies after descending, increasing Attack of all allies for 2 turns before increasing Combat Readiness by 20%. Increases Evasion of the caster for 3 turns. This skill cannot trigger a counterattack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Evasion"],
      },
    },
  },

  {
    name: "Fenris",
    star: 5,
    role: "Ranger",
    element: "Earth",
    imprint: {
      "release": "",
      "concentration": "",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Magic Arrow",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a magic arrow and increases Speed for 1 turn. When it is the caster's turn, gains 25 Fighting Spirit.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Speed"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Unwavering Will",
        soul: "",
        cooldown: "",
        description: "Starts the first battle with 50 Fighting Spirit. After an ally suffers an extra attack, counterattack, or Dual Attack, gains 50 Fighting Spirit and uses Soaring Arrow. The effect after being attacked can only be activated once every 2 turns. Soaring Arrow: Leaps backward and attacks all enemies, before dispelling one debuff from all allies. Increases Combat Readiness of the caster by 30%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Strike of Fate",
        soul: "",
        cooldown: "",
        description: "After granting increased Attack (Greater) of the caster for 3 turns, attacks the enemy with an arrow of resolution. When the enemy's max Health is greater than the caster's max Health, damage dealt increases proportional to the difference, up to a maximum of 70%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack (Greater)"],
      },
    },
  },

  {
    name: "Remnant Violet",
    star: 5,
    role: "Thief",
    element: "Dark",
    imprint: {
      "release": "Effectiveness",
      "concentration": "Critical Hit Chance",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Sword Flash",
        soul: "",
        cooldown: "",
        description: "Cuts the enemy, with a 75% chance to decrease Hit Chance for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Hit Chance"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Concentration",
        soul: "",
        cooldown: "",
        description: "Increases Evasion by 50%, and after successfully evading, gains 1 Focus. When Focus is at 5 after attacking or being attacked, consumes it all and uses Massacre against a random enemy.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Massacre",
        soul: "",
        cooldown: "",
        description: "Increases Attack of the caster for 3 turns, before attacking the enemy with a sword. Penetrates the target's Defense by 50%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Penetrate"],
      },
    },
  },

  {
    name: "Holiday Yufine",
    star: 5,
    role: "Warrior",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Just One Bite! ♡",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy by tearing up a food market, with a 60% chance to burn for 1 turn. When used on the caster's turn, Just One Bite! ♡ becomes an attack that targets all enemies. Changed attack is unaffected by elemental disadvantage and does not trigger a Dual Attack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Burn"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Let's Eat Together!",
        soul: "",
        cooldown: "",
        description: "Reduces the effect of Combat Readiness decreases inflicted on all allies by 30%. Increases Evasion by 35%, and when the caster is at max Health, increases Evasion by an additional 35%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [""],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Yufine's ☆ Special",
        soul: "",
        cooldown: "",
        description: "Dispels two debuffs from all allies and attacks all enemies in the middle of a night market. Increases Attack of all allies for 2 turns and Combat Readiness by 20%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack"],
      },
    },
  },

  {
    name: "Hellion Lua",
    star: 5,
    role: "Ranger",
    element: "Dark",
    imprint: {
      "release": "Health",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Lua Attack",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy and has a 85% chance to provoke for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Provoke"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Lua Squad",
        soul: "",
        cooldown: "",
        description: "After being attacked by a Hero, increases Combat Readiness of all allies by 7% and triggers a counterattack from all allies granted challenge.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Challenge"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Lua's Challenge",
        soul: "",
        cooldown: "",
        description: "Grants challenge to all allies, before increasing Defense of the caster for 2 turns. Decreases buff durations of all enemies by 1 turn and has a 70% chance to provoke for 1 turn.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Challenge", "Increase Defense", "Provoke", "Increase Speed"],
      },
    },
  },

  {
    name: "Afternoon Soak Flan",
    star: 5,
    role: "Ranger",
    element: "Fire",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Do Not Disturb",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a gun, with a 30% chance to stun for 1 turn. A successful attack always results in a critical hit. When used on the caster's turn, uses It's a Whopper! instead of Do Not Disturb. It's a Whopper!: Attacks all enemies, and gains 1 Focus. A successful attack always results in a critical hit. This skill does not trigger a Dual Attack or counterattack.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Stun"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "I'm Still On Vacation!",
        soul: "",
        cooldown: "",
        description: "At the start of the first battle, gains 3 Focus. Increases Evasion by 50%, and when Focus is 1 or higher, increases Evasion by an additional 50%. After an ally uses a basic skill, consumes 1 Focus, triggering a Dual Attack, and increases Combat Readiness of the caster by 15%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Dual Attack"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "In the Palm of My Hand",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy, decreasing Defense for 2 turns, and increases Combat Readiness of all allies by 20%. A successful attack always results in a critical hit.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Decrease Defense"],
      },
    },
  },

  {
    name: "Flan",
    star: 5,
    role: "Ranger",
    element: "Ice",
    imprint: {
      "release": "Attack",
      "concentration": "Effectiveness",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Communication Breakdown",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a gun, with a 50% chance to dispel one buff.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Data Monopoly",
        soul: "",
        cooldown: "",
        description: "Encourages an ally, increasing Attack and Critical Hit Damage for 2 turns before increasing Combat Readiness by 30%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Increase Critical Hit Damage"],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Advantageous Deal",
        soul: "",
        cooldown: "",
        description: "Drives a hard bargain against all enemies, making them unhealable and decreasing Defense for 2 turns before decreasing Combat Readiness by 15%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Unhealable", "Decrease Defense"],
      },
    },
  },

  {
    name: "Pirate Captain Flan",
    star: 5,
    role: "Ranger",
    element: "Dark",
    imprint: {
      "release": "Health",
      "concentration": "Attack",
    },
    skills: {
      skill_1: {
        number: 1,
        type: "",
        name: "Execution",
        soul: "",
        cooldown: "",
        description: "Attacks the enemy with a gun, with a 75% chance to steal one buff. At the end of the turn, detonates burn and bomb effects inflicted on the target.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Burn", "Bomb", "Detonate"],
      },
      skill_2: {
        number: 2,
        type: "",
        name: "Scourge of the Sea",
        soul: "",
        cooldown: "",
        description: "Effectiveness increases by 50%. When attacking, cannot trigger a critical hit. Redirects 30% of damage suffered by the caster to the foremost ally. When more than one damage sharing effect is granted, only the strongest effect is applied. After using Execution, when the caster has a buff, activates Hunt. Hunt can only be activated once every 2 turns. Hunt: Raises morale of all allies, increasing Combat Readiness by 10.0%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: [],
      },
      skill_3: {
        number: 3,
        type: "",
        name: "Full Burst",
        soul: "",
        cooldown: "",
        description: "Increases Attack of the caster for 3 turns and attacks all enemies with a barrage of cannon fire, inflicting burn and planting a bomb for 2 turns before decreasing Combat Readiness by 30%. Increases Combat Readiness of the caster by 50%.",
        soulburn: {
          cost: "",
          effect: "",
        },
        trait: ["Increase Attack", "Burn", "Bomb"],
      },
    },
  },
  {
    name: "Witch of the Mere Tenebria",
    star: 5,
    role: "Mage",
    element: "Light",
    imprint: {
      "release": "Health",
      "concentration": "Health"
    },
    skills: {
      skill_1: {
        number: 1,
        type: "Active",
        name: "Mirror Fragment",
        soul: "+1",
        cooldown: "",
        description: "Attacks the enemy with a mirror, with a 100% chance to inflict a random debuff (Poison, Decrease Speed, or Decrease Defense) for 1 turn. When Mirror of the Abyss is on cooldown, triggers a Dual Attack from the ally with the highest Attack. Grants an extra turn.",
        soulburn: {
          cost: "",
          effect: ""
        },
        trait: ["Random Debuff", "Extra Turn", "Dual Attack"]
      },
      skill_2: {
        number: 2,
        type: "Active",
        name: "Consuming Grasp",
        soul: "+2",
        cooldown: "3 turns",
        description: "After inflicting Rupture on all enemies for 2 turns, attacks all enemies and has a 75% chance to inflict Restrict for 2 turns. Grants stealth and a barrier (proportional to Level) to the caster for 2 turns.",
        soulburn: {
          cost: "",
          effect: ""
        },
        trait: ["Rupture", "Restrict", "Stealth", "Barrier"]
      },
      skill_3: {
        number: 3,
        type: "Active",
        name: "Mirror of the Abyss",
        soul: "+3",
        cooldown: "8 turns",
        description: "Traps all enemies in a timeless space, dispels two buffs, inflicts Block for 2 turns, and applies a random debuff for 1 turn. Increases the caster’s Combat Readiness by 50%.",
        soulburn: {
          cost: "",
          effect: ""
        },
        trait: ["Block", "Random Debuff", "Combat Readiness Up"]
      }
    }
  },
];
