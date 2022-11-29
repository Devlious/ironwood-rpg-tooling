/////////////////////
//     POTIONS     //
/////////////////////

// Ruby
import RubyCombatIcon from '/public/images/ruby-combat-potion.png'
import RubyGatheringIcon from '/public/images/ruby-gathering-potion.png'
import RubyCraftingIcon from '/public/images/ruby-crafting-potion.png'

// Topaz
import TopazCombatIcon from '/public/images/topaz-combat-potion.png'
import TopazGatheringIcon from '/public/images/topaz-gathering-potion.png'
import TopazCraftingIcon from '/public/images/topaz-crafting-potion.png'

// Emerald
import EmeraldCombatIcon from '/public/images/emerald-combat-potion.png'
import EmeraldGatheringIcon from '/public/images/emerald-gathering-potion.png'
import EmeraldCraftingIcon from '/public/images/emerald-crafting-potion.png'

// Amethyst
import AmethystCombatIcon from '/public/images/amethyst-combat-potion.png'
import AmethystGatheringIcon from '/public/images/amethyst-gathering-potion.png'
import AmethystCraftingIcon from '/public/images/amethyst-crafting-potion.png'

// Citrine
import CitrineCombatIcon from '/public/images/citrine-combat-potion.png'
import CitrineGatheringIcon from '/public/images/citrine-gathering-potion.png'
import CitrineCraftingIcon from '/public/images/citrine-crafting-potion.png'

// Diamond
import DiamondCombatIcon from '/public/images/diamond-combat-potion.png'
import DiamondGatheringIcon from '/public/images/diamond-gathering-potion.png'
import DiamondCraftingIcon from '/public/images/diamond-crafting-potion.png'


////////////////////
//     FISHES     //
////////////////////

import CookedShrimpIcon from '/public/images/food-cooked-shrimp.png'
import CookedCodIcon from '/public/images/food-cooked-cod.png'
import CookedSalmonIcon from '/public/images/food-cooked-salmon.png'
import CookedBassIcon from '/public/images/food-cooked-bass.png'
import CookedLobsterIcon from '/public/images/food-cooked-lobster.png'
import CookedSwordfishIcon from '/public/images/food-cooked-swordfish.png'


////////////////////////
//     VEGETABLES     //
////////////////////////

import AppleIcon from '/public/images/food-apple.png'
import GrapesIcon from '/public/images/food-grapes.png'
import CherryIcon from '/public/images/food-cherry.png'
import GreenAppleIcon from '/public/images/food-green-apple.png'
import BlackcurrantIcon from '/public/images/food-blackcurrant.png'
import RaspberryIcon from '/public/images/food-raspberry.png'

