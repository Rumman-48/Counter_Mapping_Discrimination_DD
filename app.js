// ============================================================
//  COUNTER MAPPING DISCRIMINATION IN DRESDEN — app.js
// ============================================================

const STRINGS = {
  en: {
    nav_all: "ALL", nav_feb13: "FEB 13", nav_nbh: "DISTRICTS",
    nav_propose: "PROPOSE", nav_privacy: "PRIVACY",
    filter: "FILTER:", add_cat_btn: "CATEGORY",
    report_btn: "REPORT AN INCIDENT", report_title: "REPORT AN INCIDENT",
    type_label: "TYPE OF DISCRIMINATION",
    victim_age: "VICTIM AGE", victim_gender: "VICTIM GENDER",
    victim_nationality: "NATIONALITY / ORIGIN",
    perpetrator_label: "PERPETRATOR", date_label: "DATE",
    time_label: "APPROXIMATE TIME", description_label: "DESCRIPTION",
    location_label: "LOCATION",
    location_hint: "Or close this form and click the map to drop a pin, then reopen.",
    feb13_label: "This occurred on or relates to February 13",
    consent_title: "DATA CONSENT REQUIRED",
    consent_text: "This form collects special category data under GDPR Article 9 (nationality, ethnic or political background). You explicitly consent to this data being stored, reviewed by moderators, and published anonymously on this map for the purpose of documenting discrimination in Dresden. You can request deletion at any time via the privacy page.",
    consent_check: "I explicitly consent to the collection and publication of this data as described above.",
    submit_btn: "SUBMIT FOR REVIEW",
    submit_note: "Submissions are reviewed before appearing on the map.",
    clear_pin: "CLEAR PIN",
    cat_title: "PROPOSE A CATEGORY", cat_name: "CATEGORY NAME",
    cat_desc: "SHORT DESCRIPTION (optional)", cat_color: "MARKER COLOR",
    cat_submit: "ADD CATEGORY",
    nbh_title: "DISTRICTS", nbh_add: "ADD",
    nbh_note_label: "ADD A NOTE", nbh_note_submit: "ADD NOTE",
    fb_title: "PROPOSE SOMETHING NEW",
    gh_note_head: "CONTRIBUTE DIRECTLY",
    gh_note_body: "This project is open. You can commit changes, add data, or propose features directly on GitHub:",
    fb_desc: "Or write your idea here and we will consider implementing it.",
    fb_submit: "SEND IDEA",
    view_all: "ALL INCIDENTS", view_feb13: "FEB 13 MAP",
    pin_set: "Pin set at", saved: "SAVED",
    error_type: "Select a type of discrimination.",
    error_location: "Provide an address or drop a pin.",
    error_date: "Provide a date.",
    error_consent: "You must give explicit consent to submit.",
    error_cat: "Provide a category name.",
    error_feedback: "Write something first.",
    error_nbh: "Enter a district name.",
    incident_victim: "VICTIM", incident_perpetrator: "PERPETRATOR",
    incident_date: "DATE / TIME", incident_location: "LOCATION",
    incident_description: "DESCRIPTION",
    no_notes: "No notes yet.",
    pending_note: "This incident is awaiting moderation.",
    nbh_incidents: (n) => `${n} incident${n !== 1 ? "s" : ""}`,
    cat_racial: "Racial discrimination",
    cat_political: "Political discrimination",
  },
  de: {
    subtitle: "rumman-dresden.xyz",
    nav_all: "ALLE", nav_feb13: "13. FEB", nav_nbh: "STADTTEILE",
    nav_propose: "VORSCHLAG", nav_privacy: "DATENSCHUTZ",
    filter: "FILTER:", add_cat_btn: "KATEGORIE",
    report_btn: "VORFALL MELDEN", report_title: "VORFALL MELDEN",
    type_label: "ART DER DISKRIMINIERUNG",
    victim_age: "ALTER", victim_gender: "GESCHLECHT",
    victim_nationality: "NATIONALITAT / HERKUNFT",
    perpetrator_label: "TATER / TATERIN", date_label: "DATUM",
    time_label: "UNGEFAHR UHRZEIT", description_label: "BESCHREIBUNG",
    location_label: "ORT",
    location_hint: "Oder Formular schliessen und auf Karte klicken, um eine Nadel zu setzen.",
    feb13_label: "Bezieht sich auf den 13. Februar",
    consent_title: "EINWILLIGUNG ERFORDERLICH",
    consent_text: "Dieses Formular erhebt besondere Kategorien personenbezogener Daten gemas DSGVO Art. 9 (Nationalitat, ethnische oder politische Herkunft). Sie willigen ausdriicklich ein, dass diese Daten gespeichert, von Moderatoren gepruft und anonym auf dieser Karte veroffentlicht werden, um Diskriminierung in Dresden zu dokumentieren. Sie konnen jederzeit die Loschung uber die Datenschutzseite beantragen.",
    consent_check: "Ich willige ausdriicklich in die Erhebung und Veroffentlichung der oben beschriebenen Daten ein.",
    submit_btn: "ZUR PRUFUNG EINREICHEN",
    submit_note: "Einreichungen werden vor der Veroffentlichung gepruft.",
    clear_pin: "NADEL ENTFERNEN",
    cat_title: "KATEGORIE VORSCHLAGEN", cat_name: "KATEGORIENAME",
    cat_desc: "KURZE BESCHREIBUNG (optional)", cat_color: "MARKERFARBE",
    cat_submit: "HINZUFUGEN",
    nbh_title: "STADTTEILE", nbh_add: "HINZUFUGEN",
    nbh_note_label: "NOTIZ HINZUFUGEN", nbh_note_submit: "SPEICHERN",
    fb_title: "ETWAS NEUES VORSCHLAGEN",
    gh_note_head: "DIREKT BEITRAGEN",
    gh_note_body: "Dieses Projekt ist offen. Du kannst Anderungen direkt auf GitHub einreichen:",
    fb_desc: "Oder schreib deine Idee hier.",
    fb_submit: "IDEE SENDEN",
    view_all: "ALLE VORFALLE", view_feb13: "KARTE 13. FEBRUAR",
    pin_set: "Nadel bei", saved: "GESPEICHERT",
    error_type: "Bitte Art der Diskriminierung wahlen.",
    error_location: "Adresse eingeben oder Nadel setzen.",
    error_date: "Bitte Datum angeben.",
    error_consent: "Bitte ausdriickliche Einwilligung erteilen.",
    error_cat: "Bitte Kategorienamen eingeben.",
    error_feedback: "Bitte zunachst etwas schreiben.",
    error_nbh: "Bitte Stadtteilname eingeben.",
    incident_victim: "BETROFFENE PERSON", incident_perpetrator: "TATER / TATERIN",
    incident_date: "DATUM / UHRZEIT", incident_location: "ORT",
    incident_description: "BESCHREIBUNG",
    no_notes: "Noch keine Notizen.",
    pending_note: "Dieser Vorfall wird gerade moderiert.",
    nbh_incidents: (n) => `${n} Vorfall${n !== 1 ? "e" : ""}`,
    cat_racial: "Rassistische Diskriminierung",
    cat_political: "Politische Diskriminierung",
  }
};

