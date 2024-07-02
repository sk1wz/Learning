<script setup>
import { inject ,computed} from 'vue';
import CartItem from './CartItem.vue';
const closeDrawer = inject('closeDrawer')
const cart = inject('cart');
const removeFromCart = inject('removeFromCart');
const totalPrice = inject('totalPrice');
const procentPrice = inject('procentPrice');
const createOrder = inject('createOrder');


</script>

<template>
      <div class="flex items-center gap-5 mb-5">
      <i @click="()=> closeDrawer()" class="ri-arrow-left-line text-xl text-gray-500 hover:text-black transition cursor-pointer"></i>
      <h2 class="text-2xl font-bold">Корзина</h2>
    </div>
    <div class="cartItemList flex flex-col gap-4" v-auto-animate>
        <CartItem v-for="item in cart" :key="item.id" :title="item.title" :price="item.price" :image-url="item.imageUrl" @removeFromCart="()=> removeFromCart(item)" />
        
    </div>
    <div class="flex flex-col gap-5 mt-5">
            <div class="flex">
                <span>Итого:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ totalPrice }} ₽</b>
            </div>

            <div class="flex">
                <span>Cкидка:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>5%</b>
            </div>

            <div class="flex">
                <span>Итоговая цена:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{  totalPrice - procentPrice }} ₽</b>
            </div>

            <button
                @click="() => createOrder()"
                :disabled="totalPrice ? false : true"
                class="bg-lime-500 w-full p-4 rounded-2xl text-white transition cursor-pointer hover:bg-lime-600 disabled:bg-slate-300">
                Оформить заказ
            </button>
            
        </div>
</template>

<style scoped>
::-webkit-scrollbar{
    color: white;
}
.cartItemList{
 height: 600px;
 overflow-y: scroll;  
}
</style>