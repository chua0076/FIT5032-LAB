<template>
    <div class="about container mt-5">
        <h1>Add a new Book to firestore</h1>
        <form @submit.prevent="submitForm">
            <div class="row mb-3">
                <div class="col-md-6 col-sm-6">
                    <label for="name" class="form-label">Book Name</label>
                    <input type="text" class="form-control" id="name" v-model="name" required />
                </div>

                <div class="col-md-6 col-sm-6">
                    <label for="isbn" class="form-label">ISBN</label>
                    <input type="text" class="form-control" id="isbn" v-model="isbn" required />
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary me-2">Add+</button>
            </div>
        </form>
        <BookList />
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
import BookList from '../components/BookList.vue'

const name = ref('')
const isbn = ref('')

const addBook = async () => {
    try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
            alert('ISBN must be')
            return
        }

        await addDoc(collection(db, 'books'), { isbn: isbnNumber, name: name.value })

        isbn.value = ''
        name.value = ''
        alert('Book added successfully!')
    } catch (error) {
        console.log('Error: ', error)
    }
}

const submitForm = () => {
    addBook()
}

</script>
  
<style></style>