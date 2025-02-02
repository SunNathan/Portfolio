<template>
  <UiCardContainer>
    <h2 class="mb-4">Experiences</h2>
    <span v-for="experience in experiences" :key="experience.id">
          <SidebarExperienceItem :title="experience.jobTitle"
                                 :dateRange="experience.dateRange"
                                 :imageAlt="experience.imageAlt"
                                 :imageSrc="experience.imageSrc"
                                 :linkText="experience.linkText"
                                 :linkUrl="experience.linkUrl"
          >
            <ContentRenderer :value="experience"/>
    </SidebarExperienceItem>
    </span>

  </UiCardContainer>
</template>

<script setup lang="ts">
const {data: experiences} = await useAsyncData('experiences', () => {
  return queryCollection('experiences').order('order', 'ASC').all()
})
</script>