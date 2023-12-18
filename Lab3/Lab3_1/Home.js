import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>
        Home Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    color: '#000',
  },
});

export default Home;
