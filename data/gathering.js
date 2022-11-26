//// Woodcutting
import WoodcuttingIcon from '/public/images/woodcutting.png'
import TreePineIcon from '/public/images/tree-pine.png'
import TreeSpruceIcon from '/public/images/tree-spruce.png'
import TreeBirchIcon from '/public/images/tree-birch.png'
import TreeTeakIcon from '/public/images/tree-teak.png'
import TreeMahoganyIcon from '/public/images/tree-mahogany.png'
import TreeIronbarkIcon from '/public/images/tree-ironbark.png'

//// Mining
import MiningIcon from '/public/images/mining.png'
import RockCopperIcon from '/public/images/rock-copper.png'
import RockIronIcon from '/public/images/rock-iron.png'
import RockSilverIcon from '/public/images/rock-silver.png'
import RockGoldIcon from '/public/images/rock-gold.png'
import RockCobaltIcon from '/public/images/rock-cobalt.png'
import RockObsidianIcon from '/public/images/rock-obsidian.png'

////  Farming
// Flowers
import FarmingIcon from '/public/images/farming.png'
import FlowerPeonyIcon from '/public/images/flower-peony.png'
import FlowerTulipIcon from '/public/images/flower-tulip.png'
import FlowerRoseIcon from '/public/images/flower-rose.png'
import FlowerDaisyIcon from '/public/images/flower-daisy.png'
import FlowerLilacIcon from '/public/images/flower-lilac.png'
import FlowerHyacinthIcon from '/public/images/flower-hyacinth.png'
//// Foods
import FoodPotatoIcon from '/public/images/vegetable-potato.png'
import FoodWheatIcon from '/public/images/vegetable-wheat.png'
import FoodCornIcon from '/public/images/vegetable-corn.png'
import FoodCarrotIcon from '/public/images/vegetable-carrot.png'
import FoodTomatoIcon from '/public/images/vegetable-tomato.png'
import FoodPumpkinIcon from '/public/images/vegetable-pumpkin.png'

//// Fishing
import FishingIcon from '/public/images/fishing.png'
import RawShrimpIcon from '/public/images/material-raw-shrimp.png'
import RawCodIcon from '/public/images/material-raw-cod.png'
import RawSalmonIcon from '/public/images/material-raw-salmon.png'
import RawBassIcon from '/public/images/material-raw-bass.png'
import RawLobsterIcon from '/public/images/material-raw-lobster.png'
import RawSwordfishIcon from '/public/images/material-raw-swordfish.png'


export const woodcutting = {
    icon: WoodcuttingIcon,
    tool: 'hatch',
    items: [
        {
            name: 'Pine Tree',
            icon: TreePineIcon,
            level: 1,
            experience: 5,
            timer: 1,
        },
        {
            name: 'Spruce Tree',
            icon: TreeSpruceIcon,
            level: 10,
            experience: 10,
            timer: 2,
        },
        {
            name: 'Birch Tree',
            icon: TreeBirchIcon,
            level: 25,
            experience: 15,
            timer: 3,
        },
        {
            name: 'Teak Tree',
            icon: TreeTeakIcon,
            level: 40,
            experience: 20,
            timer: 4,
        },
        {
            name: 'Mahogany Tree',
            icon: TreeMahoganyIcon,
            level: 55,
            experience: 25,
            timer: 5,
        },
        {
            name: 'Ironbark Tree',
            icon: TreeIronbarkIcon,
            level: 70,
            experience: 30,
            timer: 6,
        },
    ],
}

export const mining = {
    icon: MiningIcon,
    tool: 'pickaxe',
    items: [
        {
            name: 'Copper Rock',
            icon: RockCopperIcon,
            level: 1,
            experience: 5,
            timer: 1,
        },
        {
            name: 'Iron Rock',
            icon: RockIronIcon,
            level: 10,
            experience: 10,
            timer: 2,
        },
        {
            name: 'Silver Rock',
            icon: RockSilverIcon,
            level: 25,
            experience: 15,
            timer: 3,
        },
        {
            name: 'Gold Rock',
            icon: RockGoldIcon,
            level: 40,
            experience: 20,
            timer: 4,
        },
        {
            name: 'Cobalt Rock',
            icon: RockCobaltIcon,
            level: 55,
            experience: 25,
            timer: 5,
        },
        {
            name: 'Obsidian Rock',
            icon: RockObsidianIcon,
            level: 70,
            experience: 30,
            timer: 6,
        },
    ]
}

export const farming = {
    icon: FarmingIcon,
    tool: 'spade',
    items: [
        {
            name: 'Peony',
            icon: FlowerPeonyIcon,
            level: 1,
            experience: 5,
            timer: 1,
        },
        {
            name: 'Tulip',
            icon: FlowerTulipIcon,
            level: 10,
            experience: 10,
            timer: 2,
        },
        {
            name: 'Rose',
            icon: FlowerRoseIcon,
            level: 25,
            experience: 15,
            timer: 3,
        },
        {
            name: 'Daisy',
            icon: FlowerDaisyIcon,
            level: 40,
            experience: 20,
            timer: 4,
        },
        {
            name: 'Lilac',
            icon: FlowerLilacIcon,
            level: 55,
            experience: 25,
            timer: 5,
        },
        {
            name: 'Hyacinth',
            icon: FlowerHyacinthIcon,
            level: 70,
            experience: 30,
            timer: 6,
        },
        {
            name: 'Potato',
            icon: FoodPotatoIcon,
            level: 1,
            experience: 5,
            timer: 1,
        },
        {
            name: 'Wheat',
            icon: FoodWheatIcon,
            level: 10,
            experience: 10,
            timer: 2,
        },
        {
            name: 'Corn',
            icon: FoodCornIcon,
            level: 25,
            experience: 15,
            timer: 3,
        },
        {
            name: 'Carrot',
            icon: FoodCarrotIcon,
            level: 40,
            experience: 20,
            timer: 4,
        },
        {
            name: 'Tomato',
            icon: FoodTomatoIcon,
            level: 55,
            experience: 25,
            timer: 5,
        },
        {
            name: 'Pumpkin',
            icon: FoodPumpkinIcon,
            level: 70,
            experience: 30,
            timer: 6,
        },
    ]
}

export const fishing = {
    icon: FishingIcon,
    tool: 'rod',
    items: [
        {
            name: 'Shrimp',
            icon: RawShrimpIcon,
            level: 1,
            experience: 5,
            timer: 1,
        },
        {
            name: 'Cod',
            icon: RawCodIcon,
            level: 10,
            experience: 10,
            timer: 2,
        },
        {
            name: 'Salmon',
            icon: RawSalmonIcon,
            level: 25,
            experience: 15,
            timer: 3,
        },
        {
            name: 'Bass',
            icon: RawBassIcon,
            level: 40,
            experience: 20,
            timer: 4,
        },
        {
            name: 'Lobster',
            icon: RawLobsterIcon,
            level: 55,
            experience: 25,
            timer: 5,
        },
        {
            name: 'Swordfish',
            icon: RawSwordfishIcon,
            level: 70,
            experience: 30,
            timer: 6,
        },
    ]
}

// Base Time per Action in seconds
export const timers = {
    1: 4.1,
    2: 6.1,
    3: 8.1,
    4: 10.1,
    5: 12.1,
    6: 14.1,
}