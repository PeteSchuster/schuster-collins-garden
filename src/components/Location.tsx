import { useState } from "react";

import Plant, { PlantData } from "./Plant";
import { Plot } from "./Tile";

type TrackedPlant = Record<string, number>;

type LocationProps = {
  plantRows: string[][];
  plants: PlantData[];
}

const Location: React.FC<LocationProps> = ({ plantRows, plants }) => {
  const [trackedPlants, setTrackedPlants] = useState<TrackedPlant>({});

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
      <div className="plot">
        {plantRows.map((row) => (
          <div className="plot__row">
            {row.map((plantName, index) => {
              // TODO: transform plants to be object or Map for
              // instant lookups
              const plant = plants.find(plant => plant.name === plantName);

              if (!plant) {
                return false;
              }

              return (
                <Plot>
                  <Plant key={index} track={track} {...plant} />
                </Plot>
              );
            })}
          </div>
        ))}
      </div>
  );
};

export default Location;
