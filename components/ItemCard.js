import ItemIcon from '/public/images/weapon-gold-hatchet.png'
import GoldIcon from '/public/images/merchant.png'
import MarketIcon from '/public/images/market.png'

// Gathering
import WoodcuttingIcon from '/public/images/woodcutting.png'
import MiningIcon from '/public/images/mining.png'
import FarmingIcon from '/public/images/farming.png'
import FishingIcon from '/public/images/fishing.png'

// Crafting
import SmeltingIcon from '/public/images/smelting.png'
import SmithingIcon from '/public/images/smithing.png'
import ForgingIcon from '/public/images/forging.png'
import EnchantingIcon from '/public/images/enchanting.png'
import AlchemyIcon from '/public/images/alchemy.png'
import CookingIcon from '/public/images/cooking.png'

// Material
import CharcoalIcon from '/public/images/material-coal.png'
import CompostIcon from '/public/images/compost.png'

import Image from "next/image";
import ItemCardAttrs from "./ItemCardAttrs";
import ItemCardStats from "./ItemCardStats";


// tags
// Enchanted | Crafting | Sellable | Food | Consumption | Equipment

export default function ItemCard({ item }) {

    const gatheringIcons = {
        woodcutting: WoodcuttingIcon,
        mining: MiningIcon,
        farming: FarmingIcon,
        fishing: FishingIcon,
    }

    const materialIcons = {
        charcoal: CharcoalIcon,
        compost: CompostIcon,
    }

    const craftingIcons = {
        smelting: SmeltingIcon,
        smithing: SmithingIcon,
        forging: ForgingIcon,
        enchanting: EnchantingIcon,
        alchemy: AlchemyIcon,
        cooking: CookingIcon,
    }

    return (
        <div className="flex flex-col max-w-sm p-4 bg-gray-800 border border-gray-900 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <span className="block w-fit text-gray-800 px-1 text-12 bg-white rounded-r">
                Level {item.level}
            </span>
            <Image src={item.icon} className="mx-auto mb-4 h-10 w-10" loading="lazy"
                   alt={`${item.name} Icon`}/>

            {/* Attrs Tags */}
            <ItemCardAttrs attrs={item.attrs} />

            <h5 className="border-b border-white mt-4 mb-2 text-22 font-semibold tracking-tight text-gray-100 dark:text-white">
                {item.name}
            </h5>
            <p className="grow mb-6 text-14 font-normal text-gray-400 dark:text-gray-400 tracking-wider">
                {item.description}
            </p>

            <div className="">
                {/* For Combat Equipment */}
                {
                    item.type === 'weapon' || item.type === 'equipment'
                        ? <ItemCardStats stats={item.stats} />
                        : ''
                }
                {
                    item.hasOwnProperty('boost')
                    ? <p className={`flex ${item.skill_boost === 'combat' ? 'justify-between' : ''} border-b border-lime-400 mb-3 text-14 font-bold text-lime-400 dark:text-gray-400`}>
                            {
                                item.skill_boost !== 'combat'
                                ? `+${item.boost.value}${item.boost.is_percentage ? '%' : ''} ${item.boost.type}`
                                : (
                                    <>
                                        {
                                            item.boost.hasOwnProperty('attack')
                                            ? <span>
                                                +{item.boost.attack} ATK
                                            </span>
                                            : ''
                                        }
                                        {
                                            item.boost.hasOwnProperty('health')
                                            ? <span>
                                                +{item.boost.health} HP
                                            </span>
                                            : ''
                                        }
                                        {
                                            item.boost.hasOwnProperty('defense')
                                            ? <span>
                                                +{item.boost.attack} DEF
                                            </span>
                                            : ''
                                        }
                                    </>
                                )
                            }
                        {
                            item.skill_boost !== 'gathering' && item.skill_boost !== 'crafting' && item.skill_boost !== 'combat'
                                ? <Image src={gatheringIcons[item.skill_boost]} className="ml-1 h-5 w-5 rounded-12" loading="lazy" alt="Woodcutting Icon" />
                                : ''
                        }
                        {
                            item.skill_boost === 'gathering'
                                ? Object.keys(gatheringIcons).map((icon) => (
                                    <Image key={icon} src={gatheringIcons[icon]} className="ml-1 h-5 w-5 rounded-12" loading="lazy" alt="Woodcutting Icon" />
                                ))
                                : ''
                        }
                        {
                            item.skill_boost === 'crafting'
                                ? Object.keys(craftingIcons).map((icon) => (
                                    <Image key={icon} src={craftingIcons[icon]} className="ml-1 h-5 w-5 rounded-12" loading="lazy" alt="Woodcutting Icon" />
                                ))
                                : ''
                        }
                    </p>
                    : ''
                }
                <p className="text-center font-semibold text-yellow-400">Minimum Price</p>
                <div className="flex justify-between border-b border-yellow-400 mb-3">
                    <p className="flex text-14 font-bold text-yellow-400 dark:text-gray-400">
                        ${item.vendor_price} <Image src={GoldIcon} className="ml-1 h-5 w-5 rounded-12" alt="Gold Icon"/>
                    </p>
                    <p className="flex text-14 font-bold text-yellow-400 dark:text-gray-400">
                        ${(item.vendor_price * 1.05).toFixed(0)} <Image src={MarketIcon} className="ml-1 h-5 w-5 rounded-12" loading="lazy" alt="Gold Icon"/>
                    </p>
                </div>
            </div>
        </div>
    )
}
