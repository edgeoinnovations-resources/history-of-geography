# From Songlines to the Cloud

## Episode 6: The Map Goes Public

*[Cold open]*

On the twelfth of January 2010, a magnitude seven earthquake struck Haiti. Port-au-Prince was devastated. And the rescue teams heading in faced a problem that sounds almost unbelievable now: the detailed, open street map they needed simply didn't exist.

Within hours, volunteers on a website called OpenStreetMap started building one, working remotely, from all over the world. Within forty-eight hours, high-resolution satellite imagery taken after the quake was released, and the volunteers traced it. Within about a month, more than six hundred people working remotely had built a nearly complete basemap of Haiti from scratch.

It became the default map for search-and-rescue teams, for United Nations agencies, for the World Bank, and for the U.S. Marine Corps.

*[Beat]*

Later that year, the volunteers incorporated as the Humanitarian OpenStreetMap Team. As its director put it: "Anybody who knows how to use a mouse and a web browser can do it."

Anybody. Hold on to that word.

*[Theme]*

This is *From Songlines to the Cloud*. I'm Paul, and this is our final episode. Last time, GIS helped revive geography, and in doing so built a new kind of enclosure: powerful tools, locked inside expensive software and specialist training. This time, that enclosure comes apart. It's the story of how the map, the software, the data and finally the computing all became something anyone can use. And it brings us back, at the very end, to where we started.

\* \* \*

Start with 2005, the year mapping went public.

In October 2004, Google bought two small companies: a mapping start-up called Where 2 Technologies, and Keyhole, which made a 3D Earth viewer. On the eighth of February 2005, Google Maps launched. You could grab the map and drag it. It sounds trivial now, but those "slippy" tiles changed what people expected a map to be. Then people started hacking it, building "mashups" like housingmaps.com, which put rental listings on a Google map before Google had offered any official way to do that. In June, Google released an official API. And on the twenty-eighth of June 2005, Google Earth came out.

Within two years, the academic world had names for what was happening. Andrew Turner's *Introduction to Neogeography*, in 2006, described map-making by people outside the GIS profession. And in 2007, Michael Goodchild, the same Goodchild who wrote GIScience's founding paper, published a paper called "Citizens as sensors," coining the term "volunteered geographic information." He imagined a network of more than six billion human sensors. And he opened the paper, fittingly, with Waldseemüller's map of 1507, the one that named America, as an early example of amateurs producing geographic knowledge.

In the standard histories of GIS, the phase from the late 1980s on is called "user dominance." In 2005, the users stopped being only professionals.

\* \* \*

Google gave the public a map to look at. OpenStreetMap gave them a map to own.

Steve Coast was a student at University College London when he registered openstreetmap.org on the ninth of August 2004. That December, he traced the very first street, by cycling around Regent's Park with a GPS unit. His motivation was a mixture of Wikipedia's example and frustration that tax-funded agencies like Britain's Ordnance Survey didn't freely share their map data. The pitch was simple: Wikipedia, for maps.

By the project's twentieth anniversary, in 2024, it had more than ten million registered contributors, about two million of whom had made at least one edit, and around a hundred thousand active every month. Its data now sits underneath products from Meta, Microsoft, Apple, and most of the world's humanitarian agencies. Haiti was the proof of concept. Volunteered mapping is now standard humanitarian practice.

*[Optional: an example from your own students or your GeoSpatial Club mapping with OpenStreetMap.]*

\* \* \*

The software went open too, and the story goes back further than most people realize. In fact, the oldest GIS still in continuous development is an open one.

Around 1982, the U.S. Army Corps of Engineers' Construction Engineering Research Laboratory started building its own GIS to manage the environment on military lands. Part of the motivation was legal: complying with the National Environmental Policy Act. It ran on UNIX, reputedly the first GIS that did. They released it in 1985 as GRASS, and because it was U.S. government software, it was in the public domain. Universities picked it up. In 1998 it passed to an international open-source community led by Markus Neteler, adopted an open-source license the next year, and it's still being developed today, more than forty years on.

