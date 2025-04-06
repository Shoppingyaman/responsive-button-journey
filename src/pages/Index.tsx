
import ActionButton from "@/components/ActionButton";
import ProductCard from "@/components/ProductCard";
import { Download, Music, Youtube } from "lucide-react";
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";

const Index = () => {
  const [steam, setSteam] = useState(false);
  
  // Toggle steam effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSteam(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10" style={{
      backgroundImage: `url('/lovable-uploads/58753af4-3908-40ba-a590-01607a969f26.png')`
    }}></div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 max-w-7xl mx-auto w-full z-10">
        {/* Tea Package Image with Steam Animation */}
        <div className="flex-1 flex justify-center items-center relative">
          <img alt="Kotagala Tea Package" style={{
            maxHeight: "80vh"
          }} src="/lovable-uploads/48f883dc-9c10-4905-aa22-49364da25302.png" className="w-full max-w-lg object-fill relative z-10" />
          
          {/* Steam animation elements */}
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 z-20 transition-opacity duration-1000 ${steam ? 'opacity-80' : 'opacity-0'}`}>
            <div className="steam-particle w-2 h-10 bg-white rounded-full opacity-60 animate-steam-1"></div>
            <div className="steam-particle w-2 h-8 bg-white rounded-full opacity-50 animate-steam-2 ml-3 mt-1"></div>
            <div className="steam-particle w-2 h-12 bg-white rounded-full opacity-70 animate-steam-3 ml-6"></div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
          {/* Product Info Card */}
          <ProductCard className="w-full max-w-md">
            <div className="text-center">
              <img src="/lovable-uploads/94239bce-1841-412b-ae85-8867cbc8ece4.png" alt="Kotagala Tea Logo" className="mx-auto mb-4 max-w-[250px]" />
            </div>
          </ProductCard>

          {/* Custom Buttons - Only showing 2nd and 4th buttons */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            {/* Download Button (2nd) */}
            <CustomButton imgSrc="/lovable-uploads/4c76103f-c923-4ea8-a3c9-02b700dd3b4b.png" alt="Download කරගන්න" href="#" />
            
            {/* YouTube Button (4th) */}
            <CustomButton imgSrc="/lovable-uploads/bc4d241b-1e8a-4f22-99a7-9a4da38dd8f7.png" alt="YouTube" href="#" />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;
