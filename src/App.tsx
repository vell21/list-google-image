import React, { useState, useEffect } from 'react';
import { sampleData } from './data';
import { AquaticItem } from './types';
import { searchImage } from './imageService';
import ItemCard from './components/ItemCard';
import './App.css';

const App: React.FC = () => {
  const [items] = useState<AquaticItem[]>(sampleData);
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string | null }>({});
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Load images for all items
    const loadImages = async () => {
      for (const item of items) {
        if (!imageUrls[item.id] && !loadingImages[item.id]) {
          setLoadingImages(prev => ({ ...prev, [item.id]: true }));
          
          try {
            const imageUrl = await searchImage(item.name + ' fish aquatic');
            setImageUrls(prev => ({ ...prev, [item.id]: imageUrl }));
          } catch (error) {
            console.error(`Error loading image for ${item.name}:`, error);
          } finally {
            setLoadingImages(prev => ({ ...prev, [item.id]: false }));
          }
        }
      }
    };

    loadImages();
  }, [items, imageUrls, loadingImages]);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐠 Aquatic Fish & Plant Gallery</h1>
        <p>Discover beautiful aquatic life with their current prices</p>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for fish or plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      <main className="main-content">
        <div className="items-grid">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              imageUrl={imageUrls[item.id]}
              isLoading={loadingImages[item.id] || false}
            />
          ))}
        </div>
        
        {filteredItems.length === 0 && searchTerm && (
          <div className="no-results">
            <h3>No results found</h3>
            <p>Try searching for a different fish or plant name.</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2025 Aquatic Fish & Plant Gallery | Sample data for demonstration</p>
      </footer>
    </div>
  );
};

export default App;