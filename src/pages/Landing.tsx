
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Landing = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignupDialog, setShowSignupDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        {/* 主要内容区域 - 仿照 lavamusic 的卡片风格 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* 头部区域 - 产品名称和图标 */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-12 text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold">CloudHub</h1>
            </div>
            
            {/* 产品描述 */}
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              您的专业云端媒体中心 - 安全存储、智能管理、便捷分享
            </p>
          </div>

          {/* 底部操作区域 */}
          <div className="px-8 py-12 bg-white">
            <div className="flex items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => setShowLoginDialog(true)}
                variant="outline"
                className="px-8 py-3 text-base border-gray-300 hover:bg-gray-50"
              >
                登录
              </Button>
              <Button 
                size="lg" 
                onClick={() => setShowSignupDialog(true)}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base"
              >
                注册
              </Button>
            </div>
          </div>
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
