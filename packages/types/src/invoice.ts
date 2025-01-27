import { z } from "zod";

export const invoiceSchema = z.object({
  id: z.number(),
  code: z.string(),
  customer: z.string(),
  product: z.string(),
  price: z.number(),
  quantity: z.number(),
  total: z.number(),
  status: z.enum(["paid", "unpaid"]),
});
export type Invoice = z.infer<typeof invoiceSchema>;

export const invoiceListingSchema = z.array(invoiceSchema);
export type InvoiceListing = z.infer<typeof invoiceListingSchema>;

export const invoiceFormSchema = invoiceSchema.omit({
  id: true,
  total: true,
});
export type InvoiceForm = z.infer<typeof invoiceFormSchema>;
