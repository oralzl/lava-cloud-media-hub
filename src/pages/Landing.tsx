
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
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="text-center text-white max-w-2xl mx-auto px-6 relative z-10">
        {/* 产品名称 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
            <Cloud className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            CloudHub
          </h1>
        </div>

        {/* 产品描述 */}
        <p className="text-xl mb-12 leading-relaxed text-gray-300 font-light max-w-lg mx-auto">
          您的专业云端媒体中心 - 安全存储、智能管理、便捷分享
        </p>

        {/* 登录注册入口 */}
        <div className="flex items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => setShowLoginDialog(true)}
            variant="outline"
            className="bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
          >
            登录
          </Button>
          <Button 
            size="lg" 
            onClick={() => setShowSignupDialog(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
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
