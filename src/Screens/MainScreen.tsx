import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../Types/RootStackParamList';
import DetailScreen from './DetailScreen';
import ListScreen from './ListScreen';

const Stack = createStackNavigator<RootStackParamList>();

const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={'List'} component={ListScreen} />
      <Stack.Screen name={'Detail'} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MainScreen;
