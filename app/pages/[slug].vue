<template>
  <div v-if="realisation">
    <NuxtLink to="/">
      <UiButton :selected="true">Retour</UiButton>
    </NuxtLink>
    <h1 class="my-2">{{realisation.title}}</h1>
    <hr>
    <ContentRenderer :value="realisation" class="my-2"/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const {data: realisation} = await useAsyncData('realisation', () => {
  return queryCollection('realisations').where('slug', '=', route.params.slug).first()
})
</script>