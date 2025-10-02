import React from 'react';
import { AquaticItem } from '../types';
import './ItemCard.css';

interface ItemCardProps {
  item: AquaticItem;
  imageUrl: string | null;
  isLoading: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, imageUrl, isLoading }) => {
  return (
    <div className="item-card">
      <div className="image-container">
        {isLoading ? (
          <div className="loading-placeholder">Loading image...</div>
        ) : (
          <img 
            src={imageUrl || '/placeholder-fish.jpg'} 
            alt={item.name}
            className="item-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/300x200/4a90e2/ffffff?text=${encodeURIComponent(item.name)}`;
            }}
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