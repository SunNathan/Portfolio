<template>
  <div class="flex bg-[#EEF0F2] h-screen">
    <Sidebar :class="{'hidden md:block': !isSidebarVisible}"/>
    <div class="md:hidden p-4 absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <UiButton @click="toggleSidebar" class="px-4 py-2" :selected="true">
        Toggle Sidebar
      </UiButton>
    </div>
    <slot/>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'

const isSidebarVisible = ref(false)

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}
</script>