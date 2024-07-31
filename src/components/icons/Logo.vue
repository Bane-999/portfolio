<script setup>
</script>

<template>
  <div class="logo">
    <div class="container">
      <svg id="svg2" viewBox="0 0 500 670" xmlns="http://www.w3.org/2000/svg">
        <desc>Source: openclipart.org/detail/209545</desc>
        <path class="s1" d="M 110.445 74.829 L 85.962 75.704 L 42.244 178.875 C 42.244 178.875 82.465 276.8 81.591 276.8 C 80.716 276.8 109.57 277.675 109.57 277.675 L 71.973 179.75 L 110.445 74.829 Z"/>
        <path class="s2" d="M 405.095 76.578 L 428.703 75.704 L 472.421 175.378 L 432.2 273.307 L 410.341 272.433 L 444.442 175.378 L 405.095 76.578 Z"/>
        <path class="s3" d="M 153.393 91.534 L 258.738 156.545 L 366.39 94.382 L 259.6 32.31 L 153.393 91.534 Z"/>
        <path class="s4" d="M 143.667 103.684 L 251.885 168.383 L 250.094 289.042 L 143.667 225.217 L 143.667 103.684 Z"/>
        <path class="s5" d="M 264.85 167.687 L 263.118 288.238 L 372.747 230.871 L 372.747 107.181 L 264.85 167.687 Z"/>
      </svg>
    </div>
    <span>FULL STACK</span>
    <span class="qwe">WEB DEVELOPER</span>
  </div>
</template>

<style scoped>
  .s1 {
    paint-order: fill;
    stroke: rgba(0, 0, 0, 0);
    fill: rgb(246, 238, 229);
    transform-box: fill-box;
    transform-origin: 359.695% 126.37%;
  }

  .s2 {
    paint-order: fill;
    stroke: rgba(0, 0, 0, 0);
    fill: rgb(246, 237, 228);
    transform-box: fill-box;
    transform-origin: -174.577% 129.28%;
  }

  .s3 {
    fill-rule: nonzero;
    paint-order: fill;
    stroke: rgba(165, 132, 132, 0);
    fill: rgb(55, 139, 170);
    transform-box: fill-box;
    transform-origin: 62.2871% 233.014%;
  }

  .s4 {
    stroke: rgba(0, 0, 0, 0);
    fill: rgb(37, 116, 148);
    transform-box: fill-box;
    transform-origin: 136.005% 122.725%;
  }

  .s5 {
    stroke: rgba(0, 0, 0, 0);
    fill: rgb(27, 101, 129);
    transform-box: fill-box;
    transform-origin: 17.4332% 123.162%;
  }

  .container {
    width: 230px;
    height: 77px;
    overflow: hidden;
    position: relative;
    pointer-events: none;
  }

  .sidebar .logo {
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #141a2c;
    height: 98px;
    padding: 13px;
    position:relative;
    animation: load 0.5s ease-out forwards;
  }

  @keyframes load {
    0% {
      transform: translateY(-27px);
      opacity: 0.25;
    }

    100% {
      opacity: 1;
    }

  }

  #svg2 {
    height: 124px;
    position: absolute;
    top: 11px;
    width: auto;
    pointer-events: auto;
  }

  #svg2:hover .s4 {
    animation: color-change 1.5s ease-in-out infinite;
  }

  #svg2:hover .s3 {
    animation: color-change 1.5s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  #svg2:hover .s5 {
    animation: color-change 1.5s ease-in-out infinite;
    animation-delay: 1s;
  }

  @keyframes color-change {
    0% {
      fill: rgb(55, 139, 170);
    }
    50% {
      fill: rgb(37, 116, 148);
    }
    100% {
      fill: rgb(27, 101, 129);
    }
  }

  span {
    position: absolute;
    color: white;
    font-family: system-ui;
    font-size: 0.7em;
    left: 110px;
    top: 32px;
    font-weight: 700;
  }

  span.qwe {
    font-size: 0.4em;
    left: 121px;
    top: 56px;
    font-weight: 500;
  }
</style>
