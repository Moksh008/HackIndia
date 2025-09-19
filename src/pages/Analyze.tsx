import { useState } from "react";
import { TrendingUp, TrendingDown, MapPin, DollarSign, BarChart3, PieChart, Calendar, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ConditionalNavigation from "@/components/ConditionalNavigation";

const marketData = [
  {
    location: "Beverly Hills, CA",
    avgPrice: "$8.2M",
    change: "+12.5%",
    trend: "up",
    volume: "142 sales",
    forecast: "Strong growth expected"
  },
  {
    location: "Manhattan, NY",
    avgPrice: "$6.8M",
    change: "+8.3%",
    trend: "up",
    volume: "284 sales",
    forecast: "Steady appreciation"
  },
  {
    location: "Miami Beach, FL",
    avgPrice: "$4.1M",
    change: "-2.1%",
    trend: "down",
    volume: "98 sales",
    forecast: "Market correction"
  },
  {
    location: "Aspen, CO",
    avgPrice: "$5.9M",
    change: "+15.7%",
    trend: "up",
    volume: "67 sales",
    forecast: "High demand season"
  }
];

const performanceMetrics = [
  { label: "Total Portfolio Value", value: "$12.4M", change: "+18.2%", trend: "up" },
  { label: "Monthly ROI", value: "2.8%", change: "+0.4%", trend: "up" },
  { label: "Properties Owned", value: "23", change: "+3", trend: "up" },
  { label: "Avg. Property Appreciation", value: "11.5%", change: "+2.1%", trend: "up" }
];

const Analyze = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [timeframe, setTimeframe] = useState("1y");

  return (
    <div className="min-h-screen bg-background">
      <ConditionalNavigation />

      <div className="pt-8 pb-16 ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Market Analysis
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-time insights and analytics for luxury real estate markets
              </p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="fl">Florida</SelectItem>
                  <SelectItem value="co">Colorado</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">1 Month</SelectItem>
                  <SelectItem value="3m">3 Months</SelectItem>
                  <SelectItem value="6m">6 Months</SelectItem>
                  <SelectItem value="1y">1 Year</SelectItem>
                  <SelectItem value="5y">5 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                    <div className={`flex items-center space-x-1 text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend === 'up' ? 
                        <TrendingUp className="w-4 h-4" /> : 
                        <TrendingDown className="w-4 h-4" />
                      }
                      <span>{metric.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Market Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-luxury-gold" />
                  Market Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive chart would go here</p>
                    <p className="text-sm text-muted-foreground">Showing price trends over time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Allocation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-luxury-gold" />
                  Portfolio Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Portfolio breakdown chart</p>
                    <p className="text-sm text-muted-foreground">Asset allocation by property type</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Locations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  Market Locations
                </span>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search locations..."
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketData.map((market, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-luxury-gold"></div>
                      <div>
                        <h3 className="font-semibold">{market.location}</h3>
                        <p className="text-sm text-muted-foreground">{market.volume}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="font-semibold">{market.avgPrice}</p>
                        <p className="text-sm text-muted-foreground">Avg. Price</p>
                      </div>
                      
                      <div className="text-right">
                        <div className={`flex items-center space-x-1 ${
                          market.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {market.trend === 'up' ? 
                            <TrendingUp className="w-4 h-4" /> : 
                            <TrendingDown className="w-4 h-4" />
                          }
                          <span className="font-semibold">{market.change}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">30d change</p>
                      </div>
                      
                      <div className="text-right min-w-32">
                        <Badge variant="outline" className="text-xs">
                          {market.forecast}
                        </Badge>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="luxury" size="lg" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Analysis Report
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Export Market Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;