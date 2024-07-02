<script setup>
defineProps({
  totalPrice: Number
})
const emit = defineEmits('openDrawer');
</script>

<template>
 <header class="header flex px-8 py-8 justify-between border-b border-slate-300" v-auto-animate>

<div class="logo flex items-center gap-4">
  <img src="/logo.png" alt="Logo" class="w-10">
  <div>
    <h1 class="font-bold uppercase">QWE</h1>
    <p class="text-slate-400">Магазин кроссовок</p>
  </div>
</div>

<div class="menu flex items-center">
  <ul class="flex gap-10">
    <li @click="() => emit('openDrawer')" class="flex items-center gap-3 hover:text-black cursor-pointer">
      <img src="/cart.svg" alt="cart">
      <b>{{ totalPrice }} руб.</b>
    </li>
    <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
      <img src="/heart.svg" alt="cart">
      <span>Избранное</span>
    </li>
    <li class="profile flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
      <img src="/user.svg" alt="profile">
      <span>Профиль</span>
    </li>
  </ul>
</div>
</header>
</template>


<style scoped> 
@media(width < 600px){
  .profile{
   display: none;
  }
}
</style>