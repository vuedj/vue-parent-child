<script setup lang="ts">
import { ref } from 'vue'

const nameInput = ref('')

interface UserData {
    id: number
    age: number
    name: string
}

defineProps<{
    msg: string
}>()

const emit = defineEmits<{
    'emit-from-child': [data: UserData]
}>()

const handleSubmit = (e: Event) => {
    if (nameInput.value) {
        emit('emit-from-child', {
            id: 1,
            age: 46,
            name: nameInput.value,
        })

        ;(e.target as HTMLFormElement).reset()
    }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <form @submit.prevent="handleSubmit">
        <input
            v-model.lazy="nameInput"
            type="text"
            placeholder="Enter Name..."
        />
        <button type="submit">Click me</button>
    </form>
</template>

<style scoped>
h1 {
    margin-top: 2rem;
}
</style>