Then came the libraries that quietly hold up the whole field. PROJ, for coordinate transformations, started life at the U.S. Geological Survey and was revived in 2000. That same year, Frank Warmerdam released version 1.0 of GDAL, the Geospatial Data Abstraction Library, one consistent way to read and write hundreds of raster formats, with a companion library for vector data. GDAL became the universal translator of geospatial computing. It's underneath QGIS, MapServer, GeoServer, R and the whole Python stack. It's even embedded in commercial products, including ArcGIS and Google Earth.

*[Beat]*

If you've opened a spatial file of almost any kind in the last twenty years, there's a decent chance GDAL did the reading.

Between 2001 and 2006, a complete open stack fell into place. PostGIS, from a small firm in Victoria, British Columbia, gave the open world a serious spatial database in 2001. GeoServer arrived the same year. And in February 2002, a man named Gary Sherman, in Alaska, started a side project. In his words, it was "driven primarily by my after-hours desire to view PostGIS data on my Linux box." That side project became QGIS, today the world's most widely used open-source desktop GIS. In 2006 the Open Source Geospatial Foundation was founded, modeled on the Apache Software Foundation, and its FOSS4G conferences became the movement's global gathering.

Then GIS folded into general-purpose data science. In Python, GeoPandas and rasterio from 2013 onward; in R, a package called sf in 2018. Python became the common language of cloud geospatial analysis.

\* \* \*

But free software doesn't help much if the data still costs a fortune. And for a long time, it did.

In the commercial era of the 1980s, a single Landsat scene could cost up to about four and a half thousand dollars. As late as 1999 it was around six hundred. Then, in October 2008, the U.S. Geological Survey made the entire Landsat archive free, over the internet, to anyone.

Downloads went up more than a hundredfold. Whole new kinds of science became possible, like Matthew Hansen's maps of global forest change, built from dense time series of imagery. One estimate puts the annual economic benefit of the free policy at about a hundred times the sales revenue it gave up. In 2018, a U.S. proposal to start charging again was dropped after pushback from the scientific community. One remote-sensing scientist, Zhe Zhu, put it plainly: reversing the policy "will be like going back to the dark ages."

Europe followed. Under the Copernicus program, data from the Sentinel satellites, beginning with Sentinel-1 in 2014, comes with "free, full and open access" for anyone, commercial use included.

Once the data was free, the barriers shifted. The hard part was no longer getting the imagery. It was having the computing power and the skills to do something with petabytes of it. So that's what the next movement went after.

\* \* \*

The cloud-native movement has a three-word slogan: "stream, don't download." Leave the data where it is, in ordinary web storage. Let the software fetch only the bytes it actually needs. Move the computing to the data, not the other way around.

That idea is now built into a family of formats. The Cloud-Optimized GeoTIFF, or COG, is just a regular GeoTIFF arranged internally so a program can read one small piece of it over the web without downloading the whole file. It was first used at scale when Amazon began hosting Landsat in 2015, and it became an official standard in 2023. STAC, the SpatioTemporal Asset Catalog, is a common way to describe and search collections of imagery. It was born in October 2017 at a working sprint in Boulder, Colorado: twenty-five people from fourteen organizations, including Amazon, Google, Planet and the Humanitarian OpenStreetMap Team. Today it catalogs Landsat, NASA and European Space Agency holdings, among others. GeoParquet, in 2023, put vector data into the same columnar format the mainstream data world uses. And PMTiles packs an entire set of web map tiles into one static file that a browser can read directly. No map server required.

At the same time, cloud platforms turned planetary analysis into something you can do in a browser tab. Google Earth Engine, unveiled in December 2010, puts the full Landsat archive and much more next to enormous computing power, free for research, education and nonprofit use. It made possible landmark global maps of forest change and surface water. Microsoft built its Planetary Computer along similar lines. And in December 2022, Amazon, Meta, Microsoft and TomTom launched the Overture Maps Foundation to publish open base-map data, released in GeoParquet.

*[Beat]*

Think about what that means for a classroom. A student with a laptop and a browser can now run an analysis across a continent, or the planet, without downloading a single satellite scene.

