const Water = ({ water, unit }: { water: number; unit: string }) => {
  return (
    <div className="bg-gray-2 h-full w-full">
      <div>
        <h3>{water}</h3>
        <span>{unit}</span>
      </div>
    </div>
  );
};

export default Water;
