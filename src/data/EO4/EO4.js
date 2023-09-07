export const skills = {
  common: {
    hpBoost: {
      name_jp: "HPブースト",
      name_en: "HP Up",
      details: "Increases Max HP.",
      levels: 10,
      scaling_type: "percentage",
      scaling: ["10", "15", "19", "23", "27", "30", "33", "36", "38", "40"],
      tags: null,
    },
    FirstAid: {
      name_jp: "応急手当",
      name_en: "Bandage",
      details: "Recovers an ally's HP; can only be used from the menu.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 0, y: 160 },
    },
    ListenToExp: {
      name_jp: "聞きかじりの経験",
      name_en: "Combat Study",
      details:
        "For every level of this skill, the character gains that percent of experience from each battle while not in the active party.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 0, y: 240 },
    },
    Take: {
      name_jp: "伐採",
      name_en: "Take",
      details: "Allows character to use take gathering points.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 0, y: 320 },
    },
    Chop: {
      name_jp: "採掘",
      name_en: "Chop",
      details: "Allows character to use chop gathering points.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 0, y: 400 },
    },
    Mine: {
      name_jp: "採取",
      name_en: "Mine",
      details: "Allows character to use mine gathering points.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 0, y: 480 },
    },
  },

  Landsknecht: {
    NoviceSwordsman: {
      name_jp: "剣士の心得",
      name_en: "Proficiency",
      details:
        "Whenever you attack an enemy you increase your party's damage and accuracy against that target for the rest of the round.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranSwordsman: {
      name_jp: "剣士の極意",
      name_en: "Expertise",
      details:
        "Whenever you attack an enemy you further increase your party's damage and accuracy against that target for the rest of the round.",
      requires: null,
      dep: { NoviceSwordsman: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterSwordsman: {
      name_jp: "剣士の悟り",
      name_en: "Enlightenment",
      details:
        "Whenever you attack an enemy you greatly increase your party's damage and accuracy against that target for the rest of the round.",
      requires: null,
      dep: { VeteranSwordsman: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Mineralogy: {
      name_jp: "鉱物学",
      name_en: "Mineralogy",
      details: "Chance when mining to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    StrongCuisine: {
      name_jp: "剛腕料理",
      name_en: "Muscular Chef",
      details: "Increases the potency of dishes that grant Strength.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    SonicRaid: {
      name_jp: "ソニックレイド",
      name_en: "Sonic Raid",
      details:
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

    FlameLink: {
      name_jp: "リンクフレイム",
      name_en: "Blazing Link",
      details:
        "Deals fire damage to a single enemy.  The next ally's attack against the same enemy will deal a secondary fire attack.",
      requires: "Arm",
      dep: { SonicRaid: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 270, y: 140 },
    },

    FreezeLink: {
      name_jp: "リンクフリーズ",
      name_en: "Freezing Link",
      details:
        "Deals ice damage to a single enemy.  The next ally's attack against the same enemy will deal a secondary ice attack.",
      requires: "Arm",
      dep: { SonicRaid: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 380, y: 140 },
    },

    ThunderLink: {
      name_jp: "リンクサンダー",
      name_en: "Electric Link",
      details:
        "Deals volt damage to a single enemy.  The next ally's attack against the same enemy will deal a secondary volt attack.",
      requires: "Arm",
      dep: { SonicRaid: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 490, y: 140 },
    },

    PowerBreak: {
      name_jp: "パワーブレイク",
      name_en: "Power Break",
      details:
        "Deals damage and lowers an enemy's physical attack for three turns. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Shield",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 140, y: 20 },
    },

    MindBreak: {
      name_jp: "マインドブレイク",
      name_en: "Mind Break",
      details:
        "Deals damage and lowers an enemy's elemental attack for three turns. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Shield",
      dep: { PowerBreak: 3 },
      active: TRUE,
      max: 6,
      coords: { x: 140, y: 140 },
    },

    PhysicalAttackBoost: {
      name_jp: "物理攻撃ブースト",
      name_en: "Power Boost",
      details: "Increases physical attack damage.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 20 },
    },

    Vanguard: {
      name_jp: "ヴァンガード",
      name_en: "Vanguard",
      details:
        "Act first, raise physical attack, and lower your physical defense for five turns. Has a +6 Speed modifier at all levels.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 20, y: 140 },
    },

    FirstAid: {
      name_jp: "応急手当",
      name_en: "Bandage",
      details: "Recover an ally's HP.  Field only.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 260, y: 20 },
    },

    DoubleStrike: {
      name_jp: "ダブルストライク",
      name_en: "Double Strike",
      details: "Attacks the enemy twice.",
      requires: "Arm",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 400, y: 240 },
    },

    RoundSword: {
      name_jp: "ラウンドソード",
      name_en: "Spiral Slice",
      details: "Speads Damage to the left and right of your target.",
      requires: "Arm",
      dep: { DoubleStrike: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 460, y: 340 },
    },

    Penetrate: {
      name_jp: "ペネトレイト",
      name_en: "Penetrate",
      details: "Deal damage to an enemy and one target behind him.",
      requires: "Arm",
      dep: { DoubleStrike: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 340, y: 340 },
    },

    PhysicalDefenseBoost: {
      name_jp: "物理防御ブースト",
      name_en: "Iron Wall",
      details: "Raises physical defense",
      requires: null,
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 210, y: 240 },
    },

    SwordBreaker: {
      name_jp: "ソードブレイカー",
      name_en: "Swordbreaker",
      details: "Chance to lower physical damage dealt to your row.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 170, y: 340 },
    },

    LinkPlus: {
      name_jp: "リンクプラス",
      name_en: "Improved Link",
      details:
        "For three turns, Link skills can trigger additional elemental follows from your teammates.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 50, y: 340 },
    },

    FirstStrike: {
      name_jp: "先駆けの功名",
      name_en: "Initiative",
      details: "Increased damage and accuracy when acting before all enemies.",
      requires: null,
      dep: { Vanguard: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 240 },
    },

    TempestSword: {
      name_jp: "ソードテンペスト",
      name_en: "Sword Tempest",
      details:
        "High damage attack to one enemy. Has a -20 Speed modifier and -5 Accuracy modifier at all levels.",
      requires: "Arm",
      dep: { RoundSword: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 460, y: 490 },
    },

    FalconThrust: {
      name_jp: "ハヤブサ突き",
      name_en: "Swift Stab",
      details:
        "Randomly attacks enemies in a single row. Has a +9 Speed modifier and -15 Accuracy modifier at all levels.",
      requires: "Arm",
      dep: { Penetrate: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 340, y: 490 },
    },

    Expertise: {
      name_jp: "攻防一体",
      name_en: "Weapon Parry",
      details: "Raises defense when two weapons are equipped.",
      requires: null,
      dep: { SwordBreaker: 3 },
      active: FALSE,
      max: 6,
      coords: { x: 170, y: 490 },
    },

    LinkMastery: {
      name_jp: "リンクマスタリ",
      name_en: "Link Mastery",
      details: "Link follow-ups deal progressively more damage.",
      requires: null,
      dep: { LinkPlus: 3 },
      active: FALSE,
      max: 6,
      coords: { x: 50, y: 490 },
    },
  },

  Nightseeker: {
    NoviceAssassin: {
      name_jp: "夜賊の心得",
      name_en: "Proficiency",
      details:
        "Deal extra damage to enemies suffering status conditions. (Not seals, not debuffs)",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranAssassin: {
      name_jp: "夜賊の極意",
      name_en: "Expertise",
      details:
        "Deal even more damage to enemies suffering status conditions. (Not seals, not debuffs)",
      requires: null,
      dep: { NoviceAssassin: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterAssassin: {
      name_jp: "夜賊の悟り",
      name_en: "Enlightenment",
      details:
        "Deal much more damage to enemies suffering status conditions. (Not seals, not debuffs)",
      requires: null,
      dep: { VeteranAssassin: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Herbalism: {
      name_jp: "薬草学",
      name_en: "Herbology",
      details: "Chance when using a take node to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    AgileCuisine: {
      name_jp: "俊敏料理",
      name_en: "Agile Chef",
      details: "Increases the potency of dishes that grant AGI.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    IceSlash: {
      name_jp: "アイスブラッシュ",
      name_en: "Ice Knife",
      details:
        "Deals Ice/Slash damage to one target. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Sword/Dagger",
      dep: {},
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 20 },
    },

    TheSlowKnife: {
      name_jp: "ディレイスタブ",
      name_en: "Biding Slice",
      details:
        "Melee attack to one target.  If at the end of the turn you have not been dealt damage, you attack again. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Sword/Dagger",
      dep: { IceSlash: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 130 },
    },

    BlindingThrow: {
      name_jp: "盲目の投刃",
      name_en: "Sand Throw",
      details:
        "Ranged attack against one enemy with a chance to blind. Has a +2 Speed modifier at all levels.",
      requires: "Arm",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 20 },
    },

    ParalyzingThrow: {
      name_jp: "麻痺の投刃",
      name_en: "Nerve Throw",
      details:
        "Ranged attack against one enemy with a chance to paralyze. Has a +2 Speed modifier at all levels.",
      requires: "Arm",
      dep: { BlindingThrow: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 130 },
    },

    ShadowBlade: {
      name_jp: "追影の刃",
      name_en: "Blade Flurry",
      details:
        "When equipped with two weapons, a normal attack will strike once with each weapon",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 256, y: 20 },
    },

    HideCloak: {
      name_jp: "ハイドクローク",
      name_en: "Shadow Cloak",
      details:
        "For the next three turns, evade the first physical attack targeting you. Has a +6 Speed modifier at all levels.",
      requires: "Leg",
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 138, y: 20 },
    },

    PreemptiveCloak: {
      name_jp: "先制クローク",
      name_en: "Auto-Cloak",
      details:
        "You have a chance to activate Shadow Cloak for free at the start of each battle.",
      requires: null,
      dep: { HideCloak: 2 },
      active: FALSE,
      max: 6,
      coords: { x: 138, y: 130 },
    },

    Diversion: {
      name_jp: "デコイサイン",
      name_en: "Decoy Sign",
      details:
        "For three turns, selected ally has an increased chance to be targeted. Has a +6 Speed modifier at all levels.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 20, y: 20 },
    },

    Assassination: {
      name_jp: "アサシネイション",
      name_en: "Assassinate",
      details:
        "Attack with a chance to instantly kill the enemy.  Chance is increased if the enemy is suffering a status condition.",
      requires: "Arm, Dagger/Sword",
      dep: { TheSlowKnife: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 240 },
    },

    CruelStrike: {
      name_jp: "シャドウバイト",
      name_en: "Shadow Bite",
      details:
        "An attack against a single target.  Deals extra damage if the target has a status ailment",
      requires: "Arm, Sword/Dagger",
      dep: { Assassination: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 340 },
    },

    KnockoutThrow: {
      name_jp: "睡眠の投刃",
      name_en: "Sleep Throw",
      details:
        "Ranged attack against a single target with a chance to inflict sleep. Has a +2 Speed modifier at all levels.",
      requires: "Arm",
      dep: { ParalyzingThrow: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 240 },
    },

    AccursedThrow: {
      name_jp: "呪いの投刃",
      name_en: "Curse Throw",
      details:
        "Ranged attack against a single target with a chance to inflict curse. Has a +2 Speed modifier at all levels.",
      requires: "Arm",
      dep: { KnockoutThrow: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 340 },
    },

    SpreadThrow: {
      name_jp: "スプレッドスロー",
      name_en: "Spread Throw",
      details:
        "The next Throw skill you use will target all enemies. This move will always be used first at the start of the turn when used.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 138, y: 240 },
    },

    Alertness: {
      name_jp: "奇襲",
      name_en: "Sneak Attack",
      details:
        "Increases the rate of pre-emptive attacks for a certain number of steps.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 20, y: 240 },
    },

    SpeedBoost: {
      name_jp: "速度ブースト",
      name_en: "Speed Boost",
      details:
        "Increases action rate, hit rate, and evade rate. Does not interact well with Dancer’s Fan Dance, and will override its evasion increase.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 20, y: 340 },
    },

    BladeFlurry: {
      name_jp: "スウィフトソード",
      name_en: "Swift Edge",
      details:
        "Performs multiple slash attacks. Has a -35 Accuracy modifier at all levels.",
      requires: "Arm, Sword/Dagger",
      dep: { CruelStrike: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 440 },
    },

    VenomousThrow: {
      name_jp: "猛毒の投刃",
      name_en: "Venom Throw",
      details:
        "Ranged attack against a single enemy with a chance to inflict high-damage poison. Has a +2 Speed modifier at all levels.",
      requires: "Arm",
      dep: { AccursedThrow: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 440 },
    },

    StatusMastery: {
      name_jp: "闇討マスタリ",
      name_en: "Foul Mastery",
      details:
        "Every time you successfully inflict a status ailment, your damage will increase for the rest of the combat (or until you are killed).",
      requires: null,
      dep: { BladeFlurry: 2, VenomousThrow: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 438, y: 540 },
    },

    ShadowSkills: {
      name_jp: "追影の残滓",
      name_en: "Follow Trace",
      details:
        "Chance after using a weapon skill for the same skill to trigger again for free. The secondary skill use has its damage modified to the same percents that Blade Flurry causes a second hit to deal (30% at Lv1 Blade Flurry, 80% at max level Blade Flurry).",
      requires: null,
      dep: { ShadowBlade: 3 },
      active: FALSE,
      max: 8,
      coords: { x: 256, y: 440 },
    },

    PreemptiveSpread: {
      name_jp: "先制スプレッド",
      name_en: "Auto-Spread",
      details:
        "Chance to use Spread Throw for free at the beginning of combat. Note that Spread Throw is technically a 2-turn buff, so it can allow Spread Throw to be used on turns 1 and 2.",
      requires: null,
      dep: { SpreadThrow: 2 },
      active: FALSE,
      max: 6,
      coords: { x: 138, y: 440 },
    },
  },

  Fortress: {
    NoviceFortress: {
      name_jp: "城塞騎士の心得",
      name_en: "Proficiency",
      details:
        "While you are in the front line, attacks against you restore your TP.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranFortress: {
      name_jp: "城塞騎士の極意",
      name_en: "Expertise",
      details:
        "While you are in the front line, attacks against you restore more TP.",
      requires: null,
      dep: { NoviceFortress: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterFortress: {
      name_jp: "城塞騎士の悟り",
      name_en: "Enlightenment",
      details:
        "While you are in the front line, attacks against you restore even more TP.",
      requires: null,
      dep: { VeteranFortress: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Mineralogy: {
      name_jp: "鉱物学",
      name_en: "Mineralogy",
      details: "Chance when mining to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    ToughCuisine: {
      name_jp: "屈強料理",
      name_en: "Hardy Chef",
      details: "Increases the potency of dishes that grant VIT.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    DefenseBoost: {
      name_jp: "物理防御ブースト",
      name_en: "Iron Wall",
      details: "Reduces damage taken from physical attacks.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 20, y: 20 },
    },

    Provoke: {
      name_jp: "挑発",
      name_en: "Taunt",
      details:
        "For four turns, increase the chance you are targetted by the enemy. Has a +20 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 138, y: 20 },
    },

    GuardStance: {
      name_jp: "防御陣形",
      name_en: "Strike Guard",
      details:
        "For three turns increase the physical defense of all allies. Has a +6 Speed modifier at all levels.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 256, y: 20 },
    },

    Cover: {
      name_jp: "ディバイドガード",
      name_en: "Ally Shield",
      details:
        "This turn, take damage in place of an ally and reduce the damage somewhat. Has a +30 Speed modifier at all levels.",
      requires: "Arm, Shield",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 20 },
    },

    BoltStrike: {
      name_jp: "ボルトストライク",
      name_en: "Bolt Strike",
      details:
        "Melee attack dealing Bash/Volt damage to one enemy. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Hammer",
      dep: {},
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 20 },
    },

    PreemptiveProvoke: {
      name_jp: "先制挑発",
      name_en: "Auto-Taunt",
      details: "Chance to cast Taunt for free at the beginning of combat.",
      requires: null,
      dep: { Provoke: 2 },
      active: FALSE,
      max: 4,
      coords: { x: 138, y: 130 },
    },

    MagicGuardStance: {
      name_jp: "防御陣形II",
      name_en: "Element Guard",
      details:
        "For three turns increase the elemental defense of all allies. Has a +6 Speed modifier at all levels.",
      requires: null,
      dep: { GuardStance: 3 },
      active: TRUE,
      max: 6,
      coords: { x: 256, y: 130 },
    },

    HolyStrike: {
      name_jp: "ホーリーバッシュ",
      name_en: "Holy Smite",
      details:
        "Melee attack against one enemy that also recovers your health. Has a -3 Accuracy modifier at all levels.",
      requires: "Arm, Hammer",
      dep: { BoltStrike: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 130 },
    },

    Sentinel: {
      name_jp: "歩哨",
      name_en: "Sentry",
      details: "Displays the location of FOEs on the minimap",
      requires: null,
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 20, y: 240 },
    },

    Rampart: {
      name_jp: "ランパート",
      name_en: "Rampart",
      details:
        "For three turns reduce all physical and elemental damage you take. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 138, y: 240 },
    },

    KnightsProtection: {
      name_jp: "騎士の加護",
      name_en: "Knight's Boon",
      details:
        "Increases the rate at which you recover from status conditions and seals.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 256, y: 240 },
    },

    LineCover: {
      name_jp: "ラインディバイド",
      name_en: "Line Shield",
      details:
        "This turn, take damage in place of a row and reduce the damage somewhat. Has a +30 Speed modifier at all levels.",
      requires: "Shield",
      dep: { Cover: 3 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 240 },
    },

    RevengeSmite: {
      name_jp: "リベンジスマイト",
      name_en: "Vengeance Bash",
      details:
        "After three turns deals bash damage against one foe with power depending on how many times you have taken damage. Has a -100 Speed modifier at all levels.",
      requires: "Hammer",
      dep: { HolyStrike: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 240 },
    },

    HealWall: {
      name_jp: "ヒールウォール",
      name_en: "Healing Wall",
      details: "Allies in the same row as you heal when they defend.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 138, y: 340 },
    },

    HolyBlessing: {
      name_jp: "聖なる加護",
      name_en: "Holy Blessing",
      details:
        "Prevent the next status ailment within three turns against each member in a row. Has a +6 Speed modifier at all levels.",
      requires: null,
      dep: { KnightsProtection: 3 },
      active: TRUE,
      max: 4,
      coords: { x: 256, y: 340 },
    },

    CoverAll: {
      name_jp: "オールディバイド",
      name_en: "Party Shield",
      details:
        "This turn, take damage in place of all allies and reduce the damage somewhat. Has a +30 Speed modifier at all levels.",
      requires: "Shield",
      dep: { LineCover: 3 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 340 },
    },

    HPBoost: {
      name_jp: "HPブースト",
      name_en: "HP Boost",
      details: "Increases maximum HP.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 256, y: 440 },
    },

    CriticalCover: {
      name_jp: "ディバイドモード",
      name_en: "Weak Shield",
      details:
        "For three turns, take damage in place of any ally below 50% HP, and reduce the damage somewhat. Has a +6 Speed modifier at all levels.",
      requires: "Shield",
      dep: { CoverAll: 3 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 440 },
    },

    EarthShatter: {
      name_jp: "アースブレイク",
      name_en: "Earth Break",
      details:
        "Deals bash damage to one enemy with Splash effect, dealing 50% damage to its neighbors, and also deals bash damage to yourself. Has a -3 Speed modifier at all levels.",
      requires: "Hammer",
      dep: { RevengeSmite: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 440 },
    },

    CoverMastery: {
      name_jp: "ガードマスタリ",
      name_en: "Guard Mastery",
      details:
        "When in the front row, you have a chance to disable attacks against you",
      requires: null,
      dep: { CriticalCover: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 374, y: 540 },
    },
  },

  Sniper: {
    NoviceSniper: {
      name_jp: "狙撃手の心得",
      name_en: "Proficiency",
      details:
        "Increases the damage of critical strikes and allows bow skills to be crits.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranSniper: {
      name_jp: "狙撃手の極意",
      name_en: "Expertise",
      details: "Further increases the damage of critical strikes.",
      requires: null,
      dep: { NoviceSniper: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterSniper: {
      name_jp: "狙撃手の悟り",
      name_en: "Enlightenment",
      details: "Greatly increases the damage of critical strikes.",
      requires: null,
      dep: { VeteranSniper: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Forestry: {
      name_jp: "樹木学",
      name_en: "Dendrology",
      details: "Chance when gathering lumber to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    Foraging: {
      name_jp: "鑑定眼",
      name_en: "Discerning Eye",
      details: "Gain more rare ingredients while gathering on the world map.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    Scavenger: {
      name_jp: "スカベンジャー",
      name_en: "Scavenger",
      details: "Raises the drop rate from monsters.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 20, y: 20 },
    },

    LockOn: {
      name_jp: "ロックオン",
      name_en: "Lock On",
      details:
        "For the next five turns increases the rate of your critical strikes.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 138, y: 20 },
    },

    LongShot: {
      name_jp: "ロングショット",
      name_en: "Long Shot",
      details: "Pierce attack on one enemy.",
      requires: "Bow",
      dep: {},
      active: TRUE,
      max: 10,
      coords: { x: 314, y: 20 },
    },

    SnipeLeg: {
      name_jp: "レッグスナイプ",
      name_en: "Leg Snipe",
      details:
        "Pierce attack with chance to bind legs. This attack never misses.",
      requires: "Arm, Bow",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 20 },
    },

    Observation: {
      name_jp: "観測",
      name_en: "Spotter",
      details:
        "For five turns increases the hit rate of all allies. Has a +6 Speed modifier at all levels.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 20, y: 130 },
    },

    ScatterShot: {
      name_jp: "フランクショット",
      name_en: "Flank Shot",
      details: "Pierce attack against a row of enemies.",
      requires: "Arm, Bow",
      dep: { LongShot: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 256, y: 130 },
    },

    FullMetalArrow: {
      name_jp: "フルメタルアロー",
      name_en: "Steel Arrow",
      details:
        "Piece attack against one enemy in the front row and one in the back.",
      requires: "Arm, Bow",
      dep: { LongShot: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 374, y: 130 },
    },

    SnipeArm: {
      name_jp: "アームスナイプ",
      name_en: "Arm Snipe",
      details:
        "Pierce attack with a chance to bind arms. This attack never misses.",
      requires: "Arm, Bow",
      dep: { SnipeLeg: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 130 },
    },

    Camouflage: {
      name_jp: "カモフラージュ",
      name_en: "Camouflage",
      details: "Reduces the rate of enemy encounters.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 20, y: 240 },
    },

    Bullseye: {
      name_jp: "正鵠の明",
      name_en: "Bullseye",
      details: "Increases the rate of critical hits.",
      requires: null,
      dep: { LockOn: 3 },
      active: FALSE,
      max: 10,
      coords: { x: 138, y: 240 },
    },

    SquallShot: {
      name_jp: "スコールショット",
      name_en: "Squall Volley",
      details:
        "Randomly attack the entire enemy party with low accuracy. Has a -60 Accuracy modifier at all levels.",
      requires: "Arm, Bow",
      dep: { ScatterShot: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 240 },
    },

    SilverArrow: {
      name_jp: "シルバーアロー",
      name_en: "Silver Arrow",
      details: "Deals pierce damage to one enemy, ignoring all buffs.",
      requires: "Arm, Bow",
      dep: { FullMetalArrow: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 240 },
    },

    SnipeHead: {
      name_jp: "ヘッドスナイプ",
      name_en: "Head Snipe",
      details:
        "Pierce attack with a chance to bind head. This attack never misses.",
      requires: "Arm, Bow",
      dep: { SnipeArm: 1 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 240 },
    },

    Vigilance: {
      name_jp: "警戒伝令",
      name_en: "High Caution",
      details: "Decreases the chance of surprise attacks.",
      requires: null,
      dep: { Camouflage: 2 },
      active: FALSE,
      max: 6,
      coords: { x: 20, y: 340 },
    },

    EagleEye: {
      name_jp: "イーグルアイ",
      name_en: "Eagle Eye",
      details:
        "For three turns reduces the physical defense of one enemy. Has a -6 Speed modifier at all levels.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 138, y: 340 },
    },

    BindChase: {
      name_jp: "チェイスバインド",
      name_en: "Chase Bind",
      details: "Whenever an enemy becomes sealed, automatically attack it.",
      requires: null,
      dep: { SnipeHead: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 492, y: 340 },
    },

    AttackBoost: {
      name_jp: "物理攻撃ブースト",
      name_en: "Power Boost",
      details: "Increases physical attack power.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 138, y: 440 },
    },

    HeavensShot: {
      name_jp: "ヘブンズショット",
      name_en: "Divine Shot",
      details:
        "Deals pierce damage depending on how many binds the enemy has, then immediately removes all binds on the target. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Bow",
      dep: { SquallShot: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 440 },
    },

    ImpactArrow: {
      name_jp: "インパクトアロー",
      name_en: "Impact Arrow",
      details:
        "Deals pierce damage to one enemy in the front row and one in the back, then becomes unusable for two turns. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Bow",
      dep: { SilverArrow: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 440 },
    },

    SnipeMastery: {
      name_jp: "狙撃マスタリ",
      name_en: "Snipe Mastery",
      details: "Increases crit rate against bound targets.",
      requires: null,
      dep: { BindChase: 3 },
      active: FALSE,
      max: 8,
      coords: { x: 492, y: 440 },
    },
  },

  Dancer: {
    NoviceDancer: {
      name_jp: "踊り子の心得",
      name_en: "Proficiency",
      details: "Extends the duration of your dances.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranDancer: {
      name_jp: "踊り子の極意",
      name_en: "Expertise",
      details: "Extends the duration of your dances more.",
      requires: null,
      dep: { NoviceDancer: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterDancer: {
      name_jp: "踊り子の悟り",
      name_en: "Enlightenment",
      details: "Extends the duration of your dances even more.",
      requires: null,
      dep: { VeteranDancer: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Forestry: {
      name_jp: "樹木学",
      name_en: "Dendrology",
      details: "Chance when gathering lumber to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    LuckyCuisine: {
      name_jp: "強運料理",
      name_en: "Lucky Chef",
      details: "Increases the potency of dishes that grant LUC.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    FanDance: {
      name_jp: "扇の舞",
      name_en: "Fan Dance",
      details:
        "Chance to evade attacks. Does not interact well with Dancer’s or Nightseeker’s Speed Boost, and is overwritten by their evasion boosts.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 138, y: 20 },
    },

    CounterSamba: {
      name_jp: "カウンターサンバ",
      name_en: "Counter Samba",
      details:
        "For the next three turns, counter attacks made against your row. Has a +6 Speed modifier at all levels.",
      requires: "Legs",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 20 },
    },

    AttackTango: {
      name_jp: "アタックタンゴ",
      name_en: "Attack Tango",
      details:
        "For the next three turns raise the physical attack power of you and your row. Has a +6 Speed modifier at all levels.",
      requires: "Legs",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 20 },
    },

    RegenWaltz: {
      name_jp: "リジェネワルツ",
      name_en: "Regen Waltz",
      details:
        "For the next three turns your row will recover HP at the end of the round. Has a -6 Speed modifier at all levels.",
      requires: "Legs",
      dep: {},
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 20 },
    },

    ChaseSamba: {
      name_jp: "チェイスサンバ",
      name_en: "Chase Samba",
      details:
        "For the next three turns you will chase attacks made by your allies on the same row. Has a +6 Speed modifier at all levels.",
      requires: "Legs",
      dep: { CounterSamba: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 130 },
    },

    GuardTango: {
      name_jp: "ガードタンゴ",
      name_en: "Guard Tango",
      details:
        "For the next three turns, increases the physical defense of you and your row. Has a +6 Speed modifier at all levels.",
      requires: "Legs",
      dep: { AttackTango: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 130 },
    },

    RefreshWaltz: {
      name_jp: "リフレシュワルツ",
      name_en: "Refresh Waltz",
      details:
        "For three turns remove status abnormalities at the end of every round. Has a -6 Speed modifier at all levels.",
      requires: "Legs",
      dep: { RegenWaltz: 3 },
      active: TRUE,
      max: 4,
      coords: { x: 492, y: 130 },
    },

    BurstSave: {
      name_jp: "バーストセーブ",
      name_en: "Burst Saver",
      details: "Chance to reduce the cost of burst attacks by 1.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 20, y: 240 },
    },

    SwordDance: {
      name_jp: "剣の舞",
      name_en: "Sword Dance",
      details: "Chance for normal attacks to strike multiple times.",
      requires: null,
      dep: { FanDance: 3 },
      active: FALSE,
      max: 10,
      coords: { x: 138, y: 240 },
    },

    TrickSamba: {
      name_jp: "トリックサンバ",
      name_en: "Trick Samba",
      details:
        "For the next three turns, when you attack your allies on the same row will also attack. Has a +6 Speed modifier at all levels.",
      requires: "Legs",
      dep: { ChaseSamba: 1 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 240 },
    },

    EnergyTango: {
      name_jp: "エナジータンゴ",
      name_en: "Energy Tango",
      details:
        "For the next three turns reduces the cost of skills for you and your row. Has a +6 Speed modifier at all levels.",
      requires: "Legs",
      dep: { GuardTango: 1 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 240 },
    },

    RecoveryWaltz: {
      name_jp: "リカバリワルツ",
      name_en: "Freedom Waltz",
      details:
        "For the next three turns removes binds from your row at the end of every round. Has a -6 Speed modifier at all levels.",
      requires: "Legs",
      dep: { RefreshWaltz: 1 },
      active: TRUE,
      max: 4,
      coords: { x: 492, y: 240 },
    },

    RushDance: {
      name_jp: "ラッシュダンス",
      name_en: "Rush Dance",
      details:
        "Use during a tango to chase attacks from all your allies. Has a +60 Speed modifier at all levels.",
      requires: "Legs",
      dep: { TrickSamba: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 340 },
    },

    WideDance: {
      name_jp: "ワイドダンス",
      name_en: "Wide Dance",
      details:
        "This turn, your dances will affect the entire party. Has a +100 Speed modifier at all levels.",
      requires: "Legs",
      dep: { EnergyTango: 2 },
      active: TRUE,
      max: 4,
      coords: { x: 374, y: 340 },
    },

    HealDance: {
      name_jp: "ヒールダンス",
      name_en: "Healing Step",
      details: "Use during a waltz to heal the entire party.",
      requires: "Legs",
      dep: { RecoveryWaltz: 2 },
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 340 },
    },

    HazeDance: {
      name_jp: "霞の舞",
      name_en: "Mist Dance",
      details: "Your normal attacks have a chance to stun.",
      requires: null,
      dep: { SwordDance: 3 },
      active: FALSE,
      max: 8,
      coords: { x: 138, y: 440 },
    },

    SpeedBoost: {
      name_jp: "速度ブースト",
      name_en: "Speed Boost",
      details:
        "Increases action rate, hit rate, and evade rate. Does not interact well with Dancer’s Fan Dance, and will override its evasion increase.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 256, y: 440 },
    },

    BeatDance: {
      name_jp: "ビートダンス",
      name_en: "Beat Dance",
      details:
        "While dancing a tango, a waltz, and a samba, order all allies to attack. Has a -30 Speed modifier at all levels.",
      requires: "Legs",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 440 },
    },

    QuickStep: {
      name_jp: "クイックステップ",
      name_en: "Quick Step",
      details:
        "Target ally acts first this turn.  Has priority, and a +100 Speed modifier at all levels.",
      requires: "Legs",
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 492, y: 440 },
    },

    DanceMastery: {
      name_jp: "ダンスマスタリ",
      name_en: "Dance Mastery",
      details: "Increases the burst gauge every time a dance triggers.",
      requires: null,
      dep: { BeatDance: 3 },
      active: FALSE,
      max: 8,
      coords: { x: 374, y: 540 },
    },
  },

  Medic: {
    NoviceMedic: {
      name_jp: "医術師の心得",
      name_en: "Proficiency",
      details: "Increases all healing done by your party.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranMedic: {
      name_jp: "医術師の極意",
      name_en: "Expertise",
      details: "Further increases all healing done by your party.",
      requires: null,
      dep: { NoviceMedic: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterMedic: {
      name_jp: "医術師の悟り",
      name_en: "Enlightenment",
      details: "Greatly increases all healing done by your party.",
      requires: null,
      dep: { VeteranMedic: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Herbalism: {
      name_jp: "薬草学",
      name_en: "Herbology",
      details: "Chance when using a take node to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    Toxicology: {
      name_jp: "危険食材の知識",
      name_en: "Toxin Study",
      details: "Removes negative effects from food.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    PatchUp: {
      name_jp: "戦後手当",
      name_en: "Patch Up",
      details: "Automatically restores some HP after a battle.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 20 },
    },

    Refresh: {
      name_jp: "リフレッシュ",
      name_en: "Refresh",
      details:
        "Removes status ailments. Has a -3 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 196, y: 20 },
    },

    Heal: {
      name_jp: "ヒーリング",
      name_en: "Healing",
      details:
        "Restores HP to one ally. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 20 },
    },

    HeavyStrike: {
      name_jp: "ヘヴィストライク",
      name_en: "Heavy Strike",
      details: "Act slowly to deal bash damage with a chance to stun.",
      requires: "Arm, Staff/Hammer",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 20, y: 130 },
    },

    BindHeal: {
      name_jp: "リカバリー",
      name_en: "Recovery",
      details: "Removes binds. Has a -3 Speed modifier at all levels.",
      requires: "Head",
      dep: { Refresh: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 138, y: 130 },
    },

    Treat: {
      name_jp: "トリート",
      name_en: "Treat",
      details: "Removes debuffs. Has a -3 Speed modifier at all levels.",
      requires: "Head",
      dep: { Refresh: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 256, y: 130 },
    },

    IntensiveCare: {
      name_jp: "集中治療",
      name_en: "Steady Hands",
      details: "For three turns, increases the amount your skills heal.",
      requires: "Head",
      dep: { Heal: 4 },
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 130 },
    },

    LineHeal: {
      name_jp: "ラインヒール",
      name_en: "Line Heal",
      details: "Restores HP to one row. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { Heal: 3 },
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 130 },
    },

    SleepBlow: {
      name_jp: "スリープブロー",
      name_en: "Knockout Blow",
      details:
        "Act slowly to deal damage with a chance to put the target to sleep.",
      requires: "Arm, Staff/Hammer",
      dep: { HeavyStrike: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 20, y: 240 },
    },

    WidenCare: {
      name_jp: "一斉救護",
      name_en: "Group Therapy",
      details:
        "For the next three turns, Full Refresh, Refresh, Recovery, and Treat will affect a wider range.",
      requires: "Head",
      dep: { Treat: 1, BindHeal: 1 },
      active: TRUE,
      max: 4,
      coords: { x: 196, y: 240 },
    },

    Stretch: {
      name_jp: "ストレッチ",
      name_en: "Stretch",
      details: "Chance to evade the bind condition.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 374, y: 240 },
    },

    FullHeal: {
      name_jp: "フルヒーリング",
      name_en: "Full Heal",
      details:
        "Restore all HP to one ally. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { LineHeal: 3 },
      active: TRUE,
      max: 4,
      coords: { x: 492, y: 240 },
    },

    FullRefresh: {
      name_jp: "フルリフレッシュ",
      name_en: "Full Refresh",
      details:
        "Removes all debuffs, status effects, and binds from one ally. Has a -3 Speed modifier at all levels.",
      requires: "Head",
      dep: { WidenCare: 2 },
      active: TRUE,
      max: 4,
      coords: { x: 196, y: 340 },
    },

    Revive: {
      name_jp: "リザレクト",
      name_en: "Revive",
      details:
        "Revives one party member. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 340 },
    },

    PartyHeal: {
      name_jp: "パーティヒール",
      name_en: "Party Heal",
      details:
        "Restores HP to all allies. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { FullHeal: 2 },
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 340 },
    },

    CripplingBlow: {
      name_jp: "スタードロップ",
      name_en: "Star Drop",
      details:
        "Deals bash damage to one target and increases damage that target takes for the rest of the round.",
      requires: "Arm, Staff/Hammer",
      dep: { SleepBlow: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 20, y: 440 },
    },

    TPBoost: {
      name_jp: "TPブースト",
      name_en: "TP Boost",
      details: "Increases your maximum TP.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 256, y: 440 },
    },

    AutoRevive: {
      name_jp: "オートリザレクト",
      name_en: "Auto-Revive",
      details:
        "Whenever an ally dies, they have a chance to automatically revive.",
      requires: "Head",
      dep: { Revive: 4 },
      active: FALSE,
      max: 8,
      coords: { x: 374, y: 440 },
    },

    AutoHeal: {
      name_jp: "オートヒール",
      name_en: "Auto-Heal",
      details: "Chance to automatically heal any ally who falls below 30% HP.",
      requires: "Head",
      dep: { PartyHeal: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 492, y: 440 },
    },

    HealMastery: {
      name_jp: "ヒールマスタリ",
      name_en: "Heal Mastery",
      details: "Increases health regained from your skills.",
      requires: null,
      dep: { AutoHeal: 3 },
      active: FALSE,
      max: 8,
      coords: { x: 492, y: 540 },
    },
  },

  Runemaster: {
    NoviceRuneMaster: {
      name_jp: "印術師の心得",
      name_en: "Proficiency",
      details:
        "You and allies on the same row as you deal more damage with and take less damage from attribute and non-attribute sources.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranRuneMaster: {
      name_jp: "印術師の極意",
      name_en: "Expertise",
      details:
        "You and allies on the same row as you deal even more damage with and take even less damage from attribute and non-attribute sources.",
      requires: null,
      dep: { NoviceRuneMaster: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterRuneMaster: {
      name_jp: "印術師の悟り",
      name_en: "Enlightenment",
      details:
        "You and allies on the same row as you deal much more damage with and take much less damage from attribute and non-attribute sources.",
      requires: null,
      dep: { VeteranRuneMaster: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Herbalism: {
      name_jp: "薬草学",
      name_en: "Herbology",
      details: "Chance at a take node to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    SmartCuisine: {
      name_jp: "聡明料理",
      name_en: "Wise Chef",
      details: "Increases the potency of dishes that grant TEC.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    SymbolofFlame: {
      name_jp: "炎の聖印",
      name_en: "Fire Rune",
      details:
        "For three turns enemies will take more damage from the fire attribute and allies will take less.  Depending on the enemy's inherent resistance, this may cause him to be considered weak against fire. Has a +10 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 492, y: 20 },
    },

    SymbolofIce: {
      name_jp: "氷の聖印",
      name_en: "Ice Rune",
      details:
        "For three turns enemies will take more damage from the ice attribute and allies will take less.  Depending on the enemy's inherent resistance, this may cause him to be considered weak against ice. Has a +10 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 374, y: 20 },
    },

    SymbolofThunder: {
      name_jp: "雷の聖印",
      name_en: "Volt Rune",
      details:
        "For three turns enemies will take more damage from the volt attribute and allies will take less.  Depending on the enemy's inherent resistance, this may cause him to be considered weak against volt. Has a +10 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 256, y: 20 },
    },

    RuneofFireball: {
      name_jp: "火球の印術",
      name_en: "Fireball Rune",
      details:
        "Deals fire damage to one opponent then spreads the enemy on either side. Has a -9 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { SymbolofFlame: 1 },
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 130 },
    },

    RuneofIceSpear: {
      name_jp: "氷槍の印術",
      name_en: "Ice Lance Rune",
      details:
        "Deals ice damage to one target in the front row and one target in the back row. Has a -9 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { SymbolofIce: 1 },
      active: TRUE,
      max: 10,
      coords: { x: 374, y: 130 },
    },

    RuneofLightning: {
      name_jp: "雷撃の印術",
      name_en: "Lightning Rune",
      details:
        "Deals damage to one enemy row.  Cannot hit the enemy's back row if you are in the party's back row. Has a -9 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { SymbolofThunder: 1 },
      active: TRUE,
      max: 10,
      coords: { x: 256, y: 130 },
    },

    RuneShine: {
      name_jp: "ルーンの輝き",
      name_en: "Runic Gleam",
      details:
        "For three turns, increases the damage you deal from elemental and non-attribute sources. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 138, y: 20 },
    },

    TPBoost: {
      name_jp: "TPブースト",
      name_en: "TP Boost",
      details: "Increases maximum TP.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 20 },
    },

    RuneofExplosion: {
      name_jp: "爆炎の印術",
      name_en: "Flame Rune",
      details:
        "Deals fire damage to all enemies. Has a -9 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { RuneofFireball: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 240 },
    },

    RuneofIceFang: {
      name_jp: "凍牙の印術",
      name_en: "Glacier Rune",
      details:
        "Deals ice damage randomly amongst the enemy party. Has a -9 Speed modifier and 90 Accuracy at all levels.",
      requires: "Head",
      dep: { RuneofIceSpear: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 240 },
    },

    RuneofThunderclap: {
      name_jp: "稲妻の印術",
      name_en: "Storm Rune",
      details:
        "Deals volt damage to a single target. Has a -9 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { RuneofLightning: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 240 },
    },

    RuneShield: {
      name_jp: "ルーンの盾",
      name_en: "Runic Shield",
      details:
        "Has a chance to disable elemental attacks against you or a party member in your row.",
      requires: null,
      dep: { RuneShine: 2 },
      active: FALSE,
      max: 4,
      coords: { x: 138, y: 240 },
    },

    RunicPrecision: {
      name_jp: "ルーンの導き",
      name_en: "Runic Guidance",
      details:
        "Increases the damage dealt when you attack an enemy's weakness.",
      requires: null,
      dep: { RuneShield: 2 },
      active: FALSE,
      max: 6,
      coords: { x: 138, y: 340 },
    },

    TPConservation: {
      name_jp: "TPカット",
      name_en: "Free Energy",
      details: "Chance to reduce TP cost of any skill to zero.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 20, y: 240 },
    },

    RunicAttackBoost: {
      name_jp: "属性攻撃ブースト",
      name_en: "Runic Flare",
      details: "Deal extra damage with elemental and non-attribute sources.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 20, y: 340 },
    },

    RuneofConflagration: {
      name_jp: "劫火の大印術",
      name_en: "Inferno Rune",
      details:
        "Deals fire damage to a single target. Has a -9 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { RuneofExplosion: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 440 },
    },

    RuneofBlizzard: {
      name_jp: "吹雪の大印術",
      name_en: "Blizzard Rune",
      details:
        "Deals ice damage to all enemies. Has a -9 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { RuneofIceFang: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 440 },
    },

    RuneofStorm: {
      name_jp: "天雷の大印術",
      name_en: "Galvanic Rune",
      details:
        "Deals volt damage randomly amongst the enemy party. Has a -9 Speed modifier and 90 Accuracy at all levels.",
      requires: "Head",
      dep: { RuneofThunderclap: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 440 },
    },

    RunicMastery: {
      name_jp: "印術マスタリ",
      name_en: "Rune Mastery",
      details: "Increases damage with Rune skills.",
      requires: null,
      dep: { RunicPrecision: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 138, y: 440 },
    },

    RuneofPrimordials: {
      name_jp: "始原の印術",
      name_en: "Origin Rune",
      details:
        "Deals non-attribute damage to the entire enemy party. Has a -15 Speed modifier and 99 Accuracy at all levels.",
      requires: "Head",
      dep: { RunicMastery: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 138, y: 540 },
    },
  },

  Arcanist: {
    NoviceMystic: {
      name_jp: "方陣師の心得",
      name_en: "Proficiency",
      details: "Recover TP when a zone effect ends.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranMystic: {
      name_jp: "方陣師の極意",
      name_en: "Expertise",
      details: "Recover more TP when a zone effect ends.",
      requires: null,
      dep: { NoviceMystic: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterMystic: {
      name_jp: "方陣師の悟り",
      name_en: "Enlightenment",
      details: "Recover even more TP when a zone effect ends.",
      requires: null,
      dep: { VeteranMystic: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Herbalism: {
      name_jp: "薬草学",
      name_en: "Herbology",
      details: "Chance when using a take node to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    SkilledCuisine: {
      name_jp: "精進料理",
      name_en: "Purist Chef",
      details: "Increases the potency of dishes that grant TP.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    StepGuard: {
      name_jp: "地脈操作",
      name_en: "Tame Ground",
      details: "Reduces the damage taken from floor tiles.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 4,
      coords: { x: 20, y: 20 },
    },

    SafetyAura: {
      name_jp: "退魔の霧",
      name_en: "Warding Mist",
      details:
        "Gives you and allies in your row a chance to evade status effects and binds.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 138, y: 20 },
    },

    ArmSealZone: {
      name_jp: "腕封の方陣",
      name_en: "Chain Circle",
      details:
        "Immediately, and at the end of the next three turns, attempt to bind the arms of all enemies. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 20 },
    },

    PoisonZone: {
      name_jp: "毒の方陣",
      name_en: "Poison Circle",
      details:
        "Immediately, and at the end of the next three turns, attempt to poison all enemies. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 20 },
    },

    HealingPower: {
      name_jp: "陣回復",
      name_en: "Circle Boon",
      details:
        "Heals your party at the end of the turn if you have a zone active.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 492, y: 20 },
    },

    HealingStroll: {
      name_jp: "回復歩行",
      name_en: "Bracing Walk",
      details: "Heal HP for every step you take.",
      requires: null,
      dep: { StepGuard: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 130 },
    },

    LegSealZone: {
      name_jp: "脚封の方陣",
      name_en: "Snare Circle",
      details:
        "Immediately, and at the end of the next three turns, attempt to bind the legs of all enemies. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { ArmSealZone: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 130 },
    },

    ParalysisZone: {
      name_jp: "麻痺の方陣",
      name_en: "Nerve Circle",
      details:
        "Immediately, and at the end of the next three turns, attempt to paralyze all enemies. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { PoisonZone: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 130 },
    },

    EvilEyeHamper: {
      name_jp: "魅了の邪眼",
      name_en: "Charm Eye",
      details:
        "For three turns, reduce a target's attack power. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 138, y: 240 },
    },

    HeadSealZone: {
      name_jp: "頭封の方陣",
      name_en: "Hood Circle",
      details:
        "Immediately, and at the end of the next three turns, attempt to bind the head of all enemies. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { LegSealZone: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 240 },
    },

    HypnoticZone: {
      name_jp: "催眠の方陣",
      name_en: "Sleep Circle",
      details:
        "Immediately, and at the end of the next three turns, attempt to put all enemies to sleep. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { ParalysisZone: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 240 },
    },

    PositiveEnergy: {
      name_jp: "破陣：命脈活性",
      name_en: "Dismiss Heal",
      details: "End the effects of a zone to heal the entire party.",
      requires: "Head",
      dep: { HealingPower: 2 },
      active: TRUE,
      max: 10,
      coords: { x: 492, y: 240 },
    },

    EvilEyeExpose: {
      name_jp: "衰身の邪眼",
      name_en: "Atrophic Eye",
      details:
        "For three turns, reduce a target's defenses. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { EvilEyeHamper: 2 },
      active: TRUE,
      max: 4,
      coords: { x: 138, y: 340 },
    },

    ConfusingZone: {
      name_jp: "幻惑の方陣",
      name_en: "Chaos Circle",
      details:
        "Immediately, and at the end of the next three turns, attempt to confuse all enemies. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: { HypnoticZone: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 340 },
    },

    NegativeEnergy: {
      name_jp: "破陣：亜空絞破",
      name_en: "Dismiss Blow",
      details:
        "End a zone early to deal damage to all enemies. Has 99 Accuracy at all levels.",
      requires: "Head",
      dep: { PositiveEnergy: 3 },
      active: TRUE,
      max: 6,
      coords: { x: 492, y: 340 },
    },

    EffectBoost: {
      name_jp: "抑制ブースト",
      name_en: "Ailment Boost",
      details:
        "Raises the success rate of binds, debuffs, and status conditions.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 138, y: 440 },
    },

    ResistReset: {
      name_jp: "解魔の札",
      name_en: "Releasal Spell",
      details:
        "Reset an enemy's accumulated resistance to repeated applications of status effects, binds, and debuffs. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 256, y: 440 },
    },

    TPReturn: {
      name_jp: "TPリターン",
      name_en: "TP Return",
      details:
        "Recover TP whenever you successfully apply a status effect or bind. This applies to zones' end-of-turn attempts as well as their initial attempt but will only trigger the TP recovery once per attempt no matter how many enemies are afflicted with the status ailment.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 374, y: 440 },
    },

    EnergyCollapse: {
      name_jp: "破陣：亜空鳴動",
      name_en: "Dismiss Blast",
      details:
        "End a zone to deal non-attribute damage to all enemies. Has 99 Accuracy at all levels.",
      requires: "Head",
      dep: { NegativeEnergy: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 492, y: 440 },
    },

    ZoneMastery: {
      name_jp: "方陣マスタリ",
      name_en: "Circle Mastery",
      details:
        "Higher level zones increase the effects of skills that end zones.",
      requires: null,
      dep: { EnergyCollapse: 3 },
      active: FALSE,
      max: 8,
      coords: { x: 492, y: 540 },
    },
  },

  Bushi: {
    NoviceSamurai: {
      name_jp: "武士の心得",
      name_en: "Proficiency",
      details: "Normal attacks recover TP",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranSamurai: {
      name_jp: "武士の極意",
      name_en: "Expertise",
      details: "Normal attacks recover more TP",
      requires: null,
      dep: { NoviceSamurai: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterSamurai: {
      name_jp: "武士の悟り",
      name_en: "Enlightenment",
      details: "Normal attacks recover even more TP",
      requires: null,
      dep: { VeteranSamurai: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Forestry: {
      name_jp: "樹木学",
      name_en: "Dendrology",
      details: "Chance when gathering lumber to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    HealthyCuisine: {
      name_jp: "強壮料理",
      name_en: "Robust Chef",
      details: "Increases the potency of dishes that grant Max HP.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    AttackBoost: {
      name_jp: "物理攻撃ブースト",
      name_en: "Power Boost",
      details: "Increases physical attack damage.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 10,
      coords: { x: 20, y: 20 },
    },

    Roar: {
      name_jp: "咆哮",
      name_en: "Roar",
      details:
        "Deals non-attribute damage to one enemy and removes all of his buffs. Has a -3 Speed modifier at all levels. This attack is guaranteed to hit a target with buffs.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 138, y: 20 },
    },

    Rage: {
      name_jp: "羅刹",
      name_en: "Blood Surge",
      details:
        "Fly into a rage, increasing all damage dealt but consuming HP and TP with every action",
      requires: null,
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 256, y: 20 },
    },

    MountainStrike: {
      name_jp: "峰打",
      name_en: "Nerve Strike",
      details:
        "Deals bash damage with a chance to paralyze. Has a +5 Speed modifier at all levels.",
      requires: "Arm, Hammer/Katana",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 430, y: 20 },
    },

    Endure: {
      name_jp: "食いしばり",
      name_en: "Endure",
      details: "Once per battle, auto-revive when killed.",
      requires: null,
      dep: { Rage: 1 },
      active: FALSE,
      max: 4,
      coords: { x: 256, y: 130 },
    },

    HeadCrush: {
      name_jp: "頭砕",
      name_en: "Skull Crusher",
      details: "Bash attack with a chance to seal the enemy's head.",
      requires: "Arm, Hammer",
      dep: { MountainStrike: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 130 },
    },

    CresentSwing: {
      name_jp: "弧月",
      name_en: "Moon Slash",
      details: "Deals slash damage to the enemy front row.",
      requires: "Arm, Katana",
      dep: { MountainStrike: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 130 },
    },

    Charge: {
      name_jp: "チャージ",
      name_en: "Charge",
      details:
        "Increases the physical damage of your next action.  Does nothing if the action does not deal physical damage. Has a -100 Speed modifier at all levels.",
      requires: null,
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 20, y: 240 },
    },

    PreemptiveRage: {
      name_jp: "先制羅刹",
      name_en: "Auto-Surge",
      details: "Chance to use Blood Surge for free at the beginning of battle.",
      requires: null,
      dep: { Endure: 2 },
      active: FALSE,
      max: 4,
      coords: { x: 138, y: 240 },
    },

    Calm: {
      name_jp: "羅刹解除",
      name_en: "Deep Breath",
      details:
        "End your Blood Surge status and recover HP and TP. Has a +20 Speed modifier at all levels, but since it is also a priority action, this only matters when compared to other priority actions.",
      requires: null,
      dep: { Endure: 1 },
      active: TRUE,
      max: 4,
      coords: { x: 256, y: 240 },
    },

    RecklessSwing: {
      name_jp: "衝破",
      name_en: "Shockwave",
      details:
        "Sacrifice HP to deal ranged Cut damage to all enemies. This attack will deal full damage to all enemies no matter which row the user is in.",
      requires: "Arm, Hammer/Katana",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 430, y: 240 },
    },

    Abandonment: {
      name_jp: "背水の陣",
      name_en: "Defiance",
      details:
        "Increases physical attack power when equipped with two weapons.",
      requires: null,
      dep: { Charge: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 340 },
    },

    MoltenHammer: {
      name_jp: "鉄火",
      name_en: "Fire Strike",
      details:
        "Deal bash and fire damage to a single enemy. Has a -3 Speed modifier at all levels.",
      requires: "Arm, Hammer",
      dep: { RecklessSwing: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 340 },
    },

    FrozenBlade: {
      name_jp: "氷刹",
      name_en: "Ice Slash",
      details:
        "Deals slash and ice damage to a single enemy. Has a +2 Speed modifier at all levels.",
      requires: "Arm, Katana",
      dep: { RecklessSwing: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 340 },
    },

    HealingWay: {
      name_jp: "獅子奮迅",
      name_en: "Ferocity",
      details: "Normal attacks restore HP",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 138, y: 440 },
    },

    RageMastery: {
      name_jp: "羅刹マスタリ",
      name_en: "Surge Mastery",
      details:
        "When in Blood Surge status, low HP raises defense and low TP raises attack.",
      requires: null,
      dep: { Calm: 2 },
      active: FALSE,
      max: 8,
      coords: { x: 256, y: 440 },
    },

    CrashingWake: {
      name_jp: "流墜衝",
      name_en: "Meteor Strike",
      details:
        "Deal bash damage to an enemy and his neighbors. Has a -3 Speed modifier and -15 Accuracy modifier at all levels.",
      requires: "Arm, Hammer",
      dep: { MoltenHammer: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 440 },
    },

    FlashingBlade: {
      name_jp: "閃刃",
      name_en: "Flash Slice",
      details: "Deal slash damage to a single enemy early in the round.",
      requires: "Arm, Katana",
      dep: { FrozenBlade: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 440 },
    },

    RiskyGambit: {
      name_jp: "乾坤一擲",
      name_en: "Fierce Strike",
      details:
        "Deals bash damage to one enemy, then you become paralyzed. Has a -10 Speed modifier and -5 Accuracy modifier at all levels.",
      requires: "Arm, Hammer",
      dep: { CrashingWake: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 540 },
    },

    FrenziedStrikes: {
      name_jp: "無双神楽",
      name_en: "Multi Slash",
      details:
        "Deal slash damage to all enemies. For every 10% HP below 51% of user’s max HP, add 1 hit to both min and max number of hits. Has a +3 Speed modifier at all levels.",
      requires: "Arm, Katana",
      dep: { FlashingBlade: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 492, y: 540 },
    },
  },

  Imperial: {
    NoviceImperial: {
      name_jp: "帝国騎士の心得",
      name_en: "Proficiency",
      details:
        "Reduce the number of turns it takes for your Driveblade to cool off.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 20 },
    },

    VeteranImperial: {
      name_jp: "帝国騎士の極意",
      name_en: "Expertise",
      details:
        "Further reduce the number of turns it takes for your Driveblade to cool off.",
      requires: null,
      dep: { NoviceImperial: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 240 },
    },

    MasterImperial: {
      name_jp: "帝国騎士の悟り",
      name_en: "Enlightenment",
      details:
        "Even further reduce the number of turns it takes for your Driveblade to cool off.",
      requires: null,
      dep: { VeteranImperial: 1 },
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -140, y: 490 },
    },

    Mineralogy: {
      name_jp: "鉱物学",
      name_en: "Mineralogy",
      details: "Chance when mining to also receive a rare material.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 140 },
    },

    Conservation: {
      name_jp: "狩猟者の嗅覚",
      name_en: "Hunter Sense",
      details:
        "Chance when gathering food on the world map to not consume the node.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 1,
      unique: true,
      coords: { x: -100, y: 340 },
    },

    AttackBoost: {
      name_jp: "物理攻撃ブースト",
      name_en: "Power Boost",
      details: "Increases physical attack power.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 20 },
    },

    AssaultDrive: {
      name_jp: "アサルトドライブ",
      name_en: "Assault Drive",
      details:
        "Deals slash damage to one target, but causes your Driveblade to overheat for 8 turns. Has a -10 Speed modifier at all levels.",
      requires: "Arm, Driveblade",
      dep: {},
      active: TRUE,
      max: 10,
      coords: { x: 256, y: 20 },
    },

    SharpEdge: {
      name_jp: "シャープエッジ",
      name_en: "Sharp Edge",
      details:
        "Deals slash damage and reduces the overheat of your Driveblade by 1 turn.",
      requires: "Arm, Driveblade",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 492, y: 20 },
    },

    RearGuard: {
      name_jp: "リアガード",
      name_en: "Rear Guard",
      details:
        "Reduces damage taken for one ally and causes them to act last. Has a -30 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 6,
      coords: { x: 20, y: 130 },
    },

    ForcedHeat: {
      name_jp: "強制排熱",
      name_en: "Heat Sink",
      details:
        "Vent the heat in your Driveblade, shortening the overheat status by 3 turns.",
      requires: "Head, Driveblade",
      dep: { AssaultDrive: 2 },
      active: TRUE,
      max: 4,
      coords: { x: 256, y: 130 },
    },

    ImpulseEdge: {
      name_jp: "インパルスエッジ",
      name_en: "Impulse Edge",
      details:
        "Deals damage to one target and recovers TP. Usable after using Sharp Edge.",
      requires: "Arm, Driveblade",
      dep: { SharpEdge: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 492, y: 130 },
    },

    Hawkeye: {
      name_jp: "ホークアイ",
      name_en: "Hawkeye",
      details:
        "For three turns, cause one enemy to take extra elemental damage. Has a -6 Speed modifier at all levels.",
      requires: "Head",
      dep: {},
      active: TRUE,
      max: 4,
      coords: { x: 20, y: 240 },
    },

    ShockDrive: {
      name_jp: "ショックドライブ",
      name_en: "Shock Drive",
      details:
        "Deals volt and slash damage to one target, but causes your Driveblade to overheat for 9 turns. Has a -10 speed modifier and +5 accuracy modifier at all levels.",
      requires: "Arm, Driveblade",
      dep: { ForcedHeat: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 138, y: 240 },
    },

    FreezeDrive: {
      name_jp: "フリーズドライブ",
      name_en: "Freeze Drive",
      details:
        "Deals ice and slash damage to one target, but causes your Driveblade to overheat for 9 turns. Has a -10 speed modifier and +5 accuracy modifier at all levels.",
      requires: "Arm, Driveblade",
      dep: { ForcedHeat: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 256, y: 240 },
    },

    FlameDrive: {
      name_jp: "フレイムドライブ",
      name_en: "Flame Drive",
      details:
        "Deals fire and slash damage to one target, but causes your Driveblade to overheat for 9 turns. Has a -10 speed modifier and +5 accuracy modifier at all levels.",
      requires: "Arm, Driveblade",
      dep: { ForcedHeat: 2 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 240 },
    },

    CoolEdge: {
      name_jp: "クールエッジ",
      name_en: "Cool Edge",
      details:
        "Deals damage and reduces your Driveblade's overheat by 2 turns.  Useable after Sharp Edge or Impulse Edge.",
      requires: "Arm, Driveblade",
      dep: { ImpulseEdge: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 492, y: 240 },
    },

    Converter: {
      name_jp: "コンバーター",
      name_en: "Absorber",
      details: "Restores TP when attacking an enemy's weak point.",
      requires: null,
      dep: { Hawkeye: 2 },
      active: FALSE,
      max: 6,
      coords: { x: 20, y: 340 },
    },

    ChargeEdge: {
      name_jp: "チャージエッジ",
      name_en: "Charge Edge",
      details:
        "Deal slash damage to one target, and increase the damage of the next attack.  Available after Cool Edge or Sharp Edge.",
      requires: "Arm, Driveblade",
      dep: { CoolEdge: 2 },
      active: TRUE,
      max: 6,
      coords: { x: 492, y: 340 },
    },

    DamageBoost: {
      name_jp: "属性攻撃ブースト",
      name_en: "Element Boost",
      details: "Increases all elemental and non-attribute damage.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 8,
      coords: { x: 20, y: 440 },
    },

    Accelerator: {
      name_jp: "アクセルドライブ",
      name_en: "Accel Drive",
      details:
        "Deals slash and non-attribute damage to one target, but overheats your Driveblade for 9 turns. Has a -10 speed modifier and +5 accuracy modifier at all levels.",
      requires: "Arm, Driveblade",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 138, y: 440 },
    },

    Finisher: {
      name_jp: "フィニッシャー",
      name_en: "Finisher",
      details: "Restore TP when you kill an enemy.",
      requires: null,
      dep: {},
      active: FALSE,
      max: 6,
      coords: { x: 256, y: 440 },
    },

    Ignition: {
      name_jp: "イグニッション",
      name_en: "Ignition",
      details:
        "For the next three turns, your Driveblade will not overheat. Also removes current Overheat status, if applicable.",
      requires: "Head, Driveblade",
      dep: {},
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 440 },
    },

    DriveMastery: {
      name_jp: "ドライブマスタリ",
      name_en: "Drive Mastery",
      details:
        "Increases your damage for the rest of combat (or until you are killed) every time your Driveblade overheats.",
      requires: null,
      dep: { Accelerator: 3 },
      active: TRUE,
      max: 8,
      coords: { x: 138, y: 540 },
    },

    WideEffect: {
      name_jp: "ワイドエフェクト",
      name_en: "Wide Effect",
      details:
        "Single-target skills also have a chance to affect neighboring enemies. The chance is rolled for each enemy individually if there are two enemies next to the target, rather than once for both.",
      requires: null,
      dep: { Finisher: 3 },
      active: TRUE,
      max: 6,
      coords: { x: 256, y: 540 },
    },

    Overdrive: {
      name_jp: "オーバードライブ",
      name_en: "Overdrive",
      details:
        "Remove the Ignition status to deal non-attribute damage to all enemies.Has a -10 speed modifier and +20 accuracy modifier at all levels.",
      requires: "Arm, Driveblade",
      dep: { Ignition: 4 },
      active: TRUE,
      max: 8,
      coords: { x: 374, y: 540 },
    },
  },
};
/*
        FILE ARCHIVED ON 12:48:53 Nov 25, 2014 AND RETRIEVED FROM THE
        INTERNET ARCHIVE ON 10:52:17 May 19, 2017.
        JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.
    
        ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
        SECTION 108(a)(3)).
    */
