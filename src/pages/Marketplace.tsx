import { useState } from "react";
import { Search, Filter, MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ConditionalNavigation from "@/components/ConditionalNavigation";
import ProtectedAction from "@/components/ProtectedAction";

// Import images
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import heroHouse from "@/assets/hero-house.jpg";

const properties = [
  {
    id: 1,
    title: "Modern Villa with Ocean View",
    location: "Malibu, CA",
    price: "2.5 ETH",
    usdPrice: "$4,250,000",
    image: property1,
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "Villa",
    status: "Available"
  },
  {
    id: 2,
    title: "Downtown Luxury Penthouse",
    location: "Manhattan, NY",
    price: "3.8 ETH",
    usdPrice: "$6,460,000",
    image: property2,
    beds: 3,
    baths: 2,
    sqft: 2800,
    type: "Penthouse",
    status: "Available"
  },
  {
    id: 3,
    title: "Beachfront Contemporary Home",
    location: "Miami, FL",
    price: "1.9 ETH",
    usdPrice: "$3,230,000",
    image: property3,
    beds: 5,
    baths: 4,
    sqft: 4100,
    type: "House",
    status: "Sold"
  },
  {
    id: 4,
    title: "Mountain Resort Cabin",
    location: "Aspen, CO",
    price: "1.2 ETH",
    usdPrice: "$2,040,000",
    image: heroHouse,
    beds: 3,
    baths: 2,
    sqft: 2400,
    type: "Cabin",
    status: "Available"
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const propertyTypes = ["All", "Villa", "Penthouse", "House", "Cabin"];

  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === "All" || property.type === selectedType)
  );

  return (
    <div className="min-h-screen bg-background">
      <ConditionalNavigation />

      <div className="pt-8 pb-16 ml-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Property Marketplace</h1>
            <p className="text-muted-foreground mt-1">Discover and invest in tokenized luxury properties</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-card rounded-xl border">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {propertyTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "luxury" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="whitespace-nowrap"
                >
                  {type}
                </Button>
              ))}
            </div>

            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={property.status === "Available" ? "default" : "secondary"}>
                      {property.status}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {property.type}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.sqft.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-luxury-gold">
                      {property.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {property.usdPrice}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  {property.status === "Available" ? (
                    <ProtectedAction
                      action={() => {
                        console.log("Viewing details for property:", property.id);
                      }}
                      actionName="View Details"
                      description="You need to connect your wallet and complete verification to view property details and make investments."
                    >
                      <Button className="w-full" variant="luxury">
                        View Details
                      </Button>
                    </ProtectedAction>
                  ) : (
                    <Button 
                      className="w-full" 
                      variant="outline"
                      disabled
                    >
                      Sold Out
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;