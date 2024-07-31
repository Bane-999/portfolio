<script setup>
  defineEmits(['toggle']);
</script>

<template>
  <header>
    <button class="burger" @click="$emit('toggle')">☰</button>
  </header>
</template>

<style>
  header .burger {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: none;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.2s ease, opacity 0.2s ease;
    user-select: none;
    border:2px solid rgba(255, 255, 255, 0.116);
    border-radius: 8px;
    padding: 7px;
  }

  .burger:active {
    animation: clickShrink 0.3s ease;
  }

  @media (max-width: 768px) {
    header {
      position: absolute;
      top: 17px;
      left: 20px;
    }

    header .burger {
      display: inline-block;
      z-index: 9;
      position: fixed;
      top: 20px;
    }
  }
</style>
