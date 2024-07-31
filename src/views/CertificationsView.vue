<script setup>
</script>

<template>
  <div class="certs-main">
    <h1>Certifications</h1>
    <div class="cert-container">
      <div class="cert-img">
        <a href="/portfolio/certs/BranislavRadomirovTheOdinProjectCertificate.pdf" target="_blank">
          <img src="../assets/cert-img.png">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .certs-main {
    z-index: 1;
    display: flex;
    position: relative;
    left: 263px;
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

  .certs-main h1 {
    font-size: 2.7rem;
    font-weight: 600;
    margin-bottom: 20px;
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

  .cert-container {
    background-color: #11172782;
    border: 1px solid #0c455e;
    border-radius: 14px;
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cert-img {
    background-color: #11172782;
    border: 1px solid #0c455e;
    border-radius: 14px;
    height: 257px;
    width: 301px;
    overflow: hidden;
    position: relative;
    transform: scale(1);
    box-shadow: #00f8ff3d 0px 0px 0px 0px;
    transition:
      transform 0.3s ease-out,
      box-shadow 0.3s ease-out;
  }

  .cert-img:hover {
    transform: scale(1.03);
    box-shadow: #00f7ff2d 0px 0px 20px 3px;
  }

  .cert-img img {
    height: 100%;
    object-fit: cover;
    display: block;
  }

   @media (max-width: 768px) {
      .certs-main {
        left: 0;
        width: 100%;
        transform: scale(0.75)
      }
    }
</style>
