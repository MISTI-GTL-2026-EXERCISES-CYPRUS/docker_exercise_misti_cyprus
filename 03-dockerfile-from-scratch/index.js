const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Congratulations!</h1><p>You have successfully containerized this Node.js application from scratch!</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
