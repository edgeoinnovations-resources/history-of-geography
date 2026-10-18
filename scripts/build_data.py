#!/usr/bin/env python3
"""Build places.geojson, routes.geojson and areas.geojson for the storymap.
Run: python3 -I build_data.py <output_dir>
Coordinates are [lon, lat] WGS84. Routes are densified along great circles so
they render correctly on the globe projection.
"""
import json, math, sys

OUT = sys.argv[1]

# ---------------------------------------------------------------- gazetteer
# id: (lon, lat, label, kind)
P = {
 # Episode 1
 "charing_cross": (-0.1276, 51.5074, "Charing Cross, London", "city"),
 "ucl": (-0.1340, 51.5246, "University College London", "institution"),
 "berkeley": (-122.2585, 37.8719, "Berkeley (Tolman, 1948)", "institution"),
 "trondheim": (10.3951, 63.4305, "Trondheim (the Mosers, 2005)", "institution"),
 "honolulu": (-157.8583, 21.3069, "Hawaiʻi", "place"),
 "papeete": (-149.5665, -17.5350, "Tahiti", "place"),
 "satawal": (147.0333, 7.3667, "Satawal (Mau Piailug)", "place"),
 "majuro": (171.3803, 7.0897, "Majuro, Marshall Islands", "place"),
 "bikini": (165.3833, 11.6000, "Bikini Atoll", "place"),
 "umivik": (-40.58, 64.32, "Umivik (Kunit, 1885)", "place"),
 "tasiilaq": (-37.6368, 65.6145, "Ammassalik / Tasiilaq", "place"),
 "nuuk": (-51.7216, 64.1836, "Greenland National Museum, Nuuk", "institution"),
 "heavitree_gap": (133.8731, -23.7236, "Heavitree Gap, Alice Springs", "place"),
 "byron_bay": (153.6167, -28.6431, "Byron Bay", "place"),
 "carpentaria": (139.5, -14.5, "Gulf of Carpentaria", "place"),
 "snowy_mountains": (148.26, -36.45, "Snowy Mountains", "place"),
 "lascaux": (1.1764, 45.0539, "Lascaux", "site"),
 "catalhoyuk": (32.8258, 37.6664, "Çatalhöyük", "site"),
 "hasan_dag": (34.1667, 38.1278, "Hasan Dağ", "place"),
 "sippar": (44.2533, 33.0578, "Sippar", "site"),
 "babylon": (44.4208, 32.5364, "Babylon", "site"),
 "nippur": (45.2308, 32.1264, "Nippur (city plan, c. 1500 BCE)", "site"),
 "british_museum": (-0.1270, 51.5194, "British Museum", "institution"),
 "wadi_hammamat": (33.40, 25.98, "Wadi Hammamat", "site"),
 "turin": (7.6869, 45.0703, "Museo Egizio, Turin", "institution"),
 "giza": (31.1342, 29.9792, "Giza", "site"),
 # Episode 2
 "alexandria": (29.9187, 31.2001, "Alexandria", "city"),
 "syene": (32.8998, 24.0889, "Syene (Aswan)", "city"),
 "cyrene": (21.8583, 32.8250, "Cyrene", "city"),
 "miletus": (27.2764, 37.5306, "Miletus", "city"),
 "xian": (108.9398, 34.3416, "Xi'an (Yu Ji Tu stele, 1136)", "city"),
 "baghdad": (44.3661, 33.3152, "Baghdad (al-Khwārizmī)", "city"),
 "sinjar": (41.87, 36.32, "Sinjar plain (al-Ma'mūn's degree survey)", "place"),
 "nandana": (73.00, 32.72, "Nandana, Punjab (al-Bīrūnī)", "place"),
 "palermo": (13.3615, 38.1157, "Palermo (Book of Roger, 1154)", "city"),
 "tangier": (-5.8340, 35.7595, "Tangier", "city"),
 "cairo": (31.2357, 30.0444, "Cairo", "city"),
 "mecca": (39.8262, 21.4225, "Mecca", "city"),
 "delhi": (77.2090, 28.6139, "Delhi", "city"),
 "beijing": (116.4074, 39.9042, "Beijing", "city"),
 "hereford": (-2.7160, 52.0538, "Hereford (Mappa Mundi, c. 1300)", "city"),
 "genoa": (8.9463, 44.4056, "Genoa", "city"),
 "palma": (2.6502, 39.5696, "Majorca", "city"),
 "florence": (11.2558, 43.7696, "Florence (Chrysoloras, c. 1400)", "city"),
 "bologna": (11.3426, 44.4949, "Bologna (first printed Ptolemy with maps, 1477)", "city"),
 "palos": (-6.8942, 37.2284, "Palos de la Frontera", "city"),
 "la_gomera": (-17.10, 28.10, "La Gomera", "place"),
 "san_salvador": (-74.50, 24.00, "Guanahani / San Salvador", "place"),
 "saint_die": (6.95, 48.29, "Saint-Dié-des-Vosges (Waldseemüller, 1507)", "city"),
 "library_of_congress": (-77.0047, 38.8887, "Library of Congress", "institution"),
 "duisburg": (6.7623, 51.4344, "Duisburg (Mercator, 1569)", "city"),
 "paris_observatory": (2.3366, 48.8368, "Paris Observatory (Cassini)", "institution"),
 "scilly": (-6.32, 49.93, "Isles of Scilly (wreck of 1707)", "place"),
 "greenwich": (-0.0005, 51.4779, "Royal Observatory, Greenwich", "institution"),
 "portsmouth": (-1.0873, 50.8198, "Portsmouth", "city"),
 "port_royal": (-76.84, 17.94, "Port Royal, Jamaica (1761–62)", "place"),
 "bridgetown": (-59.60, 13.10, "Bridgetown, Barbados (1764)", "place"),
 "plymouth": (-4.1427, 50.3755, "Plymouth", "city"),
 "cape_town": (18.4241, -33.9249, "Cape Town", "city"),
 "dusky_sound": (166.5, -45.7, "Dusky Sound, New Zealand", "place"),
 "botany_bay": (151.23, -33.98, "Botany Bay", "place"),
 "kealakekua": (-155.93, 19.48, "Kealakekua Bay, Hawaiʻi", "place"),
 # Episode 3
 "cambridge_uk": (0.1218, 52.2053, "Cambridge (Newton edits Varenius, 1672)", "institution"),
 "amsterdam": (4.9041, 52.3676, "Amsterdam (Varenius, 1650)", "city"),
 "konigsberg": (20.5100, 54.7104, "Königsberg (Kant, 1756–96)", "institution"),
 "la_coruna": (-8.4115, 43.3623, "A Coruña", "city"),
 "tenerife": (-16.60, 28.30, "Tenerife", "place"),
 "cumana": (-64.1770, 10.4530, "Cumaná", "city"),
 "atabapo": (-67.70, 4.05, "Orinoco–Casiquiare", "place"),
 "havana": (-82.3666, 23.1136, "Havana", "city"),
 "cartagena": (-75.5144, 10.3910, "Cartagena", "city"),
 "bogota": (-74.0721, 4.7110, "Bogotá", "city"),
 "quito": (-78.4678, -0.1807, "Quito", "city"),
 "chimborazo": (-78.8172, -1.4692, "Chimborazo", "place"),
 "lima": (-77.0428, -12.0464, "Lima", "city"),
 "acapulco": (-99.8237, 16.8531, "Acapulco", "city"),
 "mexico_city": (-99.1332, 19.4326, "Mexico City", "city"),
 "philadelphia": (-75.1652, 39.9526, "Philadelphia", "city"),
 "bordeaux": (-0.5792, 44.8378, "Bordeaux", "city"),
 "berlin": (13.4050, 52.5200, "Berlin", "city"),
 "leipzig": (12.3731, 51.3397, "Leipzig (Peschel 1871; Ratzel)", "institution"),
 "breslau": (17.0385, 51.1079, "Breslau", "institution"),
 "halle": (11.9696, 51.4825, "Halle", "institution"),
 "gottingen": (9.9158, 51.5413, "Göttingen", "institution"),
 "bonn": (7.0982, 50.7374, "Bonn", "institution"),
 "kiel": (10.1228, 54.3233, "Kiel", "institution"),
 "greifswald": (13.3777, 54.0865, "Greifswald", "institution"),
 "marburg": (8.7668, 50.8021, "Marburg", "institution"),
 "munster": (7.6261, 51.9607, "Münster", "institution"),
 "caen": (-0.3708, 49.1829, "Caen", "institution"),
 "lyon": (4.8357, 45.7640, "Lyon", "institution"),
 "sorbonne": (2.3431, 48.8485, "Sorbonne (Vidal de la Blache, 1898)", "institution"),
 "paris": (2.3522, 48.8566, "Paris (Société de Géographie, 1821)", "city"),
 "rgs": (-0.1760, 51.5010, "Royal Geographical Society, London (1830)", "institution"),
 "st_petersburg": (30.3351, 59.9343, "St Petersburg (1845)", "city"),
 "ags_ny": (-74.0060, 40.7128, "American Geographical Society, New York (1851)", "institution"),
 "cosmos_club": (-77.0399, 38.9033, "Cosmos Club, Washington (NGS, 1888)", "institution"),
 "new_haven": (-72.9279, 41.3083, "Yale, New Haven (Huntington)", "institution"),
 "clark": (-71.8229, 42.2626, "Clark University, Worcester", "institution"),
 "oxford": (-1.2577, 51.7520, "Oxford (Mackinder, Reader 1887)", "institution"),
 "charlestown": (-71.0617, 42.3782, "Charlestown, Mass. (Jedidiah Morse, 1784)", "city"),
 "harvard": (-71.1167, 42.3770, "Harvard", "institution"),
 "chicago_uni": (-87.5987, 41.7886, "University of Chicago", "institution"),
 "madison": (-89.4012, 43.0731, "Madison (Hartshorne, 1939)", "institution"),
 # Episode 4
 "iraq_pt": (43.68, 33.22, "Iraq", "country"),
 "afghanistan_pt": (66.0, 33.9, "Afghanistan", "country"),
 "louisiana": (-91.9, 30.9, "Louisiana", "region"),
 "new_york_state": (-75.5, 43.0, "New York State", "region"),
 "nea_dc": (-77.0369, 38.9072, "Washington, D.C. (NEA committee, 1916)", "institution"),
 "johns_hopkins": (-76.6205, 39.3299, "Johns Hopkins (Isaiah Bowman)", "institution"),
 "penn": (-75.1932, 39.9522, "Pennsylvania", "institution"),
 "michigan": (-83.7382, 42.2780, "Michigan", "institution"),
 "columbia": (-73.9626, 40.8075, "Columbia", "institution"),
 "northwestern": (-87.6753, 42.0565, "Northwestern", "institution"),
 "charlottesville": (-78.4767, 38.0293, "Charlottesville (education summit, 1989)", "city"),
 "seattle": (-122.3321, 47.6062, "Seattle", "city"),
 "ottawa": (-75.6972, 45.4215, "Ottawa", "city"),
 # Episode 5
 "iowa_city": (-91.5302, 41.6611, "Iowa City (Schaefer, 1953)", "institution"),
 "uw_seattle": (-122.3035, 47.6553, "University of Washington (the 'space cadets')", "institution"),
 "bristol": (-2.6037, 51.4584, "Bristol (Haggett)", "institution"),
 "lund": (13.1910, 55.7047, "Lund (Hägerstrand)", "institution"),
 "dusseldorf": (6.7735, 51.2277, "Düsseldorf (1912 competition)", "city"),
 "london_tyrwhitt": (-0.1278, 51.5074, "London (Tyrwhitt's sieve map, 1950)", "city"),
 "harvard_gsd": (-71.1140, 42.3760, "Harvard Lab for Computer Graphics (1965)", "institution"),
 "census_suitland": (-76.9300, 38.8460, "U.S. Census Bureau, Suitland", "institution"),
 "redlands": (-117.1825, 34.0556, "Esri, Redlands (1969)", "institution"),
 "huntsville": (-86.5861, 34.7304, "Huntsville (Intergraph; NASA IMPACT)", "institution"),
 "troy_ny": (-73.6918, 42.7284, "Troy, N.Y. (MapInfo, 1986)", "institution"),
 "vandenberg": (-120.6256, 34.7420, "Vandenberg (Landsat 1 launch, 1972)", "place"),
 "moneron": (141.23, 46.25, "Moneron Island (KAL 007, 1983)", "place"),
 "ucsb": (-119.8489, 34.4140, "UC Santa Barbara (NCGIA, 1988)", "institution"),
 "buffalo": (-78.7890, 43.0008, "SUNY Buffalo", "institution"),
 "orono": (-68.6672, 44.9012, "University of Maine", "institution"),
 "friday_harbor": (-123.0177, 48.5343, "Friday Harbor (1993 'peace talks')", "place"),
 # Episode 6
 "port_au_prince": (-72.3388, 18.5944, "Port-au-Prince", "city"),
 "mountain_view": (-122.0839, 37.3861, "Mountain View (Google Maps, 2005)", "institution"),
 "regents_park": (-0.1565, 51.5313, "Regent's Park (first OSM street, 2004)", "place"),
 "champaign": (-88.2434, 40.1164, "Champaign, Ill. (GRASS, 1982)", "institution"),
 "victoria_bc": (-123.3656, 48.4284, "Victoria, B.C. (PostGIS, 2001)", "institution"),
 "anchorage": (-149.9003, 61.2181, "Alaska (QGIS, 2002)", "institution"),
 "chicago": (-87.6298, 41.8781, "Chicago (OSGeo founded, 2006)", "city"),
 "eros": (-96.62, 43.74, "USGS EROS Center, Sioux Falls", "institution"),
 "esrin": (12.6745, 41.8071, "ESA ESRIN, Frascati (Copernicus)", "institution"),
 "boulder": (-105.2705, 40.0150, "Boulder (STAC sprint, 2017)", "city"),
 "oslo": (10.7522, 59.9139, "Norway (GIS in national curriculum, 2006)", "country"),
}

