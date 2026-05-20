export default function Home() {
  const posts = [
    {
      title: "What would make social media better?",
      author: "OpenTalk",
      votes: 245,
      comments: 89
    },
    {
      title: "Best side hustles in 2026?",
      author: "MoneyMind",
      votes: 532,
      comments: 201
    },
    {
      title: "Would you use a censorship-free discussion app?",
      author: "ThreadStarter",
      votes: 821,
      comments: 340
    }
  ];

  return (
    <main
      style={{
        background: "#0b0b0f",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #222"
        }}
      >
        <h1 style={{ color: "#ff7a18", margin: 0 }}>ThreadHub</h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={navLink}>
            Feed
          </a>
          <a href="#" style={navLink}>
            Communities
          </a>
          <a href="#" style={navLink}>
            Premium
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px"
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            marginBottom: "20px"
          }}
        >
          Real Communities.
          <br />
          Real Conversations.
        </h2>

        <p
          style={{
            color: "#b3b3b3",
            fontSize: "22px",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          ThreadHub is a next-generation discussion platform built for open
          conversations, communities, creators, trending topics, and authentic
          interaction.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px"
          }}
        >
          <button style={primaryButton}>Explore Threads</button>
          <button style={secondaryButton}>Join Community</button>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px"
        }}
      >
        <FeatureCard
          title="🔥 Trending Topics"
          text="Discover viral conversations and breaking discussions."
        />

        <FeatureCard
          title="💬 Open Communities"
          text="Create communities around hobbies, business, memes, and more."
        />

        <FeatureCard
          title="⬆️ Voting System"
          text="Upvote great content and help quality discussions rise."
        />

        <FeatureCard
          title="👑 Creator Friendly"
          text="Built for creators, businesses, and online communities."
        />
      </section>

      {/* LIVE POSTS */}
      <section
        style={{
          padding: "60px 40px"
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
            fontSize: "38px"
          }}
        >
          Trending Discussions
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px"
          }}
        >
          {posts.map((post, index) => (
            <div key={index} style={postCard}>
              <small style={{ color: "#888" }}>
                c/{post.author} • posted by {post.author}
              </small>

              <h3>{post.title}</h3>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  color: "#999"
                }}
              >
                <span>⬆️ {post.votes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM */}
      <section
        style={{
          padding: "80px 40px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            background: "#15151d",
            border: "1px solid #2a2a35",
            borderRadius: "20px",
            padding: "60px",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px"
            }}
          >
            ThreadHub Premium
          </h2>

          <p
            style={{
              color: "#b3b3b3",
              fontSize: "20px"
            }}
          >
            Unlock exclusive communities, creator tools, profile upgrades,
            analytics, badges, and premium discussions.
          </p>

          <button
            style={{
              ...primaryButton,
              marginTop: "30px"
            }}
          >
            Upgrade Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "30px",
          textAlign: "center",
          color: "#777"
        }}
      >
        © 2026 ThreadHub — Built for creators, communities, and free discussion.
      </footer>
    </main>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div
      style={{
        background: "#15151d",
        border: "1px solid #2a2a35",
        borderRadius: "16px",
        padding: "30px"
      }}
    >
      <h3>{title}</h3>

      <p
        style={{
          color: "#b3b3b3",
          lineHeight: "1.6"
        }}
      >
        {text}
      </p>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const primaryButton = {
  background: "#ff7a18",
  border: "none",
  padding: "16px 28px",
  borderRadius: "12px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold"
};

const secondaryButton = {
  background: "transparent",
  border: "1px solid #444",
  padding: "16px 28px",
  borderRadius: "12px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold"
};

const postCard = {
  background: "#15151d",
  border: "1px solid #2a2a35",
  borderRadius: "16px",
  padding: "25px"
};
