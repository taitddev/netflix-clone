import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ReactPaginate from "react-paginate";
import { AiOutlineSearch } from "react-icons/ai";

import useDebounce from "../hooks/useDebounce";
import MovieCard from "../components/movie/MovieCard";
import { tmdbAPI, fetcher } from "../config";

import { POPULAR, ITEMS_PER_PAGE } from "../utils/constants";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const MoviePage = () => {
  const [filter, setFilter] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);

  const [url, setUrl] = useState(tmdbAPI.getMovieList(POPULAR, pageIndex));

  const filterDebounce = useDebounce(filter, 1000);

  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, pageIndex));
    } else {
      setUrl(tmdbAPI.getMovieList(POPULAR, pageIndex));
    }
  }, [filterDebounce, pageIndex]);

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / ITEMS_PER_PAGE));
  }, [data, itemOffset]);

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % data.total_results;
    setItemOffset(newOffset);
    setPageIndex(event.selected + 1);
  };

  return (
    <div className="container">
      <div className="flex mb-10 relative">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 outline-none rounded-lg"
            placeholder="Nhập tên phim ..."
            onChange={handleInputChange}
          ></input>
        </div>

        <button className="p-4 bg-primary absolute top-0 bottom-0 right-0 rounded-r-lg">
          <AiOutlineSearch fontSize={24} />
        </button>
      </div>

      {loading ? (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent mx-auto animate-spin"></div>
      ) : (
        <div className="grid grid-cols-4 gap-10 mb-10">
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      )}

      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<BsChevronRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<BsChevronLeft />}
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
