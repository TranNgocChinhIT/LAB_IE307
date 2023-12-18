import React, { useState,useContext } from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import Slider from '@react-native-community/slider'; // Updated import statement
import ToggleSwitch from "./ToggleSwitch";
import {SettingsContext} from './SettingsContext';

const Settings = () => {
  const {darkMode ,fontSize,updateDarkMode,updateFontSize} = useContext(SettingsContext);


  const handleOnDarkModeChange = () => {
    const newDarkMode = !darkMode;
    updateDarkMode(newDarkMode);
  };

  const handleFontSizeChange = (newFontSizeValue) => {
    updateFontSize(newFontSizeValue);
  };
  
  const fontSizeValue = fontSize !== null ? fontSize : 18

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <ToggleSwitch
        label="Dark Mode"
        value={darkMode}
        onValueChange={handleOnDarkModeChange}
        darkMode={darkMode}
        fontsize = {fontSize}
      />
      <View style={styles.switchContainer}>
        <Text style={[{fontSize: fontSizeValue}, darkMode && styles.darkColor]}>Font size</Text>
        <Text style={[{fontSize: fontSizeValue ,    paddingTop: 10,    paddingRight:20,  }, darkMode && styles.darkColor]}>{fontSize}</Text>
      </View>
      <Slider
        value={fontSize}
        step={2}
        minimumValue={12}
        maximumValue={36}
        miniumTrackTintColor ="#06b6d4"
        maxiumTrackTintColor ="#cbd5e1"
        onValueChange={(value) =>handleFontSizeChange(value) }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:15,
  },
  container: {
    padding: 15,
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
  },
  darkContainer: {
    backgroundColor: "#000",
  },
  darkColor: {
    color: '#fff',
  },
});

export default Settings;
