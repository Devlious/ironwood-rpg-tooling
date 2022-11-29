//// Hatchet
import WoodHatchetIcon from '/public/images/weapon-wood-hatchet.png'
import CopperHatchetIcon from '/public/images/weapon-copper-hatchet.png'
import IronHatchetIcon from '/public/images/weapon-iron-hatchet.png'
import SilverHatchetIcon from '/public/images/weapon-silver-hatchet.png'
import GoldHatchetIcon from '/public/images/weapon-gold-hatchet.png'
import CobaltHatchetIcon from '/public/images/weapon-cobalt-hatchet.png'
import ObsidianHatchetIcon from '/public/images/weapon-obsidian-hatchet.png'

//// Pickaxe
import WoodPickaxeIcon from '/public/images/weapon-wood-pickaxe.png'
import CopperPickaxeIcon from '/public/images/weapon-copper-pickaxe.png'
import IronPickaxeIcon from '/public/images/weapon-iron-pickaxe.png'
import SilverPickaxeIcon from '/public/images/weapon-silver-pickaxe.png'
import GoldPickaxeIcon from '/public/images/weapon-gold-pickaxe.png'
import CobaltPickaxeIcon from '/public/images/weapon-cobalt-pickaxe.png'
import ObsidianPickaxeIcon from '/public/images/weapon-obsidian-pickaxe.png'

//// Rod
import WoodRodIcon from '/public/images/tool-wood-rod.png'
import CopperRodIcon from '/public/images/tool-copper-rod.png'
import IronRodIcon from '/public/images/tool-iron-rod.png'
import SilverRodIcon from '/public/images/tool-silver-rod.png'
import GoldRodIcon from '/public/images/tool-gold-rod.png'
import CobaltRodIcon from '/public/images/tool-cobalt-rod.png'
import ObsidianRodIcon from '/public/images/tool-obsidian-rod.png'

//// Spade
import WoodSpadeIcon from '/public/images/tool-wood-spade.png'
import CopperSpadeIcon from '/public/images/tool-copper-spade.png'
import IronSpadeIcon from '/public/images/tool-iron-spade.png'
import SilverSpadeIcon from '/public/images/tool-silver-spade.png'
import GoldSpadeIcon from '/public/images/tool-gold-spade.png'
import CobaltSpadeIcon from '/public/images/tool-cobalt-spade.png'
import ObsidianSpadeIcon from '/public/images/tool-obsidian-spade.png'


/////////////////////
//     WEAPONS     //
/////////////////////


//// Sword
import WoodSwordIcon from '/public/images/weapon-wood-sword.png'
import CopperSwordIcon from '/public/images/weapon-copper-sword.png'
import IronSwordIcon from '/public/images/weapon-iron-sword.png'
import SilverSwordIcon from '/public/images/weapon-silver-sword.png'
import GoldSwordIcon from '/public/images/weapon-gold-sword.png'
import CobaltSwordIcon from '/public/images/weapon-cobalt-sword.png'
import ObsidianSwordIcon from '/public/images/weapon-obsidian-sword.png'

//// Hammer
import WoodHammerIcon from '/public/images/weapon-wood-hammer.png'
import CopperHammerIcon from '/public/images/weapon-copper-hammer.png'
import IronHammerIcon from '/public/images/weapon-iron-hammer.png'
import SilverHammerIcon from '/public/images/weapon-silver-hammer.png'
import GoldHammerIcon from '/public/images/weapon-gold-hammer.png'
import CobaltHammerIcon from '/public/images/weapon-cobalt-hammer.png'
import ObsidianHammerIcon from '/public/images/weapon-obsidian-hammer.png'


/////////////////////
//    EQUIPMENT    //
/////////////////////


//// Helmet
import CopperHelmetIcon from '/public/images/armor-copper-helmet.png'
import IronHelmetIcon from '/public/images/armor-iron-helmet.png'
import SilverHelmetIcon from '/public/images/armor-silver-helmet.png'
import GoldHelmetIcon from '/public/images/armor-gold-helmet.png'
import CobaltHelmetIcon from '/public/images/armor-cobalt-helmet.png'
import ObsidianHelmetIcon from '/public/images/armor-obsidian-helmet.png'

