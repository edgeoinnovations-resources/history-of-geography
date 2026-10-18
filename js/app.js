/* From Songlines to the Cloud — storymap application.
 * Stack: MapLibre GL JS (map + globe), PMTiles (country boundaries), Scrollama (scroll steps).
 * Time and space are the two primary controls: the timeline at the bottom and the map behind.
 */
(function () {
  "use strict";
  const CFG = window.CONFIG, ENTRIES = window.CHAPTERS;
  const $ = (s, el) => (el || document).querySelector(s);
  const steps = ENTRIES; // every entry (title, chapters, steps, end) is a scroll step
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isNarrow = () => window.matchMedia("(max-width: 760px)").matches;
  let current = -1, currentProjection = "globe", spinning = false;

  /* ------------------------------------------------------------------ helpers */
  function fmtYear(y) {
    if (y <= -10000) return `c. ${Math.round(Math.abs(y) / 1000)},000 BCE`;
    if (y < 0) return `${Math.abs(y).toLocaleString()} BCE`;
    if (y === 0 || y === 1) return "1 CE";
    return `${y}`;
  }
  function fmtTime(s) {
    s = Math.max(0, Math.floor(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(sec).padStart(2, "0");
  }
  function epColor(ep) { return CFG.episodeColors[ep] || "#002244"; }
  function timePos(year) {
    const A = CFG.timelineAnchors;
    if (year <= A[0][0]) return 0; if (year >= A[A.length - 1][0]) return 1;
    for (let i = 0; i < A.length - 1; i++) {
      const [y0, p0] = A[i], [y1, p1] = A[i + 1];
      if (year >= y0 && year <= y1) return p0 + (p1 - p0) * (year - y0) / (y1 - y0);
    }
    return 1;
  }
  function escapeHtml(s) { return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  /* ------------------------------------------------------------------ map pictures */
  // Pictures of the maps the story refers to live in js/maps.js, keyed by step id.
  const MAPS = window.MAPS || {};
  function mapSource(m) { return m.source || ("https://commons.wikimedia.org/wiki/" + encodeURIComponent(m.commons.replace(/ /g, "_"))); }
  function mapHiRes(m) { return m.commons ? "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(m.commons.replace(/^File:/, "").replace(/ /g, "_")) + "?width=2000" : null; }
  function mapsHtml(stepId) {
    const list = MAPS[stepId]; if (!list || !list.length) return "";
    const multi = list.length > 1;
    return `<div class="maps${multi ? " multi" : ""}">` + list.map((m, k) => `
      <figure class="mapfig">
        <button type="button" class="mapbtn" data-step="${stepId}" data-k="${k}" title="Enlarge" aria-label="Enlarge: ${escapeHtml(m.title)}"><img src="img/maps/${m.file}" alt="${escapeHtml(m.title)}" loading="lazy"></button>
        <figcaption><strong>${escapeHtml(m.title)}</strong>${multi ? "" : " " + escapeHtml(m.caption)} <a href="${mapSource(m)}" target="_blank" rel="noopener">Source ↗</a></figcaption>
      </figure>`).join("") + `</div>`;
  }

  /* ------------------------------------------------------------------ build cards */
  const story = $("#story");
  steps.forEach((s, i) => {
    const el = document.createElement("section");
    el.className = "step " + (s.type || "narrative"); el.dataset.index = i; el.id = s.id;
    el.style.setProperty("--ep", epColor(s.ep));
    if (s.type === "title") {
      el.innerHTML = `<div class="card title-card">
        <p class="kicker">A storymap in six episodes</p>
        <h1>${CFG.title}</h1>
        <p class="lede">${CFG.subtitle}. From the London cabbie's hippocampus to a foundation model in orbit, follow 20,000 years of spatial thinking across the map and along the timeline.</p>
        <div class="title-actions">
          <button class="btn primary" data-listen="1">▶ Listen to Episode 1</button>
          <a class="btn ghost" href="#ch1">Start reading ↓</a>
        </div>
        <p class="hint">Scroll to move through time. Click any dot on the timeline to jump. Drag the map any time.</p>
      </div>`;
    } else if (s.type === "chapter") {
      el.innerHTML = `<div class="card chapter-card">
        <p class="kicker">Episode ${s.ep} · ${s.span}</p>
        <h2>${s.title}</h2>
        <p class="lede">${s.intro}</p>
        <div class="title-actions">
          <button class="btn primary" data-listen="${s.ep}">▶ Listen to Episode ${s.ep}</button>
          <button class="btn ghost" data-transcript="${s.ep}">Read transcript</button>
        </div>
      </div>`;
    } else if (s.type === "end") {
      el.innerHTML = `<div class="card chapter-card end-card">
        <p class="kicker">Thank you for travelling</p>
        <h2>The tools are free. The time on the timetable is not.</h2>
        <p class="lede">Spatial thinking is universal and it is trainable. Those two facts were true for the Marshallese navigator and they are true for the students in our classrooms.</p>
        <div class="title-actions">
          <button class="btn primary" data-transcript="6">Read the transcripts</button>
          <button class="btn ghost" data-about>Sources &amp; data</button>
          <a class="btn ghost" href="#title">Back to the start ↑</a>
        </div>
        <p class="hint">Written and narrated by Paul Strootman. Built with the open, cloud-native geospatial stack: MapLibre GL JS, PMTiles, OpenStreetMap via OpenFreeMap, Natural Earth and NASA Blue Marble, hosted on GitHub Pages.</p>
      </div>`;
    } else {
      el.innerHTML = `<div class="card">
        <div class="badges"><span class="badge time">${s.date}</span><span class="badge place">${s.place}</span></div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        ${mapsHtml(s.id)}
      </div>`;
    }
    story.appendChild(el);
  });

  /* ------------------------------------------------------------------ header episode pills */
  const pills = $("#episodes");
  for (let n = 1; n <= 6; n++) {
    const b = document.createElement("button");
    b.className = "pill"; b.dataset.ep = n; b.style.setProperty("--ep", epColor(n));
    b.title = CFG.audio.episodes[n - 1].title; b.innerHTML = `<i></i>${n}`;
    b.addEventListener("click", () => document.getElementById("ch" + n).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }));
    pills.appendChild(b);
  }

  /* ------------------------------------------------------------------ map */
  const protocol = new pmtiles.Protocol();
  maplibregl.addProtocol("pmtiles", protocol.tile);
  const first = steps[0].view;
  const map = new maplibregl.Map({
    container: "map", style: CFG.basemap, center: first.center, zoom: first.zoom,
    attributionControl: false, maxPitch: 70, canvasContextAttributes: { antialias: true }
  });
  window.__map = map; // exposed for debugging / QA scripts
  map.addControl(new maplibregl.AttributionControl({ compact: true, customAttribution: "Boundaries: Natural Earth · Imagery: NASA GIBS" }), "bottom-right");
  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true, showCompass: true }), "bottom-right");
  ["mousedown", "touchstart", "wheel"].forEach(ev => map.getCanvas().addEventListener(ev, () => { spinning = false; }, { passive: true }));

  function firstLayerOfType(types) {
    const layers = map.getStyle().layers;
    const l = layers.find(x => types.includes(x.type));
    return l ? l.id : undefined;
  }

  map.on("style.load", () => {
    map.setProjection({ type: "globe" });
    map.setSky({
      "sky-color": "#bfe3f5", "horizon-color": "#f3f6f8", "fog-color": "#ffffff",
      "fog-ground-blend": 0.6, "horizon-fog-blend": 0.6, "sky-horizon-blend": 0.8,
      "atmosphere-blend": ["interpolate", ["linear"], ["zoom"], 0, 1, 6, 1, 8, 0]
    });

    const beforeLines = firstLayerOfType(["line", "symbol"]);
    const beforeSymbols = firstLayerOfType(["symbol"]);

    /* NASA Blue Marble, faded in on demand */
    map.addSource("bluemarble", { type: "raster", tiles: [CFG.bluemarble], tileSize: 256, maxzoom: 8,
      attribution: "Imagery © NASA GIBS / Blue Marble" });
    map.addLayer({ id: "bluemarble", type: "raster", source: "bluemarble",
      paint: { "raster-opacity": 0, "raster-opacity-transition": { duration: 900 }, "raster-fade-duration": 300 } }, beforeLines);

    /* Natural Earth countries from PMTiles (single static file, HTTP range requests) */
    const tilesUrl = new URL(CFG.countriesTiles, window.location.href).href;
    map.addSource("countries", { type: "vector", url: "pmtiles://" + tilesUrl, attribution: "Boundaries: Natural Earth" });
    map.addLayer({ id: "countries-fill", type: "fill", source: "countries", "source-layer": CFG.countriesLayer,
      filter: ["in", ["get", "ADM0_A3"], ["literal", []]],
      paint: { "fill-color": "#E69F00", "fill-opacity": 0.38, "fill-opacity-transition": { duration: 500 } } }, beforeSymbols);
    map.addLayer({ id: "countries-accent", type: "fill", source: "countries", "source-layer": CFG.countriesLayer,
      filter: ["in", ["get", "ADM0_A3"], ["literal", []]],
      paint: { "fill-color": "#002244", "fill-opacity": 0.42 } }, beforeSymbols);
    map.addLayer({ id: "countries-line", type: "line", source: "countries", "source-layer": CFG.countriesLayer,
      filter: ["in", ["get", "ADM0_A3"], ["literal", []]],
      paint: { "line-color": "#002244", "line-width": 1.2, "line-opacity": 0.8 } }, beforeSymbols);

    /* Areas (lines + polygons) */
    map.addSource("areas", { type: "geojson", data: "data/areas.geojson" });
    map.addLayer({ id: "areas-fill", type: "fill", source: "areas", filter: ["all", ["==", ["geometry-type"], "Polygon"], ["in", ["get", "id"], ["literal", []]]],
      paint: { "fill-color": "#E69F00", "fill-opacity": 0.25 } }, beforeSymbols);
    map.addLayer({ id: "areas-line", type: "line", source: "areas", filter: ["in", ["get", "id"], ["literal", []]],
      paint: { "line-color": "#E69F00", "line-width": 2.5, "line-dasharray": [2, 1.5] } }, beforeSymbols);

    /* Routes */
    map.addSource("routes", { type: "geojson", data: "data/routes.geojson", lineMetrics: true });
    map.addLayer({ id: "routes-casing", type: "line", source: "routes", filter: ["in", ["get", "id"], ["literal", []]],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": "#ffffff", "line-width": 6, "line-opacity": 0.9 } }, beforeSymbols);
    map.addLayer({ id: "routes-line", type: "line", source: "routes", filter: ["in", ["get", "id"], ["literal", []]],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": "#E69F00", "line-width": 3,
        "line-dasharray": ["match", ["get", "style"], "songline", ["literal", [0.1, 2]], "measure", ["literal", [1, 0]], ["literal", [1, 0]]] } }, beforeSymbols);

    /* Places */
    map.addSource("places", { type: "geojson", data: "data/places.geojson" });
    map.addLayer({ id: "places-halo", type: "circle", source: "places", filter: ["in", ["get", "id"], ["literal", []]],
      paint: { "circle-radius": ["interpolate", ["linear"], ["zoom"], 1, 9, 8, 14, 14, 22], "circle-color": "#E69F00", "circle-opacity": 0.25, "circle-blur": 0.4 } });
    map.addLayer({ id: "places-dot", type: "circle", source: "places", filter: ["in", ["get", "id"], ["literal", []]],
      paint: { "circle-radius": ["interpolate", ["linear"], ["zoom"], 1, 4, 8, 6, 14, 9], "circle-color": "#E69F00", "circle-stroke-color": "#ffffff", "circle-stroke-width": 2 } });
    map.addLayer({ id: "places-label", type: "symbol", source: "places", filter: ["in", ["get", "id"], ["literal", []]],
      layout: { "text-field": ["get", "label"], "text-font": ["Noto Sans Regular"], "text-size": ["interpolate", ["linear"], ["zoom"], 1, 11, 6, 12.5, 12, 14],
        "text-variable-anchor": ["top", "bottom", "left", "right"], "text-radial-offset": 0.9, "text-justify": "auto", "text-max-width": 12, "text-optional": true },
      paint: { "text-color": "#002244", "text-halo-color": "#ffffff", "text-halo-width": 1.6 } });

    map.on("click", "places-dot", e => {
      const f = e.features[0];
      new maplibregl.Popup({ closeButton: false, offset: 10 }).setLngLat(f.geometry.coordinates).setHTML(`<strong>${escapeHtml(f.properties.label)}</strong>`).addTo(map);
    });
    map.on("mouseenter", "places-dot", () => map.getCanvas().style.cursor = "pointer");
    map.on("mouseleave", "places-dot", () => map.getCanvas().style.cursor = "");

    if (current >= 0) applyStep(current, true); else applyStep(0, true);
  });
  // Start with the compact attribution collapsed (MapLibre opens it on narrow screens until first touch).
  map.once("idle", () => { const a = document.querySelector(".maplibregl-ctrl-attrib"); if (a) { a.classList.remove("maplibregl-compact-show"); a.removeAttribute("open"); } });

  function idFilter(ids) { return ["in", ["get", "id"], ["literal", ids || []]]; }

  function applyStep(i, immediate) {
    const s = steps[i]; if (!s) return;
    current = i;
    const color = epColor(s.ep || 1);
    document.documentElement.style.setProperty("--ep-current", color);

    if (map.isStyleLoaded() || map.getLayer("places-dot")) {
      const proj = s.projection || "globe";
      if (proj !== currentProjection) { map.setProjection({ type: proj }); currentProjection = proj; }

      const v = s.view, pad = isNarrow() ? { top: 70, bottom: window.innerHeight * 0.45, left: 0, right: 0 } : { top: 80, bottom: 90, left: 480, right: 20 };
      const cam = { center: v.center, zoom: v.zoom, pitch: v.pitch || 0, bearing: v.bearing || 0, padding: pad };
      if (immediate || reduceMotion) map.jumpTo(cam); else map.flyTo(Object.assign(cam, { duration: 2800, curve: 1.35, essential: true }));

      ["places-halo", "places-dot", "places-label"].forEach(l => map.setFilter(l, idFilter(s.show)));
      ["routes-casing", "routes-line"].forEach(l => map.setFilter(l, idFilter(s.routes)));
      map.setFilter("areas-line", idFilter(s.areas));
      map.setFilter("areas-fill", ["all", ["==", ["geometry-type"], "Polygon"], idFilter(s.areas)]);
      const c = s.countries || { key: "ADM0_A3", values: [], accent: [] };
      map.setFilter("countries-fill", ["in", ["get", c.key], ["literal", c.values || []]]);
      map.setFilter("countries-line", ["in", ["get", c.key], ["literal", (c.values || []).concat(c.accent || [])]]);
      map.setFilter("countries-accent", ["in", ["get", c.key], ["literal", c.accent || []]]);
      map.setPaintProperty("countries-fill", "fill-color", color);
      map.setPaintProperty("places-halo", "circle-color", color);
      map.setPaintProperty("places-dot", "circle-color", color);
      map.setPaintProperty("routes-line", "line-color", color);
      map.setPaintProperty("areas-line", "line-color", color);
      map.setPaintProperty("areas-fill", "fill-color", color);
      map.setPaintProperty("bluemarble", "raster-opacity", s.raster === "bluemarble" ? 1 : 0);

      spinning = s.type === "title" && !reduceMotion;
      if (spinning) requestAnimationFrame(spin);
    }

    /* header + timeline */
    $("#now-date").textContent = s.type === "title" ? "Scroll to begin" : (s.date || fmtYear(s.year));
    $("#now-place").textContent = s.place || (s.type === "chapter" ? `Episode ${s.ep}: ${s.title}` : s.type === "end" ? "Everywhere" : "");
    document.querySelectorAll(".pill").forEach(p => p.classList.toggle("active", +p.dataset.ep === s.ep));
    document.querySelectorAll(".step").forEach(el => el.classList.toggle("is-active", +el.dataset.index === i));
    timeline.set(i);
    if (s.id && history.replaceState) history.replaceState(null, "", "#" + s.id);
  }

  function spin() {
    if (!spinning || map.isMoving()) { if (spinning) requestAnimationFrame(spin); return; }
    const c = map.getCenter(); c.lng += 0.06; map.jumpTo({ center: c });
    requestAnimationFrame(spin);
  }

  /* ------------------------------------------------------------------ timeline */
  const timeline = (function () {
    const root = $("#timeline"), axis = $("#tl-axis"), marker = $("#tl-marker"), label = $("#tl-label");
    const W = () => axis.clientWidth;
    // episode coverage bands (from chapter spans, by first/last year of each episode's steps)
    const bands = $("#tl-bands");
    for (let n = 1; n <= 6; n++) {
      const ys = steps.filter(s => s.ep === n && !s.type).map(s => s.year);
      const b = document.createElement("div"); b.className = "tl-band";
      b.style.left = (timePos(Math.min(...ys)) * 100) + "%"; b.style.width = ((timePos(Math.max(...ys)) - timePos(Math.min(...ys))) * 100) + "%";
      b.style.background = epColor(n); b.title = `Episode ${n}: ${CFG.audio.episodes[n - 1].title}`;
      b.addEventListener("click", () => document.getElementById("ch" + n).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }));
      bands.appendChild(b);
    }
    // ticks
    const ticks = $("#tl-ticks");
    CFG.timelineTicks.forEach(y => {
      const t = document.createElement("div"); t.className = "tl-tick"; t.style.left = (timePos(y) * 100) + "%";
      t.innerHTML = `<span>${fmtYear(y)}</span>`; ticks.appendChild(t);
    });
    // event dots
    const dots = [];
    steps.forEach((s, i) => {
      if (s.type) return;
      const d = document.createElement("button"); d.className = "tl-dot"; d.style.left = (timePos(s.year) * 100) + "%";
      d.style.setProperty("--ep", epColor(s.ep)); d.title = `${s.date} — ${s.title}`; d.setAttribute("aria-label", d.title);
      d.addEventListener("click", () => document.getElementById(s.id).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }));
      axis.appendChild(d); dots[i] = d;
    });
    // click anywhere on the axis → nearest event in time
    axis.addEventListener("click", e => {
      if (e.target.classList.contains("tl-dot")) return;
      const frac = (e.clientX - axis.getBoundingClientRect().left) / W();
      let best = -1, bd = 1e9;
      steps.forEach((s, i) => { if (s.type) return; const d = Math.abs(timePos(s.year) - frac); if (d < bd) { bd = d; best = i; } });
      if (best >= 0) document.getElementById(steps[best].id).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    });
    return {
      set(i) {
        const s = steps[i]; const p = timePos(s.year) * 100;
        marker.style.left = p + "%"; label.style.left = p + "%";
        label.textContent = s.type === "title" ? fmtYear(s.year) : (s.date || fmtYear(s.year));
        label.style.transform = p > 85 ? "translateX(-100%)" : p < 15 ? "translateX(0)" : "translateX(-50%)";
        marker.style.background = epColor(s.ep || 1);
        dots.forEach((d, j) => d && d.classList.toggle("active", j === i));
        root.style.setProperty("--ep-current", epColor(s.ep || 1));
      }
    };
  })();

  /* ------------------------------------------------------------------ map lightbox */
  const lb = $("#lightbox"), lbImg = $("#lb-img"), lbTitle = $("#lb-title"), lbCap = $("#lb-caption"), lbCredit = $("#lb-credit"), lbCount = $("#lb-count");
  let lbStep = null, lbIndex = 0;
  function lbOpen() { return lb.classList.contains("open"); }
  function showLightbox() {
    const list = MAPS[lbStep] || []; const m = list[lbIndex]; if (!m) return;
    lbImg.src = "img/maps/" + m.file; lbImg.alt = m.title; lbImg.dataset.file = m.file;
    const hi = mapHiRes(m);
    if (hi) { const pre = new Image(); pre.onload = () => { if (lbImg.dataset.file === m.file && lbOpen()) lbImg.src = hi; }; pre.src = hi; }
    lbTitle.textContent = m.title; lbCap.textContent = m.caption;
    lbCredit.innerHTML = `${escapeHtml(m.credit)} <a href="${mapSource(m)}" target="_blank" rel="noopener">View source ↗</a>`;
    lbCount.textContent = list.length > 1 ? `${lbIndex + 1} / ${list.length}` : "";
    $("#lb-prev").hidden = $("#lb-next").hidden = list.length < 2;
  }
  function openLightbox(stepId, k) {
    lbStep = stepId; lbIndex = k || 0; showLightbox();
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); $("#lb-close").focus();
  }
  function closeLightbox() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); lbImg.removeAttribute("src"); }
  function lbNav(d) { const n = (MAPS[lbStep] || []).length; if (n < 2) return; lbIndex = (lbIndex + d + n) % n; showLightbox(); }
  story.addEventListener("click", e => { const b = e.target.closest(".mapbtn"); if (b) openLightbox(b.dataset.step, +b.dataset.k); });
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", () => lbNav(-1));
  $("#lb-next").addEventListener("click", () => lbNav(1));
  lb.addEventListener("click", e => { if (e.target === lb || e.target.id === "lb-figure") closeLightbox(); });

  /* ------------------------------------------------------------------ scrollama */
  const scroller = scrollama();
  scroller.setup({ step: ".step", offset: 0.55, progress: false })
    .onStepEnter(r => { if (r.index !== current) applyStep(r.index); });
  window.addEventListener("resize", () => scroller.resize());

  // keyboard: ← → move between steps
  window.addEventListener("keydown", e => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (lbOpen()) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") lbNav(1);
      else if (e.key === "ArrowLeft") lbNav(-1);
      else return;
      e.preventDefault(); return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const n = Math.min(steps.length - 1, Math.max(0, current + (e.key === "ArrowRight" ? 1 : -1)));
      document.getElementById(steps[n].id).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); e.preventDefault();
    }
  });

  // deep link: #step-id
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(() => target.scrollIntoView({ block: "center" }), 300);
  }

  /* ------------------------------------------------------------------ audio */
  const audio = $("#audio"), playBtn = $("#play"), audioLabel = $("#audio-label"), audioTime = $("#audio-time"), seek = $("#seek");
  audio.src = CFG.audio.src; audio.preload = "none";
  function episodeAt(t) { let e = CFG.audio.episodes[0]; CFG.audio.episodes.forEach(x => { if (t >= x.start) e = x; }); return e; }
  function playEpisode(n) {
    const e = CFG.audio.episodes[n - 1]; if (!e) return;
    const go = () => { audio.currentTime = e.start; audio.play(); };
    if (audio.readyState >= 1) go(); else { audio.addEventListener("loadedmetadata", go, { once: true }); audio.load(); }
    $("#player").classList.add("open");
  }
  playBtn.addEventListener("click", () => { if (audio.paused) { if (!audio.src) return; if (audio.readyState < 1) audio.load(); audio.play(); } else audio.pause(); });
  audio.addEventListener("play", () => { playBtn.textContent = "❚❚"; playBtn.setAttribute("aria-label", "Pause"); $("#player").classList.add("open"); });
  audio.addEventListener("pause", () => { playBtn.textContent = "▶"; playBtn.setAttribute("aria-label", "Play"); });
  audio.addEventListener("timeupdate", () => {
    const e = episodeAt(audio.currentTime);
    audioLabel.textContent = `Ep ${e.n} · ${e.title}`;
    audioTime.textContent = `${fmtTime(audio.currentTime - e.start)}`;
    const dur = audio.duration || CFG.audio.duration; seek.value = (audio.currentTime / dur) * 1000;
    const pill = $(`.pill[data-ep="${e.n}"]`); document.querySelectorAll(".pill").forEach(p => p.classList.toggle("playing", p === pill && !audio.paused));
  });
  seek.addEventListener("input", () => { const dur = audio.duration || CFG.audio.duration; audio.currentTime = (seek.value / 1000) * dur; });
  // episode markers on the seek bar
  const marks = $("#seek-marks");
  CFG.audio.episodes.forEach(e => { const m = document.createElement("i"); m.style.left = (e.start / CFG.audio.duration * 100) + "%"; m.style.background = epColor(e.n); m.title = `Episode ${e.n}`; marks.appendChild(m); });
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-listen]"); if (b) playEpisode(+b.dataset.listen);
    const t = e.target.closest("[data-transcript]"); if (t) openTranscript(+t.dataset.transcript);
    if (e.target.closest("[data-about]")) openAbout();
  });
  $("#listen-current").addEventListener("click", () => playEpisode(Math.max(1, steps[current] ? steps[current].ep : 1)));

  /* ------------------------------------------------------------------ transcript drawer */
  const drawer = $("#drawer"), drawerBody = $("#drawer-body"), drawerTitle = $("#drawer-title");
  function mdToHtml(md) {
    const lines = md.split(/\r?\n/); let html = "", para = [];
    const flush = () => { if (para.length) { html += `<p>${inline(para.join(" "))}</p>`; para = []; } };
    const inline = s => escapeHtml(s).replace(/\\\*/g, "&#42;").replace(/\*([^*]+)\*/g, "<em>$1</em>");
    for (const raw of lines) {
      const l = raw.trim();
      if (!l) { flush(); continue; }
      if (/^\\\* \\\* \\\*$/.test(l) || l === "* * *") { flush(); html += "<hr>"; continue; }
      if (l.startsWith("# ")) { flush(); continue; }
      if (l.startsWith("## ")) { flush(); html += `<h3>${inline(l.slice(3))}</h3>`; continue; }
      if (/^\*\[.*\]\*$/.test(l)) { flush(); html += `<p class="cue">${inline(l.slice(1, -1))}</p>`; continue; }
      para.push(l);
    }
    flush(); return html;
  }
  async function openTranscript(n) {
    const e = CFG.audio.episodes[n - 1];
    drawerTitle.textContent = `Episode ${n}: ${e.title}`;
    drawerBody.innerHTML = `<p class="cue">Loading…</p>`;
    drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false");
    $("#drawer-tabs").querySelectorAll("button").forEach(b => b.classList.toggle("active", +b.dataset.n === n));
    try {
      const r = await fetch(CFG.transcripts[n]); if (!r.ok) throw new Error(r.status);
      drawerBody.innerHTML = `<p class="cue"><button class="btn primary small" data-listen="${n}">▶ Listen to this episode</button></p>` + mdToHtml(await r.text());
      drawerBody.scrollTop = 0;
    } catch (err) { drawerBody.innerHTML = `<p>Could not load the transcript (${err.message}).</p>`; }
  }
  const tabs = $("#drawer-tabs");
  for (let n = 1; n <= 6; n++) { const b = document.createElement("button"); b.dataset.n = n; b.textContent = n; b.style.setProperty("--ep", epColor(n)); b.addEventListener("click", () => openTranscript(n)); tabs.appendChild(b); }
  $("#drawer-close").addEventListener("click", () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); });
  $("#btn-transcript").addEventListener("click", () => openTranscript(Math.max(1, steps[current] ? steps[current].ep : 1)));

  /* ------------------------------------------------------------------ about */
  const about = $("#about");
  function openAbout() { about.classList.add("open"); about.setAttribute("aria-hidden", "false"); }
  $("#btn-about").addEventListener("click", openAbout);
  $("#about-close").addEventListener("click", () => { about.classList.remove("open"); about.setAttribute("aria-hidden", "true"); });
  about.addEventListener("click", e => { if (e.target === about) $("#about-close").click(); });
  window.addEventListener("keydown", e => { if (e.key === "Escape") { $("#about-close").click(); $("#drawer-close").click(); } });
})();
