import React,{useContext,useCallback ,useEffect,useState}from 'react';
import { StyleSheet, FlatList,Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation,useIsFocused  } from '@react-navigation/native';
import IonIcon from "react-native-vector-icons/Ionicons";
import AddNote from './AddNote';
import EditNote from './EditNote';
import NoteListItem from './NoteListItem';
import { db } from './db';
import {SettingsContext} from './SettingsContext';

const Stack = createStackNavigator();
const Home = () => {
  const navigation = useNavigation(); 
  const { darkMode, fontSize } = useContext(SettingsContext);
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();

  const getData = useCallback(() => {
    try {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM notes', [], (tx, result) => {
          if (result.rows) {
            console.log('Query completed');
            const notesArray = [];
            const len = result.rows.length;

            if (len > 0) {
              for (let i = 0; i < len; i++) {
                const row = result.rows.item(i);
                notesArray.push(row);
              }
              setNotes(notesArray);
            } else {
              setNotes([]);
            }
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => { 
    if (isFocused) {
      getData();
      console.log('NoteList fetched!');
    }
  }, [isFocused, getData]);
  const deleteNote = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM notes WHERE id= ?',[id],() => {
        getData();
        }
      );
    });
  }
  return (
    <View  style={[styles.container, darkMode && styles.darkContainer]} >
      <View style={[styles.TextNoteApp ]}>
        <Text style={[styles.screenNoteApp ,darkMode && styles.darkColor,{fontSize:fontSize}]}>All notes</Text>
        <TouchableOpacity
          style={styles.brickButton}
          onPress={() => navigation.navigate('AddNote')}
        >
          <IonIcon name = "add-circle"  size={fontSize + 30} color={darkMode ? '#2196f3' : '#A0522D'}  />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        keyExtractor = {item =>item.id.toString()}
        renderItem ={({item}) => (
          <NoteListItem
            note = {item}
            onPress = { () =>navigation.navigate('EditNote',{note: item})}
            onDelete= {deleteNote}
            darkMode = {darkMode}
            fontSize = {fontSize}
          />
        )}
      />
    </View>
  );
};


const HomeStack = () => {
  const { darkMode, fontSize } = useContext(SettingsContext);

  const stackScreenOptions = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: darkMode ? '#000' : '#fff',
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NOTE APP"
        component={Home}
        options={{
          ...stackScreenOptions,
          headerTintColor: darkMode ? '#2196f3' : '#A0522D',
        }}
      />
      <Stack.Screen
        name="AddNote"
        component={AddNote}
        options={{
          ...stackScreenOptions,
          headerTintColor: darkMode ? '#fff' : '#A0522D',
        }}
      />
      <Stack.Screen
        name="EditNote"
        component={EditNote}
        options={{
          ...stackScreenOptions,
          headerTintColor: darkMode ? '#fff' : '#A0522D',
        }}
      />
    </Stack.Navigator>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  TextNoteApp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  screenText: {
    color: '#000',
    fontSize: 25,
  },
  screenNoteApp: {
    fontSize: 25,
    margin: 20,
  },
  brickButton: {
    margin: 12,
  },
  darkContainer: {
    backgroundColor: "#000",
  },
  darkBrickButton: {
    backgroundColor: '#2196f3', 
  },
  darkColor: {
    color: '#fff',
  },
});

export default HomeStack;
