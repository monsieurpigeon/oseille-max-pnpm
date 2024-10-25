import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>{import.meta.env.VITE_TEST_VAR}</div>
      <div>MODE : {import.meta.env.MODE}</div>
      <div>SSR : {import.meta.env.SSR ? "SSR" : "PAS SSR"}</div>
      <div>PROD : {import.meta.env.PROD ? "PRODUCTION" : "PAS PRODUCTION"}</div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
