<template>
  <h2>Mes Réalisations</h2>
  <div class="flex space-x-4 my-4 max-lg:flex-col">
    <UiButton
        v-for="filter in filters"
        :key="filter"
        :selected="selectedFilter === filter"
        @click="selectFilter(filter)"
    >
      {{ filter }}
    </UiButton>
  </div>
  <hr class="my-4">
  <div
      class="flex flex-wrap gap-6 justify-center justify-items-center  overflow-y-auto h-5/6 pb-8">
    <RealisationsCard :realisation-title="realisation.title" :slug="realisation.slug" :imageSrc="realisation.imageSrc"
                      v-for="realisation in realisations"/>
  </div>
  <!--  <div>-->
  <!--    &lt;!&ndash;  <UiCardContainer>&ndash;&gt;-->
  <!--    <h2>Mes Réalisations</h2>-->
  <!--    <div class="flex space-x-4 my-4 max-sm:flex-col">-->
  <!--      <UiButton-->
  <!--          v-for="filter in filters"-->
  <!--          :key="filter"-->
  <!--          :selected="selectedFilter === filter"-->
  <!--          @click="selectFilter(filter)"-->
  <!--      >-->
  <!--        {{ filter }}-->
  <!--      </UiButton>-->
  <!--    </div>-->
  <!--    <hr class="my-4">-->
  <!--&lt;!&ndash;    <div&ndash;&gt;-->
  <!--&lt;!&ndash;        class="grid 2xl:grid-cols-3 xl:grid-cols-2 gap-4 justify-items-center md:h-5/6 max-md:h-3/5 max-md:p-2 overflow-y-auto">&ndash;&gt;-->
  <!--&lt;!&ndash;      <RealisationsCard :realisation-title="realisation.title" :slug="realisation.slug" :imageSrc="realisation.imageSrc"&ndash;&gt;-->
  <!--&lt;!&ndash;                        v-for="realisation in realisations"/>&ndash;&gt;-->
  <!--&lt;!&ndash;    </div>&ndash;&gt;-->

  <!--  </div>-->

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