//// Body
import CopperBodyIcon from '/public/images/armor-copper-body.png'
import IronBodyIcon from '/public/images/armor-iron-body.png'
import SilverBodyIcon from '/public/images/armor-silver-body.png'
import GoldBodyIcon from '/public/images/armor-gold-body.png'
import CobaltBodyIcon from '/public/images/armor-cobalt-body.png'
import ObsidianBodyIcon from '/public/images/armor-obsidian-body.png'

//// Boots
import CopperBootsIcon from '/public/images/armor-copper-boots.png'
import IronBootsIcon from '/public/images/armor-iron-boots.png'
import SilverBootsIcon from '/public/images/armor-silver-boots.png'
import GoldBootsIcon from '/public/images/armor-gold-boots.png'
import CobaltBootsIcon from '/public/images/armor-cobalt-boots.png'
import ObsidianBootsIcon from '/public/images/armor-obsidian-boots.png'

//// Gloves
import CopperGlovesIcon from '/public/images/armor-copper-gloves.png'
import IronGlovesIcon from '/public/images/armor-iron-gloves.png'
import SilverGlovesIcon from '/public/images/armor-silver-gloves.png'
import GoldGlovesIcon from '/public/images/armor-gold-gloves.png'
import CobaltGlovesIcon from '/public/images/armor-cobalt-gloves.png'
import ObsidianGlovesIcon from '/public/images/armor-obsidian-gloves.png'

//// Shield
import CopperShieldIcon from '/public/images/armor-copper-shield.png'
import IronShieldIcon from '/public/images/armor-iron-shield.png'
import SilverShieldIcon from '/public/images/armor-silver-shield.png'
import GoldShieldIcon from '/public/images/armor-gold-shield.png'
import CobaltShieldIcon from '/public/images/armor-cobalt-shield.png'
import ObsidianShieldIcon from '/public/images/armor-obsidian-shield.png'


