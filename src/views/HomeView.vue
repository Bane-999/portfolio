<script setup>
  import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

  defineProps({
    activeElement: {
      type: String,
      default: 'home',
    },
    setActive: {
      type: Function
    }
  });
</script>

<template>
  <div class="main">
    <div class="code">
      <div style="--order: 1" class="code-animation indent-1">&lt;html&gt;</div>
      <div style="--order: 1" class="code-animation line-1"></div>
        <div style="--order: 1" class="code-animation indent-2">&lt;body&gt;</div>
        <div style="--order: 1" class="code-animation line-2"></div>
          <div style="--order: 1" class="code-animation indent-3">&lt;h1&gt;</div>
          <div style="--order: 1" class="code-animation line-3"></div>
            <div style="--order: 2" class="code-animation indent-4">
              <h1 class="text">Hi,<br>I'm <span class="highlight">Branislav</span>,<br>web developer</h1>
            </div>
            <div style="--order: 3" class="code-animation indent-3">&lt;/h1&gt;</div>
          <div style="--order: 3" class="code-animation indent-3">&lt;button class='contact'&gt;
            <RouterLink to="/contact" style="--order: 5" :class="{ 'sb-item-animation': true, active: activeElement === 'contact' }" @click="setActive('contact')">
              <button class="btn">CONTACT ME</button>
            </RouterLink>
            &lt;/button&gt;</div>
        <div style="--order: 3" class="code-animation indent-2">&lt;/body&gt;</div>
      <div style="--order: 3" class="code-animation indent-1">&lt;/html&gt;</div>
    </div>
    <DotLottieVue class="computer" autoplay loop src="/portfolio/animations/Coding-Slide.lottie" />
  </div>
</template>

<style>
  @font-face {
    font-family: 'Coolvetica';
    src: url('../assets/coolvetica.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .computer {
    height: 500px;
    width: 500px;
    z-index: 9999;
    opacity: 0;
    margin-left: 40px;
    animation: load-computer 0.8s ease-out forwards;
    animation-delay: 1s;
  }

  @keyframes load-computer {
    0% {
      opacity: 0.05;
      transform: translateX(50px);
    }

    100% {
      opacity: 0.85;
    }
  }

  .main {
    display: flex;
    position: relative;
    margin-left: 255px;
    top: 100px;
    padding: 1.5rem;
    flex-direction: row;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: center;
  }

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }



  @keyframes clickShrink {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.6);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .highlight {
    display: ruby;
    background: linear-gradient(90deg, #00c6f9, #4b91ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text {
    font-family: 'Coolvetica', sans-serif;
    font-weight: 400;
    color: white;
    font-size: 6.6rem;
    line-height: 92px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .code {
    white-space: pre;
    word-break: normal;
    overflow-wrap: normal;
    font-family: monospace;
    position: relative;
    font-size: 1.5rem;
    margin-top: 35px;
  }

  .code-animation {
    opacity: 0;
    animation: code-load 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 300ms);
  }

  @keyframes code-load {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .line-1 {
    position: absolute;
    border-left: 1.3px solid rgb(1 98 125 / 42%);
    top: 26px;
    left: 7px;
    height: 475px;
  }

  .line-2 {
    position: absolute;
    border-left: 1.3px solid rgb(1 98 125 / 42%);
    top: 52px;
    left: 27px;
    height: 420px;
  }

  .line-3 {
    position: absolute;
    border-left: 1.3px solid rgb(1 98 125 / 42%);
    top: 83px;
    left: 47px;
    height: 309px;
  }

  .indent-1 { padding-left: 8px; color: #00c6f93d;}
  .indent-2 { padding-left: 28px; color: #00c6f93d;}
  .indent-3 { padding-left: 48px; color: #00c6f93d;}
  .indent-4 { padding-left: 68px; color: #00c6f93d;}

  .btn {
    --glow-color: #00d7f5;
    --glow-spread-color: rgba(0, 215, 245, 0.5);
    --enhanced-glow-color: #66efff;
    --btn-color: #003b42; /* a darker version for contrast */

    border: 0.25em solid var(--glow-color);
    padding: 1em 3em;
    color: var(--glow-color);
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow:
      0 0 1em 0.25em var(--glow-color),
      0 0 4em 1em var(--glow-spread-color),
      inset 0 0 0.74em 0.25em var(--glow-color);
    text-shadow: 0 0 0.5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  .btn::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  .btn:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow:
      0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  .btn:active {
    box-shadow:
      0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
      transform: scale(0.75);
  }


  @media (max-width: 768px) {
    .main {
      left: 0;
      top: 26px;
      margin-left: 0px;
    }

    header .burger {
      display: inline-block;
      z-index:9;
    }

    .text {
      font-size: 2.6rem;
      line-height: 42px;
      margin-top: 3px;
      margin-bottom: 3px;
      }

    .code {
      font-size: 0.68rem;
      margin-top: 67px;
    }

    .line-1 {
      top: 15px;
      left: 7px;
      height: 209px;
    }

    .line-2 {
      top: 28px;
      left: 27px;
      height: 184px;
    }

    .line-3 {
      top: 41px;
      left: 47px;
      height: 129px;
    }

    .computer {
      display: none;
    }

    .btn {
      padding: 0.7em 0.9em;
      font-size: 10px;
    }
  }
</style>