let lang = "en";
function t(key) {
  const val = (STRINGS[lang] && STRINGS[lang][key]) !== undefined
    ? STRINGS[lang][key] : STRINGS.en[key];
  return val !== undefined ? val : key;
}

function toggleLang() {
  lang = lang === "en" ? "de" : "en";
  document.querySelector(".lang-btn").textContent = lang === "en" ? "DE" : "EN";
  applyI18n();
  renderCategoryBar();
  renderNeighborhoodList();
  renderTypeChips();
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (typeof val === "string") el.textContent = val;
  });
  const lbl = document.getElementById("view-label");
  if (lbl) lbl.textContent = currentView === "feb13" ? t("view_feb13") : t("view_all");
}

// ---------- CATEGORIES ----------
const DEFAULT_CATEGORIES = [
  { id: "racial",    nameKey: "cat_racial",    color: "#c8102e" },
  { id: "political", nameKey: "cat_political", color: "#0d3b8c" },
];
function catName(cat) { return cat.nameKey ? t(cat.nameKey) : (cat.name || cat.id); }

let categories = [...DEFAULT_CATEGORIES];
let activeCategories = new Set(categories.map(c => c.id));

// ---------- STATE ----------
let currentView = "all";
let pendingPin = null;
let pinMarker = null;
let incidents = [];
let neighborhoods = [];
let activeNeighborhoodId = null;
let incidentMarkers = [];
let activeNbhLayer = null;

