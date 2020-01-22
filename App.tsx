import React from 'react';
import { AppContainer, NavigatorService } from './src/core/navigation';
import { initApi } from './src/core/api';

initApi();


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