# ----------------------------------------------------------------- routes
# id: (label, [place ids], style)
R = {
 "hokulea_1976": ("Hōkūleʻa, Hawaiʻi → Tahiti, 1976", ["honolulu", "papeete"], "voyage"),
 "songline_alice_byron": ("Songline: Heavitree Gap → Byron Bay", ["heavitree_gap", "byron_bay"], "songline"),
 "songline_carpentaria_snowy": ("Songline: Gulf of Carpentaria → Snowy Mountains", ["carpentaria", "snowy_mountains"], "songline"),
 "eratosthenes": ("Alexandria–Syene baseline (c. 240 BCE)", ["alexandria", "syene"], "measure"),
 "ibn_battuta": ("Ibn Baṭṭūṭa's travels, 1325–54 (simplified)", ["tangier", "cairo", "mecca", "baghdad", "delhi", "beijing"], "voyage"),
 "columbus_1492": ("Columbus, 1492", ["palos", "la_gomera", "san_salvador"], "voyage"),
 "harrison_1761": ("H4 trial to Jamaica, 1761–62", ["portsmouth", "port_royal"], "voyage"),
 "harrison_1764": ("H4 trial to Barbados, 1764", ["portsmouth", "bridgetown"], "voyage"),
 "cook": ("Cook's Pacific voyages, 1768–79 (composite, simplified)", ["plymouth", "cape_town", "dusky_sound", "botany_bay", "papeete", "kealakekua"], "voyage"),
 "humboldt": ("Humboldt's American expedition, 1799–1804 (simplified)", ["la_coruna", "tenerife", "cumana", "atabapo", "cumana", "havana", "cartagena", "bogota", "quito", "chimborazo", "lima", "acapulco", "mexico_city", "havana", "philadelphia", "bordeaux"], "expedition"),
}

