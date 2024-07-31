<script setup>
  import Sidebar from './components/Sidebar.vue'
  import Overlay from './components/Overlay.vue'
  import SquareBackground from './components/SquareBackground.vue'
  import PulsingBackground from './components/PulsingBackground.vue'
  import Burger from './components/Burger.vue'

  import { ref, watch, computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  let sidebarVisible = ref(false);
  let activeElement = ref(route.path.replace('/', '') || 'home');

  watch(route, (newRoute) => {
    activeElement.value = newRoute.path.replace('/', '') || 'home';
  });

  function toggleSidebar() {
    sidebarVisible.value = !sidebarVisible.value;
  }

  function setActive(section) {
    activeElement.value = section;
  }

  const extraProps = computed(() => {
    return route.meta.needsActiveProps
      ? { activeElement: activeElement.value, setActive }
      : {};
  });
</script>

<template>
  <PulsingBackground/>
  <SquareBackground/>

  <Sidebar :visible="sidebarVisible" :activeElement="activeElement" :setActive="setActive"/>
  <Overlay :visible="sidebarVisible" @toggle="toggleSidebar"/>
  <Burger @toggle="toggleSidebar"/>
  <RouterView v-slot="{ Component }">
    <component
      :is="Component"
      v-bind="extraProps"
    />
  </RouterView>
</template>

<style scoped>
</style>
