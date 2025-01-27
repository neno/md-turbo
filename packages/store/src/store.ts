import { atom, useAtom } from "jotai";
import { data } from "./invoice-data.json";
import { InvoiceListing, invoiceListingSchema } from "@repo/types/invoice";

const result = invoiceListingSchema.safeParse(data);
if (!result.success) {
  throw new Error("Invalid invoice data");
}

export const invoicesAtom = atom<InvoiceListing>(result.data);
const useInvoices = () => useAtom(invoicesAtom);

export default useInvoices;
