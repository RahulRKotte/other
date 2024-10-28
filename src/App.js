import React from "react";
import Route from "./route/Route";
import { ThemeProvider, useTheme } from "./theme/ThemeContext";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <main className="app__content">
        <Route/>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
