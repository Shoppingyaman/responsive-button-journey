
import ActionButton from "@/components/ActionButton";
import ProductCard from "@/components/ProductCard";
import { Download, Spotify, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url('/lovable-uploads/be8eed30-a0f0-4dae-a8b7-38d627b3569e.png')`,
        }}
      ></div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 max-w-7xl mx-auto w-full z-10">
        {/* Tea Package and Cup Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/lovable-uploads/be8eed30-a0f0-4dae-a8b7-38d627b3569e.png"
            alt="Kotagala Tea Package and Cup"
            className="w-full max-w-md object-contain"
            style={{ maxHeight: "70vh" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
          {/* Product Info Card */}
          <ProductCard className="w-full max-w-md">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full">
                  <span className="text-xl font-bold">කොටගල</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-green-800 mb-2">නැන්හිරගේ</h1>
              <p className="text-amber-600 text-xl">කළු ටයරසේව</p>
            </div>
          </ProductCard>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            {/* Download Button */}
            <ActionButton
              variant="download"
              icon={<Download />}
              className="w-full"
            >
              කළු පොත Download කරගන්න
            </ActionButton>

            {/* More Info Button */}
            <ActionButton variant="primary" className="w-full">
              කළු අහන්න
            </ActionButton>

            {/* Spotify Button */}
            <ActionButton
              variant="spotify"
              icon={<Spotify />}
              className="w-full"
            >
              Spotify
            </ActionButton>

            {/* YouTube Button */}
            <ActionButton
              variant="youtube"
              icon={<Youtube />}
              className="w-full"
            >
              YouTube
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
