const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Thiết lập thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Đường dẫn cho trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
