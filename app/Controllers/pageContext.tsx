"use client";

import React, { createContext, useState } from "react";

const PageContext = createContext<{
  isOpen: boolean;
  mousePosition: { x: number; y: number };
  openPage: (e: React.MouseEvent, page: string) => void;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  closePage: (e: React.MouseEvent) => void;
}>({
  isOpen: false,
  mousePosition: { x: 0, y: 0 },
  openPage: () => {},
  currentPage: "about",
  setCurrentPage: () => {},
  closePage: () => {},
});

const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState("about");

  const openPage = (e: React.MouseEvent, page: string) => {
    window.sa_event("page_open", { page });
    window.document.body.style.overflow = "hidden";
    setCurrentPage(page);
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  const closePage = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    window.document.body.style.overflow = "scroll";
    setIsOpen(false);
  };

  return (
    <PageContext.Provider
      value={{
        isOpen,
        mousePosition,
        openPage,
        currentPage,
        setCurrentPage,
        closePage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageContextProvider };
