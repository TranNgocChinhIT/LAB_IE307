import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import Categories from "./Categories";
import Favourites from "./Favourites";
import Home from "./Home";
import IonIcon from "react-native-vector-icons/Ionicons";

const Bottom = createBottomTabNavigator();

const TabIcon = ({ name, focused }) => {
  return (
    <IonIcon name={name} size={25} color={focused ? "#4390f7" : "#000"} />
  );
};

const homeScreenOptions = (headerShown, name) => {
  return {
    headerShown,
    tabBarLabel: name,
    tabBarIcon: () => <TabIcon name={name} />,
  };
};

const MainBottom = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home} options={homeScreenOptions(false, "home")} />
      <Bottom.Screen name="Categories" component={Categories} options={homeScreenOptions(false, "grid")} />
      <Bottom.Screen name="Favourites" component={Favourites}
        options={{
            ...homeScreenOptions(false, "heart"),
            tabBarBadge: 3,
            tabBarBadgeColor: "red",}}/>
      <Bottom.Screen name="Profile" component={Profile} options={homeScreenOptions(false, "person")} />
    </Bottom.Navigator>
  );
};

export default MainBottom;
