import { useEffect, useState } from "react";

import Plant from "../components/Plant";

const getSheetUrl = () => {
  var query_params = new URLSearchParams();

  return (
    "https://sheet2api.com/v1/buZzH9esQOyx/perennial-garden-data/Plants?" +
    query_params
  );
};

const Year2021 = () => {
  const [plants, setPlants] = useState([]);
  const [trackedPlants, setTrackedPlants] = useState({});
  const [loading, setLoading] = useState(true);

  console.log({ trackedPlants });

  const getData = async () => {
    const url = getSheetUrl();
    try {
      const data = await fetch(url).then((response) => response.json());
      setPlants(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const track = (name) => {
    let count = 1;

    if (trackedPlants[name]) {
      count += trackedPlants[name];
    }

    const updatedPlant = {};
    updatedPlant[name] = count;

    const payload = {
      ...trackedPlants,
      ...updatedPlant,
    };

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

      {plants.map((plant, key) => (
        <Plant key={key} track={track} {...plant} />
      ))}
    </div>
  );
};

export default Year2021;
