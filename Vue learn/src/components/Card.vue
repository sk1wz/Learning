<script setup>


const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  imageUrl: String,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function

})

</script>

<template>
       <div class="card border m-4 relative rounded-xl cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all" v-auto-animate>
         <img @click="onClickFavorite" :src="isFavorite ? '/liked.svg' : 'unliked.svg' " class="absolute top-4 left-4" alt="">
         <img :src="imageUrl"  class="justify-center items-center m-auto" alt="">
         <p class="m-4 font-sans">{{ title }}</p>
          <div class="card-info relative flex justify-between mt-4 m-4">
            <div class="flex flex-col">
              <span class="text-slate-500">Цена</span>
              <span class="font-bold">{{ price }} ₽</span>
            </div>
           
            <div>
              <img @click="onClickAdd" :src="isAdded ? '/btn-checked.svg' : '/btn-plus.svg'" class="absolute right-2 bottom-1" alt="">
            </div>
   
          </div>
       </div>
     
   </template>
