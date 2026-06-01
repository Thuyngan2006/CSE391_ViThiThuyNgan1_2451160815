import { useState } from "react";

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State phục vụ ẩn/hiện mật khẩu

    // Kiểm tra tính hợp lệ của email (Thử thách 2)
    const isEmailValid = email.includes("@");

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", margin: "10px" }}>
            <h2>Nhập thông tin tài khoản</h2>
            
            {/* 1. Ô nhập tên tài khoản */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", fontWeight: "bold" }}>Họ và tên: </label>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    placeholder="Nhập tên..."
                    style={{ width: "250px", padding: "6px" }}
                />
                {/* Giới hạn và đếm ký tự (Thử thách 1) */}
                <span style={{ marginLeft: "10px", fontSize: "12px", color: "#7f8c8d" }}>
                    {name.length}/100 ký tự
                </span>
            </div>
            
            {/* 2. Ô nhập Email hệ thống */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", fontWeight: "bold" }}>Địa chỉ Email: </label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                    style={{ width: "250px", padding: "6px" }}
                />
                {/* Đánh giá email hợp lệ (Thử thách 2) */}
                {email && (
                    <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: "bold", color: isEmailValid ? "green" : "red" }}>
                        {isEmailValid ? "✓ Email hợp lệ" : "✕ Thiếu ký tự '@'"}
                    </span>
                )}
            </div>

            {/* 3. Ô nhập Mật khẩu bảo mật (Thử thách 3) */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", fontWeight: "bold" }}>Mật khẩu: </label>
                <input 
                    type={showPassword ? "text" : "password"} // Thay đổi linh hoạt kiểu hiển thị
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    style={{ width: "250px", padding: "6px" }}
                />
                <button 
                    onClick={() => setShowPassword(!showPassword)} 
                    style={{ marginLeft: "5px", padding: "6px 10px", cursor: "pointer" }}
                >
                    {showPassword ? "🙈 Ẩn" : "👁️ Hiện"}
                </button>
            </div>
            
            <hr />
            
            <h3>Xem trước thông tin (Realtime Preview):</h3>
            {name ? (
                <div style={{ background: "#e8f8f5", padding: "12px", borderRadius: "6px", color: "#117a65" }}>
                    Xin chào thành viên <strong>{name}</strong>! Hệ thống ghi nhận email của bạn là: <em>{email || "(chưa nhập)"}</em>.
                </div>
            ) : <p style={{ color: "#7f8c8d" }}>(Vui lòng điền thông tin để hiển thị xem trước)</p>}
        </div>
    );
}

export default StringState;