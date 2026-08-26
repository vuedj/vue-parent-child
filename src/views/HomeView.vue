<script setup>
import ChildComponent from '@/components/ChildComponent.vue'
import { ref } from 'vue'

const msg = 'From Child Component:'
const eventData = ref('')

const parentFunc = (data) => {
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
