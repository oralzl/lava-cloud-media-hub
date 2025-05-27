
import React, { useState } from 'react';
import { User } from 'lucide-react';

const UserProfile: React.FC = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null,
    storageUsed: 2.4, // GB
    storageTotal: 10, // GB
  });

  const storagePercentage = (user.storageUsed / user.storageTotal) * 100;

  return (
    <div className="space-y-4">
      {/* Brand Logo */}
      <div className="flex items-center justify-center mb-4">
        <img 
          src="/lovable-uploads/7cf97dd2-ad8d-4791-b728-40827facb2e5.png" 
          alt="Lava Brand Logo" 
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user.name}
          </p>
          <p className="text-xs text-gray-600 truncate">
            {user.email}
          </p>
        </div>
      </div>

      {/* Storage Usage */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Storage</span>
          <span className="text-xs text-gray-900 font-medium">
            {user.storageUsed}GB / {user.storageTotal}GB
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gray-900 h-2 rounded-full transition-all duration-300"
            style={{ width: `${storagePercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
