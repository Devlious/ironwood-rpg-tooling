import Woodcutting from '/components/gathering/woodcutting.js'
import WoodcuttingIcon from '/public/images/woodcutting.png'

import Mining from '/components/gathering/mining'
import MiningIcon from '/public/images/mining.png'

import Farming from '/components/gathering/farming'
import FarmingIcon from '/public/images/farming.png'

import Fishing from '/components/gathering/fishing'
import FishingIcon from '/public/images/fishing.png'

import Tab from '/components/Tab'
import { useState } from 'react'

export default function Gathering() {
    let [categories] = useState({
        woodcutting: {
            icon: WoodcuttingIcon,
        },
        mining: {
            icon: MiningIcon,
        },
        farming: {
            icon: FarmingIcon,
        },
        fishing: {
            icon: FishingIcon,
        },
    })
    let [components] = useState([
        Woodcutting,
        Mining,
        Farming,
        Fishing
    ])

    return (
        <Tab categories={categories} components={components}></Tab>
    )
}