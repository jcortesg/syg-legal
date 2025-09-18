export function HeroBackground({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 1440 700"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="wavy-pattern"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
          patternTransform="rotate(45)"
        >
          <path
            d="M 0,50 C 25,25 75,75 100,50"
            stroke="#134F75"
            fill="none"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <path
            d="M 0,60 C 25,35 75,85 100,60"
            stroke="#134F75"
            fill="none"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wavy-pattern)" />
    </svg>
  );
}
