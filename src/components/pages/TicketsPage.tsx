import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import TicketList from "../TicketList";
import TicketForm from "../TicketForm";

export default function TicketsPage() {
  return (
    <>
      <ErrorBoundary fallback={<div>Error!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
      <TicketForm />
    </>
  );
}
