import { ChangeEvent, useState } from "react";
import Sidebar from "../components/Sidebar";
import GridArea from "../components/GridArea";

/**
 * Burger Component
 */
export default function Burger() {
  const [isToggledOn, setIsToggledOn] = useState(false);
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);

  const handleRowInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRows(value);
  };

  const handleColumnInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setColumns(value);
  };

  const handleClick = () => {
    console.log("clicked");
    setIsToggledOn(!isToggledOn);
  };

  return (
    <section className="App">
      <div className="burger--menu" onClick={handleClick}>
        <svg className="Icon" viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
      {isToggledOn && (
        <Sidebar
          rows={rows}
          columns={columns}
          handleRowInput={handleRowInput}
          handleColumnInput={handleColumnInput}
        />
      )}
      <div className="grid--area">
        <GridArea rows={rows} columns={columns} />
      </div>
    </section>
  );
}
