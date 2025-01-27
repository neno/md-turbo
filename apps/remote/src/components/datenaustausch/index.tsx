import { invoices } from "../../../data/invoice-data.json";
import { DatenaustauschTable } from "@repo/md-ui";

export function Datenaustausch() {
  return (
    <DatenaustauschTable
      data={invoices.map((invoice) => ({
        ...invoice,
        id: invoice.id.toString(),
        status: invoice.status as "paid" | "unpaid",
      }))}
    />
  );
}

export default Datenaustausch;
