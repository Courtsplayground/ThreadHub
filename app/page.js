export default function Home() {
  return (
    <main style={{
      background: "#0f0f10",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <h1 style={{
        color: "#ff7a18",
        fontSize: "48px",
        marginBottom: "10px"
      }}>
        ThreadHub
      </h1>

      <p style={{
        fontSize: "20px",
        color: "#d4d4d8",
        maxWidth: "700px"
      }}>
        Real communities. Real conversations. Open discussion built for creators,
        communities, trending topics, and authentic opinions.
      </p>

      <div style={{
        marginTop: "40px",
        display: "grid",
        gap: "20px"
      }}>
        <div style={{
          background: "#18181b",
          padding: "20px",
          borderRadius: "14px",
          border: "1px solid #2a2a2e"
        }}>
          <h2>🔥 Trending Discussion</h2>
          <p>What would make a social platform better than Reddit?</p>
        </div>

        <div style={{
          background: "#18181b",
          padding: "20px",
          borderRadius: "14px",
          border: "1px solid #2a2a2e"
        }}>
          <h2>💬 Open Communities</h2>
          <p>Create communities, share posts, and connect with real people.</p>
        </div>

        <div style={{
          background: "#18181b",
          padding: "20px",
          borderRadius: "14px",
          border: "1px solid #2a22e"
        }}>
          <h2>⭐ ThreadHub Premium</h2>
          <p>Premium subscriptions and exclusive communities coming soon.</p>
        </div>
      </div>
    </main>
  );
}
