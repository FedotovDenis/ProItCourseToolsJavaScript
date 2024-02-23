import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.send('Вітаємо у світі Node.js і Express!');
});

app.listen(5500, () => {
  console.log('Сервер запущено на порту 5500');
});
