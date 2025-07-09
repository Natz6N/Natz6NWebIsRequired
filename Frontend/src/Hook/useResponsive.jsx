import { useState, useEffect, useCallback } from 'react';

// Breakpoint constants - mudah dikustomisasi
const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

const useResponsive = (customBreakpoints = {}) => {
  // Merge custom breakpoints dengan default
  const breakpoints = { ...BREAKPOINTS, ...customBreakpoints };
  
  // Helper function untuk mendapatkan window width dengan safety check
  const getWindowWidth = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    return window.innerWidth;
  }, []);

  const [windowWidth, setWindowWidth] = useState(getWindowWidth);
  const [windowHeight, setWindowHeight] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return window.innerHeight;
  });

  // Debounce resize handler untuk performa yang lebih baik
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const handleResize = useCallback(
    debounce(() => {
      setWindowWidth(getWindowWidth());
      setWindowHeight(window.innerHeight);
    }, 150),
    [getWindowWidth, debounce]
  );

  useEffect(() => {
    // Early return jika tidak di browser
    if (typeof window === 'undefined') return;

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Responsive utilities
  const isXs = windowWidth < breakpoints.sm;
  const isSm = windowWidth >= breakpoints.sm && windowWidth < breakpoints.md;
  const isMd = windowWidth >= breakpoints.md && windowWidth < breakpoints.lg;
  const isLg = windowWidth >= breakpoints.lg && windowWidth < breakpoints.xl;
  const isXl = windowWidth >= breakpoints.xl && windowWidth < breakpoints.xxl;
  const isXxl = windowWidth >= breakpoints.xxl;

  // Backward compatibility
  const isMobile = windowWidth < breakpoints.md;
  const isTablet = windowWidth >= breakpoints.md && windowWidth < breakpoints.lg;
  const isDesktop = windowWidth >= breakpoints.lg;

  // Device orientation
  const isPortrait = windowHeight > windowWidth;
  const isLandscape = windowHeight <= windowWidth;

  // Utility functions
  const isBelow = useCallback((breakpoint) => {
    return windowWidth < (breakpoints[breakpoint] || breakpoint);
  }, [windowWidth, breakpoints]);

  const isAbove = useCallback((breakpoint) => {
    return windowWidth >= (breakpoints[breakpoint] || breakpoint);
  }, [windowWidth, breakpoints]);

  const isBetween = useCallback((min, max) => {
    const minWidth = breakpoints[min] || min;
    const maxWidth = breakpoints[max] || max;
    return windowWidth >= minWidth && windowWidth < maxWidth;
  }, [windowWidth, breakpoints]);

  // Current breakpoint name
  const getCurrentBreakpoint = useCallback(() => {
    if (isXs) return 'xs';
    if (isSm) return 'sm';
    if (isMd) return 'md';
    if (isLg) return 'lg';
    if (isXl) return 'xl';
    if (isXxl) return 'xxl';
    return 'unknown';
  }, [isXs, isSm, isMd, isLg, isXl, isXxl]);

  return {
    // Dimensions
    windowWidth,
    windowHeight,
    
    // Breakpoints
    breakpoints,
    
    // Specific breakpoint checks
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
    
    // Backward compatibility & common use cases
    isMobile,
    isTablet,
    isDesktop,
    
    // Orientation
    isPortrait,
    isLandscape,
    
    // Utility functions
    isBelow,
    isAbove,
    isBetween,
    getCurrentBreakpoint,
    
    // Current breakpoint info
    currentBreakpoint: getCurrentBreakpoint()
  };
};

export default useResponsive;