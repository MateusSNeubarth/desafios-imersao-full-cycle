import { TicketKind } from '.prisma/client/index';

export class ReserveSpotRequest {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
