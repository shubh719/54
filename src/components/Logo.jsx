export default function Logo({ inverted = false }) {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="flex shrink-0 items-center"
    >
      <img
        src="/assets/brand/fivefour-logo.svg"
        alt="FiveFour web agency logo"
        className="h-[26px] w-auto select-none"
        style={inverted ? { filter: "invert(1) brightness(1.15)" } : undefined}
      />
    </a>
  );
}