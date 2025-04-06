
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CustomButtonProps {
  imgSrc: string;
  alt: string;
  href: string;
  className?: string;
  hidden?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  imgSrc, 
  alt, 
  href,
  className = "",
  hidden = false
}) => {
  const isMobile = useIsMobile();
  
  if (hidden) {
    return null;
  }

  return (
    <a 
      href={href}
      className={`block transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
      <img 
        src={imgSrc} 
        alt={alt} 
        className={`w-full object-contain ${isMobile ? 'max-w-[250px] mx-auto' : 'max-w-full'}`}
      />
    </a>
  );
};

export default CustomButton;
