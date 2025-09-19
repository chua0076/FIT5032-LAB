<template>
  <div class="about container mt-5">
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="username"/>
            </div>
            <div class="col-md-6 col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
              />
              
            </div>
        </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
            
          </div>
        </form>
  </div>
</template>

<script setup>
import { login } from '../auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const username = ref('')
const password = ref('')


const submitForm = () => {
    const ok = login(username.value, password.value)
    if(ok){
        router.push('/')
    } else {
        alert ("false")
    }
}


</script>

<style>
</style>