const express = require('express');
const app = express();
const path = require('path');
const studentRoute = require('./routes/route');

app.use(express.static(path.join(__dirname, 'public')));
app.use(studentRoute);

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});