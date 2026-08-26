<template>
    <div class="container">
        <router-link :to="{ name: 'Home' }">Home</router-link> |
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-view />
    </div>
</template>

<style scoped>
.container {
    max-width: 1440px;
    margin: 0 auto;
}
</style>
