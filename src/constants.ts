export const BREAKPOINTS = {
  mobile: 720,
  tablet: 1024,
  desktop: 1200,
};

export const MEDIA_QUERIES = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
};

export const DEVICE_TYPES = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
};

export const LINKS = {
  github: "https://github.com/your-name",
  linkedin: "https://www.linkedin.com/in/your-name/",
  email: "mailto:your-email@gmail.com",
};

export const PERSONAL_INFO = {
  name: "Your Name",
  role: "Your Role",
  description_brief: "A brief description about you.",
  description: [
    "A detailed description about you, your skills, experience, and what you bring to the table.",
    "Another paragraph if needed.",
  ],
};
