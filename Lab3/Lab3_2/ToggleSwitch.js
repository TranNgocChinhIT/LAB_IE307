
import React,{useEffect} from  'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ToggleSwitch = ({ label, value, onValueChange, darkMode, fontsize }) => {

  return (
    <View style={styles.switchContainer}>
      <Text style={[styles.text, { fontSize: fontsize }, darkMode && styles.darkColor]}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange}   />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    paddingTop: 10,
  },
  darkColor: {
    color: '#fff',
  },
});

export default ToggleSwitch;
