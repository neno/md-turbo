import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Invoice } from "@repo/types/invoice";
import { USDollar } from "@repo/utils/format";

const priceBodyTemplate = (invoice: Invoice) => {
  return USDollar.format(invoice.price);
};

export function DatenaustauschTable({ data }: { data: Invoice[] }) {
  return (
    <div className="card">
      <DataTable
        value={data}
        sortField="price"
        sortOrder={-1}
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        <Column
          field="customer"
          header="Customer"
          sortable
          style={{ width: "30%" }}
        ></Column>
        <Column
          field="product"
          header="Product"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="price"
          header="Price"
          body={priceBodyTemplate}
          sortable
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="quantity"
          header="Quantity"
          sortable
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="total"
          header="Total"
          body={priceBodyTemplate}
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="status"
          header="Status"
          sortable
          style={{ width: "10%" }}
        ></Column>
      </DataTable>
    </div>
  );
}

export default DatenaustauschTable;
