<template>
  <div class="flex my-4 items-center">
    <NuxtImg :src="imageSrc" :alt="imageAlt" class="size-8 mr-4"/>
    <div class="flex flex-col">
      <h3>{{ title }}</h3>
      <p class="font-extralight text-xs">{{ dateRange }} •
        <a :href="linkUrl" class="text-[#8882FF]" target="_blank">{{ linkText }}
          <Icon name="ri:external-link-line"/>
        </a>
      </p>
    </div>
    <span class="bg-[#EEF0F2] ml-4 flex p-1 rounded-full items-center justify-center" @click="showText = !showText">
      <Icon :name="showText ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'" class="text-[#919293]" size="24"/>
    </span>
  </div>
  <p v-show="showText" class="text-sm">{{ description }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  dateRange: String,
  linkUrl: String,
  linkText: String,
  description: String
})

const showText = ref(false)
</script>