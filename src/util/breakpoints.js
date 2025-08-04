// Breakpoint definitions
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px'
};

// Media query helpers
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  large: `@media (min-width: ${breakpoints.large})`,
  
  // Between breakpoints
  tabletOnly: `@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
  desktopOnly: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.large})`
};

// Optional: Responsive value helper
export const responsive = (mobile, tablet, desktop) => `
  ${mobile && `${media.mobile} { ${mobile} }`}
  ${tablet && `${media.tablet} { ${tablet} }`}
  ${desktop && `${media.desktop} { ${desktop} }`}
`;