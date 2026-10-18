/* From Songlines to the Cloud — pictures of the maps the story refers to.
 *
 * Keyed by step id (see js/chapters.js). Each step lists one or more images:
 *   file     filename under img/maps/ (800px-wide JPEG kept in the repository)
 *   title    what the map is
 *   caption  what it shows, and why the story mentions it
 *   credit   author / holder and licence, shown under the picture and in the lightbox
 *   commons  Wikimedia Commons file title; used for the "source" link and the
 *            high-resolution copy the lightbox loads (Special:FilePath?width=2000)
 *   source   alternative source URL when the image is not on Commons
 *
 * All images are public domain or openly licensed (CC BY, CC BY-SA, CC0).
 * To add a picture: drop a JPEG in img/maps/, add an entry here, done.
 */
window.MAPS = {
 /* ------------------------------------------------------------ EPISODE 1 */
 "e1-stickcharts": [
  { file: "stick-chart-rebbelib.jpg",
    title: "Marshallese stick chart (rebbelib type)",
    caption: "A rebbelib covers a whole island chain. Cowrie shells are islands; the straight and curved midribs show the dominant swells and how they bend and meet around land. Studied ashore, never taken to sea.",
    credit: "Library of Congress, Geography and Map Division. Public domain.",
    commons: "File:Marshall Islands stick chart, Rebbelib type. LOC 2010586182.jpg" }
 ],
 "e1-ammassalik": [
  { file: "ammassalik-wooden-maps.jpg",
    title: "The Ammassalik wooden maps, as published by Gustav Holm (1887)",
    caption: "Left: a stretch of the east coast north of Ammassalik, carved so that one edge runs up the coast and the other runs back; the notches are fjords, headlands and places to haul a boat over. Right: a chain of offshore islands. Readable by touch, and they float.",
    credit: "Engraving from Meddelelser om Grønland vol. 10 (1887), after the carvings by Kunit. Public domain.",
    commons: "File:Holm1887p250 Trækort.png" }
 ],
 "e1-lascaux": [
  { file: "lascaux-hall-of-bulls.jpg",
    title: "The Hall of the Bulls, Lascaux",
    caption: "The painted chamber in which a cluster of dots above one aurochs has been read as the Pleiades, and so as a star map. Nothing else in the cave supports the reading. A pattern is not yet a map.",
    credit: "Photograph, public domain (Wikimedia Commons).",
    commons: "File:Lascaux painting.jpg" }
 ],
 "e1-catalhoyuk": [
  { file: "catalhoyuk-mural.jpg",
    title: "The Çatalhöyük wall painting: town plan or leopard skin?",
    caption: "The mural as displayed in the Museum of Anatolian Civilizations, Ankara. The rows of boxes have been read as houses and the spotted shape above as an erupting Hasan Dağ. Stephanie Meece reads the 'volcano' as the site's familiar leopard-skin motif.",
    credit: "Photograph by Dosseman, CC BY-SA 4.0.",
    commons: "File:Museum of Anatolian Civilizations Çatalhöyük mural City or Leopard skin All in 2019 01.jpg" }
 ],
 "e1-babylon": [
  { file: "babylonian-map-of-the-world.jpg",
    title: "The Babylonian Map of the World (Imago Mundi)",
    caption: "Clay tablet from Sippar, 6th century BCE, in the British Museum. Babylon is the rectangle on the Euphrates near the centre; the double ring is the 'Bitter River', the ocean; the triangles beyond it point to distant regions.",
    credit: "Photograph by Osama Shukir Muhammed Amin, CC BY-SA 4.0.",
    commons: "File:The Babylonian map of the world, from Sippar, Mesopotamia..JPG" },
  { file: "nippur-plan.jpg",
    title: "Plan of the city of Nippur, c. 1400 BCE",
    caption: "A workaday map, older than the world map: the city wall with its gates, the Euphrates, canals and the temple of Enlil, drawn to a consistent scale. Published by Hilprecht in 1903.",
    credit: "Photograph from H. V. Hilprecht, Explorations in Bible Lands (1903). Public domain.",
    commons: "File:Clay tablet containing plan of Nippur (Hilprecht EBL 1903).jpg" }
 ],
 "e1-turin": [
  { file: "turin-papyrus-map.jpg",
    title: "The Turin Papyrus Map, c. 1150 BCE",
    caption: "Amennakhte's map of the Wadi Hammamat for Ramesses IV's quarrying expedition: the valley roads, the gold-mine settlement, and hills coloured by rock type, pink for the gold-bearing granite. The oldest surviving geological map.",
    credit: "Museo Egizio, Turin. Public domain.",
    commons: "File:Geography 032 - Turin Papyrus Map.jpg" }
 ],

 /* ------------------------------------------------------------ EPISODE 2 */
 "e2-eratosthenes": [
  { file: "eratosthenes-world.jpg",
    title: "Eratosthenes' world, as reconstructed in the 19th century",
    caption: "No map by Eratosthenes survives. This reconstruction by E. H. Bunbury (1883) shows the inhabited world he described, with the parallel through Rhodes and the meridian through Alexandria and Syene that his measurement rests on.",
    credit: "E. H. Bunbury, A History of Ancient Geography (1883). Public domain.",
    commons: "File:Mappa di Eratostene.jpg" }
 ],
 "e2-miletus": [
  { file: "anaximander-world.jpg",
    title: "Anaximander's world (reconstruction)",
    caption: "The earliest Greek world map, c. 550 BCE, as modern scholars imagine it: a disc with Greece near the centre, ringed by Ocean.",
    credit: "Reconstruction by Bibi Saint-Pol. Public domain.",
    commons: "File:Anaximander world map (mul).svg" },
  { file: "hecataeus-world.jpg",
    title: "Hecataeus' world (reconstruction)",
    caption: "Hecataeus of Miletus improved Anaximander's map and wrote the Circuit of the Earth to go with it. Europe, Asia and Libya, still inside a circular Ocean.",
    credit: "Reconstruction by Bibi Saint-Pol. Public domain.",
    commons: "File:Hecataeus world map-en.svg" },
  { file: "herodotus-world.jpg",
    title: "The world according to Herodotus (reconstruction)",
    caption: "Herodotus laughed at the perfectly round Ocean of his predecessors. His own world is lopsided, bounded by what travellers actually reported.",
    credit: "Reconstruction by Bibi Saint-Pol. Public domain.",
    commons: "File:Herodotus world map-en.svg" }
 ],
 "e2-ptolemy": [
  { file: "ptolemy-ulm-1482.jpg",
    title: "Ptolemy's world map, printed at Ulm in 1482",
    caption: "No original Ptolemaic map survives; every one is a later rendering of his coordinate table. Note the enclosed Indian Ocean and the Asia that stretches far to the east, the 'bug' Columbus would rely on.",
    credit: "Woodcut after Nicolaus Germanus, Ulm 1482. Public domain.",
    commons: "File:Ptolemy map 15th century.jpg" }
 ],
 "e2-china": [
  { file: "yu-ji-tu.jpg",
    title: "The Yu Ji Tu ('Map of the Tracks of Yu'), 1136",
    caption: "Rubbing from the stele in the Stele Forest, Xi'an. China is laid over a grid of squares of a hundred li a side; the coastline, the Yellow River and the Yangtze are immediately recognisable.",
    credit: "Rubbing, public domain (Wikimedia Commons).",
    commons: "File:Yuji tu - enhanced contrast.png" }
 ],
 "e2-islam": [
  { file: "khwarizmi-nile.jpg",
    title: "The Nile, from al-Khwārizmī's Kitāb ṣūrat al-arḍ",
    caption: "The earliest surviving map of the Nile, from a 1036 copy of al-Khwārizmī's 'Picture of the Earth' (c. 833), his revision of Ptolemy. South is roughly at the top; the river rises in the Mountains of the Moon.",
    credit: "Strasbourg, Bibliothèque nationale et universitaire. Public domain.",
    commons: "File:Earliest extant map of the Nile, in al-Khwārazmī’s Kitāb ṣūrat al- arḍ.jpg" }
 ],
 "e2-idrisi": [
  { file: "idrisi-world-south-up.jpg",
    title: "Al-Idrīsī's circular world map, south at the top",
    caption: "A later manuscript copy of the world map from the Book of Roger (1154), in its original orientation: Arabia and the Mediterranean are upper centre, Europe at the bottom right, Africa across the top.",
    credit: "Later manuscript copy, Bodleian Library, Oxford. Public domain.",
    commons: "File:Al-Idrisi's world map.JPG" },
  { file: "idrisi-tabula-rogeriana.jpg",
    title: "The seventy sectional maps assembled: the Tabula Rogeriana",
    caption: "Konrad Miller's 1929 reconstruction of the full map, assembled from the seventy sections and turned north-up with the names transliterated. From Iberia to Korea; the most accurate map of its day.",
    credit: "Reconstruction by Konrad Miller (1929). Public domain.",
    commons: "File:TabulaRogeriana upside-down.jpg" }
 ],
 "e2-medieval": [
  { file: "hereford-mappa-mundi.jpg",
    title: "The Hereford Mappa Mundi, c. 1300",
    caption: "Theology in map form: east at the top, Jerusalem at the centre, the Mediterranean running down the middle, some five hundred drawings of cities, peoples, beasts and Bible scenes on one sheet of vellum.",
    credit: "Hereford Cathedral. Public domain.",
    commons: "File:Hereford-Karte.jpg" },
  { file: "carte-pisane.jpg",
    title: "The Carte Pisane, the oldest surviving portolan chart",
    caption: "Late 13th century, probably Genoese. The Mediterranean coasts are drawn with startling accuracy, criss-crossed by rhumb lines from the compass roses. A sailor's question: how do I make port?",
    credit: "Bibliothèque nationale de France. Public domain.",
    commons: "File:Carte Pisane Portolan.jpg" },
  { file: "catalan-atlas.jpg",
    title: "The Catalan Atlas, Majorca, 1375",
    caption: "The portolan tradition at its richest, attributed to Abraham Cresques of Palma: accurate coasts, compass lines and, inland, caravans, kings and the gold of Mali.",
    credit: "Bibliothèque nationale de France. Public domain.",
    commons: "File:1375 Atlas Catalan Abraham Cresques.jpg" }
 ],
 "e2-florence": [
  { file: "ptolemy-bologna-1477.jpg",
    title: "The world map of the Bologna Ptolemy, 1477",
    caption: "From the first printed edition of the Geography to include maps, engraved on copper. What Europe got was the toolkit: a graticule of latitude and longitude and a projection to draw it on.",
    credit: "Engraving, Bologna 1477. Public domain.",
    commons: "File:First Map of the Bologna Ptolemy.png" }
 ],
 "e2-columbus": [
  { file: "waldseemuller-1507.jpg",
    title: "Waldseemüller's Universalis Cosmographia, 1507",
    caption: "Twelve sheets printed at Saint-Dié-des-Vosges: the first map to use the name 'America', written across what is now Brazil, and the first to show the new lands with an ocean on their far side.",
    credit: "Library of Congress. Public domain.",
    commons: "File:Waldseemuller map 2.jpg" },
  { file: "cantino-planisphere.jpg",
    title: "The Cantino planisphere, 1502",
    caption: "What the secret master charts looked like: a copy of the Portuguese padrão smuggled to Italy by Alberto Cantino. Brazil, the African coast, India and the Tordesillas line, ten years after Columbus.",
    credit: "Biblioteca Estense, Modena. Public domain.",
    commons: "File:Cantino planisphere (1502).jpg" }
 ],
 "e2-mercator": [
  { file: "mercator-1569.jpg",
    title: "Mercator's world map of 1569, all eighteen sheets",
    caption: "'Nova et aucta orbis terrae descriptio ad usum navigantium emendate accommodata': a new description of the Earth, corrected for the use of sailors. Parallels spread apart toward the poles so that a compass course is a straight line.",
    credit: "Composite of the eighteen sheets of the Basel copy, photographed by Wilhelm Krücken. Public domain.",
    commons: "File:Mercator 1569 world map composite.jpg" }
 ],
 "e2-cassini": [
  { file: "cassini-triangles.jpg",
    title: "The triangulation of France, 1744",
    caption: "The 'new map of the principal triangles that serve as the foundation of the geometric description of France', by Maraldi and Cassini de Thury: about 800 measured triangles that every later sheet hangs on.",
    credit: "Bibliothèque nationale de France. Public domain.",
    commons: "File:Nouvelle Carte qui comprend les principaux triangles qui servent de Fondement à la description géométrique de la France - Maraldi et Cassini de Thury ; Aubin scrip ; Gravé par Dheulland - btv1b53119518s.jpg" },
  { file: "cassini-paris-sheet.jpg",
    title: "Sheet 1 of the Carte de Cassini: Paris and its surroundings, 1756",
    caption: "The first of about 180 sheets at 1:86,400, 'levée par ordre du Roy'. Roads, woods, villages and churches, drawn from the triangulation. In 1793 the plates were seized for the war office.",
    credit: "Scan of the 1756 sheet, CC BY-SA 4.0 (Wikimedia Commons).",
    commons: "File:1756 – Carte des Environs de Paris. Première feuille, dressée par Cassini.jpg" }
 ],
 "e2-cook": [
  { file: "cook-new-zealand.jpg",
    title: "Cook's chart of New Zealand, 1770",
    caption: "Surveyed from the Endeavour in 1769 and 1770 and pinned to the world grid by latitude and lunar longitude. Two islands with a strait between them, where a Dutch sketch had shown a single coast.",
    credit: "Engraving after James Cook, 1770. Public domain.",
    commons: "File:Cook chart of New Zealand.jpg" }
 ],

 /* ------------------------------------------------------------ EPISODE 3 */
 "e3-humboldt": [
  { file: "humboldt-naturgemaelde.jpg",
    title: "Humboldt's Naturgemälde of Chimborazo, 1807",
    caption: "The 'tableau physique' from the Essay on the Geography of Plants: a cross-section of the Andes with the plant zones written on the mountain and columns of temperature, pressure, humidity and snowline beside it. Layers stacked on elevation.",
    credit: "Zentralbibliothek Zürich. Public domain.",
    commons: "File:Zentralbibliothek Zürich - Ideen zu einer Geographie der Pflanzen nebst einem Naturgemälde der Tropenländer - 000012142.jpg" }
 ],
 "e3-empire": [
  { file: "scramble-for-africa.jpg",
    title: "Africa in 1880 and in 1913",
    caption: "The Scramble for Africa in two frames. The growth of chairs, societies and school geography in Europe tracks this partition almost exactly.",
    credit: "Map by Somebody500, CC BY-SA 4.0.",
    commons: "File:Scramble-for-Africa-1880-1913-v2.png" }
 ],
 "e3-determinism": [
  { file: "huntington-climatic-energy-1915.jpg",
    title: "Huntington's 'climatic energy' and 'civilization' maps, 1915",
    caption: "Figures 30 and 31 of Civilization and Climate. Top: 'the distribution of human energy on the basis of climate'. Bottom: 'the distribution of civilization', from a poll of fifty experts. Both peak in north-west Europe and the north-eastern United States, around New Haven.",
    credit: "Ellsworth Huntington, Civilization and Climate (Yale University Press, 1915), scan by Cornell University Library via the Internet Archive. Public domain.",
    source: "https://archive.org/details/cu31924032360871/page/n217" }
 ],
 "e3-mackinder": [
  { file: "mackinder-pivot-1904.jpg",
    title: "'The Natural Seats of Power', from Mackinder's 1904 lecture",
    caption: "The map published with 'The Geographical Pivot of History': the Pivot Area in the heart of Eurasia, the Inner Crescent around it and the Outer Crescent of sea powers beyond. Modern geopolitics on one sheet.",
    credit: "Halford Mackinder, The Geographical Journal, 1904. Public domain.",
    commons: "File:Heartland.png" }
 ],

 /* ------------------------------------------------------------ EPISODE 5 */
 "e5-harvardlab": [
  { file: "symap-outputs.jpg",
    title: "SYMAP output, Greater Boston",
    caption: "The same data drawn four ways by SYMAP on a line printer: conformant (by zone), contour, proximal and trend surface. Characters overstruck to make shades of grey; the dominant thematic-mapping program of its day.",
    credit: "Harvard Laboratory for Computer Graphics, Lab-Log 1980. CC0.",
    commons: "File:SYMAP - LAB-LOG 1980.png" }
 ],
 "e5-census": [
  { file: "tiger-roads.jpg",
    title: "Every public road in the contiguous United States, from TIGER",
    caption: "Nothing but the road segments of the Census Bureau's TIGER file, the descendant of DIME: nodes, lines and the address ranges on either side. The free extracts became the raw material of geocoding and routing.",
    credit: "Map by WClarke from 2018 TIGER/Line data, CC BY-SA 4.0.",
    commons: "File:Public Roads of the contiguous United States, from the 2018 TIGER GIS dataset.png" }
 ],
 "e5-space": [
  { file: "landsat1-first-light.jpg",
    title: "Landsat 1's first image, 25 July 1972",
    caption: "The first scene from the Multispectral Scanner, two days after launch: Dallas and Fort Worth in false colour, vegetation shown red. The start of a continuous civilian record of the Earth's surface.",
    credit: "USGS / NASA. Public domain.",
    commons: "File:Landsat 1 First Light Image (1972-07-25).jpg" }
 ],

 /* ------------------------------------------------------------ EPISODE 6 */
 "e6-haiti": [
  { file: "osm-haiti-before.jpg",
    title: "OpenStreetMap, Port-au-Prince, before 12 January 2010",
    caption: "The capital as the volunteer map showed it on the morning of the earthquake: a few main roads and almost nothing else.",
    credit: "Screenshot by Mikel Maron, CC BY 2.0. Map data © OpenStreetMap contributors.",
    commons: "File:OpenStreetMap Haiti 2010 pre-earthquake.png" },
  { file: "osm-haiti-after.jpg",
    title: "The same view four days later",
    caption: "By 16 January, traced from post-quake imagery by remote volunteers: streets, neighbourhoods and the camps. This became the basemap for search-and-rescue teams, the UN and the World Bank.",
    credit: "Screenshot by Mikel Maron, CC BY 2.0. Map data © OpenStreetMap contributors.",
    commons: "File:OpenStreetMap Haiti 20090114.png" }
 ],
 "e6-2005": [
  { file: "waldseemuller-1507.jpg",
    title: "Waldseemüller's 1507 map, again",
    caption: "Goodchild opened 'Citizens as sensors' (2007) with this map: a priest and a schoolmaster in a small Vosges town, compiling the world from other people's reports. Volunteered geographic information, five centuries early.",
    credit: "Library of Congress. Public domain.",
    commons: "File:Waldseemuller map 2.jpg" }
 ],
 "e6-osm": [
  { file: "osm-regents-park.jpg",
    title: "Regent's Park in OpenStreetMap",
    caption: "Where the project began: Steve Coast traced the first street here by cycling round the park with a GPS unit in December 2004. The map is now drawn from millions of such traces.",
    credit: "Rendering from OpenStreetMap data, CC BY-SA 2.0. © OpenStreetMap contributors.",
    commons: "File:Regent's Park London Map.jpg" }
 ]
};
