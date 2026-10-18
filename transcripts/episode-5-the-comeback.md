# From Songlines to the Cloud

## Episode 5: The Comeback

*[Cold open]*

In 1962, Canada had a very large question. How good is the land? All of it. For farming, for forestry, for wildlife, for recreation. The Canada Land Inventory had been set up to find out, and its job was to map the capability of the land across the country.

That same year, an English-born geographer named Roger Tomlinson, working for an aerial-survey company in Ottawa, met the head of the Canada Land Inventory, a man named Lee Pratt, by chance, on an airplane.

Tomlinson had an idea. Stacking maps on top of each other to see where things line up was an old technique, done by hand with sheets of transparent paper. What if a computer did the overlay instead?

That meeting led to a feasibility study for a federal rural-development agency. In August 1963 Tomlinson delivered his estimate. Compiling the national land-capability maps by hand would cost about eight million dollars. Computerizing it would cost about three.

*[Beat]*

That's how what's generally recognized as the world's first operational geographic information system got built. A chance conversation on a plane, and a cost estimate that came out five million dollars in the computer's favor.

*[Theme]*

This is *From Songlines to the Cloud*. I'm Paul. Last time, we watched American geography get pushed out of its elite universities and most of its schools. This time, the comeback. It came from the discipline's own scientific wing, from a government land survey in Canada, and from the last place you'd expect: Harvard.

\* \* \*

To understand how a geographer could even imagine a computer doing his job in 1962, we need to go back about ten years, to an argument.

You'll remember from episode three that American geography in the 1940s was defined by Richard Hartshorne's *The Nature of Geography*: geography as the careful description of unique regions. In 1953, a journal published a frontal attack on that idea. It was called "Exceptionalism in Geography," by Fred K. Schaefer, and Schaefer didn't live to see it in print. It was published after his death.

Schaefer's argument was that geography is *not* exceptional among the sciences. It shouldn't settle for describing unique places. It should do what other sciences do: look for general laws, in his phrase "morphological laws," about how things are arranged in space. And, for good measure, he said Hartshorne had misread both Hettner and Kant. Hartshorne fired back in 1955. That exchange framed the question that defined the next two decades: is geography about the unique, or about the general?

The people who answered "the general" were already at work, and their headquarters was the University of Washington, in Seattle. There, in a department that advertised the use of an IBM computer, Edward Ullman and William Garrison trained a remarkable group of graduate students. In 1954 Garrison taught the first advanced statistics course in any American geography department. His students became known as the "space cadets." The list reads like a who's who of spatial science: Brian Berry, William Bunge, Michael Dacey, Arthur Getis, Duane Marble, Richard Morrill, John Nystuen, Waldo Tobler, and others.

The landmarks came quickly. Berry and Garrison put central place theory to statistical tests in 1958. Bunge's *Theoretical Geography*, in 1962, became perhaps the seminal text of the movement. In Britain, Peter Haggett's *Locational Analysis in Human Geography* and the volume *Models in Geography*, edited with Richard Chorley, carried the revolution into British universities and schools. In Sweden, Torsten Hägerstrand was simulating how innovations spread across space.

And the bridge to GIS runs straight through these people. In 1959, Waldo Tobler published a paper called "Automation and Cartography." It was the first paper in the discipline to treat the map, systematically, as part of a data-processing system, and to propose that computers could make maps. The quantitative revolution also gave GIS its vocabulary of ideas: adjacency, distance decay, spatial autocorrelation. Every GIS since has been, in part, a machine for operationalizing those concepts.

*[Beat]*

There's a bitter irony here, too. This was exactly the scientific turn that might have answered the charge that geography was "merely descriptive." It just arrived too late to save the subject's standing at Harvard and the other elite universities.

\* \* \*

