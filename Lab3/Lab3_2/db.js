import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase(
    
       'notes'
    ,
    () => {
        console.log('DB open');
    },
    ( error) => {
        console.log(error);
    }
);
