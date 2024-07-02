<script setup>
const props = defineProps({
  sortBy: String,
  search: String,
  onChangeSelect: Function,
  onChangeInput: Function
})

</script>

<template>
    <div class="headerWrapper flex justify-between items-center">
      <h2 class="text-3xl font-bold m-4">Все кроссовки</h2>

      <div class="searching flex justify-center items-center relative">
        <img src="../../public/search.svg" class="absolute left-6 top-6" alt="">
        <input type="text" @input="onChangeInput" placeholder="Поиск..." class="pl-10 border border-slate-200 p-1 rounded outline-none m-4 cursor-pointe focus:border-gray-400" />
        <select @change="onChangeSelect" class="m-4 border border-slate-200 p-1 rounded outline-none cursor-pointer">
          <option value="name">По названию</option>
          <option value="price">По цене (Дешевые)</option>
          <option value="-price">По цене (Дорогие)</option>
        </select>
      </div>

    </div>
</template>

<style scoped>
@media(width < 900px){
  .headerWrapper{
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  
}
@media(width < 600px){
  .searching{
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>