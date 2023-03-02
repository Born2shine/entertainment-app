import React from 'react'
import { TbMovie } from "react-icons/tb";
import { BsEasel } from "react-icons/bs";
import { FiBookmark } from "../../../assets/images/icons";

const BookmarkedTVSeries = ({BookmarkTVSeries}) => {
  return (
	<section>
      <h3 className="py-4 font-normal mt-4">TV Series</h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {/* single recommeded movie */}
        {BookmarkTVSeries?.map((movie, index) => (
          <div key={index} className="relative cursor-pointer transition-transform duration-1000 hover:-rotate-6">
            <div className="relative">
              <img
                src={movie?.thumbnail?.regular?.large}
                alt=""
                loading="lazy"
                className="rounded-md opacity-[0.7] transition-transform duration-1000 hover:animate-pulse"
              />
              <span className="absolute top-3 right-3 bg-gray-600 w-6 h-6 rounded-full grid place-content-center text-xs cursor-pointer hover:bg-gray-300 hover:text-gray-600">
                <FiBookmark />
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-center font-thin text-[14px] gap-3 text-gray-300">
                <span className="relative">
                  {movie.year}
                  <span className="w-[2px] h-[2px] rounded-full bg-gray-200 content-none absolute top-1/2 ml-1"></span>
                </span>
                <span className="flex items-center gap-1">
                  <span>
                    {movie.category === "Movie" && <TbMovie />}
                    {movie.category === "TV Series" && <BsEasel />}
                  </span>
                  <span>{movie.category}</span>
                </span>
                <span className="relative">
                  <span
                    className={`w-[2px] h-[2px] rounded-full bg-gray-200 content-none absolute top-1/2 right-2.5 ${
                      movie.rating !== "E" && "mr-2"
                    }`}
                  ></span>
                  {movie.rating}
                </span>
              </div>
              <h3 className="text-sm pt-0">{movie.title}</h3>
            </div>
          </div>
        ))}
        {/* end single recommeded movie */}
      </div>
    </section>
  )
}

export default BookmarkedTVSeries