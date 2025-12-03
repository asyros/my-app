import React, { useState } from "react";
const UIContext = React.createContext();

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <UIContext.Provider
      value={{ isSidebarOpen, isModalOpen, toggleSidebar, toggleModal }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
