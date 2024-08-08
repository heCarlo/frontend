import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string | null;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    // Bloquear o scroll da página quando o modal está aberto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Limpar o estilo ao desmontar o componente
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 my-6 sm:my-8 lg:my-16 max-h-[90vh] flex flex-col">
          <div className="bg-blue-500 text-white rounded-t-lg p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Fechar modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
