const express = require('express');
const app = express();
const axios = require('axios').default;
const { response } = require('express');
const bodyParser = require('body-parser');

const port = 3001;

//parser request to body-parser
app.use(bodyParser.urlencoded({extended: true}));

//router
const homeRouter = require('./routes/index').homeRouter;

app.use('/product', homeRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});