<template>
  <UiCardContainer>
    <h2 class="mb-4">Experiences</h2>
    <SidebarExperienceItem :title="experience.jobTitle"
                           :dateRange="experience.dateRange"
                           :imageAlt="experience.imageAlt"
                           :imageSrc="experience.imageSrc"
                           :linkText="experience.linkText"
                           :linkUrl="experience.linkUrl"
                           :description="experience.description"
                           v-for="experience in experiences" :key="experience.id"/>
  </UiCardContainer>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: experiences} = await useAsyncData(route.path, () => {
  return queryCollection('experiences').order('order', 'ASC').all()
})
</script>