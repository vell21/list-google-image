# 🐠 Aquatic Fish & Plant Gallery

A beautiful, responsive React TypeScript web application that displays a gallery of aquatic fish and plants with their names, prices, and placeholder images.

## 🌟 Features

- **Beautiful Grid Layout**: Responsive card-based design that works on all devices
- **Search Functionality**: Filter fish and plants by name
- **TypeScript Support**: Fully typed for better development experience
- **Modern Styling**: Gradient backgrounds, hover effects, and smooth animations
- **Placeholder Images**: Colorful placeholder images generated for each species
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🚀 Live Demo

Visit the live application: [https://vell21.github.io/list-google-image](https://vell21.github.io/list-google-image)

## 📋 Sample Data

The application includes data for 30 aquatic species including:

* Nannostomus Cenepa — RM123
* Gastrodremus C123 — RM56
* Corydoras Reticulatus — RM53
* Moenkhausia Kogal Platinum — RM78
* Hyphessobrycon Notidanos Yellow — RM75
* Hyphessobrycon Puegottei Male — RM70
* Moenkhausia Rubra Platinum — RM98
* Hyphessobrycon Cyanotaenia Yellow Platinum — RM88
* Parotocinclus HaroldoI — RM77
* Hisonotus Vireo — RM65
* Corydoras Pulwartzi — RM195
* Pterophyllum San Felipe 3-5cm — RM91
* Pterophyllum San Felipe 2-3cm — RM84
* Pterophyllum Heikon 3-5cm — RM81
* Pterophyllum Altum 2-3cm — RM98
* BEC — RM1260
* Corydoras Hastatus — RM29
* Corydoras Froehlichi — RM210
* Corydoras CW162 — RM350
* Corydoras Knaacki — RM350
* Corydoras C68 — RM244
* Moenkhausia Bellasonmosa — RM144
* Moenkhausia Empress — RM84
* Hemmigramus Vinaceus — RM54
* Otocinclus Flexilis — RM66
* Hypancistrus L236 — RM830
* Ancistrus L144 SR — RM250
* Ancistrus L144 Green Dragon — RM350
* Gymnogeophagus Lipokarenos — RM525
* Geophagus Proximus — RM88

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vell21/list-google-image.git
   cd list-google-image
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000/list-google-image](http://localhost:3000/list-google-image) in your browser.

### Building for Production

```bash
npm run build
```

### Deployment to GitHub Pages

The project is configured with GitHub Actions for automatic deployment. Simply push to the `main` branch and the site will be automatically deployed to GitHub Pages.

Alternatively, you can deploy manually:

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ItemCard.tsx      # Individual fish/plant card component
│   └── ItemCard.css      # Styling for item cards
├── data.ts               # Sample aquatic species data
├── types.ts              # TypeScript type definitions
├── imageService.ts       # Image fetching service (placeholder implementation)
├── App.tsx               # Main application component
├── App.css               # Main application styling
├── index.tsx             # React application entry point
└── react-app-env.d.ts    # React TypeScript definitions
```

## 🎨 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with gradients and animations
- **GitHub Actions** - Automated deployment
- **GitHub Pages** - Free hosting

## 🔧 Future Enhancements

- **Real Image Integration**: Connect to Google Images API or Unsplash API
- **Admin Panel**: Add/edit/remove species dynamically
- **Categories**: Filter by fish type, plant type, price range
- **Favorites**: Save favorite species
- **Detailed View**: Click to see more information about each species

## 📄 License

This project is open source and available under the [MIT License](LICENSE).