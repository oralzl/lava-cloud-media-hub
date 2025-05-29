
import React, { useState } from 'react';
import { Music, FileImage, Video, Upload, User, FolderOpen, LogOut } from 'lucide-react';
import { FileCategory } from '../pages/Index';
import UserProfile from './UserProfile';
import FileUploader from './FileUploader';
import AnimatedCounter from './AnimatedCounter';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface SidebarProps {
  activeCategory: FileCategory;
  onCategoryChange: (category: FileCategory) => void;
  fileCounts: {
    all: number;
    music: number;
    pictures: number;
    videos: number;
  };
  onFileUpload: (files: File[]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeCategory,
  onCategoryChange,
  fileCounts,
  onFileUpload,
}) => {
  const [showUploader, setShowUploader] = useState(false);
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    storageUsed: 2.4,
    storageTotal: 10,
  });

  const storagePercentage = (user.storageUsed / user.storageTotal) * 100;

  const menuItems = [
    { key: 'all' as FileCategory, label: 'All Files', icon: FolderOpen, count: fileCounts.all },
    { key: 'music' as FileCategory, label: 'Music', icon: Music, count: fileCounts.music },
    { key: 'pictures' as FileCategory, label: 'Pictures', icon: FileImage, count: fileCounts.pictures },
    { key: 'videos' as FileCategory, label: 'Videos', icon: Video, count: fileCounts.videos },
  ];

  const handleLogout = () => {
    console.log('User logged out');
    // Add logout logic here
  };

  return (
    <div className="w-64 md:w-64 bg-gray-50 border-r border-gray-200 flex flex-col h-screen">
      {/* Brand Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7cf97dd2-ad8d-4791-b728-40827facb2e5.png" 
            alt="Lava Brand Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 hover:scale-110" 
          />
          <h1 className="text-lg md:text-xl font-bold text-gray-900">lavaCloud</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 p-4 overflow-y-auto">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeCategory === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onCategoryChange(item.key)}
                className={`group w-full flex items-center justify-between px-3 py-3 md:py-2 rounded-lg text-left transition-all duration-300 touch-manipulation transform hover:scale-[1.02] active:scale-[0.98] ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'animate-pulse' : 'group-hover:scale-110'
                  }`} />
                  <span className="font-medium text-sm md:text-base transition-all duration-300">
                    {item.label}
                  </span>
                </div>
                <span className={`text-xs md:text-sm px-2 py-1 rounded-full transition-all duration-300 transform ${
                  isActive
                    ? 'bg-gray-700 text-gray-300 scale-110'
                    : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                }`}>
                  <AnimatedCounter value={item.count} />
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Info Section */}
      <div className="p-4 border-t border-gray-200 space-y-4">
        {/* User Info with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center space-x-3 hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                <User className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs md:text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {user.email}
                </p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white">
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              退出登录
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Storage Usage */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-600">Storage</span>
            <span className="text-xs text-gray-900 font-medium">
              {user.storageUsed}GB / {user.storageTotal}GB
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${storagePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => setShowUploader(true)}
          className="w-full bg-gray-900 text-white px-4 py-3 md:py-3 rounded-lg font-medium hover:bg-gray-800 active:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg touch-manipulation"
        >
          <Upload size={18} className="transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-sm md:text-base">Upload Files</span>
        </button>
        
        {showUploader && (
          <FileUploader
            onUpload={(files) => {
              onFileUpload(files);
              setShowUploader(false);
            }}
            onClose={() => setShowUploader(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