# ------------------------------------------------------------------ areas
A = {
 "ptolemy_meridian": ("Ptolemy's prime meridian (Fortunate Isles)", "line",
                      [[-16.0, 5.0], [-16.0, 65.0]]),
 "heartland": ("Mackinder's 'Pivot Area' (approximate)", "polygon",
               [[[40, 45], [60, 40], [90, 42], [110, 50], [105, 68], [70, 75], [40, 70], [40, 45]]]),
 "nile_floodplain": ("Nile floodplain", "line",
               [[32.90, 24.09], [32.6, 25.7], [31.2, 27.2], [30.8, 28.1], [31.1, 29.9], [31.0, 30.6]]),
}

# ------------------------------------------------------------ great circle
def gc(p1, p2, n=None):
    lon1, lat1 = map(math.radians, p1); lon2, lat2 = map(math.radians, p2)
    d = 2 * math.asin(math.sqrt(math.sin((lat2 - lat1) / 2) ** 2 +
        math.cos(lat1) * math.cos(lat2) * math.sin((lon2 - lon1) / 2) ** 2))
    if d < 1e-9: return [list(p1), list(p2)]
    if n is None: n = max(2, int(math.degrees(d) / 2.5))
    pts = []
    for i in range(n + 1):
        f = i / n
        a = math.sin((1 - f) * d) / math.sin(d); b = math.sin(f * d) / math.sin(d)
        x = a * math.cos(lat1) * math.cos(lon1) + b * math.cos(lat2) * math.cos(lon2)
        y = a * math.cos(lat1) * math.sin(lon1) + b * math.cos(lat2) * math.sin(lon2)
        z = a * math.sin(lat1) + b * math.sin(lat2)
        pts.append([round(math.degrees(math.atan2(y, x)), 4), round(math.degrees(math.atan2(z, math.sqrt(x * x + y * y))), 4)])
    return pts

