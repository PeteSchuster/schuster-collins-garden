import { useEffect } from "react";

type PlantProps = {
  name: string;
  qty: number;
  color: string;
  nickname: string;
  height: string;
  link: string;
  track: (name: string) => void;
}

const Plant: React.FC<PlantProps> = ({ name, qty, nickname, color, height, link, track }) => {
  useEffect(() => {
    track(name);
  }, [name]);

  return (
    <div>
      <h2>{name}</h2>
      <a href={link}>Link</a>
    </div>
  );
};

export default Plant;
