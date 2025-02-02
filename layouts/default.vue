<template>
  <div class="flex bg-[#EEF0F2] h-screen w-screen overflow-x-hidden max-md:relative">
    <div :class="{'max-md:w-0': !isSidebarVisible, 'w-[80vw]': isSidebarVisible}"
         class="transition-all duration-500 ease-in-out max-md:fixed md:top-4 max-md:top-0 max-md:left-0 h-full z-50 bg-white md:w-2/5">
      <Sidebar/>
    </div>

    <div :class="{'opacity-40': isSidebarVisible, 'opacity-100': !isSidebarVisible}"
         class="transition-opacity duration-500 ease-in-out w-full h-full">
      <slot/>
    </div>

  </div>
  <div
      class="z-60 md:hidden p-4 absolute bottom-0 w-screen bg-gradient-to-b to-[rgba(128,128,128,0.6)] from-[rgba(128,128,128,0.0)] flex justify-center">
    <UiButton @click="toggleSidebar" class="px-4 py-2" :selected="true">
      <span v-if="!isSidebarVisible">Afficher mon profil</span>
      <span v-else>Cacher mon profil</span>
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