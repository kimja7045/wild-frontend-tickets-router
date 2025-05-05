import { useNavigate } from "react-router-dom";
import useUpdateTicketStatus from "../hooks/useUpdateTicketStatus";

import { Ticket } from "../types";

export default function TicketItem({ ticket }: { ticket: Ticket }) {
  const navigate = useNavigate();
  const updateTicketStatus = useUpdateTicketStatus();

  const handleClick = () => {
    updateTicketStatus({
      id: ticket.id,
      status: ticket.status === "open" ? "closed" : "open",
    });
  };

  const moveToTicketDetail = () => {
    navigate(`/tickets/${ticket.id}`);
  };

  return (
    <li onClick={moveToTicketDetail}>
      <div className="title">{ticket.title}</div>
      <div className="status">
        Status:
        <span>{ticket.status === "open" ? "Open" : "Closed"}</span>
      </div>
      <div className="comments">
        Comments:
        <span>{ticket.comments.length}</span>
      </div>
    </li>
  );
}
