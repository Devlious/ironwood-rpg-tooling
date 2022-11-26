import { Tab } from '@headlessui/react'
import AttackIcon from '/public/images/attack.png'
import StrengthIcon from '/public/images/strength.png'
import DefenseIcon from '/public/images/defense.png'
import Image from "next/image";

// Components
import Attack from "../components/combat/attack"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Combat() {
    return (
        <div className="w-full sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-black/20 p-1">
                    <Tab className="justify-center flex w-full bg-gray-600 shadow rounded-lg py-2.5 text-sm font-medium leading-5 text-white ring-white ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2">
                        <Image src={AttackIcon} className="mr-1 h-4 w-4"
                               alt="IronwoodRPG Icon"/>
                        Attack
                    </Tab>
                    <Tab className="justify-center flex w-full text-blue-100 hover:bg-white/[0.12] hover:text-white rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
                        <Image src={StrengthIcon} className="mr-1 h-4 w-4"
                               alt="IronwoodRPG Icon"/>
                        Strength
                    </Tab>
                    <Tab className="justify-center flex w-full text-blue-100 hover:bg-white/[0.12] hover:text-white rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
                        <Image src={DefenseIcon} className="mr-1 h-4 w-4"
                               alt="IronwoodRPG Icon"/>
                        Defense
                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">Work in progress</Tab.Panel>
                    <Tab.Panel className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">Work in progress 2</Tab.Panel>
                    <Tab.Panel className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">Work in progress 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}