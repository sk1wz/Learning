<script setup>
import { onMounted, ref, watch,reactive, provide, computed } from 'vue';
import axios from 'axios';
import Header from './components/Header.vue';
import CardList from './components/CardList.vue';
import HeaderWrapper from './components/HeaderWrapper.vue';
import Drawer from './components/Drawer.vue';

// ------Переменные------
const items = ref([]);
const drawerOpen = ref();
const cart = ref([]);
const filters = reactive( {
  sortBy: 'title',
  searchQuery: ''
});

// Вычисление прайса
const totalPrice = computed(
  () =>  cart.value.reduce((acc,item) => acc + item.price, 0));

const procentPrice = computed(
  () =>  Math.ceil((totalPrice.value * 5) / 100));


// ------Функции------
const createOrder = async() =>{
  try{
    const {data} = await axios.post('https://45fb72d64cf3f4c5.mokky.dev/orders',{
      items: cart.value,
      totalPrice: totalPrice.value,
    });
    cart.value = []
   
   
   
  } catch(e){
    console.log(e);
    
  }
}

const closeDrawer = () =>{
  drawerOpen.value = false;
}

const openDrawer = () =>{
  drawerOpen.value = true;
}

const onClickAddCart = (item) =>{
  if(!item.isAdded){
    addToCart(item)
  } else{
    removeFromCart(item)
  }
  
}

const addToCart = (item) =>{
  cart.value.push(item);
  item.isAdded = true;
}

const removeFromCart = (item) =>{
    cart.value.splice(cart.value.indexOf(item), 1);
    item.isAdded = false;
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeInput = (event) => {
  filters.searchQuery = event.target.value;
};

// Поиск items в favorites
const findFavorites = async () =>{
  try{
    const { data: favorites } = await axios.get('https://45fb72d64cf3f4c5.mokky.dev/favorites');
    items.value = items.value.map(item =>{
      const favorite = favorites.find(favorite => favorite.parentId === item.id)
      if(!favorite){
        return item;
        
      }
      return{
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
        
      }
    });
   
    
  } catch (e){
    console.log(e);
    
  }
};

const addToFavorite = async (item) =>{

    try{
     if(!item.isFavorite){
      const obj = {
        parentId: item.id
      };
      item.isFavorite = true;
      const {data} = await axios.post('https://45fb72d64cf3f4c5.mokky.dev/favorites', obj);
      item.favoriteId = data.id;
    
     }else {
      item.isFavorite = false;
      await axios.delete(`https://45fb72d64cf3f4c5.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null;
      
    }
    } catch(e){
      console.log(e);
      
    }
}

// Поиск items в items 
const findItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get('https://45fb72d64cf3f4c5.mokky.dev/items', { params });
    items.value = data.map(obj => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }));
  } catch (error) {
    console.error(error);
  }
};

// Вызов функции поиска при загрузке компонента и при изменении фильтров
onMounted( async () => {
  await findItems();
  await findFavorites();
});

watch(filters, findItems);
watch(cart, ()=>{
  items.value = items.value.map((item)=> ({
    ...item,
    isAdded: false
  }))
})

provide('closeDrawer', closeDrawer);
provide('cart', cart);
provide('onClickAddCart', onClickAddCart);
provide('removeFromCart', removeFromCart);
provide('totalPrice', totalPrice);
provide('procentPrice', procentPrice);
provide('createOrder', createOrder);

</script>

<template>
    <Drawer v-if="drawerOpen" :drawerOpen="drawerOpen"/>
  <div class="bg-white mt-10 w-5/6 m-auto rounded-2xl shadow-2xl relative">
    <Header :totalPrice="totalPrice" @open-drawer="openDrawer" />
    

    <HeaderWrapper :sortBy="filters.sortBy" :search="filters.search" :on-change-input="onChangeInput" :on-change-select="onChangeSelect"/>
    <CardList :items="items" @addToFavorite="addToFavorite" @onClickAddCart="onClickAddCart"/>
    
  </div>
 
</template>


