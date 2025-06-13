
export const addOrUpdateProject = async ({
  edit,
  projectId,
  projectName,
  photoUri,
  phone,
}: {
  edit: boolean;
  projectId?: string | number;
  projectName: string;
  photoUri?: string | null;
  phone: string;
}): Promise<{ status: string; message?: string }> => {
  const payload = edit
    ? {
        type: 'updateProject',
        project_id: projectId?.toString(),
        project_name: projectName,
        image_url: photoUri || '',
      }
    : {
        type: 'addProject',
        phone,
        project_name: projectName,
        image_url: photoUri || '',
      };

  const response = await fetch('https://signyards.com/admin/appProject.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to save project');
  }

  return { status: 'success', message: data.message };
};
