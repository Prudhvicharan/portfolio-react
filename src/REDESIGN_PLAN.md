# Portfolio Redesign & Refactor Plan

This file tracks the step-by-step implementation plan for redesigning and refactoring the portfolio, with a focus on mobile responsiveness, code quality, and modern UI/UX.

---

## 1. Mobile Responsiveness Audit & Fixes
- [x] **1.1. Audit each section on mobile (Home, Navbar, Projects, Skills, Experience, Education, Contact, Footer) for layout, overflow, and usability issues.**
- [x] 1.2. Fix grid/flex layouts to stack and fill width on mobile.
- [x] 1.3. Increase touch target sizes for all buttons/links.
- [x] 1.4. Adjust padding/margins for mobile breakpoints.
- [x] 1.5. Make Navbar mobile menu a full-screen overlay with large links.
- [x] 1.6. Stack Footer columns and center-align content on mobile.
- [x] 1.7. Make Contact form fields/buttons full width and touch-friendly.

## 2. Visual Redesign
- [x] 2.1. Update color palette for better contrast and modern look.
- [x] 2.2. Standardize border-radius and box-shadow across all cards and buttons.
- [x] 2.3. Implement fluid typography using `clamp()` for headings and body text.
- [ ] 2.4. Add subtle section dividers or background color changes between sections.

## 3. Component & Code Refactoring
- [ ] 3.1. Extract reusable components (SectionTitle, Button, Card, etc.).
- [ ] 3.2. Move inline styles to CSS modules or styled components.
- [ ] 3.3. Add PropTypes or migrate to TypeScript for type safety.
- [ ] 3.4. Refactor large components to be more modular and readable.

## 4. Accessibility Improvements
- [ ] 4.1. Ensure all interactive elements are keyboard accessible.
- [ ] 4.2. Add proper ARIA labels and roles.
- [ ] 4.3. Test color contrast and add focus states.

## 5. Final Polish & Testing
- [ ] 5.1. Test on multiple devices and browsers.
- [ ] 5.2. Optimize images and assets for performance.
- [ ] 5.3. Review and clean up codebase.

---

**Instructions:**  
- Mark each item as complete (`[x]`) when finished.
- Refer to this plan before starting new work.
- Update or reorder steps as needed. 