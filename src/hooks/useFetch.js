import { useEffect, useState } from "react";

export default function useFetch(term) {
  const [state, setState] = useState({ data: "", loading: true });

  useEffect(() => {
    setState({ ...state, data: "", loading: true });
    fetch(
      `https://newsapi.org/v2/everything?pageSize=10&q=${term}&apiKey=d68d670f78734f3da20869b229b259a3`
    )
      .then((res) => res.json())
      .then((res) => {
        setState({ ...state, data: res, loading: false });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [term]);

  return { ...state };
}
