<template>
    <div class = "about container mt-5">
        <h1>Get Book Count</h1>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !==null">Total Number of books: {{ count }}</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const count = ref(null);
const error = ref(null)

const getBookCount = async () => {
    try {
        const respone = await axios.get('https://countbooks-kcjou3c5fa-uc.a.run.app')
        count.value = respone.data.count
        error.value = null
    } catch (error) {
        count.value = null
        error.value = error
    }
}

</script>

<style></style>