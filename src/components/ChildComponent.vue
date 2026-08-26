<script setup>
import { ref } from 'vue'

const nameInput = ref('')

defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const emit = defineEmits(['emit-from-child'])

const handleSubmit = (e) => {
    if (nameInput.value) {
        emit('emit-from-child', {
            id: 1,
            age: 46,
            name: nameInput.value,
        })

        e.target.reset()
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
