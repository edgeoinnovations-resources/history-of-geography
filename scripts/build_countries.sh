#!/usr/bin/env bash
# Rebuild data/countries.pmtiles from Natural Earth 1:110m admin-0 countries.
# Requires: curl, unzip, GDAL (ogr2ogr), tippecanoe.  Run from the repository root.
set -euo pipefail
work="$(mktemp -d)"
curl -sSL -o "$work/ne.zip" "https://naciscdn.org/naturalearth/110m/cultural/ne_110m_admin_0_countries.zip"
unzip -q -o "$work/ne.zip" -d "$work"
ogr2ogr -f GeoJSON -select ADM0_A3,ISO_A3,NAME,CONTINENT -lco COORDINATE_PRECISION=4 "$work/countries.geojson" "$work/ne_110m_admin_0_countries.shp"
tippecanoe -o data/countries.pmtiles -l countries -Z0 -z5 --simplification=4 --detect-shared-borders --coalesce-densest-as-needed --force "$work/countries.geojson"
echo "wrote data/countries.pmtiles"
