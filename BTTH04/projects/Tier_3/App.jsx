import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";

function App() {
    // 1. Dữ liệu mảng danh sách thiết bị di động
    const danhSachThietBi = [
        { id: 1, ten: "iPhone 15 Pro Max", gia: 30000000, anh: "[https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400](https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400)" },
        { id: 2, ten: "Samsung Galaxy S24 Ultra", gia: 26500000, anh: "[https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400](https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400)" },
        { id: 3, ten: "Xiaomi 14 Ultra", gia: 21000000, anh: "[https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400)" }
    ];

    // 2. Dữ liệu mảng danh sách thành viên ban quản trị (Thử thách 1)
    const danhSachThanhVien = [
        { id: 201, name: "Vi Thị Thúy Ngân", email: "thuyngan.admin@example.com", avatar: "[https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150](https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150)" },
        { id: 202, name: "Nguyễn Văn Minh", email: "vanminh.dev@example.com", avatar: "[https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150)" },
        { id: 203, name: "Lê Trần Anh Tuấn", email: "anhtuan.manager@example.com", avatar: "[https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150)" }
    ];

    return (
        <div style={{ backgroundColor: "#f5f7fa", minHeight: "100vh", padding: "30px", fontFamily: "sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
                Hệ thống Quản lý Showroom — Vi Thị Thúy Ngân
            </h1>
            <p style={{ textAlign: "center", color: "#7f8c8d" }}>
                Mô hình ứng dụng phân tách cấu trúc giao diện và truyền nhận dữ liệu một chiều qua Props
            </p>
            
            <hr style={{ margin: "40px 0" }} />

            {/* KHU VỰC 1: HIỂN THỊ DANH SÁCH THÀNH VIÊN BAN QUẢN TRỊ (THỬ THÁCH 1) */}
            <h2 style={{ color: "#2980b9", textAlign: "center" }}>👥 Danh sách Ban quản trị hệ thống</h2>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
                {danhSachThanhVien.map((user) => (
                    <UserCard 
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))}
            </div>

            <hr style={{ margin: "40px 0" }} />

            {/* KHU VỰC 2: HIỂN THỊ DANH SÁCH SẢN PHẨM CÔNG NGHỆ */}
            <h2 style={{ color: "#27ae60", textAlign: "center" }}>📱 Danh mục thiết bị Showroom</h2>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
                {danhSachThietBi.map((thietBi) => (
                    <ProductCard 
                        key={thietBi.id}
                        tenSP={thietBi.ten}
                        giaBan={thietBi.gia}
                        hinhAnh={thietBi.anh}
                    />
                ))}
            </div>

            <hr style={{ margin: "40px 0" }} />

            {/* KHU VỰC 3: MÔ TẢ ĐƠN GIÁ KHUYẾN MÃI ĐỘC LẬP (THỬ THÁCH 2) */}
            <h2 style={{ color: "#e67e22", textAlign: "center" }}>🏷️ Chương trình Siêu Giảm Giá giờ vàng</h2>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p>Giá ưu đãi đặc biệt cho dòng máy cao cấp nhất:</p>
                <PriceTag originalPrice={35000000} salePrice={29990000} />
            </div>
        </div>
    );
}

export default App;