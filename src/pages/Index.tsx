import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FileManager from '../components/FileManager';
import FilePreview from '../components/FilePreview';
import { Menu } from 'lucide-react';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'The Scientist - Coldplay.mp3',
      type: 'audio',
      size: 4567890,
      uploadDate: new Date('2024-01-15'),
      url: '/sample-audio.mp3',
    },
    {
      id: '2',
      name: 'Bohemian Rhapsody - Queen.mp3',
      type: 'audio',
      size: 6234567,
      uploadDate: new Date('2024-01-12'),
      url: '/sample-audio.mp3',
    },
    {
      id: '3',
      name: 'Imagine - John Lennon.mp3',
      type: 'audio',
      size: 3456789,
      uploadDate: new Date('2024-01-10'),
      url: '/sample-audio.mp3',
    },
    {
      id: '4',
      name: 'Billie Jean - Michael Jackson.mp3',
      type: 'audio',
      size: 4123456,
      uploadDate: new Date('2024-01-08'),
      url: '/sample-audio.mp3',
    },
    {
      id: '5',
      name: 'Hotel California - Eagles.mp3',
      type: 'audio',
      size: 7890123,
      uploadDate: new Date('2024-01-05'),
      url: '/sample-audio.mp3',
    },
    
    {
      id: '6',
      name: 'Mountain Sunset.jpg',
      type: 'image',
      size: 2345678,
      uploadDate: new Date('2024-01-14'),
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
    },
    {
      id: '7',
      name: 'Ocean Waves.jpg',
      type: 'image',
      size: 1876543,
      uploadDate: new Date('2024-01-13'),
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200',
    },
    {
      id: '8',
      name: 'City Skyline.png',
      type: 'image',
      size: 3456789,
      uploadDate: new Date('2024-01-11'),
      url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=200',
    },
    {
      id: '9',
      name: 'Forest Path.jpg',
      type: 'image',
      size: 2987654,
      uploadDate: new Date('2024-01-09'),
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200',
    },
    {
      id: '10',
      name: 'Northern Lights.jpg',
      type: 'image',
      size: 4123456,
      uploadDate: new Date('2024-01-07'),
      url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=200',
    },
    {
      id: '11',
      name: 'Cherry Blossoms.jpg',
      type: 'image',
      size: 2567890,
      uploadDate: new Date('2024-01-06'),
      url: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=200',
    },
    {
      id: '12',
      name: 'Desert Landscape.jpg',
      type: 'image',
      size: 3234567,
      uploadDate: new Date('2024-01-04'),
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200',
    },
    
    {
      id: '13',
      name: 'Nature Documentary.mp4',
      type: 'video',
      size: 156789012,
      uploadDate: new Date('2024-01-16'),
      url: '/sample-video.mp4',
    },
    {
      id: '14',
      name: 'Travel Vlog - Japan.mp4',
      type: 'video',
      size: 234567890,
      uploadDate: new Date('2024-01-14'),
      url: '/sample-video.mp4',
    },
    {
      id: '15',
      name: 'Cooking Tutorial.mp4',
      type: 'video',
      size: 89012345,
      uploadDate: new Date('2024-01-12'),
      url: '/sample-video.mp4',
    },
    {
      id: '16',
      name: 'Workout Routine.mp4',
      type: 'video',
      size: 123456789,
      uploadDate: new Date('2024-01-10'),
      url: '/sample-video.mp4',
    },
    {
      id: '17',
      name: 'Time Lapse - City.mp4',
      type: 'video',
      size: 67890123,
      uploadDate: new Date('2024-01-08'),
      url: '/sample-video.mp4',
    },
    {
      id: '18',
      name: 'Concert Recording.mp4',
      type: 'video',
      size: 345678901,
      uploadDate: new Date('2024-01-06'),
      url: '/sample-video.mp4',
    },
    {
      id: '19',
      name: 'Wedding Highlights.mp4',
      type: 'video',
      size: 189012345,
      uploadDate: new Date('2024-01-03'),
      url: '/sample-video.mp4',
    },
    {
      id: '20',
      name: 'Drone Footage - Beach.mp4',
      type: 'video',
      size: 278901234,
      uploadDate: new Date('2024-01-01'),
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
    <div className="min-h-screen bg-white flex relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 transition-transform duration-300 ease-in-out
        fixed md:relative z-50 md:z-auto
      `}>
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setIsSidebarOpen(false); // Close sidebar on mobile after selection
          }}
          fileCounts={getFileCounts()}
          onFileUpload={handleFileUpload}
        />
      </div>
      
      <div className="flex-1 flex min-w-0">
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
