// Badge Component
const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  removable = false,
  onRemove,
  icon,
  dot = false,
  pulse = false,
  ...props
}) => {
  // Variant styles
  const variants = {
    default: "bg-gray-100 text-gray-800 border-gray-200",
    primary: "bg-blue-100 text-blue-800 border-blue-200",
    secondary: "bg-gray-100 text-gray-600 border-gray-200",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    error: "bg-red-100 text-red-800 border-red-200",
    info: "bg-cyan-100 text-cyan-800 border-cyan-200",
    dark: "bg-gray-800 text-white border-gray-700",
    light: "bg-white text-gray-800 border-gray-200 shadow-sm",
    outline: "bg-transparent border-2 border-gray-300 text-gray-700",
    "outline-primary": "bg-transparent border-2 border-blue-500 text-blue-600",
    "outline-success":
      "bg-transparent border-2 border-green-500 text-green-600",
    "outline-warning":
      "bg-transparent border-2 border-yellow-500 text-yellow-600",
    "outline-error": "bg-transparent border-2 border-red-500 text-red-600",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    "gradient-blue": "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    "gradient-green":
      "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  };

  // Size styles
  const sizes = {
    xs: "text-xs px-2 py-0.5 gap-1",
    sm: "text-xs px-2.5 py-1 gap-1",
    md: "text-sm px-3 py-1.5 gap-1.5",
    lg: "text-base px-4 py-2 gap-2",
    xl: "text-lg px-5 py-2.5 gap-2.5",
  };

  // Dot colors based on variant
  const dotColors = {
    default: "bg-gray-500",
    primary: "bg-blue-500",
    secondary: "bg-gray-400",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-cyan-500",
    dark: "bg-gray-600",
    light: "bg-gray-400",
    outline: "bg-gray-500",
    "outline-primary": "bg-blue-500",
    "outline-success": "bg-green-500",
    "outline-warning": "bg-yellow-500",
    "outline-error": "bg-red-500",
    gradient: "bg-purple-500",
    "gradient-blue": "bg-blue-500",
    "gradient-green": "bg-green-500",
  };

  const baseClasses =
    "inline-flex items-center font-medium rounded-full border transition-all duration-200 hover:scale-105";
  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizes[size] || sizes.md;
  const dotColorClass = dotColors[variant] || dotColors.default;

  return (
    <span
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {/* Pulse effect */}
      {pulse && (
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ backgroundColor: "currentColor" }}
        ></span>
      )}

      {/* Dot indicator */}
      {dot && (
        <span
          className={`w-2 h-2 rounded-full ${dotColorClass} ${
            pulse ? "animate-pulse" : ""
          }`}
        ></span>
      )}

      {/* Icon */}
      {icon && <span className="flex items-center">{icon}</span>}

      {/* Content */}
      <span className="relative">{children}</span>

      {/* Remove button */}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 inline-flex items-center justify-center w-4 h-4 text-current hover:bg-black hover:bg-opacity-10 rounded-full transition-colors duration-150"
          aria-label="Remove badge"
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
};
const BadgeGroup = ({ children, className = "", spacing = "normal" }) => {
  const spacingClasses = {
    tight: "gap-1",
    normal: "gap-2",
    loose: "gap-3",
  };

  return (
    <div className={`flex flex-wrap ${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  );
};
// Notification Badge Component
const NotificationBadge = ({
  count,
  max = 99,
  showZero = false,
  dot = false,
  className = "",
  variant = "error",
  size = "sm",
  ...props
}) => {
  const displayCount = count > max ? `${max}+` : count;
  const shouldShow = showZero || count > 0;

  if (!shouldShow) return null;

  if (dot) {
    return (
      <Badge
        variant={variant}
        size={size}
        className={`!px-0 !py-0 min-w-[8px] min-h-[8px] ${className}`}
        {...props}
      >
        <span className="sr-only">{count} new notifications</span>
      </Badge>
    );
  }

  return (
    <Badge
      variant={variant}
      size={size}
      className={`min-w-[20px] justify-center ${className}`}
      {...props}
    >
      {displayCount}
    </Badge>
  );
};

const StatusBadge = ({ status, className = "", ...props }) => {
  const statusConfig = {
    online: { variant: "success", text: "Online", dot: true },
    offline: { variant: "error", text: "Offline", dot: true },
    away: { variant: "warning", text: "Away", dot: true },
    busy: { variant: "error", text: "Busy", dot: true },
    idle: { variant: "secondary", text: "Idle", dot: true },
    active: { variant: "primary", text: "Active", dot: true, pulse: true },
    inactive: { variant: "secondary", text: "Inactive", dot: true },
    pending: { variant: "warning", text: "Pending", dot: true, pulse: true },
    approved: { variant: "success", text: "Approved", dot: true },
    rejected: { variant: "error", text: "Rejected", dot: true },
    draft: { variant: "secondary", text: "Draft", dot: true },
    published: { variant: "success", text: "Published", dot: true },
  };

  const config = statusConfig[status] || statusConfig.offline;

  return (
    <Badge
      variant={config.variant}
      dot={config.dot}
      pulse={config.pulse}
      className={className}
      {...props}
    >
      {config.text}
    </Badge>
  );
};
export { Badge, NotificationBadge, BadgeGroup, StatusBadge };
