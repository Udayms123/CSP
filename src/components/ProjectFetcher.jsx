import { useEffect, useState } from "react";

const ProjectFetcher = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // IMPORTANT: Your backend at http://localhost:8080
    // must allow CORS requests from http://localhost:5173 (your React app)
    fetch("http://localhost:8080/api/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error fetching projects: {error}</div>;

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> — Customer: {project.customer} — Status: {project.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFetcher;
