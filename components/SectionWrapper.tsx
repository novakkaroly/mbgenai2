import React from 'react';

interface Props {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const SectionWrapper: React.FC<Props> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};