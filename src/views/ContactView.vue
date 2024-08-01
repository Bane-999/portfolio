<script setup>
  import { ref } from 'vue'

  const isCopied = ref(false)
  const showFlash = ref(false)

  function copyToClipboard() {
    navigator.clipboard.writeText("b.radomirov@protonmail.com").then(() => {
      isCopied.value = true
      showFlash.value = true
      setTimeout(() => isCopied.value = false, 180)
      setTimeout(() => showFlash.value = false, 3000)
    })
  }
</script>

<template>
  <div class="contact-main">
    <h1>Get In Touch</h1>
    <div class="contact-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
      <p>b.radomirov@protonmail.com</p>
      <div class="copy-icon" @click="copyToClipboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          class="cpicon"
          :class="{ copied: isCopied }"
        >
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
    <!-- Flash Message -->
    <div v-if="showFlash" class="flash">
      Copied to clipboard!
    </div>
  </div>
</template>

<style scoped>
  .contact-main {
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

  .contact-main h1 {
    font-size: 2.7rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .contact-container {
    background-color: #11172782;
    border: 1px solid #0c455e;
    border-radius: 14px;
    display: flex;
    align-items: center;
    padding: 16px;
  }

  .contact-container p {
    line-height: normal;
    color: #d2d1dc;
    margin-left: 6px;
  }

  .contact-container svg {
   height: 20px;
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

  .copy-icon {
    cursor: pointer;
    display: inline-block;
    transition: transform 0.2s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .copy-icon:active {
    transform: scale(0.9);
  }

  .copy-icon svg {
    color: #d2d1dc;
    height: 29px;
    position: relative;
    top: 8px;
    margin-left: 15px;
    border: 1px solid #d2d1dc;
    border-radius: 9px;
    padding: 6px;
  }

  .cpicon {
    color: #555;
    transform: scale(1);
    transition:
      color 0.3s ease,
      transform 0.3s ease,
      border 0.3s ease;
  }

  .cpicon.copied {
    color: #22c55e; /* Tailwind green-500 */
    border: 1px solid #22c55e;
    transform: scale(1.05);
  }

  .flash {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #22c55e; /* green */
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: translateY(0px);
    animation: fadeInOut 3s ease forwards;
  }

  @keyframes fadeInOut {
    0% {
    }

    20% {
      opacity: 1;
      transform: translateY(-8px);
    }

    80% {
      opacity: 1;
      transform: translateY(-8px);
    }

    100% {
      opacity: 0;
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    .contact-main {
      left: 19px;
      min-width: 100%;
    }

    .flash {
      bottom: 50px;
    }
  }
</style>