\* \* \*

So, has spatial analysis been democratized? Mostly, and with real limits.

In the 1990s, a single professional GIS seat cost thousands of dollars in licenses, plus a dedicated workstation. Today the whole stack, QGIS, PostGIS, GDAL, Python or R, petabytes of open imagery and free cloud tiers, costs nothing and runs on ordinary hardware. For schools, browser-based GIS removed most of the old barriers of cost, complexity and access; one geography educator called it a "watershed" for school geography. Norway's 2006 national curriculum required GIS. And students in places with poor bandwidth can run continent-scale analyses in a browser notebook, which reverses an old pattern in which institutions in the Global South were locked out by the cost of data and computing.

The limits are real, though. In schools, the barriers that remain are hardware, teacher training and curriculum time, and they're steepest outside wealthy districts. And depending on cloud platforms brings new risks of enclosure. Earth Engine is free for research, but it's proprietary. In June 2024, Microsoft shut down the managed computing hub of its Planetary Computer, though the data and services carried on. Hosted infrastructure can vanish quickly. Open formats and open data are what make that survivable.

And then there's artificial intelligence. In July 2023, NASA and IBM released Prithvi, an open-source "foundation model" trained on Landsat and Sentinel imagery and published openly online. A second version followed at the end of 2024. And this year, 2026, Prithvi became the first geospatial foundation model demonstrated in orbit, on a satellite, chosen specifically because it's open source. It's a crowded field: one survey counted fifty-eight foundation models for remote sensing released in just three years. And open map data is now being pitched as a way to keep AI systems from making up locations.

The clearest sign of how far things have moved: the Cloud-Native Geospatial Forum's first conference, in 2025, brought together people from Google, Microsoft, Amazon, Esri, Planet, the World Bank, the U.S. Geological Survey and NVIDIA. The open, cloud-native stack isn't a counterculture anymore. It's the infrastructure.

\* \* \*

Let's step back and look at the whole arc, because I think it has a shape worth remembering.

Spatial thinking began as an evolved survival skill, written into the hippocampus before it was written anywhere else. Every society we know of found ways to store it: songlines, stick charts, driftwood coastlines. When states arose, they codified it where the stakes were highest: tax plots on the Nile, a mining map on papyrus, a world on a clay tablet. Greek, Chinese and Islamic scholars turned description into measurement, and by about 1800, sailors, empires and tax collectors had made the whole Earth mappable on a single grid.

Then geography became a discipline, with chairs and societies and textbooks, and it carried some heavy baggage from empire and race science. In the United States, a committee folded it into social studies in 1916, Harvard pushed it out in 1948, and the elite universities followed, until young Americans couldn't find Iraq on a map. Geography came back through its own scientists, through Tomlinson and the Harvard Lab and Esri and GIScience. But the comeback built a new enclosure: specialist software for specialists.

And then that enclosure came apart. Google's maps. OpenStreetMap's ten million registered mappers. Free Landsat and Sentinel. QGIS, GDAL and PostGIS. Formats that let a browser stream exactly the bytes it needs from a planetary archive. For the first time since spatial knowledge was professionalized, the tools, the data and the planet itself are in the hands of anyone who wants them.

*[Beat]*

Whether education takes that opportunity is still an open question. American schools still teach very little geography, and the national assessment of the subject has been suspended. The tools are free. The time on the timetable is not.

Which brings me back to the London cabbies from our very first episode. Part of their brains, the hippocampus, grew as they mastered the Knowledge. Spatial thinking is universal, and it's trainable. Those two facts were true for the Marshallese navigator and they're true for the kids in our classrooms. What's changed is that the barriers between a curious student and a planet's worth of data have almost disappeared. The rest is up to us.

The Marshallese navigator memorized the swells before the voyage and usually left the chart ashore. The Tunumiit carver shaped a coastline you could read with your mittens on. Their successors stream it from the cloud. The capability was always human. The history of geography is really the history of how widely, at any given moment, that capability has been shared.

I'm Paul. This has been *From Songlines to the Cloud*. Thank you so much for listening.

*[Theme out]*
