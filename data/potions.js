/////////////////////
//     POTIONS     //
/////////////////////

// Base
import BaseCombatIcon from '/public/images/potion-combat.png'
import BaseGatherSpeedIcon from '/public/images/potion-gather-speed.png'
import BaseGatherLevelIcon from '/public/images/potion-gather-level.png'
import BaseCraftSpeedIcon from '/public/images/potion-craft-speed.png'
import BaseCraftLevelIcon from '/public/images/potion-craft-level.png'

// Super
import SuperCombatIcon from '/public/images/potion-super-combat.png'
import SuperGatherSpeedIcon from '/public/images/potion-super-gather-speed.png'
import SuperGatherLevelIcon from '/public/images/potion-super-gather-level.png'
import SuperCraftSpeedIcon from '/public/images/potion-super-craft-speed.png'
import SuperCraftLevelIcon from '/public/images/potion-super-craft-level.png'

// Divine
import DivineCombatIcon from '/public/images/potion-divine-combat.png'
import DivineGatherSpeedIcon from '/public/images/potion-divine-gather-speed.png'
import DivineGatherLevelIcon from '/public/images/potion-divine-gather-level.png'
import DivineCraftSpeedIcon from '/public/images/potion-divine-craft-speed.png'
import DivineCraftLevelIcon from '/public/images/potion-divine-craft-level.png'

export const combat = [
    {
        name: 'Base Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: BaseCombatIcon,
        description: 'This is a Base Combat Potion. You can use it in combat. 480 seconds of use',
        level: 0,
        produce_level: 1,
        produce_experience: 5,
        vendor_price: 14,
        skill_boost: 'combat',
        boost: {
            attack: 6,
            defense: 6,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
            ],
    },
    {
        name: 'Super Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: SuperCombatIcon,
        description: 'This is a Super Combat Potion. You can use it in combat. 480 seconds of use',
        level: 0,
        produce_level: 40,
        produce_experience: 20,
        vendor_price: 44,
        skill_boost: 'combat',
        boost: {
            attack: 12,
            defense: 12,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
            ],
    },
    {
        name: 'Divine Combat Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DivineCombatIcon,
        description: 'This is a Divine Combat Potion. You can use it in combat. 480 seconds of use',
        level: 0,
        produce_level: 40,
        produce_experience: 0,
        vendor_price: 189,
        skill_boost: 'combat',
        boost: {
            attack: 18,
            defense: 18,
        },
        attrs: [
            'sellable',
            'combat',
            'consumption',
            ],
    },
]

export const gather = [
    {
        name: 'Base Gather Speed Potion',
        type: 'consumable',
        tool: 'potion',
        icon: BaseGatherSpeedIcon,
        description: 'This is a Base Gather Speed Potion. You can use it in gathering. 480 seconds of use',
        level: 0,
        produce_level: 25,
        produce_experience: 15,
        vendor_price: 34,
        skill_boost: 'gathering',
        boost: {
                speed_percentage: 8,
        },
        attrs: [
                'sellable',
                'gathering',
                'consumption',
                ],
    },
    {
        name: 'Base Gather Level Potion',
        type: 'consumable',
        tool: 'potion',
        icon: BaseGatherLevelIcon,
        description: 'This is a Base Gather Level Potion. You can use it in gathering. 480 seconds of use',
        level: 0,
        produce_level: 10,
        produce_experience: 10,
        vendor_price: 24,
        skill_boost: 'gathering',
        boost: {
            level_skip: 1,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
            ],
    },
    {
        name: 'Super Gather Speed Potion',
        type: 'consumable',
        tool: 'potion',
        icon: SuperGatherSpeedIcon,
        description: 'This is a Super Gather Speed Potion. You can use it in gathering. 480 seconds of use',
        level: 0,
        produce_level: 70,
        produce_experience: 30,
        vendor_price: 64,
        skill_boost: 'gathering',
        boost: {
            speed_percentage: 16,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
            ],
    },
    {
        name: 'Super Gather Level Potion',
        type: 'consumable',
        tool: 'potion',
        icon: SuperGatherLevelIcon,
        description: 'This is a Super Gather Level Potion. You can use it in gathering. 480 seconds of use',
        level: 0,
        produce_level: 55,
        produce_experience: 25,
        vendor_price: 54,
        skill_boost: 'gathering',
        boost: {
            level_skip: 3,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
            ],
    },
    {
        name: 'Divine Gather Speed Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DivineGatherSpeedIcon,
        description: 'This is a Divine Gather Speed Potion. You can use it in gathering. 480 seconds of use',
        level: 0,
        produce_level: 70,
        produce_experience: 0,
        vendor_price: 280,
        skill_boost: 'gathering',
        boost: {
            speed_percentage: 24,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
            ],
    },
    {
        name: 'Divine Gather Level Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DivineGatherLevelIcon,
        description: 'This is a Divine Gather Level Potion. You can use it in gathering. 480 seconds of use',
        level: 0,
        produce_level: 55,
        produce_experience: 0,
        vendor_price: 235,
        skill_boost: 'gathering',
        boost: {
            level_skip: 5,
        },
        attrs: [
            'sellable',
            'gathering',
            'consumption',
            ],
    },
]

