import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';
import { FavouriteContextProvider } from './context/FavouriteContextProvider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <FavouriteContextProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </FavouriteContextProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return <RootNavigator />;
}

export default App;
