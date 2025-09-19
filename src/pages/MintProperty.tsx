import { useState } from "react";
import { Upload, MapPin, DollarSign, Percent, Calendar, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ConditionalNavigation from "@/components/ConditionalNavigation";

const MintProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    propertyType: "",
    totalValue: "",
    tokenSupply: "",
    pricePerToken: "",
    expectedReturn: "",
    duration: "",
  });

  const propertyTypes = ["Residential", "Commercial", "Industrial", "Land", "Mixed-Use"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <ConditionalNavigation />

      <div className="pt-8 pb-16 ml-64">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Mint Property NFT
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tokenize your real estate property and make it available for fractional investment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-luxury-gold" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Property Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Luxury Villa in Beverly Hills"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your property in detail..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="location"
                          placeholder="City, State, Country"
                          className="pl-10"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select onValueChange={(value) => handleInputChange("propertyType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {propertyTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-luxury-gold" />
                    Financial Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="totalValue">Total Property Value (USD)</Label>
                      <Input
                        id="totalValue"
                        type="number"
                        placeholder="5000000"
                        value={formData.totalValue}
                        onChange={(e) => handleInputChange("totalValue", e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="tokenSupply">Total Token Supply</Label>
                      <Input
                        id="tokenSupply"
                        type="number"
                        placeholder="10000"
                        value={formData.tokenSupply}
                        onChange={(e) => handleInputChange("tokenSupply", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pricePerToken">Price per Token (USD)</Label>
                      <Input
                        id="pricePerToken"
                        type="number"
                        placeholder="500"
                        value={formData.pricePerToken}
                        onChange={(e) => handleInputChange("pricePerToken", e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                      <div className="relative">
                        <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="expectedReturn"
                          type="number"
                          placeholder="8.5"
                          className="pr-10"
                          value={formData.expectedReturn}
                          onChange={(e) => handleInputChange("expectedReturn", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="duration">Investment Duration (Years)</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="duration"
                        type="number"
                        placeholder="5"
                        className="pl-10"
                        value={formData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-luxury-gold" />
                    Property Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-luxury-gold/50 transition-colors">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload Property Images</h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop your images here, or click to browse
                    </p>
                    <Button variant="outline">Choose Files</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">
                      {formData.title || "Property Title"}
                    </h3>
                    <p className="text-muted-foreground">
                      {formData.location || "Location"}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Value</span>
                      <span className="font-medium">
                        ${formData.totalValue ? Number(formData.totalValue).toLocaleString() : "0"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Token Supply</span>
                      <span className="font-medium">
                        {formData.tokenSupply ? Number(formData.tokenSupply).toLocaleString() : "0"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Price/Token</span>
                      <span className="font-medium">
                        ${formData.pricePerToken || "0"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Expected Return</span>
                      <span className="font-medium text-luxury-gold">
                        {formData.expectedReturn || "0"}% APY
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Minting Cost</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Platform Fee</span>
                    <span>0.1 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Gas Fee</span>
                    <span>~0.05 ETH</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total Cost</span>
                      <span className="text-luxury-gold">0.15 ETH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button variant="luxury" size="lg" className="w-full">
                Mint Property NFT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintProperty;