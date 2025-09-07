"use client"
import React from 'react';
import { CardProps } from '../../interfaces';

/**
 * A reusable Card component to display listing information.
 * It is styled using Tailwind CSS for a modern, responsive design.
 * @param {CardProps} props - The properties for the Card component.
 */
const Card: React.FC<CardProps> = ({ id, title, description, imageUrl}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
        // Add an onerror fallback in case the image URL is broken
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/600x400/E5E7EB/4B5563?text=Image+Not+Found';
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;