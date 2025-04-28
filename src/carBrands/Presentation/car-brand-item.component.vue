<script setup>

import {defineEmits, defineProps} from "vue";

const props = defineProps({
  brand: {
    type: Object,
    required: true,
    default: () => ({
      MakeId: 0,
      MakeName: '',
      VehicleTypeId: 0,
      VehicleTypeName: ''
    })
  }
});

const emits = defineEmits(["show-tooltip"]);

</script>

<template>
  <pv-card class="brand-card">
    <template #title>
      {{ brand.MakeName }}
    </template>
    <template #content>
      <div class="brand-details">
        <p><strong>Make ID:</strong> {{ brand.MakeId }}</p>
        <p><strong>Vehicle Type:</strong> {{ brand.VehicleTypeName }}</p>
        <p><strong>Vehicle Type ID:</strong> {{ brand.VehicleTypeId }}</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.brand-card {
  margin: 1rem;
  max-width: 300px;
}

.brand-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.brand-details p {
  margin: 0;
  padding: 0;
}
</style>
