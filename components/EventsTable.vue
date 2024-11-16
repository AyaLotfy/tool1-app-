<template>
  <div class="bg-white rounded-lg shadow p-4">
    <h2 class="text-lg font-bold mb-4">Events ({{ events.length }})</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Title</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Location</th>
            <th class="border border-gray-300 px-4 py-2 text-left">
              Add People
            </th>
            <th class="border border-gray-300 px-4 py-2 text-left">
              Start Date
            </th>
            <th class="border border-gray-300 px-4 py-2 text-left">End Date</th>
            <th class="border border-gray-300 px-4 py-2 text-left">All Day</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(event, index) in events"
            :key="index"
            class="hover:bg-gray-50 transition-colors"
          >
            <td class="border border-gray-300 px-4 py-2">
              <button @click="navigateToPage(event)" class="icon-btn" title="Open">
                <span>🔗</span>
              </button>
              <button class="icon-btn" title="Copy">
                <span>📋</span>
              </button>
              <button class="icon-btn" title="Delete">
                <span>🗑️</span>
              </button>

              {{ event.title }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ event.location || "-" }}
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ event.addPeople }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ event.startDate }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ event.endDate }}
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              <span class="text-red-500 cursor-pointer">✖</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
    >
      + Create
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

// Define the Event interface to type the events properly
interface Event {
  id: string;
  title: string;
  location?: string;
  addPeople: number;
  startDate: string;
  endDate: string;
  allDay?: boolean;
}

export default defineComponent({
  props: {
    events: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  },
  methods: {
    navigateToPage(event: Event) {
      // Replace with the logic to navigate to the specific event page
      // For example, if you're using Vue Router:
        this.$store.dispatch("auth/login", true);

      this.$store.dispatch("event/selectEvent", event.id);
      this.$router.push({
        path: "/event", // Use the appropriate route name
        params: { eventId: event.id }, // Pass event data (you may use an ID or title)
      });
    },
  },
});
</script>

<style scoped>
.min-w-full {
  min-width: 100%;
}

.border {
  border-width: 1px;
}

.hover\:bg-gray-50:hover {
  background-color: #f9fafb;
}

.space-x-2 > :not(:last-child) {
  margin-right: 0.5rem;
}

button i {
  margin-right: 0.5rem;
}
</style>
