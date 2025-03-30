
import ActionButton from "@/components/ActionButton";
import ProductCard from "@/components/ProductCard";
import { Download, Music, Youtube } from "lucide-react";
import CustomButton from "@/components/CustomButton";

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url('/lovable-uploads/f2178032-ae50-47e4-8ac0-f13b8d42608d.png')`,
        }}
      ></div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 max-w-7xl mx-auto w-full z-10">
        {/* Tea Package Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/lovable-uploads/9a3c665d-5c2e-4f8c-8414-605fe9bf5709.png"
            alt="Kotagala Tea Package"
            className="w-full max-w-md object-contain"
            style={{ maxHeight: "70vh" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
          {/* Product Info Card */}
          <ProductCard className="w-full max-w-md">
            <div className="text-center">
              <img 
                src="/lovable-uploads/94239bce-1841-412b-ae85-8867cbc8ece4.png" 
                alt="Kotagala Tea Logo" 
                className="mx-auto mb-4 max-w-[250px]"
              />
            </div>
          </ProductCard>

          {/* Custom Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            {/* More Info Button */}
            <CustomButton 
              imgSrc="/lovable-uploads/80de75c3-b6eb-4276-b452-1140139508a7.png" 
              alt="කව් අහන්න"
              href="#"
            />
            
            {/* Download Button */}
            <CustomButton 
              imgSrc="/lovable-uploads/4c76103f-c923-4ea8-a3c9-02b700dd3b4b.png" 
              alt="Download කරගන්න"
              href="#"
            />
            
            {/* Spotify Button */}
            <CustomButton 
              imgSrc="/lovable-uploads/c2bb940b-045b-49f3-af8c-cdaf833c19a3.png" 
              alt="Spotify"
              href="#"
            />
            
            {/* YouTube Button */}
            <CustomButton 
              imgSrc="/lovable-uploads/8920b97a-686c-40d8-a2b8-4fb4e6f23be9.png" 
              alt="YouTube"
              href="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
