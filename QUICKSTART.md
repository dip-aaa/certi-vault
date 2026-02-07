# CertiVault - Quick Start Guide

Welcome to CertiVault! This guide will help you get the application running in minutes.

## 📦 What You'll Need

- **Node.js** version 18.0 or higher ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- A terminal/command prompt

## 🚀 Installation Steps

### 1. Extract the Project

Unzip the certivault folder to your desired location.

### 2. Open Terminal

Navigate to the certivault folder:

```bash
cd path/to/certivault
```

### 3. Install Dependencies

Run this command to install all required packages:

```bash
npm install
```

This will take a few minutes. You'll see a progress bar as packages are installed.

### 4. Start Development Server

Once installation is complete, start the server:

```bash
npm run dev
```

You should see output like:

```
▲ Next.js 15.1.0
- Local:        http://localhost:3000
- Ready in 2.3s
```

### 5. View in Browser

Open your browser and go to:

```
http://localhost:3000
```

You should now see CertiVault running! 🎉

## 🎨 Exploring the UI

The application has three main pages:

1. **Dashboard** - Overview of your certificates and stats
2. **Vault** - Browse and filter all certificates
3. **Portfolio** - Public-facing portfolio view

Try clicking the "Upload" button to see the upload modal in action!

## 🛠️ Making Changes

The project is organized as follows:

- `app/page.tsx` - Main application logic
- `components/` - All UI components
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Design system configuration

Any changes you make will automatically reload in the browser.

## 📱 Responsive Testing

To test mobile view:
1. Open browser developer tools (F12)
2. Click the device icon to toggle device toolbar
3. Select different device sizes

## 🏗️ Building for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

## ❓ Troubleshooting

### Port 3000 is already in use

If you see this error, either:
- Stop the other application using port 3000, or
- Use a different port: `PORT=3001 npm run dev`

### Module not found errors

Try deleting `node_modules` and `.next` folders, then run:

```bash
npm install
npm run dev
```

### Styling looks broken

Make sure Tailwind CSS is properly installed. Run:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## 📚 Next Steps

- Read the full README.md for detailed documentation
- Customize colors in `app/globals.css`
- Add your own certificate data in the component files
- Explore the design system in `tailwind.config.ts`

## 💡 Tips

- The UI uses custom fonts (Instrument Serif and DM Sans) that load from Google Fonts
- All animations are subtle and performant using Framer Motion
- The design is mobile-first and fully responsive
- Custom SVG icons maintain the minimal aesthetic

## 🤝 Need Help?

- Check the README.md for detailed documentation
- Review the component files for implementation examples
- Tailwind CSS docs: https://tailwindcss.com/docs
- Next.js docs: https://nextjs.org/docs

Enjoy building with CertiVault! ✨
