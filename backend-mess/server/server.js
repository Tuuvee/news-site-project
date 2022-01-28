const express = require("express");
const apiRouter = require('./routes');

const app = express();

app.use(express.json());
app.use('/api/articles',apiRouter);

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});