# Professional Full Stack Developer Portfolio

A modern, responsive, and visually appealing portfolio website for a Full Stack Developer with dark/light theme support and smooth animations.

## Live Demo
[View the live portfolio site](https://Prudhvicharan.github.io/portfolio-react)

## Features

- **Responsive Design** - Looks great on all devices (desktop, tablet, mobile)
- **Dark/Light Mode** - Toggle between themes with a smooth transition
- **Smooth Animations** - Section animations when scrolling
- **Dynamic Navbar** - Responsive navigation that highlights the current section
- **Modern UI** - Clean, minimalist, and professional design
- **Contact Form** - Integrated with EmailJS for direct messaging
- **Continuous Deployment** - Automatically deploys to GitHub Pages on push to main branch

## Sections

1. **Home** - Introduction with social links and profile photo
2. **Experience** - Work history timeline
3. **Education** - Academic background
4. **Projects** - Showcase of recent work
5. **Skills** - Technical capabilities with visual indicators
6. **Contact** - Contact form and information
7. **Footer** - Additional links and information

## Technologies Used

- React.js
- React Router
- Framer Motion (animations)
- React Scroll
- React Icons
- EmailJS
- CSS Variables
- GSAP (GreenSock Animation Platform)
- GitHub Actions for CI/CD

## Getting Started

### Local Development

1. Clone the repository
```bash
git clone https://github.com/Prudhvicharan/portfolio-react
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### Deployment

This project is set up with GitHub Actions for continuous deployment to GitHub Pages.
Simply push your changes to the main branch, and they will be automatically deployed:

```bash
git add .
git commit -m "Your commit message"
git push
```

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

1. Add your profile picture to the `src/assets` folder
2. Update the import path in the `Home.jsx` component

#### Email Configuration

The contact form is set up with EmailJS. To make it work with your account:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the service ID, template ID, and public key in the `Contact.jsx` component

## Customization

### Colors

You can change the color scheme by modifying the CSS variables in `App.css`.

### Fonts

The default font is 'Poppins'. To change it, update the `--font-family` variable in `App.css`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.