import { TicketKind } from '.prisma/client/index';

export class ReserveSpotDto {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
