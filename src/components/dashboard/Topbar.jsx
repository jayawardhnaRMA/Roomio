export default function Topbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 0 28px",
      }}
    >
      <input
        placeholder="Search your designs or assets..."
        style={{
          width: "60%",
          padding: "14px 16px",
          borderRadius: "14px",
          border: "1px solid #e2e8f0",
          background: "#f8fafc",
          fontSize: "16px",
        }}
      />

      <div style={{ fontWeight: 700, color: "#334155" }}>Alex Rivera</div>
    </div>
  );
}