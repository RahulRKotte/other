import React, { useState } from 'react';
import { Layout, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "../../styles/Header.scss"

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
    setVisible(false);
  };

  const userDetails = (
    <Menu>
      <Menu.Item>
        <strong>Username:</strong> JohnDoe
      </Menu.Item>
      <Menu.Item>
        <strong>Role:</strong> Admin
      </Menu.Item>
      <Menu.Item>
        <strong>Location:</strong> New York, USA
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item danger onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header">
      <div className="header__app-name">My App</div>
      <div className="header__profile">
        <Dropdown
          overlay={userDetails}
          trigger={['click']}
          onClick={handleMenuClick}
          visible={visible}
          onVisibleChange={setVisible}
        >
          <div className="header__profile-icon">
            <UserOutlined />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
