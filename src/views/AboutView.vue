<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
  });
</script>

<template>
  <div class="about-main-container">
    <div class="title" style="--order: 0">
      <h1>About <span class="highlight">Me</span></h1>
    </div>

    <div class="about-items">
      <div class="about-item" style="--order: 1">
        <p>
          I am experienced full stack web developer with <strong>2.5 years</strong> of hands-on work on complex accounting and financial platforms.
          Strong in Ruby on Rails and PostgreSQL, with a focus on writing clean, tested, and maintainable code.
          Proficient in both backend and frontend development, including legacy systems and modern single-page applications.
          Skilled in breaking down complex features, planning development tasks, and delivering reliable solutions in fast-paced environments.
          Also experienced in UI/UX design tools (Figma). Collaborative, detail-oriented, and accustomed to structured review and planning processes.
        </p>
        <div class="labels">
          <span class="label" style="--order: 2">Ruby on Rails</span>
          <span class="label" style="--order: 3">PostgreSQL</span>
          <span class="label" style="--order: 4">JavaScript / TypeScript</span>
          <span class="label" style="--order: 5">UI/UX Design</span>
          <span class="label" style="--order: 6">SPA (Single-Page Applications)</span>
        </div>
      </div>
      <div class="about-info" style="--order: 7">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
          Professional Journey
        </h2>
        <div class="about-table">
          <div class="about-template">
            <div class="about-header">
              <h3>Full Stack Web Developer</h3>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pin-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                DODO STT
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="calendar-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                2.5 years • Full-time (on-site, 08:00-16:00)
              </span>
            </div>
          </div>
          <div class="about-body">
            <div class="about-projects">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <h3>Key Projects</h3>
            </div>
            <div class="projects">
              <div class="project" style="--order: 8">
                <div>
                  <h4>FakturaBank</h4>
                  <a href="https://www.fakturabank.no/" target="_blank" rel="noopener">
                    <svg class="external-link-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="#8f9eb9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                  </a>
                </div>
                <p>Core accounting application for bookkeeping, payroll processing, and financial administration. Integrated with banking systems via ZTL API.</p>
                <footer class="labels">
                  <span class="label">Ruby on Rails</span>
                  <span class="label">PostgreSQL</span>
                  <span class="label">JavaScript</span>
                </footer>
              </div>
              <div class="project" style="--order: 8">
                <div>
                  <h4>Snotr</h4>
                  <a href="https://snotr.no/" target="_blank" rel="noopener">
                  <svg class="external-link-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="#8f9eb9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                  </a>
                </div>
                <p>Modern SPA for invoice and paycheck generation, fully integrated with FakturaBank through shared database architecture.</p>
                <footer class="labels">
                  <span class="label">SPA</span>
                  <span class="label">GraphQL</span>
                  <span class="label">TypeScript</span>
                  <span class="label">Vue</span>
                </footer>
              </div>
            </div>
            <div class="about-respons">
              <div class="about-projects">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <h3>Core Responsibilities</h3>
              </div>
            </div>
            <ul class="respons">
              <li class="hidden" style="--order: 0"> Developed large-scale multi-page applications for complex accounting workflows </li>
              <li class="hidden" style="--order: 1"> Built full-stack features from database migrations to frontend UIs </li>
              <li class="hidden" style="--order: 2"> Optimized SQL queries and implemented efficient database solutions </li>
              <li class="hidden" style="--order: 3"> Implemented background job processing with Sidekiq and Redis </li>
              <li class="hidden" style="--order: 4"> Added real-time functionality via WebSockets for chat and video support </li>
              <li class="hidden" style="--order: 5"> Maintained comprehensive test coverage using RSpec and Capybara </li>
              <li class="hidden" style="--order: 6"> Refactored legacy code while developing new features </li>
              <li class="hidden" style="--order: 7"> Followed strict planning and multi-phase code review processes </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="about-info" style="--order: 9">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
          Creative Experience
        </h2>
        <div class="about-table">
          <div class="about-template">
            <div class="about-header">
              <h3>Graphic Designer (Volunteer)</h3>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pin-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Early Birds Club
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="calendar-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                5 years
              </span>
            </div>
          </div>
          <div class="about-body">
            <ul class="respons">
              <li class="hidden" style="--order: 1"> Designed promotional visuals for monthly events using Photoshop, Canva, and Illustrator </li>
              <li class="hidden" style="--order: 2"> Created festival flyers and T-shirt logos for children's programs </li>
              <li class="hidden" style="--order: 3"> Produced animated videos and educational content with After Effects and Premiere Pro </li>
              <li class="hidden" style="--order: 4"> Edited YouTube Shorts with synchronized animated text and voiceovers </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about-table {
    border: 1px solid #1c2439a8;
    border-radius: 15px;
    margin-top: 25px;
    background-color: #2f39542e;
    margin-bottom: 40px;
  }

  .about-template {
    display: flex;
    align-items: flex-start;
    font-family: system-ui;
    color: aliceblue;
    flex-direction: column;
  }

  .about-header {
    background-color: #111727;
    width: -webkit-fill-available;
    padding: 40px;
    border-bottom: 1px solid #1c2439a8;
  }

  .about-header h3{
    color: aliceblue;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 9px;
  }

  .about-header span {
    display: flex;
    color: #8f9eb9;
    align-items: center;
    font-weight: 400;
  }

  .pin-icon {
    height: 19px;
    margin-right: 3px;
  }

  .calendar-icon {
    height: 19px;
    margin-right: 3px;
    margin-left: 12px;
  }

  .highlight {
    display: ruby;
    background: linear-gradient(90deg, #00c6f9, #4b91ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-main-container {
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
    justify-content: center;
    align-items: center;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 300ms);
    position: relative;
    top: 14px;
  }

  .title h1 {
    font-family: system-ui;
    font-weight: 800;
    font-size: 4rem;
    text-align: center;
  }

  .about-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    top: 70px;
    flex-direction: column;
    gap: 50px;
    max-width: 1000px;
  }

  .about-item {
    padding: 20px;
    background-color: #111727;
    border: 1px solid #1c2439a8;
    border-radius: 15px;
    min-width: 200px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 300ms);
    opacity: 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: scale 0.3s ease,
      background-color 0.3s ease,
      box-shadow 0.3s ease;
    align-content: space-between;
    margin-bottom: 15px;
  }

  .about-info {
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 170ms);
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

  .about-item h3 {
    font-family: system-ui;
    text-align: center;
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 800;
    position: relative;
    top: -18px;
  }

  .about-item p {
    font-family: system-ui;
    padding: 20px;
    font-size: 1.3rem;
    font-weight: 400;
    color: #c9d4e3;
    line-height: 34px;
  }

  .about-item p strong {
    color: white;
    font-weight: 900;
  }

  .about-body {
    padding: 0 39px 39px 39px;
    font-family: system-ui;
  }

  .labels {
    display: flex;
    gap: 16px;
    position: relative;
    top: 10px;
    left: 21px;
    margin-bottom: 20px;
    font-size: 0.9rem;
    flex-wrap: wrap;
  }

  .label {
    color: #c9d4e3;
    font-family: system-ui;
    outline: 1px solid #262d41;
    border-radius: 20px;
    background-color: #161c2c;
    padding: 8px 16px 8px 16px;
    animation: loadLabels 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 170ms);
    transform: scale(0.75);
    opacity: 0;
  }

  @keyframes loadLabels {
    0% {
      transform: scale(0.75);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: system-ui;
    font-weight: bolder;
    font-size: 2.2rem;
    position: relative;
    left: 7px;
  }

  h2 svg {
    height: 38px;
  }

  .about-projects {
    align-items: center;
    display: flex;
    margin-top: 39px;
  }

  .about-projects svg {
    height: 21px;
    position: relative;
    top: 1px;
    color: #8f9eb9;
  }

  .about-projects h3 {
    height: 21px;
    color: #eff7ff;
    font-weight: 600;
    font-size: 1.4rem;
    margin-left: 11px;
  }

  .projects {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
  }

  .project {
    border: 1px solid #1c2439a8;
    border-radius: 15px;
    background-color: #111727;
    padding: 24px;
    flex: 1 1 10%;
    margin-top: 30px;
    position: relative;
    top: 20px;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 150ms);
    opacity: 0;
  }

  .project div {
    display: flex;
  }

  .project h4 {
    color: #eff7ff;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 14px;
  }

  .project p {
    color: #8f9eb9;
    font-weight: 300;
    font-size: 1rem;
    line-height: 25px;
    margin-bottom: 14px;
  }

  footer.labels {
    display: flex;
    gap: 16px;
    position: relative;
    top: 10px;
    left: 0px;
    margin-bottom: 20px;
    font-size: 0.8rem;
  }

  footer.label {
    color: #c9d4e3;
    font-family: system-ui;
    outline: 1px solid #262d41;
    border-radius: 20px;
    background-color: #161c2c;
    padding: 4px 12px 4px 12px;
  }

  .external-link-icon{
    height: 17px;
    position: relative;
    top: 3px;
    margin-left: 2px;
  }

  .respons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
    left: 30px;
    margin-top: 30px;
  }

  li {
    flex: 1 1 46%;
    min-width: 259px;
    color: #c9d4e3;
    line-height: 24px;
    font-weight: 400;
    margin-right: 10px;
  }

  li::marker {
    font-size: 1.5em;
    color: #8f9eb9;
  }

  .respons li.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }
  .respons li.visible {
    animation: pop-in 0.6s ease forwards;
    animation-delay: calc(var(--order) * 160ms);
  }

  @keyframes pop-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .about-main-container {
      left: 138px;
    }
  }
</style>
