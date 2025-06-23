'use client';

import React, { useState } from 'react';

// Componentes
import Layout from './Layout';
import Profile from './Profile';
import ConfigureApp from './ConfigureApp';
import ConfigureCards from './ConfigureCards';
import HelpCenter from './HelpCenter';
import Logout from './Logout';
import Transfers from './Transfers';
import Services from './Services';
import Movimientos from './MovementFilters';

const MainView = () => {
  const [activeView, setActiveView] = useState('profile');

  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return <Profile />;
      case 'configureApp':
        return <ConfigureApp />;
      case 'configureCards':
        return <ConfigureCards />;
      case 'helpCenter':
        return <HelpCenter />;
      case 'logout':
        return <Logout />;
      case 'transfers':
        return <Transfers />;
      case 'services':
        return <Services />;
      case 'movimientos':
        return <Movimientos />;
      default:
        return <Profile />;
    }
  };

  return (
    <Layout setActiveView={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default MainView;
