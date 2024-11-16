<template>
  <div class="p-4 bg-white shadow flex justify-between items-center">
    <div>Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} items</div>
    <div class="space-x-2">
      <button @click="previousPage" :disabled="currentPage === 1" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['currentPage', 'totalPages', 'startItem', 'endItem', 'totalItems'],
  methods: {
    nextPage() {
      this.$emit('next-page');
    },
    previousPage() {
      this.$emit('previous-page');
    },
  },
};
</script>
