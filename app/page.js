"use client";


import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://tynwacvfvdaobexsohvx.supabase.co",
"sb_publishable_LP0K0Gh86XxRg0YuYLhBnQ_E0aF08IR"
);


export default function Home() {
  useEffect(() => {
  getPosts();
}, []);

const getPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (data) {
    setPosts(data);
  }
};
  const [posts, setPosts] = useState([
    {
      title: "What would make social media better?",
      author: "OpenTalk",
      votes: 245,
      comments: 89,
    },
    {
      title: "Best side hustles in 2026?",
      author: "MoneyMind",
      votes: 532,
      comments: 201,
    },
  ]);

  const [newPost, setNewPost] = useState("");
const [comments, setComments] = useState({});
const [commentInputs, setCommentInputs] = useState({});
  const addPost = async () => {
    if (!newPost.trim()) return;

    const post = {
      title: newPost,
      author: "Anonymous",
      votes: 0,
      comments: 0,
    };
const { data, error } = await supabase
  .from("posts")
  .insert([
    {
      title: newPost,
      author: "Anonymous",
      votes: 0,
      comments: 0,
    },
  ])
  .select();

if (error) {
  alert(error.message);
  return;
}
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <main
      style={{
        background: "#0b0b0f",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #222",
          position: "sticky",
          top: 0,
          background: "#0b0b0f",
          zIndex: 100,
        }}
      >
        <h1 style={{ color: "#ff7a18" }}>ThreadHub</h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={navLink}>Feed</a>
          <a href="#" style={navLink}>Communities</a>
          <a href="#" style={navLink}>Premium</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.1",
          }}
        >
          Real Communities.
          <br />
          Real Conversations.
        </h1>

        <p
          style={{
            color: "#aaa",
            marginTop: "20px",
            fontSize: "20px",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          ThreadHub is a next generation discussion platform built for open
          conversations, communities, trending topics, and authentic interaction.
        </p>
      </section>

      {/* CREATE POST */}
      <section
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#15151d",
            padding: "25px",
            borderRadius: "18px",
            border: "1px solid #2a2a35",
          }}
        >
          <h2>Create a Post</h2>

          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Start a discussion..."
            style={{
              width: "100%",
              height: "120px",
              marginTop: "15px",
              background: "#0f0f14",
              color: "white",
              border: "1px solid #333",
              borderRadius: "12px",
              padding: "15px",
              fontSize: "16px",
              resize: "none",
            }}
          />

          <button
            onClick={addPost}
            style={{
              marginTop: "15px",
              background: "#ff7a18",
              border: "none",
              padding: "14px 22px",
              borderRadius: "12px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Post Thread
          </button>
        </div>
      </section>

      {/* POSTS */}
      <section
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          padding: "20px",
          display: "grid",
          gap: "20px",
        }}
      >
        {posts.map((post, index) => (
          <div key={index} style={postCard}>
            <h2>{post.title}</h2>

            <div   style={{     display: "flex",     alignItems: "center",     gap: "10px",     marginTop: "15px",     color: "#888",   }} >   <div     style={{       width: "38px",       height: "38px",       borderRadius: "50%",       background: "#ff7a18",       display: "flex",       alignItems: "center",       justifyContent: "center",       fontWeight: "bold",       color: "white",     }}   >     {post.author.charAt(0)}   </div>    <div>     <div>@{post.author}</div>      <div       style={{         fontSize: "13px",         color: "#666",       }}     >       Posted just now     </div>   </div> </div>
             

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "15px",
                color: "#bbb",
              }}
            >
<button
  onClick={() => {
    const updatedPosts = [...posts];
    updatedPosts[index].votes += 1;
    setPosts(updatedPosts);
  }}
  style={{
    background: "transparent",
    border: "none",
    color: "#bbb",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  ⬆ {post.votes}
</button>
              <span>
  💬 {comments[index]?.length || post.comments}
</span>
            </div>
  <div
  style={{
    marginTop: "20px",
  }}
>
  <input
    type="text"
    placeholder="Write a comment..."
    value={commentInputs[index] || ""}
    onChange={(e) =>
      setCommentInputs({
        ...commentInputs,
        [index]: e.target.value,
      })
    }
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #333",
      background: "#0f0f14",
      color: "white",
      marginBottom: "10px",
    }}
  />

  <button
    onClick={() => {
      if (!commentInputs[index]) return;

      const updatedComments = {
        ...comments,
        [index]: [
          ...(comments[index] || []),
          commentInputs[index],
        ],
      };

      setComments(updatedComments);

      setCommentInputs({
        ...commentInputs,
        [index]: "",
      });
    }}
    style={{
      background: "#ff7a18",
      border: "none",
      padding: "10px 16px",
      borderRadius: "10px",
      color: "white",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Add Comment
  </button>

  {(comments[index] || []).map((comment, i) => (
    <div
      key={i}
      style={{
        marginTop: "12px",
        padding: "12px",
        background: "#101018",
        borderRadius: "10px",
        color: "#ddd",
      }}
    >
      💬 {comment}
    </div>
  ))}
</div>
          </div>
        ))}
      </section>
    </main>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const postCard = {
  background: "#15151d",
  border: "1px solid #2a2a35",
  borderRadius: "18px",
  padding: "25px",
};
