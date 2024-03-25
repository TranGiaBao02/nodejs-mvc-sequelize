const express = require('express');
const app = express();
const path = require('path');
const studentRoute = require('./routes/studentRoute');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sử dụng các tệp tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng các tuyến đường của sinh viên
app.use(studentRoute);

// Thiết lập view engine là EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Định tuyến đến trang index
app.get('/', (req, res) => {
  res.render('index');
});

// Lắng nghe cổng
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
