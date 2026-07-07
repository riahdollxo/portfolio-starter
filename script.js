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

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  updateYear();
  initTheme();
});
