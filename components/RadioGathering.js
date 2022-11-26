import { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from "next/image";
import { useGatheringStore } from '/store/gathering'

export default function RadioGathering({ choices, timers, type }) {
    const [selected, setSelected] = useState(choices.items[0])

    const store = useGatheringStore()

    useEffect(() => {
        store.changeWoodcuttingTimer(timers[selected.timer])

    }, [selected, store, timers])

    return (
        <div className="w-1/2">
            <div className="max-w-[17rem]">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Woodcutting Trees</RadioGroup.Label>
                    <div className="space-y-3">
                        {choices.items.map((choice) => (
                            <RadioGroup.Option
                                key={choice.name}
                                value={choice}
                                className={({ active, checked }) =>
                                    `${
                                        active
                                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                            : ''
                                    }
                                    ${
                                        checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-gray-400'
                                    }
                                    relative cursor-pointer rounded-lg px-3 py-2 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <Image src={choice.icon} className="mr-1 h-8 w-8"
                                               loading='lazy' alt={`${choice.name} Icon`}/>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${
                                                            checked ? 'text-white' : 'text-gray-900'
                                                        }`}
                                                    >
                                                        {choice.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${
                                                            checked ? 'text-sky-100' : 'text-gray-600'
                                                        }`}
                                                    >
                                                        <span>
                                                            Level {choice.level}
                                                        </span>{' '}
                                                        <span aria-hidden="true">&middot;</span>{' '}
                                                        <span>{choice.experience} XP</span>{' '}
                                                        <span aria-hidden="true">&middot;</span>{' '}
                                                        <span>{timers[choice.timer]} seconds</span>

                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="text-white">
                                                    <CheckIcon className="h-8 w-8" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}