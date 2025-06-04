
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Upload, Search, Share2, Shield, Zap } from "lucide-react";
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

  const features = [
    {
      icon: Cloud,
      title: "云端存储",
      description: "安全可靠的云端文件存储，随时随地访问您的文件"
    },
    {
      icon: Upload,
      title: "快速上传",
      description: "支持拖拽上传，批量处理，让文件管理更加高效"
    },
    {
      icon: Search,
      title: "智能搜索",
      description: "强大的搜索功能，快速找到您需要的任何文件"
    },
    {
      icon: Share2,
      title: "便捷分享",
      description: "一键分享链接，与团队成员轻松协作"
    },
    {
      icon: Shield,
      title: "安全保护",
      description: "企业级安全保护，确保您的数据安全无忧"
    },
    {
      icon: Zap,
      title: "高效管理",
      description: "直观的界面设计，让文件管理变得简单高效"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">CloudHub</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => setShowLoginDialog(true)}
              className="text-gray-600 hover:text-gray-900"
            >
              登录
            </Button>
            <Button 
              onClick={() => setShowSignupDialog(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              免费注册
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            您的专业
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              云端媒体中心
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            安全存储、智能管理、便捷分享 - 为您提供完整的云端文件解决方案
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={() => setShowSignupDialog(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
            >
              立即开始
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setShowLoginDialog(true)}
              className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
            >
              已有账户？登录
            </Button>
          </div>
        </div>

        {/* Preview Image Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
            <Card className="relative border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-center">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="w-8 h-8 bg-white/20 rounded mb-2"></div>
                        <div className="h-2 bg-white/20 rounded mb-1"></div>
                        <div className="h-2 bg-white/10 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/80 text-lg">直观的文件管理界面</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">强大功能，简单易用</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们为您提供全面的云端文件管理解决方案，让工作更加高效便捷
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="text-center py-16">
            <h3 className="text-3xl font-bold mb-4">准备好开始了吗？</h3>
            <p className="text-xl mb-8 opacity-90">
              立即注册，体验专业的云端文件管理服务
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setShowSignupDialog(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              免费注册
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 CloudHub. 专业的云端媒体管理平台.</p>
        </div>
      </footer>

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
