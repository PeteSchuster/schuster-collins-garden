type TileProps = {
  offsetX?: number;
  offsetY?: number;
}

const size = -32;

const Tile: React.FC<TileProps> = ({ offsetX = 0, offsetY = 0 }) => {
  const style = {
    backgroundPosition: `${offsetX * size}px ${offsetY * size}px`
  };

  return (
    <div className="tile tile--sprite" style={style} />
  );
};

export const Ground = () => <Tile offsetX={2} offsetY={2} />;
export const EmptyRow = () => <div className="plot__row"><Ground /><Ground /><Ground /></div>;

export const Plot: React.FC = ({ children }) => (
  <div className="plot">
    <EmptyRow />
    <div className="plot__row">
      <Ground />
      {children}
      <Ground />
    </div>
    <EmptyRow />
  </div>
);

export default Tile;
