import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CustomTab({ categories, components }) {
    return (
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-black/20 p-1">
                {Object.keys(categories).map((category) => (
                    <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                                'justify-center flex w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-gray-600 shadow'
                                    : 'text-white hover:bg-white/[0.12] hover:text-lime-600'
                            )
                        }
                    >
                        <Image src={categories[category].icon} className="mr-1 h-4 w-4"
                               loading='lazy'
                               alt={`${category} Icon`}/>
                        {category}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="mt-4">
                {components.map((component, idx ) => (
                    <Tab.Panel key={idx} className='rounded-xl p-3'>
                        {component}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}