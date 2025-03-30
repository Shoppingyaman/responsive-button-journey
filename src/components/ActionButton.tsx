
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "spotify" | "youtube" | "download";
}

const ActionButton = ({
  children,
  className,
  icon,
  variant = "primary",
  ...props
}: ActionButtonProps) => {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    spotify: "bg-[#1DB954] text-white hover:bg-[#1DB954]/90",
    youtube: "bg-[#FF0000] text-white hover:bg-[#FF0000]/90",
    download: "bg-primary text-white hover:bg-primary/90",
  };

  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default ActionButton;
