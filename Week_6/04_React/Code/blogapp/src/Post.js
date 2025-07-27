const Post = ({ title, body }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 15, margin: 10, borderRadius: 8 }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;