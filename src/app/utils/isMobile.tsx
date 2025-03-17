
export const checkIsMobile = (window: Window ) => {
      if (window.innerWidth <= 768) {
        console.log("SIM")
        return true;  // If screen width is 768px or smaller, treat it as mobile
      } else {
        console.log("Não")
        return false; // If screen width is larger, treat it as laptop/desktop
} 
} 