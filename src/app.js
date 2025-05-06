const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const public_path = path.join(__dirname, '../public')

app.use(express.static(public_path));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})