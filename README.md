# React-Kino Research Project

**Research Repository Created: March 3, 2026, 15:15 UTC**

## Project Overview

This repository documents research on **React-Kino**, a cinematic scroll-driven storytelling library for React that was trending on Hacker News. React-Kino enables developers to create Apple-style scroll experiences with a tiny core engine (under 1KB gzipped).

## Key Features Discovered

### Core Architecture
- **Tiny footprint**: Core scroll engine under 1KB gzipped (compared to GSAP ScrollTrigger at 33KB)
- **Declarative API**: Compose scenes, reveals, counters, and transforms like regular React components
- **SSR-safe**: Components render children on server, animate on client
- **Lightweight runtime**: Uses `@react-kino/core` internal engine plus React peers

### Component Ecosystem

#### Core Components
- **`<Kino>`**: Root provider that initializes scroll tracking engine
- **`<Scene>`**: Pinned scroll sections with customizable duration
- **`<Reveal>`**: Scroll-triggered entrance animations (fade, fade-up, scale, blur)
- **`<ScrollTransform>`**: Continuous interpolation of CSS transforms during scroll
- **`<Parallax>`**: Layers that scroll at different speeds for depth effects

#### Interactive Components
- **`<Counter>`**: Animated numbers that count between values during scroll
- **`<CompareSlider>`**: Before/after comparison with drag and scroll-driven modes
- **`<HorizontalScroll>`**: Converts vertical scroll into horizontal movement
- **`<VideoScroll>`**: Scrubs through video as user scrolls (like Apple product pages)

#### UI Components
- **`<Progress>`**: Fixed scroll progress indicators (bar, dots, ring styles)
- **`<StickyHeader>`**: Navigation that transitions from transparent to solid
- **`<Marquee>`**: Infinitely scrolling ticker with seamless loop
- **`<TextReveal>`**: Word/character/line text reveal driven by scroll

### Templates Available
React-Kino provides three production-ready templates:
1. **Product Launch**: Apple-style launch page with hero, stats, and feature panels
2. **Case Study**: Portfolio project page with challenge/solution/results structure
3. **Portfolio**: Personal portfolio with bio, projects, and contact sections

## Technical Implementation

### Performance Optimizations
- **GPU-accelerated transforms**: Uses compositor-only properties
- **Passive scroll listeners**: All listeners use `{ passive: true }`
- **requestAnimationFrame batching**: Avoids layout thrashing
- **Tree-shakeable**: Import only components you use

### Accessibility Features
- **`prefers-reduced-motion` support**: 
  - Animations render immediately in visible state
  - Parallax offset disabled
  - Counters jump to final value
  - Marquee shows static flex layout

### Browser Support
- Chrome 64+, Firefox 60+, Safari 13+, Edge 79+
- Position: sticky support required
- Modern CSS transforms and opacity

## Example Implementation

```jsx
import { Kino, Scene, Reveal, Counter } from "react-kino";

function App() {
  return (
    <Kino>
      <Scene duration="300vh">
        {(progress) => (
          <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
            <Reveal animation="fade-up" at={0}>
              <h1>Welcome</h1>
            </Reveal>
            
            <Reveal animation="scale" at={0.3}>
              <p>Scroll-driven storytelling, made simple.</p>
            </Reveal>
            
            <Reveal animation="fade" at={0.6}>
              <Counter from={0} to={10000} format={(n) => `${n.toLocaleString()}+ users`} />
            </Reveal>
          </div>
        )}
      </Scene>
    </Kino>
  );
}
```

## Installation & Setup

```bash
# Install the library
npm install react-kino
# or
pnpm add react-kino
# or
bun add react-kino

# Scaffold a complete page from template
npx @react-kino/cli init

# Install shadcn wrapper component
npx shadcn add https://react-kino.dev/registry/components/scene.json
```

## Use Cases

1. **Product Launch Pages**: Create immersive Apple-style product reveals
2. **Portfolio Websites**: Build cinematic case study presentations
3. **Marketing Sites**: Implement scroll-driven storytelling for brands
4. **Educational Content**: Create interactive scroll-based tutorials
5. **Data Visualization**: Animate charts and statistics on scroll

## Comparison with Alternatives

| Feature | React-Kino | GSAP ScrollTrigger | Framer Motion |
|---------|------------|-------------------|---------------|
| Bundle Size | <1KB gzipped | 33KB gzipped | 87KB gzipped |
| React Native | Declarative components | Imperative API | Declarative API |
| SSR Support | Full SSR-safe | Limited | Limited |
| Accessibility | Built-in reduced motion | Manual implementation | Manual implementation |
| Learning Curve | Low (React patterns) | Medium (timeline-based) | Medium |

## Research Insights

### Why This Project is Trending
1. **Performance-first approach**: Tiny bundle size addresses web performance concerns
2. **Developer experience**: Familiar React patterns reduce learning curve
3. **Production-ready**: Templates and accessibility built-in
4. **Modern web trends**: Aligns with scroll-driven animations trend
5. **Open source momentum**: Active community and clear documentation

### Potential Applications
- E-commerce product showcases
- Startup landing pages
- Interactive documentation
- Digital magazines
- Portfolio websites for creatives

## Project Structure

```
research-20260303-1515-react-kino/
├── README.md          # This research document
├── LICENSE           # MIT License
├── examples/         # Example implementations
│   ├── basic-scene/
│   ├── product-launch/
│   └── portfolio/
├── analysis/         # Technical analysis
│   ├── performance.md
│   ├── accessibility.md
│   └── comparison.md
└── resources/        # Reference materials
    ├── screenshots/
    ├── links.md
    └── api-reference.md
```

## Next Steps for Further Research

1. **Performance benchmarking**: Compare with GSAP ScrollTrigger and Framer Motion
2. **Accessibility audit**: Test with screen readers and keyboard navigation
3. **Mobile optimization**: Evaluate touch scroll performance
4. **Framework integration**: Test with Next.js, Gatsby, Remix
5. **Real-world case studies**: Document implementation in production sites

## References

- **GitHub Repository**: https://github.com/btahir/react-kino
- **Hacker News Discussion**: https://news.ycombinator.com/item?id=47204570
- **Documentation**: https://react-kino.dev
- **npm Package**: https://www.npmjs.com/package/react-kino

## License

This research repository is licensed under MIT License - see the LICENSE file for details.

---

*This research was conducted as part of the autonomous GitHub Project Pipeline on March 3, 2026. The goal is to document trending open-source projects for educational purposes and technical analysis.*