export const potions = [
    // Ruby
    {
        name: 'Ruby Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: RubyCombatIcon,
        description: 'This is a Ruby Combat Potion. You can use it in combat. [1 potion / action]',
        level: 0,
        produce_level: 1,
        vendor_price: 20,
        skill_boost: 'combat',
        boost: {
            attack: 4,
            defense: 4,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Ruby Gathering Potion',
        type: 'consumable',
        tool: 'potion',
        icon: RubyGatheringIcon,
        description: 'This is a Ruby Gathering Potion. You can use it in gathering. [1 potion / action]',
        level: 0,
        produce_level: 5,
        vendor_price: 20,
        skill_boost: 'gathering',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 6,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Ruby Crafting Potion',
        type: 'consumable',
        tool: 'potion',
        icon: RubyCraftingIcon,
        description: 'This is a Ruby Crafting Potion. You can use it in crafting. [1 potion / action]',
        level: 0,
        produce_level: 10,
        vendor_price: 20,
        skill_boost: 'crafting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 6,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },

    // Topaz
    {
        name: 'Topaz Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: TopazCombatIcon,
        description: 'This is a Topaz Combat Potion. You can use it in combat. [1 potion / action]',
        level: 0,
        produce_level: 10,
        vendor_price: 28,
        skill_boost: 'combat',
        boost: {
            attack: 8,
            defense: 8,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Topaz Gathering Potion',
        type: 'consumable',
        tool: 'potion',
        icon: TopazGatheringIcon,
        description: 'This is a Topaz Gathering Potion. You can use it in gathering. [1 potion / action]',
        level: 0,
        produce_level: 15,
        vendor_price: 28,
        skill_boost: 'gathering',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 12,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Topaz Crafting Potion',
        type: 'consumable',
        tool: 'potion',
        icon: TopazCraftingIcon,
        description: 'This is a Topaz Crafting Potion. You can use it in crafting. [1 potion / action]',
        level: 0,
        produce_level: 20,
        vendor_price: 28,
        skill_boost: 'crafting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 12,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },

    // Emerald
    {
        name: 'Emerald Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: EmeraldCombatIcon,
        description: 'This is a Emerald Combat Potion. You can use it in combat. [1 potion / action]',
        level: 0,
        produce_level: 25,
        vendor_price: 36,
        skill_boost: 'combat',
        boost: {
            attack: 12,
            defense: 12,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Emerald Gathering Potion',
        type: 'consumable',
        tool: 'potion',
        icon: EmeraldGatheringIcon,
        description: 'This is a Emerald Gathering Potion. You can use it in gathering. [1 potion / action]',
        level: 0,
        produce_level: 30,
        vendor_price: 36,
        skill_boost: 'gathering',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 18,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Emerald Crafting Potion',
        type: 'consumable',
        tool: 'potion',
        icon: EmeraldCraftingIcon,
        description: 'This is a Emerald Crafting Potion. You can use it in crafting. [1 potion / action]',
        level: 0,
        produce_level: 35,
        vendor_price: 36,
        skill_boost: 'crafting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 18,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },

    // Amethyst
    {
        name: 'Amethyst Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: AmethystCombatIcon,
        description: 'This is a Amethyst Combat Potion. You can use it in combat. [1 potion / action]',
        level: 0,
        produce_level: 40,
        vendor_price: 44,
        skill_boost: 'combat',
        boost: {
            attack: 16,
            defense: 16,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Amethyst Gathering Potion',
        type: 'consumable',
        tool: 'potion',
        icon: AmethystGatheringIcon,
        description: 'This is a Amethyst Gathering Potion. You can use it in gathering. [1 potion / action]',
        level: 0,
        produce_level: 45,
        vendor_price: 44,
        skill_boost: 'gathering',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 24,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Amethyst Crafting Potion',
        type: 'consumable',
        tool: 'potion',
        icon: AmethystCraftingIcon,
        description: 'This is a Amethyst Crafting Potion. You can use it in crafting. [1 potion / action]',
        level: 0,
        produce_level: 50,
        vendor_price: 44,
        skill_boost: 'crafting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 24,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },

    // Citrine
    {
        name: 'Citrine Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: CitrineCombatIcon,
        description: 'This is a Citrine Combat Potion. You can use it in combat. [1 potion / action]',
        level: 0,
        produce_level: 55,
        vendor_price: 52,
        skill_boost: 'combat',
        boost: {
            attack: 20,
            defense: 20,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Citrine Gathering Potion',
        type: 'consumable',
        tool: 'potion',
        icon: CitrineGatheringIcon,
        description: 'This is a Citrine Gathering Potion. You can use it in gathering. [1 potion / action]',
        level: 0,
        produce_level: 60,
        vendor_price: 52,
        skill_boost: 'gathering',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 30,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Citrine Crafting Potion',
        type: 'consumable',
        tool: 'potion',
        icon: CitrineCraftingIcon,
        description: 'This is a Citrine Crafting Potion. You can use it in crafting. [1 potion / action]',
        level: 0,
        produce_level: 65,
        vendor_price: 52,
        skill_boost: 'crafting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 30,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },

    // Diamond
    {
        name: 'Diamond Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DiamondCombatIcon,
        description: 'This is a Diamond Combat Potion. You can use it in combat. [1 potion / action]',
        level: 0,
        produce_level: 70,
        vendor_price: 60,
        skill_boost: 'combat',
        boost: {
            attack: 24,
            defense: 24,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Diamond Gathering Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DiamondGatheringIcon,
        description: 'This is a Diamond Gathering Potion. You can use it in gathering. [1 potion / action]',
        level: 0,
        produce_level: 75,
        vendor_price: 60,
        skill_boost: 'gathering',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 36,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
    {
        name: 'Diamond Crafting Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DiamondCraftingIcon,
        description: 'This is a Diamond Crafting Potion. You can use it in crafting. [1 potion / action]',
        level: 0,
        produce_level: 80,
        vendor_price: 60,
        skill_boost: 'crafting',
        boost: {
            type: 'speed',
            is_percentage: true,
            value: 36,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
        ]
    },
]

export const fishes = [
    {
        name: 'Cooked Shrimp',
        type: 'consumable',
        tool: 'food',
        icon: CookedShrimpIcon,
        description: 'This is a Cooked Shrimp. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 1,
        vendor_price: 10,
        skill_boost: 'combat',
        boost: {
            health: 10,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
        ]
    },
    {
        name: 'Cooked Cod',
        type: 'consumable',
        tool: 'food',
        icon: CookedCodIcon,
        description: 'This is a Cooked Cod. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 10,
        vendor_price: 18,
        skill_boost: 'combat',
        boost: {
            health: 25,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
        ]
    },
    {
        name: 'Cooked Salmon',
        type: 'consumable',
        tool: 'food',
        icon: CookedSalmonIcon,
        description: 'This is a Cooked Salmon. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 25,
        vendor_price: 26,
        skill_boost: 'combat',
        boost: {
            health: 40,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
        ]
    },
    {
        name: 'Cooked Bass',
        type: 'consumable',
        tool: 'food',
        icon: CookedBassIcon,
        description: 'This is a Cooked Bass. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 40,
        vendor_price: 34,
        skill_boost: 'combat',
        boost: {
            health: 55,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
        ]
    },
    {
        name: 'Cooked Lobster',
        type: 'consumable',
        tool: 'food',
        icon: CookedLobsterIcon,
        description: 'This is a Cooked Lobster. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 55,
        vendor_price: 42,
        skill_boost: 'combat',
        boost: {
            health: 70,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
        ]
    },
    {
        name: 'Cooked Swordfish',
        type: 'consumable',
        tool: 'food',
        icon: CookedSwordfishIcon,
        description: 'This is a Cooked Swordfish. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 70,
        vendor_price: 50,
        skill_boost: 'combat',
        boost: {
            health: 85,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
        ]
    },
]

export const fruits = [
    {
        name: 'Apple',
        type: 'consumable',
        tool: 'food',
        icon: AppleIcon,
        description: 'This is an Apple. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 1,
        vendor_price: 2,
        skill_boost: 'combat',
        boost: {
            health: 5,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
            'compost',
        ]
    },
    {
        name: 'Grapes',
        type: 'consumable',
        tool: 'food',
        icon: GrapesIcon,
        description: 'This is a Grapes. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 10,
        vendor_price: 4,
        skill_boost: 'combat',
        boost: {
            health: 10,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
            'compost',
        ]
    },
    {
        name: 'Cherry',
        type: 'consumable',
        tool: 'food',
        icon: CherryIcon,
        description: 'This is a Cherry. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 25,
        vendor_price: 6,
        skill_boost: 'combat',
        boost: {
            health: 15,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
            'compost',
        ]
    },
    {
        name: 'Green Apple',
        type: 'consumable',
        tool: 'food',
        icon: GreenAppleIcon,
        description: 'This is a Green Apple. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 40,
        vendor_price: 8,
        skill_boost: 'combat',
        boost: {
            health: 20,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
            'compost',
        ]
    },
    {
        name: 'Blackcurrant',
        type: 'consumable',
        tool: 'food',
        icon: BlackcurrantIcon,
        description: 'This is a Blackcurrant. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 55,
        vendor_price: 10,
        skill_boost: 'combat',
        boost: {
            health: 25,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
            'compost',
        ]
    },
    {
        name: 'Raspberry',
        type: 'consumable',
        tool: 'food',
        icon: RaspberryIcon,
        description: 'This is an Raspberry. You can use it in combat. [1 food / 0.5seg when HP > 50%]',
        level: 0,
        produce_level: 70,
        vendor_price: 12,
        skill_boost: 'combat',
        boost: {
            health: 30,
        },
        attrs: [
            'sellable',
            'combat',
            'food',
            'consumption',
            'compost'
        ]
    },
]