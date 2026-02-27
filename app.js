/* ==============================================
   WanderAI – JavaScript Application
   ============================================== */

// ========================
// DATA
// ========================
const DESTINATIONS = [
  { id: 1, name: 'Goa', state: 'India', emoji: '🏖️', category: 'beach', rating: '4.8', price: '₹4,500', duration: '3-5 days', lat: 15.2993, lng: 74.1240, color: 'from-cyan-500 to-blue-600', desc: 'Sandy beaches, vibrant nightlife, Portuguese heritage' },
  { id: 2, name: 'Manali', state: 'Himachal Pradesh', emoji: '🏔️', category: 'nature', rating: '4.9', price: '₹5,200', duration: '4-6 days', lat: 32.2432, lng: 77.1892, color: 'from-indigo-500 to-purple-600', desc: 'Snow-capped peaks, adventure sports, scenic valleys' },
  { id: 3, name: 'Jaipur', state: 'Rajasthan', emoji: '🏰', category: 'heritage', rating: '4.7', price: '₹3,800', duration: '2-4 days', lat: 26.9124, lng: 75.7873, color: 'from-orange-500 to-pink-600', desc: 'Pink City, majestic forts, vibrant bazaars' },
  { id: 4, name: 'Pondicherry', state: 'Tamil Nadu', emoji: '🌊', category: 'beach', rating: '4.6', price: '₹3,200', duration: '2-3 days', lat: 11.9416, lng: 79.8083, color: 'from-teal-500 to-cyan-600', desc: 'French Quarter, serene beaches, yoga retreats' },
  { id: 5, name: 'Varanasi', state: 'Uttar Pradesh', emoji: '🛕', category: 'heritage', rating: '4.7', price: '₹2,800', duration: '2-3 days', lat: 25.3176, lng: 82.9739, color: 'from-yellow-500 to-orange-600', desc: 'Sacred ghats, ancient temples, spiritual epicentre' },
  { id: 6, name: 'Coorg', state: 'Karnataka', emoji: '🌿', category: 'nature', rating: '4.8', price: '₹4,000', duration: '3-4 days', lat: 12.3375, lng: 75.8069, color: 'from-green-500 to-teal-600', desc: 'Coffee plantations, lush forests, misty hills' },
  { id: 7, name: 'Mumbai', state: 'Maharashtra', emoji: '🌆', category: 'city', rating: '4.5', price: '₹5,500', duration: '3-4 days', lat: 19.0760, lng: 72.8777, color: 'from-amber-500 to-red-500', desc: 'Maximum city, street food, Bollywood & beaches' },
  { id: 8, name: 'Udaipur', state: 'Rajasthan', emoji: '🏛️', category: 'heritage', rating: '4.9', price: '₹4,100', duration: '3-4 days', lat: 24.5854, lng: 73.7125, color: 'from-pink-500 to-purple-600', desc: 'City of Lakes, royal palaces, romantic sunsets' },
];

