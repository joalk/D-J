const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.use(express.json())

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../index.html'))
);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});