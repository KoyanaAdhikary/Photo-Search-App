import React, { useState } from "react";
import searchPhotosApi from "../Service/unsplash";
import { createApi } from "unsplash-js";

export default function SearchPhoto() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const unsplash = createApi({
    accessKey: "J3iFg1GeC5eOHVEzUVG4CM6cFU6FxbF2rr8YTzGKChA",
  });
  const searchPhotos = async (e) => {
      e.preventDefault();
    // let res = await searchPhotosApi(query);
    // console.log(res);
    // setPics(res);
    unsplash.search
      .getPhotos({
        query: query,
      })
      .then((res) => {
        setPics(res.response.results);
     });
  };
  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <div className="searchbar">
          {" "}
          <label className="label" htmlFor="query">
            {" "}
            Search Pictures
          </label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder={`Enter text to search`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" id="submit" className="button">
            Search
          </button>
        </div>
        <div className="card-list">
          {pics.length > 0 ? (
            pics.map((pic) => (
              <div className="card" key={pic.id}>
                <img
                  className="card--image"
                  alt={pic.alt_description}
                  src={pic.urls.full}
                  width="50%"
                  height="50%"
                ></img>
              </div>
            ))
          ) : (
            <div className="no-data">No Pictures found!!</div>
          )}
        </div>
      </form>
    </>
  );
}
