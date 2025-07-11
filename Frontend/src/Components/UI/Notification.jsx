import React, { useState, useEffect } from "react";

const Notification = ({ message, type = "info", onClose, duration = 5000 , className }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 300); // Tunggu animasi selesai
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getTypeStyles = () => {
    const base =
      "p-4 rounded-lg shadow-lg flex items-start transition-all duration-300 ease-in-out";
    return (
      {
        success: `${base} bg-green-50 border border-green-200 max-w-md`,
        error: `${base} bg-red-50 border border-red-200 max-w-md`,
        warning: `${base} bg-yellow-50 border border-yellow-200 max-w-md`,
        info: `${base} bg-blue-50 border border-blue-200 max-w-md`,
        default: `${base} bg-gray-50 border border-gray-200 max-w-md`,
      }[type] || `${base} bg-gray-50 border border-gray-200`
    );
  };

  const getIconColor = () => {
    return (
      {
        success: "bg-green-100 text-green-600",
        error: "bg-red-100 text-red-600",
        warning: "bg-yellow-100 text-yellow-600",
        info: "bg-blue-100 text-blue-600",
        default: "bg-gray-100 text-gray-600",
      }[type] || "bg-gray-100 text-gray-600"
    );
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "info":
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`${getTypeStyles()} ${
        isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      } ${className}`}
    >
      <div className={`p-2 rounded-full mr-3 ${getIconColor()}`}>
        {getIcon()}
      </div>
      <div className="flex-1 text-sm text-gray-700">{message}</div>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(onClose, 300);
        }}
        className="ml-4 text-gray-500 hover:text-gray-700 transition-colors"
      >
        ×
      </button>
    </div>
  );
};

export default Notification;
