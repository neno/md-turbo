import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

import {
  InvoiceForm as InvoiceFormType,
  invoiceFormSchema,
} from "@repo/types/invoice";
import styles from "./invoice-form.module.css";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";

export function InvoiceForm({
  formAction,
}: {
  formAction: (formData: InvoiceFormType) => void;
}) {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<InvoiceFormType>({
    resolver: zodResolver(invoiceFormSchema),
  });

  const onSubmit: SubmitHandler<InvoiceFormType> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    formAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <ol className={styles.formFieldsList}>
        <li className={styles.formField}>
          <Controller
            control={control}
            name="code"
            render={({ field }) => (
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="code">
                  Code
                </label>
                <InputText {...field} id="code" />
              </div>
            )}
          />
          {errors.code && <p className="field-error">{errors.code.message}</p>}
        </li>
        <li className={styles.formField}>
          <Controller
            control={control}
            name="customer"
            render={({ field }) => (
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="customer">
                  Customer
                </label>
                <InputText {...field} id="customer" />
              </div>
            )}
          />
          {errors.customer && (
            <p className="field-error">{errors.customer.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <Controller
            control={control}
            name="product"
            render={({ field }) => (
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="product">
                  Product
                </label>
                <InputText {...field} id="product" />
              </div>
            )}
          />
          {errors.product && (
            <p className="field-error">{errors.product.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required.", min: 0, max: 250000 }}
            render={({ field, fieldState }) => (
              <div className={styles.inputGroup}>
                <label
                  htmlFor={field.name}
                  className={
                    (classNames({ "p-error": errors.price }), styles.label)
                  }
                >
                  Price
                </label>
                <InputNumber
                  id={field.name}
                  ref={field.ref}
                  value={field.value}
                  onBlur={field.onBlur}
                  onValueChange={(e) => field.onChange(e)}
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                  inputClassName={classNames({ "p-invalid": fieldState.error })}
                />
              </div>
            )}
          />
          {errors.price && (
            <p className="field-error">{errors.price.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <Controller
            name="quantity"
            control={control}
            rules={{ required: "quantity is required.", min: 1, max: 100 }}
            render={({ field, fieldState }) => (
              <div className={styles.inputGroup}>
                <label
                  htmlFor={field.name}
                  className={
                    (classNames({ "p-error": errors.price }), styles.label)
                  }
                >
                  Quantity
                </label>
                <InputNumber
                  id={field.name}
                  ref={field.ref}
                  value={field.value}
                  onBlur={field.onBlur}
                  onValueChange={(e) => field.onChange(e)}
                  inputClassName={classNames({ "p-invalid": fieldState.error })}
                />
              </div>
            )}
          />
          {errors.quantity && (
            <p className="field-error">{errors.quantity.message}</p>
          )}
        </li>
        <li className={styles.formField}>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="status">
                  Status
                </label>
                <Dropdown
                  {...field}
                  options={["paid", "unpaid"]}
                  placeholder="Select status …"
                />
              </div>
            )}
          />
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
