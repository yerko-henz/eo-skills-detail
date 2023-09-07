export const skills: any = [
  //   NoviceSwordsman: {
  //     name_jp: "剣士の心得",
  //     name_en: "Proficiency",
  //     description:
  //       "Whenever you attack an enemy you increase your party's damage and accuracy against that target for the rest of the round.",
  //     requires: null,
  //     dep: {},
  //     active: FALSE,
  //     max: 1,
  //     unique: true,
  //     coords: { x: -140, y: 20 },
  //   },

  //   VeteranSwordsman: {
  //     name_jp: "剣士の極意",
  //     name_en: "Expertise",
  //     description:
  //       "Whenever you attack an enemy you further increase your party's damage and accuracy against that target for the rest of the round.",
  //     requires: null,
  //     dep: { NoviceSwordsman: 1 },
  //     active: FALSE,
  //     max: 1,
  //     unique: true,
  //     coords: { x: -140, y: 240 },
  //   },

  //   MasterSwordsman: {
  //     name_jp: "剣士の悟り",
  //     name_en: "Enlightenment",
  //     description:
  //       "Whenever you attack an enemy you greatly increase your party's damage and accuracy against that target for the rest of the round.",
  //     requires: null,
  //     dep: { VeteranSwordsman: 1 },
  //     active: FALSE,
  //     max: 1,
  //     unique: true,
  //     coords: { x: -140, y: 490 },
  //   },

  //   Mineralogy: {
  //     name_jp: "鉱物学",
  //     name_en: "Mineralogy",
  //     description: "Chance when mining to also receive a rare material.",
  //     requires: null,
  //     dep: {},
  //     active: FALSE,
  //     max: 1,
  //     unique: true,
  //     coords: { x: -100, y: 140 },
  //   },

  //   StrongCuisine: {
  //     name_jp: "剛腕料理",
  //     name_en: "Muscular Chef",
  //     description: "Increases the potency of dishes that grant Strength.",
  //     requires: null,
  //     dep: {},
  //     active: FALSE,
  //     max: 1,
  //     unique: true,
  //     coords: { x: -100, y: 340 },
  //   },

  {
    name_jp: "ソニックレイド",
    name_en: "Sonic Raid",
    description:
      "Deals damage to one enemy at the start of the round. Damage type is based on the weapon equipped by the user. Has a -3 speed modifier at all levels, but also has priority, so Speed modifier is only considered when used with other priority moves.",
    required_body_part: "Arms",
    required_weapon: "Sword or Rapier",
    levels: 10,
    scaling_type: "percentage",
    scaling_dmg: [
      "130",
      "135",
      "140",
      "145",
      "160",
      "163",
      "166",
      "169",
      "172",
      "180",
    ],
    scaling_cost: ["4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
    tags: null,
  },

  {
    name_jp: "リンクフレイム",
    name_en: "Blazing Link",
    description:
      "Deals fire damage to a single enemy.  The next ally's attack against the same enemy will deal a secondary fire attack.",
    required_body_part: "Arms",
    required_weapon: "Sword or Rapier",
    tags: [
      {
        name: "Sonic Raid",
        level: 3,
      },
    ],
    levels: 10,
    scaling: [
      {
        name: "Damage",
        detail: [
          "115%",
          "120%",
          "124%",
          "127%",
          "130%",
          "132%",
          "134%",
          "136%",
          "138%",
          "140%",
        ],
      },
      {
        name: "Follow-up multiplier",
        detail: ["40%", "40%", "40%", "40%", "45%", "45%", "45%", "45%", "50%"],
      },
      {
        name: "Follow-up damage",
        detail: ["46%", "48%", "49%", "50%", "58%", "59%", "61%", "61%", "70%"],
      },
    ],
  },
  {
    name_jp: "リンクフレイム",
    name_en: "Blazing Link",
    description:
      "Deals fire damage to a single enemy.  The next ally's attack against the same enemy will deal a secondary fire attack.",
    required_body_part: "Arms",
    required_weapon: "Sword or Rapier",
    tags: [
      {
        name: "Sonic Raid",
        level: 3,
      },
    ],
    levels: 10,
    scaling: [
      {
        name: "Damage",
        detail: [
          "115%",
          "120%",
          "124%",
          "127%",
          "130%",
          "132%",
          "134%",
          "136%",
          "138%",
          "140%",
        ],
      },
      {
        name: "Follow-up multiplier",
        detail: ["40%", "40%", "40%", "40%", "45%", "45%", "45%", "45%", "50%"],
      },
      {
        name: "Follow-up damage",
        detail: ["46%", "48%", "49%", "50%", "58%", "59%", "61%", "61%", "70%"],
      },
    ],
  },
  {
    name_jp: "リンクフレイム",
    name_en: "Blazing Link",
    description:
      "Deals fire damage to a single enemy.  The next ally's attack against the same enemy will deal a secondary fire attack.",
    required_body_part: "Arms",
    required_weapon: "Sword or Rapier",
    tags: [
      {
        name: "Sonic Raid",
        level: 3,
      },
    ],
    levels: 10,
    scaling: [
      {
        name: "Damage",
        detail: [
          "115%",
          "120%",
          "124%",
          "127%",
          "130%",
          "132%",
          "134%",
          "136%",
          "138%",
          "140%",
        ],
      },
      {
        name: "Follow-up multiplier",
        detail: ["40%", "40%", "40%", "40%", "45%", "45%", "45%", "45%", "50%"],
      },
      {
        name: "Follow-up damage",
        detail: ["46%", "48%", "49%", "50%", "58%", "59%", "61%", "61%", "70%"],
      },
    ],
  },

  {
    name_jp: "パワーブレイク",
    name_en: "Power Break",
    description:
      "Deals damage and lowers an enemy's physical attack for three turns. Has a -3 Speed modifier at all levels.",
    required_body_part: "Arms",
    required_weapon: "Shield",
    tags: null,
    levels: 6,
    scaling: [
      {
        name: "Damage",
        detail: ["80%", "83%", "90%", "95%", "100%", "110%"],
      },
      {
        name: "TP cost",
        detail: ["4", "4", "5", "5", "5", "6"],
      },
      {
        name: "Damage reduction",
        detail: ["15%", "17%", "20%", "21%", "22%", "25%"],
      },
    ],
  },

  {
    name_jp: "マインドブレイク",
    name_en: "Mind Break",
    description:
      "Deals damage and lowers an enemy's elemental attack for three turns. Has a -3 Speed modifier at all levels.",
    required_body_part: "Arms",
    required_weapon: "Shield",
    tags: [
      {
        name: "Power Break",
        level: "3",
      },
    ],
    levels: 6,
    scaling: [
      {
        name: "Damage",
        detail: ["80%", "83%", "90%", "95%", "100%", "110%"],
      },
      {
        name: "TP cost",
        detail: ["4", "4", "5", "5", "5", "6"],
      },
      {
        name: "Damage reduction",
        detail: ["15%", "17%", "20%", "21%", "22%", "25%"],
      },
    ],
  },

  //   PhysicalAttackBoost: {
  //     name_jp: "物理攻撃ブースト",
  //     name_en: "Power Boost",
  //     description: "Increases physical attack damage.",
  //     requires: null,
  //     dep: {},
  //     active: FALSE,
  //     max: 8,
  //     coords: { x: 20, y: 20 },
  //   },

  //   Vanguard: {
  //     name_jp: "ヴァンガード",
  //     name_en: "Vanguard",
  //     description:
  //       "Act first, raise physical attack, and lower your physical defense for five turns. Has a +6 Speed modifier at all levels.",
  //     requires: null,
  //     dep: {},
  //     active: TRUE,
  //     max: 6,
  //     coords: { x: 20, y: 140 },
  //   },

  //   FirstAid: {
  //     name_jp: "応急手当",
  //     name_en: "Bandage",
  //     description: "Recover an ally's HP.  Field only.",
  //     requires: null,
  //     dep: {},
  //     active: TRUE,
  //     max: 6,
  //     coords: { x: 260, y: 20 },
  //   },

  //   DoubleStrike: {
  //     name_jp: "ダブルストライク",
  //     name_en: "Double Strike",
  //     description: "Attacks the enemy twice.",
  //     requires: "Arm",
  //     dep: {},
  //     active: TRUE,
  //     max: 8,
  //     coords: { x: 400, y: 240 },
  //   },

  //   RoundSword: {
  //     name_jp: "ラウンドソード",
  //     name_en: "Spiral Slice",
  //     description: "Speads Damage to the left and right of your target.",
  //     requires: "Arm",
  //     dep: { DoubleStrike: 3 },
  //     active: TRUE,
  //     max: 8,
  //     coords: { x: 460, y: 340 },
  //   },

  //   Penetrate: {
  //     name_jp: "ペネトレイト",
  //     name_en: "Penetrate",
  //     description: "Deal damage to an enemy and one target behind him.",
  //     requires: "Arm",
  //     dep: { DoubleStrike: 3 },
  //     active: TRUE,
  //     max: 8,
  //     coords: { x: 340, y: 340 },
  //   },

  //   PhysicalDefenseBoost: {
  //     name_jp: "物理防御ブースト",
  //     name_en: "Iron Wall",
  //     description: "Raises physical defense",
  //     requires: null,
  //     dep: {},
  //     active: TRUE,
  //     max: 8,
  //     coords: { x: 210, y: 240 },
  //   },

  //   SwordBreaker: {
  //     name_jp: "ソードブレイカー",
  //     name_en: "Swordbreaker",
  //     description: "Chance to lower physical damage dealt to your row.",
  //     requires: null,
  //     dep: {},
  //     active: FALSE,
  //     max: 6,
  //     coords: { x: 170, y: 340 },
  //   },

  //   LinkPlus: {
  //     name_jp: "リンクプラス",
  //     name_en: "Improved Link",
  //     description:
  //       "For three turns, Link skills can trigger additional elemental follows from your teammates.",
  //     requires: "Head",
  //     dep: {},
  //     active: TRUE,
  //     max: 8,
  //     coords: { x: 50, y: 340 },
  //   },

  //   FirstStrike: {
  //     name_jp: "先駆けの功名",
  //     name_en: "Initiative",
  //     description:
  //       "Increased damage and accuracy when acting before all enemies.",
  //     requires: null,
  //     dep: { Vanguard: 2 },
  //     active: FALSE,
  //     max: 8,
  //     coords: { x: 20, y: 240 },
  //   },

  //   TempestSword: {
  //     name_jp: "ソードテンペスト",
  //     name_en: "Sword Tempest",
  //     description:
  //       "High damage attack to one enemy. Has a -20 Speed modifier and -5 Accuracy modifier at all levels.",
  //     requires: "Arm",
  //     dep: { RoundSword: 3 },
  //     active: TRUE,
  //     max: 8,
  //     coords: { x: 460, y: 490 },
  //   },

  //   FalconThrust: {
  //     name_jp: "ハヤブサ突き",
  //     name_en: "Swift Stab",
  //     description:
  //       "Randomly attacks enemies in a single row. Has a +9 Speed modifier and -15 Accuracy modifier at all levels.",
  //     requires: "Arm",
  //     dep: { Penetrate: 3 },
  //     active: TRUE,
  //     max: 8,
  //     coords: { x: 340, y: 490 },
  //   },

  //   Expertise: {
  //     name_jp: "攻防一体",
  //     name_en: "Weapon Parry",
  //     description: "Raises defense when two weapons are equipped.",
  //     requires: null,
  //     dep: { SwordBreaker: 3 },
  //     active: FALSE,
  //     max: 6,
  //     coords: { x: 170, y: 490 },
  //   },

  //   LinkMastery: {
  //     name_jp: "リンクマスタリ",
  //     name_en: "Link Mastery",
  //     description: "Link follow-ups deal progressively more damage.",
  //     requires: null,
  //     dep: { LinkPlus: 3 },
  //     active: FALSE,
  //     max: 6,
  //     coords: { x: 50, y: 490 },
  //   },
];
