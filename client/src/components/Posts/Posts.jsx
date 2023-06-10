import Post from "../Post/Post";
import "./Posts.scss";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  // Fetch posts data using react-query hook
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then(res => {
      return res.data;
    })
  );

  // Remove duplicate posts based on their IDs
  const uniquePosts = data ? Array.from(new Set(data.map(post => post.id))).map(id => {
    return data.find(post => post.id === id);
  }) : [];

  return (
    <div className="Posts">
      {error ? (
        "Something went wrong" // Display an error message if there is an error
      ) : isLoading ? (
        "loading" // Display a loading message while data is being fetched
      ) : (
        uniquePosts.map(post => <Post post={post} key={post.id} />) // Render each unique post
      )}
    </div>
  );
};

export default Posts;
