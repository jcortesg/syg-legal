import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>SYG Legal Logo</title>
      <path d="M12 22V12" />
      <path d="M12 12H2L8 6" />
      <path d="M12 12H22L16 6" />
      <path d="M6 12L2 17" />
      <path d="M18 12L22 17" />
    </svg>
  );
}
