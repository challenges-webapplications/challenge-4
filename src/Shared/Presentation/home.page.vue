<script setup>
import { ref } from 'vue'
import HeaderComponent from './header.component.vue'
import CarBrandViewPage from '@/carBrands/Presentation/card-brand-view.page.vue'
</script>

<template>
    <header>
        <HeaderComponent/>
    </header>
    <main>
        <div>
            <CarBrandViewPage/>
        </div>
    </main>

</template>