<script setup>
import {defineProps} from 'vue'
import CarBrandItem from './car-brand-item.component.vue'
defineProps({
    brands: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div v-for="brand in brands" :key="brand.MakeId">
        <CarBrandItem :brand="brand"/>
    </div>

</template>