
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Music, Share, Devices } from "lucide-react";

const Landing = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignupDialog, setShowSignupDialog] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center font-sans" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
    }}>
      <div className="text-center text-white max-w-4xl mx-auto px-6">
        {/* 产品名称 */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Music className="w-12 h-12 text-purple-400" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            lavaMusic
          </h1>
          <Music className="w-12 h-12 text-blue-400" />
        </div>

        {/* 特性图标 */}
        <div className="flex items-center justify-center gap-8 mb-8 opacity-80">
          <div className="flex flex-col items-center gap-2">
            <Share className="w-8 h-8 text-pink-300" />
            <span className="text-sm font-medium">Share</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Devices className="w-8 h-8 text-purple-300" />
            <span className="text-sm font-medium">Sync</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Music className="w-8 h-8 text-blue-300" />
            <span className="text-sm font-medium">Play</span>
          </div>
        </div>

        {/* 产品描述 */}
        <p className="text-xl md:text-2xl mb-16 leading-relaxed opacity-90 font-light max-w-3xl mx-auto">
          Professional music hardware ecosystem. Seamlessly sync and share your audio collections across all your LAVA devices for the ultimate music experience.
        </p>

        {/* 登录注册入口 */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Button 
            size="lg" 
            onClick={() => setShowLoginDialog(true)} 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-12 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Sign In
          </Button>
          <Button 
            size="lg" 
            onClick={() => setShowSignupDialog(true)} 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Sign Up
          </Button>
        </div>

        {/* 额外的音乐感元素 */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-60">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <Music className="w-5 h-5 text-purple-500" />
              Sign In to lavaMusic
            </DialogTitle>
            <DialogDescription className="text-base">
              Access your music ecosystem and sync across devices
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
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <Music className="w-5 h-5 text-purple-500" />
              Join lavaMusic
            </DialogTitle>
            <DialogDescription className="text-base">
              Create your account and start building your music ecosystem
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
