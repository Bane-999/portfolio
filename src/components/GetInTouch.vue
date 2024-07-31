<script setup>
  defineProps({
    activeElement: {
      type: String,
    }
  });

  defineEmits(['touch']);
</script>

<template>
  <div class="wasd">
    <div>
      <h2>Ready to collaborate?</h2>
      <span>Let's discuss your next project and bring your ideas to life.</span>
      <RouterLink to="/contact">
        <button class="touch-btn" @click="$emit('touch')">Get in Touch</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .touch-btn {
    font-family: system-ui;
    padding: 10px;
    position: relative;
    margin-top: 15px;
    font-weight: 900;
    width: 148px;
    border: 1px solid #44526d;
    border-radius: 10px;
    color: #eff7ff;
    background-color: #314058;
    transform: scale(1);
    transition:
      background-color 0.3s ease-out,
      transform 0.3s ease-out;
  }

  .touch-btn:hover {
    background-color: #46526d;
    transform: scale(1.03);
  }

  .wasd {
    top: 520px;
    position: fixed;
    left: 27px;
    width: 198px;
    z-index: 1;
  }

  .wasd div {
    padding: 30px;
    background-color: #111727;
    border: 2px solid #1c2439a8;
    border-radius: 11px;
    max-width: 250px;
    min-width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    animation: load-message 0.7s ease-out forwards;
    animation-delay: 22s;
    opacity: 0;
  }

  .wasd h2 {
    color: #eff7ff;
    font-family: system-ui;
    font-weight: 800;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .wasd span {
    font-family: system-ui;
    font-size: 0.9rem;
    font-weight: 400;
    color: #999faf;
  }

  @keyframes load-message {
    0% {
      opacity: 0.4;
      transform: translateX(-50px);
    }

    100% {
      opacity: 1;
    }
  }
</style>
