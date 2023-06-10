import Post from "../Post/Post";
import "./Posts.scss";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then(res => {
      return res.data;
    })
  );

  const uniquePosts = data ? Array.from(new Set(data.map(post => post.id))).map(id => {
    return data.find(post => post.id === id);
  }) : [];

  return (
    <div className="Posts">
      {error ? (
        "Something went wrong"
      ) : isLoading ? (
        "loading"
      ) : (
        uniquePosts.map(post => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
