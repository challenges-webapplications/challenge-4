<script setup>
import BrandItem from './car-brand-item.component.vue'
import {BrandApiService} from '@/CarBrands/Application/brand-api.service.js'
import {onBeforeMount, ref} from 'vue'

const brands = ref([]);

const brandsApiService = new BrandApiService();
onBeforeMount ( async ()=>{
    brands.value = await brandsApiService.getBrands();
}

)
</script>

<template>
    <div>
        <h2>{{ $t('brand.title') }}  </h2>
    </div>
    <div class = "brand-list">
        <BrandItem v-for="brand in brands" :key="brand.MakeId" :brand="brand" />
    </div>
</template>