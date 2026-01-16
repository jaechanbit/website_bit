import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  href, 
  children, 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold py-4 px-8 rounded-md transition-colors shadow-lg";
  const variants = {
    primary: "bg-brand-blue hover:bg-blue-600 text-white",
    secondary: "bg-white text-brand-navy hover:bg-gray-100",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
  };

  return (
    <Link 
      href={href}
      className={clsx(baseStyles, variants[variant], fullWidth && "w-full")}
    >
      {children} <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  );
};

export default CTAButton;