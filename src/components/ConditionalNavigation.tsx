import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Wallet, User, LogOut, Home, ShoppingBag, Hammer, BarChart3, Monitor, History, Settings, Power } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";

const ConditionalNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isWalletConnected, connectWallet, logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const isLandingPage = location.pathname === "/";
  const isMarketplacePage = location.pathname === "/marketplace";
  const isDashboardPage = location.pathname === "/dashboard";

  const handleWalletConnect = async () => {
    await connectWallet();
    // Redirect to eKYC after wallet connection
    navigate("/ekyc");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Top navigation for landing page
  if (isLandingPage) {
    return (
      <nav className="absolute top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-indigo-600">
            OpulRent
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
            <a href="/marketplace" className="hover:text-indigo-600">
              MarketPlace
            </a>
            <a href="/mint" className="hover:text-indigo-600">
              Mint
            </a>
            <a href="/analyze" className="hover:text-indigo-600">
              Analyze
            </a>
            <a href="/dashboard" className="hover:text-indigo-600">
              Dashboard
            </a>
          </div>

          {/* Wallet Connect Button */}
          <div className="hidden md:flex items-center space-x-4">
            {isWalletConnected ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 text-green-800 rounded-lg">
                  <Wallet className="w-4 h-4" />
                  <span className="text-sm">Connected</span>
                </div>
                {user && (
                  <>
                    <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                )}
              </div>
            ) : (
              <Button onClick={handleWalletConnect} className="flex items-center space-x-2">
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
            <a href="#" className="block hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="block hover:text-indigo-600">
              MarketPlace
            </a>
            <a href="/marketplace" className="block hover:text-indigo-600">
              Mint
            </a>
            <a href="#" className="block hover:text-indigo-600">
              Analyze
            </a>
            <a href="/dashboard" className="hover:text-indigo-600">
              Dashboard
            </a>
            {isWalletConnected ? (
              <div className="space-y-2">
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 text-green-800 rounded-lg">
                  <Wallet className="w-4 h-4" />
                  <span className="text-sm">Connected</span>
                </div>
                {user && (
                  <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")} className="w-full">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={handleLogout} className="w-full">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={handleWalletConnect} className="w-full flex items-center justify-center space-x-2">
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </Button>
            )}
          </div>
        )}
      </nav>
    );
  }
  // Fixed left sidebar for all non-home routes
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-white border-r border-gray-200 flex flex-col z-40">
      {/* Logo */}
<div className="p-4 border-b border-gray-200 flex justify-center">
  <a href="/" className="block">
    <img
      src="/logo1.png" 
      alt="OpulRent Logo"
      className="w-20 h-20 object-contain   transition-transform"
    />
  </a>
</div>




      {/* Navigation Icons */}
      <nav className="flex-1 flex flex-col items-center py-4 space-y-2">
        {/* Dashboard Icon with active state */}
        <a
          href="/dashboard"
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            isDashboardPage 
              ? "bg-blue-100 text-blue-600" 
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`}
          title="Dashboard"
        >
          <Monitor className="w-5 h-5" />
        </a>
        {/* Marketplace */}
        <a
          href="/marketplace"
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            isMarketplacePage 
              ? "bg-blue-100 text-blue-600" 
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`}
          title="Marketplace"
        >
          <ShoppingBag className="w-5 h-5" />
        </a>

        {/* Mint */}
        <a
          href="/mint"
          className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          title="Mint Property"
        >
          <Hammer className="w-5 h-5" />
        </a>

        {/* Analyze */}
        <a
          href="/analyze"
          className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          title="Analyze"
        >
          <BarChart3 className="w-5 h-5" />
        </a>
        {/* Settings */}
        <button
          className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        {isWalletConnected ? (
          <button
            onClick={handleLogout}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            title="Logout"
          >
            <Power className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleWalletConnect}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-green-50 transition-colors"
            title="Connect Wallet"
          >
            <Wallet className="w-5 h-5" />
          </button>
        )}
      </div>
    </aside>
  );
};

export default ConditionalNavigation;
