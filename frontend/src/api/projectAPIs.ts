import type { Project } from "../types/Project";

interface FetchProjectsResponse {
  projects: Project[];
  totalNumProjects: number;
}

const API_URL = "http://localhost:5067/api/Water";

export const fetchProjects = async (
  pageSize: number,
  pageNumber: number,
  selectedCategories: string[]
): Promise<FetchProjectsResponse> => {
  try {
    const categoryParams = selectedCategories
      .map((cat) => `projectTypes=${encodeURIComponent(cat)}`)
      .join("&");

    const response = await fetch(
      `${API_URL}/AllProjects?pageSize=${pageSize}&pageNum=${pageNumber}${selectedCategories.length ? `&${categoryParams}` : ""}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching projects: ", error);
    throw error;
  }
};

export const addProject = async (newProject: Project): Promise<Project> => {
  try {
    const response = await fetch(`${API_URL}/AddProject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });

    if (!response.ok) {
      throw new Error("Failed to add project");
    }

    return await response.json();
  } catch (err) {
    console.error("Error adding project", err);
    throw err;
  }
};

export const updateProject = async (projectId: number, updatedProject: Project): Promise<Project> => {
  try{
        const response = await fetch(`${API_URL}/UpdateProject/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    });

    return await response.json();
  } catch (err) {
    console.error("Error updating project: ", err);
    throw err;
  }
}

export const deleteProject = async (projectId: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/DeleteProject/${projectId}`, {
      method: "DELETE",
    }
    );

    if (!response.ok) {
      throw new Error("Failed to delete project")
    }
  } catch (err) {
    console.error("Error deleting project: ", err);
    throw err;
  }
}
