<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
import type { UserData } from '@/types'
import { ref } from 'vue'

const msg = 'From Parent Component:'
const eventData = ref<UserData | null>(null)

const parentFunc = (data: UserData) => {
    eventData.value = data
}
</script>

<template>
    <div class="parent">
        <h1>Home</h1>

        <div class="show-data">
            {{ eventData }}
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
    min-height: 40px;
}
</style>
