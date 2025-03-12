export default function Modal({ isOpen, onClose, children, className = '' }) {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="absolute inset-0"
        onClick={onClose} // Close when clicking outside
      ></div>

      <div className={`relative w-96 ${className}`}>
        {children}
      </div>
    </div>
  );
}
