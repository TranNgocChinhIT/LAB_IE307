import {View, Text , StyleSheet} from 'react-native'
import React from 'react';

const Categories = () => {
    return (
        <View style= {styles.container} >
        <Text style={styles.screenText}>
        Categories Screen
        </Text>

    </View>
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
