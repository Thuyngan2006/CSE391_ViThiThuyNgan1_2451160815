function SimpleVariables() {
    // Khai báo các biến dữ liệu JavaScript thông thường
    const ten = "Vi Thị Thúy Ngân";
    const tuoi = 20;
    const laSinhVien = true;
    const danhSachMonHoc = ["HTML/CSS", "Cấu trúc dữ liệu", "Phân tích hệ thống", "ReactJS"];
    
    // Giả lập thông tin đo lường BMI cho phần thử thách
    const canNang = 48; // đơn vị: kg
    const chieuCao = 1.58; // đơn vị: mét
    const chiSoBMI = (canNang / (chieuCao * chieuCao)).toFixed(1);
    
    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h1>Hồ sơ học tập: {ten}</h1>
            <p>ℹ️ Tuổi hiện tại: {tuoi}</p>
            <p>🔮 Tuổi vào năm sau: {tuoi + 1}</p>
            <p>🎓 Trạng thái sinh viên: {laSinhVien ? "Đang đi học" : "Đã tốt nghiệp"}</p>
            
            <h3>📚 Danh sách môn học kỳ này:</h3>
            <p>{danhSachMonHoc.join(" — ")}</p>

            <hr />
            <h3>📊 Góc sức khỏe (Kết quả tính toán biểu thức):</h3>
            <p>Chỉ số BMI của bạn: <strong>{chiSoBMI}</strong></p>
        </div>
    );
}

export default SimpleVariables;