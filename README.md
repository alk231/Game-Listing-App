# Game Listing App 🎮

A modern React app that lets you browse and filter games by genre. It fetches real-time game data from the RAWG API and displays it in a clean, responsive interface with light/dark theme support.

## 🎯 What This Does

You open the app, see a list of games, pick a genre you like, and boom—it filters the games for you. Pretty straightforward, but good practice for working with APIs, React Context, and Tailwind CSS.

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool (super fast)
- **Tailwind CSS** - Styling
- **Axios** - HTTP client for API calls
- **React Icons** - Icons library
- **RAWG API** - Game database

## 📂 Project Structure

```
Game Listing app/
├── src/
│   ├── Components/       # React components (Header, Home, etc.)
│   ├── Services/         # API calls (GlobalApi.jsx)
│   ├── context/          # React Context for theme
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static files
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🚀 How to Get It Running

1. **Clone the repo**
   ```bash
   git clone https://github.com/alk231/Game-Listing-App.git
   cd "Game Listing App"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```
   Then open the URL it gives you (usually `http://localhost:5173`).

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔌 API Integration

The app uses the **RAWG API** to fetch game data. The API service is in `src/Services/GlobalApi.jsx`:

- **getGenreList()** - Fetches all available game genres
- **getAllGames()** - Gets a list of all games
- **getGameListByGenreId()** - Filters games by a specific genre

You'll need your own API key from [RAWG](https://rawg.io/api). Replace the key in `GlobalApi.jsx` with yours.

## 🎨 Features

- **Genre Filtering**: Click on a genre to filter games
- **Light/Dark Theme**: Toggle between themes using the header button
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Real Game Data**: Pulls from RAWG, so the data is always up-to-date

## 📖 What You Can Learn

- Using React hooks (useState, useContext)
- Context API for state management (theme handling)
- Making API calls with Axios
- Component-based architecture
- Tailwind CSS for styling
- Vite for fast development

## 🧹 Other Commands

```bash
npm run lint    # Check code with ESLint
npm run preview # Preview the production build locally
```

## 🤝 Contributing

Feel free to fork and make improvements! Maybe add sorting, search, or better filtering?

## 👨‍💻 Author

**Alok Kumar**
- GitHub: [@alk231](https://github.com/alk231)

---
*Built with React, Vite, and a dash of caffeine.*
