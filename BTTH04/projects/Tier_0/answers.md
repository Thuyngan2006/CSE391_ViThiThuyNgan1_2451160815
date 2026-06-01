# Giải câu hỏi lý thuyết & Thực hành - Tier 0

## I. Câu hỏi lý thuyết (Bài 0.1)

### Câu 1: File `.jsx` khác gì file `.js`?
* **File `.js` (JavaScript):** Chỉ chứa mã nguồn JavaScript thuần túy theo tiêu chuẩn. Nếu bạn viết các thẻ giống HTML trực tiếp vào trong file `.js`, trình biên dịch sẽ báo lỗi cú pháp (Syntax Error).
* **File `.jsx` (JavaScript XML):** Là một phần mở rộng cú pháp của JavaScript dành riêng cho React[cite: 1]. Nhờ đó, bạn có thể viết trực tiếp các thẻ giao diện giống HTML trộn lẫn với mã logic JavaScript một cách hợp lệ[cite: 1], giúp giao diện trực quan và dễ quản lý hơn.

### Câu 2: Tại sao phải `export default App;`?
* Trong cơ chế Module của JavaScript, mỗi file được coi là một hộp kín độc lập.
* Việc sử dụng `export default App;` nhằm mục đích **xuất (chia sẻ) component chính** của file này ra bên ngoài[cite: 1]. Nhờ đó, các file hệ thống khác (như file khởi tạo `main.jsx`) mới có thể `import` (nhập) và sử dụng lại component `App` để hiển thị giao diện lên trình duyệt[cite: 1].

### Câu 3: Thử xóa `export default` ➔ chuyện gì xảy ra?
* Ứng dụng React sẽ **lập tức bị lỗi biên dịch** (Compile Error) và giao diện trên trình duyệt sẽ bị trắng xóa.
* **Lý do:** Khi file `main.jsx` cố gắng chạy lệnh `import App from './App'`, hệ thống không tìm thấy bất kỳ thành phần mặc định nào được xuất ra từ file `App.jsx`[cite: 1], dẫn đến việc không có dữ liệu để render lên màn hình.

---

## II. Câu hỏi thực hành cú pháp JSX (Bài 0.2)

### Câu 4: Tại sao trong JSX không được dùng thuộc tính `class` mà phải dùng `className`?
* **Trả lời:** Vì bản chất JSX sẽ được biên dịch về JavaScript, mà từ khóa `class` trong JavaScript đã được sử dụng để khai báo "Lớp" (Class định hướng đối tượng). Để tránh bị trùng lặp và xung đột từ khóa này, React quy định đổi thuộc tính `class` của HTML thành `className` trong JSX[cite: 1].

### Câu 5: Tại sao thuộc tính `for` trong thẻ `<label>` của HTML phải đổi thành `htmlFor`?
* **Trả lời:** Tương tự như `class`, từ khóa `for` trong JavaScript đã được dùng làm vòng lặp (`for loop`). Do đó, khi viết thuộc tính liên kết giữa `<label>` và `<input>` trong JSX, chúng ta phải chuyển thành `htmlFor` để trình biên dịch JavaScript không hiểu lầm[cite: 1].

### Câu 6: Quy tắc đóng thẻ đối với các thẻ đơn (như `<img>`, `<input>`, `<br>`) trong JSX là gì?
* **Trả lời:** Trong HTML thuần, các thẻ đơn không cần thẻ đóng. Tuy nhiên, JSX tuân theo cú pháp nghiêm ngặt của XML, vì vậy **tất cả các thẻ bắt buộc phải được đóng**. Đối với thẻ đơn, ta phải sử dụng dấu gạch chéo ở cuối thẻ (gọi là self-closing tag), ví dụ: `<img />`, `<input />`, `<br />`[cite: 1].