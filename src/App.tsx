import { useEffect } from "react";
import { api } from "./services/api";

export default function App() {
  useEffect(() => {
    api
      .get("/cards", { params: { rpp: 10, page: 1 } })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <h1>Cards Marketplace</h1>;
}
