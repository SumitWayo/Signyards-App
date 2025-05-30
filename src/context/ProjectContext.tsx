import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

type ProjectType = {
  id: number;
  name: string;
  image: string;
  unreadMessages: number;
  time: string;
};

type ProjectContextType = {
  projects: ProjectType[];
  loading: boolean;
  refreshProjects: () => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const phone = await AsyncStorage.getItem('userPhone');
      if (!phone) {
        Alert.alert('Error', 'Phone number not found. Please login again.');
        return;
      }

      const response = await fetch('https://signyards.com/admin/appProject.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'getProjects', phone }),
      });

      const data = await response.json();

      if (response.ok && Array.isArray(data.projects)) {
        const mapped = data.projects.map((proj: any, index: number) => ({
          id: proj.id || index,
          name: proj.project_name || 'Unnamed Project',
          image: proj.image_url || 'https://via.placeholder.com/150',
          unreadMessages: proj.unread_count || 0,
          time: proj.last_update_time || '',
        }));
        setProjects(mapped);
      } else {
        Alert.alert('Error', data.message || 'Failed to load projects.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to fetch projects.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading, refreshProjects: fetchProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProjectContext must be used within a ProjectProvider');
  return context;
};
