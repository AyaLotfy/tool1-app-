<template>
  <div class="search-filter-container">
    <!-- Tabs for "All" and "My shorts" -->
    <!-- <div class="tabs">
      <span class="tab active">All</span>
      <span class="tab">My shorts</span>
    </div> -->
    
    <div class="filter-controls">
      <!-- Search Input -->
      <input 
        type="text" 
        v-model="search" 
        placeholder="Search for contact" 
        @input="applyFilters" 
        class="search-input"
      />
      
      <!-- Filter Button -->
      <button @click="applyFilters" class="filter-button">
        <span class="icon">🔍</span> <!-- Placeholder icon, replace with actual icon if available -->
        Filter
      </button>
      
      <!-- Columns Dropdown -->
      <select v-model="selectedColumn" @change="applyFilters" class="columns-dropdown">
        <option value="" disabled>Options</option>
        <option v-for="column in columns" :key="column" :value="column">{{ column }}</option>
      </select>
      
      <!-- New Contact Button -->
      <button class="new-contact-button">New Course</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['filter'],
  setup(_, { emit }) {
    const search = ref('');
    const selectedColumn = ref('');
    const columns = ref(['Title', 'Shorthand Symbol']); // Example columns

    const applyFilters = () => {
      emit('filter', { search: search.value, column: selectedColumn.value });
    };

    return { search, selectedColumn, columns, applyFilters };
  },
});
</script>

<style scoped>
.search-filter-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #f9fafb; /* Light background color */
  padding: 1rem;
  border-radius: 8px;
}

.tabs {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e5e7eb; /* Light border color */
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.tab {
  cursor: pointer;
  color: #9ca3af; /* Inactive tab color */
}

.tab.active {
  font-weight: bold;
  color: #000; /* Active tab color */
}

.filter-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-input {
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  flex: 1;
}

.filter-button {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #2563eb; /* Blue button color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.columns-dropdown {
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  cursor: pointer;
}

.new-contact-button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
