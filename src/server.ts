import app from './app';
import database from './database';

database.sync();

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);