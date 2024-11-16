<template>
  <aside class="bg-gray-100 w-64 p-4 flex flex-col items-center">
    <!-- Centered Logo -->
    <div class="mb-6">
      <img src="@/assets/logo.svg" alt="Logo" class="w-12 h-12 logo" />
    </div>

    <!-- Navigation Links -->
    <ul class="w-full">
      <li class="mb-2">
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-200 text-center">
          Dashboard
        </a>
      </li>
      <li class="mb-2">
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-200 text-center">
          Contacts
        </a>
      </li>
      <li class="mb-2">
        <!-- <a
          href="/seminars"
          class="block py-2 px-4 rounded hover:bg-gray-200 text-center"
          :class="{ 'bg-blue-500 text-white': $route.path === '/seminars' }"
        > -->
          <a
          href="/seminars"
          class="block py-2 px-4 rounded hover:bg-gray-200 text-center"
        >
          Seminars
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
/* Optional: Add some spacing and alignment for the logo */
.logo {
  display: block;
  margin: auto;
}
</style>
