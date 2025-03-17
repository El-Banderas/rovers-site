
export const checkIsMobile = (window: Window ) => {
return window.matchMedia("(max-width: 600px)").matches;
} 