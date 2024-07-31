<script></script>

<template>
  <div class="pulse">
    <div class="glow-1"></div>
    <div class="glow-2"></div>
  </div>
</template>

<style scoped>
  .pulse {
    height: 120%;
    width: 120%;
    background: linear-gradient(146deg, #0f172b 50%, #000000 85%);
    background-color: #111428;
    overflow: hidden;
    position: fixed;
  }

  /* Glow 1 */
  .glow-1 {
    content: "";
    position: absolute;
    top: 50%;
    left: 34%;
    width: 650px;
    height: 850px;
    background: radial-gradient(circle at 57% 38%, rgb(28 82 99 / 29%), #00000000 300px);
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.4;
    animation: pulse 3s ease-in-out infinite;
  }

  /* Glow 2 */
  .glow-2 {
    content: "";
    position: absolute;
    top: 67%;
    left: 61%;
    width: 670px;
    height: 660px;
    background: radial-gradient(circle at 57% 38%, rgb(28 30 99 / 48%), #00000000 300px);
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
    animation: pulse 4s ease-in-out infinite alternate;
    animation-delay: 2s;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translate(-50%, -50%) scale(0.7);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.3;
    }
  }
</style>
