import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
  children?: ReactNode;
  priority?: boolean;
  sizes?: string;
}

/**
 * Optimized background image component using next/image
 * Provides proper image optimization while maintaining the visual effect of CSS background-image
 */
export function BackgroundImage({
  src,
  alt,
  className,
  overlayClassName,
  children,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: BackgroundImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
      />
      {overlayClassName && (
        <div 
          aria-hidden="true" 
          className={cn("absolute inset-0 z-[1]", overlayClassName)} 
        />
      )}
      {children && (
        <div className="relative z-[2]">
          {children}
        </div>
      )}
    </div>
  );
}
