import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import {
  InvoiceForm as InvoiceFormType,
  invoiceFormSchema,
} from "@repo/types/invoice";
import styles from "./invoice-form.module.css";
import { InputNumber } from "primereact/inputnumber";

export function InvoiceForm({
  formAction,
}: {
  formAction: (formData: InvoiceFormType) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InvoiceFormType>({
    defaultValues: {
      code: "",
      customer: "",
      product: "",
      price: 0,
      quantity: 0,
    },
    resolver: zodResolver(invoiceFormSchema),
  });

  const onSubmit: SubmitHandler<InvoiceFormType> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(data);
    formAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ol className={styles.formFieldsList}>
        <li className={styles.formField}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="code">
              Code
            </label>
            <InputText {...register("code")} id="code" type="text" />
          </div>

          {errors.code && <p className="field-error">{errors.code.message}</p>}
        </li>
        <li className={styles.formField}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="customer">
              Customer
            </label>
            <InputText {...register("customer")} id="customer" type="text" />
          </div>
          {errors.customer && (
            <p className="field-error">{errors.customer.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="product">
              Product
            </label>
            <InputText {...register("product")} type="text" />
          </div>
          {errors.product && (
            <p className="field-error">{errors.product.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="price">
              Price
            </label>
            <input {...register("price")} id="price" type="number" />
          </div>
          {errors.price && (
            <p className="field-error">{errors.price.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="quantity">
              Quantity
            </label>
            <input {...register("quantity")} id="quantity" type="number" />
          </div>
          {errors.quantity && (
            <p className="field-error">{errors.quantity.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="status">
              Status
            </label>
            <InputText {...register("status")} type="text" id="status" />
          </div>
          {errors.status && (
            <p className="field-error">{errors.status.message}</p>
          )}
        </li>
      </ol>
      <div>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
}
