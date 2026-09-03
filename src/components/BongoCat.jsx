/**
 * Inline SVG Bongo Cat, redrawn to match the user-supplied hero artwork:
 * a white cat lying low with both mitten paws forward, warm brown outline,
 * salmon paw pads and inner ears, soft pink blush (SVG-only literals:
 * #FFFFFF cat, #4A3A37 outline, #F29B8D pads/ears, #F5C6C1 blush).
 *
 * `bap` swaps the two front paws between raised/pressed frames so the cat
 * baps along; the default (static) frame matches the artwork's pose with
 * the left paw raised.
 */
function BongoCat({ width = 240, height = 157, className, bap = false, decorative = true }) {
  // Paw frames: [left, right] — each is a translate/rotate preset. The bap
  // frame presses the raised paw down and lifts the other.
  const leftPaw = bap ? 'translate(136 244) rotate(-6)' : 'translate(128 222) rotate(-30)';
  const rightPaw = bap ? 'translate(304 220) rotate(26)' : 'translate(310 240) rotate(8)';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 460 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={decorative ? 'true' : undefined}
      focusable="false"
    >
      <path
        d="M86 268
           C 70 268 62 258 72 246
           L 140 170
           C 146 158 156 146 170 138
           L 162 104 L 196 124
           C 216 112 240 110 258 120
           L 286 102 L 288 134
           C 308 148 322 162 334 176
           C 362 204 384 234 390 252
           C 394 264 386 268 374 268
           Z"
        fill="#FFFFFF"
        stroke="#4A3A37"
        strokeWidth="9"
        strokeLinejoin="round"
      />
      <path d="M170 112 L 188 124 L 174 132 Z" fill="#F29B8D" />
      <path d="M280 110 L 282 128 L 268 124 Z" fill="#F29B8D" />
      <circle cx="214" cy="164" r="7.5" fill="#4A3A37" />
      <circle cx="282" cy="168" r="7.5" fill="#4A3A37" />
      <path
        d="M232 176 Q 240 186 248 176 Q 256 186 264 176"
        stroke="#4A3A37"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="184" cy="186" rx="15" ry="11" fill="#F5C6C1" />
      <ellipse cx="302" cy="190" rx="15" ry="11" fill="#F5C6C1" />
      <g transform={leftPaw}>
        <ellipse cx="0" cy="0" rx="33" ry="25" fill="#FFFFFF" stroke="#4A3A37" strokeWidth="9" />
        <ellipse cx="0" cy="6" rx="15" ry="11" fill="#F29B8D" />
        <circle cx="-19" cy="-10" r="7" fill="#F29B8D" />
        <circle cx="0" cy="-15" r="7" fill="#F29B8D" />
        <circle cx="19" cy="-10" r="7" fill="#F29B8D" />
      </g>
      <g transform={rightPaw}>
        <ellipse cx="0" cy="0" rx="33" ry="25" fill="#FFFFFF" stroke="#4A3A37" strokeWidth="9" />
        <ellipse cx="0" cy="6" rx="15" ry="11" fill="#F29B8D" />
        <circle cx="-19" cy="-10" r="7" fill="#F29B8D" />
        <circle cx="0" cy="-15" r="7" fill="#F29B8D" />
        <circle cx="19" cy="-10" r="7" fill="#F29B8D" />
      </g>
    </svg>
  );
}

export default BongoCat;
