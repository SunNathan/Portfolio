<template>
  <UiCardContainer class="w-4/5">
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
      <RealisationsCard/>
      <RealisationsCard/>
      <RealisationsCard/>
      <RealisationsCard/>
      <RealisationsCard/>
      <RealisationsCard/>
      <RealisationsCard/>
      <RealisationsCard/>
    </div>

  </UiCardContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const filters = ['Voir Tout', 'Etudes', 'Personnelles', 'Professionnelles']
const selectedFilter = ref('Voir Tout')

const selectFilter = (filter: string) => {
  selectedFilter.value = filter
}

</script>