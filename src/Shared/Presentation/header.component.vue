<script setup>
import LanguageSwitcher from './language-switcher.component.vue'
import SearchBar from './search-bar.component.vue'
</script>

<template>
  <header class="app-header">
    <div class="header-content">
      <h1 class="app-title">{{ $t('message.title') }}</h1>
      <div class="search-bar-container">
        <SearchBar @search="handleSearch"/>
      </div>
      <div class="language-switcher-container">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #90EE90;
  padding: 1rem;
  width: 100%;
}

.header-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.app-title {
  text-align: left;
  margin: 0;
  flex-shrink: 0;
}

.search-bar-container {
  flex: 1;
  max-width: 400px;
  margin: 0 20px;
}

.language-switcher-container {
  position: static;
  flex-shrink: 0;
}
</style>