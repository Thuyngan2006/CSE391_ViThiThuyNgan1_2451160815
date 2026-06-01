function PriceTag({ originalPrice, salePrice }) {
    // Tính toán phần trăm giảm giá tự động
    const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

    return (
        <div style={{ padding: "10px", background: "#fff", border: "1px dashed #e74c3c", borderRadius: "6px", display: "inline-block" }}>
            <span style={{ textDecoration: "line-through", color: "#95a5a6", marginRight: "10px" }}>
                {originalPrice.toLocaleString("vi-VN")}đ
            </span>
            <span style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "18px" }}>
                {salePrice.toLocaleString("vi-VN")}đ
            </span>
            <span style={{ marginLeft: "10px", background: "#e74c3c", color: "#fff", padding: "2px 6px", borderRadius: "4px", fontSize: "12px" }}>
                -{discount}%
            </span>
        </div>
    );
}

export default PriceTag;