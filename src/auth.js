import { ref } from 'vue'

const LS_LOGIN = 'isLogin'
const LS_USER = 'username'
const LS_ROLE = 'role'

export const isLogin = ref(localStorage.getItem(LS_LOGIN) === 'true')
export const currentUser = ref(localStorage.getItem(LS_USER))
export const currentRole = ref(localStorage.getItem(LS_ROLE))

const users = [
  { username: 'admin', password: '12345', role: 'admin' },
  { username: 'Tom', password: '123456', role: 'user' }
]

export function login(username, password) {
  const found = users.find((user) => user.username === username && user.password === password)

  if (found) {
    isLogin.value = true
    currentUser.value = found.username
    currentRole.value = found.role

    localStorage.setItem(LS_LOGIN, 'true')
    localStorage.setItem(LS_USER, found.username)
    localStorage.setItem(LS_ROLE, found.role)

    return true
  } else {
    isLogin.value = false
    currentUser.value = null
    currentRole.value = null

    localStorage.removeItem(LS_LOGIN)
    localStorage.removeItem(LS_USER)
    localStorage.removeItem(LS_ROLE)

    return false
  }
}

export function logout() {
  isLogin.value = false
  currentUser.value = null
  currentRole.value = null

  localStorage.removeItem(LS_LOGIN)
  localStorage.removeItem(LS_USER)
  localStorage.removeItem(LS_ROLE)
}
