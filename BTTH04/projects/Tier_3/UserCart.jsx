function UserCard({ name, email, avatar }) {
    return (
        <div style={{
            border: "1px solid #3498db",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px",
            width: "250px",
            textAlign: "center",
            backgroundColor: "#ecf0f1"
        }}>
            <img 
                src={avatar} 
                alt={name} 
                style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} 
            />
            <h3 style={{ color: "#2c3e50", margin: "10px 0 5px 0" }}>{name}</h3>
            <p style={{ color: "#7f8c8d", fontSize: "14px", margin: "0" }}>{email}</p>
        </div>
    );
}

export default UserCard;