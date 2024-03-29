/////////////////////
//     POTIONS     //
/////////////////////

import {
    combat,
    gather,
    craft,
} from '../potions'

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


////////////////////
//     ARROWS     //
////////////////////

import CopperArrowIcon from '/public/images/arrow-copper.png'
import IronArrowIcon from '/public/images/arrow-iron.png'
import SilverArrowIcon from '/public/images/arrow-silver.png'
import GoldArrowIcon from '/public/images/arrow-gold.png'
import CobaltArrowIcon from '/public/images/arrow-cobalt.png'
import ObsidianArrowIcon from '/public/images/arrow-obsidian.png'

export const potions = [
    ...combat,
    ...gather,
    ...craft,
];

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

export const arrows = [
    {
        name: 'Copper Arrow',
        type: 'consumable',
        tool: 'arrow',
        icon: CopperArrowIcon,
        description: 'This is a Copper Arrow, you can use it in combat',
        level: 1,
        vendor_price: 1,
        skill_boost: 'combat',
        boost: {
            attack: 6,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
        ],
    },
    {
        name: 'Iron Arrow',
        type: 'consumable',
        tool: 'arrow',
        icon: IronArrowIcon,
        description: 'This is an Iron Arrow, you can use it in combat',
        level: 10,
        vendor_price: 2,
        skill_boost: 'combat',
        boost: {
            attack: 12,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
        ],
    },
    {
        name: 'Silver Arrow',
        type: 'consumable',
        tool: 'arrow',
        icon: SilverArrowIcon,
        description: 'This is a Silver Arrow, you can use it in combat',
        level: 25,
        vendor_price: 3,
        skill_boost: 'combat',
        boost: {
            attack: 18,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
        ],
    },
    {
        name: 'Gold Arrow',
        type: 'consumable',
        tool: 'arrow',
        icon: GoldArrowIcon,
        description: 'This is a Gold Arrow, you can use it in combat',
        level: 40,
        vendor_price: 4,
        skill_boost: 'combat',
        boost: {
            attack: 24,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
        ],
    },
    {
        name: 'Cobalt Arrow',
        type: 'consumable',
        tool: 'arrow',
        icon: CobaltArrowIcon,
        description: 'This is a Cobalt Arrow, you can use it in combat',
        level: 55,
        vendor_price: 5,
        skill_boost: 'combat',
        boost: {
            attack: 30,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
        ],
    },
    {
        name: 'Obsidian Arrow',
        type: 'consumable',
        tool: 'arrow',
        icon: ObsidianArrowIcon,
        description: 'This is a Obsidian Arrow, you can use it in combat',
        level: 70,
        vendor_price: 6,
        skill_boost: 'combat',
        boost: {
            attack: 36,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
        ],
    },
]