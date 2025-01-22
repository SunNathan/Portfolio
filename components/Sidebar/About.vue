<template>
  <UiCardContainer>
    <div>
      <h2>Profil</h2>
      <ul class="list-disc list-inside">
        <li>Prise d’initiatives</li>
        <li>Autonomie</li>
      </ul>
    </div>

    <div class="mt-5">
      <h2 class="mb-2">Contacts</h2>
      <NuxtLink to="https://github.com/SunNathan" target="_blank" class="flex items-center">
        <Icon name="ri:github-fill" size="32" class="mr-2"/>
        sunnathan
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/nathan-fougeray-a95966264/" target="_blank" class="flex items-center">
        <Icon name="ri:linkedin-box-fill" size="32" class="mr-2"/>
        Nathan FOUGERAY
      </NuxtLink>
    </div>

    <div class="mt-5">
      <h2>Centre d’intérêt</h2>
      <ul class="list-disc list-inside">
        <li>Electronique (conception, réparation)</li>
        <li>Impression 3D</li>
      </ul>
    </div>
  </UiCardContainer>
</template>