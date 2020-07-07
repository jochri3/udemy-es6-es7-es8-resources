const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

//1 er facon de faire
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = User.findById(id);
});

app.get('/api/users/:id', ({ params: { id } }, res) => {
  const user = User.findById(id);
});

//1er facons
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const user = User.findByIdAndUpate(id, body);
});

//1er facons
app.put('/api/users/:id', ({ body, params: { id } }, res) => {
  // const { body, params:{id} } = req;
  // const { id }=params;
  const user = User.findByIdAndUpate(id, body);
});

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 3000');
});
