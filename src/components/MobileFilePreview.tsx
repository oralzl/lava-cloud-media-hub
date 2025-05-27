
import React from 'react';
import { FileItem } from '../pages/Index';
import { X, Music, FileImage, Video, Download, Trash2 } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer';

interface MobileFilePreviewProps {
  file: FileItem;
  onClose: () => void;
}

const MobileFilePreview: React.FC<MobileFilePreviewProps> = ({ file, onClose }) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderPreview = () => {
    switch (file.type) {
      case 'image':
        return (
          <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={file.url}
              alt={file.name}
              className="w-full h-full object-contain"
            />
          </div>
        );
      case 'audio':
        return (
          <div className="w-full p-4 bg-gray-50 rounded-lg mb-4">
            <div className="flex items-center justify-center mb-3">
              <Music className="w-12 h-12 text-blue-600" />
            </div>
            <audio controls className="w-full">
              <source src={file.url} />
              Your browser does not support the audio element.
            </audio>
          </div>
        );
      case 'video':
        return (
          <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
            <video controls className="w-full h-full">
              <source src={file.url} />
              Your browser does not support the video element.
            </video>
          </div>
        );
      default:
        return (
          <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <FileImage className="w-12 h-12 text-gray-400" />
          </div>
        );
    }
  };

  const getTypeIcon = () => {
    switch (file.type) {
      case 'audio':
        return <Music className="w-5 h-5 text-blue-600" />;
      case 'image':
        return <FileImage className="w-5 h-5 text-green-600" />;
      case 'video':
        return <Video className="w-5 h-5 text-purple-600" />;
      default:
        return <FileImage className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <Drawer open={true} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="pb-2">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-lg font-medium">文件详情</DrawerTitle>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={24} />
            </button>
          </div>
        </DrawerHeader>

        <div className="px-4 pb-6 overflow-auto">
          {/* Preview */}
          {renderPreview()}

          {/* File Info */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                {getTypeIcon()}
                <h4 className="font-medium text-gray-900 text-lg">{file.name}</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-600 block mb-1">大小</span>
                  <p className="font-medium text-gray-900">{formatFileSize(file.size)}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-600 block mb-1">类型</span>
                  <p className="font-medium text-gray-900 capitalize">{file.type}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600 text-sm block mb-1">上传时间</span>
              <p className="font-medium text-gray-900">{formatDate(file.uploadDate)}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 active:bg-gray-700 transition-colors flex items-center justify-center space-x-2 touch-manipulation">
              <Download size={18} />
              <span>下载</span>
            </button>
            <button className="w-full px-4 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 active:bg-red-100 transition-colors flex items-center justify-center space-x-2 touch-manipulation">
              <Trash2 size={18} />
              <span>删除</span>
            </button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilePreview;
