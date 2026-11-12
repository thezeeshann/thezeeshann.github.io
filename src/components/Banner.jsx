import "./banner.css";

// Animated header scene, drawn in SVG so it stays crisp, weighs a few KB and
// follows the theme: a day landscape in light mode, the same landscape at
// night in dark mode. With the circular theme reveal, day wipes into night.
// Shown from the `sm` breakpoint up; on a phone the strip would be tiny.

// Deterministic "random" so the stars don't jump between renders.
const seeded = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const rand = seeded(42);
const STARS = Array.from({ length: 70 }, () => ({
  x: +(rand() * 500).toFixed(1),
  y: +(rand() * 58).toFixed(1),
  r: rand() > 0.85 ? 0.75 : rand() > 0.5 ? 0.5 : 0.35,
  delay: +(rand() * 4).toFixed(2),
  duration: +(2 + rand() * 3).toFixed(2),
}));

const CLOUDS = [
  { y: 18, scale: 1, duration: 70, delay: -10 },
  { y: 32, scale: 0.7, duration: 90, delay: -50 },
  { y: 12, scale: 0.55, duration: 110, delay: -80 },
  { y: 40, scale: 0.85, duration: 80, delay: -30 },
];

const SHIMMER = [
  { x: 60, y: 88, w: 14, delay: 0 },
  { x: 140, y: 93, w: 10, delay: 1.2 },
  { x: 230, y: 87, w: 18, delay: 0.6 },
  { x: 300, y: 95, w: 12, delay: 1.8 },
];

// Reflection of the sun / moon, sitting under it at x = 400.
const REFLECTION = [
  { y: 85, w: 16 },
  { y: 88, w: 12 },
  { y: 91, w: 9 },
  { y: 94, w: 6 },
  { y: 97, w: 4 },
];

const tree = (x, base, h, w) =>
  [
    [base - h, base - h * 0.55, w * 0.7],
    [base - h * 0.75, base - h * 0.3, w * 0.85],
    [base - h * 0.5, base - h * 0.05, w],
  ]
    .map(
      ([top, bottom, width]) =>
        `M${x} ${top}L${x + width / 2} ${bottom}L${x - width / 2} ${bottom}Z`,
    )
    .join("");

const TREES = [
  tree(6, 100, 44, 16),
  tree(20, 100, 34, 13),
  tree(33, 100, 26, 10),
  tree(468, 100, 28, 11),
  tree(482, 100, 40, 15),
  tree(496, 100, 32, 12),
].join("");

const Cloud = ({ y, scale, duration, delay }) => (
  <g
    className="bn-cloud"
    style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
  >
    <g transform={`translate(0 ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="0" rx="16" ry="5" />
      <ellipse cx="7" cy="-3.5" rx="9" ry="6" />
      <ellipse cx="-6" cy="-2" rx="8" ry="4.5" />
    </g>
  </g>
);

const Banner = () => (
  <div className="banner-scene hidden overflow-hidden rounded-lg hairline sm:block">
    <svg
      viewBox="0 0 500 100"
      preserveAspectRatio="xMidYMid slice"
      className="block aspect-[5/1] w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="bn-sky-top" />
          <stop offset="1" className="bn-sky-bottom" />
        </linearGradient>
        <radialGradient id="bn-glow">
          <stop offset="0" className="bn-glow-stop" stopOpacity="0.7" />
          <stop offset="1" className="bn-glow-stop" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bn-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="bn-crescent">
          <circle cx="400" cy="26" r="7" fill="#fff" />
          <circle cx="403.5" cy="23" r="6" fill="#000" />
        </mask>
      </defs>

      <rect width="500" height="100" fill="url(#bn-sky)" />

      {/* Night sky */}
      <g className="bn-night">
        {STARS.map((s, i) => (
          <circle
            key={i}
            className="bn-star"
            cx={s.x}
            cy={s.y}
            r={s.r}
            style={{
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
        <g className="bn-shooting">
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="-7"
            stroke="url(#bn-trail)"
            strokeWidth="0.7"
          />
        </g>
        <g className="bn-shooting bn-shooting-2">
          <line
            x1="0"
            y1="0"
            x2="16"
            y2="-5.5"
            stroke="url(#bn-trail)"
            strokeWidth="0.6"
          />
        </g>
        <circle
          className="bn-pulse"
          cx="400"
          cy="26"
          r="22"
          fill="url(#bn-glow)"
        />
        <circle
          className="bn-moon"
          cx="400"
          cy="26"
          r="7"
          mask="url(#bn-crescent)"
        />
      </g>

      {/* Day sky */}
      <g className="bn-day">
        <circle
          className="bn-pulse"
          cx="400"
          cy="28"
          r="26"
          fill="url(#bn-glow)"
        />
        <circle className="bn-sun" cx="400" cy="28" r="8" />
        <g className="bn-clouds">
          {CLOUDS.map((c, i) => (
            <Cloud key={i} {...c} />
          ))}
        </g>
        <g className="bn-birds">
          <path className="bn-bird" d="M0 0q2-2 4 0q2-2 4 0" />
          <path
            className="bn-bird"
            d="M10 4q1.6-1.6 3.2 0q1.6-1.6 3.2 0"
            style={{ animationDelay: "0.2s" }}
          />
          <path
            className="bn-bird"
            d="M-8 6q1.4-1.4 2.8 0q1.4-1.4 2.8 0"
            style={{ animationDelay: "0.35s" }}
          />
        </g>
      </g>

      {/* Landscape */}
      <path
        className="bn-far"
        d="M0 62L40 48L75 58L120 38L160 55L205 42L250 57L300 35L345 52L390 40L430 56L470 44L500 52V100H0Z"
      />
      <path
        className="bn-mid"
        d="M0 72L30 64L70 70L110 56L150 68L190 60L235 71L280 58L320 69L360 61L400 72L445 60L500 68V100H0Z"
      />
      <rect className="bn-water" y="82" width="500" height="18" />
      {REFLECTION.map((r, i) => (
        <rect
          key={i}
          className="bn-reflect"
          x={400 - r.w / 2}
          y={r.y}
          width={r.w}
          height="0.8"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {SHIMMER.map((s, i) => (
        <rect
          key={i}
          className="bn-shimmer"
          x={s.x}
          y={s.y}
          width={s.w}
          height="0.6"
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}
      <path className="bn-trees" d={TREES} />
    </svg>
  </div>
);

export default Banner;
