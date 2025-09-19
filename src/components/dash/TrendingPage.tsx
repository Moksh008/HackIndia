import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface TrendingPageProps {
  onBack: () => void;
}

const TrendingPage: React.FC<TrendingPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Button>
          <h1 className="text-2xl font-bold">Trending Properties</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Trending Property 1</h3>
              <p className="text-gray-600">This is a trending property with high ROI and popularity.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Trending Property 2</h3>
              <p className="text-gray-600">Another trending property with great investment potential.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Trending Property 3</h3>
              <p className="text-gray-600">A third trending property for your portfolio.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
