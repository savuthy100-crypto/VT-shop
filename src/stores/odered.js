import { defineStore } from "pinia";

export const useOdered = defineStore('odered',{
    state: () => ({
        items: [],
    }),
    actions :{
        addItem(product){
            const existing = this.items.find((i) => i.id === product.id)
            if (existing) {
                existing.quantity++
            } else {
                this.items.push({ ...product, quantity: 1 })
            }
        }
    }

})