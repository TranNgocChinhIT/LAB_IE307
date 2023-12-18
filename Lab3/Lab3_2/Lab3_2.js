import React ,{useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainBottom from './MainBottom';
import { SettingsProvider } from './SettingsContext';
import { db } from './db';


const HomeDrawer = () => {
  db.transaction(
    
    (tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, context TEXT)',
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, fontSize INTEGER, darkMode INTEGER)',
      );
    },
    (error) => {
      console.log('Error initializing database:', error);
    },
    () => {
      console.log('Database initialized successfully');
    }
  );

  return (
    <SettingsProvider>
      <NavigationContainer>
        <MainBottom />
      </NavigationContainer>
    </SettingsProvider>
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

export default HomeDrawer;
