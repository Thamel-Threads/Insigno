<p align="center">
  <img src="public/insigno-banner.png" alt="Insigno Banner" width="100%" />
</p>

<p align="center">
  <img src="https://insigno.thamelthreads.com/pr?add=128&del=42&commits=5" alt="Sample PR badge" />
</p>

---

### Insigno
Ultra‑light, gzipped SVG badges with a tiny runtime and in‑memory LRU cache.

---

### Run
```bash
bun install
bun src/server.ts
```

### Use
PR metrics badge:
```
GET /pr?add=128&del=42&commits=5
```
Example:
`https://insigno.thamelthreads.com/pr?add=128&del=42&commits=6`

---

### Notes
- Always served as `image/svg+xml` with `gzip` encoding
- Public cache headers (`Cache-Control: public, max-age=3600`)
