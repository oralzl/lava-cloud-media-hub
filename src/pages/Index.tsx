
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FileManager from '../components/FileManager';
import FilePreview from '../components/FilePreview';

export type FileCategory = 'all' | 'music' | 'pictures' | 'videos';

export interface FileItem {
  id: string;
  name: string;
  type: 'audio' | 'image' | 'video';
  size: number;
  uploadDate: Date;
  url: string;
  thumbnail?: string;
}

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<FileCategory>('all');
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'Sample Music.mp3',
      type: 'audio',
      size: 3456789,
      uploadDate: new Date('2024-01-15'),
      url: '/sample-audio.mp3',
    },
    {
      id: '2',
      name: 'Beautiful Sunset.jpg',
      type: 'image',
      size: 1234567,
      uploadDate: new Date('2024-01-14'),
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200',
    },
    {
      id: '3',
      name: 'Demo Video.mp4',
      type: 'video',
      size: 15678901,
      uploadDate: new Date('2024-01-13'),
      url: '/sample-video.mp4',
    },
  ]);

  const filteredFiles = files.filter(file => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'music') return file.type === 'audio';
    if (activeCategory === 'pictures') return file.type === 'image';
    if (activeCategory === 'videos') return file.type === 'video';
    return false;
  });

  const handleFileUpload = (newFiles: File[]) => {
    const uploadedFiles: FileItem[] = newFiles.map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type.startsWith('audio/') ? 'audio' : 
            file.type.startsWith('image/') ? 'image' : 'video',
      size: file.size,
      uploadDate: new Date(),
      url: URL.createObjectURL(file),
      thumbnail: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
    }));
    
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  const getFileCounts = () => {
    return {
      all: files.length,
      music: files.filter(f => f.type === 'audio').length,
      pictures: files.filter(f => f.type === 'image').length,
      videos: files.filter(f => f.type === 'video').length,
    };
  };

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        fileCounts={getFileCounts()}
        onFileUpload={handleFileUpload}
      />
      
      <div className="flex-1 flex">
        <FileManager
          files={filteredFiles}
          activeCategory={activeCategory}
          onFileSelect={setSelectedFile}
          selectedFile={selectedFile}
        />
        
        {selectedFile && (
          <FilePreview
            file={selectedFile}
            onClose={() => setSelectedFile(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
