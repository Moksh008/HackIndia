import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  walletAddress: string;
  isVerified: boolean;
  ekycCompleted: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isWalletConnected: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  completeEkyc: () => void;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const isAuthenticated = user !== null && user.ekycCompleted;

  const connectWallet = async () => {
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum || !ethereum.request) {
        alert('MetaMask not detected. Please install MetaMask to continue.');
        return;
      }

      // Request account access
      const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
      const selectedAddress = accounts && accounts.length > 0 ? accounts[0] : '';
      if (!selectedAddress) {
        throw new Error('No account selected');
      }

      setIsWalletConnected(true);
      localStorage.setItem('walletConnected', 'true');
      localStorage.setItem('walletAddress', selectedAddress);

      // Listen for account changes
      const handleAccountsChanged = (accs: string[]) => {
        if (!accs || accs.length === 0) {
          disconnectWallet();
        } else {
          localStorage.setItem('walletAddress', accs[0]);
        }
      };

      const handleChainChanged = (_chainId: string) => {
        // Reload to ensure the dapp picks up the new network
        window.location.reload();
      };

      ethereum.removeListener && ethereum.removeListener('accountsChanged', handleAccountsChanged);
      ethereum.removeListener && ethereum.removeListener('chainChanged', handleChainChanged);
      ethereum.on && ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on && ethereum.on('chainChanged', handleChainChanged);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setUser(null);
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
  };

  const completeEkyc = () => {
    if (user) {
      setUser({ ...user, ekycCompleted: true });
    }
  };

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setIsWalletConnected(false);
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
  };

  useEffect(() => {
    // Check for existing wallet connection on app load
    const walletConnected = localStorage.getItem('walletConnected');
    const walletAddress = localStorage.getItem('walletAddress');
    
    if (walletConnected && walletAddress) {
      setIsWalletConnected(true);
    }
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isWalletConnected,
    connectWallet,
    disconnectWallet,
    completeEkyc,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
