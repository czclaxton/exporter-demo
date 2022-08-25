import "../index.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import { useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import * as Utils from "./utils";

const DataTableDemo = () => {
  const dt = useRef(null);

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };
  return (
    <div>
      <div className="card">
        <h5>Export</h5>

        <Tooltip target=".export-buttons>button" position="bottom" />
        <DataTable
          ref={dt}
          value={Utils.products}
          header={
            <div className="flex align-items-center export-buttons">
              <Button
                type="button"
                icon="pi pi-file-pdf"
                onClick={Utils.exportPdf}
                className="p-button-warning mr-2"
                data-pr-tooltip="PDF"
              />
              <Button
                type="button"
                icon="pi pi-file-excel"
                onClick={Utils.exportExcel}
                className="p-button-success mr-2"
                data-pr-tooltip="XLS"
              />
              <Button
                type="button"
                icon="pi pi-file"
                onClick={() => exportCSV(false)}
                className="mr-2"
                data-pr-tooltip="CSV"
              />
            </div>
          }
          responsiveLayout="scroll"
        >
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableDemo;
