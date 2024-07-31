<script setup>
  defineProps({
    visible: {
      type: Boolean,
      required: true,
    },
  })

  defineEmits(['toggle']);
</script>

<template>
  <div class="overlay" v-show="visible" @click="$emit('toggle')"></div>
</template>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.425);
    display: block;
    z-index: 900;
    width: 120%;
  }

  @media (max-width: 768px) {
    .overlay {
      display: block;
    }
  }
</style>