Meanwhile, on the practical side, the idea of overlay had been sharpening for a while. In 1950, the planner Jacqueline Tyrwhitt published the first detailed instructions for the "sieve map": draw your maps on transparent paper and lay them one on top of another to see where the patterns coincide. The idea is older still; it shows up implicitly in a design competition for Düsseldorf in 1912. In 1969, the landscape architect Ian McHarg made it famous in *Design with Nature*, stacking transparencies of soils, vegetation, slope and land value to route highways and judge where land was suitable for what. McHarg's "layer cake" is a direct conceptual ancestor of GIS overlay, but his book offered no way to computerize it. In Canada, Tomlinson had already been working on exactly that for six years.

Here's what he built.

The Canada Geographic Information System was built inside the federal department responsible for forestry and rural development, starting in 1963, developed through 1968 and fully operational by about 1971. It took the Canada Land Inventory's data, soils, agricultural capability, recreation, wildlife, forestry, land use, all mapped at one to fifty thousand, and digitized it, stored it, analyzed it and displayed it. It could overlay layers, measure areas and scan maps in. And it was built to answer questions, not just to draw pictures.

Some of its innovations will sound very familiar to anyone who uses GIS today: treating maps and air photos as computer data, a drum scanner for getting maps into the machine, and a conceptual split between where something is and what it is. Location in one place, attributes in another. That split shaped most of the GIS software that followed.

Tomlinson's 1968 paper, "A Geographic Information System for Regional Planning," is the standard citation for the phrase "geographic information system," although people date the coining of the term anywhere from 1963 to 1968. In 2022 the IEEE dedicated a milestone to CGIS as the first geographic information system. Tomlinson was appointed to the Order of Canada, with a citation crediting him with "changing the face of geography as a discipline." He's known everywhere as the father of GIS.

\* \* \*

Now for the irony I promised.

In 1963, a Chicago architect named Howard Fisher saw some early computer maps made by Edgar Horwood and thought he could do better. He prototyped a more flexible mapping program at Northwestern, called it SYMAP, and in February 1965 he moved to Harvard. With a Ford Foundation grant of two hundred and ninety-four thousand dollars, he founded the Laboratory for Computer Graphics, inside Harvard's Graduate School of Design.

*[Beat]*

Seventeen years after Harvard shut down its geography program, Harvard became one of the places where geography's future was built.

SYMAP, finished in 1966, printed thematic maps on line printers. A Harvard freshman named Donald Shepard rewrote its interpolation using a technique we now call inverse distance weighting, and SYMAP went on to become the dominant thematic-mapping program in the world. In 1968, under its new director, William Warntz, the lab added "Spatial Analysis" to its name. The software kept evolving: GRID, in 1969, arguably the first general-purpose raster GIS, and then, in the mid-to-late 1970s, ODYSSEY, the prototype of the modern integrated vector GIS.

The lab's people went everywhere. Among its alumni and associates were Jack Dangermond, co-founder of Esri, and Scott Morehouse, who left the lab to lead the design of Esri's ARC/INFO. The historian of the lab, Nick Chrisman, put it this way: whatever origin story of GIS you hear, "you will find a connection to the Harvard Laboratory." The lab itself closed in 1991.

\* \* \*

Government data gave the technology its next big push. For the 1970 census, the U.S. Census Bureau developed a way of storing street networks called DIME. Intersections became nodes; street segments became lines between them, each carrying the range of addresses on its left and right side. That's topology, in a federal statistical agency, in 1970. Then, during the 1980s, working with the U.S. Geological Survey, the Census Bureau built TIGER for the 1990 census: the first nationwide digital map of America's roads, boundaries and water. Free TIGER extracts became the raw material for geocoding, routing and business mapping, and a major engine of GIS's spread.

Commercialization ran on several tracks. In 1969, Jack and Laura Dangermond founded the Environmental Systems Research Institute, Esri, in Redlands, California, with eleven hundred dollars of savings. It started as a land-use consulting practice. Its first commercial software product, ARC/INFO, married vector geometry to a relational-style database of attributes, launched in 1982, or by some accounts 1981, and became the dominant GIS platform. ArcView followed in 1991, ArcGIS in 1999, ArcGIS Online in 2012. Intergraph was delivering interactive mapping to local governments by 1973. MapInfo brought desktop mapping to ordinary PCs in 1986.