def unwrap(coords):
    """Avoid antimeridian jumps: keep successive longitudes within 180° of each other."""
    out = [coords[0][:]]
    for c in coords[1:]:
        lon = c[0]
        while lon - out[-1][0] > 180: lon -= 360
        while lon - out[-1][0] < -180: lon += 360
        out.append([lon, c[1]])
    return out

places = {"type": "FeatureCollection", "features": [
    {"type": "Feature", "id": i, "properties": {"id": k, "label": v[2], "kind": v[3]},
     "geometry": {"type": "Point", "coordinates": [v[0], v[1]]}}
    for i, (k, v) in enumerate(P.items())]}

routes = {"type": "FeatureCollection", "features": []}
for i, (k, (label, ids, style)) in enumerate(R.items()):
    coords = []
    for a, b in zip(ids, ids[1:]):
        seg = gc(P[a][:2], P[b][:2])
        coords.extend(seg if not coords else seg[1:])
    routes["features"].append({"type": "Feature", "id": i,
        "properties": {"id": k, "label": label, "style": style},
        "geometry": {"type": "LineString", "coordinates": unwrap(coords)}})

areas = {"type": "FeatureCollection", "features": []}
for i, (k, (label, gtype, coords)) in enumerate(A.items()):
    geom = {"type": "LineString", "coordinates": coords} if gtype == "line" else {"type": "Polygon", "coordinates": coords}
    areas["features"].append({"type": "Feature", "id": i, "properties": {"id": k, "label": label}, "geometry": geom})

for name, fc in [("places", places), ("routes", routes), ("areas", areas)]:
    with open(f"{OUT}/{name}.geojson", "w") as f:
        json.dump(fc, f, ensure_ascii=False, separators=(",", ":"))
    print(name, len(fc["features"]), "features")
