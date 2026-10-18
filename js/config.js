/* Site configuration. Everything here is safe to edit by hand. */
window.CONFIG = {
  title: "From Songlines to the Cloud",
  subtitle: "A history of geography and spatial thinking, in time and space",

  /* Basemap: OpenFreeMap "positron" — OpenStreetMap data, vector tiles, no API key. */
  basemap: "https://tiles.openfreemap.org/styles/positron",

  /* Natural Earth 1:110m countries, packed as a single PMTiles archive served from this repo. */
  countriesTiles: "data/countries.pmtiles",
  countriesLayer: "countries",

  /* NASA GIBS Blue Marble (shaded relief + bathymetry), WMTS in Web Mercator. */
  bluemarble: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",

  /* Podcast audio. Episode start offsets (seconds) were auto-detected from the pauses between
     episodes; nudge them here if an episode starts a second or two early or late. */
  audio: {
    src: "audio/from-songlines-to-the-cloud.mp3",
    duration: 6039,
    episodes: [
      { n: 1, title: "The Map in Your Head",       start: 0 },
      { n: 2, title: "Measuring the World",        start: 1046 },
      { n: 3, title: "Geography Gets a Chair",     start: 2107 },
      { n: 4, title: "How America Lost Geography", start: 3067 },
      { n: 5, title: "The Comeback",               start: 4081 },
      { n: 6, title: "The Map Goes Public",        start: 4998 }
    ]
  },

  transcripts: {
    1: "transcripts/episode-1-the-map-in-your-head.md",
    2: "transcripts/episode-2-measuring-the-world.md",
    3: "transcripts/episode-3-geography-gets-a-chair.md",
    4: "transcripts/episode-4-how-america-lost-geography.md",
    5: "transcripts/episode-5-the-comeback.md",
    6: "transcripts/episode-6-the-map-goes-public.md"
  },

  /* One colour per episode (Okabe–Ito, colour-blind safe). Used for map features and the timeline. */
  episodeColors: { 1: "#E69F00", 2: "#56B4E9", 3: "#009E73", 4: "#D55E00", 5: "#CC79A7", 6: "#0072B2" },

  /* Timeline scale: piecewise-linear anchors [year, fraction of bar width]. Deep time is compressed. */
  timelineAnchors: [
    [-17000, 0.00], [-6000, 0.06], [-2500, 0.10], [-500, 0.15], [0, 0.18],
    [1000, 0.25], [1400, 0.30], [1600, 0.37], [1800, 0.45], [1900, 0.55],
    [1950, 0.66], [1980, 0.77], [2000, 0.87], [2030, 1.00]
  ],
  timelineTicks: [-15000, -3000, -500, 1, 1000, 1400, 1600, 1800, 1900, 1950, 2000, 2026]
};
