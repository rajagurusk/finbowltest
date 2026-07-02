import { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar({ activePage, setActivePage, isSidebarOpen, closeSidebar }) {
  const [isRmsOpen, setIsRmsOpen] = useState(true);

  const linkedInUrl =
    "https://www.linkedin.com/in/rajaguru-sivakumar-02824b259/";

  const redirectToLinkedIn = () => {
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/rajaguru-sivakumar-CV.pdf";
    link.download = "Rajaguru-Sivakumar-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTopDashboardClick = () => {
    redirectToLinkedIn();
    downloadCV();
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? "sidebarOpen" : ""}`}>
      <div className="brand">
        <div className="brandIcon"></div>
        <span>FinBowl</span>

        <button className="closeSidebarBtn" onClick={closeSidebar}>
          ×
        </button>
      </div>

      <div className="searchBox">
        <span>⌕</span>
        <input type="text" placeholder="Search" />
      </div>

      <nav className="sideNav">
        <button className="navItem" onClick={handleTopDashboardClick}>
          <span className="navIcon">⌂</span>
          <span>Dashboard</span>
        </button>

        <button className="navItem hasArrow" onClick={redirectToLinkedIn}>
          <span className="navIcon">▣</span>
          <span>Finance</span>
          <span className="arrow">⌄</span>
        </button>

        <button className="navItem hasArrow" onClick={redirectToLinkedIn}>
          <span className="navIcon">◷</span>
          <span>Sales CRM</span>
          <span className="arrow">⌄</span>
        </button>

        <div className={`navGroup ${isRmsOpen ? "activeGroup" : ""}`}>
          <button
            className="navItem hasArrow activeParent rmsButton"
            onClick={() => setIsRmsOpen(!isRmsOpen)}
          >
            <span className="navIcon">▦</span>
            <span>RMS</span>
            <span className="arrow">{isRmsOpen ? "⌃" : "⌄"}</span>
          </button>

          {isRmsOpen && (
            <div className="subMenu">
              <button className="subItem" onClick={redirectToLinkedIn}>
                <span className="subIcon">▥</span>
                Dashboard
              </button>

              <button
                className={`subItem ${
                  activePage === "loans" ? "activeSub" : ""
                }`}
                onClick={() => setActivePage("loans")}
              >
                <span className="subIcon">▤</span>
                Loans
              </button>

              <button
                className={`subItem ${
                  activePage === "disbursement" ? "activeSub" : ""
                }`}
                onClick={() => setActivePage("disbursement")}
              >
                <span className="subIcon">☞</span>
                Disbursement
              </button>

              <button className="subItem" onClick={redirectToLinkedIn}>
                <span className="subIcon">☑</span>
                Invoices
              </button>

              <button className="subItem" onClick={redirectToLinkedIn}>
                <span className="subIcon">▱</span>
                Bills
              </button>

              <button className="subItem" onClick={redirectToLinkedIn}>
                <span className="subIcon">▥</span>
                RMS Reports
              </button>
            </div>
          )}
        </div>

        <button className="navItem hasArrow" onClick={redirectToLinkedIn}>
          <span className="navIcon">♡</span>
          <span>Compliance</span>
          <span className="arrow">⌄</span>
        </button>

        <button className="navItem hasArrow" onClick={redirectToLinkedIn}>
          <span className="navIcon">◇</span>
          <span>Vendors</span>
          <span className="arrow">⌄</span>
        </button>

        <button className="navItem hasArrow" onClick={redirectToLinkedIn}>
          <span className="navIcon">✧</span>
          <span>AI Suite</span>
          <span className="arrow">⌄</span>
        </button>

        <button className="navItem hasArrow" onClick={redirectToLinkedIn}>
          <span className="navIcon">▧</span>
          <span>Reports</span>
          <span className="arrow">⌄</span>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;