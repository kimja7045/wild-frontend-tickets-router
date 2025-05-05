import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { TICKET_QUERY_KEY } from "../contants";
import { fetchTicket } from "../api";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function TicketDetailPage() {
  const { ticketId } = useParams();
  const { data: ticket } = useSuspenseQuery({
    queryKey: ["ticket", TICKET_QUERY_KEY],
    queryFn: () => fetchTicket({ ticketId: ticketId as string }),
  });

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <ErrorBoundary fallback={<div>Error!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="ticket-detail">
          <div className="title">{ticket.title}</div>
          <div className="description">{ticket.description}</div>
          <div className="status">{ticket.status}</div>
          <div className="comment-count">
            Comments: {ticket.comments.length}
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
