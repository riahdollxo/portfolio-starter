// ============================================================
// PROJECTS DATA
// TODO: Replace these with your real projects!
// Each project needs: title, description, tags, and optional links.
// Ask Copilot: "Add a project card for a [project type] called [name]"
// ============================================================
const projects = [
  {
    title: "🌻 Bloom Break",
    description: "A wellness-focused desktop companion that encourages mindful breaks, healthy habits, and balanced productivity. Features Sunnie, an interactive sunflower companion, combining wellness, playful design, and technology.",
    tags: ["Wellness", "Desktop App", "UI/UX", "JavaScript"],
    demo: "https://lovable.dev/projects/44e6f22f-0410-4f4e-aecc-ff9f21632e37",
    github: null,
  },
  {
    title: "🛒 Stocked Up",
    description: "A smart grocery and pantry management application that helps users reduce food waste, stay organized, and make smarter shopping decisions with inventory tracking and meal planning.",
    tags: ["Web App", "React", "AI", "Sustainability"],
    demo: "https://cozy-inventory-ai.lovable.app/",
    github: null,
  },
  {
    title: "💧 FreshWater Finder",
    description: "A sustainability-focused application that helps users discover and learn about freshwater resources in their communities, combining technology and environmental awareness.",
    tags: ["Web App", "Environmental Tech", "GIS", "Community"],
    demo: "https://fresh-water-spotter.lovable.app/",
    github: null,
  },
];

// ============================================================
// SKILLS DATA
// TODO: Replace with your actual skills.
// Ask Copilot to help format this list based on your resume.
// ============================================================
const skills = [
  "Python", "JavaScript", "Java", "C",
  "HTML & CSS", "Git & GitHub",
  "React", "Node.js",
  "SQL", "Linux",
];

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub →</a>` : ""}
          ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : ""}
        </div>
      </div>
    `
    )
    .join("");
}

// ============================================================
// RENDER SKILLS
// ============================================================
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map((skill) => `<span class="skill-badge">${skill}</span>`)
    .join("");
}

// ============================================================
// DARK MODE TOGGLE
// TODO: Implement this! Here's a stub to get you started.
// Ask Copilot (inline chat on this function): "Implement dark mode
// toggle that saves preference to localStorage"
// ============================================================
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme") || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateButtonText(nextTheme);
}

// ============================================================
// UPDATE FOOTER YEAR
// ============================================================
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ============================================================
// THEME PICKER
// ============================================================
function initTheme() {
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "light";
  const savedAccent = localStorage.getItem("accent") || "neon-pink";

  htmlElement.setAttribute("data-theme", savedTheme);
  htmlElement.setAttribute("data-accent", savedAccent);
  updateButtonText(savedTheme);

  darkModeBtn.addEventListener("click", toggleDarkMode);

  document.querySelectorAll(".accent-swatch").forEach((button) => {
    button.addEventListener("click", () => {
      const accent = button.dataset.accent;
      htmlElement.setAttribute("data-accent", accent);
      localStorage.setItem("accent", accent);
    });
  });
}

function updateButtonText(theme) {
  const darkModeBtn = document.getElementById("dark-mode-btn");
  darkModeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function logEasterEgg(modeName, emoji) {
  console.log(`${emoji} ${modeName} Activated`);
}

// ============================================================
// HIDDEN MODES
// ============================================================
function activateTemporaryMode(htmlElement, className, duration) {
  if (!htmlElement) return;

  const timerKey = `${className}Timer`;

  if (htmlElement[timerKey]) {
    clearTimeout(htmlElement[timerKey]);
  }

  htmlElement.classList.add(className);
  htmlElement[timerKey] = setTimeout(() => {
    htmlElement.classList.remove(className);
  }, duration);
}

// ============================================================
// TRIP MODE EASTER EGG
// ============================================================
function initTripMode() {
  const logo = document.getElementById("logo-easter-egg");
  const htmlElement = document.documentElement;

  if (!logo) return;

  let clickCount = 0;
  let clickResetTimer = null;
  let tripModeTimer = null;

  function activateTripMode() {
    htmlElement.classList.add("trip-mode");
    logEasterEgg("Trip Mode", "🌀");

    if (tripModeTimer) clearTimeout(tripModeTimer);
    tripModeTimer = setTimeout(() => {
      htmlElement.classList.remove("trip-mode");
    }, 5200);
  }

  function registerTrigger() {
    clickCount += 1;

    if (clickResetTimer) clearTimeout(clickResetTimer);

    if (clickCount >= 3) {
      clickCount = 0;
      activateTripMode();
      return;
    }

    clickResetTimer = setTimeout(() => {
      clickCount = 0;
    }, 900);
  }

  logo.addEventListener("click", registerTrigger);
  logo.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      registerTrigger();
    }
  });
}

function initExtraEasterEggs() {
  const htmlElement = document.documentElement;
  const logo = document.getElementById("logo-easter-egg");
  const darkModeBtn = document.getElementById("dark-mode-btn");

  if (logo) {
    logo.addEventListener("dblclick", (event) => {
      event.preventDefault();
      activateTemporaryMode(htmlElement, "mirror-mode", 4200);
      logEasterEgg("Mirror Mode", "🪞");
    });
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", (event) => {
      if (!event.altKey) return;
      event.preventDefault();
      activateTemporaryMode(htmlElement, "static-mode", 4800);
      logEasterEgg("Static Mode", "📺");
    }, true);
  }

  document.querySelectorAll(".accent-swatch").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (!event.shiftKey) return;
      event.preventDefault();
      activateTemporaryMode(htmlElement, "prism-mode", 5000);
      logEasterEgg("Prism Mode", "💎");
    }, true);
  });
}

function initLavaWordEgg() {
  const htmlElement = document.documentElement;
  const targetWord = "LAVA";
  let typed = "";
  let resetTimer = null;
  let activeTimer = null;

  function triggerLavaMode() {
    activateTemporaryMode(htmlElement, "lava-mode", 5000);

    if (activeTimer) clearTimeout(activeTimer);
    activeTimer = setTimeout(() => {
      htmlElement.classList.remove("lava-mode");
    }, 5000);
  }

  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;

    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key.length !== 1) return;
    if (activeElement && ["INPUT", "TEXTAREA"].includes(activeElement.tagName)) return;
    if (activeElement && activeElement.isContentEditable) return;

    typed = (typed + event.key.toUpperCase()).slice(-targetWord.length);

    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      typed = "";
    }, 1000);

    if (typed === targetWord) {
      typed = "";
      triggerLavaMode();
    }
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  console.log(`👀 Curious, aren't we?\n\nWelcome to my portfolio.\n\nYou found the console...\nThere may be more hidden throughout the site.\n\nHappy exploring. 💻✨`);
  renderProjects();
  renderSkills();
  updateYear();
  initTheme();
  initTripMode();
  initExtraEasterEggs();
  initLavaWordEgg();
});
