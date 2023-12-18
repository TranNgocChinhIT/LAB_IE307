import React from 'react';
import { StyleSheet, Text, View,Button ,Pressable} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Profile from "./Profile";
import Categories from "./Categories";
import Favourites from "./Favourites";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Bottom = createBottomTabNavigator();
const TabIcon = ({ name, focused }) => {
  return (
    <IonIcon name={name} size={25} color={focused ? "#4390f7" : "#000"} />
  );
};

const homeScreenOptions = (headerShown, name,nameicon) => {
  return {
    headerShown,
    tabBarLabel: name,
    tabBarIcon: () => <TabIcon name={nameicon} />,
  };
};

const HeaderLeftIcon = () => {
  const navigation =useNavigation();
  return (
    <Pressable
    style = {{marginLeft:10,}}
    onPress = { () => navigation.openDrawer()}
    >
      <MaterialCommunityIcons
        name = "menu"
        size = {25}
        color = "#000"
      />
    </Pressable>
  );
}
const HomeDrawer = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home} 
      options={{
        ...homeScreenOptions(true, "Home","home") ,
        headerLeft:HeaderLeftIcon,
        }} />
      <Bottom.Screen name="Categories" component={Categories} options={homeScreenOptions(true, "Categories" ,"grid")} />
      <Bottom.Screen name="Favourites" component={Favourites}
        options={{
            ...homeScreenOptions(true,"Favourites" ,"heart"),
            tabBarBadge: 3,
            tabBarBadgeColor: "red",}}/>
      <Bottom.Screen name="Profile" component={Profile} options={homeScreenOptions(true,"Profile", "person")} />
    </Bottom.Navigator>
  );
};

const HomeDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>
        Home Detail
      </Text>
    </View>
  );
};
const Home = () => {
  const navigation =useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>
        Home Screen
      </Text>
      <Button
        title="Go to Detail"
        onPress= {() => navigation.navigate("HomeDetail")}
      />
    </View>
  );
};
const NotificationsDrawer = () => {
  const navigation =useNavigation();
  return (
       <View style={styles.container}>
          <Text style={styles.screenText}>
            Notifications Screen
          </Text>
       <Button
         title="Go to Detail"
         onPress= {() => navigation.navigate("NotificationsDetailsScreen")}
       />
     </View>
  )
}
const NotificationsDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>
        Notifications Detail
      </Text>
    </View>
  );
};
const NotificationsStack = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="NotificationsScreen" component={NotificationsDrawer} options={{ headerLeft: HeaderLeftIcon,}}/>
        <Stack.Screen name="NotificationsDetailsScreen" component={NotificationsDetail}/>
    </Stack.Navigator>
  )
}
const HelpsDrawer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>
      Helps Drawer
      </Text>
    </View>
  )
}

const HomeStack = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  )
}
const  AppDrawer =() => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component= {HomeStack} options={{ headerShown: false }} />
        <Drawer.Screen name="Notifications" component= {NotificationsStack} options={{ headerShown: false }}  />
        <Drawer.Screen name="HelpsDrawer" component= {HelpsDrawer} />
      </Drawer.Navigator>
    // <Lab1 />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    color: '#000',
  },
});
export default AppDrawer;