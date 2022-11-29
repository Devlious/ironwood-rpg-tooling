////////////////////////
//        RAWS        //
////////////////////////

import RawShrimpIcon from "../../public/images/material-raw-shrimp.png";
import RawCodIcon from "../../public/images/material-raw-cod.png";
import RawSalmonIcon from "../../public/images/material-raw-salmon.png";
import RawBassIcon from "../../public/images/material-raw-bass.png";
import RawLobsterIcon from "../../public/images/material-raw-lobster.png";
import RawSwordfishIcon from "../../public/images/material-raw-swordfish.png";


////////////////////////
//        LOGS        //
////////////////////////

import PineLogIcon from '/public/images/wood-pine-log.png'
import SpruceLogIcon from '/public/images/wood-spruce-log.png'
import BirchLogIcon from '/public/images/wood-birch-log.png'
import TeakLogIcon from '/public/images/wood-teak-log.png'
import MahoganyLogIcon from '/public/images/wood-mahogany-log.png'
import IronbarkLogIcon from '/public/images/wood-ironbark-log.png'


////////////////////////
//        ORES        //
////////////////////////

import CopperOreIcon from '/public/images/rock-copper.png'
import IronOreIcon from '/public/images/rock-iron.png'
import SilverOreIcon from '/public/images/rock-silver.png'
import GoldOreIcon from '/public/images/rock-gold.png'
import CobaltOreIcon from '/public/images/rock-cobalt.png'
import ObsidianOreIcon from '/public/images/rock-obsidian.png'


////////////////////////
//        BARS        //
////////////////////////

import CopperBarIcon from '/public/images/metal-copper-bar.png'
import IronBarIcon from '/public/images/metal-iron-bar.png'
import SilverBarIcon from '/public/images/metal-silver-bar.png'
import GoldBarIcon from '/public/images/metal-gold-bar.png'
import CobaltBarIcon from '/public/images/metal-cobalt-bar.png'
import ObsidianBarIcon from '/public/images/metal-obsidian-bar.png'


/////////////////////////
//        BONES        //
/////////////////////////

import BoneIcon from '/public/images/material-bone.png'
import MediumBoneIcon from '/public/images/material-medium-bone.png'
import LargeBoneIcon from '/public/images/material-large-bone.png'


/////////////////////////
//        FANGS        //
/////////////////////////

import FangIcon from '/public/images/material-fang.png'
import MediumFangIcon from '/public/images/material-medium-fang.png'
import LargeFangIcon from '/public/images/material-large-fang.png'


///////////////////////////
//        FLOWERS        //
///////////////////////////

import PeonyIcon from '/public/images/flower-peony.png'
import TulipIcon from '/public/images/flower-tulip.png'
import RoseIcon from '/public/images/flower-rose.png'
import DaisyIcon from '/public/images/flower-daisy.png'
import LilacIcon from '/public/images/flower-lilac.png'
import HyacinthIcon from '/public/images/flower-hyacinth.png'


/////////////////////////
//        FOODS        //
/////////////////////////

import PotatoIcon from '/public/images/vegetable-potato.png'
import WheatIcon from '/public/images/vegetable-wheat.png'
import CornIcon from '/public/images/vegetable-corn.png'
import CarrotIcon from '/public/images/vegetable-carrot.png'
import TomatoIcon from '/public/images/vegetable-tomato.png'
import PumpkinIcon from '/public/images/vegetable-pumpkin.png'


////////////////////////
//        MISC        //
////////////////////////

import SeedIcon from '/public/images/material-seeds.png'
import BaitIcon from '/public/images/material-fishing-bait.png'
import VialIcon from '/public/images/material-vial.png'


