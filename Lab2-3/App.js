import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from './screens/AuthContext'
import AppNavigator from './AppNavigator'
// 21521892 -Trần Ngọc Chinh
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
