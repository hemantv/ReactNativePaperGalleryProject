import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Platform, useColorScheme} from 'react-native';
import {changeBarColors} from 'react-native-immersive-bars';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainScreen from './src/Screens/MainScreen';
import {ThemeType} from './src/Types/ThemeType';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

export const PreferencesContext = createContext<{
  changeTheme: any;
  currentTheme: ThemeType;
}>({
  changeTheme: (newTheme: ThemeType) => {},
  currentTheme: 'system',
});

const App = () => {
  const colorScheme = useColorScheme();

  const [currentTheme, setCurrentTheme] = useState<ThemeType>('system');

  const changeTheme = useCallback(
    (newTheme: ThemeType) => {
      setCurrentTheme(newTheme);
    },
    [currentTheme],
  );

  const preferences = useMemo(
    () => ({
      changeTheme: changeTheme,
      currentTheme: currentTheme,
    }),
    [changeTheme, currentTheme],
  );

  const isDarkTheme =
    currentTheme == 'system' ? colorScheme == 'dark' : currentTheme == 'dark';
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  useEffect(() => {
    AsyncStorage.getItem('@theme').then((value: string | null) => {
      if (value) {
        setCurrentTheme(value as ThemeType);
      }
    });
  }, []);

  useEffect(() => {
    if (Platform.OS == 'android') {
      changeBarColors(isDarkTheme, '#50000000', 'transparent');
    }
  }, [isDarkTheme]);

  return (
    <PreferencesContext.Provider value={preferences}>
      <SafeAreaProvider
        style={{
          backgroundColor: theme.colors.background,
        }}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <MainScreen />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
