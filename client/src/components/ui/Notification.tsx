import { useEffect } from "react";

const NotificationToast = ({ message, type = "info", show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Auto-close after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  }[type];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;
