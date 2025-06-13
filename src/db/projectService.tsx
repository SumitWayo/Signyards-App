import { getDBConnection } from './database';

export type Project = {
  id: number;
  project_name: string;
  image_url?: string;
  user_id: number;
  created_at?: string;
  updated_at?: string;
};

export const createProjectTable = async (): Promise<void> => {
  const db = await getDBConnection();
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS app_project (
      id INTEGER PRIMARY KEY NOT NULL,
      project_name TEXT NOT NULL,
      image_url TEXT,
      user_id INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

export const insertProject = async (project: Project): Promise<void> => {
  const db = await getDBConnection();
  await createProjectTable(); // ✅ Ensure table exists
  await db.executeSql(
    `INSERT INTO app_project (id, project_name, image_url, user_id) VALUES (?, ?, ?, ?);`,
    [project.id, project.project_name, project.image_url || '', project.user_id]
  );
};

export const getProjectsByUserId = async (userId: number): Promise<Project[]> => {
  const db = await getDBConnection();
  await createProjectTable(); // ✅ Ensure table exists
  const [results] = await db.executeSql(
    `SELECT * FROM app_project WHERE user_id = ? ORDER BY created_at DESC;`,
    [userId]
  );

  const projects: Project[] = [];
  const rows = results.rows;

  for (let i = 0; i < rows.length; i++) {
    const item = rows.item(i);
    projects.push({
      id: item.id,
      project_name: item.project_name,
      image_url: item.image_url,
      user_id: item.user_id,
      created_at: item.created_at,
      updated_at: item.updated_at,
    });
  }

  return projects;
};

export const deleteProjectById = async (id: number): Promise<void> => {
  const db = await getDBConnection();
  await createProjectTable(); // ✅ Ensure table exists
  await db.executeSql(`DELETE FROM app_project WHERE id = ?;`, [id]);
};

export const updateProject = async (project: Project): Promise<void> => {
  const db = await getDBConnection();
  await createProjectTable(); // ✅ Ensure table exists
  await db.executeSql(
    `UPDATE app_project 
     SET project_name = ?, image_url = ?, user_id = ?, updated_at = CURRENT_TIMESTAMP 
     WHERE id = ?;`,
    [project.project_name, project.image_url || '', project.user_id, project.id]
  );
};
export const logAllProjects = async (): Promise<void> => {
  const db = await getDBConnection();
  await createProjectTable(); // ensure the table exists

  const [results] = await db.executeSql(`SELECT * FROM app_project ORDER BY created_at DESC;`);

  const rows = results.rows;
  console.log(`Total projects found: ${rows.length}`);

  for (let i = 0; i < rows.length; i++) {
    console.log(`Project ${i + 1}:`, rows.item(i));
  }
};
