<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
import type { ProductData, UserData } from '@/types'
import { ref } from 'vue'

const msg = 'Defined in Parent component - rendered in Child component'

const userData = ref<UserData | null>(null)
const productData = ref<ProductData | null>(null)

const parentFunc = (u: UserData, p: ProductData) => {
    userData.value = u
    productData.value = p
}
</script>

<template>
    <div class="parent">
        <h1>Home</h1>

        <div class="show-data">
            <div>
                {{ userData }}
            </div>
            <div>
                {{ productData }}
            </div>
        </div>

        <ChildComponent
            :msg="msg"
            @emit-from-child="parentFunc"
        />
    </div>
</template>

<style scoped>
.parent {
    outline: 1px solid tomato;
    padding: 1rem;
}
.show-data {
    min-height: 5rem;
    padding-inline: 4rem;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
