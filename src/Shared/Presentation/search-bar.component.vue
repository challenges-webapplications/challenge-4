<script setup>
import { ref } from 'vue'
import LanguageSwitcher from './language-switcher.component.vue'

const searchQuery = ref('')
const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const handleInput = () => {
  emit('search', searchQuery.value)
}
</script>

<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      @input="handleInput"
      @keyup.enter="handleSearch"
      :placeholder= " $t('message.search') "
      class="search-input"
    />
    <button @click="handleSearch" class="search-button">
      🔍
    </button>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  gap: 8px;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #90EE90;
}

.search-button {
  padding: 8px 16px;
  background-color: #90EE90;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #7FDB7F;
}
</style>