import React from "react";
import { Layout, Menu, Switch } from "antd";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";
import { useTheme } from "../../theme/ThemeContext";
import "../../styles/Sidebar.scss";

const { Sider } = Layout;

const Sidebar = ({ onMenuItemClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Sider width={250} className={`sidebar ${theme}`} trigger={null}>
      {/* <div className="sidebar__logo">Vulnerability Tracker</div> */}
      <Menu
        theme={theme === "dark" ? "dark" : "light"}
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="sidebar__menu"
      >
        <Menu.Item
          key="1"
          icon={<DashboardCustomizeRoundedIcon />}
          onClick={() => onMenuItemClick("dashboard")}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UploadRoundedIcon />}
          onClick={() => onMenuItemClick("upload")}
        >
          Upload
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<AssessmentRoundedIcon />}
          onClick={() => onMenuItemClick("reports")}
        >
          Reports
        </Menu.Item>
      </Menu>
      <div className="sidebar__toggle">
        <span className="sidebar__toggle-label">Dark Mode</span>
        <Switch checked={theme === "dark"} onChange={toggleTheme} />
      </div>
    </Sider>
  );
};

export default Sidebar;
