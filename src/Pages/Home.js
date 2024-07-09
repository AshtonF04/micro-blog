import BlogList from "../Components/BlogList";
import useFetch from '../Hooks/useFetch'

import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const data = useFetch("http://localhost:8000/blogs")

  return (
    <div className="mx-4 mt-4 lg:mx-auto">
      <h2 className="text-xl font-bold">Homepage</h2>
      <div className="py-4">
        {!data && <div>Loading...</div>}
        {data && <BlogList blogs={data} />}
      </div>
    </div>
  );
};

export default Home;
