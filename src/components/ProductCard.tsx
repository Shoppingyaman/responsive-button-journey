
import { ReactNode } from "react";

interface ProductCardProps {
  children: ReactNode;
  className?: string;
}

const ProductCard = ({ children, className = "" }: ProductCardProps) => {
  return (
    <div className={`bg-yellow-50 rounded-3xl p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default ProductCard;
