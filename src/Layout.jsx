import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header: Always at the top */}
      <Header />

      {/* Main content: Grows to fill available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer: Always at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