export const rawFishes = [
    {
        name: 'Raw Shrimp',
        type: 'material',
        tool: 'raw',
        icon: RawShrimpIcon,
        description: 'This is a Raw Shrimp. You can cook it.',
        level: 1,
        produce_level: 1,
        vendor_price: 4,
        attrs: [
            'sellable',
            'crafting'
        ]
    },
    {
        name: 'Raw Cod',
        type: 'material',
        tool: 'raw',
        icon: RawCodIcon,
        description: 'This is a Raw Cod. You can cook it.',
        level: 10,
        produce_level: 10,
        vendor_price: 6,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Raw Salmon',
        type: 'material',
        tool: 'raw',
        icon: RawSalmonIcon,
        description: 'This is a Raw Salmon. You can cook it.',
        level: 25,
        produce_level: 25,
        vendor_price: 8,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Raw Bass',
        type: 'material',
        tool: 'raw',
        icon: RawBassIcon,
        description: 'This is a Raw Bass. You can cook it.',
        level: 40,
        produce_level: 40,
        vendor_price: 8,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Raw Lobster',
        type: 'material',
        tool: 'raw',
        icon: RawLobsterIcon,
        description: 'This is a Raw Lobster. You can cook it.',
        level: 55,
        produce_level: 55,
        vendor_price: 10,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Raw Swordfish',
        type: 'material',
        tool: 'raw',
        icon: RawSwordfishIcon,
        description: 'This is a Raw Swordfish. You can cook it.',
        level: 70,
        produce_level: 70,
        vendor_price: 12,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]

export const logs = [
    {
        name: 'Pine Log',
        type: 'material',
        tool: 'log',
        icon: PineLogIcon,
        description: 'This is a Pine log. You can transform into charcoal.',
        level: 0,
        produce_level: 1,
        vendor_price: 2,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Spruce Log',
        type: 'material',
        tool: 'log',
        icon: SpruceLogIcon,
        description: 'This is a Spruce log. You can transform into charcoal.',
        level: 0,
        produce_level: 10,
        vendor_price: 4,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Birch Log',
        type: 'material',
        tool: 'log',
        icon: BirchLogIcon,
        description: 'This is a Birch log. You can transform into charcoal.',
        level: 0,
        produce_level: 25,
        vendor_price: 6,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Teak Log',
        type: 'material',
        tool: 'log',
        icon: TeakLogIcon,
        description: 'This is a Teak log. You can transform into charcoal.',
        level: 0,
        produce_level: 40,
        vendor_price: 8,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Mahogany Log',
        type: 'material',
        tool: 'log',
        icon: MahoganyLogIcon,
        description: 'This is a Mahogany log. You can transform into charcoal.',
        level: 0,
        produce_level: 55,
        vendor_price: 10,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Ironbark Log',
        type: 'material',
        tool: 'log',
        icon: IronbarkLogIcon,
        description: 'This is an Ironbark log. You can transform into charcoal.',
        level: 0,
        produce_level: 70,
        vendor_price: 12,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]

export const ores = [
    {
        name: 'Copper Ore',
        type: 'material',
        tool: 'ore',
        icon: CopperOreIcon,
        description: 'This is a Copper Ore. You can transform into Copper Bar.',
        level: 1,
        produce_level: 1,
        vendor_price: 2,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Iron Ore',
        type: 'material',
        tool: 'ore',
        icon: IronOreIcon,
        description: 'This is an Iron Ore. You can transform into Copper Bar.',
        level: 10,
        produce_level: 10,
        vendor_price: 4,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Silver Ore',
        type: 'material',
        tool: 'ore',
        icon: SilverOreIcon,
        description: 'This is a Silver Ore. You can transform into Copper Bar.',
        level: 25,
        produce_level: 25,
        vendor_price: 6,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Gold Ore',
        type: 'material',
        tool: 'ore',
        icon: GoldOreIcon,
        description: 'This is a Gold Ore. You can transform into Copper Bar.',
        level: 40,
        produce_level: 40,
        vendor_price: 8,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Cobalt Ore',
        type: 'material',
        tool: 'ore',
        icon: CobaltOreIcon,
        description: 'This is a Cobalt Ore. You can transform into Copper Bar.',
        level: 55,
        produce_level: 55,
        vendor_price: 10,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Obsidian Ore',
        type: 'material',
        tool: 'ore',
        icon: ObsidianOreIcon,
        description: 'This is an Obsidian Ore. You can transform into Copper Bar.',
        level: 70,
        produce_level: 70,
        vendor_price: 12,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]

export const bars = [
    {
        name: 'Copper Bar',
        type: 'material',
        tool: 'bar',
        icon: CopperBarIcon,
        description: 'This is a Copper Bar. You can transform into Copper Equipment.',
        level: 1,
        produce_level: 1,
        vendor_price: 8,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Iron Bar',
        type: 'material',
        tool: 'bar',
        icon: IronBarIcon,
        description: 'This is an Iron Bar. You can transform into Iron Equipment.',
        level: 10,
        produce_level: 10,
        vendor_price: 16,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Silver Bar',
        type: 'material',
        tool: 'bar',
        icon: SilverBarIcon,
        description: 'This is a Silver Bar. You can transform into Silver Equipment.',
        level: 25,
        produce_level: 25,
        vendor_price: 24,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Gold Bar',
        type: 'material',
        tool: 'bar',
        icon: GoldBarIcon,
        description: 'This is a Gold Bar. You can transform into Gold Equipment.',
        level: 40,
        produce_level: 40,
        vendor_price: 32,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Cobalt Bar',
        type: 'material',
        tool: 'bar',
        icon: CobaltBarIcon,
        description: 'This is a Cobalt Bar. You can transform into Cobalt Equipment.',
        level: 55,
        produce_level: 55,
        vendor_price: 40,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Obsidian Bar',
        type: 'material',
        tool: 'bar',
        icon: ObsidianBarIcon,
        description: 'This is an Obsidian Bar. You can transform into Obsidian Equipment.',
        level: 70,
        produce_level: 70,
        vendor_price: 48,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]

export const bones = [
    {
        name: 'Bone',
        type: 'material',
        tool: 'bone',
        icon: BoneIcon,
        description: 'This is a Bone. You can transform into Potion.',
        level: 1,
        produce_level: 1,
        vendor_price: 2,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Medium Bone',
        type: 'material',
        tool: 'bone',
        icon: MediumBoneIcon,
        description: 'This is a Medium Bone. You can transform into Potion.',
        level: 25,
        produce_level: 25,
        vendor_price: 6,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Large Bone',
        type: 'material',
        tool: 'bone',
        icon: LargeBoneIcon,
        description: 'This is a Large Bone. You can transform into Potion.',
        level: 55,
        produce_level: 55,
        vendor_price: 10,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]

export const fangs = [
    {
        name: 'Fang',
        type: 'material',
        tool: 'Fang',
        icon: FangIcon,
        description: 'This is a Fang. You can transform into Potion.',
        level: 10,
        produce_level: 10,
        vendor_price: 4,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Medium Fang',
        type: 'material',
        tool: 'fang',
        icon: MediumFangIcon,
        description: 'This is a Medium Fang. You can transform into Potion.',
        level: 40,
        produce_level: 40,
        vendor_price: 8,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Large Fang',
        type: 'material',
        tool: 'fang',
        icon: LargeFangIcon,
        description: 'This is a Large Fang. You can transform into Potion.',
        level: 70,
        produce_level: 70,
        vendor_price: 12,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]

export const flowers = [
    {
        name: 'Peony',
        type: 'material',
        tool: 'flower',
        icon: PeonyIcon,
        description: 'This is a Peony Flower. You can transform into Potion.',
        level: 1,
        produce_level: 1,
        vendor_price: 6,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Tulip',
        type: 'material',
        tool: 'flower',
        icon: TulipIcon,
        description: 'This is a Tulip Flower. You can transform into Potion.',
        level: 15,
        produce_level: 10,
        vendor_price: 10,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Rose',
        type: 'material',
        tool: 'flower',
        icon: RoseIcon,
        description: 'This is a Rose Flower. You can transform into Potion.',
        level: 30,
        produce_level: 25,
        vendor_price: 14,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Daisy',
        type: 'material',
        tool: 'flower',
        icon: DaisyIcon,
        description: 'This is a Daisy Flower. You can transform into Potion.',
        level: 45,
        produce_level: 40,
        vendor_price: 18,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Lilac',
        type: 'material',
        tool: 'flower',
        icon: LilacIcon,
        description: 'This is a Lilac Flower. You can transform into Potion.',
        level: 60,
        produce_level: 55,
        vendor_price: 22,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
    {
        name: 'Hyacinth',
        type: 'material',
        tool: 'flower',
        icon: HyacinthIcon,
        description: 'This is a Hyacinth Flower. You can transform into Potion.',
        level: 75,
        produce_level: 70,
        vendor_price: 26,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]

export const vegetables = [
    {
        name: 'Potato',
        type: 'material',
        tool: 'vegetable',
        icon: PotatoIcon,
        description: 'This is a Potato. You can sell it.',
        level: 0,
        produce_level: 1,
        vendor_price: 6,
        attrs: [
            'sellable',
        ]
    },
    {
        name: 'Wheat',
        type: 'material',
        tool: 'vegetable',
        icon: WheatIcon,
        description: 'This is a Wheat. You can sell it.',
        level: 0,
        produce_level: 10,
        vendor_price: 10,
        attrs: [
            'sellable',
        ]
    },
    {
        name: 'Corn',
        type: 'material',
        tool: 'vegetable',
        icon: CornIcon,
        description: 'This is a Corn. You can sell it.',
        level: 0,
        produce_level: 25,
        vendor_price: 14,
        attrs: [
            'sellable',
        ]
    },
    {
        name: 'Carrot',
        type: 'material',
        tool: 'vegetable',
        icon: CarrotIcon,
        description: 'This is a Carrot. You can sell it.',
        level: 0,
        produce_level: 40,
        vendor_price: 18,
        attrs: [
            'sellable',
        ]
    },
    {
        name: 'Tomato',
        type: 'material',
        tool: 'vegetable',
        icon: TomatoIcon,
        description: 'This is a Tomato. You can sell it.',
        level: 0,
        produce_level: 55,
        vendor_price: 22,
        attrs: [
            'sellable',
        ]
    },
    {
        name: 'Pumpkin',
        type: 'material',
        tool: 'vegetable',
        icon: PumpkinIcon,
        description: 'This is a Pumpkin. You can sell it.',
        level: 0,
        produce_level: 70,
        vendor_price: 26,
        attrs: [
            'sellable',
        ]
    },
]

export const miscs = [
    {
        name: 'Seed',
        type: 'material',
        tool: 'misc',
        icon: SeedIcon,
        description: 'This is a Seed. You can use it farming.',
        level: 0,
        produce_level: 0,
        vendor_price: 2,
        attrs: [
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Fishing Bait',
        type: 'material',
        tool: 'misc',
        icon: BaitIcon,
        description: 'This is a Fishing Bait. You can use it fishing.',
        level: 0,
        produce_level: 0,
        vendor_price: 2,
        attrs: [
            'sellable',
            'gathering',
        ]
    },
    {
        name: 'Empty Vial',
        type: 'material',
        tool: 'misc',
        icon: VialIcon,
        description: 'This is an Empty Vial. You can transform into Potion.',
        level: 1,
        produce_level: 0,
        vendor_price: 2,
        attrs: [
            'sellable',
            'crafting',
        ]
    },
]