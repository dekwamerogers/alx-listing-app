"use client"

import React from 'react';
import { ButtonProps } from '../../interfaces';

/**
 * A reusable Button component for interactive elements.
 * It is styled using Tailwind CSS for a consistent look and feel.
 * @param {ButtonProps} props - The properties for the Button component.
 */
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-600 text-white font-bold py-2 px-4 rounded-full
        transition-colors duration-200 ease-in-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 active:bg-blue-800'}
      `}
    >
      {label}
    </button>
  );
};

export default Button;