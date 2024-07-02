<script setup>
import CartListItem from './CartListItem.vue';


</script>
<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="cart-anim-true bg-white w-96 h-full fixed right-0 top-0 z-20 p-10">

        <CartListItem />
    
    </div>
</template>



<style>
.cart-anim-true{
    transition: all .5s;
    transform: translateX(0px);
}
.cart-anim-false{
   transition: all .5s;
   transform: translateX(400px);
}

</style>