const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Sử dụng PORT từ biến môi trường

// Cấu hình phục vụ tệp tĩnh
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static('views'));

// Đường dẫn đến trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
