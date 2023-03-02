import React, { useState, lazy, useTransition } from "react";
import { FiSearch } from "../../assets/images/icons";
import BookmarkMovie from "../../components/bookmarked/movies";
import BookmarkedTVSeries from "../../components/bookmarked/tvseries";
import Movie from "../../components/movies";
import SideBar from "../../components/navs/SideBar";
import Searched from "../../components/searched";
import Trending from "../../components/trending";
import { movies } from "../../utils/data.js";
import Recommended from "./../../components/recommended/index";
import TVSeries from "./../../components/tvseries/index";
import { wait } from "../../utils/helpers";

// const Movie = lazy(() => import('../Home'))

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [input, setInput] = useState("");
  const [sortedMovies, setSortedMovies] = useState([]);
  const [isPending, startTransition] = useTransition();

  const FilteredTrendingMovies = () =>
    movies?.filter((movie) => movie.isTrending === true);
  const FilteredRecommededMovies = () =>
    movies?.filter((movie) => movie.isTrending === false);
  const FilteredMovies = () =>
    movies?.filter((movie) => movie.category === "Movie");
  const FilteredTVSeries = () =>
    movies?.filter((movie) => movie.category === "TV Series");
  const FilteredBookmarkMovies = () =>
    movies?.filter((movie) => movie.isBookmarked === true);
  const FilteredBookmarkTVSeries = () =>
    movies?.filter(
      (movie) => movie.isBookmarked === true && movie.category === "TV Series"
    );

  const TrendingMovies = FilteredTrendingMovies();
  const RecommendedMovies = FilteredRecommededMovies();
  const Movies = FilteredMovies();
  const TVSeriesMovies = FilteredTVSeries();
  const BookmarkMovies = FilteredBookmarkMovies();
  const BookmarkTVSeries = FilteredBookmarkTVSeries();
  // console.log(BookmarkTVSeries)

  const handleChange = (e) => {
    setInput(e.target.value);
    if (activeTab === "home") {
        startTransition(() => {
          let foundMovies = movies?.filter((movie) =>
            movie.title.toLowerCase().includes(input.toLowerCase())
          );
          setSortedMovies(foundMovies);
        });
    }
    if (activeTab === "movie") {
      startTransition(() => {
        let foundMovies = Movies?.filter((movie) =>
          movie.title.toLowerCase().includes(input.toLowerCase())
        );
        setSortedMovies(foundMovies);
      });
    }
    if (activeTab === "tvseries") {
      startTransition(() => {
        let foundMovies = TVSeriesMovies?.filter((movie) =>
          movie.title.toLowerCase().includes(input.toLowerCase())
        );
        setSortedMovies(foundMovies);
      });
    }
    if (activeTab === "bookmark") {
      startTransition(() => {
        let foundMovies = BookmarkTVSeries?.filter((movie) =>
          movie.title.toLowerCase().includes(input.toLowerCase())
        );
        setSortedMovies(foundMovies);
      });
    }
  };

  return (
    <main className="h-screen w-screen overflow-auto bg-isDark text-isWhite-100">
      <section className="md:flex">
        <SideBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setInput={setInput}
        />
        <section className="p-4 md:w-[92%] md:ml-auto">
          <div className="flex items-center gap-3 md:fixed md:top-0 md:py-5 md:z-50 md:w-full md:bg-isDark">
            <span>
              <FiSearch />
            </span>
            <input
              type="text"
              className="bg-transparent border-none outline-none w-full font-thin text-isGray text-sm"
              placeholder="Search for movies or TV series"
              value={input}
              onChange={handleChange}
            />
          </div>

          <div className="z-10 md:mt-8">
            {activeTab === "home" && input.length === 0 && (
              <>
                <Trending TrendingMovies={TrendingMovies} />
                <Recommended RecommendedMovies={RecommendedMovies} />
              </>
            )}
            {activeTab === "movie" && input.length === 0 && (
              <>
                <Movie Movies={Movies} />
              </>
            )}
            {activeTab === "tvseries" && input.length === 0 && (
              <>
                <TVSeries TVSeriesMovies={TVSeriesMovies} />
              </>
            )}
            <div className="mt-4">{isPending && "Loading..."}</div>
            {input.length > 0 && (
              <>
                <Searched SearchedMovies={sortedMovies} Sortby={input} />
              </>
            )}
            {activeTab === "bookmark" && input.length === 0 && (
              <>
                <BookmarkMovie BookmarkMovies={BookmarkMovies} />
                <BookmarkedTVSeries BookmarkTVSeries={BookmarkTVSeries} />
              </>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
