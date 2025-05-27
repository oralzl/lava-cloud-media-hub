
import React, { useState, useRef } from 'react';
import { Upload, X, FileImage, UploadCloud } from 'lucide-react';

interface FileUploaderProps {
  onUpload: (files: File[]) => void;
  onClose: () => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUpload, onClose }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || 
      file.type.startsWith('audio/') || 
      file.type.startsWith('video/')
    );
    
    setSelectedFiles(prev => [...prev, ...validFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onUpload(selectedFiles);
      setSelectedFiles([]);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Upload Files</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Enhanced Drop Zone */}
        <div
          className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 cursor-pointer ${
            dragActive
              ? 'border-gray-900 bg-gray-50 scale-[1.02] shadow-lg'
              : 'border-gray-300 hover:border-gray-400 hover:bg-gray-25'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          {/* Animated dashed border effect */}
          <div 
            className={`absolute inset-0 rounded-xl border-2 border-dashed transition-all duration-300 ${
              dragActive 
                ? 'border-gray-900 animate-pulse' 
                : 'border-transparent'
            }`}
            style={{
              backgroundImage: dragActive 
                ? 'linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.1) 50%)'
                : 'none',
              backgroundSize: '10px 2px',
              animation: dragActive ? 'dash 1s linear infinite' : 'none'
            }}
          />
          
          {/* Upload Cloud Icon */}
          <div className={`transition-all duration-300 ${dragActive ? 'scale-110' : ''}`}>
            <UploadCloud 
              className={`mx-auto h-16 w-16 mb-4 transition-colors duration-300 ${
                dragActive ? 'text-gray-900' : 'text-gray-400'
              }`} 
            />
          </div>
          
          {/* Enhanced text instructions */}
          <div className="space-y-2">
            <p className={`text-lg font-medium transition-colors duration-300 ${
              dragActive ? 'text-gray-900' : 'text-gray-700'
            }`}>
              {dragActive ? 'Drop files here!' : 'Drag & Drop files here'}
            </p>
            <p className="text-sm text-gray-600">
              or{' '}
              <span className="text-gray-900 font-medium hover:underline cursor-pointer">
                click to browse
              </span>
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <FileImage size={14} />
                <span>Images</span>
              </div>
              <div className="flex items-center space-x-1">
                <Upload size={14} />
                <span>Audio</span>
              </div>
              <div className="flex items-center space-x-1">
                <Upload size={14} />
                <span>Videos</span>
              </div>
            </div>
          </div>

          {/* Drag overlay */}
          {dragActive && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-5 rounded-xl flex items-center justify-center">
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <p className="text-sm font-medium text-gray-900">Release to upload</p>
              </div>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,audio/*,video/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Selected Files */}
        {selectedFiles.length > 0 && (
          <div className="mt-6 space-y-2 max-h-32 overflow-y-auto">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Selected Files ({selectedFiles.length})
            </h4>
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <FileImage className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate font-medium">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-600 ml-2 p-1 rounded hover:bg-red-50 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Upload Button */}
        <div className="flex space-x-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={selectedFiles.length === 0}
            className="flex-1 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <Upload size={18} />
            <span>Upload {selectedFiles.length > 0 && `(${selectedFiles.length})`}</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          0% { background-position: 0 0; }
          100% { background-position: 20px 0; }
        }
      `}</style>
    </div>
  );
};

export default FileUploader;