// ---------- MAP ----------
const DRESDEN_CENTER = [51.0504, 13.7373];
const map = L.map("map", { center: DRESDEN_CENTER, zoom: 13, zoomControl: true });

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 19,
}).addTo(map);

const viewLabel = document.createElement("div");
viewLabel.id = "view-label";
viewLabel.style.display = "none";
document.body.appendChild(viewLabel);

// ---------- NEIGHBORHOOD BOUNDARY ----------
async function fetchNeighborhoodBoundary(name) {
  try {
    const q = `[out:json][timeout:12];relation["name"="${name}"]["boundary"="administrative"](50.94,13.57,51.17,13.93);out geom;`;
    const res = await fetch("https://overpass-api.de/api/interpreter?data=" + encodeURIComponent(q));
    const data = await res.json();
    if (data.elements && data.elements.length > 0) return overpassToGeoJSON(data.elements[0]);
  } catch (e) { console.warn("Boundary fetch failed:", e); }
  return null;
}

function overpassToGeoJSON(rel) {
  const rings = (rel.members || [])
    .filter(m => (m.role === "outer" || m.role === "") && m.geometry && m.geometry.length > 2)
    .map(m => m.geometry.map(pt => [pt.lon, pt.lat]));
  if (!rings.length) return null;
  return { type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: rings } };
}

function showNeighborhoodOnMap(name) {
  if (activeNbhLayer) { map.removeLayer(activeNbhLayer); activeNbhLayer = null; }
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 8000));
  Promise.race([fetchNeighborhoodBoundary(name), timeout])
    .then(gj => {
      if (!gj) { showToast("No boundary found for " + name); return; }
      activeNbhLayer = L.geoJSON(gj, {
        style: { color: "#c8102e", weight: 2.5, dashArray: "7 4", fillColor: "#f5d000", fillOpacity: 0.18 }
      }).addTo(map);
      try { map.fitBounds(activeNbhLayer.getBounds(), { padding: [40, 40] }); } catch(e) {}
    })
    .catch(() => showToast("Could not load boundary — try again later."));
}
// ---------- MAP CLICK — PIN ----------
map.on("click", function (e) {
  if (document.getElementById("report-modal").style.display !== "none") return;
  pendingPin = e.latlng;
  if (pinMarker) map.removeLayer(pinMarker);
  pinMarker = L.circleMarker(e.latlng, {
    radius: 8, color: "#0d0d0d", fillColor: "#f5d000", fillOpacity: 1, weight: 2.5,
  }).addTo(map).bindPopup(
    `<span style="font-family:Space Mono,monospace;font-size:10px;font-weight:700">PIN SET</span>`
  ).openPopup();
  showPinPreview(e.latlng);
});

function showPinPreview(latlng) {
  document.getElementById("pin-coords-label").textContent =
    t("pin_set") + " " + latlng.lat.toFixed(5) + ", " + latlng.lng.toFixed(5);
  document.getElementById("pin-preview").style.display = "flex";
}

function clearPin() {
  pendingPin = null;
  if (pinMarker) { map.removeLayer(pinMarker); pinMarker = null; }
  document.getElementById("pin-preview").style.display = "none";
}

// ---------- VIEW SWITCHING ----------
function setView(v) {
  currentView = v;
  document.querySelectorAll(".nav-btn[data-view]").forEach(b => b.classList.remove("active"));
  const btn = document.querySelector(`.nav-btn[data-view="${v}"]`);
  if (btn) btn.classList.add("active");
  viewLabel.style.display = v === "feb13" ? "block" : "none";
  if (v === "feb13") viewLabel.textContent = t("view_feb13");
  renderMarkers();
}

