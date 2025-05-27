
import React, { useState } from 'react';
import { FileItem, FileCategory } from '../pages/Index';
import { Music, FileImage, Video } from 'lucide-react';

interface FileManagerProps {
  files: FileItem[];
  activeCategory: FileCategory;
  onFileSelect: (file: FileItem) => void;
  selectedFile: FileItem | null;
}

const FileManager: React.FC<FileManagerProps> = ({
  files,
  activeCategory,
  onFileSelect,
  selectedFile,
}) => {
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size'>('date');

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'audio':
        return <Music className="w-8 h-8 text-blue-600" />;
      case 'image':
        return <FileImage className="w-8 h-8 text-green-600" />;
      case 'video':
        return <Video className="w-8 h-8 text-purple-600" />;
      default:
        return <FileImage className="w-8 h-8 text-gray-600" />;
    }
  };

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
      year: 'numeric',
    });
  };

  const sortedFiles = files.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'size':
        return b.size - a.size;
      case 'date':
      default:
        return b.uploadDate.getTime() - a.uploadDate.getTime();
    }
  });

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'all':
        return 'All Files';
      case 'music':
        return 'Music';
      case 'pictures':
        return 'Pictures';
      case 'videos':
        return 'Videos';
      default:
        return 'Files';
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {getCategoryTitle()}
              </h1>
              <span className="text-sm text-gray-500 mt-1 block">
                {sortedFiles.length} file{sortedFiles.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {/* Sort Controls */}
            <div className="flex items-center">
              <label className="text-sm text-gray-600 mr-3">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'date' | 'size')}
                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
              >
                <option value="date">Date</option>
                <option value="name">Name</option>
                <option value="size">Size</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-auto p-6">
        {sortedFiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <FileImage className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium">No files found</p>
            <p className="text-sm">Upload some files to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedFiles.map((file) => (
              <div
                key={file.id}
                onClick={() => onFileSelect(file)}
                className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  selectedFile?.id === file.id
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {file.type === 'image' && file.thumbnail ? (
                    <img
                      src={file.thumbnail}
                      alt={file.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
                      {getFileIcon(file.type)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Uploaded {formatDate(file.uploadDate)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileManager;
