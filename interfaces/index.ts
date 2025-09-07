// This file defines the TypeScript interfaces for the project.

/**
 * @interface CardProps
 * @description Defines the properties for the Card component.
 */
export interface CardProps {
  // The unique identifier for the card's content.
  id: number | string;
  // The main title of the card.
  title: string;
  // A description or subtitle for the card.
  description: string;
  // The URL for the image to be displayed on the card.
  imageUrl: string;

  className?: string;
}

/**
 * @interface ButtonProps
 * @description Defines the properties for the Button component.
 */
export interface ButtonProps {
  // The text to display on the button.
  label: string;
  // The function to call when the button is clicked.
  onClick: () => void;
  // A boolean to disable the button. The '?' makes this property optional.
  disabled?: boolean;
}