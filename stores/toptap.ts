import { defineStore } from 'pinia'

export const useTopTapStore = defineStore('toptap', {
    state: () => {
        return {
            isShow: Boolean,
            windowWidth: Number
        }
    } 
})