export const hatchets = [
    {
        name: 'Wood Hatchet',
        type: 'tool',
        tool: 'hatchet',
        icon: WoodHatchetIcon,
        description: 'This is a Wood Hatchet. You can use it in woodcutting.',
        level: 1,
        vendor_price: 16,
        skill_boost: 'woodcutting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Copper Hatchet',
        type: 'tool',
        tool: 'hatchet',
        icon: CopperHatchetIcon,
        description: 'This is a Copper Hatchet. You can use it in woodcutting.',
        level: 1,
        vendor_price: 32,
        skill_boost: 'woodcutting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Iron Hatchet',
        type: 'tool',
        tool: 'hatchet',
        icon: IronHatchetIcon,
        description: 'This is an Iron Hatchet. You can use it in woodcutting.',
        level: 10,
        vendor_price: 48,
        skill_boost: 'woodcutting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 18,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Silver Hatchet',
        type: 'tool',
        tool: 'hatchet',
        icon: SilverHatchetIcon,
        description: 'This is a Silver Hatchet. You can use it in woodcutting.',
        level: 25,
        vendor_price: 64,
        skill_boost: 'woodcutting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 24,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Gold Hatchet',
        type: 'tool',
        tool: 'hatchet',
        icon: GoldHatchetIcon,
        description: 'This is a Gold Hatchet. You can use it in woodcutting.',
        level: 40,
        vendor_price: 80,
        skill_boost: 'woodcutting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 30,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Cobalt Hatchet',
        type: 'tool',
        tool: 'hatchet',
        icon: CobaltHatchetIcon,
        description: 'This is a Cobalt Hatchet. You can use it in woodcutting.',
        level: 55,
        vendor_price: 96,
        skill_boost: 'woodcutting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 36,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Obsidian Hatchet',
        type: 'tool',
        tool: 'hatchet',
        icon: ObsidianHatchetIcon,
        description: 'This is an Obsidian Hatchet. You can use it in woodcutting.',
        level: 70,
        vendor_price: 112,
        skill_boost: 'woodcutting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 42,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    }
]

export const pickaxes = [
    {
        name: 'Wood Pickaxe',
        type: 'tool',
        tool: 'pickaxe',
        icon: WoodPickaxeIcon,
        description: 'This is a Wood Pickaxe. You can use it in mining.',
        level: 1,
        vendor_price: 16,
        skill_boost: 'mining',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Copper Pickaxe',
        type: 'tool',
        tool: 'pickaxe',
        icon: CopperPickaxeIcon,
        description: 'This is a Copper Pickaxe. You can use it in mining.',
        level: 1,
        vendor_price: 32,
        skill_boost: 'mining',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Iron Pickaxe',
        type: 'tool',
        tool: 'pickaxe',
        icon: IronPickaxeIcon,
        description: 'This is an Iron Pickaxe. You can use it in mining.',
        level: 10,
        vendor_price: 48,
        skill_boost: 'mining',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 18,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Silver Pickaxe',
        type: 'tool',
        tool: 'pickaxe',
        icon: SilverPickaxeIcon,
        description: 'This is a Silver Pickaxe. You can use it in mining.',
        level: 25,
        vendor_price: 64,
        skill_boost: 'mining',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 24,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Gold Pickaxe',
        type: 'tool',
        tool: 'pickaxe',
        icon: GoldPickaxeIcon,
        description: 'This is a Gold Pickaxe. You can use it in mining.',
        level: 40,
        vendor_price: 80,
        skill_boost: 'mining',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 30,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Cobalt Pickaxe',
        type: 'tool',
        tool: 'pickaxe',
        icon: CobaltPickaxeIcon,
        description: 'This is a Cobalt Pickaxe. You can use it in mining.',
        level: 55,
        vendor_price: 96,
        skill_boost: 'mining',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 36,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Obsidian Pickaxe',
        type: 'tool',
        tool: 'pickaxe',
        icon: ObsidianHatchetIcon,
        description: 'This is an Obsidian Pickaxe. You can use it in mining.',
        level: 70,
        vendor_price: 112,
        skill_boost: 'mining',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 42,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    }
]

export const rods = [
    {
        name: 'Wood Rod',
        type: 'tool',
        tool: 'rod',
        icon: WoodRodIcon,
        description: 'This is a Wood Rod. You can use it in fishing.',
        level: 1,
        vendor_price: 16,
        skill_boost: 'fishing',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Copper Rod',
        type: 'tool',
        tool: 'rod',
        icon: CopperRodIcon,
        description: 'This is a Copper Rod. You can use it in fishing.',
        level: 1,
        vendor_price: 32,
        skill_boost: 'fishing',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Iron Rod',
        type: 'tool',
        tool: 'rod',
        icon: IronRodIcon,
        description: 'This is an Iron Rod. You can use it in fishing.',
        level: 10,
        vendor_price: 48,
        skill_boost: 'fishing',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 18,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Silver Rod',
        type: 'tool',
        tool: 'rod',
        icon: SilverRodIcon,
        description: 'This is a Silver Rod. You can use it in fishing.',
        level: 25,
        vendor_price: 64,
        skill_boost: 'fishing',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 24,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Gold Rod',
        type: 'tool',
        tool: 'rod',
        icon: GoldRodIcon,
        description: 'This is a Gold Rod. You can use it in fishing.',
        level: 40,
        vendor_price: 80,
        skill_boost: 'fishing',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 30,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Cobalt Rod',
        type: 'tool',
        tool: 'rod',
        icon: CobaltRodIcon,
        description: 'This is a Cobalt Rod. You can use it in fishing.',
        level: 55,
        vendor_price: 96,
        skill_boost: 'fishing',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 36,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Obsidian Rod',
        type: 'tool',
        tool: 'rod',
        icon: ObsidianRodIcon,
        description: 'This is an Obsidian Rod. You can use it in fishing.',
        level: 70,
        vendor_price: 112,
        skill_boost: 'fishing',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 42,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    }
]



export const spades = [
    {
        name: 'Wood Spade',
        type: 'tool',
        tool: 'spade',
        icon: WoodSpadeIcon,
        description: 'This is a Wood Spade. You can use it in farming.',
        level: 1,
        vendor_price: 16,
        skill_boost: 'farming',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Copper spade',
        type: 'tool',
        tool: 'spade',
        icon: CopperSpadeIcon,
        description: 'This is a Copper Spade. You can use it in farming.',
        level: 1,
        vendor_price: 32,
        skill_boost: 'farming',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Iron Spade',
        type: 'tool',
        tool: 'spade',
        icon: IronSpadeIcon,
        description: 'This is an Iron Spade. You can use it in farming.',
        level: 10,
        vendor_price: 48,
        skill_boost: 'farming',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 18,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Silver Spade',
        type: 'tool',
        tool: 'spade',
        icon: SilverSpadeIcon,
        description: 'This is a Silver Spade. You can use it in farming.',
        level: 25,
        vendor_price: 64,
        skill_boost: 'farming',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 24,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Gold Spade',
        type: 'tool',
        tool: 'spade',
        icon: GoldSpadeIcon,
        description: 'This is a Gold Spade. You can use it in farming.',
        level: 40,
        vendor_price: 80,
        skill_boost: 'farming',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 30,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Cobalt Spade',
        type: 'tool',
        tool: 'spade',
        icon: CobaltSpadeIcon,
        description: 'This is a Cobalt Spade. You can use it in farming.',
        level: 55,
        vendor_price: 96,
        skill_boost: 'farming',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 36,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Obsidian Spade',
        type: 'tool',
        tool: 'spade',
        icon: ObsidianSpadeIcon,
        description: 'This is an Obsidian Spade. You can use it in farming.',
        level: 70,
        vendor_price: 112,
        skill_boost: 'farming',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 42,
        },
        attrs: [
            'equipment',
            'sellable',
            'gathering',
        ]
    }
]

