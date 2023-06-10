import "./Profile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import Posts from "../../components/Posts/Posts";
import { makeRequest } from "../../axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import "./Profile.scss";
import { useContext, useState } from "react";
import Update from "../../components/Update/Update";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // Extracting userId from the current URL path
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  // Fetching user data using useQuery
  const { isLoading, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  // Fetching relationship data using useQuery
  const { isLoading: risLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedId=" + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  // Creating a mutation for follow/unfollow functionality
  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  // Event handler for follow/unfollow button
  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img
              src={"/upload/" + data.coverPic}
              alt=""
              className="coverphoto"
            />
            <img
              src={"/upload/" + data.profilePic}
              alt=""
              className="profilephoto"
            />
          </div>
          <div className="profileinfo">
            <div className="userinfo">
              <div className="left">{/* Left section content goes here */}</div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <SchoolIcon />
                    <span>{data.school}</span>
                  </div>
                </div>
                {risLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>Update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">{/* Right section content goes here */}</div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
