import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface PortfolioPageProps {
  onBack: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBack }) => {
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
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Property Investment 1</h3>
              <p className="text-gray-600 mb-2">Modern Downtown Apartment</p>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Shares: 10</span>
                <span className="text-sm font-medium">$2,500</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Property Investment 2</h3>
              <p className="text-gray-600 mb-2">Luxury Villa</p>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Shares: 5</span>
                <span className="text-sm font-medium">$2,500</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Property Investment 3</h3>
              <p className="text-gray-600 mb-2">Beachfront Condo</p>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Shares: 8</span>
                <span className="text-sm font-medium">$2,800</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
