import React, { Fragment, useState } from "react";

const SearchBar = ({ onHandleSubmit }) => {
  const [{ video }, setVideo] = useState({
    video: "",
  });

  const handleChange = (e) => {
    const { value: video } = e.target;
    setVideo((prevState) => ({ ...prevState, video }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (video?.trim()) {
      onHandleSubmit(video);
    }
    setVideo((prevState) => ({ ...prevState, video: "" }));
  };

  return (
    <Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your search term"
            onChange={handleChange}
            value={video}
          />
          <button>Submit search</button>
        </form>
      </div>
    </Fragment>
  );
};

export default SearchBar;
