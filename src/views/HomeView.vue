<script setup lang="ts">
import axios from 'axios'

import ProductCard  from '@/components/ProductCard/ProductCard.vue'
import Search from '@/components/Search/Search.vue'

import {ref, onMounted} from 'vue'


interface Products {
  id: number,
  title: string,
  body: string
}
let products = ref([])
 onMounted(async () => {
 products.value =  (await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')).data
})

// const products = ref([
//   {title: "Titulo do produto 1", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
//   {title: "Titulo do produto 2", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
//   {title: "Titulo do produto 3", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
//   {title: "Titulo do produto 4", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
//   {title: "Titulo do produto 5", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
//   {title: "Titulo do produto 6", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
//   {title: "Titulo do produto 7", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
//   {title: "Titulo do produto 8", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},

// ])
</script>

<template>
  <main >
    <div class="w-1/2 m-auto p-4">
      <Search/>
    </div>
    <div class="flex gap-4 flex-wrap justify-center">
      <ProductCard  v-for="product in products" :product="product"/> 
    </div>
  </main>
</template>
