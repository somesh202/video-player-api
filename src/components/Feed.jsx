import { useState, useEffect } from "react";
import axios from "axios";
import VideoDetail from "./VideoDetail";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../App.css";
import { ThumbUp } from "@mui/icons-material";
function Feed() {
  const [videos, setVideos] = useState([]);
  const [play, setPlay] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (e, value) => {
    setPage(value - 1);
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://internship-service.onrender.com/videos?page=${page}`)
      .then((response) => {
        setVideos([...response.data.data.posts]);
        setIsLoading(false);
        console.log(response.data.data.posts);

        return response.data.data.posts;
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [page]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="lg:grid lg:grid-cols-3 p-8 flex flex-col mt-24">
          {videos.map((vid) => (
            <div
              key={vid.postId}
              onClick={() => setPlay(vid.postId)}
              className="p-8"
            >
              <div className="wrapper">
                <ReactPlayer
                  width="100%"
                  height="190%"
                  className="player"
                  id={vid.postId}
                  playing={play === vid.postId}
                  light={vid.submission.thumbnail}
                  controls
                  url={vid.submission.mediaUrl}
                />
              </div>
              <div
                key={vid.postId}
                className="absolute flex cursor-pointer 2xl:mt-80 lg:mt-64 lg:py-12 md:py-48 mt-64 text-right 2xl:ml-80 lg:ml-56 md:ml-72 ml-8 text-sm lg:text-lg"
              >
                <ThumbUp
                  className={
                    vid.reaction.voted
                      ? "text-blue-400 text-sm"
                      : "text-white text-sm"
                  }
                  onClick={() => {
                    vid.reaction.voted = true;
                    vid.reaction.count = vid.reaction.count + 1;
                  }}
                />
                <p className="text-white px-4 font-bold">
                  {vid.reaction.count}
                </p>
              </div>
              <VideoDetail
                className="w-4"
                key={vid.postId}
                imgUrl={vid.submission.thumbnail}
                description={vid.submission.description}
                title={vid.submission.title}
                handle={vid.creator.handle}
                pic={vid.creator.pic}
                play={vid.submission.mediaUrl}
              />
            </div>
          ))}
        </div>
      )}

      <br />

      <div className="pagination text-white m-auto flex tet-white text-lg font-bold m-auto text-center p-6 items-center justify-center">
        <Stack spacing={2}>
          <Pagination
            count={10}
            color="primary"
            size=""
            sx={{
              color: "#fff",
              width: "400px",
              margin: "auto",
              "& .MuiButtonBase-root": {
                color: "#fff",
                minWidth: "30px",
                fontSize: "1em",
              },
            }}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </>
  );
}

export default Feed;
