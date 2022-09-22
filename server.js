const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');


// console.log(process.env);

let DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

DB='mongodb+srv://AhmedGG:AhmedGG@cluster0.kxbfffq.mongodb.net/natours?retryWrites=true';

console.log(DB);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('DB connection successful!');
  });


const port = process.env.PORT || 2517;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
