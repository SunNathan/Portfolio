<template>
  <NuxtLink :to="slug">
    <div
        class="relative h-64 md:w-96 max-md:w-screen bg-red-200 rounded-lg overflow-hidden shadow-md transform transition duration-500 hover:scale-110 ">
      <NuxtImg :src="imageSrc" class="w-full h-full object-cover"/>
      <div
          class="absolute bottom-0 w-full p-4 text-center text-black bg-gradient-to-t from-[#EEF0F2] to-[rgba(238,240,242,0.70)] rounded-b-lg">
        <h3>{{ realisationTitle }}</h3>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  realisationTitle: String,
  slug: String,
  imageSrc: String,
})
</script>