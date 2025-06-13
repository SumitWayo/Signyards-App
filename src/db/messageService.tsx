import { getDBConnection } from './database';

export type Message = {
  id: string;
  projectId: string;
  text: string;
  isUser: boolean;
  timestamp: string;
};

export const createMessagesTable = async (): Promise<void> => {
  const db = await getDBConnection();
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      projectId TEXT,
      text TEXT,
      isUser INTEGER,
      timestamp TEXT
    );
  `);
};

export const insertMessage = async (
  id: string,
  projectId: string,
  text: string,
  isUser: boolean,
  timestamp: string
): Promise<void> => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO messages (id, projectId, text, isUser, timestamp) VALUES (?, ?, ?, ?, ?);`,
    [id, projectId, text, isUser ? 1 : 0, timestamp]
  );
};

export const getMessagesByProjectId = async (projectId: string): Promise<Message[]> => {
  const db = await getDBConnection();
  const [results] = await db.executeSql(
    `SELECT * FROM messages WHERE projectId = ? ORDER BY timestamp ASC;`,
    [projectId]
  );

  const messages: Message[] = [];
  const rows = results.rows;

  for (let i = 0; i < rows.length; i++) {
    const item = rows.item(i);
    messages.push({
      id: item.id,
      projectId: item.projectId,
      text: item.text,
      isUser: item.isUser === 1,
      timestamp: item.timestamp,
    });
  }

  return messages;
};
