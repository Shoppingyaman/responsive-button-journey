
import { ReactNode } from "react";

interface ProductCardProps {
  children: ReactNode;
  className?: string;
}

const ProductCard = ({ children, className = "" }: ProductCardProps) => {
  return (
    <div className={`bg-transparent rounded-3xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export default ProductCard;
