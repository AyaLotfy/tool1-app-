<template>
  <div class="border-collapse w-full">
    <div
      v-for="(parentRow, index) in paginatedData"
      :key="index"
      class="flex flex-col border-b border-gray-300 py-4"
    >
      <table class="table-auto border-collapse border w-full">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>

            <th class="border px-4 py-1 text-left font-bold">Title</th>
            <th class="border px-4 py-1 text-left font-bold">Created Date</th>
            <th class="border px-4 py-1 text-left font-bold">Subtitle</th>
            <th class="border px-4 py-1 text-left font-bold">Events</th>
            <th class="border px-4 py-1 text-left font-bold">
              Shorthand Symbol
            </th>

            <!-- <th class="border px-4 py-1 text-center font-bold">Actions</th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td class="icon-row">
              <!-- <button class="icon-btn" title="Expand">
            <span>▼</span> 
          </button> -->
              <button
                @click="toggleNestedTable(index)"
                class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                <!-- {{ showNestedTables[index] ? 'Hide' : 'Expand' }} -->
                <!-- <span v-if="!showNestedTables[index]">▼</span>  -->
                <span>{{ showNestedTables[index] ? "▲" : "▼" }}</span>
                <!-- Hide/Show Icon -->
              </button>
              <button
                @click="navigateToPage(parentRow)"
                class="icon-btn"
                title="Open"
              >
                <span>🔗</span>
                <!-- Open Icon -->
              </button>
              <button class="icon-btn" title="Copy">
                <span>📋</span>
                <!-- Copy Icon -->
              </button>
              <button class="icon-btn" title="Delete">
                <span>🗑️</span>
                <!-- Delete Icon -->
              </button>
              <button class="icon-btn" title="Document">
                <span>📄</span>
                <!-- Document Icon -->
              </button>
              <!-- Display title -->
              <span class="border px-4 py-1">{{ parentRow.title }}</span>
            </td>
            <!-- <td class="border px-4 py-1">{{ parentRow.title }}</td> -->
            <td class="border px-4 py-1">{{ parentRow.created_at }}</td>
            <td class="border px-4 py-1">{{ parentRow.subtitle }}</td>
            <td class="border px-4 py-1 text-center">
              <i
                v-for="i in parentRow.events.length"
                :key="i"
                class="fas fa-calendar-alt"
              ></i>
            </td>
            <td class="border px-4 py-1">
              {{ parentRow.number }}-{{ parentRow.max_number }}
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="showNestedTables[index]" class="mt-2 px-4">
        <table class="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th class="border px-4 py-1">Title</th>
              <th class="border px-4 py-1">City</th>
              <th class="border px-4 py-1">Start Date</th>
              <th class="border px-4 py-1">End Date</th>
              <th class="border px-4 py-1">Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(nestedRow, nestedIndex) in parentRow.events"
              :key="nestedIndex"
            >
              <td class="border px-4 py-1">{{ nestedRow.title }}</td>
              <td class="border px-4 py-1">{{ nestedRow.city }}</td>

              <td class="border px-4 py-1">{{ nestedRow.start_time }}</td>
              <td class="border px-4 py-1">{{ nestedRow.end_time }}</td>
              <td class="border px-4 py-1">{{ nestedRow.min_participants }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  name: "CoursesTable",
  props: ["paginatedData", "showNestedTables"],
  methods: {
    navigateToPage(parentRow) {
      console.log(parentRow.id);
      this.$store.dispatch("auth/login", true);

      this.$store.dispatch("course/selectCourse", parentRow);

      this.$router.push({
        path: "course", // Use the route name you defined in Vue Router
        // params: { courseId: parentRow.id }
      });
    },
    toggleNestedTable(index) {
      this.$emit("toggle-nested", index);
    },
  },
};
</script>
