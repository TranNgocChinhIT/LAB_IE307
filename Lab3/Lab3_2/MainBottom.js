import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeStack from './Home';
import Settings from './Settings';
import { SettingsContext } from './SettingsContext';

const Bottom = createBottomTabNavigator();

const TabIcon = ({ name, focused, darkMode }) => (
  <IonIcon name={name} size={25} color={focused ? '#4390f7' : darkMode ? '#fff' : '#000'} />
);

const homeScreenOptions = (headerShown, title, nameicon, darkMode) => ({
  headerShown,
  tabBarLabel: title,
  tabBarIcon: ({ focused }) => <TabIcon name={nameicon} focused={focused} darkMode={darkMode} />,
});

const MainBottom = () => {
  const { darkMode } = useContext(SettingsContext);

  const settingsScreenOptions = {
    ...homeScreenOptions(true, 'Settings', 'settings', darkMode),
    headerStyle: {
      backgroundColor: darkMode ? '#000' : '#fff',
    },
    headerTintColor: darkMode ? '#fff' : '#000',
  };

  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: darkMode ? '#000' : '#fff',
        tabBarInactiveBackgroundColor: darkMode ? '#000' : '#fff',
        tabBarLabelStyle: { fontSize: 13 },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={homeScreenOptions(false, 'Home', 'home', darkMode)}
      />
      <Bottom.Screen
        name="Settings"
        component={Settings}
        options={settingsScreenOptions}
      />
    </Bottom.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
  TextNoteApp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screenText: {
    color: '#000',
  },
});

export default MainBottom;
