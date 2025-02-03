<template>
  <!--  <div class="flex bg-[#EEF0F2] h-screen"> &lt;!&ndash; overflow-x-hidden&ndash;&gt;-->
  <!--    <div class="overflow-y-auto lg:w-1/3 w-0 shrink-0 transition-all duration-700 ease-in-out max-w-96"-->
  <!--         :class="{'max-lg:w-full':isSidebarVisible}"-->
  <!--    >-->
  <!--      <Sidebar/>-->
  <!--    </div>-->
  <!--    <div class="shrink grow max-lg:w-full max-lg:shrink-0">-->
  <!--      <slot/>-->
  <!--    </div>-->
  <!--    <UiButton @click="toggleSidebar" class="fixed bottom-4 right-4 text-white lg:hidden z-99" :selected="true">-->
  <!--      Toggle Sidebar {{isSidebarVisible}}-->
  <!--    </UiButton>-->
  <!--  </div>-->
  <div class="flex h-screen bg-[#EEF0F2]">
    <div class="md:w-3/5 md:min-w-md 2xl:max-w-xl w-0  transition-all overflow-x-hidden">
      <Sidebar/>
    </div>
    <div class="m-4 w-full h-auto bg-white p-4 overflow-hidden">
      <slot/>
    </div>
    <!--      <div class="bg-green-400 size-full"></div>-->
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'

const isSidebarVisible = ref(false)
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

</script>