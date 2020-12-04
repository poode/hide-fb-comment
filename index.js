const { app } = require('./server');

app.listen(app.locals.port, () => console.log(`Server is up and running on Port ${app.locals.port}`));