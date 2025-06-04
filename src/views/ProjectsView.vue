<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  const selectedFilter = ref('All');
  const activeProject = ref(null);

  const filters = ['All', 'Closed Source', 'Open Source'];

  const projects = ref([
    {
      id: 1,
      title: 'Write.Set.Done!',
      tagline: 'A productivity system that connects planning, scheduling, and execution.',
      description: 'Traditional task managers are good at collecting tasks but weak at helping users execute them. Write.Set.Done! combines task management with time-block scheduling and feedback loops to make planning actionable.',
      banner: '/portfolio/wsd-banner.png',
      screenshots: ['/portfolio/screenshots/wsd/1.png', '/portfolio/screenshots/wsd/2.png', '/portfolio/screenshots/wsd/3.png', '/portfolio/screenshots/wsd/4.png', '/portfolio/screenshots/wsd/5.png'],
      category: 'Closed Source',
      tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'IndexedDB'],
      status: 'Live',
      link: 'https://writesetdone.uk',
      github: null,
      keyIdeas: [
        { title: 'Time Blocking', body: 'Plan work on a calendar, not a list.' },
        { title: 'Realistic Estimates', body: 'Track expected vs. actual duration over time.' },
        { title: 'Daily Workflow', body: 'Idea → Planned → Scheduled → Done.' },
        { title: 'Feedback Loop', body: 'Learn from your own execution data.' },
      ],
      technical: [
        'Offline-first architecture with IndexedDB',
        'Zustand for local UI state, TanStack Query for server state',
        'Designed and built end-to-end as a solo project',
        'Designed for instant feedback and smooth user interactions',
      ],
    },
  ]);

  const filteredProjects = computed(() => {
    if (selectedFilter.value === 'All') return projects.value;
    return projects.value.filter(p => p.category === selectedFilter.value);
  });

  const statusColor = (status) => {
    if (status === 'Live') return '#22c55e';
    if (status === 'Production') return '#00b6fe';
    return '#999faf';
  };

  function openProject(project) {
    activeProject.value = project;
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }

  function closeProject() {
    activeProject.value = null;
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }

  const lightboxSrc = ref(null)
  const lightboxIndex = ref(0)
  const lightboxShots = ref([])

  function openLightbox(shots, index) {
    const valid = shots.filter(s => !!s)

    if (!valid.length) return

    lightboxShots.value = valid
    lightboxIndex.value = valid.indexOf(shots[index])
    lightboxSrc.value = valid[lightboxIndex.value]
  }

  function closeLightbox() {
    lightboxSrc.value = null
  }

  function lightboxPrev() {
    lightboxIndex.value = (lightboxIndex.value - 1 + lightboxShots.value.length) % lightboxShots.value.length
    lightboxSrc.value = lightboxShots.value[lightboxIndex.value]
  }

  function lightboxNext() {
    lightboxIndex.value = (lightboxIndex.value + 1) % lightboxShots.value.length
    lightboxSrc.value = lightboxShots.value[lightboxIndex.value]
  }

  function onKeydown(e) {
    if (!lightboxSrc.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') lightboxPrev()
    if (e.key === 'ArrowRight') lightboxNext()
  }

  onMounted(() => window.addEventListener('keydown', onKeydown))
  onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="projects-root">

    <!-- ── LIST VIEW ── -->
    <Transition name="slide-list">
      <div v-if="!activeProject" class="projects-main">
        <div class="title">
          <h1 style="--order: 0">My <span class="highlight">Projects</span></h1>
          <h3 style="--order: 1">Things I've built, shipped, and learned from</h3>
        </div>

        <div class="filtering-tabs" style="--order: 2">
          <button
            v-for="filter in filters"
            :key="filter"
            :class="{ active: selectedFilter === filter }"
            @click="selectedFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="section" style="--order: 3">
          <div class="projects-grid">
            <div
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              class="project-card"
              :style="`--order: ${index}`"
              @click="openProject(project)"
            >
              <div class="card-image" v-if="project.banner">
                <img :src="project.banner" :alt="project.title" />
                <div class="image-overlay" />
              </div>
              <div class="card-image placeholder" v-else>
                <div class="placeholder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <div class="card-status">
                  <span class="status-badge" :style="`--status-color: ${statusColor(project.status)}`">
                    <span class="status-dot" />
                    {{ project.status }}
                  </span>
                </div>
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <div class="tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div class="card-footer">
                  <button class="details-btn">
                    View details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!filteredProjects.length" class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            <p>No projects in this category yet.</p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ── DETAIL VIEW ── -->
    <Transition name="slide-detail">
      <div v-if="activeProject" class="detail-main">

        <!-- Back -->
        <button class="back-btn" @click="closeProject">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to projects
        </button>

        <div class="detail-content">

          <!-- ── HERO ── -->
          <section class="d-hero">
            <div class="d-hero-text">
              <span class="status-badge" :style="`--status-color: ${statusColor(activeProject.status)}`">
                <span class="status-dot" />
                {{ activeProject.status }}
              </span>
              <h1>{{ activeProject.title }}</h1>
              <p class="d-tagline">{{ activeProject.tagline }}</p>
              <div class="d-hero-actions">
                <a :href="activeProject.link" target="_blank" rel="noopener" class="btn-primary">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <a v-if="activeProject.github" :href="activeProject.github" target="_blank" rel="noopener" class="btn-secondary">
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </a>
              </div>
              <div class="tags">
                <span v-for="tag in activeProject.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </section>

          <!-- ── WHAT IT IS ── -->
          <section class="d-section">
            <p class="d-description">{{ activeProject.description }}</p>
          </section>

          <!-- ── KEY IDEAS ── -->
          <section class="d-section">
            <h2 class="d-section-title">Key Ideas</h2>
            <div class="d-ideas-grid">
              <div v-for="idea in activeProject.keyIdeas" :key="idea.title" class="d-idea-card">
                <h3>{{ idea.title }}</h3>
                <p>{{ idea.body }}</p>
              </div>
            </div>
          </section>

          <!-- ── SCREENSHOTS ── -->
          <section class="d-section">
            <h2 class="d-section-title">Screenshots</h2>
            <div class="d-screenshots-grid">
              <div
                v-for="(shot, i) in activeProject.screenshots"
                :key="i"
                class="d-screenshot"
                :class="{ 'is-clickable': !!shot }"
                @click="openLightbox(activeProject.screenshots, i)"
              >
                <img v-if="shot" :src="shot" :alt="`Screenshot ${i + 1}`" />
                <div v-else class="d-screenshot-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <!-- ── LIGHTBOX ── -->
          <Teleport to="body">
            <Transition name="lightbox">
              <div v-if="lightboxSrc" class="lightbox-overlay" @click="closeLightbox">

                <button class="lightbox-close" @click="closeLightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>

                <button
                  v-if="lightboxShots.length > 1"
                  class="lightbox-arrow lightbox-arrow-left"
                  @click.stop="lightboxPrev"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <img :src="lightboxSrc" @click.stop class="lightbox-img" />

                <button
                  v-if="lightboxShots.length > 1"
                  class="lightbox-arrow lightbox-arrow-right"
                  @click.stop="lightboxNext"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                <!-- Dot indicators -->
                <div v-if="lightboxShots.length > 1" class="lightbox-dots">
                  <span
                    v-for="(_, i) in lightboxShots"
                    :key="i"
                    class="lightbox-dot"
                    :class="{ active: i === lightboxIndex }"
                    @click.stop="lightboxIndex = i; lightboxSrc = lightboxShots[i]"
                  />
                </div>

              </div>
            </Transition>
          </Teleport>

          <!-- ── TECHNICAL ── -->
          <section class="d-section d-section-row">
            <div class="d-technical">
              <h2 class="d-section-title">Technical Highlights</h2>
              <ul class="d-tech-list">
                <li v-for="item in activeProject.technical" :key="item">{{ item }}</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
  /* ── Root ── */
  .projects-root {
    position: relative;
    overflow: hidden;
  }

  /* ── Shared layout ── */
  .projects-main,
  .detail-main {
    position: relative;
    left: 255px;
    width: calc(99vw - 255px);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: aliceblue;
  }

  .projects-main {
    padding: 42px 52px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .detail-main {
    padding: 0 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  /* ── List transitions ── */
  .slide-list-leave-active {
    transition: transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    position: absolute;
    top: 0; left: 255px;
    width: calc(99vw - 255px);
    pointer-events: none;
  }
  .slide-list-leave-to { transform: translateX(-60px); opacity: 0; }
  .slide-list-enter-active { transition: transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease; }
  .slide-list-enter-from { transform: translateX(-60px); opacity: 0; }

  /* ── Detail transitions ── */
  .slide-detail-enter-active { transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease; }
  .slide-detail-leave-active { transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease; }
  .slide-detail-enter-from { transform: translateX(80px); opacity: 0; }
  .slide-detail-leave-to   { transform: translateX(80px); opacity: 0; }

  /* ── Title ── */
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;
    text-align: center;
  }
  .title h1 {
    font-weight: 800; font-size: 4rem;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
    opacity: 0;
  }
  .title h3 {
    font-weight: 300; font-size: 1.4rem; color: #999faf; margin-top: 10px;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
    opacity: 0;
  }
  .highlight {
    background: linear-gradient(90deg, #00c6f9, #4b91ff);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ── Filter tabs ── */
  .filtering-tabs {
    display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
    margin-top: 50px;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 200ms);
    opacity: 0;
  }
  .filtering-tabs button {
    background-color: #11172e; border-radius: 8px; border: 1px solid #171d30;
    color: #999faf; padding: 8px 20px; transition: all 0.3s ease;
    cursor: pointer; font-size: 0.95rem; font-family: system-ui; font-weight: 500;
  }
  .filtering-tabs button.active { background-color: rgb(27,33,61); border: 1px solid #313a4e; color: #ecffff; }
  .filtering-tabs button:hover  { background-color: rgb(23,28,51);  border: 1px solid #2b3244;  color: #ecffff; }

  /* ── Section (list) ── */
  .section {
    width: 100%; max-width: 1100px; margin-top: 70px;
    animation: loadItem 0.5s ease-out forwards;
    animation-delay: calc(var(--order,3) * 200ms);
    opacity: 0;
  }

  /* ── Grid ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    gap: 28px;
  }

  /* ── Card ── */
  .project-card {
    background-color: #111727; border: 2px solid #1c2439a8; border-radius: 16px;
    overflow: hidden; display: flex; flex-direction: column; cursor: pointer;
    transition: scale 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    animation: cardIn 0.5s ease-out forwards;
    animation-delay: calc(var(--order) * 80ms + 500ms);
    opacity: 0;
  }
  .project-card:hover {
    scale: 1.02; background-color: #171e34; border-color: #2b3a56;
    box-shadow: 0 4px 24px rgba(0,182,254,0.08);
  }
  .card-image { width: 100%; height: 220px; overflow: hidden; position: relative; background-color: #0d1220; }
  .card-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
  .project-card:hover .card-image img { transform: scale(1.04); }
  .image-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 50%, #111727 100%);
    pointer-events: none;
  }
  .card-image.placeholder {
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #0d1525 0%, #111c33 100%);
  }
  .placeholder-icon svg { width: 56px; height: 56px; color: #1e2d4a; }

  .card-body { padding: 28px; display: flex; flex-direction: column; flex: 1; gap: 14px; }
  .card-status { display: flex; align-items: center; }
  .status-badge { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 500; color: var(--status-color, #999faf); }
  .status-dot { width: 7px; height: 7px; border-radius: 50%; background-color: var(--status-color, #999faf); box-shadow: 0 0 6px var(--status-color, #999faf); }
  .card-body h2 { font-size: 1.5rem; font-weight: 800; color: #eff7ff; line-height: 1.2; margin: 0; }
  .card-body p  { font-size: 0.95rem; color: #8f9eb9; line-height: 1.65; margin: 0; flex: 1; }

  .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
  .tag  { font-size: 0.78rem; color: #c9d4e3; background-color: #161c2c; border: 1px solid #262d41; border-radius: 20px; padding: 4px 12px; font-weight: 400; }

  .card-footer { display: flex; align-items: center; margin-top: 8px; padding-top: 16px; border-top: 1px solid #1c2439a8; }
  .details-btn {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.9rem; font-weight: 500; color: #00b6fe;
    background: none; border: none; padding: 0; cursor: pointer;
    font-family: system-ui; transition: gap 0.2s ease, color 0.2s ease;
  }
  .details-btn svg { width: 16px; height: 16px; transition: transform 0.2s ease; }
  .project-card:hover .details-btn { gap: 10px; color: #4bb8ff; }
  .project-card:hover .details-btn svg { transform: translateX(3px); }

  /* ── Empty state ── */
  .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-top: 100px; color: #525e78; }
  .empty-state svg { width: 48px; height: 48px; }
  .empty-state p { font-size: 1rem; }

  /* ════════════════════════════════════
     DETAIL PAGE
  ════════════════════════════════════ */

  .back-btn {
    display: flex; align-items: center; gap: 8px;
    background: none; border: none; color: #8f9eb9;
    font-family: system-ui; font-size: 0.9rem; font-weight: 500;
    cursor: pointer; padding: 32px 52px 0; align-self: flex-start;
    transition: color 0.2s ease, gap 0.2s ease;
  }
  .back-btn svg { width: 17px; height: 17px; transition: transform 0.2s ease; }
  .back-btn:hover { color: #c9d4e3; gap: 12px; }
  .back-btn:hover svg { transform: translateX(-3px); }

  .detail-content {
    width: 100%; max-width: 960px;
    padding: 40px 0 0;
    display: flex; flex-direction: column; gap: 64px;
  }

  /* ── Section shared ── */
  .d-section { display: flex; flex-direction: column; gap: 24px; }
  .d-section-title {
    font-size: 0.75rem; font-weight: 600; color: #525e78;
    text-transform: uppercase; letter-spacing: 0.12em;
    margin: 0;
  }

  /* ── Hero ── */
  .d-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  .d-hero-text {
    display: flex; flex-direction: column; gap: 16px;
    animation: detailIn 0.45s ease-out forwards; animation-delay: 60ms; opacity: 0;
  }
  .d-hero-text h1 {
    font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 800;
    color: #eff7ff; line-height: 1.1; margin: 0;
  }
  .d-tagline { font-size: 1.05rem; color: #8f9eb9; line-height: 1.6; margin: 0; }

  .d-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(90deg, #00c6f9, #4b91ff);
    color: #fff; font-family: system-ui; font-size: 0.9rem; font-weight: 600;
    text-decoration: none; padding: 11px 22px; border-radius: 9px;
    transition: opacity 0.2s ease, gap 0.2s ease;
  }
  .btn-primary svg { width: 15px; height: 15px; transition: transform 0.2s ease; }
  .btn-primary:hover { opacity: 0.88; gap: 12px; }
  .btn-primary:hover svg { transform: translate(2px, -2px); }

  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: #111727; border: 1px solid #2b3a56;
    color: #c9d4e3; font-family: system-ui; font-size: 0.9rem; font-weight: 500;
    text-decoration: none; padding: 11px 22px; border-radius: 9px;
    transition: background 0.2s ease, border-color 0.2s ease, gap 0.2s ease;
  }
  .btn-secondary svg { width: 15px; height: 15px; transition: transform 0.2s ease; }
  .btn-secondary:hover { background: #171e34; border-color: #3d5070; gap: 12px; }
  .btn-secondary:hover svg { transform: translateX(3px); }

  .d-hero-media {
    animation: detailIn 0.45s ease-out forwards; animation-delay: 120ms; opacity: 0;
  }
  .d-gif {
    width: 100%; border-radius: 14px;
    border: 1px solid #1c2439;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    display: block;
  }
  .d-media-placeholder {
    width: 100%; aspect-ratio: 16/10;
    background: linear-gradient(135deg, #0d1525 0%, #111c33 100%);
    border: 1px solid #1c2439; border-radius: 14px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 12px; color: #2a3650;
  }
  .d-media-placeholder svg { width: 48px; height: 48px; }
  .d-media-placeholder span { font-size: 0.85rem; color: #3a4a65; }

  /* ── Description ── */
  .d-description {
    font-size: 1.05rem; color: #c9d4e3; line-height: 1.8; margin: 0;
    animation: detailIn 0.45s ease-out forwards; animation-delay: 160ms; opacity: 0;
  }

  /* ── Key Ideas ── */
  .d-ideas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    animation: detailIn 0.45s ease-out forwards; animation-delay: 200ms; opacity: 0;
  }
  .d-idea-card {
    background: #111727; border: 1px solid #1c2439a8;
    border-radius: 12px; padding: 20px 22px;
    display: flex; flex-direction: column; gap: 8px;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .d-idea-card:hover { border-color: #2b3a56; background: #151e35; }
  .d-idea-dot { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(90deg, #00c6f9, #4b91ff); margin-bottom: 4px; }
  .d-idea-card h3 { font-size: 0.95rem; font-weight: 700; color: #eff7ff; margin: 0; }
  .d-idea-card p  { font-size: 0.88rem; color: #8f9eb9; line-height: 1.55; margin: 0; }

  /* ── Screenshots ── */
  .d-screenshots-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 14px;
    animation: detailIn 0.45s ease-out forwards; animation-delay: 240ms; opacity: 0;
  }
  .d-screenshot {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #1c2439;
    height: 200px; /* fixed height */
  }

  .d-screenshot img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* crop to fill the fixed height */
    display: block;
  }

  .d-screenshot-placeholder {
    height: 100%; /* fill the fixed height instead of aspect-ratio */
    background: linear-gradient(135deg, #0d1525 0%, #0f1830 100%);
    display: flex; align-items: center; justify-content: center; color: #1e2d4a;
  }
  .d-screenshot-placeholder svg { width: 32px; height: 32px; }

  /* ── Technical + Learned (side by side) ── */
  .d-section-row {
    flex-direction: row !important;
    gap: 48px;
    align-items: flex-start;
    animation: detailIn 0.45s ease-out forwards; animation-delay: 280ms; opacity: 0;
  }
  .d-technical, .d-learned { flex: 1; display: flex; flex-direction: column; gap: 16px; }

  .d-tech-list {
    list-style: none; padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: 10px;
  }
  .d-tech-list li {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 0.95rem; color: #c9d4e3; line-height: 1.5;
  }
  .d-tech-list li::before {
    content: '';
    display: block; flex-shrink: 0;
    width: 6px; height: 6px; border-radius: 50%;
    background: #00b6fe; margin-top: 7px;
  }
  .d-learned p { font-size: 1rem; color: #8f9eb9; line-height: 1.8; margin: 0; }

  /* ── Animations ── */
  @keyframes loadItem {
    0%   { opacity: 0; transform: translateY(0px); }
    100% { opacity: 1; transform: translateY(-20px); }
  }
  @keyframes cardIn {
    0%   { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes detailIn {
    0%   { opacity: 0; transform: translateY(16px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .projects-main, .detail-main { left: 0; width: auto; }
    .projects-main { padding: 24px 20px 60px; }
    .back-btn { padding: 24px 20px 0; }
    .detail-content { padding: 28px 20px 0; gap: 48px; }
    .projects-grid { grid-template-columns: 1fr; }
    .title h1 { font-size: 2.8rem; }
    .d-hero { grid-template-columns: 1fr; gap: 32px; }
    .d-section-row { flex-direction: column !important; gap: 40px; }
    .d-ideas-grid { grid-template-columns: 1fr 1fr; }
    .d-screenshots-grid { grid-template-columns: 1fr; }
  }

  /* ── Screenshot clickable ── */
  .d-screenshot.is-clickable {
    cursor: zoom-in;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .d-screenshot.is-clickable:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 182, 254, 0.12);
  }

  /* ── Lightbox ── */
  .lightbox-overlay {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(5, 8, 20, 0.92);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    padding: 32px;
    cursor: zoom-out;
  }
  .lightbox-img {
    max-width: 100%; max-height: 90vh;
    border-radius: 12px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.6);
    border: 1px solid #1c2439;
  }
  .lightbox-close {
    position: absolute; top: 20px; right: 24px;
    background: #111727; border: 1px solid #2b3a56;
    border-radius: 8px; padding: 8px; cursor: pointer;
    color: #8f9eb9; transition: color 0.2s ease, background 0.2s ease;
    display: flex;
  }
  .lightbox-close svg { width: 18px; height: 18px; }
  .lightbox-close:hover { color: #eff7ff; background: #1a2440; }

  /* ── Lightbox transition ── */
  .lightbox-enter-active, .lightbox-leave-active {
    transition: opacity 0.2s ease;
  }
  .lightbox-enter-active .lightbox-img,
  .lightbox-leave-active .lightbox-img {
    transition: transform 0.2s ease;
  }
  .lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
  .lightbox-enter-from .lightbox-img,
  .lightbox-leave-to .lightbox-img { transform: scale(0.95); }

  .lightbox-arrow {
    position: absolute;
    top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(8px);
    border-radius: 10px; padding: 12px;
    cursor: pointer; color: #fff;
    display: flex; transition: background 0.2s ease;
    z-index: 1100;
  }
  .lightbox-arrow:hover { background: rgba(255,255,255,0.18); }
  .lightbox-arrow svg { width: 22px; height: 22px; }
  .lightbox-arrow-left  { left: 24px; }
  .lightbox-arrow-right { right: 24px; }

  .lightbox-dots {
    position: absolute;
    bottom: 24px; left: 50%; transform: translateX(-50%);
    display: flex; gap: 8px; align-items: center;
  }
  .lightbox-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: rgba(255,255,255,0.3);
    cursor: pointer; transition: background 0.2s ease, transform 0.2s ease;
  }
  .lightbox-dot.active {
    background: #fff;
    transform: scale(1.3);
  }
</style>
