
type sidebarProps = {
  rows: number;
  columns: number;
};

export default function GridArea({ rows, columns }: sidebarProps) {

  const makeGridElements = () => {
    const gridElements = [];

    const totalGridArea = rows * columns;

    for (let i = 1; i <= totalGridArea; i++) {
      const elementName = i;
      gridElements.push(
        <div key={elementName} className="grid--element">
          <div className="viewport--element">
            <p className="element--text">{elementName}</p>
          </div>
        </div>
      );
    }
    return gridElements;
  };

  return (
    <section className="grid--container">
      <div
        className="grid--row"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {makeGridElements()}
      </div>
    </section>
  );
}
