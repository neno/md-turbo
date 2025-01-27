import "./assets/lara-dark-green/theme.css";
import "./App.css";
import { Datenaustausch } from "./components/datenaustausch";
// import { DataExchange, DatenaustauschTable } from "@repo/md-ui";
// import { invoices } from "../data/invoice-data.json";

function App() {
  return (
    <>
      <h1>Vite Remote</h1>
      <Datenaustausch />
      {/* <DataExchange /> */}
      {/* <DatenaustauschTable
        data={invoices.map((invoice) => ({
          ...invoice,
          id: invoice.id.toString(),
          status: invoice.status as "paid" | "unpaid",
        }))}
      /> */}
    </>
  );
}

export default App;
