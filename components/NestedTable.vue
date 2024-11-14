<template>
  <div class="p-4">
    <div class="border-collapse w-full">
      <!-- Card row for each parent row -->
      <div
        v-for="(parentRow, index) in parentData"
        :key="index"
        class="flex flex-col border-b border-gray-300 py-4"
      >
        <!-- Parent Row Table -->
        <table class="table-auto border-collapse border w-full">
          <thead>
            <tr>
              <th v-if="index === 0" class="border px-4 py-1 text-left font-bold">Title</th>
              <th v-if="index === 0" class="border px-4 py-1 text-left font-bold">Start Date</th>
              <th v-if="index === 0" class="border px-4 py-1 text-left font-bold">Events</th>
              <th v-if="index === 0" class="border px-4 py-1 text-left font-bold">Symbol</th>
              <th class="border px-4 py-1"></th> <!-- For the Expand Button -->
            </tr>
          </thead>
          <tbody>
            <tr>
              <!-- Parent Row values -->
              <td class="border px-4 py-1">{{ parentRow.title }}</td>
              <td class="border px-4 py-1">{{ parentRow.startDate }}</td>
              <td class="border px-4 py-1 text-center">
                <span v-for="i in parentRow.nestedData.length" :key="i">📅</span>
              </td> <!-- Placeholder icon -->
              <td class="border px-4 py-1">{{ parentRow.symbol }}</td>
              <!-- Expand Button -->
              <td class="border px-4 py-1 text-center">
                <button
                  @click="toggleNestedTable(index)"
                  class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
                >
                  {{ showNestedTables[index] ? 'Hide' : 'Expand' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Nested Table (conditionally rendered) -->
        <div v-if="showNestedTables[index]" class="mt-2 px-4">
          <table class="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th class="border px-4 py-1">Title</th>
                <th class="border px-4 py-1">Start Date</th>
                <th class="border px-4 py-1">End Date</th>
                <th class="border px-4 py-1">Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(nestedRow, nestedIndex) in parentRow.nestedData"
                :key="nestedIndex"
              >
                <td class="border px-4 py-1">{{ nestedRow.title }}</td>
                <td class="border px-4 py-1">{{ nestedRow.startDate }}</td>
                <td class="border px-4 py-1">{{ nestedRow.endDate }}</td>
                <td class="border px-4 py-1">{{ nestedRow.participants }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentData: [
        {
          title: 'Swimming in the ocean',
          startDate: '30.04.2024 00:00',
          symbol: 'Besprechung-33',
          nestedData: [
            {
              title: 'Learning Swimming in December 2024',
              startDate: '09.11.2024 00:00',
              endDate: '09.11.2024 00:00',
              participants: 0,
            },
            {
              title: 'Learning swimming in November 2024',
              startDate: '30.04.2024 00:00',
              endDate: '30.04.2024 00:00',
              participants: 0,
            },
          ],
        },
        {
          title: 'Swimming in the ocean 2',
          startDate: '30.04.2024 00:00',
          symbol: 'Besprechung-33',
          nestedData: [
            {
              title: 'Learning Swimming in December 2024 2',
              startDate: '09.11.2024 00:00',
              endDate: '09.11.2024 00:00',
              participants: 0,
            },
          
          ],
        },
      ],
      showNestedTables: [], // Tracks visibility of nested tables
    };
  },
  methods: {
    toggleNestedTable(index) {
      this.$set(this.showNestedTables, index, !this.showNestedTables[index]);
    },
  },
};
</script>

<style scoped>
/* Optional: Add custom styles for table and button */
</style>
