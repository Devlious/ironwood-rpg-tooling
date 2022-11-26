import create from 'zustand'
import produce from 'immer'

export const useGatheringStore = create((set) => ({
    woodcutting: {
        tree_timer: 0,
        tool_percentage: 0,
        potion_percentage: 0,
        quantity: 0,
        total_time: '',
    },
    changeWoodcuttingTimer: (timer) => set(produce(state => {
        state.woodcutting.tree_timer = timer
    })),
    changeWoodcuttingToolPercentage: (percentage) => set(produce(state => {
        state.woodcutting.tool_percentage = percentage
    })),
    changeWoodcuttingPotionPercentage: (percentage) => set(produce(state => {
        state.woodcutting.potion_percentage = percentage
    })),
    changeWoodcuttingQuantity: (quantity) => set(produce(state => {
       state.woodcutting.quantity = quantity
    }))
}))