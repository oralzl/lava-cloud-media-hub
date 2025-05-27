
import React from 'react';
import { FileItem } from '../pages/Index';
import { X, Music, FileImage, Video } from 'lucide-react';

interface FilePreviewProps {
  file: FileItem;
  onClose: () => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, onClose }) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderPreview = () => {
    switch (file.type) {
      case 'image':
        return (
          <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={file.url}
              alt={file.name}
              className="w-full h-full object-contain"
            />
          </div>
        );
      case 'audio':
        return (
          <div className="w-full p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Music className="w-16 h-16 text-blue-600" />
            </div>
            <audio controls className="w-full">
              <source src={file.url} />
              Your browser does not support the audio element.
            </audio>
          </div>
        );
      case 'video':
        return (
          <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <video controls className="w-full h-full">
              <source src={file.url} />
              Your browser does not support the video element.
            </video>
          </div>
        );
      default:
        return (
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <FileImage className="w-16 h-16 text-gray-400" />
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
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">File Details</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 space-y-6">
        {/* Preview */}
        {renderPreview()}

        {/* File Info */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              {getTypeIcon()}
              <h4 className="font-medium text-gray-900">{file.name}</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Size</span>
                <p className="font-medium text-gray-900">{formatFileSize(file.size)}</p>
              </div>
              <div>
                <span className="text-gray-600">Type</span>
                <p className="font-medium text-gray-900 capitalize">{file.type}</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-gray-600 text-sm">Uploaded</span>
            <p className="font-medium text-gray-900">{formatDate(file.uploadDate)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Download
          </button>
          <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Share
          </button>
          <button className="w-full px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
