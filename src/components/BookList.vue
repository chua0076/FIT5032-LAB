<template>
    <div class="about container mt-5">
        <h1>Books with ISBN > 1000 top 3</h1>
        <ul>
            <li v-for="book in books" :key="book.id">{{ book.name }} (ISBN:{{ book.isbn }})</li>
        </ul>
        <p>click to delete the book with input name</p>
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" />
    </div>
    <button @click="deleteBook">Delete</button>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { collection, query, getDocs, where, limit, orderBy, deleteDoc } from 'firebase/firestore'
import db from "../firebase/init.js"

const books = ref([])
const name = ref('')

const fetchBooks = async () => {
    try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000), limit(3), orderBy('isbn', 'desc'))
        const snap = await getDocs(q)
        snap.forEach((doc) => {
            books.value.push({ id: doc.id, ...doc.data() })
        })
    } catch (error) {
        console.log(error)
    }


}

const deleteBook = async () => {
    try {
        await deleteDoc(collection(db, 'books'), { name: 'New Book', isbn: 1234 });
        console.log('Book added!');
    } catch (error) {
        console.error('Error adding book: ', error);
    }
}
onMounted(() => {
    fetchBooks()
})
</script>
  
<style></style>