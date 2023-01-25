import { useState, useEffect } from 'react'
import ItemCard from "../components/ItemCard";
import {
    hatchets,
    pickaxes,
    rods,
    spades,
    swords,
    hammers,
    bows,
    helmets,
    bodies,
    boots,
    gloves,
    shields,
} from "/data/items/equipment";

import {
    potions,
    fishes,
    fruits,
    arrows,
} from "/data/items/consumable";

import {
    burntFishes,
} from "/data/items/sellable";

import {
    rawFishes,
    logs,
    ores,
    bars,
    bones,
    fangs,
    flowers,
    vegetables,
    miscs,
} from "/data/items/material";

export default function Items() {
    return (
        <div className="mx-auto pb-16">
            <div className="grid gap-6 grid-cols-5">
                {
                    hatchets.map(
                        (hatchet) => (
                            <ItemCard key={hatchet.name} item={hatchet} />
                        )
                    )
                }
                {
                    pickaxes.map(
                        (pickaxe) => (
                            <ItemCard key={pickaxe.name} item={pickaxe} />
                        )
                    )
                }
                {
                    rods.map(
                        (rod) => (
                            <ItemCard key={rod.name} item={rod} />
                        )
                    )
                }
                {
                    spades.map(
                        (spade) => (
                            <ItemCard key={spade.name} item={spade} />
                        )
                    )
                }
                {
                    swords.map(
                        (sword) => (
                            <ItemCard key={sword.name} item={sword} />
                        )
                    )
                }
                {
                    hammers.map(
                        (hammer) => (
                            <ItemCard key={hammer.name} item={hammer} />
                        )
                    )
                }
                {
                    bows.map(
                        (bow) => (
                            <ItemCard key={bow.name} item={bow} />
                        )
                    )
                }
                {
                    helmets.map(
                        (helmet) => (
                            <ItemCard key={helmet.name} item={helmet} />
                        )
                    )
                }
                {
                    bodies.map(
                        (body) => (
                            <ItemCard key={body.name} item={body} />
                        )
                    )
                }
                {
                    boots.map(
                        (boot) => (
                            <ItemCard key={boot.name} item={boot} />
                        )
                    )
                }
                {
                    gloves.map(
                        (glove) => (
                            <ItemCard key={glove.name} item={glove} />
                        )
                    )
                }
                {
                    shields.map(
                        (shield) => (
                            <ItemCard key={shield.name} item={shield} />
                        )
                    )
                }
                {
                    potions.map(
                        (potion) => (
                            <ItemCard key={potion.name} item={potion} />
                        )
                    )
                }
                {
                    fishes.map(
                        (fish) => (
                            <ItemCard key={fish.name} item={fish} />
                        )
                    )
                }
                {
                    fruits.map(
                        (fruit) => (
                            <ItemCard key={fruit.name} item={fruit} />
                        )
                    )
                }
                {
                    arrows.map(
                        (arrow) => (
                            <ItemCard key={arrow.name} item={arrow} />
                        )
                    )
                }
                {
                    burntFishes.map(
                        (burntFish) => (
                            <ItemCard key={burntFish.name} item={burntFish} />
                        )
                    )
                }
                {
                    rawFishes.map(
                        (rawFish) => (
                            <ItemCard key={rawFish.name} item={rawFish} />
                        )
                    )
                }
                {
                    logs.map(
                        (log) => (
                            <ItemCard key={log.name} item={log} />
                        )
                    )
                }
                {
                    ores.map(
                        (ore) => (
                            <ItemCard key={ore.name} item={ore} />
                        )
                    )
                }
                {
                    bars.map(
                        (bar) => (
                            <ItemCard key={bar.name} item={bar} />
                        )
                    )
                }
                {
                    bones.map(
                        (bone) => (
                            <ItemCard key={bone.name} item={bone} />
                        )
                    )
                }
                {
                    fangs.map(
                        (fang) => (
                            <ItemCard key={fang.name} item={fang} />
                        )
                    )
                }
                {
                    flowers.map(
                        (flower) => (
                            <ItemCard key={flower.name} item={flower} />
                        )
                    )
                }
                {
                    vegetables.map(
                        (vegetable) => (
                            <ItemCard key={vegetable.name} item={vegetable} />
                        )
                    )
                }
                {
                    miscs.map(
                        (misc) => (
                            <ItemCard key={misc.name} item={misc} />
                        )
                    )
                }
            </div>
        </div>
    )
}