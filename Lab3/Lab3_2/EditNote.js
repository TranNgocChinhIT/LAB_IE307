import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';  // Import Ionicons
import { SettingsContext } from './SettingsContext';
import { db } from './db';

const EditNote = () => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const { darkMode, fontSize } = useContext(SettingsContext);
  const navigation = useNavigation();
  const route = useRoute();
  const { note } = route.params;

  useEffect(() => {
    setTitle(note.title);
    setContext(note.context);
    console.log('Note information fetched!');
  }, [note]);

  const updateNote = () => {
    db.transaction((tx) => {
      if (title.trim() === '') {
        return;
      }

      tx.executeSql(
        'UPDATE notes SET title = ?, context = ? WHERE id = ?',
        [title, context, note.id],
        () => {
          navigation.navigate('NOTE APP');
        }
      );
    });
  };
  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <TextInput
        multiline
        placeholder="Enter your title"
        placeholderTextColor={darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={[styles.textInput, { color: darkMode ? 'white' : 'black' }]}
      />
      <TextInput
        multiline
        placeholder="Enter your note"
        placeholderTextColor={darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
        value={context}
        onChangeText={(text) => setContext(text)}
        style={[styles.textInput, { color: darkMode ? 'white' : 'black' }]}
      />
      <View style={styles.iconButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle" size={fontSize + 20} color={darkMode ? '#2196f3' : '#A0522D'} />
        </TouchableOpacity>
      <TouchableOpacity onPress={updateNote}>
          <Ionicons name="checkmark-circle" size={fontSize + 20} color={darkMode ? '#2196f3' : '#A0522D'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '80%',
    marginBottom: 20,
    padding: 10,
    color: '#000',
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
});

export default EditNote;
