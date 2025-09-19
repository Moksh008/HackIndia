import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface Property {
  id: string;
  title: string;
  location: string;
  creator: string;
  image: string;
  backgroundColor?: string;
  propertyType: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  likes: number;
  views: number;
  roi: string;
  sharePrice: number;
  currency: string;
  availableShares: number;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, isOpen, onClose }) => {
  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{property.title}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <X size={16} />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{property.propertyType}</Badge>
              <span className="text-gray-600">{property.location}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Square Feet</p>
                <p className="font-semibold">{property.sqft.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Bedrooms</p>
                <p className="font-semibold">{property.bedrooms}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Bathrooms</p>
                <p className="font-semibold">{property.bathrooms}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ROI</p>
                <p className="font-semibold text-green-600">{property.roi}</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">Share Price</span>
                <span className="text-2xl font-bold">${property.sharePrice}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {property.availableShares} shares available
              </p>
              
              <div className="flex gap-2">
                <Button className="flex-1">Invest Now</Button>
                <Button variant="outline">Add to Watchlist</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyModal;
