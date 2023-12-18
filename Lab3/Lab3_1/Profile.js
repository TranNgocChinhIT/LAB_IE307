import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useContext } from 'react';
import {AuthContext} from './AuthContext';

const Profile = () => {
  const {setisAuthenticated} = useContext(AuthContext);
  const handleLogout = () => {
    setisAuthenticated(false);
    console.log('Logged Out!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Profile Screen</Text>
      <Button
        title="LOG OUT"
        onPress={handleLogout}
        containerStyle={styles.buttonContainer}
      />
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
  buttonContainer: {
    // Your button container styles here
  },
});

export default Profile;
