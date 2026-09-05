<script setup lang="ts">
import type { ProductData, UserData } from '@/types'
import { ref } from 'vue'

const nameInput = ref<string>('')
let dummyData: ProductData

defineProps<{
    msg: string
}>()

const emit = defineEmits<{
    'emit-from-child': [u: UserData, p: ProductData]
}>()

const handleSubmit = (e: Event) => {
    dummyData = {
        id: 2,
        sku: 'product-1-sku',
    }

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

        emit('emit-from-child', processed, dummyData)

        const form = e.target as HTMLFormElement
        form.reset()
    }
}
</script>

<template>
    <div class="child">
        <h2>{{ msg }}</h2>
        <form @submit.prevent="handleSubmit">
            <input
                v-model.lazy="nameInput"
                type="text"
                placeholder="Enter Name..."
            />
            <button type="submit">Click me</button>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    max-width: 20rem;
    justify-content: space-between;
}

form input,
button {
    padding: 0.2rem;
}

.child {
    outline: 1px solid darkcyan;
    padding: 1rem;
}

h2 {
    margin-block-end: 0.5rem;
}
</style>