const ITINERARY_DATA = {
  'Goa': {
    center: [15.2993, 74.1240],
    zoom: 11,
    days: [
      {
        title: 'Arrival & Beach Bliss',
        activities: [
          { time: '10:00 AM', title: 'Check in to Beach Hostel', desc: 'Settle into your beachfront hostel near Calangute. Most have common areas to meet fellow travellers.', tags: ['Accommodation'], cost: '₹500/night' },
          { time: '12:30 PM', title: 'Lunch at a Beach Shack', desc: 'Try the famous Goan fish curry at a local beach shack with ocean views.', tags: ['Food', 'Local'], cost: '₹200' },
          { time: '2:00 PM', title: 'Baga & Calangute Beach', desc: 'Spend the afternoon at the famous Baga Beach. Rent a sunbed and enjoy the Arabian Sea.', tags: ['Beach', 'Leisure'], cost: 'Free' },
          { time: '6:00 PM', title: 'Sunset at Anjuna', desc: 'Drive to Anjuna for spectacular sunsets. The flea market nearby runs on Wednesdays.', tags: ['Scenic', 'Market'], cost: '₹100 transport' },
          { time: '8:30 PM', title: 'Dinner & Night at Tito\'s Lane', desc: 'Explore the famous Tito\'s Lane for dinner, live music, and Goa\'s vibrant nightlife.', tags: ['Nightlife', 'Food'], cost: '₹400-600' },
        ]
      },
      {
        title: 'Old Goa & Heritage Trail',
        activities: [
          { time: '8:00 AM', title: 'Breakfast at German Bakery', desc: 'Start with freshly baked croissants and coffee at the iconic German Bakery in Anjuna.', tags: ['Food', 'Café'], cost: '₹150' },
          { time: '10:00 AM', title: 'Basilica of Bom Jesus', desc: 'Visit the UNESCO World Heritage site. Home to the tomb of St. Francis Xavier. Ancient architecture.', tags: ['Heritage', 'UNESCO'], cost: '₹10 entry' },
          { time: '12:00 PM', title: 'Old Goa Churches Tour', desc: 'Explore Se Cathedral and the Church of St. Cajetan — impressive 16th-century architecture.', tags: ['Heritage', 'History'], cost: 'Free' },
          { time: '2:30 PM', title: 'Lunch at Velha Goa Galeria', desc: 'Authentic Goan cuisine in a heritage setting. Try xacuti and bebinca.', tags: ['Food', 'Authentic'], cost: '₹300' },
          { time: '4:30 PM', title: 'Dudhsagar Waterfalls Day Trip', desc: 'Optional jeep safari to India\'s second-highest waterfall through the jungle. Truly spectacular!', tags: ['Nature', 'Adventure'], cost: '₹800 shared jeep' },
          { time: '8:00 PM', title: 'Seafood Dinner at Ritz Classic', desc: 'One of Goa\'s best seafood restaurants. Buttery prawns and tiger fish are must-tries.', tags: ['Food', 'Seafood'], cost: '₹600' },
        ]
      },
      {
        title: 'Adventure & Departure',
        activities: [
          { time: '7:30 AM', title: 'Morning Yoga on the Beach', desc: 'Join a free community yoga session on Palolem Beach. Peaceful and rejuvenating.', tags: ['Wellness', 'Free'], cost: 'Free' },
          { time: '10:00 AM', title: 'Water Sports at Baga', desc: 'Try parasailing, jet skiing, and banana boat rides. Prices are negotiable off-season.', tags: ['Adventure', 'Water Sports'], cost: '₹500-800' },
          { time: '1:00 PM', title: 'Last Lunch & Souvenir Shopping', desc: 'Pick up cashews, Goan spices, and handmade jewellery from the Saturday Night Market.', tags: ['Shopping', 'Food'], cost: '₹300-500' },
          { time: '3:00 PM', title: 'Departure', desc: 'Head to Goa Airport or Madgaon Railway Station for your journey back home.', tags: ['Transport'], cost: '₹200-400' },
        ]
      }
    ],
    tips: [
      { title: '🚴 Rent a scooter', desc: 'Best way to explore Goa! ₹300-400/day from any rental shop near the beach.' },
      { title: '💊 Carry sunscreen', desc: 'Goa sun is intense. SPF 50+ is essential. Buy local brands to save money.' },
      { title: '🚌 Travel by bus', desc: 'Goa government buses are cheap (₹10-30). Kadamba buses connect major beaches.' },
      { title: '🏊 Check tide timings', desc: 'High tides can sweep beaches. Check local timing apps before swimming.' },
    ],
    markers: [
      { lat: 15.5492, lng: 73.7552, name: 'Baga Beach' },
      { lat: 15.4989, lng: 73.8260, name: 'Calangute Beach' },
      { lat: 15.6130, lng: 73.7526, name: 'Anjuna Beach' },
      { lat: 15.5007, lng: 73.9162, name: 'Basilica of Bom Jesus' },
    ]
  },
  'Manali': {
    center: [32.2432, 77.1892],
    zoom: 11,
    days: [
      {
        title: 'Arrival & Mall Road Exploration',
        activities: [
          { time: '11:00 AM', title: 'Arrive & Acclimatize', desc: 'Rest for acclimatization. Manali is at 2,050m. Drink plenty of water and avoid exertion.', tags: ['Rest', 'Health'], cost: 'Free' },
          { time: '1:00 PM', title: 'Dhabas on Old Manali Road', desc: 'Head to Old Manali for cheap, authentic Himachali thali with rajma chawal and siddu.', tags: ['Food', 'Local'], cost: '₹120' },
          { time: '3:00 PM', title: 'Manu Temple & Old Manali', desc: 'Walk to the ancient Manu Temple in Old Manali. The cobblestone lanes are charming.', tags: ['Heritage', 'Scenic'], cost: 'Free' },
          { time: '5:00 PM', title: 'Mall Road Evening Walk', desc: 'Stroll along busy Mall Road. Buy warm Himachali shawls, local honey, and dried fruits.', tags: ['Shopping', 'Leisure'], cost: '₹200-500' },
          { time: '8:00 PM', title: 'Dinner at Johnson\'s Café', desc: 'Iconic café with wood-burning fireplace. Famous for trout fish and apple pie.', tags: ['Food', 'Cozy'], cost: '₹400' },
        ]
      },
      {
        title: 'Solang Valley & Snow Day',
        activities: [
          { time: '7:00 AM', title: 'Early Breakfast & Drive to Solang', desc: 'Start early! Hire a shared taxi to Solang Valley (₹100-150pp).', tags: ['Transport'], cost: '₹150' },
          { time: '9:00 AM', title: 'Solang Valley Snow Activities', desc: 'Enjoy zorbing, skiing, and snow tubing in Solang Valley. Stunning views of Beas Kund glacier.', tags: ['Adventure', 'Snow'], cost: '₹300-600' },
          { time: '12:30 PM', title: 'Rohtang Pass (Permit Required)', desc: 'Drive through the dramatic Rohtang Pass at 3,978m. Book permit online in advance (₹500).', tags: ['Scenic', 'Permit'], cost: '₹500+₹200 taxi' },
          { time: '4:00 PM', title: 'Return & Hadimba Temple', desc: 'Visit the iconic Hadimba Devi Temple with its unique pagoda-style wooden architecture in a cedar forest.', tags: ['Heritage', 'Temple'], cost: 'Free' },
          { time: '7:30 PM', title: 'Bonfire & Café Culture', desc: 'Join other travellers at any café on Old Manali Road for bonfires, live music, and cheap momos.', tags: ['Social', 'Nightlife'], cost: '₹200' },
        ]
      },
      {
        title: 'Kasol Day Trip & Departure',
        activities: [
          { time: '8:00 AM', title: 'Drive to Kasol Village', desc: 'Day trip to Kasol (75km, 2hrs). A popular hippie haven on the Parvati River.', tags: ['Day Trip', 'Nature'], cost: '₹300 transport' },
          { time: '11:00 AM', title: 'Trek to Kheerganga', desc: 'Optional 12km trekking trail to Kheerganga hot springs. Reward: natural hot water pool!', tags: ['Trekking', 'Adventure'], cost: 'Free trail' },
          { time: '2:00 PM', title: 'Israeli Cafes in Kasol', desc: 'Kasol has a massive Israeli food scene. Try hummus, shakshuka, and fresh pita.', tags: ['Food', 'Unique'], cost: '₹250' },
          { time: '4:30 PM', title: 'Return Journey to Manali', desc: 'Head back and pack up. The Volvo bus back to Delhi departs at 9 PM (₹600-800).', tags: ['Transport'], cost: '₹700' },
        ]
      }
    ],
    tips: [
      { title: '🧣 Layer up heavily', desc: 'Temperature drops to -5°C at night. Rent warm gear near Mall Road for ₹100/day.' },
      { title: '📱 Download offline maps', desc: 'Network is patchy on mountain roads. Download Google Maps offline before going.' },
      { title: '🏥 Carry altitude meds', desc: 'Diamox (consult doctor) helps with altitude sickness. Start 1 day before.' },
      { title: '🚌 Book Volvo early', desc: 'Delhi-Manali Volvo buses (₹600-900) must be booked 2-3 days before on HRTC website.' },
    ],
    markers: [
      { lat: 32.2432, lng: 77.1892, name: 'Manali Town' },
      { lat: 32.3184, lng: 77.1616, name: 'Solang Valley' },
      { lat: 32.2275, lng: 77.1764, name: 'Hadimba Temple' },
    ]
  },
  'default': {
    center: [20.5937, 78.9629],
    zoom: 5,
    days: [
      {
        title: 'Day 1: Arrival & Exploration',
        activities: [
          { time: '10:00 AM', title: 'Check In & Freshen Up', desc: 'Settle into your accommodation and refresh after the journey. Leave your bags and head out!', tags: ['Accommodation'], cost: 'Varies' },
          { time: '12:00 PM', title: 'Local Welcome Lunch', desc: 'Explore a local restaurant serving authentic regional cuisine. Ask the host for recommendations.', tags: ['Food', 'Local'], cost: '₹150-250' },
          { time: '2:00 PM', title: 'Main Attraction Visit', desc: 'Visit the primary landmark of your destination. Most have student entry discounts.', tags: ['Sightseeing'], cost: 'Varies' },
          { time: '6:00 PM', title: 'Sunset Viewpoint', desc: 'Find the best sunset spot in the city. Usually free and always memorable.', tags: ['Scenic', 'Free'], cost: 'Free' },
          { time: '8:00 PM', title: 'Street Food Dinner', desc: 'End the day with local street food. Ask locals for the best carts and stalls.', tags: ['Food', 'Budget'], cost: '₹100-200' },
        ]
      },
      {
        title: 'Day 2: Deep Dive',
        activities: [
          { time: '9:00 AM', title: 'Morning Walk & Breakfast', desc: 'Explore the neighbourhood on foot. Many hidden gems appear while walking.', tags: ['Exploration'], cost: '₹80-150' },
          { time: '11:00 AM', title: 'Secondary Attractions', desc: 'Visit museums, parks, or cultural sites. Many government museums are free with student ID.', tags: ['Culture', 'Student Discount'], cost: 'Free/₹50' },
          { time: '2:00 PM', title: 'Afternoon Leisure', desc: 'Take it easy at a café or local market. Great time to buy souvenirs and interact with locals.', tags: ['Shopping', 'Relaxation'], cost: '₹100-300' },
          { time: '5:00 PM', title: 'Activity of the Day', desc: 'Join a local tour, cooking class, or outdoor activity based on your interests.', tags: ['Activity'], cost: '₹200-500' },
          { time: '8:30 PM', title: 'Farewell Dinner', desc: 'Celebrate your trip at a slightly nicer restaurant. Treat yourself – you deserve it!', tags: ['Food', 'Celebration'], cost: '₹300-500' },
        ]
      }
    ],
    tips: [
      { title: '📱 Offline Maps', desc: 'Download Google Maps offline for your destination before arrival.' },
      { title: '🎟️ Student ID', desc: 'Always carry your student ID for discounts at monuments and museums.' },
      { title: '💳 Carry Cash', desc: 'Many local vendors and smaller towns don\'t accept cards. Keep cash handy.' },
      { title: '🤝 Talk to Locals', desc: 'The best tips come from locals. Don\'t be shy — people love helping travellers.' },
    ],
    markers: []
  }
};

