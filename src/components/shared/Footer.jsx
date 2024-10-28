import React from 'react';
import { Layout } from 'antd';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/Footer.scss';

const { Footer } = Layout;

const AppFooter = () => {
  const { theme } = useTheme();

  return (
    <Footer className={`footer ${theme}`}>
      <p className="footer__text">© 2024 My App. All rights reserved.</p>
    </Footer>
  );
};

export default AppFooter;
