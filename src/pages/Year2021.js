import { useEffect, useState } from "react";

import Plant from "../components/Plant";

const getSheetUrl = () => {
  var query_params = new URLSearchParams();

  return 'https://sheet2api.com/v1/buZzH9esQOyx/perennial-garden-data/Plants?' + query_params;
};



const Year2021 = () => {
  const [ plants, setPlants ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(async () => {
    const url = getSheetUrl();    
    try {
      const data = await fetch(url).then(response => response.json());
      setPlants(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <h1>2021</h1>

      {loading && "loading"}
      {plants.map(plant => <Plant {...plant} />)}
    </div>
  );
};

export default Year2021;
