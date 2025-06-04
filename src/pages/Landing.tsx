
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Landing = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignupDialog, setShowSignupDialog] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center font-sans" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
    }}>
      <div className="text-center text-white max-w-3xl mx-auto px-6">
        {/* 产品名称 */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            lavaStudio
          </h1>
        </div>

        {/* 产品描述 */}
        <p className="text-xl md:text-2xl mb-16 leading-relaxed opacity-90 font-light max-w-2xl mx-auto">
          Sync and access your audio, video, and images across LAVA device.
        </p>

        {/* 登录注册入口 */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Button 
            size="lg" 
            onClick={() => setShowLoginDialog(true)} 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Sign In
          </Button>
          <Button 
            size="lg" 
            onClick={() => setShowSignupDialog(true)} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Sign Up
          </Button>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Sign In</DialogTitle>
            <DialogDescription className="text-base">
              Enter your credentials to access your account
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 text-center text-gray-500">
            Login form will be displayed here
          </div>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={showSignupDialog} onOpenChange={setShowSignupDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Sign Up</DialogTitle>
            <DialogDescription className="text-base">
              Create your account to start using our cloud services
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 text-center text-gray-500">
            Registration form will be displayed here
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Landing;
