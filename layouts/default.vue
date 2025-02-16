<template>
  <div class="flex h-screen bg-[#EEF0F2] max-md:mb-16">
    <div class="md:w-3/5 md:min-w-md 2xl:max-w-xl transition-all duration-300 overflow-x-scroll"
         :class="{'max-md:w-screen max-md:left-0 max-md:top-0': isSidebarVisible,
         'max-md:w-0 max-md:hidden':!isSidebarVisible}">
      <Sidebar/>
    </div>
    <div class="m-4 w-full h-auto bg-white p-4 overflow-hidden rounded-lg shadow-md" :class="{'max-md:hidden': isSidebarVisible}">
      <slot/>
    </div>
    <div class="fixed bottom-0 left-0 w-screen h-16 backdrop-blur-sm flex items-center justify-center md:hidden z-99">
      <UiButton @click="toggleSidebar"
                class="text-white" :selected="true">
        {{ isSidebarVisible ? 'Mes réalisations' : 'Mon profil' }}
      </UiButton>
    </div>

  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'

const isSidebarVisible = ref(false)
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

</script>