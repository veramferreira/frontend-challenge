import { useEffect, useRef, useState } from "react";

type sidebarProps = {
  rows: number;
  columns: number;
};

export default function GridArea({ rows, columns }: sidebarProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const { width, height } = gridRef.current.getBoundingClientRect();
        const vpWidth = width / columns;
        const vpHeight = height / rows;
        setViewportSize({ width: vpWidth, height: vpHeight });
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    
    if (gridRef.current) {
      resizeObserver.observe(gridRef.current);
    }

    handleResize();

    return () => {
      if (gridRef.current) {
        resizeObserver.unobserve(gridRef.current);
      }
    };
  }, [rows, columns]);

  const makeGridElements = () => {
    const gridElements = [];
    const totalGridArea = rows * columns;

    for (let i = 1; i <= totalGridArea; i++) {
      gridElements.push(
        <div key={i} className="grid--element">
          <div className="viewport--element">
            <p className="element--text">{Math.floor(viewportSize.width)} </p>
            <p className="element--text">x</p>
            <p className="element--text"> {Math.floor(viewportSize.height)}</p>
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
        ref={gridRef}
      >
        {makeGridElements()}
      </div>
    </section>
  );
}
