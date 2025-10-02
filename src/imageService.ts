// Since Google Images API requires authentication and can be complex,
// I'll use a simple approach with placeholder images for demonstration
// In production, you might want to use a proper Google Custom Search API

export const searchImage = async (query: string): Promise<string | null> => {
  try {
    // For demo purposes, we'll use a fallback approach without API keys
    // In production, uncomment the Unsplash API call below and add your API key
    
    /*
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    
    if (response.ok) {
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].urls.small;
      }
    }
    */
    
    // Fallback: Generate a placeholder image with the fish/plant name
    // This ensures the app works without API keys for demo purposes
    return generatePlaceholderImage(query);
    
  } catch (error) {
    console.error('Error searching for image:', error);
    return generatePlaceholderImage(query);
  }
};

const generatePlaceholderImage = (name: string): string => {
  // Generate a placeholder image using a service like placeholder.com or via.placeholder.com
  const encodedName = encodeURIComponent(name);
  const backgroundColor = getColorFromString(name);
  return `https://via.placeholder.com/300x200/${backgroundColor}/ffffff?text=${encodedName}`;
};

const getColorFromString = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = Math.abs(hash).toString(16).substring(0, 6);
  return color.padEnd(6, '0');
};

// Alternative approach using DuckDuckGo (no API key required)
export const searchImageDuckDuckGo = async (query: string): Promise<string | null> => {
  try {
    // Note: This requires a CORS proxy in production due to CORS restrictions
    // For now, we'll use the placeholder approach
    return generatePlaceholderImage(query);
  } catch (error) {
    console.error('Error searching via DuckDuckGo:', error);
    return generatePlaceholderImage(query);
  }
};