import * as React from "react";
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutScreen from './screens/AboutScreen';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

// Navigasi Stack
const StackNav = createNativeStackNavigator();
function StackNavScreen() {
  return (
    <StackNav.Navigator>

      <StackNav.Screen 
        name="Beranda"
        component={ HomeScreen }
        options={{
          headerShown: false,
        }}
      />

      <StackNav.Screen 
        name="Detail"
        component={ DetailsScreen } 
        options={{
          headerShown: true,
          title: "Detail",
        }}
      />
    </StackNav.Navigator>
  );
}

// Navigasi Drawer
const StackDrawer = createDrawerNavigator();
export default function App() {
  
  return (
    <NavigationContainer>

      <StackDrawer.Navigator
            initialRouteName="Beranda"
            useLegacyImplementation
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },              
            }}
        >
            <StackDrawer.Screen 
              name="Home"
              component={ StackNavScreen }
              options={{
                title: "Aplikasi Review",
              }}
            />

            <StackDrawer.Screen 
                name="About"
                component={ AboutScreen }
                options={{
                  title: "Tentang Aplikasi",
                }}
            />

      </StackDrawer.Navigator>      

    </NavigationContainer>
  );
}