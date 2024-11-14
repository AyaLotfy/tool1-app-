<template>
  <div class="p-4">
    <table class="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th class="border px-4 py-2">Parent Column 1</th>
          <th class="border px-4 py-2">Parent Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(parentRow, index) in parentData" :key="index">
          <!-- Parent row -->
          <td class="border px-4 py-2">{{ parentRow.col1 }}</td>
          <td class="border px-4 py-2">{{ parentRow.col2 }}</td>
        </tr>
        <tr v-for="(parentRow, index) in parentData" :key="'nested-' + index">
          <!-- Nested table inside parent row -->
          <td :colspan="2" class="p-2">
            <table class="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th class="border px-4 py-1">Nested Column 1</th>
                  <th class="border px-4 py-1">Nested Column 2</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(nestedRow, nestedIndex) in parentRow.nestedData" :key="nestedIndex">
                  <td class="border px-4 py-1">{{ nestedRow.nestedCol1 }}</td>
                  <td class="border px-4 py-1">{{ nestedRow.nestedCol2 }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentData: [
        {
          col1: 'Row 1 Col 1',
          col2: 'Row 1 Col 2',
          nestedData: [
            { nestedCol1: 'Nested Row 1 Col 1', nestedCol2: 'Nested Row 1 Col 2' },
            { nestedCol1: 'Nested Row 2 Col 1', nestedCol2: 'Nested Row 2 Col 2' },
          ],
        },
        {
          col1: 'Row 2 Col 1',
          col2: 'Row 2 Col 2',
          nestedData: [
            { nestedCol1: 'Nested Row 1 Col 1', nestedCol2: 'Nested Row 1 Col 2' },
            { nestedCol1: 'Nested Row 2 Col 1', nestedCol2: 'Nested Row 2 Col 2' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
