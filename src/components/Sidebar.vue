<script setup>
  import Logo from '../components/icons/Logo.vue';
  import GetInTouch from './GetInTouch.vue';

  import { RouterLink } from 'vue-router';

  defineProps({
    visible: {
      type: Boolean,
      required: true,
    },
    activeElement: {
      type: String,
      default: 'home',
    },
    setActive: {
      type: Function
    }
  })
</script>

<template>
  <!-- Sidebar -->
  <aside class="sidebar" :class="{ open: visible }">
    <RouterLink to="/" @click="setActive('home')">
      <Logo />
    </RouterLink>
    <nav class="links">
      <RouterLink to="/" style="--order: 1" :class="{ 'sb-item-animation': true, active: activeElement === 'home' }" @click="setActive('home')">Home</RouterLink>
      <RouterLink to="/about" style="--order: 2" :class="{ 'sb-item-animation': true, active: activeElement === 'about' }" @click="setActive('about')">About</RouterLink>
      <RouterLink to="/techstack" style="--order: 3" :class="{ 'sb-item-animation': true, active: activeElement === 'techstack' }" @click="setActive('techstack')">Tech Stack</RouterLink>
      <RouterLink to="/projects" style="--order: 4" :class="{ 'sb-item-animation': true, active: activeElement === 'projects' }" @click="setActive('projects')">My Projects</RouterLink>
      <RouterLink to="/certifications" style="--order: 5" :class="{ 'sb-item-animation': true, active: activeElement === 'certifications' }" @click="setActive('certifications')">Certifications</RouterLink>
      <RouterLink to="/contact" style="--order: 6" :class="{ 'sb-item-animation': true, active: activeElement === 'contact' }" @click="setActive('contact')">Contact</RouterLink>
      <div class="circle"></div>
    </nav>
    <GetInTouch
      :activeElement="activeElement"
      @touch="setActive('contact')"
      v-if="['about', 'techstack', 'certifications', 'projects'].includes(activeElement)"
    />
    <footer class="footer">
      <div>Built with Vue</div>
      <div>Designed in Figma</div>
      <div>© 2025 Branislav</div>
    </footer>
  </aside>
</template>

<style scoped>
  .links {
    position: absolute;
    top: 107px;
  }

  .footer {
    text-align: center;
    font-family: system-ui, -apple-system;
    font-size: 0.8rem;
    color: #bbbbbb3d;
    padding: 2em 1em;
    margin-left: 59px;
    opacity: 0;
    animation: load-credits 0.7s ease-out forwards;
    line-height: 17px;
  }

  @keyframes load-credits {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .sb-item-animation {
    right: 0px;
    opacity: 0;
    animation: item-load 0.4s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
  }

  @keyframes item-load {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .sidebar {
    display: flex;
    width: 255px;
    background: #06071080;
    height: -webkit-fill-available;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    transition: left 0.3s ease;
    z-index: 1000;
    opacity: 0.9;
    border-right: 1px solid #141a2c;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* Safari support */
    --circle-top: 0px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .sidebar.open {
    left: 0;
  }

  .sidebar nav a {
    display: block;
    position: relative;
    color: #999faf;
    text-decoration: none;
    font-family: SYSTEM-UI;
    font-weight: 600;
    padding: 11px;
    margin-top: 15px;
    margin-left: 15px;
    width: 222px;
    outline: transparent;
    border-radius: 10px;
    background-color: transparent;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
      outline-color: 0.3s ease;
  }

  .sidebar nav a.active {
    color: #f7f7f7;
    outline: 1px solid #262d41;
    border-radius: 10px;
    background-color: #161c2c;
  }

  .sidebar nav a.active:hover {
    color: #f7f7f7;
    outline: 1px solid #262d41;
    border-radius: 10px;
    background-color: #161c2c;
  }

  .circle {
    position: relative;
    width: 10px;
    margin-left: 207px;
    height: 10px;
    margin-top: -305px;
    background: #00d7f5;
    border-radius: 50%;
    transition: top 0.3s ease;
    top: var(--circle-top);
    right: 0px;
    opacity: 0;
    animation: item-load 0.4s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
  }

  /* Update the top offset based on which item is active */
  .sidebar nav:has(a:nth-child(1).active) {
    --circle-top: calc(0 * (56px));
    --order: 1
  }

  .sidebar nav:has(a:nth-child(2).active) {
    --circle-top: calc(1 * (56px));
    --order: 2
  }

  .sidebar nav:has(a:nth-child(3).active) {
    --circle-top: calc(2 * (56px));
    --order: 3
  }

  .sidebar nav:has(a:nth-child(4).active) {
    --circle-top: calc(3 * (56px));
    --order: 4
  }

  .sidebar nav:has(a:nth-child(5).active) {
    --circle-top: calc(4 * (56px));
    --order: 5
  }

  .sidebar nav:has(a:nth-child(6).active) {
    --circle-top: calc(5 * (56px));
    --order: 6
  }

  @media (max-width: 768px) {
    .sidebar {
      left: -300px;
      position: fixed;
    }
  }

  @media (hover: hover) {
    .sidebar nav a:hover {
      color: #f7f7f7;
      outline: 1px solid #262d4198;
      border-radius: 10px;
      background-color: #161c2c81;
    }
  }
</style>
