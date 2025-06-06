// // database.ts
// import SQLite from 'react-native-sqlite-storage';

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// const database_name = 'MyAppDB.db';
// const database_version = '1.0';
// const database_displayname = 'My SQLite Database';
// const database_size = 200000;

// let dbInstance: SQLite.SQLiteDatabase | null = null;

// export const getDBConnection = async () => {
//   if (dbInstance) return dbInstance;
//   dbInstance = await SQLite.openDatabase(
//     database_name,
//     database_version,
//     database_displayname,
//     database_size
//   );
//   return dbInstance;
// };

// export const createTables = async () => {
//   const db = await getDBConnection();
//   // Create messages table if not exists
//   await db.executeSql(
//     `CREATE TABLE IF NOT EXISTS messages (
//       id TEXT PRIMARY KEY NOT NULL,
//       projectId TEXT NOT NULL,
//       text TEXT NOT NULL,
//       isUser INTEGER NOT NULL,
//       timestamp TEXT NOT NULL
//     );`
//   );
// };

// export const insertMessage = async (
//   id: string,
//   projectId: string,
//   text: string,
//   isUser: boolean,
//   timestamp: string
// ) => {
//   const db = await getDBConnection();
//   await db.executeSql(
//     INSERT INTO messages (id, projectId, text, isUser, timestamp) VALUES (?, ?, ?, ?, ?);,
//     [id, projectId, text, isUser ? 1 : 0, timestamp]
//   );
// };

// export type Message = {
//   id: string;
//   projectId: string;
//   text: string;
//   isUser: boolean;
//   timestamp: string;
// };

// export const getMessagesByProjectId = async (projectId: string): Promise<Message[]> => {
//   const db = await getDBConnection();
//   const [results] = await db.executeSql(
//     SELECT * FROM messages WHERE projectId = ? ORDER BY timestamp ASC;,
//     [projectId]
//   );

//   const rows = results.rows;
//   const messages: Message[] = [];
//   for (let i = 0; i < rows.length; i++) {
//     const item = rows.item(i);
//     messages.push({
//       id: item.id,
//       projectId: item.projectId,
//       text: item.text,
//       isUser: !!item.isUser,
//       timestamp: item.timestamp,
//     });
//   }
//   return messages;
// };