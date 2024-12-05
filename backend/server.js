const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let roles = [];

// User CRUD
app.get('/api/users', (req, res) => res.json(users));
app.post('/api/users', (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});
app.put('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id == req.params.id);
  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(users[userIndex]);
});
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).send();
});

// Role CRUD
app.get('/api/roles', (req, res) => res.json(roles));
app.post('/api/roles', (req, res) => {
  const role = { id: roles.length + 1, ...req.body };
  roles.push(role);
  res.status(201).json(role);
});
app.put('/api/roles/:id', (req, res) => {
  const roleIndex = roles.findIndex(r => r.id == req.params.id);
  roles[roleIndex] = { ...roles[roleIndex], ...req.body };
  res.json(roles[roleIndex]);
});
app.delete('/api/roles/:id', (req, res) => {
  roles = roles.filter(r => r.id != req.params.id);
  res.status(204).send();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
