/* From Songlines to the Cloud — storymap narrative.
 *
 * Each entry is either a chapter card ({type:"chapter"}) or a step.
 * Steps carry:
 *   year        numeric position on the timeline (BCE negative)
 *   date        display string for the time badge
 *   place       display string for the space badge
 *   view        MapLibre camera: center [lon, lat], zoom, pitch, bearing
 *   show        place ids from data/places.geojson to light up
 *   routes      route ids from data/routes.geojson
 *   areas       area ids from data/areas.geojson
 *   countries   { key:"ADM0_A3"|"CONTINENT", values:[...], accent:[...] } for the Natural Earth layer
 *   raster      "bluemarble" to fade in NASA's Blue Marble imagery
 *   projection  "globe" (default) or "mercator"
 */
window.CHAPTERS = [
 /* ------------------------------------------------------------ TITLE */
 { type: "title", id: "title", ep: 0, year: -17000,
   view: { center: [20, 20], zoom: 1.4, pitch: 0, bearing: 0 } },

 /* ======================================================== EPISODE 1 */
 { type: "chapter", id: "ch1", ep: 1, year: -17000, span: "c. 17,000 BCE – 1150 BCE",
   title: "The Map in Your Head",
   intro: "Spatial thinking begins inside the skull, not in a university. Before anyone could write, people stored what they knew about space in song, stick and driftwood, because getting space wrong was how you died.",
   view: { center: [160, 10], zoom: 1.6, pitch: 0, bearing: 0 } },

 { id: "e1-knowledge", ep: 1, year: 2000, date: "2000 CE", place: "London",
   title: "The Knowledge",
   text: "To drive a black cab, you learn roughly 25,000 streets within six miles of Charing Cross. In 2000, neuroscientists scanned licensed cabbies and found more grey matter in the rear hippocampus. Following 79 trainees settled the question: the growth appeared only in those who qualified. Learning the city had physically changed their brains.",
   view: { center: [-0.1276, 51.5074], zoom: 11.5, pitch: 45, bearing: -15 },
   show: ["charing_cross"] },

 { id: "e1-nobel", ep: 1, year: 1971, date: "1948 → 2014", place: "Berkeley · London · Trondheim",
   title: "A Nobel Prize for the brain's GPS",
   text: "Tolman proposed the 'cognitive map' in 1948. In 1971 O'Keefe and Dostrovsky found place cells in the rat hippocampus; in 2005 the Mosers found grid cells, a hexagonal lattice laid over space. The 2014 Nobel Prize recognised nerve cells 'that enable a sense of place and navigation'. Spatial thinking is wired in, and it responds to use.",
   view: { center: [-40, 50], zoom: 2.2, pitch: 0, bearing: 0 },
   show: ["berkeley", "ucl", "trondheim"] },

 { id: "e1-pacific", ep: 1, year: 1976, date: "1976 CE", place: "Hawaiʻi → Tahiti",
   title: "Hōkūleʻa crosses the Pacific without instruments",
   text: "People settled the largest ocean on Earth by star paths, swells, winds and birds. Skeptics preferred accidental drift. In 1976 the voyaging canoe Hōkūleʻa sailed from Hawaiʻi to Tahiti guided by the Micronesian navigator Mau Piailug, with no instruments at all. It has since logged more than 150,000 nautical miles.",
   view: { center: [-158, 2], zoom: 2.6, pitch: 0, bearing: 0 },
   show: ["honolulu", "papeete", "satawal"], routes: ["hokulea_1976"] },

 { id: "e1-stickcharts", ep: 1, year: 1900, date: "c. 1000 BCE – 1945 CE", place: "Marshall Islands",
   title: "A map you study, then leave on the beach",
   text: "Marshallese stick charts lash coconut midribs into frameworks: shells mark islands, curved sticks show how ocean swells bend around them. They were rarely taken to sea. Navigators memorised them ashore and read the swells by feel, lying in the canoe. The charts fell out of use after the Second World War and nuclear testing at Bikini.",
   view: { center: [168.5, 8.5], zoom: 5.2, pitch: 30, bearing: 0 },
   show: ["majuro", "bikini"] },

 { id: "e1-ammassalik", ep: 1, year: 1885, date: "1885 CE", place: "East Greenland",
   title: "A coastline you can read with mittens on",
   text: "In February 1885 a Tunumiit man named Kunit, from Umivik, sold the explorer Gustav Holm a carved block of driftwood. The coast runs up one side and down the other; notches mark fjords, headlands, supply caches and portages. Readable by touch, in the Arctic dark. Drop it overboard and it floats. The maps are in Nuuk today.",
   view: { center: [-39, 65], zoom: 5, pitch: 40, bearing: -20 },
   show: ["umivik", "tasiilaq", "nuuk"] },

 { id: "e1-songlines", ep: 1, year: -10000, date: "Deep time", place: "Australia",
   title: "Songlines: oral maps across a continent",
   text: "Aboriginal songlines encode routes along the paths of ancestral beings, committed to memory in song. One runs from Heavitree Gap at Alice Springs to Byron Bay; another links the Gulf of Carpentaria to the Snowy Mountains. Each sacred site anchors part of an information system, so the knowledge is 'literally grounded in the landscape'.",
   view: { center: [140, -26], zoom: 3.4, pitch: 0, bearing: 0 },
   show: ["heavitree_gap", "byron_bay", "carpentaria", "snowy_mountains"],
   routes: ["songline_alice_byron", "songline_carpentaria_snowy"] },

 { id: "e1-lascaux", ep: 1, year: -15000, date: "c. 15,000 BCE", place: "Lascaux, France",
   title: "Cartocacoethes: a mania to see maps everywhere",
   text: "Six dots above an aurochs in the Hall of the Bulls have been read as the Pleiades. Critics note the orientations don't match and nothing else in the record backs it up. The International Astronomical Union allows it as a possibility, and no more. A warning for everything that follows: a pattern is not yet a map.",
   view: { center: [1.1764, 45.0539], zoom: 6.5, pitch: 0, bearing: 0 },
   show: ["lascaux"] },

 { id: "e1-catalhoyuk", ep: 1, year: -6400, date: "c. 6600–6200 BCE", place: "Çatalhöyük, Anatolia",
   title: "The world's oldest map? Probably a leopard skin",
   text: "A wall painting excavated in the 1960s was read as a town plan beneath the twin-peaked volcano Hasan Dağ in eruption. Stephanie Meece took it apart: the 'volcano' matches the site's leopard motif, the peaks are the wrong way round, and there are no other maps for thousands of years. An eruption dated to c. 6900 BCE means someone could have seen it. That is all.",
   view: { center: [33.5, 37.9], zoom: 7.2, pitch: 50, bearing: 20 },
   show: ["catalhoyuk", "hasan_dag"] },

 { id: "e1-babylon", ep: 1, year: -700, date: "8th–6th century BCE", place: "Sippar & Babylon, Mesopotamia",
   title: "The Babylonian Map of the World",
   text: "A palm-sized clay tablet dug up at Sippar shows Babylon on the Euphrates inside a circle of land, ringed by the ocean called the Bitter River, with triangles pointing into the unknown. It is the oldest known attempt to show the whole known world, mixing geography with myth. Workaday plans of fields, canals and the city of Nippur are older still.",
   view: { center: [44.6, 32.7], zoom: 6.5, pitch: 0, bearing: 0 },
   show: ["sippar", "babylon", "nippur"] },

 { id: "e1-turin", ep: 1, year: -1150, date: "c. 1150 BCE", place: "Wadi Hammamat, Eastern Desert",
   title: "The first geological map, on papyrus",
   text: "Under Ramesses IV, the scribe Amennakhte drew a map for a quarrying expedition covering about fifteen kilometres of desert valley: gold mines, the miners' settlement, the roads, and hills coloured by rock type. The Turin Papyrus Map is the oldest surviving geological map. The next one we know of comes twenty-nine centuries later.",
   view: { center: [33.4, 25.98], zoom: 7.5, pitch: 55, bearing: -30 },
   show: ["wadi_hammamat"] },

 { id: "e1-ropestretchers", ep: 1, year: -2500, date: "3rd millennium BCE onward", place: "The Nile floodplain",
   title: "Rope-stretchers and the tax map",
   text: "Herodotus says a king divided Egypt into equal taxed plots; when the Nile carried part of a plot away, royal surveyors re-measured it. 'From this practice, I think, geometry first came to be known in Egypt.' The harpedonaptai worked with knotted cords. Mapping moves fastest where the stakes are highest, and spatial knowledge begins to move out of people and into the state.",
   view: { center: [31.5, 27.5], zoom: 5.6, pitch: 30, bearing: 0 },
   show: ["giza", "syene"], areas: ["nile_floodplain"] },

 /* ======================================================== EPISODE 2 */
 { type: "chapter", id: "ch2", ep: 2, year: -600, span: "6th century BCE – 1800 CE",
   title: "Measuring the World",
   intro: "Description becomes measurement. From a stick and a shadow in Alexandria to a watch that kept time across the Atlantic, the whole Earth is pinned to a single grid by about 1800.",
   view: { center: [30, 30], zoom: 2.2, pitch: 0, bearing: 0 } },

 { id: "e2-eratosthenes", ep: 2, year: -240, date: "c. 240 BCE", place: "Alexandria → Syene",
   title: "A stick, a shadow, and the size of the planet",
   text: "At noon on the solstice the sun stood overhead at Syene; in Alexandria a stick cast a shadow of one-fiftieth of a circle. Eratosthenes multiplied the distance between them by fifty and got 250,000 stadia, nudged to 252,000 because it divides neatly. Depending on his stadion, under one percent off or sixteen percent too big. The method was geodesy either way.",
   view: { center: [31.4, 27.8], zoom: 5.3, pitch: 35, bearing: 0 },
   show: ["alexandria", "syene", "cyrene"], routes: ["eratosthenes"] },

 { id: "e2-miletus", ep: 2, year: -550, date: "6th century BCE", place: "Miletus, Ionia",
   title: "The first Greek to dare to draw the world",
   text: "Anaximander pictured the Earth as a drum floating in space and drew the inhabited world. Hecataeus improved the map and wrote the Circuit of the Earth. Herodotus mocked the perfectly circular ocean on his predecessors' maps. After Eratosthenes, Hipparchus insisted places be fixed by astronomy, by latitude and longitude, not by travellers' guesses.",
   view: { center: [27.2764, 37.5306], zoom: 6.5, pitch: 0, bearing: 0 },
   show: ["miletus"] },

 { id: "e2-ptolemy", ep: 2, year: 150, date: "c. 150 CE", place: "Alexandria",
   title: "Ptolemy: a dataset with a rendering spec",
   text: "His Geography gave coordinates for about eight thousand places, longitude counted from a prime meridian in the Fortunate Isles, plus instructions for a world map, twenty-six regional maps and three projections. No original map survives; every 'Ptolemy map' is a later reconstruction from his table. It had bugs: an Earth too small and an Asia stretched too far east.",
   view: { center: [10, 35], zoom: 2.8, pitch: 0, bearing: 0 },
   show: ["alexandria"], areas: ["ptolemy_meridian"] },

 { id: "e2-china", ep: 2, year: 1136, date: "3rd century CE → 1136 CE", place: "Xi'an, China",
   title: "A grid carved in stone",
   text: "Pei Xiu's six principles of mapmaking included scale, orientation and measured distances. In 1136 the Yu Ji Tu stele laid China on a grid of hundred-li squares; the coastline and the Yellow and Yangtze rivers are immediately recognisable. East–west lines are accurate while north–south lines drift, which is what happens when you lay a flat grid over a round Earth.",
   view: { center: [110, 33], zoom: 3.6, pitch: 0, bearing: 0 },
   show: ["xian"] },

 { id: "e2-islam", ep: 2, year: 830, date: "9th–11th century", place: "Baghdad · Sinjar · Punjab",
   title: "The Islamic world re-measures the Earth",
   text: "Al-Khwārizmī cut Ptolemy's overstretched Mediterranean by ten degrees and opened the Atlantic and Indian Oceans. Caliph al-Ma'mūn sent surveyors into the Syrian desert to measure a degree of the meridian. Two centuries later al-Bīrūnī climbed a mountain in the Punjab, measured the dip of the horizon, and calculated the Earth's radius within about six-tenths of one percent.",
   view: { center: [55, 31], zoom: 3.6, pitch: 0, bearing: 0 },
   show: ["baghdad", "sinjar", "nandana"] },

 { id: "e2-idrisi", ep: 2, year: 1154, date: "1154 CE", place: "Palermo, Sicily",
   title: "The Book of Roger",
   text: "Roger II, Norman king of Sicily, brought al-Idrīsī to his court in 1138. For fifteen years he interviewed travellers, cross-checked their accounts and kept what agreed. The result: seventy sectional maps and a circular world map engraved on a silver disc two metres across, south at the top. The most accurate map of its day, in use for three centuries.",
   view: { center: [13.36, 38.12], zoom: 5.5, pitch: 0, bearing: 0 },
   show: ["palermo"] },

 { id: "e2-battuta", ep: 2, year: 1340, date: "1325–1354", place: "Tangier → Beijing",
   title: "Geography on foot",
   text: "Ibn Baṭṭūṭa spent some twenty-nine years travelling across Africa, Asia and Europe and dictated the Riḥla in 1355. Travel writing as a way of gathering geographic knowledge. The route shown here is a simplified sketch of a journey that touched Mecca, Baghdad, Delhi and the China coast.",
   view: { center: [50, 25], zoom: 2.3, pitch: 0, bearing: 0 },
   show: ["tangier", "mecca", "delhi", "beijing"], routes: ["ibn_battuta"] },

 { id: "e2-medieval", ep: 2, year: 1300, date: "c. 1300", place: "Hereford · Genoa · Majorca",
   title: "Two maps for two questions",
   text: "The Hereford Mappa Mundi is theology in map form: east at the top, Jerusalem in the middle, some five hundred drawings on a sheet of vellum. Portolan charts appeared 'rather suddenly' in the late thirteenth century and show the Mediterranean coasts with astonishing accuracy. One asked where humanity stands in a divine order. The other asked how to make port before the weather turned.",
   view: { center: [5, 46], zoom: 4.2, pitch: 0, bearing: 0 },
   show: ["hereford", "genoa", "palma"] },

 { id: "e2-florence", ep: 2, year: 1406, date: "c. 1400 → 1477", place: "Florence · Bologna",
   title: "Ptolemy returns, and goes to print",
   text: "Around 1400 Manuel Chrysoloras brought the Greek text of the Geography to Florence; a Latin translation followed by 1407, and in 1477 Bologna printed the first edition with maps. What Europe got was not a correct picture of the world but a toolkit: the graticule and the projection. Plus the two bugs: a small Earth and an Asia stretched east.",
   view: { center: [11.3, 44.1], zoom: 6.5, pitch: 0, bearing: 0 },
   show: ["florence", "bologna"] },

 { id: "e2-columbus", ep: 2, year: 1492, date: "1492 · 1507", place: "Palos → the Bahamas",
   title: "The most productive error in geography",
   text: "A small Earth plus a stretched Asia makes the ocean between Europe and Asia look narrow. Columbus leaned on exactly that picture. Fifteen years later, at Saint-Dié-des-Vosges, Waldseemüller's world map was the first to use the name 'America'. Spain and Portugal kept their master charts secret and revised them as new coastlines came in.",
   view: { center: [-40, 32], zoom: 2.8, pitch: 0, bearing: 0 },
   show: ["palos", "san_salvador", "saint_die"], routes: ["columbus_1492"] },

 { id: "e2-mercator", ep: 2, year: 1569, date: "1569", place: "Duisburg",
   title: "Corrected for the use of sailors",
   text: "Mercator's eighteen-sheet wall map spaced the parallels further apart toward the poles so that a line of constant compass bearing comes out straight. Gold for steering a ship. The price is that high latitudes balloon. This map has just switched to his projection: watch Greenland grow to the size of Africa, on a map never meant for a classroom wall.",
   view: { center: [-20, 30], zoom: 1.1, pitch: 0, bearing: 0 },
   projection: "mercator",
   show: ["duisburg"] },

 { id: "e2-cassini", ep: 2, year: 1747, date: "1747–1793", place: "France",
   title: "The state takes over measurement",
   text: "The Cassini survey was the first national topographic map built on triangulation, a framework of measured triangles across the whole country. Louis XV ordered it in 1747; four generations of Cassinis produced about 180 sheets. In 1793 the revolutionary government seized the plates for the war office. The map was a military asset now.",
   view: { center: [2.5, 46.6], zoom: 4.8, pitch: 0, bearing: 0 },
   show: ["paris_observatory"], countries: { key: "ADM0_A3", values: ["FRA"] } },

 { id: "e2-longitude", ep: 2, year: 1761, date: "1707 → 1773", place: "Scilly · Portsmouth · Jamaica · Barbados",
   title: "Longitude is about time",
   text: "After a fleet was wrecked off Scilly in 1707, Parliament's Longitude Act of 1714 offered £20,000 for a method accurate to half a degree across the Atlantic. John Harrison, carpenter turned clockmaker, finished the watch H4 in 1759. To Jamaica in 1761 it lost about five seconds in 81 days; to Barbados in 1764, 39 seconds in 47 days. The Board paid him half. He got the rest in 1773.",
   view: { center: [-40, 33], zoom: 2.7, pitch: 0, bearing: 0 },
   show: ["scilly", "greenwich", "portsmouth", "port_royal", "bridgetown"], routes: ["harrison_1761", "harrison_1764"] },

 { id: "e2-cook", ep: 2, year: 1775, date: "1768–1779", place: "The Pacific",
   title: "'Our trusty friend the Watch'",
   text: "A copy of H4 sailed with James Cook on his second and third voyages. With lunar observations, rigorous coastal surveys and the watch, Cook fixed New Zealand, eastern Australia and Hawaiʻi onto the world grid. The ocean that Pacific navigators had crossed for millennia by reading the swells was now pinned to a coordinate system built in Europe.",
   view: { center: [-170, -10], zoom: 1.9, pitch: 0, bearing: 0 },
   show: ["plymouth", "dusky_sound", "botany_bay", "papeete", "kealakekua"], routes: ["cook"] },

 { id: "e2-hinge", ep: 2, year: 1800, date: "c. 1800", place: "The whole Earth",
   title: "The hinge of the series",
   text: "By about 1800 the Earth was measurable, navigable and mappable in one coordinate system: projection, triangulation, the chronometer. Notice who paid: sailors, empires and tax collectors, as on the Nile. Academic geography is built on this foundation, and so, a century and a half later, is GIS. The blue dot on your phone stands on Eratosthenes' shadow and Harrison's watch.",
   view: { center: [0, 20], zoom: 1.3, pitch: 0, bearing: 0 },
   show: [] },

 /* ======================================================== EPISODE 3 */
 { type: "chapter", id: "ch3", ep: 3, year: 1650, span: "1650 – 1939",
   title: "Geography Gets a Chair",
   intro: "Geography builds itself a home: university chairs, learned societies, journals, a place on the school timetable. It also picks up intellectual and moral baggage it will spend a century trying to put down.",
   view: { center: [10, 50], zoom: 3.2, pitch: 0, bearing: 0 } },

 { id: "e3-newton", ep: 3, year: 1672, date: "1650 · 1672 · 1681", place: "Amsterdam · Cambridge",
   title: "Isaac Newton edits a geography textbook",
   text: "Bernhardus Varenius published the Geographia Generalis in Amsterdam in 1650 and died the same year, aged 28. It split the subject into general geography, the laws of the whole Earth, and special geography, the description of places. Newton produced two Latin editions, redrew the figures and added some thirty diagrams of his own. Geography sat near the centre of the Cambridge curriculum around 1700.",
   view: { center: [2.5, 52.3], zoom: 5.8, pitch: 0, bearing: 0 },
   show: ["amsterdam", "cambridge_uk"] },

 { id: "e3-kant", ep: 3, year: 1756, date: "1756–1796", place: "Königsberg",
   title: "Kant teaches geography forty-nine times",
   text: "Knowledge can be organised logically, by concept, or physically, and there are two ways to do that: in time, which is history, or in space, which is geography. Kant lectured on physical geography for forty years. Two cautions: Cambridge was teaching the subject earlier, and his lectures contain explicitly racist material that sits at the foundations of the discipline.",
   view: { center: [20.51, 54.71], zoom: 5.5, pitch: 0, bearing: 0 },
   show: ["konigsberg"] },

 { id: "e3-humboldt", ep: 3, year: 1799, date: "1799–1804", place: "The Americas",
   title: "Humboldt: the Earth as one interconnected system",
   text: "The expedition that made him famous ran from Cumaná up the Orinoco, through Bogotá and Quito to Chimborazo, to Lima, Mexico and Philadelphia. He founded plant geography and distilled everything into Kosmos. 'Humboldtian science' was instrument-based and quantitative. Anyone who stacks a climate layer on a vegetation layer on an elevation layer is doing it still.",
   view: { center: [-70, 12], zoom: 2.6, pitch: 0, bearing: 0 },
   show: ["cumana", "bogota", "quito", "chimborazo", "lima", "mexico_city", "philadelphia"], routes: ["humboldt"] },

 { id: "e3-ritter", ep: 3, year: 1820, date: "1817 · 1820 · 1828", place: "Berlin",
   title: "Ritter: twenty-one volumes, Asia and Africa only",
   text: "Carl Ritter's Erdkunde grew to more than twenty thousand pages. He held the first German chair of geography at Berlin from 1820 and founded the Berlin Geographical Society in 1828, with Humboldt as a founding member. He saw the Earth as 'a cosmic individual' expressing a divine plan. Humboldt systematic, Ritter regional; both died in 1859, the end of geography's classical period.",
   view: { center: [13.405, 52.52], zoom: 5.8, pitch: 0, bearing: 0 },
   show: ["berlin"] },

 { id: "e3-prussia", ep: 3, year: 1874, date: "1871 · 1874", place: "Prussia · France",
   title: "A chair at every Prussian university",
   text: "After the Franco-Prussian War the military value of geography was clear and the schools needed teachers. The 1874 decree made geography an academic discipline, though the new professors, like the zoologist Ratzel, often had to work out what the subject was. By the mid-1880s Germany had twelve chairs; defeated France had founded chairs at Caen, Bordeaux and Lyon. Britain had none.",
   view: { center: [8, 50.5], zoom: 4.6, pitch: 0, bearing: 0 },
   show: ["leipzig", "berlin", "konigsberg", "breslau", "halle", "gottingen", "bonn", "kiel", "greifswald", "marburg", "munster", "caen", "bordeaux", "lyon", "sorbonne"],
   countries: { key: "ADM0_A3", values: ["DEU", "FRA"] } },

 { id: "e3-societies", ep: 3, year: 1830, date: "1821 → 1888", place: "Paris · Berlin · London · St Petersburg · New York · Washington",
   title: "Societies, science and a paying public",
   text: "Paris founded the first geographical society in 1821; Berlin 1828, London 1830, St Petersburg 1845, New York 1851. On 13 January 1888, thirty-three founders met at the Cosmos Club in Washington and created the National Geographic Society 'to increase and diffuse geographic knowledge'. In England it was the societies, not the universities, that paid to bring geography back.",
   view: { center: [-35, 48], zoom: 2.4, pitch: 0, bearing: 0 },
   show: ["paris", "berlin", "rgs", "st_petersburg", "ags_ny", "cosmos_club"] },

 { id: "e3-empire", ep: 3, year: 1884, date: "1880s–1900s", place: "Africa",
   title: "The baggage: empire",
   text: "Brian Hudson's landmark argument: the 'new geography' was promoted largely to serve imperialism, territorial expansion, exploitation, militarism and racist ideology. Plot the growth of chairs, societies and school geography and it tracks the Scramble for Africa. Victorian geography walked arm in arm with empire and with racial science.",
   view: { center: [18, 5], zoom: 2.6, pitch: 0, bearing: 0 },
   show: [], countries: { key: "CONTINENT", values: ["Africa"] } },

 { id: "e3-determinism", ep: 3, year: 1911, date: "1901 · 1911", place: "Leipzig · Worcester · New Haven",
   title: "The baggage: environmental determinism",
   text: "Ratzel introduced Lebensraum in 1901; via Haushofer it fed Nazi geopolitics. Semple opened her 1911 book with the school's slogan: 'Man is a product of the earth's surface.' At Yale, Huntington made climate the determinant of 'civilisation', with a map of 'climatic energy' that peaked, conveniently, around New Haven. Attacked as racist and empirically false, the strong form was marginal by mid-century.",
   view: { center: [-72.5, 41.9], zoom: 7, pitch: 0, bearing: 0 },
   show: ["new_haven", "clark", "leipzig"] },

 { id: "e3-mackinder", ep: 3, year: 1887, date: "1887 · 1904", place: "London · Oxford · the Heartland",
   title: "Mackinder and the New Geography",
   text: "On 31 January 1887 Halford Mackinder told the Royal Geographical Society that geography could bridge the gap 'between the natural sciences and the study of humanity'. That year he became Reader at Oxford, the start of continuous university geography in Britain. In 1904 'The Geographical Pivot of History' founded modern geopolitics. The pivot area shown here is approximate.",
   view: { center: [40, 52], zoom: 2.4, pitch: 0, bearing: 0 },
   show: ["rgs", "oxford"], areas: ["heartland"] },

 { id: "e3-america", ep: 3, year: 1903, date: "1784 · 1903 · 1904", place: "Charlestown · Harvard · Chicago",
   title: "America: textbooks first, departments later",
   text: "Jedidiah Morse's Geography Made Easy of 1784 had sold 400,000 copies by the 1830s. Academic geography grew out of geology: at Harvard, William Morris Davis's 'cycle of erosion' dominated a generation, and in 1904 he led the founding of the Association of American Geographers. In 1903 Chicago created the first department to offer the PhD, for twenty years the only one in the country.",
   view: { center: [-79, 41.5], zoom: 4.6, pitch: 0, bearing: 0 },
   show: ["charlestown", "harvard", "chicago_uni"] },

 { id: "e3-capes", ep: 3, year: 1893, date: "18th century → 1893", place: "Britain · United States",
   title: "Capes and bays",
   text: "School geography came before university geography everywhere, and arrived as 'special geography': gazetteer facts, memorised. The principal products of Peru. Teachers organised in the Geographical Association from 1893 and pushed rote learning aside for regional study and fieldwork. But the stereotype stuck: geography means memorising capitals. It would become a justification for pushing the subject aside.",
   view: { center: [-40, 48], zoom: 2.2, pitch: 0, bearing: 0 },
   show: ["rgs", "charlestown"], countries: { key: "ADM0_A3", values: ["GBR", "USA"] } },

 { id: "e3-hartshorne", ep: 3, year: 1939, date: "1939", place: "Madison, Wisconsin",
   title: "Respectable, serious, and almost defenceless",
   text: "Richard Hartshorne's The Nature of Geography defined the field as 'areal differentiation': the accurate, orderly description and interpretation of the variable character of the Earth's surface. Unique regions, not general laws. By 1939 the discipline's one big scientific idea had been discredited as racist pseudoscience, and in American schools the subject had already been folded into something else.",
   view: { center: [-89.4, 43.07], zoom: 6, pitch: 0, bearing: 0 },
   show: ["madison"] },

 /* ======================================================== EPISODE 4 */
 { type: "chapter", id: "ch4", ep: 4, year: 1916, span: "1916 – 2019",
   title: "How America Lost Geography",
   intro: "Over about a hundred years the United States takes the discipline's home apart, piece by piece: a committee report, a closure at Harvard, a cascade of departments, and a subject named 'core' and funded at zero.",
   view: { center: [-96, 38], zoom: 3, pitch: 0, bearing: 0 } },

 { id: "e4-survey2002", ep: 4, year: 2002, date: "2002 · 2006", place: "Iraq · Afghanistan · Louisiana · New York",
   title: "Second to last, ahead of only Mexico",
   text: "In 2002, on the eve of war, only 13% of young Americans could find Iraq on a map; 17% could find Afghanistan; half could find New York State; 11% could not find the United States. In 2006, after three years of war, 63% still couldn't find Iraq, and a third couldn't find Louisiana months after Katrina. It wasn't an accident. It was a series of decisions.",
   view: { center: [-20, 35], zoom: 1.6, pitch: 0, bearing: 0 },
   show: ["iraq_pt", "afghanistan_pt", "louisiana", "new_york_state"],
   countries: { key: "ADM0_A3", values: ["IRQ", "AFG"], accent: ["USA"] } },

 { id: "e4-1916", ep: 4, year: 1916, date: "1916 · 1918", place: "Washington, D.C.",
   title: "Decision one: a committee invents 'social studies'",
   text: "The National Education Association's Committee on Social Studies framed the field around citizenship, not disciplinary knowledge, and made geography one strand of a junior-high sequence. Diane Ravitch on the 1918 Cardinal Principles report: 'Neither history or geography survived as a subject.' By the mid-1970s only about 9% of American students in grades 7–12 were enrolled in a geography course.",
   view: { center: [-77.0369, 38.9072], zoom: 9, pitch: 40, bearing: 0 },
   show: ["nea_dc"] },

 { id: "e4-harvard", ep: 4, year: 1948, date: "1948", place: "Cambridge, Massachusetts",
   title: "Decision two: 'geography is not a university subject'",
   text: "Harvard shut its growing geography programme, and the press called the fight an 'academic war'. Neil Smith's reconstruction found that Isaiah Bowman, president of Johns Hopkins and the most powerful geographer in America, 'appears to have been more instrumental than is generally realised' in killing it, with a homophobic edge aimed at the chair, Derwent Whittlesey. Harvard did not grant another geography degree for roughly seventy years.",
   view: { center: [-73.5, 40.9], zoom: 6.3, pitch: 0, bearing: 0 },
   show: ["harvard", "johns_hopkins"] },

 { id: "e4-cascade", ep: 4, year: 1981, date: "1963 → 1986", place: "Penn · Yale · Michigan · Columbia · Chicago · Northwestern",
   title: "The cascade of closures",
   text: "Pennsylvania closed in 1963. Yale lingered 'near death' until 1967. Michigan's regents voted unanimously in 1981, citing austerity and a 'lack of centrality'. In 1986 Columbia, 'the most prodigious of the Ivy League', ended for lack of enrolment, and Chicago, the first department in the country, was demoted to a committee. Geography survived mainly at public and land-grant universities.",
   view: { center: [-80, 41.3], zoom: 5, pitch: 0, bearing: 0 },
   show: ["penn", "new_haven", "michigan", "columbia", "chicago_uni", "northwestern", "harvard", "clark"] },

 { id: "e4-why", ep: 4, year: 1960, date: "1948 – 1986", place: "The United States",
   title: "Why was geography so vulnerable?",
   text: "Determinism had tainted its scientific reputation. Hartshorne's regional paradigm was defensible intellectually and very hard to defend before a budget committee. Personal politics and a fight with geology over resources did the rest. All of this as the Second World War and the Cold War made knowledge of other lands more important than ever, and while geography was doing perfectly well in Britain. Weak schools, low enrolments, closed departments: round and round.",
   view: { center: [-96, 38], zoom: 3.2, pitch: 0, bearing: 0 },
   show: [], countries: { key: "ADM0_A3", values: ["USA"], accent: ["GBR"] } },

 { id: "e4-gallup", ep: 4, year: 1988, date: "1988", place: "Nine countries",
   title: "Measured illiteracy",
   text: "Gallup asked nearly eleven thousand adults in nine countries to locate sixteen places on a blank map. Swedes averaged 11.6; Americans 8.6, ahead of only Italy and Mexico. American 18-to-24-year-olds averaged 6.9, lower than any age group in any country, and the United States was the only country where the youngest did worse than the oldest. They scored below young Americans of 1947.",
   view: { center: [-20, 40], zoom: 1.7, pitch: 0, bearing: 0 },
   show: [], countries: { key: "ADM0_A3", values: ["SWE", "DEU", "JPN", "FRA", "CAN", "GBR", "ITA", "MEX"], accent: ["USA"] } },

 { id: "e4-naep", ep: 4, year: 2018, date: "1994 → 2019", place: "Washington, D.C.",
   title: "We threw away the thermometer",
   text: "The Nation's Report Card assessed geography in 1994, 2001, 2010, 2014 and 2018. In 2014, 27% of eighth-graders scored Proficient; in 2018, 25%, statistically no different from 1994. A quarter-century flat. Then in July 2019 the governing board dropped geography from the testing schedule through about 2030, citing budget. The National Council for the Social Studies said it had been 'completely blindsided'.",
   view: { center: [-77.0369, 38.9072], zoom: 5, pitch: 0, bearing: 0 },
   show: ["nea_dc"] },

 { id: "e4-core", ep: 4, year: 2001, date: "1989 · 2001 · 2004", place: "Charlottesville · Washington",
   title: "Named 'core', funded at zero",
   text: "The 1989 Charlottesville summit named geography among the core subjects. The 2001 No Child Left Behind Act listed it as one of nine 'core academic subjects', the only one with no dedicated federal funding. In fiscal 2004, history education got roughly $100 million; geography got nothing. The Five Themes of 1984, the state alliances, the Geography Bee of 1989 and the 1994 standards rebuilt frameworks, but not a stand-alone subject.",
   view: { center: [-77.8, 38.5], zoom: 7, pitch: 0, bearing: 0 },
   show: ["charlottesville", "nea_dc"] },

 { id: "e4-contrast", ep: 4, year: 2010, date: "1988 → 2014", place: "England · Germany",
   title: "A choice, not a fate",
   text: "In England geography became a foundation subject of the 1988 National Curriculum and was never folded into social studies; after the English Baccalaureate of 2010–11 the share of pupils taking GCSE geography rose from 26% to 36% in four years. In Germany, Erdkunde is an independent, generally compulsory subject. The United States was distinctive on three counts: 1916, 1948–86, and zero.",
   view: { center: [5, 52], zoom: 3.8, pitch: 0, bearing: 0 },
   show: [], countries: { key: "ADM0_A3", values: ["GBR", "DEU"] } },

 { id: "e4-transition", ep: 4, year: 1955, date: "1950s", place: "Seattle · Ottawa · Harvard",
   title: "Meanwhile, from an unexpected direction",
   text: "While all this was happening, graduate students in Seattle nicknamed the 'space cadets' were dragging geography into statistics and computing. In Canada, a geographer had a chance conversation on an aeroplane. And Harvard, the university that had closed geography in 1948, was about to open a laboratory that would help give birth to GIS.",
   view: { center: [-100, 46], zoom: 2.8, pitch: 0, bearing: 0 },
   show: ["seattle", "ottawa", "harvard"] },

 /* ======================================================== EPISODE 5 */
 { type: "chapter", id: "ch5", ep: 5, year: 1950, span: "1950 – 2005",
   title: "The Comeback",
   intro: "The comeback came from the discipline's own scientific wing, from a government land survey in Canada, and from the last place anyone expected: Harvard.",
   view: { center: [-100, 50], zoom: 2.6, pitch: 0, bearing: 0 } },

 { id: "e5-airplane", ep: 5, year: 1962, date: "1962 · 1963", place: "Ottawa",
   title: "A chance conversation on an aeroplane",
   text: "Canada wanted to know how good its land was, all of it, for farming, forestry, wildlife and recreation. Roger Tomlinson, working for an aerial-survey company, met the head of the Canada Land Inventory on a flight and proposed that a computer do the map overlay. His August 1963 estimate: about $8 million by hand, about $3 million by computer.",
   view: { center: [-75.6972, 45.4215], zoom: 5, pitch: 0, bearing: 0 },
   show: ["ottawa"] },

 { id: "e5-schaefer", ep: 5, year: 1953, date: "1953 · 1955", place: "Iowa City · Madison",
   title: "Exceptionalism in Geography",
   text: "Fred Schaefer's posthumous 1953 paper attacked Hartshorne head on: geography is not exceptional among the sciences and should look for general 'morphological laws' about how things are arranged in space. Hartshorne fired back in 1955. The question for the next two decades: is geography about the unique, or about the general?",
   view: { center: [-90.4, 42.4], zoom: 6, pitch: 0, bearing: 0 },
   show: ["iowa_city", "madison"] },

 { id: "e5-spacecadets", ep: 5, year: 1958, date: "1954 → 1965", place: "Seattle · Bristol · Lund",
   title: "The space cadets",
   text: "At the University of Washington, in a department that advertised its IBM computer, Garrison taught the first advanced statistics course in American geography in 1954. His students, Berry, Bunge, Getis, Marble, Morrill, Nystuen, Tobler, became the who's who of spatial science. Tobler's 'Automation and Cartography' of 1959 first treated the map as part of a data-processing system. Haggett carried the revolution to Britain, Hägerstrand to Sweden.",
   view: { center: [-60, 52], zoom: 2.2, pitch: 0, bearing: 0 },
   show: ["uw_seattle", "bristol", "lund"] },

 { id: "e5-overlay", ep: 5, year: 1969, date: "1912 · 1950 · 1969", place: "Düsseldorf · London · Philadelphia",
   title: "The sieve map and the layer cake",
   text: "Overlay is older than computers: implicit in a 1912 Düsseldorf design competition, spelled out by Jacqueline Tyrwhitt in 1950, and made famous by Ian McHarg's Design with Nature in 1969, stacking transparencies of soils, slope, vegetation and land value. McHarg's layer cake is the direct ancestor of GIS overlay, but his book offered no way to computerise it. Tomlinson had been doing exactly that for six years.",
   view: { center: [-35, 47], zoom: 2.4, pitch: 0, bearing: 0 },
   show: ["dusseldorf", "london_tyrwhitt", "penn"] },

 { id: "e5-cgis", ep: 5, year: 1968, date: "1963 → 1971", place: "Canada",
   title: "The first operational GIS",
   text: "The Canada Geographic Information System digitised, stored, analysed and displayed the Land Inventory's maps at 1:50,000: soils, agriculture, recreation, wildlife, forestry, land use. It could overlay, measure area and scan maps in. Its split between where something is and what it is shaped most GIS that followed. Tomlinson's 1968 paper is the standard citation for the phrase; the IEEE dedicated a milestone to CGIS in 2022.",
   view: { center: [-96, 58], zoom: 2.7, pitch: 0, bearing: 0 },
   show: ["ottawa"], countries: { key: "ADM0_A3", values: ["CAN"] } },

 { id: "e5-harvardlab", ep: 5, year: 1965, date: "1965 → 1991", place: "Harvard Graduate School of Design",
   title: "Seventeen years after closing geography, Harvard builds its future",
   text: "Howard Fisher moved SYMAP to Harvard in 1965 with a $294,000 Ford Foundation grant and founded the Laboratory for Computer Graphics. SYMAP became the dominant thematic-mapping program in the world; GRID in 1969 was arguably the first general-purpose raster GIS; ODYSSEY prototyped the modern vector GIS. Alumni included Jack Dangermond and Scott Morehouse. 'Whatever origin story of GIS you hear, you will find a connection to the Harvard Laboratory.'",
   view: { center: [-71.114, 42.376], zoom: 12.5, pitch: 50, bearing: -20 },
   show: ["harvard_gsd"] },

 { id: "e5-census", ep: 5, year: 1970, date: "1970 · 1990", place: "Suitland, Maryland",
   title: "Topology in a federal statistical agency",
   text: "For the 1970 census the Bureau built DIME: intersections became nodes, street segments became lines carrying the address ranges on their left and right. For 1990, with the USGS, it built TIGER, the first nationwide digital map of roads, boundaries and water. Free extracts became the raw material for geocoding, routing and business mapping. The street network under this view is the same idea, drawn from OpenStreetMap.",
   view: { center: [-76.93, 38.846], zoom: 13, pitch: 55, bearing: 30 },
   show: ["census_suitland"] },

 { id: "e5-commercial", ep: 5, year: 1982, date: "1969 → 1986", place: "Redlands · Huntsville · Troy",
   title: "Commercialisation",
   text: "Jack and Laura Dangermond founded Esri in Redlands in 1969 with $1,100 of savings. ARC/INFO married vector geometry to a relational-style attribute database around 1982 and became the dominant platform; ArcView 1991, ArcGIS 1999, ArcGIS Online 2012. Intergraph delivered interactive mapping to local governments by 1973; MapInfo brought desktop mapping to PCs in 1986. Each step down in computing cost multiplied users by roughly ten.",
   view: { center: [-100, 38], zoom: 3.3, pitch: 0, bearing: 0 },
   show: ["redlands", "huntsville", "troy_ny"] },

 { id: "e5-space", ep: 5, year: 1972, date: "1972 · 1983 · 2000", place: "Vandenberg · Sakhalin",
   title: "Landsat and GPS",
   text: "Landsat 1 launched on 23 July 1972, beginning a continuous civilian record of the Earth's surface. GPS began in 1973; civilian access was promised after Korean Air Lines Flight 007 was shot down in 1983. For years the civilian signal was deliberately degraded to about a hundred metres. On 1–2 May 2000 Selective Availability was switched off and civilian GPS got roughly ten times more accurate overnight.",
   view: { center: [-170, 40], zoom: 1.8, pitch: 0, bearing: 0 },
   show: ["vandenberg", "moneron"], raster: "bluemarble" },

 { id: "e5-giscience", ep: 5, year: 1992, date: "1988 · 1992 · 1997", place: "Santa Barbara · Buffalo · Maine",
   title: "The technology becomes a science",
   text: "In 1988 the NSF funded the National Center for Geographic Information and Analysis across three campuses; its Core Curriculum was used worldwide. Goodchild's 1992 paper 'Geographical information science' made geographic information the subject of a science, not a tool-building exercise. A leading journal changed one word of its name in 1997: Systems became Science. By the mid-1990s more than 800 departments offered a GIS course.",
   view: { center: [-100, 40], zoom: 3.1, pitch: 0, bearing: 0 },
   show: ["ucsb", "buffalo", "orono"] },

 { id: "e5-giswars", ep: 5, year: 1993, date: "1990 → 1995", place: "Friday Harbor, Washington",
   title: "The GIS wars and the peace talks",
   text: "Peter Taylor dismissed GIS as 'naive empiricism' in 1990; Stan Openshaw replied that it could 'put Humpty-Dumpty back together again'. In November 1993 a workshop at Friday Harbor put critics and practitioners in one room. Pickles's Ground Truth in 1995 asked about surveillance, military roots and power. Out of the critique grew critical GIS, public-participation GIS and feminist GIS. A split 'was avoided'.",
   view: { center: [-123.0177, 48.5343], zoom: 8, pitch: 30, bearing: 0 },
   show: ["friday_harbor"] },

 { id: "e5-enclosure", ep: 5, year: 2004, date: "Early 2000s", place: "Everywhere, for a few",
   title: "A new enclosure",
   text: "By the early 2000s geography had a technical core, a science, a job market and a conscience. What it did not have was everyone else. GIS was expensive, specialised and locked inside licensed software and trained professionals. Then, in less than a year, that started to come apart.",
   view: { center: [-30, 30], zoom: 1.5, pitch: 0, bearing: 0 },
   show: [] },

 /* ======================================================== EPISODE 6 */
 { type: "chapter", id: "ch6", ep: 6, year: 2004, span: "1982 – 2026",
   title: "The Map Goes Public",
   intro: "The map, the software, the data and finally the computing become something anyone can use. The story brings us back, at the very end, to where we started.",
   view: { center: [0, 20], zoom: 1.6, pitch: 0, bearing: 0 } },

 { id: "e6-haiti", ep: 6, year: 2010, date: "12 January 2010", place: "Port-au-Prince, Haiti",
   title: "Anybody with a mouse and a web browser",
   text: "After the magnitude-7 earthquake, the detailed open street map rescue teams needed did not exist. Within hours OpenStreetMap volunteers started building one; within a month more than 600 remote mappers had traced a nearly complete basemap from post-quake imagery. It became the default for search-and-rescue, the UN, the World Bank and the U.S. Marines. The streets under this view are OpenStreetMap data.",
   view: { center: [-72.3388, 18.5944], zoom: 12, pitch: 45, bearing: 0 },
   show: ["port_au_prince"] },

 { id: "e6-2005", ep: 6, year: 2005, date: "February – June 2005", place: "Mountain View, California",
   title: "The year mapping went public",
   text: "Google Maps launched on 8 February 2005: you could grab the map and drag it. Mashups like housingmaps.com appeared before any official API; the API followed in June, and Google Earth on 28 June. By 2007 Goodchild's 'Citizens as sensors' had named volunteered geographic information, opening with Waldseemüller's 1507 map as an early example of amateurs producing geographic knowledge.",
   view: { center: [-122.0839, 37.3861], zoom: 9, pitch: 0, bearing: 0 },
   show: ["mountain_view"] },

 { id: "e6-osm", ep: 6, year: 2004, date: "9 August 2004", place: "Regent's Park, London",
   title: "Wikipedia, for maps",
   text: "Steve Coast, a student at UCL, registered openstreetmap.org and that December traced the first street by cycling round Regent's Park with a GPS unit. By its twentieth anniversary OSM had more than ten million registered contributors and about a hundred thousand active each month. Its data sits under products from Meta, Microsoft, Apple and most humanitarian agencies.",
   view: { center: [-0.1565, 51.5313], zoom: 13.5, pitch: 50, bearing: 10 },
   show: ["regents_park", "ucl"] },

 { id: "e6-grass", ep: 6, year: 1985, date: "1982 · 1985 · 2000", place: "Champaign, Illinois",
   title: "The oldest GIS still in development is an open one",
   text: "The U.S. Army's Construction Engineering Research Laboratory built GRASS from 1982 to manage military lands under environmental law, released it in 1985 as public-domain software, and in 1998 handed it to an international community. In 2000 Frank Warmerdam released GDAL 1.0, the universal translator that now sits under QGIS, R, the Python stack, and inside ArcGIS and Google Earth.",
   view: { center: [-88.2434, 40.1164], zoom: 6, pitch: 0, bearing: 0 },
   show: ["champaign"] },

 { id: "e6-stack", ep: 6, year: 2002, date: "2001 → 2006", place: "Victoria · Alaska · Chicago",
   title: "A complete open stack falls into place",
   text: "PostGIS, from a small firm in Victoria, gave the open world a serious spatial database in 2001. In February 2002 Gary Sherman in Alaska started a side project 'driven primarily by my after-hours desire to view PostGIS data on my Linux box'. It became QGIS. The Open Source Geospatial Foundation was founded in 2006. GeoPandas and rasterio followed from 2013; Python became the common language of cloud geospatial analysis.",
   view: { center: [-125, 52], zoom: 2.6, pitch: 0, bearing: 0 },
   show: ["victoria_bc", "anchorage", "chicago"] },

 { id: "e6-landsat", ep: 6, year: 2008, date: "October 2008 · 2014", place: "Sioux Falls · Frascati",
   title: "Stream the planet: free Landsat and Sentinel",
   text: "In the 1980s a single Landsat scene could cost about $4,500; in 1999, around $600. In October 2008 the USGS made the whole archive free and downloads rose more than a hundredfold. One estimate puts the annual benefit at a hundred times the lost revenue; a 2018 proposal to charge again was dropped. Europe's Copernicus Sentinels, from 2014, are 'free, full and open'. The imagery behind this view is NASA's Blue Marble.",
   view: { center: [-40, 42], zoom: 2.2, pitch: 0, bearing: 0 },
   show: ["eros", "esrin"], raster: "bluemarble" },

 { id: "e6-cloudnative", ep: 6, year: 2017, date: "2015 → 2023", place: "Boulder, Colorado",
   title: "Stream, don't download",
   text: "Leave the data where it is and fetch only the bytes you need. Cloud-Optimised GeoTIFF was first used at scale when Amazon hosted Landsat in 2015. STAC was born at an October 2017 sprint in Boulder: 25 people from 14 organisations. GeoParquet arrived in 2023. And PMTiles packs a whole tileset into one static file: the country boundaries on this page are read by range request straight from GitHub Pages, with no map server.",
   view: { center: [-105.2705, 40.015], zoom: 5.5, pitch: 0, bearing: 0 },
   show: ["boulder"] },

 { id: "e6-democratized", ep: 6, year: 2006, date: "2006 → 2024", place: "Norway, and everywhere else",
   title: "Democratised, with real limits",
   text: "A 1990s GIS seat cost thousands in licences plus a workstation. Today QGIS, PostGIS, GDAL, Python, petabytes of open imagery and free cloud tiers cost nothing. Norway's 2006 curriculum required GIS. Students with poor bandwidth can run continental analyses in a browser notebook. The limits: hardware, teacher training and timetable time, steepest outside wealthy districts, and the risk of a new enclosure when hosted platforms vanish.",
   view: { center: [10, 55], zoom: 2.8, pitch: 0, bearing: 0 },
   show: ["oslo"], countries: { key: "ADM0_A3", values: ["NOR"] } },

 { id: "e6-geoai", ep: 6, year: 2026, date: "2023 → 2026", place: "In orbit",
   title: "A foundation model, in orbit, chosen because it is open",
   text: "In July 2023 NASA and IBM released Prithvi, an open-source foundation model trained on Landsat and Sentinel imagery; a second version followed at the end of 2024. In 2026 it became the first geospatial foundation model demonstrated on a satellite. The Cloud-Native Geospatial Forum's first conference in 2025 drew Google, Microsoft, Amazon, Esri, Planet, the World Bank, the USGS and NVIDIA. The open stack is the infrastructure now.",
   view: { center: [-86.65, 34.65], zoom: 1.3, pitch: 0, bearing: 0 },
   show: ["huntsville"], raster: "bluemarble" },

 { id: "e6-arc", ep: 6, year: 2026, date: "17,000 BCE → 2026", place: "Back to London, Majuro and Tasiilaq",
   title: "The full arc",
   text: "Spatial thinking began as a survival skill written into the hippocampus. States codified it where the stakes were highest. Scholars measured it; empires gridded it; universities professionalised it; one country squeezed it out of school. GIS brought it back for specialists, and the open, cloud-native turn handed it to anyone. The capability was always human. The history of geography is the history of how widely that capability has been shared.",
   view: { center: [-30, 45], zoom: 1.5, pitch: 0, bearing: 0 },
   show: ["charing_cross", "majuro", "tasiilaq"] },

 { type: "end", id: "end", ep: 6, year: 2026,
   view: { center: [0, 25], zoom: 1.3, pitch: 0, bearing: 0 } }
];
