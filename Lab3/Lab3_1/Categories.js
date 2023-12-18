import {View, Text , StyleSheet} from 'react-native'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Categories1 = () => {
    return (
        <View style= {styles.container} >
            <Text style={styles.screenText}>
                Categories1
            </Text>

    </View>
    );
};
const Categories2 = () => {
    return (
        <View style= {styles.container} >
            <Text style={styles.screenText}>
                Categories2
            </Text>

    </View>
    );
};
const Categories3 = () => {
    return (
        <View style= {styles.container} >
            <Text style={styles.screenText}>
                Categories3
            </Text>

    </View>
    );
};
const Categories = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="CATEGORIES1" component={Categories1}/>
            <Tab.Screen name="CATEGORIES2" component={Categories2}/>
            <Tab.Screen name="CATEGORIES3" component={Categories3}/>
        </Tab.Navigator>
    );
};
const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    screenText: {
        color:'#000',
    },
})

export default Categories;
