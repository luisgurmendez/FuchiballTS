import React, { useEffect } from 'react';
import { AppContainer, NavigatorService } from './src/core/navigation';

const App: React.FC = () => {
  const navigatorService = NavigatorService.getInstance();

  return (
    <AppContainer
      ref={navigatorRef => {
        navigatorService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default App;
