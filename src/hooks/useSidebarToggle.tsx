"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface SidebarToggleContextType {
  isOpen: boolean;
  toggleSidebarToggle: () => void;
}

const SidebarToggleContext = createContext<
  SidebarToggleContextType | undefined
>(undefined);

const SidebarToggleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <SidebarToggleContext.Provider value={{ isOpen, toggleSidebarToggle }}>
      {children}
    </SidebarToggleContext.Provider>
  );
};

const useSidebarToggle = (): SidebarToggleContextType => {
  const context = useContext(SidebarToggleContext);
  if (!context) {
    throw new Error(
      "useSidebarToggle must be used within a SidebarToggleProvider"
    );
  }
  return context;
};

export { SidebarToggleProvider, useSidebarToggle };
