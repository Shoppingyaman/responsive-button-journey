
import ActionButton from "@/components/ActionButton";
import ProductCard from "@/components/ProductCard";
import { Download, Music, Youtube } from "lucide-react";
import CustomButton from "@/components/CustomButton";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10" style={{
      backgroundImage: `url('/lovable-uploads/58753af4-3908-40ba-a590-01607a969f26.png')`
    }}></div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 max-w-7xl mx-auto w-full z-10">
        {/* Tea Package Image */}
        <div className="flex-1 flex justify-center items-center">
          <img alt="Kotagala Tea Package" style={{
          maxHeight: "80vh"
        }} src="/lovable-uploads/48f883dc-9c10-4905-aa22-49364da25302.png" className="w-full max-w-lg object-fill" />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
          {/* Product Info Card */}
          <ProductCard className="w-full max-w-md">
            <div className="text-center">
              <img src="/lovable-uploads/94239bce-1841-412b-ae85-8867cbc8ece4.png" alt="Kotagala Tea Logo" className="mx-auto mb-4 max-w-[250px]" />
            </div>
          </ProductCard>

          {/* Custom Buttons - Temporarily hidden */}
          <div className={`flex flex-col gap-4 w-full ${isMobile ? 'max-w-xs' : 'max-w-md'}`}>
            {/* More Info Button */}
            <CustomButton imgSrc="/lovable-uploads/80de75c3-b6eb-4276-b452-1140139508a7.png" alt="කව් අහන්න" href="#" hidden={true} />
            
            {/* Download Button */}
            <CustomButton imgSrc="/lovable-uploads/4c76103f-c923-4ea8-a3c9-02b700dd3b4b.png" alt="Download කරගන්න" href="#" hidden={true} />
            
            {/* Spotify Button */}
            <CustomButton imgSrc="/lovable-uploads/c2bb940b-045b-49f3-af8c-cdaf833c19a3.png" alt="Spotify" href="#" hidden={true} />
            
            {/* YouTube Button */}
            <CustomButton imgSrc="/lovable-uploads/bc4d241b-1e8a-4f22-99a7-9a4da38dd8f7.png" alt="YouTube" href="#" hidden={true} />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;
