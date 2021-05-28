import { useEffect } from "react";

const Plant = ({ name, qty, nickname, color, height, link, track }) => {
  useEffect(() => {
    track(name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <a href={link}>Link</a>
    </div>
  );
};

export default Plant;
