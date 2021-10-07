const express = require('express');
const http = require('http');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("NodeJS", "postgres", "admin", {
  dialect: "postgres"
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('URL = ', req.url);
  console.log('Original_URL = ', req.originalUrl);
  console.log('METHOD = ', req.method);
  console.log('HOST = ', req.headers.host);
  console.log('IsSecure = ', req.secure);
  console.log('BODY', req.body);
  console.log('QUERY', req.query);

  next();
});
a = 50;
b = 10;
app.all('/test', (req, res) => {
  sum = a + b;
  res.status(200).json({message: "СУКАБЛЯТЬ!"});

})
http.createServer(app).listen(3000, () => {
  console.log('Server is working on port 3000');
})

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();