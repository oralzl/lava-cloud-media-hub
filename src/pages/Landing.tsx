
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Landing = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignupDialog, setShowSignupDialog] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
    }}>
      <div className="text-center text-white max-w-2xl mx-auto px-6">
        {/* 产品名称 */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-4xl font-bold">lavaStudio</h1>
        </div>

        {/* 产品描述 */}
        <p className="text-xl mb-12 leading-relaxed opacity-90">
          Sync and access your audio, video, and images across LAVA device.
        </p>

        {/* 登录注册入口 */}
        <div className="flex items-center justify-center gap-6">
          <Button 
            size="lg" 
            onClick={() => setShowLoginDialog(true)} 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-3 text-lg"
          >
            登录
          </Button>
          <Button 
            size="lg" 
            onClick={() => setShowSignupDialog(true)} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
          >
            注册
          </Button>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>用户登录</DialogTitle>
            <DialogDescription>
              请输入您的账户信息登录
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 text-center text-gray-500">
            登录表单组件将在这里显示
          </div>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={showSignupDialog} onOpenChange={setShowSignupDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>用户注册</DialogTitle>
            <DialogDescription>
              创建您的账户，开始使用云端服务
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 text-center text-gray-500">
            注册表单组件将在这里显示
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Landing;
