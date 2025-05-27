
import React, { useState } from 'react';
import { Music, FileImage, Video, Upload, User } from 'lucide-react';
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

  const menuItems = [
    { key: 'all' as FileCategory, label: 'All Files', icon: FolderOpen, count: fileCounts.all },
    { key: 'music' as FileCategory, label: 'Music', icon: Music, count: fileCounts.music },
    { key: 'pictures' as FileCategory, label: 'Pictures', icon: FileImage, count: fileCounts.pictures },
    { key: 'videos' as FileCategory, label: 'Videos', icon: Video, count: fileCounts.videos },
  ];

  const FolderOpen = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2-2v9z" />
    </svg>
  );

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* User Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <UserProfile />
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => onCategoryChange(item.key)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                  activeCategory === item.key
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  activeCategory === item.key
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {item.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Upload Section */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => setShowUploader(true)}
          className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
        >
          <Upload size={20} />
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
