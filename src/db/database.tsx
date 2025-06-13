import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'MyAppDB.db';
const database_version = '1.0';
const database_displayname = 'My SQLite Database';
const database_size = 200000;

let dbInstance: SQLite.SQLiteDatabase | null = null;

export const getDBConnection = async (): Promise<SQLite.SQLiteDatabase> => {
  if (dbInstance) return dbInstance;
  dbInstance = await SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size
  );
  return dbInstance;
};
