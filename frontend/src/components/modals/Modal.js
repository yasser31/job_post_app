// src/components/modals/Modal.js
'use client'

import { useEffect } from 'react'
import ReactDOM from 'react-dom'


export function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose])

    if (!isOpen) return null
    
    return ReactDOM.createPortal(
        <div
          className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div
            className="bg-gray-200 p-6 rounded-xl shadow-lg w-full max-w-md relative mt-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-0 right-2 text-gray-400 hover:text-black text-2xl"
            >
              &times;
            </button>
            {children}
          </div>
        </div>,
        document.body
      )
    }
