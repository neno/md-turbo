// import { invoices } from "../../../data/invoice-data.json";
import { DatenaustauschTable } from "@repo/md-ui";
// import { invoiceListingSchema } from "@repo/types/invoice";
import useInvoices from "@repo/store/store";

export function Datenaustausch() {
  const [invoices, setInvoices] = useInvoices();
  // const { data, error } = invoiceListingSchema.safeParse(invoices);

  // if (error) {
  //   throw error;
  // }

  return <DatenaustauschTable data={invoices} />;
}

export default Datenaustausch;
