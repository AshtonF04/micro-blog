import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch blogs.f");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((e) => {
            console.log(e.message);
          });
      }, []);

    return data
}

export default useFetch