import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/views/home/index';
import PlayerScreen from './src/views/player/index';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="PlayerScreen" component={PlayerScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

export default App;
