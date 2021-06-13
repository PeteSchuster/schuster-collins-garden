import { useEffect, useState } from "react";

import Plant from "../components/Plant";
import { Plot } from "../components/Tile";
import PlantsMock from "../mock/plants.json";

// TODO use service worker?
// Add to localstorage?
const getSheetUrl = () => {
  var query_params = new URLSearchParams();

  return (
    "https://sheet2api.com/v1/buZzH9esQOyx/perennial-garden-data/Plants?" + query_params
  );
};

type TrackedPlant = Record<string, number>;

const Year2021 = () => {
  const [plants, setPlants] = useState([]);
  const [trackedPlants, setTrackedPlants] = useState<TrackedPlant>({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const url = getSheetUrl();
    try {
      // const data = await fetch(url).then((response) => response.json());
      const data = PlantsMock as [];
      setPlants(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const track = (name: string): void => {
    let count = 1;

    if (trackedPlants[name]) {
      count += trackedPlants[name];
    }

    const updatedPlant: TrackedPlant = {};
    updatedPlant[name] = count;

    setTrackedPlants(previousState => ({ ...previousState, ...updatedPlant }));
  };

  return (
    <div>
      <h1>2021</h1>

      {loading && "loading"}

      {Object.keys(trackedPlants).map(name => {
        const qty = trackedPlants[name];
        
        return (<span>{name}: {qty}</span>);
      })}

      <h2>Locations</h2>

      <div className="plants">
        {plants.map((plant, key) => (
          <Plot>
            <Plant key={key} track={track} {...plant} />
          </Plot>
        ))}
      </div>
      
    </div>
  );
};

export default Year2021;
