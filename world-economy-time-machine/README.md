# World Economy Time Machine 🌍

An interactive world-economy storytelling experiment: 3D GDP columns + animated top-12 GDP ranking race.

## Launch
https://baettery.github.io/world-economy-time-machine/

## Releases
### v1.0 — Prototype (2026-10-08)
- Concept: combined globe + GDP ranking + annual time slider.
- Local proof of concept, not committed here.
- Population indicator (OWID) explored in the original local prototype.

### v2.0 — Animated MVP (2026-10-08)
- First published GitHub version.
- 3D columns smoothly change height (700ms).
- Top-12 rows keep their DOM identity, slide between rankings and animate bar width.
- Auto-play / pause / reset / speed controls.
- Country click focuses the globe.
- Uses nominal current-dollar GDP from World Bank WDI (NY.GDP.MKTP.CD).
- Static GitHub Pages-compatible HTML, no server or API token.

## Data caveats
Nominal GDP is not inflation adjusted; ranks are sensitive to exchange rates. Only countries in World Bank country metadata (excluding aggregates) are included; years with missing values are omitted on a per-country basis. Globe markers use approximate geographic centers for a manually mapped subset of countries. The world globe is therefore illustrative, not a comprehensive geographic GDP map.

## Technical design
- [Globe.gl](https://globe.gl/) / [Three.js](https://threejs.org/)
- Browser fetch -> World Bank API JSON
- DOM-based keyed ranking rows with CSS transform animation
- No Node build/install required

## Roadmap
- Optional OWID population overlay
- Better global coordinate coverage
- Animated year scrub and history trails
- Data source status / caching
- Reduced motion accessibility and mobile QA

## Verification
Source uploaded to GitHub. Live endpoint and remote API require independent browser checks before considering deployment confirmed.
