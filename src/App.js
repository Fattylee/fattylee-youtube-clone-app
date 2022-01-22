import React, { Fragment, useState, useEffect } from "react";
import { SearchBar } from "./components";
import youtube from "./api/youtube";
import { Form } from "./components/Form";

const fetchYoutubeData = async (searchWord, setVideos, setIsLoading) => {
  try {
    setIsLoading(true);
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 3,
        key: process.env.REACT_APP_YOUTUBE_KEY,
        q: encodeURI(searchWord),
      },
    });
    console.log("success");
    console.log(res);
    setIsLoading(false);
    setVideos(res.data.items);
  } catch (err) {
    console.log("error");
    console.log(err);
    setIsLoading(false);
  }
};

const App = () => {
  const [parentField, setParentField] = useState({});
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(() => {
    const listOfSearchTerms = [
      "javascript",
      "react",
      "css",
      "life",
      "interview",
    ];
    const random = Math.random() * listOfSearchTerms.length;

    const randomWord = listOfSearchTerms[random | 0];
    return randomWord;
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect searchTerm", searchTerm);
    fetchYoutubeData(searchTerm, setVideos, setIsLoading);
  }, []);

  const onHandleSubmit = (searchTerm) => {
    console.log("searchTerm");
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    fetchYoutubeData(searchTerm, setVideos, setIsLoading);
  };

  const handleChange = (fields) => {
    // console.log("see me", fields);
    setParentField((state) => ({ ...state, ...fields }));
  };
  return (
    <Fragment>
      <h1>First Order Component</h1>
      <SearchBar onHandleSubmit={onHandleSubmit} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {videos.length ? (
            <Fragment>
              <iframe
                id="player"
                src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                frameBorder="0"
                height="390"
                width="640"
                type="text/html"
                title="video player"
              ></iframe>
              <h3>{videos[0].snippet.title}</h3>
              <h5>{videos[0].snippet.description}</h5>
              <img
                src={videos[0].snippet.thumbnails.medium.url}
                alt="video thumbnail"
              />
            </Fragment>
          ) : (
            "loadinging..."
          )}
        </div>
      )}
      <Form onChange={handleChange} />
      <pre>{JSON.stringify(parentField, null, 2)}</pre>
    </Fragment>
  );
};

export default App;
