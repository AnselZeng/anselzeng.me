import fs from 'fs';
import path from 'path';
import { geoConicConformal, geoPath } from 'd3-geo';

const SOURCE =
  'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson';
const WIDTH = 800;
const HEIGHT = 520;
const PAD = 12;

function roundCoords(coords, ndigits = 2) {
  if (!coords?.length) return coords;
  if (typeof coords[0] === 'number') {
    return [Number(coords[0].toFixed(ndigits)), Number(coords[1].toFixed(ndigits))];
  }
  const out = [];
  let prev = null;
  for (const coord of coords) {
    const next = roundCoords(coord, ndigits);
    if (JSON.stringify(next) !== prev) {
      out.push(next);
      prev = JSON.stringify(next);
    }
  }
  return out;
}

const response = await fetch(SOURCE);
const geo = await response.json();
for (const feature of geo.features) {
  feature.geometry.coordinates = roundCoords(feature.geometry.coordinates);
  feature.properties = { name: feature.properties.name };
}

const projection = geoConicConformal()
  .parallels([49, 77])
  .rotate([91.8667, 0])
  .center([0, 62.5])
  .fitExtent(
    [
      [PAD, PAD],
      [WIDTH - PAD, HEIGHT - PAD],
    ],
    geo,
  );

const pathGen = geoPath(projection).digits(0);
const names = {
  'Yukon Territory': 'Yukon',
};

const paths = {};
for (const feature of geo.features) {
  const raw = feature.properties.name;
  const name = names[raw] ?? raw;
  const d = pathGen(feature);
  if (d) paths[name] = d;
}

const out = `export const canadaMapViewBox = '0 0 ${WIDTH} ${HEIGHT}';

export const canadaMapPaths: Record<string, string> = ${JSON.stringify(paths, null, 2)};
`;

const dest = path.join(process.cwd(), 'src', 'data', 'canada-map-paths.ts');
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out);
console.log(`canada map: ${Object.keys(paths).length} regions, ${fs.statSync(dest).size} bytes`);
