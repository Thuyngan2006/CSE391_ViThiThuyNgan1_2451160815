# PHẦN A - KIỂM TRA ĐỌC HIỂU
## Câu A1 - HTTP & Browser
### 1. Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter thứ tự các bước xảy ra là:
- Request xuất phát từ laptop → đi qua router WiFi
- Qua nhà mạng VNPT → chạy xuyên cáp quang dưới đáy Thái Bình Dương
- Đến data center của trụ sở Shopee 
- Server xử lý request 
- Response chạy ngược lại: cáp quang → VNPT → router → laptop
- Chrome nhận file HTML, CSS, JS → render ra giao diện → ta thấy trang Shopee
 (tuan_1_html5\1_introduction_html_universe.md + Phần: 🎬 Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương)
### 2. Trong DevTools của Chrome, tab Network cho thấy:
requests/responses (tuan_1_html5\01_introduction_html_universe.md + phần 4.3)
## Câu A2 - Semantic HTML
- Dùng `<div>` thay cho thẻ semantic
    + `<div class="header">` nên dùng `<header>`
    + `<div class="main">` nên dùng `<main>`
    +`<div class="footer">` nên dùng `<footer>`
- Menu không dùng `<nav>` `<div class = "menu">` sai
- Tiêu đề sản phẩm không dùng heading 
- Ảnh không có alt google không biết là ảnh gì
- Sửa lại lỗi 
  ```html
  <header>
    <div class="logo">ShopTLU</div>
    <nav>
      <ul>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/products">Sản phẩm</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article class="product">
      <h1>iPhone 16 Pro</h1>
      <p class="price">25.990.000đ</p>
      <img src="iphone.jpg" alt="iPhone 16 Pro" />
    </article>
  </main>

  <footer>© 2026 ShopTLU</footer>
  ```
(tuan_1_html5\04_visible_part_html.md + Bản đồ sementic elements)

## Câu A3 
```
┌─────────────┐
│   Hộp 1     │  ← div: chiếm cả hàng
└─────────────┘
Text A Text B     ← span: nằm cùng hàng nhau
┌─────────────┐
│   Hộp 2     │  ← div: xuống hàng mới
└─────────────┘
Text C **Text D**  ← span + strong: cùng hàng, Text D in đậm
┌─────────────┐
│   Hộp 3     │  ← div: xuống hàng mới
└─────────────┘
```
Nguồn tham khảo: (tuan_1_html5/02_basic_structure_html.md + phần: Các thẻ cơ bản trong <body>)

## Câu A4
Sự khác nhau giữa `<thead>`, `<tbody>`, `<tfoot>` là:

`<thead>`: tiêu đề cột,nằm ở đầu bảng

`<tbody>`: dữ liệu chính,nằm ở giữa bảng

`<tfoot>`: tổng kết,nằm ở phần cuối bản dù có xếp không đúng thứ tự 3 thẻ trên thì dữ liệu nó vẫn sẽ hiển thị theo thứ tự là `<thead>` -> `<tbody>` -> `<tfoot>`

(tham chiếu tuan_1_html5/05_tables_hyperlinks.md + phần: Table bảng dữ liệu)

Không nên dùng table cho việc làm layout là vì:
- Sai semantic
- Code phức tạp, khó bảo trì
- Layout bằng table phải lồng `<tr>`, `<td>` chằng chịt, rất khó đọc và 

(tuan_1_html5/05_tables_hyperlinks.md + phần: Table bảng dữ liệu)

# Phần B - Thực hành code 
## Câu B3

  Lỗi 1: Dòng 1 — `<!DOCTYPE>` thiếu khai báo html — Sửa thành `<!DOCTYPE html>`

  Lỗi 2: Dòng 2 — `<html>` thiếu thuộc tính lang — Sửa thành `<html lang="vi">`

  Lỗi 3: Dòng 4 — `<title>`Trang web không có thẻ đóng — Sửa thành `<title>Trang web</title>`

  Lỗi 4: Dòng 5 — `<meta charset="utf8">` sai giá trị charset — Sửa thành `<meta charset="UTF-8">`

  Lỗi 5: Dòng 8 — `<h1>Welcome to ShopTLU<h1>` thẻ đóng thiếu dấu / — Sửa thành `<h1>Welcome to ShopTLU</h1>`

  Lỗi 6: Dòng 11 — `<a href="home">Trang chủ<a>` thẻ đóng thiếu dấu / và href không dùng # — Sửa thành `<a href="#home">Trang chủ</a>`

  Lỗi 7: Dòng 19 — `<img src=iphone.jpg>` src không có dấu nháy và thiếu thuộc tính alt — Sửa thành `<img src="iphone.jpg" alt="iPhone 16 Pro">`

  Lỗi 8: Dòng 21 — `<p>Giá: <b>25.990.000đ</p></b>` thẻ đóng bị lồng sai thứ tự — Sửa thành `<p>Giá: <b>25.990.000đ</b></p>`

  Lỗi 9: Dòng 26 — Hàng đầu tiên của bảng dùng `<td>` thay vì `<th>`, và bảng thiếu `<thead>/<tbody>` — Sửa bằng cách thêm `<thead><tbody>` và đổi `<td>` thành `<th>` cho hàng tiêu đề

  Lỗi 10: Dòng 40 — Dùng `<main>` lần 2 cho sidebar — Một trang chỉ được có 1 thẻ `<main>`, sidebar phải dùng `<aside>` — Sửa thành `<aside>` nằm trong `<main>`

  Lỗi 11: Dòng 17 — `<h1>` nằm ngoài `<header>` và đứng trước `<header>` — Semantic sai, `<h1>` nên nằm trong `<header>`

  Lỗi 12: Dòng 45 — `<p>`Copyright 2026 không có thẻ đóng `</p>` — Sửa thành `<p>Copyright 2026</p>`

  Lỗi 13: Dòng 20 — `<h3>Sản phẩm hot</h3>` nhảy từ `<h1>` xuống thẳng `<h3>`, bỏ qua `<h2>` — Sai cấu trúc heading, sửa thành `<h2>`


## Câu B4:
Trong trang web thegioididong.com:

### 1. 3 thẻ semantic HTML5 mà trang đó sử dụng:
- thẻ header
- thẻ section
- thẻ footer
### 2. thẻ table hiển thị nội dung chi tiết của loại điện thoại
### 3. thẻ form 
Form có action là <action="/tim-kiem">. Khi submit, dữ liệu sẽ được gửi đến đường dẫn /tim-kiem
Không có method nên sẽ mặc định là GET
Input có 2 loại là text để nhập và button để click