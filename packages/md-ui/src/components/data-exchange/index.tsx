import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataExchangeComponent } from "./data-exchange-component";

const queryClient = new QueryClient();

export function DataExchange() {
  return (
    <QueryClientProvider client={queryClient}>
      <h2>DataExchange - Remote</h2>
      <DataExchangeComponent />
    </QueryClientProvider>
  );
}

export default DataExchange;
