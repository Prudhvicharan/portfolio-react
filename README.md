# Professional Full Stack Developer Portfolio

A modern, responsive, and visually appealing portfolio website for a Full Stack Developer with dark/light theme support and smooth animations.

## Features

- **Responsive Design** - Looks great on all devices (desktop, tablet, mobile)
- **Dark/Light Mode** - Toggle between themes with a smooth transition
- **Smooth Animations** - Section animations when scrolling
- **Dynamic Navbar** - Responsive navigation that highlights the current section
- **Modern UI** - Clean, minimalist, and professional design
- **Contact Form** - Integrated with EmailJS for direct messaging

## Sections

1. **Home** - Introduction with social links and profile photo
2. **Experience** - Work history timeline
3. **Education** - Academic background
4. **Projects** - Showcase of recent work
5. **Skills** - Technical capabilities with visual indicators
6. **Contact** - Contact form and information
7. **Footer** - Additional links and information

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### Personalization

#### Basic Info

1. Replace dummy content in each component with your personal information:
   - Update name, bio, and profile picture in `Home.jsx`
   - Add your work experience in `Experience.jsx`
   - Update education details in `Education.jsx`
   - Add your projects in `Projects.jsx`
   - List your skills in `Skills.jsx`
   - Update contact information in `Contact.jsx`

#### Profile Picture

1. Add your profile picture to the `public` folder
2. Update the image path in the `Home.jsx` component

#### Email Configuration

The contact form is set up with EmailJS. To make it work with your account:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the service ID, template ID, and public key in the `Contact.jsx` component

## Customization

### Colors

You can change the color scheme by modifying the CSS variables in `App.css`:

```css
:root {
  /* Light Theme Colors */
  --primary-light: #3498db;
  --secondary-light: #2ecc71;
  /* ... other color variables */
  
  /* Dark Theme Colors */
  --primary-dark: #3498db;
  --secondary-dark: #2ecc71;
  /* ... other color variables */
}
```

### Fonts

The default font is 'Inter'. To change it, update the `--font-family` variable in `App.css`.

## Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder that you can deploy to any static hosting service.

## Technologies Used

- React.js
- React Router
- Framer Motion (animations)
- React Scroll
- React Icons
- EmailJS
- CSS Variables

## License

This project is licensed under the MIT License - see the LICENSE file for details.
