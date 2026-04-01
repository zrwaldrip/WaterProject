import { useState } from "react";
import type { Project } from "../types/Project";
import { updateProject } from "../api/projectAPIs";

interface EditProjectFormProps {
  project: Project;
  onSuccess: () => void;
  onCancel: () => void;
}

const EditProjectForm = ({
  project,
  onSuccess,
  onCancel,
}: EditProjectFormProps) => {
  const [formData, setFormData] = useState<Project>({ ...project });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await updateProject(formData.projectId, formData);
    onSuccess();
  };

  return (
    <form>
      <h2>Add a New Project</h2>
      <label>
        ProjectName:{" "}
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
        />
      </label>
      <label>
        Project Type:{" "}
        <input
          type="text"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
        />
      </label>
      <label>
        Regional Program:{" "}
        <input
          type="text"
          name="projectRegionalProgram"
          value={formData.projectRegionalProgram}
          onChange={handleChange}
        />
      </label>
      <label>
        Impact:{" "}
        <input
          type="number"
          name="projectImpact"
          value={formData.projectImpact}
          onChange={handleChange}
        />
      </label>
      <label>
        Project Phase:{" "}
        <input
          type="text"
          name="projectPhase"
          value={formData.projectPhase}
          onChange={handleChange}
        />
      </label>
      <label>
        Project Functionality Status{" "}
        <input
          type="text"
          name="projectFunctionalityStatus"
          value={formData.projectFunctionalityStatus}
          onChange={handleChange}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Update Project
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditProjectForm;