// ========================
// STATE
// ========================
let state = {
  travelers: 2,
  currentStep: 1,
  interests: [],
  map: null,
};

// ========================
// NAVBAR SCROLL
// ========================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ========================
// HAMBURGER MENU
// ========================
document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '72px';
  navLinks.style.right = '24px';
  navLinks.style.background = 'rgba(10,11,20,0.95)';
  navLinks.style.border = '1px solid rgba(255,255,255,0.08)';
  navLinks.style.borderRadius = '16px';
  navLinks.style.padding = '16px';
  navLinks.style.backdropFilter = 'blur(20px)';
});

// ========================
// AOS (Animate on Scroll)
// ========================
function initAOS() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-delay') || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

// ========================
// DESTINATION CARDS
// ========================
const CATEGORY_GRADIENTS = {
  beach: 'linear-gradient(135deg, #006994, #00C9FF)',
  nature: 'linear-gradient(135deg, #134E5E, #71B280)',
  heritage: 'linear-gradient(135deg, #8B0000, #D4AF37)',
  city: 'linear-gradient(135deg, #373B44, #4286f4)',
};

function renderDestinations(filter = 'all') {
  const grid = document.getElementById('destinations-grid');
  const filtered = filter === 'all' ? DESTINATIONS : DESTINATIONS.filter(d => d.category === filter);
  
  grid.innerHTML = filtered.map(dest => `
    <div class="dest-card" onclick="planForDestination('${dest.name}')">
      <div class="dest-img" style="background: ${CATEGORY_GRADIENTS[dest.category] || 'var(--gradient-card)'};">
        <span style="position:relative;z-index:1;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.5))">${dest.emoji}</span>
        <div class="dest-badge">${dest.duration}</div>
      </div>
      <div class="dest-info">
        <h4>${dest.name} <span style="font-size:0.7rem;font-weight:500;color:var(--text-muted);">${dest.rating}★</span></h4>
        <div class="dest-category">${dest.category.toUpperCase()} • ${dest.state}</div>
        <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;line-height:1.5;">${dest.desc}</p>
        <div class="dest-meta">
          <span class="dest-price">From ${dest.price}/person</span>
          <span class="dest-rating">${dest.rating} ★</span>
        </div>
        <button class="dest-plan-btn">✨ Plan This Trip →</button>
      </div>
    </div>
  `).join('');
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDestinations(btn.dataset.filter);
  });
});

