<template>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
</template>
  
<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { isLogin, currentUser, currentRole } from '@/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const signin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log('Firebase login Successful!')
            isLogin.value = true
            currentUser.value = auth.currentUser.email
            currentRole.value = auth.currentUser.email.search("admin") === -1 ? "user" : "admin"
            console.log("Login", auth.currentUser)
            router.push('/about')
        }).catch((err) => {
            console.log(err.code)
        })
}

</script>
  
<style></style>