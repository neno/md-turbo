import { invoices } from "../../../data/invoice-data.json";
import { DatenaustauschTable } from "@repo/md-ui";
import { invoiceListingSchema } from "@repo/types/invoice";

export function Datenaustausch() {
  const { data, error } = invoiceListingSchema.safeParse(invoices);

  if (error) {
    throw error;
  }

  return <DatenaustauschTable data={data} />;
}

export default Datenaustausch;
