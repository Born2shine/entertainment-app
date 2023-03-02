import React, { useState } from "react";
import * as IMAGES from "../../assets/images";
import {
  HOME_ICON,
  MOVIE_ICON,
  NAVBOOKMARK_ICON,
  TVSERIES_ICON,
} from "../../assets/images/svgs";

const SideBar = ({ activeTab, setActiveTab, setInput }) => {
  // const [activeTab, setActiveTab] = useState("home");
  const handleMovieType = (type) => {
    setActiveTab(type);
    setInput('')
  };

  return (
    <>
      <div className="p-4 flex justify-between items-center bg-isDarkBlue md:fixed md:left-5 md:top-5 md:flex-col md:h-[94vh] md:rounded-xl md:py-6">
        <div className="flex gap-10 md:flex-col">
          <img className="w-fit h-fit" src={IMAGES.LOGO} alt="" />
          <div className="flex justify-between items-center gap-5 md:flex-col md:gap-8">
            <span
              className="cursor-pointer"
              onClick={() => handleMovieType("home")}
            >
              <HOME_ICON color={activeTab === "home" ? "#e4e8ec" : "#5a6993"} />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => handleMovieType("movie")}
            >
              <MOVIE_ICON
                color={activeTab === "movie" ? "#e4e8ec" : "#5a6993"}
              />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => handleMovieType("tvseries")}
            >
              <TVSERIES_ICON
                color={activeTab === "tvseries" ? "#e4e8ec" : "#5a6993"}
              />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => handleMovieType("bookmark")}
            >
              <NAVBOOKMARK_ICON
                color={activeTab === "bookmark" ? "#e4e8ec" : "#5a6993"}
              />
            </span>
          </div>
        </div>
        <img
          className="w-10 h-10 border-2 rounded-full"
          src={IMAGES.AVATAR}
          alt=""
        />
      </div>
    </>
  );
};

export default SideBar;
