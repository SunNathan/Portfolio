<template>
  <UiCardContainer class="md:w-4/5 max-md:w-full">
    <h2>Mes Réalisations</h2>
    <div class="flex space-x-4 my-4">
      <UiButton
          v-for="filter in filters"
          :key="filter"
          :selected="selectedFilter === filter"
          @click="selectFilter(filter)"
      >
        {{ filter }}
      </UiButton>
    </div>
    <div class="grid 2xl:grid-cols-3 xl:grid-cols-2 gap-4 justify-items-center">
      <RealisationsCard :realisation-title="realisation.title" :slug="realisation.slug" :imageSrc="realisation.imageSrc"
                        v-for="realisation in realisations"/>
    </div>

  </UiCardContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const filters = ['Voir Tout', 'Etudes', 'Personnelles', 'Professionnelles']
const selectedFilter = ref('Voir Tout')
const realisations = ref()

const fetchRealisations = async () => {
  if (selectedFilter.value === 'Voir Tout') {
    realisations.value = await queryCollection('realisations').all()
    console.log("Voir tout")
  } else {
    const filterTag = selectedFilter.value.toLowerCase()
    realisations.value = await queryCollection('realisations').where('projectTag', '=', filterTag).all()
    console.log(filterTag)
    console.log(realisations)
  }
}
watch(selectedFilter, fetchRealisations)

await fetchRealisations()

const selectFilter = (filter: string) => {
  selectedFilter.value = filter
}

</script>