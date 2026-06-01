function ProductListDemo() {
    // Thử thách 1: Tạo mảng danh sách 5 sản phẩm công nghệ
    const danhSachSanPham = [
        { id: 101, tenSP: "Điện thoại iPhone 15 Pro", giaTien: 28000000 },
        { id: 102, tenSP: "Chuột máy tính không dây", giaTien: 450000 },
        { id: 103, tenSP: "Bàn phím cơ Bluetooth", giaTien: 1200000 },
        { id: 104, tenSP: "Tai nghe chống ồn chủ động", giaTien: 3500000 },
        { id: 105, tenSP: "Cáp sạc nhanh USB-C", giaTien: 250000 }
    ];

    // Thử thách 3: Tính tổng giá tiền của tất cả sản phẩm bằng phương thức reduce
    const tongTienKhoHang = danhSachSanPham.reduce((tong, sp) => tong + sp.giaTien, 0);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh mục sản phẩm kho hàng — Quản lý bởi Thúy Ngân</h2>
            
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
                        <th style={{ border: "1px solid #ddd", padding: "10px" }}>Mã SP</th>
                        <th style={{ border: "1px solid #ddd", padding: "10px" }}>Tên sản phẩm</th>
                        <th style={{ border: "1px solid #ddd", padding: "10px" }}>Giá bán niêm yết</th>
                    </tr>
                </thead>
                <tbody>
                    {danhSachSanPham.map((sanPham) => (
                        // Quy tắc bắt buộc: Mỗi phần tử lặp ra phải có thuộc tính định danh duy nhất 'key'
                        <tr key={sanPham.id}>
                            <td style={{ border: "1px solid #ddd", padding: "10px" }}>{sanPham.id}</td>
                            <td style={{ border: "1px solid #ddd", padding: "10px" }}>{sanPham.tenSP}</td>
                            
                            {/* Thử thách 2: Định dạng màu đỏ nổi bật đối với sản phẩm có giá trị lớn hơn 1.000.000đ */}
                            <td style={{ 
                                border: "1px solid #ddd", 
                                padding: "10px",
                                color: sanPham.giaTien > 1000000 ? "red" : "black",
                                fontWeight: sanPham.giaTien > 1000000 ? "bold" : "normal"
                            }}>
                                {sanPham.giaTien.toLocaleString("vi-VN")} đ
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold", color: "#2c3e50" }}>
                💰 Tổng giá trị đầu tư thiết bị: {tongTienKhoHang.toLocaleString("vi-VN")} đ
            </div>
        </div>
    );
}

export default ProductListDemo;