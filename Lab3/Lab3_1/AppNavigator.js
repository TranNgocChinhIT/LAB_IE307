// AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppDrawer from './AppDrawer';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated
                    ? (
                        <Stack.Screen name="AppDrawer" component={AppDrawer} options={{ headerShown: false }} />
                    )
                    : (
                        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
