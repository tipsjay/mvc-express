const express = require('express');
const app = express();
const user = require('./controllers/user');

app.use(require('cors')())
app.use(express.json());
app.use('/users', user)


app.listen(3000, () => {
    console.log('server listening at port 3000.')
})