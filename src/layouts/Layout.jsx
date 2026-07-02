import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Layout.css";

function Layout({ children, activePage, setActivePage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout">
      <div
        className={`mobileOverlay ${isSidebarOpen ? "showOverlay" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <Sidebar
        activePage={activePage}
        setActivePage={handlePageChange}
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <div className="main-area">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}

export default Layout;