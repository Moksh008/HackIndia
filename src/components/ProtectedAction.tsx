import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Wallet } from 'lucide-react';

interface ProtectedActionProps {
  children: React.ReactNode;
  action: () => void;
  actionName: string;
  description?: string;
}

const ProtectedAction: React.FC<ProtectedActionProps> = ({ 
  children, 
  action, 
  actionName, 
  description = "You need to connect your wallet and complete verification to perform this action." 
}) => {
  const { isAuthenticated, isWalletConnected, connectWallet } = useAuth();

  const handleAction = () => {
    if (isAuthenticated) {
      action();
    } else if (isWalletConnected) {
      // Redirect to eKYC if wallet is connected but not authenticated
      window.location.href = '/ekyc';
    } else {
      // Connect wallet first
      connectWallet();
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          onClick={handleAction}
          className="w-full"
        >
          {actionName}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            Authentication Required
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            To {actionName.toLowerCase()}, you need to:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Connect your wallet</li>
            <li>Complete eKYC verification</li>
            <li>Then you can perform this action</li>
          </ol>
          <div className="flex gap-2">
            <Button 
              onClick={connectWallet}
              className="flex-1"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/marketplace'}
            >
              Browse Marketplace
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProtectedAction;
