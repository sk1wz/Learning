<script setup>
const emit = defineEmits('removeFromCart',)
const props = defineProps({
    id: Number,
    title: String,
    imageUrl: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickFavorite: Function,
    onClickAdd: Function
})
</script>

<template>
    <div class="flex border border-slate-200 p-4 rounded-xl items-center" v-auto-animate>
        <img :src="imageUrl"  class="w-16 h-16" :alt="title">
        <div class="flex justify-between ">
            <div class="m-2 flex flex-col flex-1">
                <p>{{ title }}</p>
                <b>{{ price }} руб.</b>
            </div>

            <div class="flex justify-between ml-4 mt-6">
                <img @click="emit('removeFromCart')" src="/public/btn-remove.svg" class="cursor-pointer" alt="">
            </div>
        </div>
    </div>

</template>