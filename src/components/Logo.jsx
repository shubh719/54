export default function Logo({ inverted = false }) {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="flex shrink-0 items-center gap-2.5"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center ${
          inverted ? "bg-white text-black-950" : "bg-black-950 text-cream"
        }`}
      >
        <span className="font-display text-[14px] font-semibold leading-none">54</span>
      </span>
      <span
        className={`font-display text-[19px] font-semibold tracking-tight ${
          inverted ? "text-cream" : "text-black-950"
        }`}
      >
        FiveFour
      </span>
    </a>
  );
}
