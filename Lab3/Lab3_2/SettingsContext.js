import React, { createContext, useState, useEffect } from 'react';
import { db } from './db';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const updateDarkMode = (newDarkModeValue) => {
    setDarkMode(newDarkModeValue);
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM settings',
          [],
          (tx, results) => {
            if (results.rows.length > 0) {
              tx.executeSql(
                'UPDATE settings SET darkMode = ?',
                [newDarkModeValue ? 1 : 0],
                () => {
                  // Optional callback after the update
                }
              );
            } else {
              tx.executeSql(
                'INSERT INTO settings (darkMode) VALUES (?)',
                [newDarkModeValue ? 1 : 0],
                () => {
                  // Optional callback after the update
                }
              );
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateFontSize = (newFontSizeValue) => {
    setFontSize(newFontSizeValue);
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM settings',
          [],
          (tx, results) => {
            if (results.rows.length > 0) {
              tx.executeSql(
                'UPDATE settings SET fontSize = ?',
                [newFontSizeValue],
                () => {
                  // Optional callback after the update
                }
              );
            } else {
              tx.executeSql(
                'INSERT INTO settings (fontSize) VALUES (?)',
                [newFontSizeValue],
                () => {
                  // Optional callback after the update
                }
              );
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDataFromDatabase = () => {
      try {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM settings', [], (tx, results) => {
            if (results.rows.length > 0) {
              // Assuming results.rows.item(0) is the first row in the result
              const { darkMode, fontSize } = results.rows.item(0);
              setDarkMode(darkMode === 1);
              setFontSize(fontSize);
              return;
            } else {
              setDarkMode(false);
              setFontSize(16);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromDatabase(); 
  }, [darkMode,fontSize]);

  return (
    <SettingsContext.Provider
      value={{ darkMode, setDarkMode, fontSize, setFontSize,updateDarkMode,updateFontSize }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
