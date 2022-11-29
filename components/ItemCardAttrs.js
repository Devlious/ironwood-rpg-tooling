export default function ItemCardAttrs({ attrs }) {
    return (
        <div>
            {
                attrs.includes('enchanted')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-blue-900 bg-blue-300 rounded-full dark:bg-red-700 dark:text-red-300">
                        Enchanted
                    </span>
                    : ''
            }
            {
                attrs.includes('crafting')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-stone-900 bg-stone-300 rounded-full dark:bg-red-700 dark:text-red-300">
                        Crafting
                    </span>
                    : ''
            }
            {/*{*/}
            {/*    attrs.includes('food')*/}
            {/*        ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-orange-900 bg-orange-300 rounded-full dark:bg-red-700 dark:text-red-300">*/}
            {/*            Food*/}
            {/*        </span>*/}
            {/*        : ''*/}
            {/*}*/}
            {
                attrs.includes('equipment')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-slate-900 bg-slate-300 rounded-full dark:bg-red-700 dark:text-red-300">
                        Equipment
                    </span>
                    : ''
            }
            {
                attrs.includes('consumption')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-teal-900 bg-teal-300 rounded-full dark:bg-red-700 dark:text-red-300">
                        Consumption
                    </span>
                    : ''
            }
            {
                attrs.includes('gathering')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-green-900 bg-green-300 rounded-full dark:bg-green-700 dark:text-green-300">
                        Gathering
                    </span>
                    : ''
            }
            {
                attrs.includes('compost')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-green-900 bg-green-300 rounded-full dark:bg-green-700 dark:text-green-300">
                        Compost
                    </span>
                    : ''
            }
            {
                attrs.includes('combat')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-red-900 bg-red-300 rounded-full dark:bg-red-700 dark:text-red-300">
                        Combat
                    </span>
                    : ''
            }
            {
                attrs.includes('sellable')
                    ? <span className="flex justify-center items-center mx-6 mb-1 text-12 font-medium text-yellow-900 bg-yellow-300 rounded-full dark:bg-red-700 dark:text-red-300">
                        Sellable
                    </span>
                    : ''
            }
        </div>
    )
}