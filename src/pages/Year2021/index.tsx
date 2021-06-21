import { useEffect, useState } from "react";

import { PlantData } from "../../components/Plant";
import Location from "../../components/Location";
import PlantsMock from "../../mock/plants.json";
import { leftGate, rightGate } from "./data";


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
  const [plants, setPlants] = useState<PlantData[]>([]);
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

      <h3>Left Gate</h3>
      <Location plantRows={leftGate} plants={plants} />
      
      <h3>Right Gate</h3>
      <Location plantRows={rightGate} plants={plants} />
      
    </div>
  );
};

export default Year2021;
