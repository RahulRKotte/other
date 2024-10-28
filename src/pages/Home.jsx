import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import Upload from "../components/upload/Upload";
import Reports from "../components/reports/Reports"
import "../styles/Home.scss"

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <Dashboard />;
      case "upload":
        return <Upload />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="home">
      <Sidebar onMenuItemClick={setSelectedComponent} />
      <div className="home__content">{renderComponent()}</div>
    </div>
  );
};

export default Home;
