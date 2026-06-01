import { useState } from "react";

function BooleanState() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false); // Thử thách 2: Accordion
    const [isLightOn, setIsLightOn] = useState(false);             // Thử thách 3: Bóng đèn

    // Cấu hình giao diện đổi màu động cho container
    const boxTheme = {
        backgroundColor: isDarkMode ? "#2c3e50" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#2c3e50",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px",
        transition: "all 0.3s ease"
    };

    return (
        <div style={boxTheme}>
            <h3>Hệ thống điều khiển trạng thái (Toggle Switch)</h3>
            
            {/* 1. Công tắc chuyển giao diện Dark/Light Mode */}
            <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{ padding: "8px 16px", fontWeight: "bold", cursor: "pointer" }}
            >
                Giao diện: {isDarkMode ? "☀️ Chế độ Sáng" : "🌙 Chế độ Tối"}
            </button>
            
            <hr style={{ margin: "20px 0" }} />

            {/* 2. Thiết kế khối Accordion đóng mở (Thử thách 2) */}
            <div style={{ border: "1px solid #7f8c8d", borderRadius: "4px", maxWidth: "450px" }}>
                <div 
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    style={{ background: "#bdc3c7", color: "#2c3e50", padding: "10px", cursor: "pointer", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}
                >
                    <span>📖 Điều khoản và chính sách bảo mật hệ thống</span>
                    <span>{isAccordionOpen ? "▲" : "▼"}</span>
                </div>
                {isAccordionOpen && (
                    <div style={{ padding: "10px", background: isDarkMode ? "#34495e" : "#fff" }}>
                        <p style={{ margin: 0, fontSize: "14px" }}>
                            Toàn bộ dữ liệu cá nhân của bạn được bảo mật tuyệt đối theo tiêu chuẩn mã hóa quốc tế cấp cao.
                        </p>
                    </div>
                )}
            </div>

            <hr style={{ margin: "20px 0" }} />

            {/* 3. Công tắc Bật/Tắt bóng đèn thông minh (Thử thách 3) */}
            <div style={{ textAlign: "center", padding: "10px" }}>
                <div style={{ fontSize: "50px", marginBottom: "10px" }}>
                    {isLightOn ? "💡" : "🔌"} {/* Đổi icon tương ứng */}
                </div>
                <button 
                    onClick={() => setIsLightOn(!isLightOn)}
                    style={{
                        padding: "8px 20px", 
                        background: isLightOn ? "#f1c40f" : "#95a5a6", 
                        color: "#fff", 
                        border: "none", 
                        borderRadius: "20px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    {isLightOn ? "TẮT ĐÈN" : "BẬT ĐÈN"}
                </button>
            </div>
        </div>
    );
}

export default BooleanState;