function planForDestination(name) {
  selectDestination(name);
  document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
}

// ========================
// PLANNER FORM
// ========================
function selectDestination(name) {
  document.getElementById('destination').value = name;
}

function nextStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.getElementById(`form-step-${step}`).classList.add('active');
  
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 <= step);
  });
  state.currentStep = step;
}

function changeTravelers(delta) {
  state.travelers = Math.max(1, Math.min(20, state.travelers + delta));
  document.getElementById('traveler-count').textContent = state.travelers;
}

function updateBudgetDisplay(val) {
  document.getElementById('budget-value').textContent = Number(val).toLocaleString('en-IN');
}

function toggleInterest(el) {
  el.classList.toggle('selected');
  const text = el.textContent.trim();
  if (el.classList.contains('selected')) {
    state.interests.push(text);
  } else {
    state.interests = state.interests.filter(i => i !== text);
  }
}

function scrollToPlanner() {
  document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
}

// ========================
// GENERATE ITINERARY
// ========================
function generateItinerary() {
  const destination = document.getElementById('destination').value.trim() || 'India';
  const fromCity = document.getElementById('from-city').value.trim() || 'Your City';
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const budget = document.getElementById('budget-range').value;
  const tripType = document.getElementById('trip-type').value;
  const travelers = state.travelers;
  const accom = document.querySelector('input[name="accom"]:checked')?.value || 'hostel';

  const btn = document.getElementById('generate-btn');
  btn.querySelector('.btn-text').style.display = 'none';
  btn.querySelector('.btn-loader').style.display = 'inline';
  btn.disabled = true;

  // Simulate AI loading
  setTimeout(() => {
    btn.querySelector('.btn-text').style.display = 'inline';
    btn.querySelector('.btn-loader').style.display = 'none';
    btn.disabled = false;

    renderItinerary({ destination, fromCity, startDate, endDate, budget: Number(budget), tripType, travelers, accom });
    document.getElementById('itinerary-output').style.display = 'block';
    document.getElementById('itinerary-output').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 2200);
}

function computeDays(startDate, endDate) {
  if (!startDate || !endDate) return 3;
  const d1 = new Date(startDate), d2 = new Date(endDate);
  const diffMs = d2 - d1;
  return Math.max(1, Math.round(diffMs / (1000 * 60 * 60 * 24)));
}

function formatDateRange(startDate, endDate) {
  if (!startDate || !endDate) return 'Upcoming Trip';
  const opts = { month: 'short', day: 'numeric', year: 'numeric' };
  return `${new Date(startDate).toLocaleDateString('en-IN', opts)} – ${new Date(endDate).toLocaleDateString('en-IN', opts)}`;
}

function renderItinerary({ destination, fromCity, startDate, endDate, budget, tripType, travelers, accom }) {
  const days = computeDays(startDate, endDate);
  const totalBudget = budget * travelers;
  
  // Title
  document.getElementById('itin-main-title').textContent = `Your Trip to ${destination}`;
  document.getElementById('itin-meta').innerHTML = `
    <span class="itin-meta-tag">📍 ${fromCity} → ${destination}</span>
    <span class="itin-meta-tag">📅 ${formatDateRange(startDate, endDate)}</span>
    <span class="itin-meta-tag">👥 ${travelers} traveler${travelers > 1 ? 's' : ''}</span>
    <span class="itin-meta-tag">🎒 ${accom.charAt(0).toUpperCase() + accom.slice(1)}</span>
    <span class="itin-meta-tag">💰 ₹${totalBudget.toLocaleString('en-IN')} total</span>
  `;

  // Budget breakdown
  const bAccom = Math.round(totalBudget * 0.35);
  const bTransport = Math.round(totalBudget * 0.25);
  const bFood = Math.round(totalBudget * 0.25);
  const bActivities = Math.round(totalBudget * 0.15);

  document.getElementById('budget-overview').innerHTML = `
    <div class="bcard">
      <div class="bcard-icon">🏨</div>
      <div class="bcard-label">Accommodation</div>
      <div class="bcard-value">₹${bAccom.toLocaleString('en-IN')}</div>
    </div>
    <div class="bcard">
      <div class="bcard-icon">🚌</div>
      <div class="bcard-label">Transport</div>
      <div class="bcard-value">₹${bTransport.toLocaleString('en-IN')}</div>
    </div>
    <div class="bcard">
      <div class="bcard-icon">🍜</div>
      <div class="bcard-label">Food & Drinks</div>
      <div class="bcard-value">₹${bFood.toLocaleString('en-IN')}</div>
    </div>
    <div class="bcard">
      <div class="bcard-icon">🎡</div>
      <div class="bcard-label">Activities</div>
      <div class="bcard-value">₹${bActivities.toLocaleString('en-IN')}</div>
    </div>
  `;

  // Get itinerary data
  const data = ITINERARY_DATA[destination] || ITINERARY_DATA['default'];
  const itinDays = data.days.slice(0, Math.max(days, 1));

  // Render map
  renderMap(data.center, data.zoom, data.markers, destination);

  // Render days
  const container = document.getElementById('days-container');
  container.innerHTML = itinDays.map((day, dayIdx) => {
    const dateLabel = startDate
      ? new Date(new Date(startDate).getTime() + dayIdx * 86400000).toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' })
      : `Day ${dayIdx + 1}`;
    return `
      <div class="day-card ${dayIdx === 0 ? 'open' : ''}" id="day-${dayIdx}">
        <div class="day-header" onclick="toggleDay(${dayIdx})">
          <div class="day-title">
            <div class="day-num">D${dayIdx + 1}</div>
            <div>
              <div class="day-name">${day.title}</div>
              <div class="day-date">${dateLabel}</div>
            </div>
          </div>
          <span class="day-chevron">▼</span>
        </div>
        <div class="day-activities">
          ${day.activities.map((act, actIdx) => `
            <div class="activity">
              <div class="activity-time">${act.time}</div>
              <div class="activity-connector">
                <div class="activity-dot"></div>
                ${actIdx < day.activities.length - 1 ? '<div class="activity-line"></div>' : ''}
              </div>
              <div class="activity-content">
                <div class="activity-title">${act.title}</div>
                <div class="activity-desc">${act.desc}</div>
                <div class="activity-tags">
                  ${act.tags.map(t => `<span class="activity-tag">${t}</span>`).join('')}
                  <span class="activity-tag cost-tag">~${act.cost}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Render tips
  const tips = data.tips;
  document.getElementById('travel-tips').innerHTML = `
    <h3>✨ AI Travel Tips for ${destination}</h3>
    <div class="tips-grid">
      ${tips.map(tip => `
        <div class="tip-card">
          <strong>${tip.title}</strong>
          ${tip.desc}
        </div>
      `).join('')}
    </div>
  `;
}

function toggleDay(idx) {
  const card = document.getElementById(`day-${idx}`);
  card.classList.toggle('open');
}

// ========================
// MAP
// ========================
function renderMap(center, zoom, markers, destination) {
  if (state.map) {
    state.map.remove();
    state.map = null;
  }
  
  const map = L.map('trip-map', { zoomControl: true, scrollWheelZoom: false }).setView(center, zoom);
  state.map = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map);

  const customIcon = L.divIcon({
    html: `<div style="width:32px;height:32px;background:linear-gradient(135deg,#6C63FF,#00D9A3);border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid white;box-shadow:0 4px 12px rgba(108,99,255,0.4);"></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    className: ''
  });

  const mainMarker = L.marker(center, { icon: customIcon })
    .addTo(map)
    .bindPopup(`<b>📍 ${destination}</b><br>Your destination`);

  if (markers && markers.length) {
    markers.forEach(m => {
      L.marker([m.lat, m.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>${m.name}</b>`);
    });

    if (markers.length > 1) {
      const latlngs = [[center[0], center[1]], ...markers.map(m => [m.lat, m.lng])];
      L.polyline(latlngs, { color: '#6C63FF', weight: 2, opacity: 0.6, dashArray: '6, 10' }).addTo(map);
    }
  }
}

