function ConditionalDemo() {
    const isOnline = true;
    const diemSo = 85;
    const soLuongHangTrongKho = 0;
    
    return (
        <div style={{ padding: "20px", background: "#f9f9f9" }}>
            <h2>Trạng thái hệ thống — Thúy Ngân</h2>
            
            {/* Thử thách 1: Hiển thị icon dựa trên trạng thái */}
            <p>Tình trạng hoạt động: {isOnline ? "🟢 Đang hoạt động" : "🔴 Mất kết nối"}</p>
            
            {/* Thử thách 3: Hiển thị trạng thái kho hàng */}
            <p>Trạng thái sản phẩm: {soLuongHangTrongKho > 0 ? "Còn hàng" : <strong style={{ color: "red" }}>❌ Hết hàng</strong>}</p>
            
            {/* Đánh giá kết quả học tập */}
            <p>Kết quả thi: {diemSo >= 50 ? "🎉 ĐẠT" : "❌ KHÔNG ĐẠT"}</p>
            <p>Xếp loại học lực: {
                diemSo >= 90 ? "Xuất sắc" :
                diemSo >= 80 ? "Giỏi" :
                diemSo >= 65 ? "Khá" : "Trung bình"
            }</p>
        </div>
    );
}

export default ConditionalDemo;