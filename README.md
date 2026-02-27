# Ai-travel-planner
WanderAI is a premium, static web application that helps students plan budget‑friendly trips using AI‑generated itineraries. The site features a dark‑mode, glass‑morphism design with vibrant gradients, micro‑animations, and responsive layout. Users select a destination, input dates, budget, and preferences

📖 Overview
WanderAI is a premium‑looking, static web app that helps students create budget‑friendly, AI‑generated itineraries in seconds.
It combines:

Rich UI – dark‑mode, glass‑morphism, micro‑animations, responsive layout.
AI‑style planner – 3‑step form (destination → dates & budget → preferences) that outputs a day‑by‑day schedule.
Interactive map – Leaflet map with markers & route polyline.
Budget calculator – sliders + donut chart that splits total cost into accommodation, transport, food, activities.
All code runs in the browser; no backend is required.

🗂️ Project Structure
ai‑travel‑planner/
├─ index.html      # page markup (hero, features, destinations, planner, budget, etc.)
├─ style.css       # design system, animations, responsive styles
└─ app.js          # UI logic, itinerary generation, map, budget calculator

🚀 Quick Start (local)
Open the site – double‑click 

index.html
 or run a simple static server (e.g., python -m http.server in the folder).
The app works in any modern browser (Chrome, Edge, Firefox).
📦 Deploy to GitHub Pages
Create a repo (e.g., wanderai) on GitHub.

Clone locally or use the GitHub web UI and add the three files (

index.html
, 

style.css
, 

app.js
).

Commit & push to the main (or master) branch.

bash
git init
git add index.html style.css app.js
git commit -m "Initial commit – WanderAI travel planner"
git branch -M main
git remote add origin https://github.com/<your‑github‑username>/wanderai.git
git push -u origin main
Enable GitHub Pages:

Repository → Settings → Pages → Source → Branch: main / / (root) → Save.
GitHub will publish the site at https://<your‑github‑username>.github.io/wanderai/.

🎨 Screenshots
Hero / Landing	Planner & Itinerary
Preview unavailable	Preview unavailable
🛠️ Technologies
Layer	Tech
Markup	HTML5
Styling	Vanilla CSS (custom design tokens, gradients, glass‑morphism)
Logic	Plain JavaScript (ES6)
Map	Leaflet v1.9.4 (OpenStreetMap tiles)
Fonts	Google Fonts – Inter & Outfit

📚 How It Works
Select a destination (quick‑pick or type).
Enter trip details – dates, number of travelers, budget, trip type.
Choose preferences – interests, accommodation style.
Click “Generate AI Itinerary” → a simulated AI routine builds a day‑by‑day schedule, shows a map with markers, and displays a budget breakdown.
All data (destinations, sample itineraries, tips) are stored in 

app.js
 as plain objects – easy to extend.

🤝 Contributing
Feel free to open issues or PRs to:

Add more destinations or improve existing itineraries.
Replace the simulated AI with a real LLM API (e.g., Gemini, OpenAI).
Polish animations or add dark‑mode toggle.
📄 License
MIT – you’re free to use, modify, and distribute this project.

Enjoy planning smarter trips with WanderAI!
