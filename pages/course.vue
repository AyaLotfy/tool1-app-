<template>
  <div class="flex min-h-screen bg-white-100">
    <!-- Sidebar -->
    <sidebar class="fixed w-64 h-screen overflow-y-auto bg-white"></sidebar>

    <!-- Main Content -->
    <div class="ml-64 flex-1 flex flex-col">
      <!-- Navbar -->
      <navbar class="sticky top-0 z-10 bg-white"></navbar>

      <!-- Content Area -->
      <main class="p-6 overflow-y-auto">
        <div class="flex gap-6">
          <!-- Course Card -->
          <div class="w-1/2 bg-white shadow-lg rounded-lg border border-gray-300">
            <!-- Header -->
            <div class="p-6 border-b border-gray-200">
              <h1 class="text-3xl font-bold text-blue-600">{{ course.title }}</h1>
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
                    v-model="course.title"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Subtitle</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    :placeholder="course.subtitle"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Shorthand Symbol</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    v-model="course.number"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Seminar Number</label>
                  <input
                    type="number"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    v-model="course.max_number"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Course Category</label>
                  <input
                    type="number"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    :placeholder="course.course_category_id"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Parent Course</label>
                  <input
                    type="number"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    :placeholder="course.parent_id"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">ID</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    v-model="course.id"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Creation Date</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    v-model="course.created_at"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Course Includes Only One Event</label>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                      v-model="isSingleEvent"
                    />
                    <span class="ml-2 text-gray-700">Yes</span>
                  </div>
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
                    :placeholder="course.contents"
                  ></textarea>
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Goals</label>
                  <textarea
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    :placeholder="course.goals"
                  ></textarea>
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-gray-600 font-medium mb-1">Teaser</label>
                  <input
                    type="text"
                    class="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    :placeholder="course.teaser"
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

          <!-- Event Table -->
          <div class="w-1/2 bg-white shadow-lg rounded-lg border border-gray-300">
            <EventsTable :events="course.events" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Sidebar,
    Navbar,
  },
  computed: {
    // Retrieve course data from Vuex store
    course() {
      return this.$store.state.course.selectedCourse;
    },
    isSingleEvent: {
      // Getter: Returns true if there is exactly one event in the array
      get() {
        return this.course && this.course.events ? this.course.events.length === 1 : false;
      },
      // Setter (if needed for modifying course.events)
      set(value) {
        if (value) {
          // If checked, ensure there's exactly one event (customize as needed)
          this.course.events = [{ date: '2024-04-15', time: '10:00 AM' }];
        } else {
          this.course.events = [];  // Clear events if unchecked
        }
      },
    },
  },
};
</script>

<style scoped>
/* Add your custom styles as needed */
</style>