// ========================
// PRINT
// ========================
function printItinerary() {
  window.print();
}

// ========================
// BUDGET CALCULATOR
// ========================
const DONUT_COLORS = ['#6C63FF', '#00D9A3', '#FF6B6B', '#FFB347'];
const DONUT_LABELS = ['Accommodation', 'Transport', 'Food', 'Activities'];

function recalcBudget() {
  const total = parseFloat(document.getElementById('total-budget').value) || 15000;
  const days = parseInt(document.getElementById('budget-days').value) || 3;
  const travelers = parseInt(document.getElementById('budget-travelers').value) || 2;

  const accomPct = parseInt(document.getElementById('accom-slider').value);
  const transportPct = parseInt(document.getElementById('transport-slider').value);
  const foodPct = parseInt(document.getElementById('food-slider').value);
  const activityPct = parseInt(document.getElementById('activity-slider').value);

  document.getElementById('accom-pct').textContent = accomPct + '%';
  document.getElementById('transport-pct').textContent = transportPct + '%';
  document.getElementById('food-pct').textContent = foodPct + '%';
  document.getElementById('activity-pct').textContent = activityPct + '%';

  const totalAmt = total * travelers;
  const perDayTotal = totalAmt / days;
  const pcts = [accomPct, transportPct, foodPct, activityPct];
  const amounts = pcts.map(p => Math.round(totalAmt * p / 100));
  const perDay = amounts.map(a => Math.round(a / days));

  document.getElementById('donut-total').textContent = '₹' + totalAmt.toLocaleString('en-IN');

  document.getElementById('breakdown-list').innerHTML = DONUT_LABELS.map((label, i) => `
    <div class="breakdown-item">
      <div class="breakdown-dot" style="background:${DONUT_COLORS[i]};"></div>
      <span class="breakdown-label">${['🏨','🚌','🍜','🎡'][i]} ${label}</span>
      <span class="breakdown-value">₹${amounts[i].toLocaleString('en-IN')}</span>
      <span style="font-size:0.72rem;color:var(--text-muted);">(₹${perDay[i].toLocaleString('en-IN')}/day)</span>
    </div>
  `).join('');

  drawDonut(pcts, amounts);
}

