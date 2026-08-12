/**
 * Minimal monochrome social marks, drawn in the same stroke language as
 * Material Symbols Outlined (1.6px strokes, geometric). Brand logos are not
 * part of the Material Symbols font, so these are hand-drawn inline SVGs.
 */
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Instagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Facebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.8" />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="600"
        fontFamily="Space Grotesk, sans-serif"
        fill="currentColor"
      >
        f
      </text>
    </svg>
  );
}

function LinkedIn({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.8" />
      <text
        x="12"
        y="16.4"
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fontFamily="Space Grotesk, sans-serif"
        fill="currentColor"
      >
        in
      </text>
    </svg>
  );
}

function WhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M12 4.4a7.6 7.6 0 0 0-6.6 11.4L4.4 19.6l3.9-1A7.6 7.6 0 1 0 12 4.4z" />
      <path d="M9.6 8.5c-.3.5-.4 1-.1 1.6.7 1.6 1.9 2.8 3.5 3.5.6.3 1.1.2 1.6-.1l.5-.5 1.8 1.1-1 1.6c-.2.4-.7.6-1.1.5-2.5-.5-4.7-2.7-5.2-5.2-.1-.4.1-.9.5-1.1l1.6-1-1.1 1.8-.5.5z" />
    </svg>
  );
}

const marks = { instagram: Instagram, facebook: Facebook, linkedin: LinkedIn, whatsapp: WhatsApp };

export default function SocialIcon({ name, className = "h-5 w-5" }) {
  const Mark = marks[name];
  if (!Mark) return null;
  return <Mark className={className} />;
}
