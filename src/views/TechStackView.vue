<script setup>
  import { ref, computed, markRaw} from 'vue';

  import AllIcon from '../components/icons/AllIcon.vue';
  import FrontendIcon from '../components/icons/FrontendIcon.vue';
  import BackendIcon from '../components/icons/BackendIcon.vue';
  import DatabaseIcon from '../components/icons/DatabaseIcon.vue';
  import QaIcon from '../components/icons/QaIcon.vue';
  import DevopsIcon from '../components/icons/DevopsIcon.vue';
  import ToolsIcon from '../components/icons/ToolsIcon.vue';
  import MobileIcon from '../components/icons/MobileIcon.vue';

  import JsIcon from '../components/icons/JsIcon.vue';
  import TsIcon from '../components/icons/TsIcon.vue';
  import HtmlIcon from '../components/icons/HtmlIcon.vue';
  import CssIcon from '../components/icons/CssIcon.vue';
  import VueIcon from '../components/icons/VueIcon.vue';
  import RubyIcon from '../components/icons/RubyIcon.vue';
  import RailsIcon from '../components/icons/RailsIcon.vue';
  import GraphqlIcon from '../components/icons/GraphqlIcon.vue';
  import PostgresIcon from '../components/icons/PostgresIcon.vue';
  import RedisIcon from '../components/icons/RedisIcon.vue';
  import RspecIcon from '../components/icons/RspecIcon.vue';
  import GitIcon from '../components/icons/GitIcon.vue';
  import GitlabIcon from '../components/icons/GitlabIcon.vue';
  import FigmaIcon from '../components/icons/FigmaIcon.vue';
  import IllustratorIcon from '../components/icons/IllustratorIcon.vue';
  import PhotoshopIcon from '../components/icons/PhotoshopIcon.vue';
  import AftereffectsIcon from '../components/icons/AftereffectsIcon.vue';
  import UbuntuIcon from '../components/icons/UbuntuIcon.vue';
  import VscodeIcon from '../components/icons/VscodeIcon.vue';
  import DockerIcon from '../components/icons/DockerIcon.vue';
  import CapacitorIcon from '../components/icons/CapacitorIcon.vue';

  const techs = ref([
    // Frontend
    { name: 'JavaScript', category: 'Frontend', info: 'Makes websites interactive.', icon: markRaw(JsIcon) },
    { name: 'TypeScript', category: 'Frontend', info: 'Like JavaScript, but with extra safety features.', icon: markRaw(TsIcon) },
    { name: 'HTML', category: 'Frontend', info: 'Builds the structure of web pages.', icon: markRaw(HtmlIcon) },
    { name: 'CSS', category: 'Frontend', info: 'Styles the look and layout of websites.', icon: markRaw(CssIcon) },
    { name: 'Vue.js', category: 'Frontend', info: 'Helps build modern, interactive web apps.', icon: markRaw(VueIcon) },

    // Backend
    { name: 'Ruby', category: 'Backend', info: 'A clean and easy-to-read programming language.', icon: markRaw(RubyIcon) },
    { name: 'Rails', category: 'Backend', info: 'A framework that makes building web apps in Ruby fast.', icon: markRaw(RailsIcon) },
    { name: 'GraphQL', category: 'Backend', info: 'A flexible way to query and update data from APIs.', icon: markRaw(GraphqlIcon) },

    // Database
    { name: 'PostgreSQL', category: 'Database', info: 'Stores and organizes app data reliably.', icon: markRaw(PostgresIcon) },
    { name: 'Redis', category: 'Database', info: 'Keeps data ready for quick access, often used for caching.', icon: markRaw(RedisIcon) },

    // Testing / QA
    { name: 'RSpec', category: 'Testing / QA', info: 'Used to test if Ruby code works correctly.', icon: markRaw(RspecIcon) },

     // DevOps
    { name: 'Docker', category: 'DevOps', info: 'Packs apps so they run the same everywhere.', icon: markRaw(DockerIcon) },

    // Tools
    { name: 'Git', category: 'Tools', info: 'Tracks code changes and helps with teamwork.', icon: markRaw(GitIcon) },
    { name: 'GitLab', category: 'Tools', info: 'Platform for hosting repositories, CI/CD pipelines, and team collaboration.', icon: markRaw(GitlabIcon) },
    { name: 'Figma', category: 'Tools', info: 'Used for designing app interfaces.', icon: markRaw(FigmaIcon) },
    { name: 'Adobe Illustrator', category: 'Tools', info: 'Creates logos and vector graphics.', icon: markRaw(IllustratorIcon) },
    { name: 'Adobe Photoshop', category: 'Tools', info: 'Edits images and designs.', icon: markRaw(PhotoshopIcon) },
    { name: 'Adobe After Effects', category: 'Tools', info: 'Makes animations and visual effects.', icon: markRaw(AftereffectsIcon) },
    { name: 'Ubuntu Linux', category: 'Tools', info: 'My everyday development system.', icon: markRaw(UbuntuIcon) },
    { name: 'VS Code', category: 'Tools', info: 'My main code editor.', icon: markRaw(VscodeIcon) },

    // Mobile
    { name: 'CapacitorJS', category: 'Mobile', info: 'Lets web apps run as mobile apps.', icon: markRaw(CapacitorIcon) },
  ])

  const selectedCategory = ref('All')

  const filteredTechs = computed(() => {
    if (selectedCategory.value === 'All') {
      return techs.value
    }

    return techs.value.filter(tech => tech.category === selectedCategory.value)
  })

  function selectCategory(category) {
    selectedCategory.value = category
  }
