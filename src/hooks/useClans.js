import { useEffect, useState } from "react";
import cocReq from "../utilities/cocReq";

function useClan(tag) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    const url = `/api/v2/clans`;
    cocReq()
      .get(url)
      .then((res) => {
        const { data, status } = res;
        setLoading(false);
        setError(false);
        setData({ ...data, status });
      })
      .catch((err) => {
        const { data, status } = err.response;
        setError(true);
        setData({
          ...data,
          status,
        });
      });
    return () => {};
  }, []);
  return {
    loading,
    error,
    data,
  };
}

export default useClan;
