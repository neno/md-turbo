import { z } from "zod";
import { Invoice, invoiceSchema } from "../types/invoice";

export async function getInvoices(): Promise<Invoice[]> {
  const res = await fetch(`http://localhost:8080/invoices`);
  const invoices = await res.json();

  // Validate data type
  const schema = z.array(invoiceSchema);
  const { data, error } = schema.safeParse(invoices);

  if (error) {
    throw error;
  }

  return data;
}
