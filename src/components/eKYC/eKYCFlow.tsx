import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, User, Camera, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { useAuth } from '../../contexts/AuthContext';

interface eKYCFlowProps {
  onComplete: () => void;
  onBack: () => void;
}

const EKYCFlow: React.FC<eKYCFlowProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const { completeEkyc, login } = useAuth();

  const steps = [
    {
      id: 1,
      title: "Personal Information",
      description: "Enter your personal details",
      icon: User,
      content: "PersonalInfoStep"
    },
    {
      id: 2,
      title: "Document Verification",
      description: "Upload and verify your identity documents",
      icon: Camera,
      content: "DocumentVerificationStep"
    },
    {
      id: 3,
      title: "Final Verification",
      description: "Complete the verification process",
      icon: FileText,
      content: "FinalVerificationStep"
    }
  ];

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    
    if (stepId < steps.length) {
      setCurrentStep(stepId + 1);
    } else {
      // Complete eKYC and create user
      completeEkyc();
      const mockUser = {
        id: "1",
        name: "John Doe",
        username: "@johndoe",
        avatar: "/logo.png",
        walletAddress: localStorage.getItem('walletAddress') || '',
        isVerified: true,
        ekycCompleted: true
      };
      login(mockUser);
      onComplete();
    }
  };

  const handleNext = () => {
    handleStepComplete(currentStep);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const progress = (completedSteps.length / steps.length) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Document Verification</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Upload your government-issued ID</p>
                <Button variant="outline">Choose File</Button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Upload a selfie for verification</p>
                <Button variant="outline">Take Photo</Button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Final Verification</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="kyc" />
                <label htmlFor="kyc" className="text-sm">
                  I confirm that all information provided is accurate
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="verification" />
                <label htmlFor="verification" className="text-sm">
                  I consent to identity verification checks
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center">Complete Your eKYC Verification</CardTitle>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {currentStep} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Step Indicators */}
          <div className="flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = currentStep === step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center space-y-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted 
                      ? 'bg-green-500 text-white' 
                      : isCurrent 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div className="text-center">
                    <p className={`text-xs font-medium ${isCurrent ? 'text-blue-600' : 'text-gray-600'}`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="min-h-[300px]">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentStep === 1 ? 'Back to Landing' : 'Previous'}
            </Button>
            
            <Button onClick={handleNext}>
              {currentStep === steps.length ? 'Complete Verification' : 'Next'}
              {currentStep < steps.length && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EKYCFlow;
