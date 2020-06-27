import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class InvitedToSquadron extends JournalEvent {
  event: JournalEvents.invitedToSquadron;
  SquadronName: string;
}
