<template>
    <pre>{{ count }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const count = ref(null);
const error = ref(null)

const getBookCount = async () => {
    try {
        const respone = await axios.get('https://countbooks-kcjou3c5fa-uc.a.run.app')
        count.value = respone.data
        error.value = null
    } catch (error) {
        count.value = null
        error.value = error
    }
}
onMounted(getBookCount)

</script>

<style></style>