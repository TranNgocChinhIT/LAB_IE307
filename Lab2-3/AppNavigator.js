import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainBottom from './MainBottom';
import AuthStack from './AuthStack'
import {AuthContext} from './screens/AuthContext'

const Stack = createStackNavigator();

const AppNavigator = () => {
    //
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated
                    ? (
                        <Stack.Screen name="MainBottom" component={MainBottom} options={{headerShown:false}}/>
                    )
                    : (
                        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}/>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default AppNavigator;
