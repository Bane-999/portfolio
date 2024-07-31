<script setup></script>

<template>
  <div class="projects-main">
    <h1>Projects</h1>
    <span>Coming soon...</span>
  </div>
</template>

<style scoped>
  .projects-main {
    z-index: 1;
    display: flex;
    position: relative;
    left: 255px;
    padding: 42px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    width: calc(99vw - 255px);
    height: 100vh;
    font-family: system-ui;
    line-height: 45px;
    opacity: 0;
    transform: translateX(-10px);
    animation: loadText 0.4s ease-out forwards;
  }

  .projects-main h1 {
    font-size: 2.7rem;
    font-weight: 600;
  }

  .projects-main span {
    color: #999faf;
    font-size: 1.2rem;
  }

  @keyframes loadText {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .projects-main {
      left: 19px;
      min-width: 100%;
    }
  }
</style>
