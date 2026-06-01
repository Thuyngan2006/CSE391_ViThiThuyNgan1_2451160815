import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    // Xác định màu sắc chữ dựa vào giá trị count (Thử thách 3)
    let colorStyle = "black";
    if (count > 0) colorStyle = "#2ecc71"; // Màu xanh khi > 0
    if (count < 0) colorStyle = "#e74c3c"; // Màu đỏ khi < 0

    return (
        <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", margin: "10px" }}>
            {/* Hiển thị màu sắc linh hoạt (Thử thách 3) */}
            <h2 style={{ color: colorStyle }}>Bộ đếm hiện tại: {count}</h2>
            
            {/* Hiển thị tính chất số âm / số dương (Thử thách 2) */}
            <p>Tính chất số: <strong>
                {count > 0 ? "Số dương ( > 0 )" : count < 0 ? "Số âm ( < 0 )" : "Số không (= 0)"}
            </strong></p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={() => setCount(count + 1)} style={{ padding: "8px 12px" }}>Tăng (+1)</button>
                <button onClick={() => setCount(count - 1)} style={{ padding: "8px 12px" }}>Giảm (-1)</button>
                <button onClick={() => setCount(count + 5)} style={{ padding: "8px 12px", background: "#3498db", color: "#fff", border: "none", borderRadius: "4px" }}>
                    Tăng 5 (+5) {/* Thử thách 1 */}
                </button>
                <button onClick={() => setCount(count * 2)} style={{ padding: "8px 12px" }}>Nhân đôi (x2)</button>
                <button onClick={() => setCount(0)} style={{ padding: "8px 12px", background: "#95a5a6", color: "#fff", border: "none", borderRadius: "4px" }}>Reset</button>
            </div>
        </div>
    );
}

export default NumberState;