import { getDBConnection } from './database';


export const createAppUsersTable = async (): Promise<void> => {
  const db = await getDBConnection();
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS app_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT DEFAULT '',
      email TEXT DEFAULT '',
      role TEXT DEFAULT 'user',
      phone TEXT NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

export const insertUser = async (
  name: string,
  email: string,
  phone: string,
  role: string = 'user'
): Promise<void> => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO app_users (name, email, phone, role) VALUES (?, ?, ?, ?);`,
    [name, email, phone, role]
  );
};

export const updateLocalUser = async (
  phone: string,
  name: string,
  email: string,
  role: string
): Promise<void> => {
  const db = await getDBConnection();
  await db.executeSql(
    `UPDATE app_users SET name = ?, email = ?, role = ? WHERE phone = ?;`,
    [name, email, role, phone]
  );
};

export const getUserByPhone = async (phone: string) => {
  const db = await getDBConnection();
  const [results] = await db.executeSql(`SELECT * FROM app_users WHERE phone = ?;`, [phone]);
  return results.rows.length > 0 ? results.rows.item(0) : null;
};
