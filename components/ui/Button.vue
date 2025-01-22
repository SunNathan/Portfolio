<template>
  <button
      :class="[
      'px-4 py-2 rounded-full ',
      selected ? 'bg-gradient-to-b from-[#374044] to-[#222729] text-white' : ''
    ]"
      @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  selected: Boolean
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>