// ---------- CATEGORY BAR ----------
function renderCategoryBar() {
  const list = document.getElementById("category-list");
  list.innerHTML = `<span class="cat-label">${t("filter")}</span>`;
  categories.forEach(cat => {
    const chip = document.createElement("button");
    chip.className = "cat-chip" + (activeCategories.has(cat.id) ? " active" : " inactive");
    chip.textContent = catName(cat);
    chip.style.borderColor = cat.color;
    if (activeCategories.has(cat.id)) chip.style.backgroundColor = cat.color;
    chip.onclick = () => toggleCategory(cat.id);
    list.appendChild(chip);
  });
}

function toggleCategory(id) {
  if (activeCategories.has(id)) activeCategories.delete(id);
  else activeCategories.add(id);
  renderCategoryBar();
  renderMarkers();
}

// ---------- MARKERS — only approved incidents show on public map ----------
function renderMarkers() {
  incidentMarkers.forEach(m => map.removeLayer(m));
  incidentMarkers = [];

  // Only show approved incidents publicly
  const filtered = incidents.filter(inc => {
    if (inc.status !== "approved") return false;
    if (currentView === "feb13" && !inc.feb13) return false;
    if (!activeCategories.has(inc.categoryId)) return false;
    return true;
  });

  filtered.forEach(inc => {
    if (!inc.lat || !inc.lng) return;
    const cat = categories.find(c => c.id === inc.categoryId) || { color: "#888" };
    const marker = L.circleMarker([inc.lat, inc.lng], {
      radius: 7, color: "#0d0d0d", fillColor: cat.color, fillOpacity: 0.88, weight: 2,
    }).addTo(map);
    marker.on("click", () => showIncidentDetail(inc));
    incidentMarkers.push(marker);
  });
}

// ---------- INCIDENT DETAIL ----------
function showIncidentDetail(inc) {
  const cat = categories.find(c => c.id === inc.categoryId);
  const victim = [
    inc.victimAge ? inc.victimAge + " y.o." : null,
    inc.victimGender, inc.victimNationality
  ].filter(Boolean).join(", ") || "not specified";

  document.getElementById("incident-detail-content").innerHTML = `
    ${cat ? `<div class="incident-cat-badge" style="border-color:${cat.color};color:${cat.color}">${catName(cat)}</div>` : ""}
    <div class="incident-field">
      <span class="incident-field-label">${t("incident_victim")}</span>
      <span class="incident-field-value">${victim}</span>
    </div>
    ${inc.perpetrator ? `<div class="incident-field"><span class="incident-field-label">${t("incident_perpetrator")}</span><span class="incident-field-value">${inc.perpetrator}</span></div>` : ""}
    <div class="incident-field">
      <span class="incident-field-label">${t("incident_date")}</span>
      <span class="incident-field-value">${(inc.date || "") + (inc.time ? "  " + inc.time : "") || "not specified"}</span>
    </div>
    ${inc.address ? `<div class="incident-field"><span class="incident-field-label">${t("incident_location")}</span><span class="incident-field-value">${inc.address}</span></div>` : ""}
    ${inc.description ? `<div class="incident-field"><span class="incident-field-label">${t("incident_description")}</span><span class="incident-field-value">${inc.description}</span></div>` : ""}
  `;
  document.getElementById("incident-modal").style.display = "flex";
}

// ---------- REPORT FORM ----------
function openReportModal() {
  renderTypeChips();
  if (pendingPin) showPinPreview(pendingPin);
  document.getElementById("form-error").textContent = "";
  document.getElementById("report-modal").style.display = "flex";
}

