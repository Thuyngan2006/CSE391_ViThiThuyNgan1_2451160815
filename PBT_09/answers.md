# PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)

## Câu A1 (5đ) — DOM Tree

### 1. Sơ đồ DOM Tree

```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```

---

### 2. Query Selector

#### Chọn thẻ `<h1>`

```javascript
document.querySelector("h1");
```

#### Chọn input trong form

```javascript
document.querySelector("#todoForm input");
```

Hoặc:

```javascript
document.querySelector("#todoInput");
```

#### Chọn tất cả `.todo-item`

```javascript
document.querySelectorAll(".todo-item");
```

#### Chọn link đang active

```javascript
document.querySelector("a.active");
```

Hoặc:

```javascript
document.querySelector("nav .active");
```

#### Chọn `<li>` đầu tiên trong `#todoList`

```javascript
document.querySelector("#todoList li:first-child");
```

#### Chọn tất cả `<a>` bên trong `<nav>`

```javascript
document.querySelectorAll("nav a");
```

---

## Câu A2 (5đ) — innerHTML vs textContent

### 1. Sự khác nhau giữa innerHTML và textContent

| innerHTML                                                 | textContent                                       |
| --------------------------------------------------------- | ------------------------------------------------- |
| Đọc hoặc ghi nội dung HTML bên trong phần tử.             | Đọc hoặc ghi nội dung văn bản thuần túy.          |
| Trình duyệt sẽ phân tích các thẻ HTML.                    | Không phân tích HTML, chỉ hiển thị như văn bản.   |
| Có thể tạo thêm phần tử HTML mới.                         | Không tạo phần tử HTML.                           |
| Có nguy cơ gây lỗ hổng XSS nếu dữ liệu đến từ người dùng. | An toàn hơn vì không thực thi mã HTML/JavaScript. |

---

### 2. Ví dụ sử dụng innerHTML

```javascript
document.querySelector("#demo").innerHTML =
    "<strong>Hello World</strong>";
```

Kết quả hiển thị:

**Hello World**

Thẻ `<strong>` được trình duyệt hiểu là HTML và làm chữ in đậm.

---

### 3. Ví dụ sử dụng textContent

```javascript
document.querySelector("#demo").textContent =
    "<strong>Hello World</strong>";
```

Kết quả hiển thị:

```html
<strong>Hello World</strong>
```

Toàn bộ nội dung được xem là văn bản thông thường.

---

### 4. Khi nào dùng mỗi cái?

#### Dùng innerHTML khi:

* Cần chèn HTML động vào trang.
* Muốn tạo thêm thẻ HTML bằng JavaScript.

Ví dụ:

```javascript
list.innerHTML += "<li>New Task</li>";
```

---

#### Dùng textContent khi:

* Chỉ cần hiển thị văn bản.
* Dữ liệu đến từ người dùng hoặc API.
* Muốn tránh lỗi bảo mật XSS.

Ví dụ:

```javascript
message.textContent = userName;
```

---

## Câu hỏi bảo mật: XSS và innerHTML

### Tại sao innerHTML có thể gây lỗ hổng XSS?

XSS (Cross-Site Scripting) xảy ra khi dữ liệu do người dùng nhập được chèn trực tiếp vào trang web dưới dạng HTML.

Nếu dữ liệu chứa mã JavaScript độc hại, trình duyệt có thể thực thi mã đó.

Ví dụ:

```javascript
// User nhập:
<img src=x onerror="alert('Hacked!')">

const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;
```

Khi đoạn mã trên chạy:

```html
<div id="result">
    <img src="x" onerror="alert('Hacked!')">
</div>
```

Do ảnh không tồn tại nên sự kiện `onerror` được kích hoạt và hộp thoại:

```text
Hacked!
```

sẽ xuất hiện.

Đây là một ví dụ điển hình của lỗ hổng XSS.

---

### Cách sửa

Thay vì dùng `innerHTML`, sử dụng `textContent`:

```javascript
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;
```

Kết quả hiển thị:

```html
<img src=x onerror="alert('Hacked!')">
```

Trình duyệt chỉ xem đây là văn bản thông thường và không thực thi JavaScript.

---

### Kết luận

* `innerHTML`: dùng khi cần thao tác HTML.
* `textContent`: dùng khi hiển thị dữ liệu văn bản.
* Không nên gán dữ liệu người dùng trực tiếp vào `innerHTML`.
* Để tránh XSS, ưu tiên sử dụng `textContent` hoặc các thư viện sanitize dữ liệu trước khi hiển thị.

## Câu A3 (5đ) — Event Bubbling

### Đề bài

```javascript
document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    // e.stopPropagation();
});
```

```html
<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>
```

---

### 1. Khi click vào button

Sự kiện click xảy ra trên phần tử `button` trước, sau đó lan truyền (bubble) từ phần tử con lên phần tử cha.

Thứ tự thực thi:

1. `BUTTON`
2. `INNER`
3. `OUTER`

Output:

```text
BUTTON
INNER
OUTER
```

---

### 2. Giải thích Event Bubbling

Event Bubbling là cơ chế lan truyền sự kiện từ phần tử được click lên các phần tử cha của nó.

Trong ví dụ:

```text
button (#btn)
    ↑
div (#inner)
    ↑
div (#outer)
```

Khi click button:

```text
BUTTON → INNER → OUTER
```

---

### 3. Nếu bỏ comment `e.stopPropagation()`

```javascript
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});
```

`stopPropagation()` sẽ ngăn sự kiện tiếp tục lan truyền lên các phần tử cha.

Do đó:

* `BUTTON` vẫn được thực thi.
* `INNER` không chạy.
* `OUTER` không chạy.

Output:

```text
BUTTON
```

---

### 4. Kết luận

| Trường hợp                     | Output                   |
| ------------------------------ | ------------------------ |
| Không dùng `stopPropagation()` | `BUTTON → INNER → OUTER` |
| Có dùng `stopPropagation()`    | `BUTTON`                 |

Event Bubbling mặc định truyền sự kiện từ phần tử con lên phần tử cha. Phương thức `e.stopPropagation()` được dùng để chặn quá trình lan truyền đó.


