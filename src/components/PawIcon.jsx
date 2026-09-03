/**
 * Decorative pink paw glyph (the brand mark). Always aria-hidden — pair it
 * with visible text or a labelled parent.
 */
function PawIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="12" cy="15" rx="6" ry="5" fill="#F4A7B9" />
      <circle cx="5.5" cy="9.5" r="2.4" fill="#F4A7B9" />
      <circle cx="12" cy="6.5" r="2.4" fill="#F4A7B9" />
      <circle cx="18.5" cy="9.5" r="2.4" fill="#F4A7B9" />
    </svg>
  );
}

export default PawIcon;