function renderTypeChips() {
  const container = document.getElementById("type-chips");
  if (!container) return;
  container.innerHTML = "";
  categories.forEach(cat => {
    const chip = document.createElement("button");
    chip.className = "type-chip";
    chip.textContent = catName(cat);
    chip.dataset.id = cat.id;
    chip.onclick = () => {
      container.querySelectorAll(".type-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
    };
    container.appendChild(chip);
  });
}

async function submitReport() {
  const selectedChip = document.querySelector(".type-chip.selected");
  if (!selectedChip) { document.getElementById("form-error").textContent = t("error_type"); return; }

  const address = document.getElementById("f-address").value.trim();
  const date = document.getElementById("f-date").value;
  const consent = document.getElementById("f-consent").checked;
  const honeypot = document.getElementById("f-honeypot").value;
  if (honeypot) return; // bot filled the hidden field -> silently drop

  if (!pendingPin && !address) { document.getElementById("form-error").textContent = t("error_location"); return; }
  if (!date) { document.getElementById("form-error").textContent = t("error_date"); return; }
  if (!consent) { document.getElementById("form-error").textContent = t("error_consent"); return; }

  let lat = pendingPin ? pendingPin.lat : null;
  let lng = pendingPin ? pendingPin.lng : null;

  if (!lat && address) {
    const coords = await geocodeAddress(address);
    if (coords) { lat = coords.lat; lng = coords.lng; }
  }

  const record = {
    categoryId: selectedChip.dataset.id,
    victimAge: document.getElementById("f-victim-age").value || null,
    victimGender: document.getElementById("f-victim-gender").value || null,
    victimNationality: document.getElementById("f-victim-nationality").value.trim() || null,
    perpetrator: document.getElementById("f-perpetrator").value.trim() || null,
    date,
    time: document.getElementById("f-time").value || null,
    description: document.getElementById("f-description").value.trim() || null,
    address: address || null,
    lat, lng,
    feb13: document.getElementById("f-feb13").checked,
    consentGiven: true,
    consentTimestamp: Date.now(),
    status: "pending",        // all new submissions are pending moderation
    createdAt: Date.now(),
  };

  await saveToFirestore("incidents", record);
  incidents.push(record);
  resetReportForm();
  closeModal("report-modal");
  clearPin();
  showToast(t("saved"));
}

function resetReportForm() {
  ["f-victim-age","f-victim-nationality","f-perpetrator","f-address","f-description"].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = "";
  });
  ["f-victim-gender"].forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  ["f-date","f-time"].forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  ["f-feb13","f-consent"].forEach(id => { const el = document.getElementById(id); if (el) el.checked = false; });
  document.querySelectorAll(".type-chip").forEach(c => c.classList.remove("selected"));
  document.getElementById("form-error").textContent = "";
}

