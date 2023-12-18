import React,{useContext} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NoteListItem = ({ note, onDelete, darkMode, fontSize, onPress }) => {

  return (
    <Pressable
      style={({ pressed }) => [
        styles.noteItem,
        darkMode && styles.darkContainer,
        pressed && styles.pressedStyle, // Add a pressed style if needed
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.noteText, styles.titleText, darkMode && styles.darkColor, { fontSize: fontSize }]}>
          {note.title}
        </Text>
    
        <Text style={[styles.noteText, darkMode && styles.darkColor, { fontSize: fontSize }]}>
          {note.context}
        </Text>
      </View>

      {/* Delete Icon */}
      <Pressable
        style={[styles.deleteButton, darkMode && styles.darkContainer]}
        onPress={() => onDelete(note.id)}
      >
        <Ionicons name="trash-bin" size={fontSize + 20} color={darkMode ? '#2196f3' : '#A0522D'} />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },
  pressedStyle: {
    opacity: 0.7, // Add a bit of opacity when pressed
  },
  noteText: {
    fontSize: 16,
    color: '#000',
  },
  titleText: {
    fontWeight: 'bold',
  },
  deleteButton: {
    margin: 12,
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  darkColor: {
    color: '#fff',
  },
});

export default NoteListItem;