# Prompt Journal

Log your Copilot prompts here as you work. This is your record of the prompting process — not just what worked, but what didn't, and how you iterated.

**There are no wrong answers here.** The goal is to practice prompt writing and reflect on it honestly.

---

## How to fill this in

For each entry, note:
- **Where** you used Copilot (inline chat, Ask mode, Edit mode, Agent mode, inline completion)
- **What you asked** (copy/paste the prompt if you can)
- **What you got** (brief summary — did it work? was it close? way off?)
- **What you changed** (did you refine the prompt? edit the output manually?)

---

## Phase 1 — Setup & Orientation

### Entry 1
- **Feature/task:** Update tagline
- **Copilot feature used:**  ASK
- **Prompt:** Write me a tagline. I am a Junior Computer Science Major at FAMU and I am passionate about sustainable AI.
  > 
- **Result:** Junior CS major at FAMU passionate about building sustainable AI solutions.
- **What I changed or did next:** I accepted this suggestion but I may actually go back and change it.

---

## Phase 2 — Guided Tasks

### Entry 2 — Tagline
- **Copilot feature used:** ASK
- **Prompt:** Write me a tagline. I am a Junior Computer Science Major at FAMU and I am passionate about sustainable AI.
- **Result:** Junior CS major at FAMU passionate about building sustainable AI solutions.
- **What I changed or did next:** Accepted the suggestion and updated it in the hero section.
---

### Entry 3 — About Section
- **Copilot feature used:** ASK
- **Prompt:** Write a short professional bio for a CS student interested in software development, cybersecurity, and AI. Include that I run a nails business and a styling business too.
- **Result:** Got a bio that incorporated all my interests and side businesses.
- **What I changed or did next:** Customized it to match my voice and added specific details about FAMU.

---

### Entry 4 — Task 2A: About Section
- **Copilot feature used:** ASK
- **Prompt:** Write a short professional bio for an IT student at FAMU interested in software development, cybersecurity, and AI. Also mention I run a nails business and fashion styling business.
- **Result:** Got a well-written bio that incorporated all my interests and side businesses naturally.
- **What I changed or did next:** Updated index.html with the bio and customized some wording to add more personality and specific details about FAMU.

---

### Entry 5 — Task 2B: Add Projects
- **Copilot feature used:** ASK
- **Prompt:** How do I add my projects to the portfolio JavaScript array? I have three projects: Bloom Break (wellness app), Stocked Up (inventory management), and FreshWater Finder (water resource app).
- **Result:** Learned the project object structure and formatted all three projects with titles, descriptions, tags, and demo links.
- **What I changed or did next:** Updated script.js with all three real projects from my GitHub.

---

### Entry 6 — Task 2C: Dark Mode CSS
- **Copilot feature used:** AGENT MODE
- **Prompt:** Add CSS for dark mode theme. I need a [data-theme="dark"] block with dark colors and a button style for the dark mode toggle.
- **Result:** Successfully added dark mode CSS variables and button styling to style.css.
- **What I changed or did next:** Added the dark theme color scheme and smooth transitions between light/dark modes.

---

### Entry 7 — Task 2C: Dark Mode JavaScript
- **Copilot feature used:** AGENT MODE
- **Prompt:** Implement the dark mode toggle JavaScript. It should switch a data-theme attribute and save the preference to localStorage.
- **Result:** Got the initDarkMode() and updateButtonText() functions that handle the toggle logic and persistence.
- **What I changed or did next:** Added the functions to script.js and wired up the DOMContentLoaded event to initialize dark mode on page load.

---

## Phase 3 — Independent Feature

**Feature I chose:** Dark mode toggle with localStorage persistence

### Entry 8 — Testing Dark Mode
- **Copilot feature used:** ASK
- **Prompt:** How do I test that dark mode is working correctly and that the preference saves to localStorage?
- **Result:** Got tips on browser DevTools, localStorage inspection, and manual testing.
- **What I changed or did next:** Tested dark mode toggle, verified the button changes emoji (🌙 to ☀️), and confirmed localStorage persists the preference on page reload. 

---

## Reflection

**1. What feature are you most proud of?**

The feature I am most proud of is definitely the hidden easter eggs I added to my portfolio. I really wanted my portfolio to feel like me and not just be a basic page showing my projects. Since my design already has a trippy, colorful theme, adding things like trip mode, mirror mode, static mode, and prism mode felt like a fun way to bring the whole idea together. I like that they are hidden because it gives people a reason to explore and interact with the site.

---

**2. Describe a time Copilot gave you something wrong or unhelpful. What did you do?**

 Copilot gave me something that was not really helpful when it tried to change too much of my code instead of building on what I already created. I was trying to add my lava lamp feature and I liked my original design and wanted to upgrade it, not completely replace it. I had to learn how to be more specific with my prompts and tell Copilot exactly what I wanted to keep and what I wanted it to add. I ended up taking the pieces that worked and changing the parts that didn’t match what I had in mind.

---

**3. What did you learn about writing better prompts?**

I learned that better prompts come from explaining the full vision instead of only asking for code. When I told Copilot what kind of feeling I wanted the user to have, the style I was going for, and what parts of my site I didn’t want changed, the results improved a lot. It felt more like working with a coding partner instead of just having something generate code for me.

---

**4. What's one part of the codebase you now understand better than at the start?**

Something I understand better now is how different parts of a website work together to create an experience. I learned more about how JavaScript handles interactions, animations, and changes based on what a user does. Small details in the code can completely change how someone feels while using a site.
---

**5. What would you build or improve next?**

Something I want to work on next is adding even more interaction to the portfolio. I have been thinking about adding a feature where visitors can leave me a message or find another hidden surprise. I want people who visit my portfolio to remember it and see my personality and creativity through my code.
