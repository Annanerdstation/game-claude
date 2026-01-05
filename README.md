# 🎉 Confetti Button - Game Claude

A simple, beautiful confetti animation that launches when you click a button. Built with vanilla JavaScript and HTML5 Canvas.

## ✨ Features

- 🎨 Colorful confetti animation with 7 vibrant colors
- 🌊 Realistic physics (gravity, rotation, velocity)
- 📱 Fully responsive design
- 🎯 Smooth 60 FPS animation
- 🚀 Zero dependencies - pure vanilla JavaScript
- 💅 Beautiful gradient UI with hover effects

## 🎮 Demo

Click the "🎉 Celebrate! 🎉" button to launch 100 colorful confetti pieces!

## 📁 Project Structure

```
game-claude/
├── index.html          # Main HTML page
├── confetti.js         # Confetti animation logic
├── style.css           # Styling and animations
├── CLOUDFLARE_SETUP.md # Cloudflare Pages integration guide
├── DEPLOYMENT.md       # Deployment options
└── TESTING.md          # Testing environment setup
```

## 🚀 Quick Start

### View Live

**GitHub Pages:** https://annanerdstation.github.io/game-claude/

**Cloudflare Pages:** Follow [CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md) to deploy

### Local Development

Simply open `index.html` in your browser, or run a local server:

```bash
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## 🔧 Deployment

### Option 1: Cloudflare Pages (Recommended)

Connect your GitHub repository to Cloudflare Pages for automatic deployments:

👉 **[Complete Cloudflare Setup Guide](./CLOUDFLARE_SETUP.md)**

### Option 2: GitHub Pages

Already configured! Visit: https://annanerdstation.github.io/game-claude/

### Option 3: Other Platforms

Works on any static hosting: Netlify, Vercel, etc.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for all options.

## 🧪 Testing

See [TESTING.md](./TESTING.md) for testing environment setup.

## 🎨 Customization

### Change Confetti Colors

Edit the `colors` array in `confetti.js`:

```javascript
this.colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce', '#85c1e2', '#f8b739'];
```

### Adjust Confetti Amount

Change the count when calling `launch()` in `confetti.js`:

```javascript
confetti.launch(100); // Change 100 to any number
```

### Modify Animation Physics

Adjust gravity, velocity, and rotation in `confetti.js`:

```javascript
gravity: 0.15,        // Fall speed
velocityX: Math.random() * 4 - 2,  // Horizontal movement
velocityY: Math.random() * 3 + 2,  // Initial upward velocity
```

## 📄 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Pull requests welcome! Feel free to add new features or improve the animation.

---

Made with ❤️ using Claude Code