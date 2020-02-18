import React, { useEffect } from 'react';
import { AppContainer, NavigatorService } from './src/core/navigation';
import { Provider } from 'react-redux';
import store from 'core/store';

const App: React.FC = () => {
  const navigatorService = NavigatorService.getInstance();

  return (
    <Provider store={store}>
      <AppContainer
        ref={navigatorRef => {
          navigatorService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
