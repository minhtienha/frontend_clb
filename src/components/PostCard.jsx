import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img
        src={`http://localhost:5000${post.media[0]?.url}`}
        alt={post.title}
      />

      <div className="post-content">
        <span className="category">{post.category?.name}</span>

        <h3>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </h3>

        <p>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
