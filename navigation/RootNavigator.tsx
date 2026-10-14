import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackType } from './types';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home/Home';
import ParticiensScreen from '../screens/particien/ParticiensScreen';

const Stack = createNativeStackNavigator<RootStackType>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Accueil' }}
        />

        <Stack.Screen
          name="ParticiensScreen"
          component={ParticiensScreen}
          options={{ title: 'Particiens' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
