<script setup>
import Card from './Card.vue';

const props = defineProps({
  items: Array
})

const emit = defineEmits(['addToFavorite', 'onClickAddCart']);

</script>

<template>

     <div class="card-list grid grid-cols-4 gap-5 mt-10" v-auto-animate>
      <Card v-for="item in items" 
      :key="item.id" :id="item.id" 
      :title="item.title" 
      :price="item.price" 
      :imageUrl="item.imageUrl" 
      :onClickFavorite="() => emit('addToFavorite', item)" 
      :isFavorite="item.isFavorite"
      :onClickAdd="() => emit('onClickAddCart', item)"
      :isAdded="item.isAdded"
      />

    </div>
   
</template>

<style scoped>
@media(width < 1300px){
  .card-list{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (width < 1000px) {
  .card-list{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

}
@media(width < 600px){
  .card-list{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
