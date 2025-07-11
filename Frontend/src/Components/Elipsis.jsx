import React, { useState, useRef, useEffect } from 'react';

const Ellipsis = ({ 
  children, 
  lines = 1, 
  showTooltip = true, 
  tooltipPosition = 'top',
  className = '',
  expandable = false,
  expandText = 'Show more',
  collapseText = 'Show less'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const textRef = useRef(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (element) {
      // Check if text is actually truncated
      const isOverflowing = element.scrollHeight > element.clientHeight;
      setIsTruncated(isOverflowing);
    }
  }, [children, lines]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    if (isTruncated && showTooltip) {
      setIsTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const getClampClass = () => {
    if (isExpanded) return '';
    return lines === 1 ? 'truncate' : `line-clamp-${lines}`;
  };

  const tooltipClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2 top-0',
    right: 'left-full ml-2 top-0'
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={textRef}
        className={`${getClampClass()} ${expandable ? 'cursor-pointer' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={expandable ? handleToggle : undefined}
        title={!showTooltip ? (typeof children === 'string' ? children : '') : ''}
      >
        {children}
      </div>
      
      {/* Tooltip */}
      {isTooltipVisible && isTruncated && (
        <div className={`absolute z-50 ${tooltipClasses[tooltipPosition]} bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-normal max-w-xs shadow-lg`}>
          {children}
          <div className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${
            tooltipPosition === 'top' ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2' :
            tooltipPosition === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2' :
            tooltipPosition === 'left' ? 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2' :
            'right-full top-1/2 -translate-y-1/2 translate-x-1/2'
          }`}></div>
        </div>
      )}
      
      {/* Expand/Collapse Button */}
      {expandable && isTruncated && (
        <button
          onClick={handleToggle}
          className="text-blue-500 hover:text-blue-700 text-sm mt-1 font-medium"
        >
          {isExpanded ? collapseText : expandText}
        </button>
      )}
    </div>
  );
};


export default Ellipsis;