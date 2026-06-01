function ProductCard({ tenSP, giaBan, hinhAnh }) {
    return (
        <div style={{ 
            border: "1px solid #e0e0e0", 
            borderRadius: "12px",
            padding: "20px",
            margin: "15px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            textAlign: "center",
            width: "220px",
            backgroundColor: "#fff"
        }}>
            <img 
                src={hinhAnh} 
                alt={tenSP} 
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <h3 style={{ fontSize: "18px", color: "#333", margin: "10px 0" }}>{tenSP}</h3>
            <p style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "16px" }}>
                {giaBan.toLocaleString("vi-VN")} đ
            </p>
            <button style={{ 
                background: "#2ecc71", 
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%"
            }}>
                Thêm vào giỏ hàng
            </button>
        </div>
    );
}

export default ProductCard;