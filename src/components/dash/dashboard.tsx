import React, { useState } from "react";
import { MoreHorizontal, ArrowUpRight, ArrowDownRight, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// --- Dashboard Component ---
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700">Rowena Ravenclaw</span>
            </div>
          </div>
        </div>
        
        {/* Main layout with right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Main content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
              {/* NFT Marketplace */}
              <Card className="lg:col-span-4">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">NFT Marketplace</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 via-purple-400 to-purple-600 h-48">
                <img 
                  src="/land.jpg" 
                  alt="House Andromeda" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      Hot Picks
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">House Andromeda</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span>💎 1.44 Ether</span>
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="text-xs text-white/80 mt-1">[24 bidders]</div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <span className="text-xs">👤</span>
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <span className="text-xs">🔍</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
              {/* Investment Stats */}
              <Card className="lg:col-span-5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Investment Stats</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600">💰</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Investment</p>
                    <p className="font-semibold">💎 0.56 Ether</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Max</div>
                  <div className="w-16 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
                  <div className="text-xs text-gray-500">Min</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600">📈</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Weekly Returns</p>
                    <p className="font-semibold">💎 0.005 Ether</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600">💸</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Expenses</p>
                    <p className="font-semibold">💎 0.005 Ether</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
              {/* NFTs owned */}
              <Card className="lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">NFTs owned</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Roma Avenue</p>
                    <p className="text-lg font-bold">💎 0.91 Ether</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-500 text-sm font-medium flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      +10%
                    </div>
                    <div className="w-16 h-6 bg-green-100 rounded overflow-hidden">
                      <div className="w-3/4 h-full bg-green-400"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Thorian Park</p>
                    <p className="text-lg font-bold">💎 0.89 Ether</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-500 text-sm font-medium flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      +15%
                    </div>
                    <div className="w-16 h-6 bg-green-100 rounded overflow-hidden">
                      <div className="w-4/5 h-full bg-green-400"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Linda Mansion</p>
                    <p className="text-lg font-bold">💎 1.1 Ether</p>
                  </div>
                  <div className="text-right">
                    <div className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <ArrowDownRight className="w-3 h-3" />
                      -17%
                    </div>
                    <div className="w-16 h-6 bg-red-100 rounded overflow-hidden">
                      <div className="w-1/2 h-full bg-red-400"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Villa Mary</p>
                    <p className="text-lg font-bold">💎 0.71 Ether</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-500 text-sm font-medium flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      +22%
                    </div>
                    <div className="w-16 h-6 bg-green-100 rounded overflow-hidden">
                      <div className="w-3/4 h-full bg-green-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
              {/* My Portfolio */}
              <Card className="lg:col-span-6">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">My Portfolio</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <img src="/api/placeholder/80/60" alt="Mandragora Mansion" className="w-full h-16 object-cover rounded-lg mb-2" />
                  <p className="text-xs font-medium">Mandragora Mansion</p>
                  <p className="text-xs text-gray-500">💎 0.005 Ether</p>
                </div>
                <div className="text-center">
                  <img src="/api/placeholder/80/60" alt="Halbert Avenue" className="w-full h-16 object-cover rounded-lg mb-2" />
                  <p className="text-xs font-medium">Halbert Avenue</p>
                  <p className="text-xs text-gray-500">💎 0.076 Ether</p>
                </div>
                <div className="text-center">
                  <img src="/api/placeholder/80/60" alt="Pom" className="w-full h-16 object-cover rounded-lg mb-2" />
                  <p className="text-xs font-medium">Pom</p>
                  <p className="text-xs text-gray-500">💎 0</p>
                </div>
              </div>

              {/* Total Distributions Chart */}
              <div>
                <h3 className="font-medium mb-4">Total Distributions</h3>
                <div className="relative h-32">
                  <svg viewBox="0 0 400 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 80 Q 50 60 100 70 T 200 65 T 300 45 T 400 50"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 0 80 Q 50 60 100 70 T 200 65 T 300 45 T 400 50 L 400 120 L 0 120 Z"
                      fill="url(#gradient)"
                    />
                    <circle cx="200" cy="65" r="4" fill="#8b5cf6" />
                    <text x="200" y="55" textAnchor="middle" className="text-xs fill-purple-600">$180</text>
                  </svg>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            {/* My Cards */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">My Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white">
                  <div className="mb-4">
                    <p className="text-purple-200 text-sm">Balance</p>
                    <p className="text-3xl font-bold">$521,652</p>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Monthly Profit</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-semibold">$14,225</p>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">+10%</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Picks */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Top Picks</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-orange-400 rounded"></div>
                      <div>
                        <p className="font-medium text-sm">Roma Avenue</p>
                        <p className="text-xs text-gray-500">$ 496,000</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">0.0000345 Ether</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-orange-400 rounded"></div>
                      <div>
                        <p className="font-medium text-sm">Atlas Shack</p>
                        <p className="text-xs text-gray-500">$ 500,000</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">0.0000678 Ether</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-green-400 rounded"></div>
                      <div>
                        <p className="font-medium text-sm">Germanirin</p>
                        <p className="text-xs text-gray-500">$ 798,000</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">0.0000887 Ether</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-orange-400 rounded"></div>
                      <div>
                        <p className="font-medium text-sm">Heavens</p>
                        <p className="text-xs text-gray-500">$ 667,000</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">0.0000761 Ether</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-red-400 rounded"></div>
                      <div>
                        <p className="font-medium text-sm">Heretho</p>
                        <p className="text-xs text-gray-500">$ 348,000</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">0.0000302 Ether</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
