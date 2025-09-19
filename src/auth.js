import { ref } from "vue";

export const isLogin = ref (false)

const user = 'test'
const pwd = "12345"

export function login (username, password){
    const ok = username ===user && password === pwd
    isLogin.value = ok 
    return ok
}

export function logout(){
    isLogin.value = false
}