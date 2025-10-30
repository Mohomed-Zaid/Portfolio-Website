# Professional Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS showcasing skills, projects, and experience as a Graphic Designer and Aspiring Software Engineer.

## Features

- 🎨 Modern and professional design
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎯 Smooth scrolling navigation
- 💼 Comprehensive sections:
  - Hero section with introduction
  - About section with professional summary
  - Skills showcase with progress bars
  - Education timeline
  - Professional experience
  - Featured projects
  - Contact form
  - Footer with social links

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Popular icon library
- **Framer Motion** - Animation library (optional)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Personal Information

- Edit contact details in `src/components/Hero.js` and `src/components/Contact.js`
- Update social media links in `src/components/Hero.js` and `src/components/Footer.js`

### Add Your Photo

- Replace the placeholder in `src/components/Hero.js` with your actual photo

### Modify Colors

- Edit the color scheme in `tailwind.config.js`

### Add/Remove Sections

- Modify `src/App.js` to add or remove sections
- Create new components in `src/components/` folder

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use `gh-pages` package for deployment

## License

This project is open source and available for personal use.

## Contact

- Email: Zaidn2848@gmail.com
- Phone: 0777-531-318
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
