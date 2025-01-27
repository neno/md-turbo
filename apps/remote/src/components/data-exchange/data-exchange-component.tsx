import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../../api/get-invoices";
import DataExchangeTable from "./data-exchange-table";

export function DataExchangeComponent() {
  const { data, isPending } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (data && data?.length > 0) {
    return <DataExchangeTable data={data} />;
  }

  return <p>No data available</p>;
}
