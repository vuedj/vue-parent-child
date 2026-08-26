<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
import type { UserData } from '@/types'
import { ref } from 'vue'

const msg = 'From Child Component:'
const eventData = ref<UserData | null>(null)

const parentFunc = (data: UserData) => {
    eventData.value = data
}
</script>

<template>
    <div>
        <h1>Home</h1>

        {{ eventData }}

        <ChildComponent
            :msg="msg"
            @emit-from-child="parentFunc"
        />
    </div>
</template>

<style scoped></style>
