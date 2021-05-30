import { createApi } from "unsplash-js";


const unsplash = createApi({
    accessKey: "J3iFg1GeC5eOHVEzUVG4CM6cFU6FxbF2rr8YTzGKChA",
  });
const searchPhotosApi = (query) => {
    unsplash.search
      .getPhotos({
        query: query,
      })
      .then((res) => {
          console.log(res,res.response.results,"????")
        return res.response.results;
      })
      .catch(err=> console.error(err));
  };

  export default searchPhotosApi;