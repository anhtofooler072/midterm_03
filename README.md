## Bài làm của Tô Quang Anh

### Vai trò của các file

- `jobinfo.js`: chứa thông tin cũng như logic để thêm sửa xóa thông tin về công việc
- `userinfo.js`: chứa thông tin cá nhân của người dùng (không bao gồm thông tin đăng nhập)
- `sideinfo.js`: chứa thông tin thêm như sở thích và mục tiêu cá nhân
- `logininfo.js`: chứa thông tin về đăng nhập

### Một số tên file đặc biệt

- _`rootroutes.js`_: chứa toàn bộ các route của ứng dụng
- _`goodstaker.js`_: chứa controller để giúp người dùng tìm kiếm thông tin của người khác (tên đúng là goodstalker nhưng lỡ viết sai chính tả r hehe)

### file .env

thêm vào file .env các thông tin sau:

- TOKEN_SECRET: chuỗi bí mật để mã hóa token
- MONGO_URI: đường dẫn đến database
- PORT: cổng mà server sẽ chạy

---

### GEMINI SUPPORTED

> Trong Branch này có đã có thêm chức năng trò chuyện với Gemini (không Liên quan tới Mongodb 🥲 và có thể trò chuyện tự do).

#### Cách sử dụng

Thêm vào file .env thông tin sau:

- GEMINI_API_KEY: api key của Gemini

---