/////////////////////////

export const swords = [
    {
        name: 'Wood Sword',
        type: 'weapon',
        tool: 'sword',
        icon: WoodSwordIcon,
        description: 'This is a Wood Sword. You can use it in combat.',
        level: 1,
        vendor_price: 16,
        stats: {
            attack: 5,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Copper Sword',
        type: 'weapon',
        tool: 'sword',
        icon: CopperSwordIcon,
        description: 'This is a Copper Sword. You can use it in combat.',
        level: 1,
        vendor_price: 32,
        stats: {
            attack: 10,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Iron Sword',
        type: 'weapon',
        tool: 'sword',
        icon: IronSwordIcon,
        description: 'This is an Iron Sword. You can use it in combat.',
        level: 10,
        vendor_price: 48,
        stats: {
            attack: 20,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Silver Sword',
        type: 'weapon',
        tool: 'sword',
        icon: SilverSwordIcon,
        description: 'This is a Silver Sword. You can use it in combat.',
        level: 25,
        vendor_price: 64,
        stats: {
            attack: 30,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Gold Sword',
        type: 'weapon',
        tool: 'sword',
        icon: GoldSwordIcon,
        description: 'This is a Gold Sword. You can use it in combat.',
        level: 40,
        vendor_price: 80,
        stats: {
            attack: 40,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Cobalt Sword',
        type: 'weapon',
        tool: 'sword',
        icon: CobaltSwordIcon,
        description: 'This is a Cobalt Sword. You can use it in combat.',
        level: 55,
        vendor_price: 96,
        stats: {
            attack: 50,
        } ,
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Obsidian Sword',
        type: 'weapon',
        tool: 'sword',
        icon: ObsidianSwordIcon,
        description: 'This is an Obsidian Sword. You can use it in combat.',
        level: 70,
        vendor_price: 112,
        stats: {
          attack: 60,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    }
]

export const hammers = [
    {
        name: 'Wood Hammer',
        type: 'weapon',
        tool: 'hammer',
        icon: WoodHammerIcon,
        description: 'This is a Wood Hammer. You can use it in combat.',
        level: 1,
        vendor_price: 16,
        stats: {
            attack: 5,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Copper Hammer',
        type: 'weapon',
        tool: 'hammer',
        icon: CopperHammerIcon,
        description: 'This is a Copper Hammer. You can use it in combat.',
        level: 1,
        vendor_price: 32,
        stats: {
            attack: 10,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Iron Hammer',
        type: 'weapon',
        tool: 'hammer',
        icon: IronHammerIcon,
        description: 'This is an Iron Hammer. You can use it in combat.',
        level: 10,
        vendor_price: 48,
        stats: {
            attack: 20,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Silver Hammer',
        type: 'weapon',
        tool: 'hammer',
        icon: SilverHammerIcon,
        description: 'This is a Silver Hammer. You can use it in combat.',
        level: 25,
        vendor_price: 64,
        stats: {
            attack: 30,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Gold Hammer',
        type: 'weapon',
        tool: 'hammer',
        icon: GoldHammerIcon,
        description: 'This is a Gold Hammer. You can use it in combat.',
        level: 40,
        vendor_price: 80,
        stats: {
            attack: 40,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Cobalt Hammer',
        type: 'weapon',
        tool: 'hammer',
        icon: CobaltHammerIcon,
        description: 'This is a Cobalt Hammer. You can use it in combat.',
        level: 55,
        vendor_price: 96,
        stats: {
            attack: 50,
        } ,
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Obsidian Hammer',
        type: 'weapon',
        tool: 'hammer',
        icon: ObsidianHammerIcon,
        description: 'This is an Obsidian Hammer. You can use it in combat.',
        level: 70,
        vendor_price: 112,
        stats: {
            attack: 60,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    }
]

export const helmets = [
    {
        name: 'Copper Helmet',
        type: 'equipment',
        tool: 'helmet',
        icon: CopperHelmetIcon,
        description: 'This is a Copper Helmet. You can use it in combat.',
        level: 1,
        vendor_price: 32,
        stats: {
            health: 2,
            defense: 2,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Iron Helmet',
        type: 'equipment',
        tool: 'helmet',
        icon: IronHelmetIcon,
        description: 'This is an Iron Helmet. You can use it in combat.',
        level: 10,
        vendor_price: 48,
        stats: {
            health: 4,
            defense: 4,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Silver Helmet',
        type: 'equipment',
        tool: 'helmet',
        icon: SilverHelmetIcon,
        description: 'This is a Silver Helmet. You can use it in combat.',
        level: 25,
        vendor_price: 64,
        stats: {
            health: 6,
            defense: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Gold Helmet',
        type: 'equipment',
        tool: 'helmet',
        icon: GoldHelmetIcon,
        description: 'This is a Gold Helmet. You can use it in combat.',
        level: 40,
        vendor_price: 80,
        stats: {
            health: 8,
            defense: 8,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Cobalt Helmet',
        type: 'equipment',
        tool: 'helmet',
        icon: CobaltHelmetIcon,
        description: 'This is a Cobalt Helmet. You can use it in combat.',
        level: 55,
        vendor_price: 96,
        stats: {
            health: 10,
            defense: 10,
        } ,
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Obsidian Helmet',
        type: 'equipment',
        tool: 'helmet',
        icon: ObsidianHelmetIcon,
        description: 'This is an Obsidian Helmet. You can use it in combat.',
        level: 70,
        vendor_price: 112,
        stats: {
            health: 12,
            defense: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    }
]

export const bodies = [
    {
        name: 'Copper Body',
        type: 'equipment',
        tool: 'body',
        icon: CopperBodyIcon,
        description: 'This is a Copper Body. You can use it in combat.',
        level: 1,
        vendor_price: 32,
        stats: {
            health: 4,
            defense: 4,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Iron Body',
        type: 'equipment',
        tool: 'body',
        icon: IronBodyIcon,
        description: 'This is an Iron Body. You can use it in combat.',
        level: 10,
        vendor_price: 48,
        stats: {
            health: 6,
            defense: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Silver Body',
        type: 'equipment',
        tool: 'body',
        icon: SilverBodyIcon,
        description: 'This is a Silver Body. You can use it in combat.',
        level: 25,
        vendor_price: 64,
        stats: {
            health: 8,
            defense: 8,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Gold Body',
        type: 'equipment',
        tool: 'body',
        icon: GoldBodyIcon,
        description: 'This is a Gold Body. You can use it in combat.',
        level: 40,
        vendor_price: 80,
        stats: {
            health: 10,
            defense: 10,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Cobalt Body',
        type: 'equipment',
        tool: 'body',
        icon: CobaltBodyIcon,
        description: 'This is a Cobalt Body. You can use it in combat.',
        level: 55,
        vendor_price: 96,
        stats: {
            health: 12,
            defense: 12,
        } ,
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Obsidian Body',
        type: 'equipment',
        tool: 'body',
        icon: ObsidianBodyIcon,
        description: 'This is an Obsidian Body. You can use it in combat.',
        level: 70,
        vendor_price: 112,
        stats: {
            health: 14,
            defense: 14,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    }
]

export const boots = [
    {
        name: 'Copper Boots',
        type: 'equipment',
        tool: 'boots',
        icon: CopperBootsIcon,
        description: 'This is a Copper Boots. You can use it in combat.',
        level: 1,
        vendor_price: 32,
        stats: {
            health: 2,
            defense: 2,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Iron Boots',
        type: 'equipment',
        tool: 'boots',
        icon: IronBootsIcon,
        description: 'This is an Iron Boots. You can use it in combat.',
        level: 10,
        vendor_price: 48,
        stats: {
            health: 4,
            defense: 4,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Silver Boots',
        type: 'equipment',
        tool: 'boots',
        icon: SilverBootsIcon,
        description: 'This is a Silver Boots. You can use it in combat.',
        level: 25,
        vendor_price: 64,
        stats: {
            health: 6,
            defense: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Gold Boots',
        type: 'equipment',
        tool: 'boots',
        icon: GoldBootsIcon,
        description: 'This is a Gold Boots. You can use it in combat.',
        level: 40,
        vendor_price: 80,
        stats: {
            health: 8,
            defense: 8,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Cobalt Boots',
        type: 'equipment',
        tool: 'boots',
        icon: CobaltBootsIcon,
        description: 'This is a Cobalt Boots. You can use it in combat.',
        level: 55,
        vendor_price: 96,
        stats: {
            health: 10,
            defense: 10,
        } ,
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Obsidian Boots',
        type: 'equipment',
        tool: 'boots',
        icon: ObsidianBootsIcon,
        description: 'This is an Obsidian Boots. You can use it in combat.',
        level: 70,
        vendor_price: 112,
        stats: {
            health: 12,
            defense: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    }
]

export const gloves = [
    {
        name: 'Copper Gloves',
        type: 'equipment',
        tool: 'gloves',
        icon: CopperGlovesIcon,
        description: 'This is a Copper Gloves. You can use it in combat.',
        level: 1,
        vendor_price: 32,
        stats: {
            health: 2,
            defense: 2,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Iron Gloves',
        type: 'equipment',
        tool: 'gloves',
        icon: IronGlovesIcon,
        description: 'This is an Iron Gloves. You can use it in combat.',
        level: 10,
        vendor_price: 48,
        stats: {
            health: 4,
            defense: 4,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Silver Gloves',
        type: 'equipment',
        tool: 'gloves',
        icon: SilverGlovesIcon,
        description: 'This is a Silver Gloves. You can use it in combat.',
        level: 25,
        vendor_price: 64,
        stats: {
            health: 6,
            defense: 6,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Gold Gloves',
        type: 'equipment',
        tool: 'gloves',
        icon: GoldGlovesIcon,
        description: 'This is a Gold Gloves. You can use it in combat.',
        level: 40,
        vendor_price: 80,
        stats: {
            health: 8,
            defense: 8,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Cobalt Gloves',
        type: 'equipment',
        tool: 'gloves',
        icon: CobaltGlovesIcon,
        description: 'This is a Cobalt Gloves. You can use it in combat.',
        level: 55,
        vendor_price: 96,
        stats: {
            health: 10,
            defense: 10,
        } ,
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Obsidian Gloves',
        type: 'equipment',
        tool: 'gloves',
        icon: ObsidianGlovesIcon,
        description: 'This is an Obsidian Gloves. You can use it in combat.',
        level: 70,
        vendor_price: 112,
        stats: {
            health: 12,
            defense: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    }
]

export const shields = [
    {
        name: 'Copper Shield',
        type: 'equipment',
        tool: 'shield',
        icon: CopperShieldIcon,
        description: 'This is a Copper Shield. You can use it in combat.',
        level: 1,
        vendor_price: 32,
        stats: {
            defense: 4,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Iron Shield',
        type: 'equipment',
        tool: 'shield',
        icon: IronShieldIcon,
        description: 'This is an Iron Shield. You can use it in combat.',
        level: 10,
        vendor_price: 48,
        stats: {
            defense: 8,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Silver Shield',
        type: 'equipment',
        tool: 'shield',
        icon: SilverShieldIcon,
        description: 'This is a Silver Shield. You can use it in combat.',
        level: 25,
        vendor_price: 64,
        stats: {
            defense: 12,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Gold Shield',
        type: 'equipment',
        tool: 'shield',
        icon: GoldShieldIcon,
        description: 'This is a Gold Shield. You can use it in combat.',
        level: 40,
        vendor_price: 80,
        stats: {
            defense: 16,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Cobalt Shield',
        type: 'equipment',
        tool: 'shield',
        icon: CobaltShieldIcon,
        description: 'This is a Cobalt Shield. You can use it in combat.',
        level: 55,
        vendor_price: 96,
        stats: {
            defense: 20,
        } ,
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    },
    {
        name: 'Obsidian Shield',
        type: 'equipment',
        tool: 'shield',
        icon: ObsidianShieldIcon,
        description: 'This is an Obsidian Shield. You can use it in combat.',
        level: 70,
        vendor_price: 112,
        stats: {
            defense: 24,
        },
        attrs: [
            'equipment',
            'sellable',
            'combat',
        ]
    }
]

