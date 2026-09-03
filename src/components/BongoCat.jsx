/**
 * Inline SVG Bongo Cat, drawn in the site palette (SVG-only literals:
 * #C98A4B bongo side, #EED9B8 bongo head, #FFFFFF cat/paws, #2E2E38 outline,
 * #F4A7B9 ears/blush).
 *
 * `bap` swaps the two front paws between their frames so the cat baps along;
 * the default (static) frame matches the approved artboards.
 */
function BongoCat({ width = 210, height = 164, className, bap = false, decorative = true }) {
  // Paw frames: [left, right] — default has the left paw raised; the bap
  // frame swaps which paw is down on the bongo head.
  const leftPawCy = bap ? 202 : 176;
  const rightPawCy = bap ? 176 : 202;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={decorative ? 'true' : undefined}
      focusable="false"
    >
      <path
        d="M38 212 C 30 150 58 96 98 72 L 88 30 L 128 54 C 148 45 172 45 192 54 L 232 30 L 222 72 C 262 96 290 150 282 212 Z"
        fill="#FFFFFF"
        stroke="#2E2E38"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M97 44 L 114 55 L 101 62 Z" fill="#F4A7B9" />
      <path d="M223 44 L 206 55 L 219 62 Z" fill="#F4A7B9" />
      <circle cx="124" cy="118" r="7" fill="#2E2E38" />
      <circle cx="196" cy="118" r="7" fill="#2E2E38" />
      <path
        d="M146 136 Q 153 145 160 136 Q 167 145 174 136"
        stroke="#2E2E38"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="96" cy="140" rx="13" ry="8" fill="#F4A7B9" opacity="0.75" />
      <ellipse cx="224" cy="140" rx="13" ry="8" fill="#F4A7B9" opacity="0.75" />
      <path
        d="M70 210 L 78 240 Q 160 254 242 240 L 250 210 Z"
        fill="#C98A4B"
        stroke="#2E2E38"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <ellipse cx="160" cy="210" rx="92" ry="20" fill="#EED9B8" stroke="#2E2E38" strokeWidth="5" />
      <ellipse cx="90" cy={leftPawCy} rx="24" ry="15" fill="#FFFFFF" stroke="#2E2E38" strokeWidth="5" />
      <ellipse cx="230" cy={rightPawCy} rx="24" ry="15" fill="#FFFFFF" stroke="#2E2E38" strokeWidth="5" />
    </svg>
  );
}

export default BongoCat;