function drawDonut(pcts, amounts) {
  const canvas = document.getElementById('budget-donut');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const outerR = 90, innerR = 58;

  ctx.clearRect(0, 0, W, H);

  const total = pcts.reduce((a, b) => a + b, 0);
  let startAngle = -Math.PI / 2;

  pcts.forEach((pct, i) => {
    const slice = (pct / total) * 2 * Math.PI;
    const endAngle = startAngle + slice;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, outerR, startAngle, endAngle);
    ctx.closePath();

    ctx.fillStyle = DONUT_COLORS[i];
    ctx.fill();
    startAngle = endAngle;
  });

  // Punch hole
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(10,11,20,1)';
  ctx.fill();

  // Separator lines
  ctx.strokeStyle = 'rgba(10,11,20,0.8)';
  ctx.lineWidth = 3;
  startAngle = -Math.PI / 2;
  pcts.forEach((pct) => {
    const slice = (pct / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx + innerR * Math.cos(startAngle), cy + innerR * Math.sin(startAngle));
    ctx.lineTo(cx + outerR * Math.cos(startAngle), cy + outerR * Math.sin(startAngle));
    ctx.stroke();
    startAngle += slice;
  });
}

// ========================
// INIT
// ========================
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  renderDestinations();
  recalcBudget();

  // Set default date values
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 86400000);
  const nextWeekEnd = new Date(today.getTime() + 10 * 86400000);
  const fmt = d => d.toISOString().split('T')[0];
  document.getElementById('start-date').value = fmt(nextWeek);
  document.getElementById('end-date').value = fmt(nextWeekEnd);

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      if (window.innerWidth <= 768) navLinks.style.display = 'none';
    });
  });

  // Counter animation for stats
  animateCounters();
});

function animateCounters() {
  // Simple stat pulse on view
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'pulse 0.5s ease-out';
      }
    });
  });
  stats.forEach(s => observer.observe(s));
}
