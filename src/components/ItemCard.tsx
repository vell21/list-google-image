import React, { useState } from 'react';
import { AquaticItem } from '../types';
import './ItemCard.css';

interface ItemCardProps {
  item: AquaticItem;
  imageUrl: string | null;
  isLoading: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, imageUrl, isLoading }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getFallbackImage = (name: string): string => {
    // Create a colorful SVG as fallback
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
    const color = colors[name.length % colors.length];
    const initials = name.split(' ').map(word => word[0]).join('').substring(0, 2);
    
    const svg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${color}"/>
        <text x="150" y="80" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
              text-anchor="middle" fill="white">${initials}</text>
        <text x="150" y="130" font-family="Arial, sans-serif" font-size="12" 
              text-anchor="middle" fill="white" opacity="0.8">🐠 ${name.substring(0, 20)}</text>
      </svg>
    `;
    
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  return (
    <div className="item-card">
      <div className="image-container">
        {isLoading && !imageLoaded ? (
          <div className="loading-placeholder">
            <div className="loading-spinner"></div>
            <span>Loading image...</span>
          </div>
        ) : (
          <img 
            src={imageError ? getFallbackImage(item.name) : (imageUrl || getFallbackImage(item.name))} 
            alt={item.name}
            className="item-image"
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        )}
      </div>
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">{item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;