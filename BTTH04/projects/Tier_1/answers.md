## Bài 1.1 — Cơ chế hiển thị lần đầu (Render)

### Giải thích
Khi một component React (bản chất là một hàm JavaScript) được gọi, hệ thống sẽ:
1. Thực thi hàm component đó để tính toán logic.
2. Thu thập kết quả trả về dưới dạng mã giao diện (JSX).
3. Tiến hành đồng bộ và hiển thị kết quả đó lên trên màn hình trình duyệt của người dùng.

### Mã nguồn mẫu — `LifecycleDemo.jsx`
```jsx
function LifecycleDemo() {
    console.log("1️⃣ Component của Thúy Ngân được gọi!");
    
    return (
        <div style={{ padding: "20px", border: "2px solid #3498db", borderRadius: "8px" }}>
            <h2>Ví dụ về Vòng đời — Vi Thị Thúy Ngân</h2>
            <p>Hãy nhấn F12 và chọn tab Console để quan sát lịch sử log</p>
            <p>Hàm này chỉ được kích hoạt duy nhất MỘT lần khi ứng dụng vừa tải xong</p>
        </div>
    );
}

export default LifecycleDemo;

# Bài 1.2 — Biến thường vs useState

* Chạy BadCounter → nhấn nút → thấy gì?
    - Ban đầu màn hình hiện: Bộ đếm: 0
    - Mỗi lần nhấn nút:
    ```
    Console:
    Count: 1
    Count: 2
    Count: 3
    ...
    ```
    - Nhưng trên giao diện vẫn luôn là: Bộ đếm: 0
    - Lý do: React không biết biến `count` đã thay đổi nên không render lại component.

* Chạy GoodCounter → nhấn nút → thấy gì?
    - Ban đầu màn hình hiện: Bộ đếm: 0
    - Mỗi lần nhấn nút:
    ```
    Console:
    Count: 1
    Count: 2
    Count: 3
    ...
    ```
    - Lý do: `setCount()` báo cho React biết state đã thay đổi, React sẽ render lại component và cập nhật giao diện.

* Mở Console → thấy log "render" mấy lần?
    - 1 lần khi component render lần đầu, sau đó mỗi lần bấm nút thêm 1 lần render nữa. Ví dụ bấm 3 lần thì tổng cộng 4 lần render.

# Bài 1.3 — Luồng hoạt động React
## Sơ đồ luồng

```
┌─────────────────────────────────────────────────────────┐
│                    REACT FLOW                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. Component function được gọi                         │
│              ↓                                          │
│  2. Return JSX (giao diện)                              │
│              ↓                                          │
│  3. React hiển thị lên màn hình                         │
│              ↓                                          │
│  4. Người dùng tương tác (click, nhập...)               │
│              ↓                                          │
│  5. Gọi setState(newValue)                              │
│              ↓                                          │
│  6. React gọi lại component function (RE-RENDER)        │
│              ↓                                          │
│  7. Return JSX mới                                      │
│              ↓                                          │
│  8. React cập nhật màn hình (chỉ phần thay đổi)         │
│              ↓                                          │
│  Quay lại bước 4                                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```