
import React, { useState } from 'react';
import { Music, FileImage, Video, Upload, User, FolderOpen } from 'lucide-react';
import { FileCategory } from '../pages/Index';
import UserProfile from './UserProfile';
import FileUploader from './FileUploader';

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

  return (
    <div className="w-64 bg-white border-r border-gray-100 flex flex-col">
      {/* Brand Section */}
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7cf97dd2-ad8d-4791-b728-40827facb2e5.png" 
            alt="Lava Brand Logo" 
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-semibold text-gray-900">lavaCloud</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 px-3">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => onCategoryChange(item.key)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  activeCategory === item.key
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent size={18} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full min-w-[24px] text-center ${
                  activeCategory === item.key
                    ? 'bg-gray-700 text-gray-200'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-100 space-y-4">
        {/* Storage Usage */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-500">Storage</span>
            <span className="text-xs font-medium text-gray-700">
              {user.storageUsed}GB / {user.storageTotal}GB
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div
              className="bg-gray-900 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${storagePercentage}%` }}
            />
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => setShowUploader(true)}
          className="w-full bg-gray-900 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 text-sm"
        >
          <Upload size={16} />
          <span>Upload Files</span>
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
