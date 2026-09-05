import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  isLight?: boolean;
  onClick?: () => void;
}

export default function Logo({ className = "", isLight = false, onClick }: LogoProps) {
  // Toggle this boolean when an actual logo image is available
  const hasImageLogo = false; 

  return (
    <Link href="/" className={`flex-shrink-0 flex items-center group ${className}`} onClick={onClick} aria-label="BeFutureKids Home">
      {hasImageLogo ? (
        <div className="relative w-32 h-10">
          <Image 
            src={isLight ? "/logo-light.svg" : "/logo.svg"} 
            alt="BeFutureKids Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isLight ? "text-white" : "text-[#071A3D]"}`}>
          BeFuture<span className={isLight ? "text-cyan-400" : "text-[#2563EB]"}>Kids</span>
        </span>
      )}
    </Link>
  );
}
