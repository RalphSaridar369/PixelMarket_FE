<script setup>
import { ref } from 'vue'
import Header from './components/header.vue';
import Home from './components/home.vue';

function increment(string){
  console.log(string)
  count.value++
}

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <Header />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#242424" fill-opacity="1" d="M0,256L60,234.7C120,213,240,171,360,181.3C480,192,600,256,720,272C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
  </svg>
  <div class="index-page">
    <Home />
  </div>
  
</template>

<style scoped>
.index-page{
  padding:0 20px!important;
}

.read-the-docs {
  color: #888;
}
</style>
