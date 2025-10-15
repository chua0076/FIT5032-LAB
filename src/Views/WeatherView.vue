<template>
  <div class="about container mt-5">
    <h1>WEATHER APP</h1>
    <h2>Search by City</h2>
    <div class="search-bar">

        <input type="text" v-model="city" placeholder="Enter city name" class="search-input"/>
        <button @click="searchByCity" class="search-button">Search</button>
    </div>
    <div>
      <h3>
        Use my Location
      </h3>
      <button @click="searchLocalWeather">Get Local weather</button>
    </div>
    <div v-if="weather">
      {{ weather.weather[0].description }}
      {{ weather.main.temp }}
    </div>
    <img :src="iconURL" alt="icon" v-if="weather"/>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const city = ref('')
const API_key = '75e39755efb65136aa09a4c9daa11954'
const weather = ref (null)
const iconURL = ref(null)

const searchByCity = async() =>
{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_key}&units=metric`)
    console.log(data)
    weather.value = data
    console.log(data.weather[0].icon)
    iconURL.value = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}
const searchLocalWeather = async() =>
{
    navigator.geolocation.getCurrentPosition(
      async({coords}) =>{
        const {data} = await axios.get(`https://api.openweathermap.org/data/3.0/onecall/overview?lat=${coords.latitude}&lon=${coords.latitude}&appid=${API_key}&units=metric`)
        weather.value = data
        iconURL.value = null
      }
    )
}
</script>

<style>
</style>