<template>
  <div class="flex h-screen bg-[#EEF0F2]">
    <div class="md:w-3/5 md:min-w-md 2xl:max-w-xl transition-all duration-300 overflow-x-hidden"
         :class="{'max-md:w-screen max-md:fixed max-md:left-0 max-md:top-0': isSidebarVisible,
         'max-md:w-0':!isSidebarVisible}">
      <Sidebar/>
    </div>
    <div class="m-4 w-full h-auto bg-white p-4 overflow-y-scroll rounded-lg shadow-md" :class="{'max-md:hidden': isSidebarVisible}">
      <slot/>
    </div>

    <UiButton @click="toggleSidebar"
              class="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white md:hidden z-99" :selected="true">
      {{ isSidebarVisible ? 'Mes réalisations' : 'Mon profil' }}
    </UiButton>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'

const isSidebarVisible = ref(false)
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

</script>