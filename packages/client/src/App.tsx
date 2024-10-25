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

  return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>;
}

export default App;
