import "./assets/lara-dark-green/theme.css";
import "./App.css";
import { InvoiceForm } from "./components/invoice-form";
import { InvoiceForm as InvoiceFormType } from "@repo/types/invoice";

function App() {
  const myFormAction = (data: InvoiceFormType) => {
    console.log(data);
  };
  return (
    <>
      <h1>MD UI</h1>
      <InvoiceForm formAction={myFormAction} />
    </>
  );
}

export default App;
