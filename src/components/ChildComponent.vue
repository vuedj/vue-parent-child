<script setup lang="ts">
import type { UserData } from '@/types'
import { ref } from 'vue'

const nameInput = ref('')

defineProps<{
    msg: string
}>()

const emit = defineEmits<{
    'emit-from-child': [data: UserData]
}>()

const handleSubmit = (e: Event) => {
    if (nameInput.value) {
        const trimmedNameInput = nameInput.value.trim()

        const processed: UserData = {
            id: 1,
            age: 46,
            name: trimmedNameInput
                .toLowerCase()
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
        }

        emit('emit-from-child', processed)

        const form = e.target as HTMLFormElement
        form.reset()
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