// ---------- GEOCODING ----------
async function geocodeAddress(address) {
  try {
    const q = encodeURIComponent(address + ", Dresden, Germany");
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1`,
      { headers: { "Accept-Language": "en" } }
    );
    const data = await res.json();
    if (data.length > 0) return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch (e) { /* silent */ }
  return null;
}

// ---------- CATEGORIES ----------
function openAddCategoryModal() { document.getElementById("add-category-modal").style.display = "flex"; }

async function submitCategory() {
  const name = document.getElementById("new-cat-name").value.trim();
  if (!name) { showToast(t("error_cat")); return; }
  const color = document.getElementById("new-cat-color").value;
  const desc  = document.getElementById("new-cat-desc").value.trim();
  const id    = "cat_" + Date.now();
  const cat   = { id, name, color, description: desc, createdAt: Date.now() };
  categories.push(cat);
  activeCategories.add(id);
  await saveToFirestore("categories", cat);
  renderCategoryBar();
  closeModal("add-category-modal");
  document.getElementById("new-cat-name").value = "";
  document.getElementById("new-cat-desc").value = "";
  showToast(t("saved"));
}

// ---------- NEIGHBORHOODS ----------
function openNeighborhoodPanel() {
  document.getElementById("neighborhood-panel").style.display = "flex";
  renderNeighborhoodList();
}

function renderNeighborhoodList() {
  const list = document.getElementById("nbh-list");
  if (!list) return;
  list.innerHTML = "";
  neighborhoods.forEach(nbh => {
    const count = incidents.filter(i => i.neighborhoodId === nbh.id && i.status === "approved").length;
    const item = document.createElement("div");
    item.className = "nbh-item";
    const fn = t("nbh_incidents");
    item.innerHTML = `<span>${nbh.name}</span><span class="nbh-item-count">${typeof fn === "function" ? fn(count) : count}</span>`;
    item.onclick = () => { showNeighborhoodOnMap(nbh.name); openNeighborhoodNoteModal(nbh); };
    list.appendChild(item);
  });
}

async function addNeighborhood() {
  const name = document.getElementById("nbh-new-name").value.trim();
  if (!name) { showToast(t("error_nbh")); return; }
  const nbh = { id: "nbh_" + Date.now(), name, notes: [], createdAt: Date.now() };
  neighborhoods.push(nbh);
  await saveToFirestore("neighborhoods", nbh);
  document.getElementById("nbh-new-name").value = "";
  renderNeighborhoodList();
  showToast(t("saved"));
}

function openNeighborhoodNoteModal(nbh) {
  activeNeighborhoodId = nbh.id;
  document.getElementById("nbh-note-title").textContent = nbh.name.toUpperCase();
  renderNotesList(nbh);
  document.getElementById("nbh-note-modal").style.display = "flex";
}

function renderNotesList(nbh) {
  const list = document.getElementById("nbh-notes-list");
  list.innerHTML = "";
  if (!(nbh.notes || []).length) {
    list.innerHTML = `<div class="muted" style="padding:8px 0;font-size:11px">${t("no_notes")}</div>`;
    return;
  }
  nbh.notes.slice().reverse().forEach(note => {
    const div = document.createElement("div");
    div.className = "note-entry";
    div.innerHTML = `<div>${note.text}</div><div class="note-meta">${new Date(note.ts).toLocaleDateString()}</div>`;
    list.appendChild(div);
  });
}

async function submitNeighborhoodNote() {
  const text = document.getElementById("nbh-note-text").value.trim();
  if (!text) return;
  const nbh = neighborhoods.find(n => n.id === activeNeighborhoodId);
  if (!nbh) return;
  const note = { text, ts: Date.now() };
  if (!nbh.notes) nbh.notes = [];
  nbh.notes.push(note);

  if (window._dbReady) {
    const { collection, getDocs, doc, updateDoc, arrayUnion } = window._fbModules;
    try {
      const snap = await getDocs(collection(window._db, "neighborhoods"));
      for (const d of snap.docs) {
        if (d.data().id === activeNeighborhoodId) {
          await updateDoc(doc(window._db, "neighborhoods", d.id), { notes: arrayUnion(note) });
          break;
        }
      }
    } catch(e) { console.warn(e); }
  }
  renderNotesList(nbh);
  document.getElementById("nbh-note-text").value = "";
  showToast(t("saved"));
}

// ---------- FEEDBACK ----------
function openFeedbackModal() { document.getElementById("feedback-modal").style.display = "flex"; }

async function submitFeedback() {
  const text = document.getElementById("fb-text").value.trim();
  if (!text) { showToast(t("error_feedback")); return; }
  await saveToFirestore("feedback", { text, createdAt: Date.now() });
  document.getElementById("fb-text").value = "";
  closeModal("feedback-modal");
  showToast(t("saved"));
}

// ---------- FIREBASE ----------
async function saveToFirestore(col, data) {
  if (!window._dbReady) return;
  const { collection, addDoc } = window._fbModules;
  try { await addDoc(collection(window._db, col), data); }
  catch (e) { console.warn("Firestore save failed:", e); }
}

function loadFromFirestore() {
  if (!window._dbReady) return;
  const { collection, onSnapshot } = window._fbModules;
  const db = window._db;

  onSnapshot(collection(db, "incidents"), snap => {
    incidents = snap.docs.map(d => d.data());
    renderMarkers();
    renderNeighborhoodList();
  });

  onSnapshot(collection(db, "categories"), snap => {
    const defaultIds = new Set(DEFAULT_CATEGORIES.map(c => c.id));
    snap.docs.forEach(d => {
      const cat = d.data();
      if (!defaultIds.has(cat.id) && !categories.find(c => c.id === cat.id)) {
        categories.push(cat);
        activeCategories.add(cat.id);
      }
    });
    renderCategoryBar();
  });

  onSnapshot(collection(db, "neighborhoods"), snap => {
    neighborhoods = snap.docs.map(d => d.data());
    renderNeighborhoodList();
  });
}

// ---------- MODAL HELPERS ----------
function closeModal(id) { document.getElementById(id).style.display = "none"; }
function closePanel(id) { document.getElementById(id).style.display = "none"; }

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", function(e) { if (e.target === this) this.style.display = "none"; });
});

// ---------- TOAST ----------
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

// ---------- INIT ----------
function init() {
  renderCategoryBar();
  renderTypeChips();
  applyI18n();
  if (window._dbReady) loadFromFirestore();
  else document.addEventListener("db-ready", loadFromFirestore);
}

document.addEventListener("DOMContentLoaded", init);
