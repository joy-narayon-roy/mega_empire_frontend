import { useState, useEffect } from "react";

//http://localhost:8080/api/clancapital/raidlog
function useClanInfo(tag, limit, after, before) {
  //tagName = tagName.replace("#", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);

        let url = new URL(
          `${
            process.env.NODE_ENV === "development"
              ? process.env.REACT_APP_DEV_SERVER
              : process.env.REACT_APP_SERVER
          }/api/clancapital/raidlog`
        );

        if (tag) {
          url.searchParams.append("clantag", tag);
        }
        if (limit) {
          url.searchParams.append("limit", limit);
        }
        if (after) {
          url.searchParams.append("after", after);
        }
        if (before) {
          url.searchParams.append("clantag", before);
        }

        const res = await fetch(url);
        const data = await res.json();
        if (res.status > 400) {
          throw Error(data.message);
        }
        setLoading(false);
        setData(data);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log("Error!");
        console.log(err);
      }
    }
    requestFetch();
  }, [tag, limit, before, after]);

  return {
    loading,
    error,
    data,
  };
}

export default useClanInfo;
