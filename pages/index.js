import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
      <div className="text-white w-full">
          <h1 className="text-48 font-bold">Ironwood RPG Tooling</h1>
          <h2 className="mt-12 ml-8 text-32 font-semibold">Why?</h2>
          <p className="text-20 mt-2 ml-12">
            Because I want some tools to do fast calculations.
          </p>
          <p className="mt-12 text-18">
            If you have some suggestions for a tool or changes on the existing, feel free to reach on Discord:
              <span className="text-[#53BD73] flex font-bold">Devlious#8247</span>
          </p>
      </div>
  )
}
