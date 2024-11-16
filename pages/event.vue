<template>
  <div class="flex min-h-screen bg-white-100">
    <!-- Sidebar -->
    <sidebar class="fixed w-64 h-screen overflow-y-auto bg-white"></sidebar>

    <!-- Main Content -->
    <div class="ml-64 flex-1 flex flex-col">
      <!-- Navbar -->
      <navbar class="sticky top-0 z-10 bg-white"></navbar>

      <!-- Content Area -->
      <main class="p-6">
        <div class="flex gap-6">
          <!-- Course Card -->
          <div class="w-1/2 bg-white shadow-lg rounded-lg border border-gray-300">
            <!-- Header -->
            <div class="p-6 border-b border-gray-200">
              <h1 class="text-3xl font-bold text-blue-600">{{ event.title }}</h1>
              <h2 class="text-lg text-gray-500 mt-2">Master Data</h2>
            </div>

            <!-- Master Data Section -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-700 mb-4">Master Data</h3>
              <!-- Flexbox layout for single row input fields -->
              <div class="flex flex-wrap gap-4">
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Title</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    v-model="event.title"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Start date</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    v-model="event.start_time"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">End date</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    v-model="event.end_time"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Contact persons</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    :placeholder="event.contact_id"
                  />
                </div>
              </div>
            </div>

            <!-- Contents & Goals Section -->
            <div class="p-6 border-t border-gray-200">
              <h3 class="text-xl font-semibold text-gray-700 mb-4">Contents & Goals</h3>
              <!-- Flexbox layout for single row input fields -->
              <div class="flex flex-wrap gap-4">
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Seminar Contents</label>
                  <textarea
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    :placeholder="event.contents"
                  ></textarea>
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Goals</label>
                  <textarea
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    :placeholder="event.goals"
                  ></textarea>
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Teaser</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    :placeholder="event.teaser"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Target Group</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Target group"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import apiClient from '@/plugins/axios'; // Import the Axios instance

export default {
  components: {
    Sidebar,
    Navbar,
  },
  data() {
    return {
      event: {}, // Will hold the event data
    };
  },
  methods: {
    // Fetch event data from the API
    async fetchEventData() {
      try {
        const eventId = this.$store.state.event.selectedEvent; // Get the selected event ID from Vuex store
        const response = await apiClient.get(`/calendar-events/${eventId}`);
        console.log("event "+JSON.stringify(response.data.data))
        this.event = response.data.data; // Store the event data
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    },
  },
  async created() {
    await this.fetchEventData(); // Fetch data on component initialization
  },
};
</script>

<style scoped>
/* Add any additional styles here, if needed */
</style>