export const craft = [
    {
        name: 'Base Craft Speed Potion',
        type: 'consumable',
        tool: 'potion',
        icon: BaseCraftSpeedIcon,
        description: 'This is a Base Craft Speed Potion. You can use it in crafting. 480 seconds of use',
        level: 0,
        produce_level: 25,
        produce_experience: 15,
        vendor_price: 34,
        skill_boost: 'crafting',
        boost: {
            speed_percentage: 8,
        },
        attrs: [
            'sellable',
            'crafting',
            'consumption',
            ],
    },
    {
        name: 'Base Craft Level Potion',
        type: 'consumable',
        tool: 'potion',
        icon: BaseCraftLevelIcon,
        description: 'This is a Base Craft Level Potion. You can use it in crafting. 480 seconds of use',
        level: 0,
        produce_level: 10,
        produce_experience: 10,
        vendor_price: 24,
        skill_boost: 'crafting',
        boost: {
            level_skip: 1,
        },
        attrs: [
            'sellable',
            'crafting',
            'consumption',
            ],
    },
    {
        name: 'Super Craft Speed Potion',
        type: 'consumable',
        tool: 'potion',
        icon: SuperCraftSpeedIcon,
        description: 'This is a Super Craft Speed Potion. You can use it in crafting. 480 seconds of use',
        level: 0,
        produce_level: 70,
        produce_experience: 30,
        vendor_price: 64,
        skill_boost: 'crafting',
        boost: {
            speed_percentage: 16,
        },
        attrs: [
            'sellable',
            'crafting',
            'consumption',
            ],
    },
    {
        name: 'Super Craft Level Potion',
        type: 'consumable',
        tool: 'potion',
        icon: SuperCraftLevelIcon,
        description: 'This is a Super Craft Level Potion. You can use it in crafting. 480 seconds of use',
        level: 0,
        produce_level: 55,
        produce_experience: 25,
        vendor_price: 54,
        skill_boost: 'crafting',
        boost: {
            level_skip: 3,
        },
        attrs: [
            'sellable',
            'crafting',
            'consumption',
            ],
    },
    {
        name: 'Divine Craft Speed Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DivineCraftSpeedIcon,
        description: 'This is a Divine Craft Speed Potion. You can use it in crafting. 480 seconds of use',
        level: 0,
        produce_level: 70,
        produce_experience: 0,
        vendor_price: 280,
        skill_boost: 'crafting',
        boost: {
            speed_percentage: 24,
        },
        attrs: [
            'sellable',
            'crafting',
            'consumption',
            ],
    },
    {
        name: 'Divine Craft Level Potion',
        type: 'consumable',
        tool: 'potion',
        icon: DivineCraftLevelIcon,
        description: 'This is a Divine Craft Level Potion. You can use it in crafting. 480 seconds of use',
        level: 0,
        produce_level: 55,
        produce_experience: 0,
        vendor_price: 235,
        skill_boost: 'crafting',
        boost: {
            level_skip: 5,
        },
        attrs: [
            'sellable',
            'crafting',
            'consumption',
            ],
    },
]
