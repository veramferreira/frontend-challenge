import { ChangeEvent, useState } from "react";
import Grid from "./GridArea";

type sidebarProps = {
  rows: number;
  columns: number;
  handleRowInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleColumnInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Sidebar({
  rows,
  columns,
  handleRowInput,
  handleColumnInput,
}: sidebarProps) {
  return (
    <section className="sidebar">
      <div className="inputs">
        <label htmlFor="rows">Rows</label>
        <div className="rowInput">
          <input
            type="range"
            id="rows"
            min={1}
            max={10}
            step={1}
            value={rows}
            onChange={handleRowInput}
          />
          <span>{rows}</span>
        </div>
        <label htmlFor="columns">Columns</label>
        <div className="columnInput">
          <input
            type="range"
            id="columns"
            min={1}
            max={10}
            step={1}
            value={columns}
            onChange={handleColumnInput}
          />
          <span>{columns}</span>
        </div>
      </div>
    </section>
  );
}
