import React, { createContext, useContext, useState } from 'react';

type FooterContextType = {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
};

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const FooterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('projects');

  return (
    <FooterContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = (): FooterContextType => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error('useFooter must be used within a FooterProvider');
  }
  return context;
};
