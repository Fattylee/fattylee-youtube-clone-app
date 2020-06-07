import React, { Fragment, useState } from "react";

const SearchBar = () => {
  const [{ video, visibility }, setVideo] = useState({
    video: "",
    visibility: true,
  });
  const handleChange = (e) => {
    const { value: video } = e.target;
    setVideo((prevState) => ({ ...prevState, video }));
  };
  return (
    <Fragment>
      <div>
        <input
          type="text"
          placeholder="Enter a video name"
          onChange={handleChange}
        />
        <p>{visibility ? video : "*".repeat(video.length)}</p>
        <button
          onClick={(e) => {
            setVideo((prevState) => ({
              ...prevState,
              visibility: !visibility,
            }));
          }}
        >
          Toggle Video
        </button>
      </div>
    </Fragment>
  );
};

export default SearchBar;
