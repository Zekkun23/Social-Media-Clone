import { useContext, useState } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import moment from "moment";


const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['comments'], () =>
    makeRequest.get("/comments?postId=" + postId).then((res => {
      return res.data;
    }))
  );

  console.log(data)

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="userinput">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Write a comment"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error ? "Something went wrong" : isLoading ? "loading" : data.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.userId === currentUser.id ? "/upload/" + currentUser.profilePic : "/upload/" + comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
