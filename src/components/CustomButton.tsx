
import React from 'react';
interface CustomButtonProps {
  imgSrc: string;
  alt: string;
  href: string;
  className?: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  imgSrc,
  alt,
  href,
  className = ""
}) => {
  return <a href={href} className={`block transition-transform hover:scale-105 active:scale-95 ${className}`}>
      <img src={imgSrc} alt={alt} className="w-full object-contain" />
    </a>;
};
export default CustomButton;