</script>

<template>
  <div class="main-container">
    <div class="title">
      <h1 style="--order: 0">Tech <span class="highlight">Stack</span></h1>
      <h3 style="--order: 1">Technologies and tools I use to bring ideas to life</h3>
    </div>
    <div class="filtering-tabs" style="--order: 2">
      <button :class="{ active: selectedCategory === 'All' }" @click="selectCategory('All')">
        <AllIcon class="icon"/>
        All Technologies
      </button>
      <button :class="{ active: selectedCategory === 'Frontend' }" @click="selectCategory('Frontend')">
        <FrontendIcon class="icon"/>
        Frontend
      </button>
      <button :class="{ active: selectedCategory === 'Backend' }" @click="selectCategory('Backend')">
        <BackendIcon class="icon"/>
        Backend
      </button>
      <button :class="{ active: selectedCategory === 'Database' }" @click="selectCategory('Database')">
        <DatabaseIcon class="icon"/>
        Database
      </button>
      <button :class="{ active: selectedCategory === 'Testing / QA' }" @click="selectCategory('Testing / QA')">
        <QaIcon class="icon"/>
        Testing / QA
      </button>
      <button :class="{ active: selectedCategory === 'DevOps' }" @click="selectCategory('DevOps')">
        <DevopsIcon class="icon"/>
        DevOps
      </button>
      <button :class="{ active: selectedCategory === 'Tools' }" @click="selectCategory('Tools')">
        <ToolsIcon class="icon"/>
        Tools
      </button>
      <button :class="{ active: selectedCategory === 'Mobile' }" @click="selectCategory('Mobile')">
        <MobileIcon class="icon"/>
        Mobile
      </button>
    </div>

    <div class="technologies">
      <div
        v-for="(tech, index) in filteredTechs"
        :key="tech.name"
        class="tech-item"
        :style="`--order: ${Math.pow(index, 1.5)}`"
      >
        <component class="tech-icon" :is="tech.icon" />
        <h3>{{ tech.name }}</h3>
        <p>{{ tech.info }}</p>
      </div>
    </div>
    <footer>
      <div :style="`--order: ${Math.pow(0, 1.5)}`">
        <h2>20+</h2>
        <span>Technologies</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fticon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      </div>
      <div :style="`--order: ${Math.pow(1, 1.5)}`">
        <h2>2.5+</h2>
        <span>Years Experience</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fticon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      </div>
      <div :style="`--order: ${Math.pow(2, 1.5)}`">
        <h2>160+</h2>
        <span>Issues Completed</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fticon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  .highlight {
    display: ruby;
    background: linear-gradient(90deg, #00c6f9, #4b91ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .main-container {
    z-index: 1;
    display: flex;
    position: relative;
    left: 255px;
    padding: 42px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: aliceblue;
    width: calc(99vw - 255px);
  }

  .title {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
  }

  .title h1 {
    font-family: system-ui;
    font-weight: 800;
    font-size: 4rem;
    text-align: center;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
    transform: translateY(0px);
    opacity: 0;
  }

  .title h3 {
    font-family: system-ui;
    font-weight: 300;
    font-size: 1.4rem;
    color: #999faf;
    margin-top: 10px;
    max-width: 500px;
    text-align: center;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
    transform: translateY(0px);
    opacity: 0;
  }

  @keyframes loadItem {
    0% {
      opacity: 0;
    }

    100% {
      transform: translateY(-20px);
      opacity: 100;
    }
  }

  .technologies {
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    position: relative;
    top: 100px;
    opacity: 0;
    transform: translateY(20px);
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: 600ms;
  }

  .tech-item {
    padding: 30px;
    background-color: #111727;
    border: 2px solid #1c2439a8;
    border-radius: 11px;
    flex: 1 1 300px;
    max-width: 310px;
    min-width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 20ms);
    opacity: 0;
    height: 230px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition:
      scale 0.3s ease,
      background-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .tech-item:hover {
    scale: 1.05;
    background-color: #171e34;
    box-shadow: 0 2px 16px 0px rgb(46 91 140 / 13%);
  }

  footer {
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 150px
  }

  footer div {
    padding: 30px;
    background-color: #111727;
    border: 2px solid #1c2439a8;
    border-radius: 11px;
    flex: 1 1 300px;
    max-width: 250px;
    min-width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 20ms);
    opacity: 0;
  }

  footer h2 {
    color:#00b6fe;
    font-family: system-ui;
    font-weight: 700;
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  footer span {
    font-family: system-ui;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 400;
    color: #999faf;
  }

  @keyframes loadItem {
    0% {
      opacity: 0;
    }

    100% {
      transform: translateY(-20px);
      opacity: 100;
    }
  }

  .filtering-tabs {
    position: relative;
    top: 40px;
    max-width: 1199px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
    transform: translateY(0px);
    opacity: 0;
  }

  .filtering-tabs button {
    background-color: #11172e;
    border-radius: 8px;
    border: 1px solid #171d30;
    color: #999faf;
    padding: 8px 16px 8px 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    font-family: system-ui;
    font-weight: 500;
  }

  .filtering-tabs button.active {
    background-color: rgb(27, 33, 61);
    border: 1px solid #313a4e;
    color: #ecffff;
  }

  .filtering-tabs button:hover {
    background-color: rgb(23, 28, 51);
    border: 1px solid #2b3244;
  }

  .icon {
    width: 20px;
    margin-right: 6px;
  }

  .tech-icon {
    width: 70px;
  }

  .tech-item h3 {
    font-family: system-ui;
    text-align: center;
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 800;
  }

  .tech-item p {
    font-family: system-ui;
    text-align: center;
    margin-top: 20px;
    font-size: 0.9rem;
    font-weight: 400;
    color: #999faf;
  }

  .fticon {
    position: relative;
    top: 10px;
    width: 30px;
    height: 22px;
    color: #00b6fe;
  }

  @media (max-width: 768px) {
    .main-container {
      left: 0;
      width: auto;
    }
  }
</style>
