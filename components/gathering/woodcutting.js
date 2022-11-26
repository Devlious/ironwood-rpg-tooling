import RadioGathering from '/components/RadioGathering'
import RadioPotions from '/components/RadioPotions'
import RadioTools from '/components/RadioTools'
import { woodcutting, timers } from '/data/gathering'
import { hatchet } from '/data/tools'
import { gathering } from '/data/potions'

import { useState, useEffect } from 'react'
import { useGatheringStore } from "../../store/gathering";

export default function Woodcutting() {
    let [quantity, setQuantity] = useState(0)
    let [total, setTotal] = useState(0)

    const store = useGatheringStore()

    useEffect(() => {
        store.changeWoodcuttingQuantity(quantity)
        if (quantity < 0)
            setQuantity(0)
        else if (quantity > 50000)
            setQuantity(50000)

        setTotal(store.woodcutting.tree_timer / (1 + store.woodcutting.potion_percentage / 100 + store.woodcutting.tool_percentage / 100) * quantity / 3600)
    }, [store, quantity])

    return (
        <div className="flex">
            <RadioGathering choices={woodcutting} timers={timers} type={"woodcutting"} />
            <RadioTools choices={hatchet} />
            <RadioPotions choices={gathering} />
            <div className="w-1/2 h-1/6 grid grid-cols-1 grid-rows-5">
                <div className="">
                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-white dark:text-white">
                        Quantity to Gather
                    </label>
                    <input type="number" id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)}
                           placeholder="12345"
                           className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="text-white">
                    <span>Seconds/action: {store.woodcutting.tree_timer}s ({(store.woodcutting.tree_timer / (1 + store.woodcutting.potion_percentage / 100 + store.woodcutting.tool_percentage / 100)).toFixed(1)})</span>
                </div>
                <div className="text-white">
                    <span>Quantity: {quantity}</span>
                </div>
                <div className="text-white">
                    <span>Tool &middot; {store.woodcutting.tool_percentage}%</span>
                </div>
                <div className="text-white">
                    <span>Potion &middot; {store.woodcutting.potion_percentage}</span>
                </div>
                <div className={"text-white font-normal"}>
                    <span>Total &middot; {(total - (total % 1)).toFixed(0 )} Hrs, {((total % 1) * 60).toFixed(0)} Min</span>
                </div>
            </div>
        </div>
    )
}