Then two space-age technologies completed the platform. On the twenty-third of July 1972, Landsat 1 launched, beginning a continuous civilian record of the Earth's surface in several wavelengths at once, and a steady stream of imagery for GIS. And there was GPS. The program began in 1973. Civilian access was promised after the shooting down of Korean Air Lines Flight 007 in 1983. Full operational capability was declared in 1995. But for years the civilian signal was deliberately degraded, to an accuracy of about a hundred meters, a policy called Selective Availability. On the first and second of May 2000, by order of President Clinton, it was switched off. Overnight, civilian GPS got roughly ten times more accurate.

*[Beat]*

Every time computing got cheaper, mainframe to minicomputer to PC to the web, the number of people using GIS grew by something like a factor of ten.

\* \* \*

The technology was booming. The next step was to turn it into a science, and that's what gave geography its institutional footing back.

In August 1988 the National Science Foundation announced the National Center for Geographic Information and Analysis, run by a consortium of UC Santa Barbara, SUNY Buffalo and the University of Maine. It ran twenty-one research initiatives through 1996, and its Core Curriculum was used around the world at a time when there were hardly any GIS textbooks.

In 1992 Michael Goodchild published a paper called "Geographical information science." It challenged the community to stop thinking of GIS as a tool-building exercise and start treating geographic information as the subject of a science, with its own research agenda. It's the founding statement of what we now call GIScience. One of the field's leading journals, founded in 1987 as the *International Journal of Geographical Information Systems*, changed one word of its name in 1997. *Systems* became *Science*.

Education and the job market followed. In 1984 there were roughly ten GIS curricula at universities in the United States and Canada. By the mid-1990s, one survey found more than eight hundred academic departments offering at least one GIS course. In 2003, the U.S. Department of Labor named geospatial technology one of fourteen high-growth industries, alongside biotechnology and nanotechnology. A year later, *Nature* profiled it as one of the three most important emerging fields.

So did GIS revive geography? The evidence says yes, with qualifications. GIScience gave the discipline a fundable, NSF-recognized technical core. The American Association of Geographers found strong growth in geography majors from the 1990s, peaking in 2012, with GIS and geospatial courses widely credited as the draw. But departments kept closing into the 2000s, so it's fairest to call GIS a partial revival, strongest in applied programs.

\* \* \*

And not everyone was happy about it, which turned out to be healthy.

In 1990 the geographer Peter Taylor wrote an editorial dismissing GIS as a return to "naive empiricism." In 1991 Stan Openshaw shot back that GIS could "put Humpty-Dumpty back together again," reuniting a fragmented discipline. For a few years these were known, only half-jokingly, as the GIS wars.

Then, in November 1993, a workshop at Friday Harbor, in Washington State, deliberately put the critics and the GIS practitioners in the same room. It's widely remembered as the peace talks. In 1995 came John Pickles's edited book *Ground Truth*, which asked hard questions about GIS: what kind of knowledge it produces, its potential for surveillance, its military roots, and its tendency to hand more power to people who already have it. Out of that critique, and a special journal issue on GIS and society the same year, grew whole new subfields: critical GIS, public-participation GIS and feminist GIS. In the judgment of the historian of the episode, Nadine Schuurman, a full split in the discipline "was avoided."

Michael Goodchild later reflected that after *Ground Truth*, GIScience "would never again be quite the comfortable retreat for the technically minded that it had been."

*[Beat]*

I think that's the right ending for this part of the story. The comeback didn't just give geography a technology. It gave it an argument about who that technology is for.

\* \* \*

So by the early 2000s, geography had a technical core, a science, a job market and a conscience. What it didn't have yet was everyone else. GIS was powerful, but it was also expensive, specialized and locked inside licensed software and trained professionals. In its own way, it had built a new enclosure.

Then, in less than a year, that started to come apart. Google launched a map you could drag with your mouse. A student in London started tracing streets on a bicycle with a GPS unit. And the most powerful mapping tools in history began to slide toward the price of nothing.

Next time, in our final episode: the map goes public.

I'm Paul. This has been *From Songlines to the Cloud*. Thanks for listening.

*[Theme out]*
