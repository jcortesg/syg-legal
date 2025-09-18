import Image from 'next/image';

export function LogoImage({ className }: { className?: string }) {
  return (
    <Image
      src="/syg-logo.png"
      alt="SYG Legal Logo"
      width={120}
      height={40}
      className={className}
      priority
    />
  );
}
