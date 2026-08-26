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

const handleClose = () => {
    emit('emit-from-child', {
        id: 1,
        age: 46,
        name: nameInput,
    })
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <input
        v-model.lazy="nameInput"
        type="text"
        placeholder="Enter Name..."
    />
    <button @click="handleClose">Click me</button>
</template>

<style scoped>
h1 {
    margin-top: 2rem;
}
</style>
