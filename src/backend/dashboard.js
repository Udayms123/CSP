const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const filePath = './projects.json';

// Helper to read JSON
const readProjects = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Helper to write JSON
const writeProjects = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET all projects
app.get('/api/projects', (req, res) => {
  const projects = readProjects();
  res.json(projects);
});

// POST new project
app.post('/api/projects', (req, res) => {
  const projects = readProjects();
  const newProject = { ...req.body, id: Date.now() };
  projects.push(newProject);
  writeProjects(projects);
  res.status(201).json(newProject);
});

// PUT update status
app.put('/api/projects/:id', (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;
  let projects = readProjects();
  projects = projects.map(p => p.id === id ? { ...p, status } : p);
  writeProjects(projects);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
