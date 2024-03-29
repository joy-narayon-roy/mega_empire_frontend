import { useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [data, setData] = useState(null);

  fetch(url)
    .then((res) => {
      if (res.status > 400) {
        throw Error(data.message);
      } else {
        res.json();
      }
    })
    .then((dat) => {
      setData(dat);
      setLoading(false);
    })
    .catch((err) => {
      setData(null);
      setLoading(false);
      setErr(true);
      console.log(err);
    });
  console.log(data);
  return { loading, data, err };
}
