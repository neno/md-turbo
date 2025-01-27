import { z } from "zod";

export const invoiceSchema = z.object({
  id: z.string(),
  code: z.string(),
  customer: z.string(),
  product: z.string(),
  price: z.number(),
  quantity: z.number(),
  total: z.number(),
  due: z.string(),
  status: z.enum(["paid", "unpaid"]),
});
export type Invoice = z.infer<typeof invoiceSchema>;
