import { useState } from "react";
import NumberState from "./components/NumberState";
import StringState from "./components/StringState";
import BooleanState from "./components/BooleanState";

function App() {
    // Quản lý nhiều State đồng thời trong hệ thống đăng ký (Bài 4.4)
    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState(""); // Thử thách 1: Thêm email
    const [regAge, setRegAge] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleRegisterSubmit() {
        // Kiểm tra tính đầy đủ và logic dữ liệu (Thử thách 2)
        if (!regName.trim() || !regEmail.trim() || !regAge) {
            alert("Hệ thống lỗi: Vui lòng cung cấp đầy đủ thông tin, không được bỏ trống ô nhập!");
            return;
        }

        const ageNumber = Number(regAge);
        if (ageNumber <= 0 || ageNumber >= 100) {
            alert("Xác thực thất bại: Giá trị độ tuổi nhập vào không hợp lệ (Phải lớn hơn 0 và nhỏ hơn 100)!");
            return;
        }

        // Đạt chuẩn điều kiện, tiến hành gửi form
        setIsSubmitted(true);
    }

    function handleResetForm() {
        setRegName("");
        setRegEmail("");
        setRegAge("");
        setIsStudent(false);
        setIsSubmitted(false);
    }

    return (
        <div style={{ backgroundColor: "#f4f6f7", minHeight: "100vh", padding: "20px", fontFamily: "sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Học viện Công nghệ React — Vi Thị Thúy Ngân</h1>
            <p style={{ textAlign: "center", color: "#7f8c8d" }}>Không gian nghiên cứu, thực nghiệm chuyên sâu về cấu trúc quản lý Hook useState</p>
            
            {/* THÀNH PHẦN HỌC TẬP TỪ CÁC BÀI TRƯỚC */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
                <NumberState />
                <StringState />
                <BooleanState />
            </div>

            <hr style={{ margin: "40px 0" }} />

            {/* BÀI 4.4: FORM ĐĂNG KÝ PHỐI HỢP NHIỀU TRẠNG THÁI */}
            <div style={{ maxWidth: "500px", margin: "0 auto", padding: "25px", background: "#fff", border: "1px solid #d6dbdf", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                <h2 style={{ color: "#2e4053", textAlign: "center", marginTop: 0 }}>📝 Form Ghi Danh Thành Viên</h2>
                
                {!isSubmitted ? (
                    <div>
                        <div style={{ marginBottom: "12px" }}>
                            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Họ tên:</label>
                            <input value={regName} onChange={(e) => setRegName(e.target.value)} style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="Nhập tên đăng ký..." />
                        </div>

                        <div style={{ marginBottom: "12px" }}>
                            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email liên hệ:</label>
                            <input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="Nhập email..." />
                        </div>

                        <div style={{ marginBottom: "12px" }}>
                            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Tuổi: (Yêu cầu từ 1 - 99)</label>
                            <input type="number" value={regAge} onChange={(e) => setRegAge(e.target.value)} style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="Nhập số tuổi..." />
                        </div>

                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ cursor: "pointer", fontWeight: "bold" }}>
                                <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} style={{ marginRight: "8px" }} />
                                Đang là học viên/sinh viên học tập
                            </label>
                        </div>

                        <button onClick={handleRegisterSubmit} style={{ width: "100%", padding: "10px", background: "#34495e", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", fontSize: "15px" }}>
                            Xác Nhận Gửi Form
                        </button>
                    </div>
                ) : (
                    /* Thử thách 3: Hiển thị lời chào cá nhân hóa độc lập */
                    <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", color: "#155724", padding: "20px", borderRadius: "6px", textAlign: "center" }}>
                        <h3 style={{ marginTop: 0 }}>🎉 Đăng ký thành công!</h3>
                        <p style={{ fontSize: "16px" }}>Xin chào bạn <strong>{regName}</strong>! Hệ thống đã ghi nhận hồ sơ của bạn.</p>
                        <div style={{ textAlign: "left", background: "rgba(255,255,255,0.6)", padding: "12px", borderRadius: "4px", marginTop: "15px" }}>
                            <p style={{ margin: "4px 0" }}><strong>Hòm thư:</strong> {regEmail}</p>
                            <p style={{ margin: "4px 0" }}><strong>Ghi nhận số tuổi:</strong> {regAge} tuổi</p>
                            <p style={{ margin: "4px 0" }}><strong>Đối tượng sinh viên:</strong> {isStudent ? "Đúng chính xác" : "Không phải"}</p>
                        </div>
                        <button onClick={handleResetForm} style={{ marginTop: "15px", padding: "8px 15px", background: "#155724", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                            Thực hiện đăng ký lại
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;