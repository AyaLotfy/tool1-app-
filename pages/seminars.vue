<template>
  <div class="flex h-screen">
    <Sidebar />
    
    <div class="flex-1 flex flex-col">
      <Navbar />

      <!-- Main Content Wrapper with Scroll -->
      <div class="flex-1 overflow-y-auto p-4">
        <!-- Add the Search Filter component here -->
        <SearchFilter @filter="handleFilter" />
        
        <!-- Table Wrapper -->
        <div class="table-wrapper">
          <CoursesTable
            :paginatedData="filteredPaginatedData"
            :showNestedTables="showNestedTables"
            @toggle-nested="toggleNestedTable"
          />
        </div>
      </div>

      <!-- Pagination Wrapper -->
      <div class="pagination-wrapper fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
        <Pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          :startItem="startItem"
          :endItem="endItem"
          :totalItems="totalItems"
          @next-page="nextPage"
          @previous-page="previousPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import CoursesTable from '@/components/CousesTable.vue';
import Pagination from '@/components/Pagination.vue';
import SearchFilter from '@/components/SearchFilter.vue';
import axios from 'axios'; // Axios for API calls
import apiClient from '@/plugins/axios'; // Import the Axios instance


export default {
  components: {
    Sidebar,
    Navbar,
    CoursesTable,
    Pagination,
    SearchFilter,
  },
  data() {
    return {
      parentData: [], // Parent data to populate the table
      showNestedTables: [], // Tracks visibility of nested tables
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: '',
      selectedPriority: '',
    };
  },
  computed: {
    filteredData() {
      // Filters the data based on search and priority
      return this.parentData.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesPriority = this.selectedPriority ? item.priority === parseInt(this.selectedPriority) : true;
        return matchesSearch && matchesPriority;
      });
    },
    filteredPaginatedData() {
      // Paginates the filtered data
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },
    totalItems() {
      return this.filteredData.length; // Total items should consider filtered data
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    startItem() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.startItem + this.itemsPerPage - 1, this.totalItems);
    },
  },
  // https://my.1tool.com/suite/api/courses?include=events
  methods: {
   async fetchParentData() {
      try {
        const response = await apiClient.get('/courses?include=events'); // Use the base URL defined in apiClient
        this.parentData = response.data.data; // Handle response data
        console.log(JSON.stringify(this.parentData));
      } catch (error) {
        console.error('Error fetching parent data:', error);
      }
    },
    toggleNestedTable(index) {
      this.$set(this.showNestedTables, index, !this.showNestedTables[index]);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    handleFilter(filters) {
      this.searchQuery = filters.search;
      this.selectedPriority = filters.priority;
      this.currentPage = 1; // Reset to first page after filtering
    },
  },
  async created() {
    await this.fetchParentData(); // Fetch data on component initialization
  },
};
</script>



/* Styles for table wrapper */
.table-wrapper {
  margin-bottom: 4rem; /* Adjust to provide spacing for the fixed pagination */
}


.overflow-y-auto {
  max-height: calc(100vh - 128px); /* Adjust based on Navbar and Pagination height */
  overflow-y: auto;
}

/* Adjust the pagination wrapper to maintain space */
.pagination-wrapper {
  z-index: 10;
  position: sticky; /* Use sticky positioning to keep it visible at the bottom */
  bottom: 0;
}

</style>
