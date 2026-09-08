import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  isLight?: boolean;
  onClick?: () => void;
}

export default function Logo({ className = "", isLight = false, onClick }: LogoProps) {
  // Toggle this boolean when an actual logo image is available
  const hasImageLogo = true; 

  return (
    <Link href="/" className={`flex-shrink-0 flex items-center group ${className}`} onClick={onClick} aria-label="BeFutureKids Home">
      {hasImageLogo ? (
        <div className="relative flex items-center">
          <Image 
            src="/logo.png" 
            alt="BeFutureKids Logo" 
            width={160}
            height={160}
            className="object-contain w-auto h-12 md:h-16"
            priority
          />
        </div>
      ) : (
        <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isLight ? "text-white" : "text-[#071A3D] dark:text-white"}`}>
          BeFuture<span className={isLight ? "text-cyan-400" : "text-[#2563EB] dark:text-cyan-400"}>Kids</span>
        </span>
      )}
    </Link>
  );
}
