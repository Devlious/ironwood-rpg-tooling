import Image from "next/image";
import IronwoodIcon from '/public/images/icon.png'
import HomeIcon from '/public/images/home.png'
import GatherIcon from '/public/images/woodcutting.png'
import CraftIcon from '/public/images/forging.png'
import CombatIcon from '/public/images/attack.png'
import InventoryIcon from '/public/images/inventory.png'
import HelpIcon from '/public/images/changelog.png'
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-[18rem]" aria-label="Sidebar">
            <div className="h-screen overflow-y-auto py-4 px-3 bg-gray-200 rounded dark:bg-gray-800">
                <Link href="https://ironwoodrpg.com/" target="_blank" className="flex items-center pl-2.5 mb-5">
                    <Image src={IronwoodIcon} className="mr-2 h-10 w-10 rounded-12"
                         alt="IronwoodRPG Icon"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Ironwood RPG
                    </span>
                    <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-900 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Tools
                    </span>
                </Link>
                <div id="dropdown-cta" className="p-4 mt-4 bg-gray-300 rounded-lg dark:bg-blue-900" role="alert">
                    <div className="flex items-center mb-3">
                        <span className="bg-gray-100 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900">
                            Alpha
                        </span>
                        <span className="bg-lime-100 text-lime-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-lime-200 dark:text-lime-900">
                            v0.5.8
                        </span>
                        {/*<button type="button"*/}
                        {/*        className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"*/}
                        {/*        data-collapse-toggle="dropdown-cta" aria-label="Close">*/}
                        {/*    /!*<span className="sr-only">Close</span>*!/*/}
                        {/*    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd"*/}
                        {/*              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                        {/*              clip-rule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                    </div>
                    <p className="mb-3 text-sm text-gray-900 dark:text-gray-400">
                        This is a community based tooling for Ironwood RPG.
                    </p>
                </div>
                <ul className="pt-4 mt-4 space-y-2 border-t border-gray-400">
                    <li>
                        <Link href="/"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image src={HomeIcon} className="h-8 w-8 rounded-12"
                                   alt="IronwoodRPG Combat Icon"/>
                            <span className="ml-3">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gathering"
                                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <Image src={GatherIcon} className="h-8 w-8 rounded-12"
                                   alt="IronwoodRPG Combat Icon"/>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Gathering</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/crafting"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image src={CraftIcon} className="h-8 w-8 rounded-12"
                                   alt="Combat Icon"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Crafting</span>
                            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-red-900 bg-red-300 rounded-full dark:bg-red-700 dark:text-red-300">
                                WIP
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/combat"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image src={CombatIcon} className="h-8 w-8 rounded-12"
                                   alt="Combat Icon"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Combat</span>
                            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-red-900 bg-red-300 rounded-full dark:bg-red-700 dark:text-red-300">
                                WIP
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/items"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image src={InventoryIcon} className="h-8 w-8"
                                   alt="Inventory Icon"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Items</span>
                            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-red-900 bg-red-300 rounded-full dark:bg-red-700 dark:text-red-300">
                                WIP
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 border-t border-gray-400 dark:border-gray-700">
                    <li className="text-center">
                        <span className="justify-center">Ironwood RPG Community</span>
                    </li>
                    <li className="">
                        <a href="https://discord.gg/tNAH9fMVqx" target="_blank" rel="noreferrer"
                           className="flex items-center ml-2 p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400">
                                <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                            </svg>
                            <span className="ml-3">Discord</span>
                        </a>
                    </li>
                    <li>
                        <Link href="https://www.reddit.com/r/IronwoodRPG/" target="_blank" rel="noreferrer"
                           className="flex items-center ml-2 p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"
                                 className="flex-shrink-0 h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                <path fill="currentColor" d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"/>
                            </svg>
                            <span className="ml-3">Reddit</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.patreon.com/join/ironwoodrpg/" target="_blank" rel="noreferrer"
                           className="flex items-center ml-2 p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                <path fill="currentColor" d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"/>
                            </svg>
                            <span className="ml-3">Patreon</span>
                        </Link>
                    </li>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 border-t border-gray-400 dark:border-gray-700">

                    <li>
                        <Link href="/help"
                           className="flex items-center ml-2 p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <Image src={HelpIcon} className="h-8 w-8"
                                   alt="Inventory Icon"/>
                            <span className="flex-1 ml-3">Help</span>
                            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-red-900 bg-red-300 rounded-full dark:bg-red-700 dark:text-red-300">
                                WIP
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}